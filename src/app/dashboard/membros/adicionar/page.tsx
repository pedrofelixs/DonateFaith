'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const CadastrarMembro = () => {
  const router = useRouter();

  const [pastorId, setPastorId] = useState<number | null>(null);
  const [churchId, setChurchId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullName: '',
    cpf: '',
    email: '',
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'cpf') {
      const raw = value.replace(/\D/g, '');
      const masked = raw
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2')
        .slice(0, 14);
      setFormData(prev => ({ ...prev, cpf: masked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Nome completo deve ter ao menos 3 caracteres';
    }

    const rawCpf = formData.cpf.replace(/\D/g, '');
    if (rawCpf.length !== 11) {
      newErrors.cpf = 'CPF inválido (deve conter 11 números)';
    }

    if (!formData.email.includes('@')) {
      newErrors.email = 'Email inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const token = localStorage.getItem('token');
    if (!token) {
      alert('Token não encontrado. Faça login novamente.');
      return;
    }

    const payload = {
      fullName: formData.fullName,
      cpf: formData.cpf, 
      email: formData.email,
    };

    try {
      const res = await fetch('http://localhost:5289/api/Member', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Erro ao cadastrar membro');

      alert('Membro cadastrado com sucesso!');
      router.push('dashboard/membros/gerenciar');
    } catch (error) {
      alert('Erro ao enviar os dados');
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Cadastrar Novo Membro
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Nome Completo"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>

          <div>
            <input
              type="text"
              name="cpf"
              placeholder="CPF"
              value={formData.cpf}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
          >
            Cadastrar Membro
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarMembro;
