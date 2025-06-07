import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./dashboard.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard application",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} font-sans antialiased min-h-screen w-screen grid grid-cols-[18rem_1fr]`}>
      <aside className="bg-gray-800">
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
}
