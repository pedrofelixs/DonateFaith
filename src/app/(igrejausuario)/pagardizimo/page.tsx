"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const PagarDizimo = () => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get("code");

  const [userId, setUserId] = useState<number | null>(null);
  const [churchId, setChurchId] = useState<number | null>(null);

  // Decode token and get userId
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded: any = jwtDecode(token);
      const id = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];
      setUserId(parseInt(id));
    }
  }, []);

  // Fetch churchId from code
  useEffect(() => {
    if (!code) return;

    const fetchChurchId = async () => {
      try {
        const res = await axios.get(`http://localhost:5289/api/church/code/${code}`);
        setChurchId(res.data.id);
      } catch (err) {
        console.error("Erro ao buscar igreja:", err);
      }
    };

    fetchChurchId();
  }, [code]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || !churchId) {
      setError("Informações de usuário ou igreja não encontradas.");
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Você precisa estar logado para pagar o dízimo.");
        return;
      }

      await axios.post(
        "http://localhost:5289/api/Tithe/give",
        {
          id: 0,
          amount: amount,
          userId: userId,
          churchId: churchId,
          date: new Date().toISOString(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess(true);
      setAmount(0);
    } catch (err) {
      console.error(err);
      setError("Erro ao registrar dízimo. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Pagar Dízimo
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
      >
        <label className="block mb-4">
          <span className="text-gray-700 dark:text-gray-200">Valor do dízimo (R$):</span>
          <input
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => {
            const val = e.target.value;
            setAmount(val === "" ? 0 : parseFloat(val));
            }}
            required
            className="mt-2 block w-full rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
        </label>

        {error && (
          <p className="text-red-500 mb-4">{error}</p>
        )}

        {success && (
          <p className="text-green-600 mb-4">Dízimo registrado com sucesso!</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          {loading ? "Processando..." : "Confirmar Pagamento"}
        </button>
      </form>

      <button
        onClick={() => router.back()}
        className="mt-6 text-blue-600 hover:underline"
      >
        Voltar
      </button>
    </main>
  );
};

export default PagarDizimo;
