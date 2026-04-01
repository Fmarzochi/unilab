"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Droplet } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Quem Somos", path: "/quem-somos" },
  { name: "Imagem", path: "/imagem" },
  { name: "Patologia", path: "/patologia" },
  { name: "Banco de Sangue", path: "/banco-de-sangue" },
  { name: "Exames", path: "/exames" },
  { name: "Trabalhe conosco", path: "/trabalhe-conosco" },
  { name: "Contato", path: "/contato" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-unilab-white/80 backdrop-blur-md border-b border-unilab-gray/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo - Temporária até inserirmos a sua imagem oficial */}
          <Link href="/" className="flex items-center gap-2">
            <Droplet className="text-unilab-red h-8 w-8" />
            <span className="font-bold text-2xl text-unilab-gray tracking-tight">
              UNILAB
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-unilab-red" : "text-unilab-gray hover:text-unilab-red"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-unilab-red"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}