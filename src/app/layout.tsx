import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], })

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Verifique as estatísticas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
          <ThemeProvider
              attribute="class"
              enableSystem={true}
              defaultTheme="system"
          >
            
              <main className="">{children}</main>
              <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
