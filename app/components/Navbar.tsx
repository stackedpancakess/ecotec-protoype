"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Surface Engineering", href: "#surface" },
    { label: "Why Philippines", href: "#philippines" },
    { label: "Locations", href: "#locations" },
    { label: "Contact", href: "#contact-form" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0f1f3d] border-b border-[#003d7a] shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
          
          <Image
            src="/images/edi_logo.png"
            alt="EDI Philippines"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm">ECOTECASIA</span>
            <span className="text-xs text-gray-300">POWERED BY EDI</span>
          </div>
        </Link>
        

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm hover:text-[#00b4a0] transition duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00b4a0] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[#0f1f3d] border-t border-[#003d7a] overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-sm hover:text-[#00b4a0] transition relative group"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00b4a0] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
