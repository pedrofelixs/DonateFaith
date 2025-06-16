import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./mainpage.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], })

export const metadata: Metadata = {
  title: "DonateFaith",
  description: "Doe Fé",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

          <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="system"
          >
              <Header />
              <main className="">{children}</main>
          </ThemeProvider>
      
    
  );
}
