"use client";
import { useRouter } from "next/navigation";

const planos = [
  {
    nome: "Mensal",
    preco: "R$19,90 / mês",
    beneficios: [
      "Acesso total ao sistema",
      "Suporte padrão",
      "Atualizações mensais",

    ],
    id: "mensal",
  },
  {
    nome: "Anual",
    preco: "R$159,00 / ano",
    beneficios: [
      "Economize 17% comparado ao mensal",
      "Suporte prioritário",
      "Atualizações automáticas",
    ],
    id: "anual",
  },
  {
    nome: "Vitalícia",
    preco: "R$499,00 (pagamento único)",
    beneficios: [
      "Acesso permanente",
      "Suporte premium vitalício",
      "Todas as futuras atualizações incluídas",
    ],
    id: "vitalicia",
  },
];

const LicencasPage = () => {
  const router = useRouter();

  const handleComprar = (tipo: string) => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (token && token !== "undefined" && token !== "null" && token.trim() !== "") {
    alert(`Licença ${tipo} comprada com sucesso!`);
    router.push("/cadastrarigreja");
  } else {
    alert("Você precisa estar logado para comprar uma licença.");
    router.push("/login");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {planos.map((plano) => (
          <div
            key={plano.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center flex flex-col justify-between"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {plano.nome}
            </h2>

            <ul className="mb-6 space-y-2 text-gray-700 dark:text-gray-300 text-left list-disc list-inside">
              {plano.beneficios.map((beneficio, idx) => (
                <li key={idx}>{beneficio}</li>
              ))}
            </ul>

            <p className="text-4xl font-extrabold text-sky-600 mb-6">
              {plano.preco}
            </p>

            <button
              onClick={() => handleComprar(plano.nome)}
              className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-md transition"
            >
              Comprar {plano.nome}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LicencasPage;
