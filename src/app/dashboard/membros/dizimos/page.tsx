"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

interface Tithe {
  id: number;
  amount: number;
  userId: number;
  churchId: number;
  date: string;
}

interface User {
  id: number;
  fullName: string;
  email: string;
}

export default function TithesPage() {
  const [tithes, setTithes] = useState<Tithe[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [churchId, setChurchId] = useState<number | null>(null);
  const [pastorId, setPastorId] = useState<number | null>(null);

  // Decodifica o token e busca a igreja do pastor
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const id = parseInt(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
        setPastorId(id);

        fetch(`http://localhost:5289/api/church/pastor/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            if (!res.ok) throw new Error("Erro ao buscar igreja");
            return res.json();
          })
          .then((data) => {
            setChurchId(data.id);
          })
          .catch((err) => {
            console.error("Erro ao buscar igreja:", err);
            setError("Erro ao buscar igreja");
          });
      } catch (err) {
        console.error("Erro ao decodificar token:", err);
        setError("Token inválido");
      }
    } else {
      setError("Token não encontrado");
    }
  }, []);

  // Busca o nome do usuário pelo ID, com cache
  const fetchUser = async (userId: number) => {
    const token = localStorage.getItem("token");
    if (users[userId]) return;
    try {
      const res = await fetch(`http://localhost:5289/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token || ""}` },
      });
      if (res.ok) {
        const userData = await res.json();
        setUsers((prev) => ({ ...prev, [userId]: userData }));
      } else {
        console.warn("Usuário não encontrado:", userId);
      }
    } catch (err) {
      console.error("Erro ao buscar usuário:", err);
    }
  };

  // Busca os dízimos
  const fetchTithes = async () => {
    const token = localStorage.getItem("token");
    if (!churchId) return;

    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:5289/api/Tithe/church/${churchId}`, {
        headers: { Authorization: `Bearer ${token || ""}` },
      });
      if (!res.ok) throw new Error("Nenhum dízimo encontrado");
      const data: Tithe[] = await res.json();
      setTithes(data);

      const uniqueUserIds = Array.from(new Set(data.map((t) => t.userId)));
      await Promise.all(uniqueUserIds.map(fetchUser));
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  // Busca dízimos quando o churchId estiver definido
  useEffect(() => {
    if (churchId) {
      fetchTithes();
    }
  }, [churchId]);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dízimos Pagos</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : error ? (
        <p className="text-red-500">Erro: {error}</p>
      ) : tithes.length === 0 ? (
        <p>Nenhum dízimo encontrado.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th className="border p-2">Usuário</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Valor</th>
              <th className="border p-2">Data</th>
            </tr>
          </thead>
          <tbody>
            {tithes.map(({ id, userId, amount, date }) => (
              <tr key={id}>
                <td className="border p-2">{users[userId]?.fullName || `Usuário #${userId}`}</td>
                <td className="border p-2">{users[userId]?.email || "-"}</td>
                <td className="border p-2">R$ {amount.toFixed(2)}</td>
                <td className="border p-2">{new Date(date).toLocaleString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
