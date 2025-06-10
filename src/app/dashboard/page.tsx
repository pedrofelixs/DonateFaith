'use client'

import SettingsTabs from "./components/Settings";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl px-5 py-5 font-medium text-gray-50">Geral</h1>

      <SettingsTabs />

      <div className="flex flex-col gap-6 px-5 py-5">
        <h2 className="text-2xl font-medium text-gray-50">Bem-vindo à Dashboard</h2>
        <p className="text-gray-400">Selecione uma aba para visualizar informações.</p>
      </div>
    </>
  );
}
