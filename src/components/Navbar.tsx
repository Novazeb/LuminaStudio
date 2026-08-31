"use client";

import { useState } from "react";
import Link from "next/link";
import { Camera, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#services", label: "Services" },
    { href: "#booking", label: "Reservation" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/70 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <Camera className="w-7 h-7 text-stone-900 group-hover:scale-105 transition-transform duration-300" />
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
                Lumina Studio
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold hover:text-stone-600 transition-colors uppercase tracking-widest text-stone-800"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#booking"
              className="px-5 py-2.5 bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-widest hover:bg-stone-800 transition-all shadow-sm hover:shadow"
            >
              Book Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-stone-800 hover:text-stone-950 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-stone-200 bg-stone-50/98 backdrop-blur-lg px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-medium tracking-wider uppercase text-stone-800 hover:bg-stone-200/60 rounded-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-3 bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-widest hover:bg-stone-800 transition-colors"
            >
              Book Session Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
