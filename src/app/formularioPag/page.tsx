"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const dadosPlano = {
  mensal: {
    nome: "Mensal",
    preco: "R$19,90 / mês",
  },
  anual: {
    nome: "Anual",
    preco: "R$159,00 / ano",
  },
  vitalicia: {
    nome: "Vitalícia",
    preco: "R$499,00 (pagamento único)",
  },
};

const FormularioPag = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const plano = searchParams.get("plano") as "mensal" | "anual" | "vitalicia";

  const [planoValido, setPlanoValido] = useState(false);
  const [parcelas, setParcelas] = useState("3");

  useEffect(() => {
    if (!plano || !["mensal", "anual", "vitalicia"].includes(plano)) {
      alert("Plano inválido. Redirecionando...");
      router.push("/licencas");
    } else {
      setPlanoValido(true);
    }
  }, [plano]);

  const handlePagamento = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Pagamento realizado com sucesso!");
    router.push("/cadastrarigreja");
  };

  if (!planoValido) return null;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center py-10 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-white">
          Finalizar Pagamento - Plano {dadosPlano[plano].nome}
        </h2>

        <p className="text-center mb-6 text-lg font-semibold text-sky-600">
          {dadosPlano[plano].preco}
        </p>

        <form onSubmit={handlePagamento} className="space-y-4">
          <div>
            <label className="block mb-1 dark:text-white">Nome no cartão</label>
            <input
              type="text"
              required
              className="w-full p-2 rounded-md border dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div>
            <label className="block mb-1 dark:text-white">Número do cartão</label>
            <input
              type="text"
              required
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full p-2 rounded-md border dark:bg-gray-700 dark:text-white"
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 dark:text-white">Validade</label>
              <input
                type="text"
                required
                placeholder="MM/AA"
                className="w-full p-2 rounded-md border dark:bg-gray-700 dark:text-white"
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 dark:text-white">CVV</label>
              <input
                type="text"
                required
                placeholder="123"
                className="w-full p-2 rounded-md border dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {plano === "mensal" && (
            <div>
              <label className="block mb-1 dark:text-white">Quantidade de meses</label>
              <select
                value={parcelas}
                onChange={(e) => setParcelas(e.target.value)}
                className="w-full p-2 rounded-md border dark:bg-gray-700 dark:text-white"
              >
                <option value="3">3 meses</option>
                <option value="6">6 meses</option>
                <option value="9">9 meses</option>
              </select>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-md transition"
          >
            Finalizar pagamento
          </button>
        </form>

        {plano === "vitalicia" && (
          <div className="mt-6 text-center">
            <p className="mb-2 dark:text-white">Ou pague via Pix:</p>
            <a
              href="https://linkparapagamentopix.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md"
            >
              Pagar com Pix
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormularioPag;
