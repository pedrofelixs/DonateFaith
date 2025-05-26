"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CadastroIgreja = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: "",
        cnpj: "",
        address: "",
        phone: "",
        foundedDate: "",
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
                // (99) 9999-9999
                masked = raw
                    .replace(/^(\d{2})(\d)/, "($1) $2")
                    .replace(/(\d{4})(\d)/, "$1-$2");
            } else {
                // (99) 99999-9999
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

        if (formData.name.trim().length < 3) {
            newErrors.name = "Nome da igreja inválido";
        }

        if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(formData.cnpj)) {
            newErrors.cnpj = "CNPJ inválido";
        }

        if (formData.address.trim().length < 5) {
            newErrors.address = "Endereço inválido";
        }

        if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(formData.phone)) {
            newErrors.phone = "Telefone inválido";
        }

        if (!formData.foundedDate) {
            newErrors.foundedDate = "Data de fundação é obrigatória";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert("Igreja cadastrada com sucesso!");
            router.push("/");
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
                            placeholder="a"
                            value={formData.foundedDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            required
                        />
                        {errors.foundedDate && (
                            <p className="text-red-500 text-sm">{errors.foundedDate}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
                    >
                        Cadastrar Igreja
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CadastroIgreja;
