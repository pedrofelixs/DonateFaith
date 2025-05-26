import { ElementType } from "react";
import { ChevronDown } from "lucide-react";

export interface NavItemProps {
    tittle: string;
    icon: ElementType;
}

export function NavItem({ tittle, icon: Icon }: NavItemProps) {
    return (
        <a
            href="#"
            className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-500 transition-colors duration-200 ease-in-out"
        >
            <Icon className="h-5 w-5 text-gray-500 shrink-0 group-hover:text-blue-300" />
            <span className="flex-1 text-left text-gray-300 group-hover:text-blue-300">{tittle}</span>
            <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-300" />
        </a>
    );
}