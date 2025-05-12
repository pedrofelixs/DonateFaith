"use client";
import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "@/types/menu";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderLink: React.FC<{ item: HeaderItem }> = ({ item }) => {
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const path = usePathname();
    const handleMouseEnter = () => {
        if (item.submenu) {
            setSubmenuOpen(true);
        }
    };
    const handleMouseLeave = () => {
        setSubmenuOpen(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Link
                href={item.href}
                className={`text-xl flex font-light duration-300  ${path === item.href ? "text-primary " : " text-black/50 dark:text-white/50 hover:text-primary dark:hover:text-primary"
                }`}
            >
                {item.label}
                {item.submenu && (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="0.5em"
                        height="0.5em"
                        viewBox="0 0 14 14"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="0.5"
                            d="m7 10l5 5l5-5"
                        />
                    </svg>
                )}
            </Link>
            {submenuOpen && (
                <div
                    className={`absolute py-2 left-0 mt-0.5 w-10 bg-white dark:bg-darklight dark:text-white shadow-lg rounded-lg `}
                    data-aos="fade-up"
                    data-aos-duration="500"
                >
                    {item.submenu?.map((subItem, index) => (
                        <Link
                            key={index}
                            href={subItem.href}
                            className={`block px-2 py-0.5   ${path === subItem.href
                                ? "bg-primary text-white"
                                : "text-black dark:text-white hover:bg-primary"
                            }`}
                        >
                            {subItem.label}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HeaderLink;
