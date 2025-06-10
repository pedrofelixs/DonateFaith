"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/role": string;
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        const roleStr = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        if (roleStr === "Pastor") {
          setRole(1); // Pastor
          console.log("Usuário autenticado como Pastor");
        } else if (roleStr === "Membro") {
          setRole(2); // Doador
        } else {
          setRole(null); // Role desconhecida
        }
        
        setIsAuthenticated(true);
      } catch (err) {
        console.error("Erro ao decodificar o token:", err);
        setIsAuthenticated(false);
        setRole(null);
      }
    } else {
      setIsAuthenticated(false);
      setRole(null);
    }
  }, []);

  return { isAuthenticated, role };
};
