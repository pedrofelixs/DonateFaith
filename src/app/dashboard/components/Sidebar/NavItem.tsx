"use client";

import { ElementType, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
  title: string;
  icon: ElementType;
  children?: { label: string; href: string }[];
}

export function NavItem({ title, icon: Icon, children }: NavItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  return (
    <div>
      <button
        onClick={() => hasChildren && setOpen(!open)}
        className="group w-full flex items-center gap-3 rounded px-3 py-2 hover:bg-gray-700 transition-colors"
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
