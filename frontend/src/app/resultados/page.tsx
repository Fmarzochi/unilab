"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Stethoscope, Building2, FileSearch, ChevronRight } from "lucide-react";

export default function ResultadosHub() {
  const perfis = [
    {
      id: "tutor",
      titulo: "Sou Tutor",
      descricao: "Acesso aos laudos e histórico de exames do seu pet.",
      icone: User,
      link: "/resultados/tutor",
      delay: 0.2
    },
    {
      id: "veterinario",
      titulo: "Sou Veterinário",
      descricao: "Portal exclusivo para acompanhamento clínico de pacientes.",
      icone: Stethoscope,
      link: "/resultados/veterinario",
      delay: 0.3
    },
    {
      id: "clinica",
      titulo: "Sou Clínica / Hospital",
      descricao: "Gestão integrada de exames e laudos encaminhados.",
      icone: Building2,
      link: "/resultados/clinica",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto w-full">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-6">
            <FileSearch className="w-8 h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-unilab-gray mb-4 tracking-tight">
            Portal de <span className="text-unilab-red">Resultados</span>
          </h1>
          <p className="text-lg text-unilab-gray/70 max-w-2xl mx-auto">
            Selecione o seu perfil abaixo para acessar o painel de laudos e exames de forma rápida e segura.
          </p>
        </motion.div>

        {/* Grid de Seleção de Perfil */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {perfis.map((perfil) => {
            const Icone = perfil.icone;

            return (
              <motion.div
                key={perfil.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: perfil.delay, ease: "easeOut" }}
              >
                <Link href={perfil.link} className="block h-full group">
                  <div className="bg-unilab-white h-full p-8 rounded-2xl border border-unilab-gray/10 shadow-sm hover:shadow-xl hover:border-unilab-red/30 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden">

                    {/* Efeito de hover no background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-unilab-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Ícone */}
                    <div className="w-20 h-20 bg-unilab-offWhite rounded-full flex items-center justify-center mb-6 group-hover:bg-unilab-red group-hover:text-white text-unilab-red transition-colors duration-300 z-10 shadow-inner">
                      <Icone className="w-10 h-10" />
                    </div>

                    {/* Textos */}
                    <h2 className="text-xl font-bold text-unilab-gray mb-3 group-hover:text-unilab-red transition-colors z-10">
                      {perfil.titulo}
                    </h2>
                    <p className="text-unilab-gray/70 text-sm leading-relaxed mb-8 flex-grow z-10">
                      {perfil.descricao}
                    </p>

                    {/* Botão Visual */}
                    <div className="mt-auto flex items-center justify-center gap-2 text-unilab-red font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300 z-10">
                      Acessar Painel
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}