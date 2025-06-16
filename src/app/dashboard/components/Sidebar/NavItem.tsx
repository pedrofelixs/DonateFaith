"use client";

import { ElementType, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavItemProps {
  title: string;
  icon: ElementType;
  href?: string;
  children?: { label: string; href: string }[];
  onNavigate?: () => void; 
}

export function NavItem({ title, icon: Icon, href, children, onNavigate }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const hasChildren = children && children.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen(!open);
    } else if (href) {
      router.push(href);
      onNavigate?.(); 
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="group w-full flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-700 transition-colors"
        type="button"
      >
        <Icon className="h-5 w-5 text-gray-500 group-hover:text-blue-300" />
        <span className="flex-1 text-left text-gray-300 group-hover:text-blue-300">
          {title}
        </span>
        {hasChildren &&
          (open ? (
            <ChevronUp className="h-5 w-5 text-gray-500 group-hover:text-blue-300" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-300" />
          ))}
      </button>

      {hasChildren && open && (
        <div className="ml-8 mt-2 space-y-1">
          {children.map((child) => (
            <Link
              key={child.label}
              href={child.href}
              onClick={onNavigate} // ✅ FECHA QUANDO CLICA NO FILHO
              className="block text-sm text-gray-400 hover:text-white"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
