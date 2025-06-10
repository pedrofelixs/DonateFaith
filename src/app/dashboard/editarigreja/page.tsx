"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const CadastroIgreja = () => {
  const router = useRouter();
  const [pastorId, setPastorId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    id: 0, // Novo campo necessário para o PUT
    name: "",
    cnpj: "",
    address: "",
    phone: "",
    foundedDate: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const id = parseInt(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
        setPastorId(id);

        // Buscar dados da igreja
        axios.get(`http://localhost:5289/api/church/pastor/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(res => {
          const data = res.data;
          setFormData({
            id: data.id,
            name: data.name || "",
            cnpj: data.cnpj || "",
            address: data.address || "",
            phone: data.phone || "",
            foundedDate: data.foundedDate?.split("T")[0] || "",
          });
        }).catch(err => {
          console.warn("Pastor ainda não tem igreja cadastrada.");
        });

      } catch (err) {
        console.error("Erro ao decodificar token:", err);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "cnpj") {
      const raw = value.replace(/\D/g, "");
      const masked = raw
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d)/, "$1-$2")
        .slice(0, 18);
      setFormData({ ...formData, cnpj: masked });
    } else if (name === "phone") {
      const raw = value.replace(/\D/g, "");
      let masked = "";
      if (raw.length <= 10) {
        masked = raw
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{4})(\d)/, "$1-$2");
      } else {
        masked = raw
          .replace(/^(\d{2})(\d)/, "($1) $2")
          .replace(/(\d{5})(\d)/, "$1-$2");
      }
      masked = masked.slice(0, 15);
      setFormData({ ...formData, phone: masked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (formData.name.trim().length < 3) newErrors.name = "Nome da igreja inválido";
    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(formData.cnpj)) newErrors.cnpj = "CNPJ inválido";
    if (formData.address.trim().length < 5) newErrors.address = "Endereço inválido";
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.phone)) newErrors.phone = "Telefone inválido";
    if (!formData.foundedDate) newErrors.foundedDate = "Data de fundação é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (pastorId == null) {
      alert("Token inválido ou não encontrado.");
      return;
    }
    console.log(pastorId);
    try {
      const token = localStorage.getItem("token");

      await axios.put(`http://localhost:5289/api/church`, {
        ...formData,
        pastorId: pastorId,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Igreja atualizada com sucesso!");
      router.push("/");
    } catch (err) {
      console.error("Erro ao atualizar igreja:", err);
      alert("Erro ao atualizar igreja.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-xl p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
        <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
          Cadastro da Igreja
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nome da Igreja"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div>
            <input
              type="text"
              name="cnpj"
              placeholder="00.000.000/0000-00"
              value={formData.cnpj}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.cnpj && <p className="text-red-500 text-sm">{errors.cnpj}</p>}
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="Endereço"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <input
              type="date"
              name="foundedDate"
              value={formData.foundedDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
              required
              placeholder="Data de Fundação"
            />
            {errors.foundedDate && (
              <p className="text-red-500 text-sm">{errors.foundedDate}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
          >
            Salvar Igreja
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastroIgreja;
