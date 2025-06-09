"use client"
import { useState } from "react";
import Logo from "@/components/Layout/Header/Logo";
import { headerData } from "@/components/Layout/Header/Navigation/menuData";
import HeaderLink from "@/components/Layout/Header/Navigation/HeaderLink";

const MobileHeaderLink = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className='fixed top-0 left-1/2 transform -translate-x-1/2 w-full md:w-auto transition-all duration-300 z-50 bg-white/30 dark:bg-gray-500/50 backdrop-blur-2xl backdrop-sepia py-4 px-8 rounded-t-lg md:rounded-lg'>
            <div className='container mx-auto flex items-center justify-between'>
                <Logo />
                <button
                    className='text-black dark:text-white md:hidden'
                    onClick={toggleMenu}
                    title=" Toggle Menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
            <div
                className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-500 flex flex-col items-center gap-6 font-semibold text-lg transform transition-transform ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
                style={{ overflow: 'hidden', marginTop: '1rem' }}
            >
                <ul className="flex flex-col gap-10 w-auto items-center justify-center bg-white dark:bg-gray-500 p-10">
                    {headerData.map((item, index) => (
                        <HeaderLink key={index} item={item} />
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default MobileHeaderLink