'use client';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface Donation {
  id: number;
  name: string;
  goalsAmount: number;
  amount: number;
  date: string;
  description: string;
  userId: number;
  churchId: number;
  parentDonationId: number | null;
}

interface Church {
  id: number;
  code: string;
  name: string;
}

const Doacoes = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [loading, setLoading] = useState(true);
  const [editDonation, setEditDonation] = useState<Donation | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Token não encontrado.');
      setLoading(false);
      return;
    }

    const decoded: any = jwtDecode(token);
    const pastorId = parseInt(
      decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    );

    fetch(`http://localhost:5289/api/church/pastor/${pastorId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((church: Church) =>
        fetch(`http://localhost:5289/api/Donation/by-church-code/${church.code}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
      )
      .then((res) => res.json())
      .then((data: Donation[]) => {
        const metas = data.filter((d) => d.parentDonationId === null);
        setDonations(metas);
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar metas.');
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Deseja excluir esta meta?');
    if (!confirm) return;

    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`http://localhost:5289/api/Donation/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error();

      setDonations((prev) => prev.filter((d) => d.id !== id));
    } catch {
      alert('Erro ao deletar meta.');
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!editDonation) return;
    const { name, value } = e.target;
    setEditDonation({ ...editDonation, [name]: name === 'goalsAmount' || name === 'amount' ? +value : value });
  };

  const handleUpdate = async () => {
    const token = localStorage.getItem('token');
    if (!editDonation) return;

    try {
      const res = await fetch('http://localhost:5289/api/Donation', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editDonation),
      });

      if (!res.ok) throw new Error();

      alert('Meta atualizada com sucesso!');
      setDonations((prev) =>
        prev.map((d) => (d.id === editDonation.id ? { ...editDonation } : d))
      );
      setEditDonation(null);
    } catch {
      alert('Erro ao atualizar meta.');
    }
  };

  if (loading) return <p className="text-center mt-10">Carregando metas...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Metas de Doações da Igreja
      </h1>

      {donations.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">Nenhuma meta encontrada.</p>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {donations.map((donation) => (
            <div
              key={donation.id}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md space-y-2"
            >
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{donation.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{donation.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Arrecadado: R$ {donation.amount} / Meta: R$ {donation.goalsAmount}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Data: {new Date(donation.date).toLocaleDateString()}
              </p>
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => setEditDonation(donation)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(donation.id)}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
                >
                  Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {editDonation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-lg space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Editar Meta</h2>
            <input
              name="name"
              value={editDonation.name}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Nome"
            />
            <textarea
              name="description"
              value={editDonation.description}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Descrição"
            />
            <input
              name="goalsAmount"
              type="number"
              value={editDonation.goalsAmount}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Valor da Meta"
            />
            <input
              name="amount"
              type="number"
              value={editDonation.amount}
              onChange={handleEditChange}
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              placeholder="Arrecadado"
            />
            <input
              name="date"
              type="date"
              value={editDonation.date.split('T')[0]}
              onChange={(e) =>
                setEditDonation({ ...editDonation, date: `${e.target.value}T00:00:00` })
              }
              className="w-full px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditDonation(null)}
                className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-md"
              >
                Cancelar
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md"
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Doacoes;
