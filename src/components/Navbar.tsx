"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS } from "@/config/routes";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/60 bg-[#081225]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="#" className="flex items-center group transition-opacity hover:opacity-90">
          <Image
            src="/logo.png"
            alt="Forge.lab"
            width={160}
            height={65}
            className="h-10 sm:h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href={NAV_LINKS.proceso} className="hover:text-emerald-400 transition-colors">
            Proceso
          </Link>
          <Link href={NAV_LINKS.soluciones} className="hover:text-emerald-400 transition-colors">
            Soluciones
          </Link>
          <Link href={NAV_LINKS.estandares} className="hover:text-emerald-400 transition-colors">
            Estándares
          </Link>
          <Link href={NAV_LINKS.contacto} className="hover:text-emerald-400 transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href={NAV_LINKS.ctaAgendar}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
          >
            Agendar Llamada
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Alternar menú"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b172a] border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          <Link
            href={NAV_LINKS.proceso}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium text-base"
          >
            Proceso
          </Link>
          <Link
            href={NAV_LINKS.soluciones}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium text-base"
          >
            Soluciones
          </Link>
          <Link
            href={NAV_LINKS.estandares}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium text-base"
          >
            Estándares
          </Link>
          <Link
            href={NAV_LINKS.contacto}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-emerald-400 font-medium text-base"
          >
            Contacto
          </Link>
          <Link
            href={NAV_LINKS.ctaAgendar}
            onClick={() => setMobileMenuOpen(false)}
            className="inline-block w-full text-center px-5 py-3 rounded-full bg-emerald-500 text-white font-semibold text-sm"
          >
            Agendar Llamada
          </Link>
        </div>
      )}
    </header>
  );
}
