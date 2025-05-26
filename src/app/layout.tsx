import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar/index";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Admin dashboard application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen w-screen grid grid-cols-[18rem_1fr]">
          <aside className="bg-gray-800">
            <Sidebar />
          </aside>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
