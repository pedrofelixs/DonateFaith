"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => setIsLogin(!isLogin);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você pode integrar com Firebase, Supabase, etc.
        alert(isLogin ? "Login realizado!" : "Cadastro realizado!");
        router.push("/"); // redireciona para a home após login/cadastro
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
            <div className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                <h2 className="text-3xl font-semibold text-center text-gray-900 dark:text-white mb-6">
                    {isLogin ? "Entrar" : "Criar Conta"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder="Nome completo"
                            required
                            className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        required
                        className="w-full px-4 py-3 rounded-md bg-gray-100 dark:bg-gray-700 text-black dark:text-white"
                    />
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
