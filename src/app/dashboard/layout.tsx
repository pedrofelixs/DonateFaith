"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Inter } from "next/font/google";
import "./dashboard.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`min-h-screen w-full grid md:grid-cols-[18rem_1fr] ${inter.className}`}>
      {/* Sidebar */}
      <aside
        className={`
          md:relative md:translate-x-0 md:w-auto
          fixed top-0 left-0 h-full w-72 bg-gray-800 z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar onNavigate={() => setIsOpen(false)} />
      </aside>

      {/* Conteúdo */}
      <main className="relative w-full">
        {/* Botão toggle mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {children}
      </main>
    </div>
  );
}
