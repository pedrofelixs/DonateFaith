import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar from "./components/Sidebar";
import "./dashboard.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard application",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${inter.className} font-sans antialiased min-h-screen w-screen grid grid-cols-[18rem_1fr] bg-gray-100 text-black dark:bg-gray-900 dark:text-white`}
    >
      <aside className="bg-gray-800">
        <Sidebar />
      </aside>
      <main>{children}</main>
    </div>
  );
}
