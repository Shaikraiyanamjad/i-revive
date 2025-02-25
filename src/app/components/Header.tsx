"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 backdrop-blur-md bg-white/90 shadow-md transition-all duration-300 ${isScrolled ? "py-3" : "py-4"}`}>
            <div className="container mx-auto flex justify-between items-center px-6 md:px-12 transition-all duration-300 py-2">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/i-revive-logo.avif"
                        alt="i-REVIVE Logo"
                        width={isScrolled ? 250 : 300} 
                        height={isScrolled ? 80 : 100}  
                        priority
                        sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                        className="transition-all duration-300 max-w-[180px] md:max-w-[200px] h-auto"  
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex md:hidden lg:flex items-center space-x-6 text-gray-800 transition-all duration-300">
                    <nav className="hidden md:flex space-x-6 lg:flex text-base">
                        <Link href="/" className="text-primary">Home</Link>
                        <Link href="/about" className="hover:text-primary">About</Link>
                        <Link href="/services" className="hover:text-primary">Services</Link>

                        {/* Dropdown Menu */}
                        <div className="relative hidden lg:block">
                            <button
                                className="flex items-center hover:text-primary"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Pages <ChevronDown size={16} className="ml-1 transition-transform duration-300" style={{ transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0)" }} />
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute top-8 left-0 bg-white shadow-md rounded-md w-40 py-2 z-50">
                                    <Link href="/page1" className="block px-4 py-2 hover:bg-gray-100">Page 1</Link>
                                    <Link href="/page2" className="block px-4 py-2 hover:bg-gray-100">Page 2</Link>
                                </div>
                            )}
                        </div>

                        <Link href="/contact" className="hover:text-primary hidden md:inline-block">Contact Us</Link>
                    </nav>

                    {/* Book Appointment Button - Hidden at md */}
                    <Link
                        href="/appointment"
                        className="bg-primary text-white px-7 py-1 rounded-full border border-hovershed hover:bg-white hover:text-hovershed transition-all duration-300 hidden lg:inline-block"
                    >
                        Book Appointment
                    </Link>
                </div>

                {/* Mobile Menu Button - Always visible on sm & md */}
                <button className="sm:flex md:flex lg:hidden text-gray-800" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white shadow-md absolute top-16 left-0 w-full py-4 px-6 z-40">
                    <Link href="/" className="block py-2 hover:text-primary">Home</Link>
                    <Link href="/about" className="block py-2 hover:text-primary">About</Link>
                    <Link href="/services" className="block py-2 hover:text-primary">Services</Link>
                    <Link href="/pages" className="block py-2 hover:text-primary">Pages</Link>
                    <Link href="/contact" className="block py-2 hover:text-primary">Contact Us</Link>
                    <Link href="/appointment" className="block mt-2 bg-primary text-white text-center py-2 rounded-full border border-hovershed hover:bg-white hover:text-hovershed">
                        Book Appointment
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Header;
