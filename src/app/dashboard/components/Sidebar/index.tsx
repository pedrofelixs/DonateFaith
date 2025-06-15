"use client";

import { Cog, LifeBuoy, Search, BarChart, CheckSquare, Home, SquareStack, Users, BarChart2, PieChartIcon } from "lucide-react";
import Logo from "./Logo";
import { NavItem } from "./NavItem";
import Profile from "./Profile";
import * as Input from "../Input";

export default function Sidebar() {
  return (
    <aside className="flex flex-col min-h-screen gap-6 border-r border-gray-900/60 px-5 py-8">
      <Logo />

      <nav className="space-y-2">
        <NavItem title="Home" icon={Home} children={[{ label: "Dashboard", href: "/dashboard" }]} />
        <NavItem title="Dízimo" icon={SquareStack} />
        <NavItem
          title="Doações"
          icon={CheckSquare}
          children={[
            { label: "Adicionar meta", href: "/dashboard/doacoes/adicionar" },
            { label: "Gerenciar metas", href: "/dashboard/doacoes/gerenciar" }
          ]}
        />
        <NavItem title="Eventos" icon={BarChart} children={[
            { label: "Criar evento", href: "/dashboard/eventos/cadastrar" },
            { label: "Gerenciar meus eventos", href: "/dashboard/eventos/gerenciar" },
          ]}/>
        <NavItem title="Membros" icon={Users} children={[
            { label: "Adicionar membros", href: "/dashboard/membros/adicionar" },
          ]}/>
        <NavItem title="Relatórios" icon={PieChartIcon} children={[
            { label: "Relatórios", href: "/dashboard/relatorios" },
          ]}/>
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-2">
          <NavItem title="Editar igreja" icon={Cog} href= "/dashboard/editarigreja"/>
        </nav>
      </div>

      <div>
        <Profile />
      </div>
    </aside>
  );
}
