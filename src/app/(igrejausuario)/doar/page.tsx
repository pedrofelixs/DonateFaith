"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const DoarPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const donationId = searchParams.get("id");
  const churchCode = searchParams.get("code");

  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("pix");
  const [churchId, setChurchId] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!churchCode || !token) return;

    axios.get(`http://localhost:5289/api/church/code/${churchCode}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => setChurchId(res.data.id))
    .catch(err => {
      console.error(err);
      alert("Erro ao buscar dados da igreja.");
    });
  }, [churchCode]);

  const handleDonate = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Você precisa estar logado para doar.");
      return;
    }

    const decoded: any = jwtDecode(token);
    const userId = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"];

    if (!churchId) {
      alert("Informações da igreja ainda não carregadas.");
      return;
    }
    if (!donationId) {
    alert("Doação inválida");
    return;
    }
    const payload = {
      name: "",
      goalsAmount: 0,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
      description: "",
      userId: parseInt(userId),
      churchId: churchId,
      parentDonationId: parseInt(donationId),
    };

    axios.post("http://localhost:5289/api/Donation/checkout", payload, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(() => {
      alert("Doação realizada com sucesso!");
      router.push(`/igreja?code=${churchCode}`);
    })
    .catch((err) => {
      console.error(err);
      alert("Erro ao realizar a doação.");
    });
  };

  if (!donationId || !churchCode) {
    return <p className="text-center mt-10 text-red-500">Parâmetros ausentes na URL.</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-4">
      <h1 className="text-2xl font-bold mb-6">Realizar Doação</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
        <label className="block mb-4">
          <span className="text-sm">Valor da Doação (R$)</span>
          <input
            type="number"
            min="0"
            step="0.01"
            className="mt-1 w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>

        <label className="block mb-6">
          <span className="text-sm">Método de Pagamento</span>
          <select
            className="mt-1 w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="pix">Pix</option>
            <option value="creditcard">Cartão de Crédito</option>
          </select>
        </label>

        <button
          onClick={handleDonate}
          className="w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Doar
        </button>
      </div>
    </div>
  );
};

export default DoarPage;
