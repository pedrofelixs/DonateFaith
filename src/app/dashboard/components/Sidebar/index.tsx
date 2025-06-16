"use client";

import Logo from "./Logo";
import Profile from "./Profile";
import { NavItem } from "./NavItem";
import {
  Cog,
  Home,
  SquareStack,
  CheckSquare,
  BarChart,
  Users,
  PieChartIcon
} from "lucide-react";

export default function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex flex-col h-full min-h-screen gap-6 border-r border-gray-900/60 px-5 py-8">
      <Logo />

      <nav className="space-y-2">
        <NavItem title="Home" icon={Home} children={[{ label: "Dashboard", href: "/dashboard" }]} onNavigate={onNavigate} />
        <NavItem
          title="Doações"
          icon={CheckSquare}
          children={[
            { label: "Adicionar meta", href: "/dashboard/doacoes/adicionar" },
            { label: "Gerenciar metas", href: "/dashboard/doacoes/gerenciar" },
          ]}
          onNavigate={onNavigate}
        />
        <NavItem
          title="Eventos"
          icon={BarChart}
          children={[
            { label: "Criar evento", href: "/dashboard/eventos/cadastrar" },
            { label: "Gerenciar meus eventos", href: "/dashboard/eventos/gerenciar" },
          ]}
          onNavigate={onNavigate}
        />
        <NavItem
          title="Membros"
          icon={Users}
          children={[
            { label: "Adicionar membros", href: "/dashboard/membros/adicionar" },
            { label: "Gerenciar membros", href: "/dashboard/membros/gerenciar" },
            { label: "Ver dízimos", href: "/dashboard/membros/dizimos" },
          ]}
          onNavigate={onNavigate}
        />
        <NavItem
          title="Relatórios"
          icon={PieChartIcon}
          children={[{ label: "Relatórios", href: "/dashboard/relatorios" }]}
          onNavigate={onNavigate}
        />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-2">
          <NavItem title="Editar igreja" icon={Cog} href="/dashboard/editarigreja" onNavigate={onNavigate} />
        </nav>
      </div>

      <Profile />
    </div>
  );
}
