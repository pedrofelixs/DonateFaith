"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export default function MembersPage() {
  const [members, setMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [churchId, setChurchId] = useState<number | null>(null);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const fetchMembers = async (id: number) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5289/api/Member/church/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        const data = await res.json();
        setMembers(data);
      } else {
        console.error("Erro ao buscar membros");
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeMember = async (id: number) => {
    if (!confirm("Tem certeza que deseja remover este membro?")) return;

    try {
      const res = await fetch(`http://localhost:5289/api/Member/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        alert("Membro removido com sucesso!");
        // Atualiza lista
        setMembers(members.filter((m) => m.id !== id));
      } else {
        alert("Erro ao remover membro");
      }
    } catch (error) {
      console.error("Erro:", error);
    }
  };

  useEffect(() => {
    const init = async () => {
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const pastorId = parseInt(
            decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
          );

          // Busca o ID da igreja pelo pastorId
          const res = await fetch(`http://localhost:5289/api/church/pastor/${pastorId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!res.ok) throw new Error("Erro ao buscar igreja");

          const data = await res.json();
          setChurchId(data.id);

          // Agora busca membros com o churchId obtido
          fetchMembers(data.id);
        } catch (error) {
          console.error("Erro:", error);
        }
      }
    };

    init();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Membros da Igreja</h1>

      {loading ? (
        <p>Carregando...</p>
      ) : members.length === 0 ? (
        <p>Nenhum membro encontrado.</p>
      ) : (
        <table className="min-w-full border border-gray-300">
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Nome</th>
              <th className="border p-2">CPF</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td className="border p-2">{member.id}</td>
                <td className="border p-2">{member.fullName}</td>
                <td className="border p-2">{member.cpf}</td>
                <td className="border p-2">{member.email}</td>
                <td className="border p-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => removeMember(member.id)}
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}