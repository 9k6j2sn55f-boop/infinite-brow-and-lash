"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F2EDE4]/90 backdrop-blur-md border-b border-stone-300/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Logo Link */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-36 h-10 sm:w-44 sm:h-12 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Infinite Brow & Lash Logo"
              fill
              sizes="(max-width: 640px) 144px, 176px"
              className="object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-[0.2em] font-semibold text-stone-800 uppercase">
          <Link href="/" className="hover:text-stone-950 transition-colors">Home</Link>
          <Link href="/portfolio" className="hover:text-stone-950 transition-colors">Portfolio & Reviews</Link>
          <Link href="/contact" className="hover:text-stone-950 transition-colors">Contact & Booking</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0450744233"
            className="hidden lg:flex items-center gap-2 text-xs text-stone-800 hover:text-stone-950 mr-2 font-semibold tracking-wider"
          >
            <Phone className="w-3.5 h-3.5 text-stone-600" /> 0450 744 233
          </a>

          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-950 hover:bg-stone-800 text-stone-50 font-bold text-xs tracking-widest uppercase transition-all shadow-md"
          >
            Book Appointment <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-800 hover:text-stone-950 focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2EDE4] border-b border-stone-300 px-6 py-6 flex flex-col gap-4 text-sm uppercase tracking-wider font-semibold text-stone-800">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1">Home</Link>
          <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1">Portfolio & Reviews</Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-stone-950 py-1">Contact & Booking</Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 rounded-full bg-stone-950 text-stone-50 font-bold text-xs tracking-widest uppercase"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}