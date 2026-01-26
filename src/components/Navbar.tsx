"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "My Work", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="relative h-12 w-12">
                                <Image
                                    src="/Mawuli POP Ceiling Logo.png"
                                    alt="Mawuli POP Ceiling"
                                    fill
                                    className="object-contain"
                                    sizes="48px"
                                    priority
                                />
                            </div>
                            <span className="font-heading font-bold text-xl md:text-2xl text-mawuli-black tracking-tight">
                                Mawuli POP Ceiling<span className="text-mawuli-red">.</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-mawuli-black hover:text-mawuli-green font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="px-6 py-2.5 bg-mawuli-green text-white font-bold rounded-md hover:bg-[#1e6f38] transition-colors shadow-lg flex items-center gap-2"
                        >
                            <Phone size={18} />
                            Hire Mawuli
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-mawuli-black hover:text-mawuli-green focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-3 text-base font-medium text-mawuli-black hover:text-mawuli-green hover:bg-gray-50 rounded-md"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="pt-4">
                            <Link
                                href="/contact"
                                className="block w-full text-center px-6 py-3 bg-mawuli-green text-white font-bold rounded-md hover:bg-[#1e6f38] transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Hire Mawuli
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
