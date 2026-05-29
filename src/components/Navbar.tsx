"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MegaMenu from "./MegaMenu";

type MenuType =
    | "products"
    | "applications"
    | "features"
    | "about"
    | null;

const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Features", href: "#features" },
    { label: "About", href: '/about' },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<MenuType>(null);

    return (
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/5 bg-black/70 backdrop-blur-xl">
            <div className="relative mx-auto max-w-[1700px] px-6 lg:px-10">
                <div className="flex h-20 items-center justify-between">
                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/images/dotface-logo.svg"
                            alt="DOTFACE Logo"
                            width={178}
                            height={48}
                            priority
                            className="object-contain"
                        />
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div
                        className="relative hidden md:block"
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        <nav className="flex items-center gap-10">
                            {/* HOME */}
                            <a
                                href="#home"
                                className="text-sm uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:text-[#2EC6B4]"
                            >
                                Home
                            </a>

                            {/* PRODUCTS */}
                            <div
                                className="flex h-20 items-center"
                                onMouseEnter={() => setActiveMenu("products")}
                            >
                                <a
                                    href="#products"
                                    className={`text-sm uppercase tracking-[0.25em] transition duration-300 ${activeMenu === "products"
                                        ? "text-[#2EC6B4]"
                                        : "text-white/70 hover:text-[#2EC6B4]"
                                        }`}
                                >
                                    Products
                                </a>
                            </div>

                            {/* APPLICATIONS */}
                            <div
                                className="flex h-20 items-center"
                                onMouseEnter={() => setActiveMenu("applications")}
                            >
                                <a
                                    href="#applications"
                                    className={`text-sm uppercase tracking-[0.25em] transition duration-300 ${activeMenu === "applications"
                                        ? "text-[#2EC6B4]"
                                        : "text-white/70 hover:text-[#2EC6B4]"
                                        }`}
                                >
                                    Applications
                                </a>
                            </div>

                            {/* FEATURES */}
                            <div
                                className="flex h-20 items-center"
                                onMouseEnter={() => setActiveMenu("features")}
                            >
                                <a
                                    href="#features"
                                    className={`text-sm uppercase tracking-[0.25em] transition duration-300 ${activeMenu === "features"
                                        ? "text-[#2EC6B4]"
                                        : "text-white/70 hover:text-[#2EC6B4]"
                                        }`}
                                >
                                    Features
                                </a>
                            </div>

                            {/* ABOUT */}
                            <div
                                className="flex h-20 items-center"
                                onMouseEnter={() => setActiveMenu("about")}
                            >
                                <Link
                                    href="/about"
                                    className={`text-sm uppercase tracking-[0.25em] transition duration-300 ${activeMenu === "about"
                                        ? "text-[#2EC6B4]"
                                        : "text-white/70 hover:text-[#2EC6B4]"
                                        }`}
                                >
                                    About
                                </Link>
                            </div>

                            {/* CONTACT */}
                            <a
                                href="#contact"
                                className="text-sm uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:text-[#2EC6B4]"
                            >
                                Contact
                            </a>
                        </nav>

                        {/* MEGA MENU */}
                        <div
                            className={`absolute left-1/2 top-full z-50 -translate-x-1/2 transition-all duration-300 ${activeMenu
                                ? "visible translate-y-0 opacity-100"
                                : "invisible -translate-y-3 opacity-0"
                                }`}
                            onMouseEnter={() => activeMenu && setActiveMenu(activeMenu)}
                            onMouseLeave={() => setActiveMenu(null)}
                        >
                            {/* Hover Bridge */}
                            <div className="h-5 w-full" />

                            {/* Menu */}
                            <div className="pt-2">
                                {activeMenu && <MegaMenu type={activeMenu} />}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <a
                            href="#contact"
                            className="group relative overflow-hidden border border-[#2EC6B4] bg-[#2EC6B4] px-7 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-transparent hover:text-[#2EC6B4]"
                        >
                            Request Demo
                        </a>
                    </div>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col gap-1.5 md:hidden"
                    >
                        <span className="h-0.5 w-6 bg-white"></span>
                        <span className="h-0.5 w-6 bg-white"></span>
                        <span className="h-0.5 w-6 bg-white"></span>
                    </button>
                </div>

                {/* MOBILE MENU */}
                {menuOpen && (
                    <div className="border-t border-white/10 bg-black/95 py-6 md:hidden">
                        <div className="flex flex-col gap-5">
                            {navItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="border-b border-white/5 pb-4 text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-[#2EC6B4]"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <a
                                href="#contact"
                                onClick={() => setMenuOpen(false)}
                                className="mt-4 flex items-center justify-center border border-[#2EC6B4] bg-[#2EC6B4] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black"
                            >
                                Request Demo
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}