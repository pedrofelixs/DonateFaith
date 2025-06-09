'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {jwtDecode} from 'jwt-decode';

const CadastrarEvento = () => {
  const router = useRouter();

  const [pastorId, setPastorId] = useState<number | null>(null);
   const [churchId, setChurchId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    maxNumber: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
       try {
      const decoded: any = jwtDecode(token);
      const id = parseInt(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
      setPastorId(id);

      // Buscar igreja associada ao pastorId
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
          setChurchId(data.id); // supondo que o retorno tem campo id da igreja
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
      newErrors.name = 'Nome do evento muito curto';
    }

    if (formData.description.trim().length < 10) {
      newErrors.description = 'Descrição muito curta';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Data de início obrigatória';
    }

    if (!formData.endDate) {
      newErrors.endDate = 'Data de fim obrigatória';
    }

    if (formData.startDate && formData.endDate && formData.endDate < formData.startDate) {
      newErrors.endDate = 'Data de fim deve ser após a data de início';
    }

    if (formData.location.trim().length < 3) {
      newErrors.location = 'Local inválido';
    }

    if (!formData.maxNumber || isNaN(Number(formData.maxNumber)) || Number(formData.maxNumber) <= 0) {
      newErrors.maxNumber = 'Informe um número válido de participantes';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (!pastorId) {
      alert('Não foi possível identificar o pastor logado. Faça login novamente.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token não encontrado. Faça login novamente.');
      return;
    }

    const payload = {
      organizerId: pastorId, // pastorId extraído do token
      name: formData.name,
      churchId: churchId, // ajuste se quiser pegar essa info do usuário
      description: formData.description,
      startDate: formData.startDate,
      endDate: formData.endDate,
      location: formData.location,
      maxNumber: Number(formData.maxNumber),
    };

    try {
      const res = await fetch('http://localhost:5289/api/Event', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Erro ao cadastrar evento');

      alert('Evento cadastrado com sucesso!');
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
          Cadastrar Novo Evento
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nome do Evento"
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

          <div className="flex space-x-2">
            <input
              placeholder="Data de Começo"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            <input
              placeholder="Data de Fim"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </div>

          <div>
            <input
              type="text"
              name="location"
              placeholder="Local do Evento"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>

          <div>
            <input
              type="number"
              name="maxNumber"
              placeholder="Máximo de Participantes"
              value={formData.maxNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.maxNumber && <p className="text-red-500 text-sm">{errors.maxNumber}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
          >
            Cadastrar Evento
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarEvento;
