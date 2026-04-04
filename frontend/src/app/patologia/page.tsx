"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestTube2, Droplet, FlaskConical, Stethoscope, FileText, Bug, Microscope, Scissors, Dna, Activity, Syringe, Search, ChevronDown } from "lucide-react";

// Definição dos Exames Categorizados
const examesData = [
  {
    categoria: "Hematologia",
    icone: Droplet,
    exames: ["Hemograma completo", "Hemograma + pesquisa de hematozoários", "Contagem de plaquetas", "Contagem de reticulócitos"]
  },
  {
    categoria: "Bioquímicos",
    icone: FlaskConical,
    exames: ["ALT", "AST", "Amilase", "Albumina", "Cálcio iônico", "Creatinina", "Cálcio total", "Colesterol", "Fósforo", "Frutosamina", "Fosfatase alcalina", "GGT", "Glicose", "Lipidograma", "Lipase", "Ureia", "Sódio e potássio", "Triglicérides", "UPC (relação proteína/creatinina urinária)"]
  },
  {
    categoria: "Bioquímicos por Função",
    icone: Stethoscope,
    exames: ["Função renal", "Função hepática", "Função pancreática exócrina"]
  },
  {
    categoria: "Urinálise",
    icone: FileText,
    exames: ["Urinálise"]
  },
  {
    categoria: "Microbiologia",
    icone: Bug,
    exames: ["Cultura e antibiograma (9 antibióticos)", "Cultura e antibiograma (18 antibióticos)", "Cultura de fungos", "Escolha dos antibióticos (opcional)"]
  },
  {
    categoria: "Parasitologia",
    icone: Search,
    exames: ["Coproparasitológico", "Pesquisa de ectoparasitas e exame micológico", "Pesquisa de Malassezia"]
  },
  {
    categoria: "Citopatologia",
    icone: Microscope,
    exames: ["Análise citológica (CAAF)"]
  },
  {
    categoria: "Histopatologia",
    icone: Scissors,
    exames: ["Biópsia", "Histopatológico de peça cirúrgica", "Histopatológico com margem cirúrgica"]
  },
  {
    categoria: "Hormonais",
    icone: Activity,
    exames: ["Supressão à dexametasona", "Estimulação ao ACTH", "17-hidroxiprogesterona", "TSH", "T4 total", "T4 livre por diálise"]
  },
  {
    categoria: "Biologia Molecular (PCR)",
    icone: Dna,
    exames: ["Cinomose", "Parvovirose", "Anaplasma platys", "Ehrlichia canis", "Babesia canis", "Painel anemia felino básico (FIV, FeLV e Micoplasma)", "Painel hemoparasitas canino", "Leptospirose", "Leishmaniose"]
  },
  {
    categoria: "Sorologia / Imunologia",
    icone: Syringe,
    exames: ["ELISA quádruplo (teste rápido)", "Leishmaniose (RIFI + ELISA + diluição total)", "FIV / FeLV (teste rápido)", "Toxoplasmose"]
  },
  {
    categoria: "Perfis (Combinações)",
    icone: TestTube2,
    exames: [
      "Perfil triagem (Hemograma, ALT e Creatinina)",
      "Perfil simples (Hemograma, função renal, ALT e FA)",
      "Perfil pré-cirúrgico (Hemograma, função renal, ALT, FA e glicose)",
      "Perfil clínico (Hemograma, função renal, função hepática, colesterol e triglicérides)",
      "Perfil renal básico (Hemograma, função renal, urinálise, UPC e fósforo)",
      "Perfil renal completo (Hemograma, função renal, urinálise, UPC, fósforo, cálcio, sódio e potássio)",
      "Perfil eletrólitos (Cálcio, fósforo, sódio e potássio)"
    ]
  }
];

export default function Exames() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col py-6 sm:py-8 lg:py-12 overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <TestTube2 className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-3 tracking-tight">
            Guia de <span className="text-unilab-red">Exames</span>
          </h1>
          <p className="text-base text-unilab-gray/80 leading-relaxed px-2">
            Consulte nosso portfólio completo de exames laboratoriais. Clique nas categorias abaixo para visualizar os procedimentos disponíveis.
          </p>
        </motion.div>

        {/* Lista Acordeão */}
        <div className="space-y-3 sm:space-y-4">
          {examesData.map((secao, index) => {
            const Icon = secao.icone;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-unilab-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-unilab-red/30 shadow-md' : 'border-unilab-gray/10 shadow-sm hover:border-unilab-red/20'}`}
              >
                {/* Botão do Acordeão */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-unilab-red text-white' : 'bg-unilab-offWhite text-unilab-red'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-lg text-unilab-gray">{secao.categoria}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-unilab-gray/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                {/* Conteúdo Expansível */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 border-t border-unilab-gray/5">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-3">
                          {secao.exames.map((exame, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-unilab-gray/80">
                              <span className="text-unilab-red mt-1 text-[10px]">●</span>
                              {exame}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}