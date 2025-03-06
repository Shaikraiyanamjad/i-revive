"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdLocationOn, MdMail, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
      <footer className="bg-blackone text-gray-300">
        <div className="container mx-auto px-10 grid grid-cols-1 lg:grid-cols-4 gap-12 items-start pt-10">
          {/* Logo and Quote */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center">
              <div className="relative w-52 h-20">
                <Image
                  src="/i-revive-logof.avif"
                  alt="i-REVIVE Logo"
                  fill
                  sizes="(max-width: 768px) 100px, (max-width: 1200px) 150px, 200px"
                  className="object-contain"
                  priority
                />
              </div>
              
            </Link>
            <p className="mt-4 text-lg leading-relaxed max-w-xs">
              If you think wellness is expensive, then how about illness?
            </p>
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="bg-primary p-3 rounded-full text-white hover:bg-hovershed transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Contact Us",
                "Privacy Policy",
                "Terms & Conditions",
                "Our Blog & News",
                "Our Team",
              ].map((link, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-hovershed cursor-pointer transition-all duration-300 hover:tracking-wider"
                >
                  <IoIosArrowRoundForward size={20} /> {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                "All Services",
                "Cupping (Hijama)",
                "Pain Management",
                "Stress Relief",
                "Detoxification",
                "Circulation Support",
              ].map((service, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 hover:text-hovershed cursor-pointer transition-all duration-300 hover:tracking-wider"
                >
                  <IoIosArrowRoundForward size={20} /> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-xl mb-5">
              Contact Info
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="flex gap-2 transition-all duration-300">
      <MdLocationOn className="text-primary mt-1 flex-shrink-0" size={22} />
      <span className="leading-tight">
        6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam,  
        Hyderabad, Telangana 500028, India
      </span>
    </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:tracking-wider">
                <MdMail className="text-primary" size={22} />
                <Link href="mailto:info@irevive.com">info@irevive.com</Link>
              </li>
              <li className="flex items-center gap-2 transition-all duration-300 hover:tracking-wider">
                <MdPhone className="text-primary" size={22} />
                <Link href="tel:+918009944335">800-9944-335</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-blackshed mt-12 py-4 text-center text-gray-400 flex justify-center items-center px-10">
          <p className="text-lg">
            &copy; 2025{" "}
            <Link
              href="https://www.i-revive.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-hovershed"
            >
              i-REVIVE
            </Link>
            , All rights reserved.
          </p>
        </div>
      </footer>
    );
};

export default Footer;
