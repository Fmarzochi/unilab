"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, Home, Info, Monitor, Microscope,
  TestTube2, Briefcase, Phone, Droplet
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Quem Somos", href: "/quem-somos", icon: Info },
  { name: "Imagem", href: "/imagem", icon: Monitor },
  { name: "Patologia", href: "/patologia", icon: Microscope },
  { name: "Banco de Sangue", href: "/banco-de-sangue", icon: Droplet },
  { name: "Exames", href: "/exames", icon: TestTube2 },
  { name: "Trabalhe conosco", href: "/trabalhe-conosco", icon: Briefcase },
  { name: "Contato", href: "/contato", icon: Phone },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Header com cor sólida para evitar renderização duplicada */}
      <header className="sticky top-0 z-40 w-full bg-unilab-white border-b border-unilab-gray/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full bg-unilab-white border border-unilab-red flex items-center justify-center group-hover:bg-unilab-red/5 transition-colors flex-shrink-0">
                <Droplet className="w-5 h-5 text-unilab-red" fill="currentColor" strokeWidth={1} />
              </div>
              <span className="text-2xl font-bold text-unilab-gray tracking-tight">
                UNILAB
              </span>
            </Link>

            <nav className="hidden lg:flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors hover:text-unilab-red ${
                    pathname === link.href ? "text-unilab-red border-b-2 border-unilab-red pb-1" : "text-unilab-gray"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Botão Flutuante */}
      <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60]">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center gap-2 bg-unilab-gray text-white px-6 py-3.5 rounded-full shadow-2xl shadow-unilab-gray/40 border border-white/10 transition-transform active:scale-95"
        >
          <Menu className="w-5 h-5" />
          <span className="font-semibold text-sm tracking-wide">Menu</span>
        </button>
      </div>

      {/* Fundo Escuro (Overlay) com cor sólida transparente */}
      <div
        className={`lg:hidden fixed inset-0 bg-unilab-gray/80 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Aba Inferior (Bottom Sheet) */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 bg-unilab-white rounded-t-[2rem] z-[55] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] flex flex-col max-h-[85vh] transition-transform duration-300 ease-out transform ${
          isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-unilab-gray">Navegação</h2>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 bg-unilab-offWhite rounded-full text-unilab-gray hover:text-unilab-red hover:bg-unilab-red/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 overflow-y-auto pb-6 scrollbar-hide">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all ${
                  isActive
                    ? "bg-unilab-red/10 text-unilab-red font-bold"
                    : "text-unilab-gray font-medium hover:bg-unilab-offWhite"
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? "text-unilab-red" : "text-unilab-gray/40"}`} />
                <span className="text-base">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}