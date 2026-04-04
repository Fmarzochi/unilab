"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-80px)] flex items-center bg-unilab-offWhite overflow-hidden">

      {/* Elemento de design ao fundo */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-unilab-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-unilab-red/10 text-unilab-darkRed text-sm font-semibold tracking-wide mb-6">
              Excelência Veterinária
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-unilab-gray leading-tight mb-6">
              Precisão em <span className="font-light">Diagnóstico</span> e <br className="hidden md:block" />
              Banco de <span className="text-unilab-red">Sangue Animal</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-unilab-gray/80 mb-10 max-w-2xl leading-relaxed">
              Infraestrutura de ponta e corpo clínico especializado para garantir o diagnóstico exato e o suporte vital que o seu paciente merece.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4"
          >
            <Link
              href="/exames"
              className="inline-flex justify-center items-center px-8 py-4 bg-unilab-red text-unilab-white rounded-lg font-semibold transition-all hover:bg-unilab-darkRed hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-unilab-red/20"
            >
              Agendar Exame
            </Link>

            {/* BOTÃO CORRIGIDO: Link apontando para a nova página de Resultados */}
            <Link
              href="/resultados"
              className="inline-flex justify-center items-center px-8 py-4 bg-unilab-white text-unilab-gray border border-unilab-gray/20 rounded-lg font-semibold transition-all hover:bg-gray-50 hover:border-unilab-gray/40 active:scale-[0.98]"
            >
              Resultado de Exames
            </Link>

            <Link
              href="/banco-de-sangue"
              className="inline-flex justify-center items-center px-8 py-4 bg-unilab-white text-unilab-gray border border-unilab-gray/20 rounded-lg font-semibold transition-all hover:bg-gray-50 hover:border-unilab-gray/40 active:scale-[0.98]"
            >
              Seja um Doador
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
}