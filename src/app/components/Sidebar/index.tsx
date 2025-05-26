import { Cog, LifeBuoy, Search } from "lucide-react";
import Logo from "@/app/components/Sidebar/Logo";
import { NavItem } from "@/app/components/Sidebar/NavItem";
import Profile from "@/app/components/Sidebar/Profile";
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from "lucide-react";
import * as Input from "@/app/components/Input";

export default function Sidebar() {
  return (
    <aside className="flex flex-col min-h-screen gap-6 border-r border-gray-900/60 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-gray-500 shrink-0" />
        </Input.Prefix>
        <Input.Control placeholder='Search' /> 
      </Input.Root>
      <nav className="space-y-2">
        <NavItem tittle="Home" icon={Home} />
        <NavItem tittle="Dizimo" icon={SquareStack} />
        <NavItem tittle="Doacoes" icon={CheckSquare} />
        <NavItem tittle="Eventos" icon={BarChart} />
        <NavItem tittle="Membros" icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-2">
          <NavItem tittle="Suporte" icon={Cog} />
          <NavItem tittle="Configuracoes" icon={LifeBuoy} />
        </nav>
      </div>
      <div>
        <Profile />
      </div>
    </aside>
  );
}
