"use client";
import { useState } from "react";
import Financeiro from "./components/financeiro";
import Eventos from "./components/eventos";
import Membros from "./components/membros";
import Gerenciar from "./components/gerenciador";

const PastorDashboard = () => {
  const [activeArea, setActiveArea] = useState<"financeiro" | "eventos" | "membros" | "gerenciar">("financeiro");

  const handleTabChange = (area: "financeiro" | "eventos" | "membros" | "gerenciar") => {
    setActiveArea(area);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 p-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
          Painel de Controle do Pastor
        </h1>

        {/* Navegação entre as áreas */}
        <div className="mb-6 flex justify-start space-x-4">
          <button
            onClick={() => handleTabChange("financeiro")}
            className={`px-4 py-2 rounded-lg ${activeArea === "financeiro" ? "bg-sky-600 text-white" : "bg-gray-200 text-black"}`}
          >
            Área Financeira
          </button>
          <button
            onClick={() => handleTabChange("eventos")}
            className={`px-4 py-2 rounded-lg ${activeArea === "eventos" ? "bg-sky-600 text-white" : "bg-gray-200 text-black"}`}
          >
            Área de Eventos
          </button>
          <button
            onClick={() => handleTabChange("membros")}
            className={`px-4 py-2 rounded-lg ${activeArea === "membros" ? "bg-sky-600 text-white" : "bg-gray-200 text-black"}`}
          >
            Área de Membros
          </button>
          <button
            onClick={() => handleTabChange("gerenciar")}
            className={`px-4 py-2 rounded-lg ${activeArea === "gerenciar" ? "bg-sky-600 text-white" : "bg-gray-200 text-black"}`}
          >
            Gerenciar
          </button>
        </div>

        {/* Conteúdo baseado na aba ativa */}
        {activeArea === "financeiro" && <Financeiro />}
        {activeArea === "eventos" && <Eventos />}
        {activeArea === "membros" && <Membros />}
        {activeArea === "gerenciar" && <Gerenciar />}
      </div>
    </main>
  );
};

export default PastorDashboard;
