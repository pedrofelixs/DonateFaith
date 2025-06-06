"use client";

import { Cog, LifeBuoy, Search, BarChart, CheckSquare, Home, SquareStack, Users } from "lucide-react";
import Logo from "./Logo";
import { NavItem } from "./NavItem";
import Profile from "./Profile";
import * as Input from "../Input";

export default function Sidebar() {
  return (
    <aside className="flex flex-col min-h-screen gap-6 border-r border-gray-900/60 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-gray-500 shrink-0" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-2">
        <NavItem title="Home" icon={Home} children={[{ label: "Dashboard", href: "/dashboard" }]} />
        <NavItem title="Dízimo" icon={SquareStack} />
        <NavItem
          title="Doações"
          icon={CheckSquare}
          children={[
            { label: "Nova Doação", href: "/dashboard/doacoes/nova" },
            { label: "Histórico", href: "/dashboard/doacoes/historico" },
          ]}
        />
        <NavItem title="Eventos" icon={BarChart} children={[
            { label: "Criar evento", href: "/dashboard/eventos/cadastrar" },
            { label: "Histórico", href: "/dashboard/doacoes/historico" },
          ]}/>
        <NavItem title="Membros" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-2">
          <NavItem title="Suporte" icon={Cog} />
          <NavItem title="Configurações" icon={LifeBuoy} />
        </nav>
      </div>

      <div>
        <Profile />
      </div>
    </aside>
  );
}
