'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const CriarMetaDoacao = () => {
  const router = useRouter();

  const [pastorId, setPastorId] = useState<number | null>(null);
  const [churchId, setChurchId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    goalsAmount: '',
    amount: '',
    date: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const token = localStorage.getItem('token');
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
          .then(res => {
            if (!res.ok) throw new Error('Erro ao buscar igreja');
            return res.json();
          })
          .then(data => {
            setChurchId(data.id);
          })
          .catch(err => {
            console.error('Erro ao buscar igreja:', err);
          });
      } catch (err) {
        console.error('Erro ao decodificar token:', err);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.name.trim().length < 3) {
      newErrors.name = 'Nome da meta muito curto';
    }

    if (formData.description.trim().length < 10) {
      newErrors.description = 'Descrição muito curta';
    }

    if (!formData.date) {
      newErrors.date = 'Data obrigatória';
    }

    if (!formData.goalsAmount || isNaN(Number(formData.goalsAmount)) || Number(formData.goalsAmount) <= 0) {
      newErrors.goalsAmount = 'Valor da meta inválido';
    }

    if (!formData.amount || isNaN(Number(formData.amount)) || Number(formData.amount) < 0) {
      newErrors.amount = 'Valor arrecadado inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!pastorId || !churchId) {
      alert('Não foi possível identificar o usuário. Faça login novamente.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token não encontrado. Faça login novamente.');
      return;
    }

    const payload = {
      userId: pastorId,
      churchId: churchId,
      name: formData.name,
      description: formData.description,
      goalsAmount: Number(formData.goalsAmount),
      amount: Number(formData.amount),
      date: formData.date,
    };

    try {
      const res = await fetch('http://localhost:5289/api/Donation', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Erro ao criar meta de doação');

      alert('Meta de doação criada com sucesso!');
      router.push('/');
    } catch (error) {
      alert('Erro ao enviar os dados');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Criar Meta de Doação
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nome da Meta"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <textarea
              name="description"
              placeholder="Descrição"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
          </div>

          <div>
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
          </div>

          <div>
            <input
              type="number"
              name="goalsAmount"
              placeholder="Valor da Meta (R$)"
              value={formData.goalsAmount}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.goalsAmount && <p className="text-red-500 text-sm">{errors.goalsAmount}</p>}
          </div>

          <div>
            <input
              type="number"
              name="amount"
              placeholder="Valor Inicial Arrecadado (R$)"
              value={formData.amount}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.amount && <p className="text-red-500 text-sm">{errors.amount}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
          >
            Criar Meta
          </button>
        </form>
      </div>
    </div>
  );
};

export default CriarMetaDoacao;
