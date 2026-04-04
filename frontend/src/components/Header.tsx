"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
        {/* Contêiner DESKTOP: Padding lateral reduzido (lg:px-8 xl:px-12) para dar mais espaço útil ao menu */}
        <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-8 xl:px-12">
          <div className="flex flex-nowrap items-center h-24 lg:h-28">

            {/* === MOBILE: Logo + Texto === */}
            <div className="lg:hidden flex items-center w-full relative">
              <Link href="/" className="flex-shrink-0 z-20">
                <Image
                  src="/images/unilab.svg"
                  alt="Unilab Laboratório Veterinário"
                  width={219}
                  height={150}
                  className="h-16 sm:h-20 w-auto object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </Link>

              <div className="absolute left-0 right-0 flex flex-col justify-center items-center pointer-events-none z-10 ml-16 sm:ml-24">
                <span className="text-2xl sm:text-3xl font-bold text-black leading-tight text-center">
                  Laboratório
                </span>
                <span className="text-2xl sm:text-3xl font-semibold text-unilab-red leading-tight text-center">
                  Veterinário
                </span>
              </div>
            </div>

            {/* === DESKTOP: LOGO (100% INTOCADO) === */}
            <Link href="/" className="hidden lg:flex items-center group flex-shrink-0 mr-8 lg:mr-12">
              <Image
                src="/images/unilab.svg"
                alt="Unilab Laboratório Veterinário"
                width={219}
                height={150}
                className="h-20 lg:h-24 w-auto object-contain transition-transform group-hover:scale-105"
                priority
              />
            </Link>

            {/* === DESKTOP: NAVEGAÇÃO === */}
            <nav className="hidden lg:flex items-center ml-auto gap-3 lg:gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm xl:text-base font-semibold whitespace-nowrap transition-colors hover:text-unilab-red ${
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

      {/* Botão Flutuante Mobile - CORRIGIDO PARA OCULTAR AO ABRIR O MENU */}
      <div className={`lg:hidden fixed bottom-14 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
        isMobileMenuOpen ? "opacity-0 pointer-events-none translate-y-10" : "opacity-100 translate-y-0"
      }`}>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center gap-2 bg-unilab-gray text-white px-6 py-3.5 rounded-full shadow-2xl shadow-unilab-gray/40 border border-white/10 transition-transform active:scale-95"
        >
          <Menu className="w-5 h-5" />
          <span className="font-semibold text-sm tracking-wide">Menu</span>
        </button>
      </div>

      {/* Fundo Escuro Mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-unilab-gray/80 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Aba Inferior Mobile */}
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
                <span className="text-xl">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}