"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import InputMask from "react-input-mask";

const LoginPage = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        confirmarSenha: ""
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
            if (!/^[\w\s]{3,}$/.test(formData.nome)) {
                newErrors.nome = "Nome inválido";
            }

            if (!/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/.test(formData.cpf)) {
                newErrors.cpf = "CPF inválido";
            }

            if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(formData.senha)) {
                newErrors.senha = "Senha deve ter ao menos 6 caracteres e conter letras e números";
            }

            if (formData.senha !== formData.confirmarSenha) {
                newErrors.confirmarSenha = "As senhas não coincidem";
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            alert(isLogin ? "Login realizado!" : "Cadastro realizado!");
            router.push("/");
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
                                required
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
                    required
                    />
                    {errors.cpf && (
                    <p className="text-red-500 text-sm">{errors.cpf}</p>
                    )}
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
                                required
                            />
                            {errors.confirmarSenha && (
                                <p className="text-red-500 text-sm">{errors.confirmarSenha}</p>
                            )}
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
                    >
                        {isLogin ? "Entrar" : "Cadastrar"}
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
