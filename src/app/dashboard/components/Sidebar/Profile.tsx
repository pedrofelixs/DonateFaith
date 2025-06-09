import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import {jwtDecode} from "jwt-decode";
import axios from "axios";

interface Pastor {
  name: string;
  email: string;
}

export default function Profile() {
  const [pastor, setPastor] = useState<Pastor | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        const id = parseInt(decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]);
        console.log(id);
        

        axios
          .get(`http://localhost:5289/api/church/pastor/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setPastor(response.data);
          })
          .catch((error) => {
            console.error("Erro ao buscar pastor:", error);
          });
      } catch (err) {
        console.error("Erro ao decodificar token:", err);
      }
    }
  }, []);

  return (
    <div className="flex items-center gap-3 px-2 py-2">
      <div className="flex flex-col flex-1 min-w-0">
        <span className="text-sm font-semibold text-gray-50 truncate">
          {pastor?.name || "Carregando..."}
        </span>
        <span className="text-sm text-gray-50 truncate">
          {pastor?.email || ""}
        </span>
      </div>
      <button
        title="Sair"
        type="button"
        className="rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-gray-500/60"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login"; // ou use router.push("/login") com Next.js
        }}
      >
        <LogOut className="h-5 w-5 text-[#FEF2F2] shrink-0 transition-colors duration-200 ease-in-out hover:text-[#ef4444]" />
      </button>
    </div>
  );
}
