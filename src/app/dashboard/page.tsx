'use client'

import SettingsTabs from "./components/Settings";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl px-5 py-5 font-medium text-black dark:text-gray-50">Geral</h1>

      <SettingsTabs />

      
    </>
  );
}
