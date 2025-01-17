import React from "react";
import Link from "next/link";
import { LuMountainSnow } from "react-icons/lu";

export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-gray-500/20 bg-slate-950/80 backdrop-blur-sm">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-slate-200 hover:text-slate-100"
                    >
                        <LuMountainSnow className="text-2xl" />
                        <span className="font-semibold">QT Coders</span>
                    </Link>

                    <div className="flex items-center gap-6">
                        <NavLink href="#community">Community</NavLink>
                        <NavLink href="#events">Events</NavLink>
                        <NavLink href="#join">
                            <span className="rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-105">
                                Join Us
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link
            href={href}
            className="text-sm font-medium text-slate-300 transition-colors hover:text-slate-100"
        >
            {children}
        </Link>
    );
}; 