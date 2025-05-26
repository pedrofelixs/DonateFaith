"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!isLogin) {
      if (!formData.nome || formData.nome.length < 3) {
        newErrors.nome = "Nome inválido";
      }

      if (!/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(formData.cpf)) {
        newErrors.cpf = "CPF inválido";
      }

      if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(formData.senha)) {
        newErrors.senha = "A senha deve ter ao menos 6 caracteres, com letras e números.";
      }

      if (formData.senha !== formData.confirmarSenha) {
        newErrors.confirmarSenha = "As senhas não coincidem.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    const payload = isLogin
      ? {
          email: formData.email,
          password: formData.senha,
        }
      : {
          fullName: formData.nome,
          email: formData.email,
          role: 1,
          cpf: formData.cpf,
          password: formData.senha,
        };

    try {
      const res = await axios.post(`http://localhost:5289${endpoint}`, payload);

      if (isLogin) {
        console.log(res)
        localStorage.setItem("token", res.data.data.token);
        router.push("/licenca");
      } else {
        alert("Cadastro realizado com sucesso!");
        setIsLogin(true);
      }
    } catch (error: any) {
      const message =
        error.response?.data?.error ||
        error.response?.data?.message ||
        error.message ||
        "Erro na requisição.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                    {isLogin ? "Entrar" : "Criar Conta"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome completo"
                                value={formData.nome}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                            {errors.nome && <p className="text-red-500 text-sm">{errors.nome}</p>}
                        </>
                    )}
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

                    {!isLogin && (
                        <>
                            <input
                                type="text"
                                name="cpf"
                                placeholder="CPF"
                                value={formData.cpf}
                                onChange={(e) => {
                                    const raw = e.target.value.replace(/\D/g, "");
                                    const masked = raw
                                        .replace(/^(\d{3})(\d)/, "$1.$2")
                                        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
                                        .replace(/\.(\d{3})(\d)/, ".$1-$2")
                                        .slice(0, 14);
                                    setFormData({ ...formData, cpf: masked });
                                }}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                            {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf}</p>}
                        </>
                    )}

                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={formData.senha}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                        required
                    />
                    {errors.senha && <p className="text-red-500 text-sm">{errors.senha}</p>}

                    {!isLogin && (
                        <>
                            <input
                                type="password"
                                name="confirmarSenha"
                                placeholder="Confirmar senha"
                                value={formData.confirmarSenha}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                            />
                            {errors.confirmarSenha && (
                                <p className="text-red-500 text-sm">{errors.confirmarSenha}</p>
                            )}
                        </>
                    )}

                    <button
                        type="submit"
                        className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
                        disabled={loading}
                    >
                        {loading ? "Carregando..." : isLogin ? "Entrar" : "Cadastrar"}
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
                    {isLogin ? "Não tem uma conta?" : "Já tem uma conta?"}
                    <button
                        type="button"
                        onClick={toggleForm}
                        className="ml-2 text-sky-600 hover:underline"
                    >
                        {isLogin ? "Cadastre-se" : "Entrar"}
                    </button>
                </p>
            </div>
        </div>
  );
};

export default LoginPage;