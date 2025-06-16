"use client";

import { useEffect, useState } from "react";

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
  // outros campos que quiser adicionar
}

export default function TithesPage() {
  const [tithes, setTithes] = useState<Tithe[]>([]);
  const [users, setUsers] = useState<Record<number, User>>({}); // cache userId => User
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const churchId = 4; // você pode pegar dinamicamente se quiser
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Busca o nome do usuário pelo ID, com cache simples
  const fetchUser = async (userId: number) => {
    if (users[userId]) return; // já tem no cache
    try {
      const res = await fetch(`http://localhost:5289/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` || "" },
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

  // Busca os dízimos e para cada dízimo busca o usuário
  const fetchTithes = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:5289/api/Tithe/church/${churchId}`, {
        headers: { Authorization: `Bearer ${token}` || "" },
      });
      if (!res.ok) throw new Error("Erro ao buscar dízimos");
      const data: Tithe[] = await res.json();
      setTithes(data);

      // Buscar nomes dos usuários associados
      const uniqueUserIds = Array.from(new Set(data.map((t) => t.userId)));
      await Promise.all(uniqueUserIds.map(fetchUser));
    } catch (err: any) {
      setError(err.message || "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchTithes();
  }, [token]);

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
                <td className="border p-2">{users[userId]?.email}</td>
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
