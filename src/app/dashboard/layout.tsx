"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { Inter } from "next/font/google";
import "./dashboard.css";

const inter = Inter({ subsets: ["latin"] });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Regra:
  // - Mobile: se isOpen -> [18rem 1fr], se !isOpen -> [0 1fr]
  // - Desktop: sempre [18rem 1fr]
  const gridCols = `grid-cols-[${isOpen ? "18rem" : "0"}_1fr] md:grid-cols-[18rem_1fr]`;

  return (
    <div
      className={`min-h-screen w-full grid transition-[grid-template-columns] duration-300 ease-in-out ${gridCols} ${inter.className}`}
    >
      <aside className="bg-gray-800 overflow-hidden">
        <Sidebar onNavigate={() => setIsOpen(false)} />
      </aside>

      <main className="relative">
        {/* Botão só no mobile */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden fixed top-4 right-4 z-50 bg-gray-800 text-white p-2 rounded-md"
          >
            ☰
          </button>
        )}
        {children}
      </main>
    </div>
  );
}
