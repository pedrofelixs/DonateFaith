"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EntrarIgrejaPage = () => {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      router.push(`/igreja?code=${code.trim()}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold mb-6 text-center text-sky-700">Acessar Igreja</h1>

        <label className="block mb-2 text-gray-700 dark:text-gray-300" htmlFor="code">
          Código da Igreja:
        </label>
        <input
          id="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Digite o código..."
          required
        />

        <button
          type="submit"
          className="w-full py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default EntrarIgrejaPage;
