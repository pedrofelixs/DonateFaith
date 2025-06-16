import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./igreja.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import Footer from "../../components/Layout/Footer";
const font = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], })

export const metadata: Metadata = {
  title: "Igreja",
  description: " ",
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
            
              {children}

          </ThemeProvider>
      
    
  )
}
