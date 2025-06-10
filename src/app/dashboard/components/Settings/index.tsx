"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { useEffect, useState } from "react";
import { LogOut } from "lucide-react";
import { jwtDecode } from "jwt-decode";

interface Igreja {
  name: string;
  email: string;
  code: string;
}

interface TabItemProps {
  value: string;
  tittle: string;
  isSelected?: boolean;
}

function TabItem({ value, tittle, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="group relative px-1 pb-4 text-sm font-medium text-gray-50 hover:text-blue-400 data-[state=active]:text-blue-500"
    >
      <span>{tittle}</span>
      {isSelected && <div className="absolute bottom-px left-0 right-0 h-0.5 bg-blue-500" />}
    </Tabs.Trigger>
  );
}

export default function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  // Estado para os dados do pastor
  const [igreja, setIgreja] = useState<Igreja | null>(null);

  useEffect(() => {
    if (currentTab === "tab1") {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded: any = jwtDecode(token);
          const id = parseInt(
            decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
          );

          fetch(`http://localhost:5289/api/church/pastor/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
          })
            .then((res) => res.json())
            .then((data) => setIgreja(data))
            .catch((err) => console.error("Erro ao buscar pastor:", err));
        } catch (err) {
          console.error("Erro ao decodificar token:", err);
        }
      }
    }
  }, [currentTab]); // Roda toda vez que trocar para tab1

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="px-5 mt-6 flex w-full items-center gap-4 border-b border-gray-700/40">
        <TabItem value="tab1" tittle="Código" isSelected={currentTab === "tab1"} />
        <TabItem value="tab2" tittle="Cadastros" isSelected={currentTab === "tab2"} />
        <TabItem value="tab3" tittle="Planos" isSelected={currentTab === "tab3"} />
        <TabItem value="tab4" tittle="Gráficos" isSelected={currentTab === "tab4"} />
        <TabItem value="tab5" tittle="Pagamentos" isSelected={currentTab === "tab5"} />
        <TabItem value="tab6" tittle="Calendário" isSelected={currentTab === "tab6"} />
        <TabItem value="tab7" tittle="Notificações" isSelected={currentTab === "tab7"} />
      </Tabs.List>

      <div className="p-6">
        <Tabs.Content value="tab1">
          <div className="flex items-center gap-3 px-2 py-2">
            <div className="flex flex-col flex-1 min-w-0">
              <span className="text-sm font-semibold text-gray-50 truncate">
                {igreja?.code || "Carregando..."}
              </span>
              <span className="text-sm text-gray-50 truncate">{igreja?.email || ""}</span>
            </div>
            <button
              title="Sair"
              type="button"
              className="rounded-md p-2 transition-colors duration-200 ease-in-out hover:bg-gray-500/60"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
            >
              <LogOut className="h-5 w-5 text-[#FEF2F2] shrink-0 transition-colors duration-200 ease-in-out hover:text-[#ef4444]" />
            </button>
          </div>
        </Tabs.Content>

        <Tabs.Content value="tab2">
          <p>Conteúdo da aba Cadastros aqui...</p>
        </Tabs.Content>

        <Tabs.Content value="tab3">
          <p>Conteúdo da aba Planos aqui...</p>
        </Tabs.Content>

        <Tabs.Content value="tab4">
          <p>Conteúdo da aba Gráficos aqui...</p>
        </Tabs.Content>

        <Tabs.Content value="tab5">
          <p>Conteúdo da aba Pagamentos aqui...</p>
        </Tabs.Content>

        <Tabs.Content value="tab6">
          <p>Conteúdo da aba Calendário aqui...</p>
        </Tabs.Content>

        <Tabs.Content value="tab7">
          <p>Conteúdo da aba Notificações aqui...</p>
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
}
