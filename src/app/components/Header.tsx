"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
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
      <header
        className={`sticky -top-1 z-50 bg-white shadow-md transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}
      >
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
          <div className="hidden sm:flex md:hidden xl:flex items-center space-x-6 text-gray-800 transition-all duration-300">
            <nav className="hidden xl:flex space-x-6 text-base">
              <Link href="/" className="text-primary">
                HOME
              </Link>
              <Link href="/" className="hover:text-primary">
                ABOUT US
              </Link>
              <Link href="/" className="hover:text-primary">
                TREATMENT PLANS
              </Link>
              <Link href="/" className="hover:text-primary">
                FAQ
              </Link>
              <Link href="/" className="hover:text-primary">
                BLOG
              </Link>
              <Link
                href="/"
                className="hover:text-primary hidden md:inline-block"
              >
                CONTACT US
              </Link>
              <Link href="/" className="hover:text-primary">
                COURSES
              </Link>
            </nav>

            {/* Book Appointment Button - Hidden at md */}
            <Link
              href="/"
              className="bg-primary text-white px-7 py-4 rounded-full border border-hovershed hover:bg-white hover:text-hovershed transition-all duration-300 hidden lg:inline-block"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile Menu Button - Always visible on sm & md */}
          <button
            className="flex xl:hidden text-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white shadow-md absolute top-20 left-0 h-[47vh] w-full py-4 px-6 z-40">
            <Link href="/" className="block py-2 hover:text-primary">
              HOME
            </Link>
            <Link href="/" className="block py-2 hover:text-primary">
              ABOUT US
            </Link>
            <Link href="/" className="block py-2 hover:text-primary">
              TREATMENT PLANS
            </Link>
            <Link href="/" className="block py-2 hover:text-primary">
              FAQ
            </Link>
            <Link href="/" className="block py-2 hover:text-primary">
              BLOG
            </Link>
            <Link href="/" className="block py-2 hover:text-primary">
              CONTACT US
            </Link>
            <Link href="/" className="block py-2 hover:text-primary">
              COURSES
            </Link>
            <Link
              href="/"
              className="block mt-2 bg-primary text-white text-center py-2 rounded-full border border-primary hover:bg-white hover:text-primary"
            >
              BOOK APPOINTMENT
            </Link>
          </div>
        )}
      </header>
    );
};

export default Header;
