"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`bg-white shadow-md transition-all duration-300 ${
        isScrolled ? "py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12">
        <Link href="/">
          <Image
            src="/i-revive-logo.avif"
            alt="i-REVIVE Logo"
            width={isScrolled ? 250 : 300}
            height={isScrolled ? 80 : 100}
            priority
            className="transition-all duration-300 max-w-[180px] md:max-w-[170px] h-auto"
          />
        </Link>
        <div className="hidden sm:flex md:hidden xl:flex items-center space-x-6 text-gray-800">
          <nav className="hidden xl:flex space-x-6 text-base">
            <Link href="/">HOME</Link>
            <Link href="/about-us">ABOUT US</Link>
            <Link href="/treatment-plans">TREATMENT PLANS</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/blog">BLOG</Link>
            <Link href="/contact-us" className="hidden md:inline-block">
              CONTACT US
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                className="flex items-center space-x-1 hover:text-primary"
              >
                <span>COURSES</span>
                <ChevronDown size={16} />
              </button>
              {isCoursesOpen && (
                <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-40">
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Level 1
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Level 2
                  </Link>
                  <Link
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Level 3
                  </Link>
                </div>
              )}
            </div>
          </nav>
          <Link
            href="/book-appointment"
            className="bg-primary text-white px-7 py-3 rounded-full border border-hovershed hover:bg-white hover:text-hovershed hidden lg:inline-block"
          >
            Book Appointment
          </Link>
        </div>
        <button
          className="flex xl:hidden text-gray-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`xl:hidden bg-white shadow-md fixed top-0 right-0 h-full w-3/4 max-w-sm py-4 px-6 z-40 transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-800"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <X size={28} />
        </button>
        <div className="flex mt-4">
          <Image
            src="/i-revive-logo.avif"
            alt="i-REVIVE Logo"
            width={200}
            height={60}
            className="w-[70%] mb-6"
            priority
          />
        </div>
        <nav className="mt-6 space-y-4">
          <Link href="/" className="block hover:text-primary">
            HOME
          </Link>
          <Link href="/about-us" className="block hover:text-primary">
            ABOUT US
          </Link>
          <Link href="/treatment-plans" className="block hover:text-primary">
            TREATMENT PLANS
          </Link>
          <Link href="/faq" className="block hover:text-primary">
            FAQ
          </Link>
          <Link href="/blog" className="block hover:text-primary">
            BLOG
          </Link>
          <Link href="/contact-us" className="block hover:text-primary">
            CONTACT US
          </Link>
          <button
            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            className="flex items-center space-x-1 hover:text-primary"
          >
            <span>COURSES</span>
            <ChevronDown size={16} />
          </button>
          {isCoursesOpen && (
            <div className="pl-4 space-y-2">
              <Link href="/" className="block hover:text-primary">
                Level 1
              </Link>
              <Link href="/" className="block hover:text-primary">
                Level 2
              </Link>
              <Link href="/" className="block hover:text-primary">
                Level 3
              </Link>
            </div>
          )}
          <Link
            href="/book-appointment"
            className="block mt-4 bg-primary text-white text-center py-2 rounded-full border border-primary hover:bg-white hover:text-primary"
          >
            BOOK APPOINTMENT
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
