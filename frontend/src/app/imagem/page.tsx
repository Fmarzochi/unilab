"use client";

import { motion } from "framer-motion";
import { Monitor, Bone, HeartPulse, Activity, Stethoscope } from "lucide-react";

export default function Imagem() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col justify-center py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-4 sm:mb-6">
            <Monitor className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-4 sm:mb-6 tracking-tight">
            Diagnóstico por <span className="text-unilab-red">Imagem</span>
          </h1>
          <p className="text-base sm:text-lg text-unilab-gray/80 leading-relaxed px-2">
            Tecnologia de ponta aliada à expertise médica. Imagens de alta definição para garantir diagnósticos precisos e intervenções seguras na sua rotina clínica.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">

          {/* Card 1: Raio-X */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-unilab-gray/10 shadow-lg shadow-unilab-gray/5 hover:border-unilab-red/20 hover:shadow-xl hover:shadow-unilab-red/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-unilab-red group-hover:text-unilab-white text-unilab-red transition-colors">
              <Bone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-unilab-gray mb-3 sm:mb-4 group-hover:text-unilab-red transition-colors">
              Radiografia Digital (Raio-X)
            </h2>
            <p className="text-sm sm:text-base text-unilab-gray/70 leading-relaxed">
              Sistema de Raio-X digital direto (DR) que proporciona imagens de altíssima resolução em segundos. Essencial para avaliações ortopédicas, torácicas e abdominais, com laudos detalhados para guiar sua conduta.
            </p>
          </motion.div>

          {/* Card 2: Ultrassom */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-unilab-gray/10 shadow-lg shadow-unilab-gray/5 hover:border-unilab-red/20 hover:shadow-xl hover:shadow-unilab-red/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-unilab-red group-hover:text-unilab-white text-unilab-red transition-colors">
              <Monitor className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-unilab-gray mb-3 sm:mb-4 group-hover:text-unilab-red transition-colors">
              Ultrassonografia Abdominal
            </h2>
            <p className="text-sm sm:text-base text-unilab-gray/70 leading-relaxed">
              Avaliação minuciosa de tecidos moles e órgãos internos em tempo real com mapeamento Doppler colorido. Fundamental para diagnósticos abdominais e acompanhamento gestacional.
            </p>
          </motion.div>

          {/* Card 3: Ecocardiograma */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-unilab-gray/10 shadow-lg shadow-unilab-gray/5 hover:border-unilab-red/20 hover:shadow-xl hover:shadow-unilab-red/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-unilab-red group-hover:text-unilab-white text-unilab-red transition-colors">
              <HeartPulse className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-unilab-gray mb-3 sm:mb-4 group-hover:text-unilab-red transition-colors">
              Ecocardiograma
            </h2>
            <p className="text-sm sm:text-base text-unilab-gray/70 leading-relaxed">
              Avaliação ultrassonográfica focada na anatomia e função do coração. Fundamental para o diagnóstico de cardiopatias, análise do fluxo sanguíneo e acompanhamento cardiovascular do paciente.
            </p>
          </motion.div>

          {/* Card 4: Eletrocardiograma */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-unilab-gray/10 shadow-lg shadow-unilab-gray/5 hover:border-unilab-red/20 hover:shadow-xl hover:shadow-unilab-red/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-unilab-red group-hover:text-unilab-white text-unilab-red transition-colors">
              <Activity className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-unilab-gray mb-3 sm:mb-4 group-hover:text-unilab-red transition-colors">
              Eletrocardiograma
            </h2>
            <p className="text-sm sm:text-base text-unilab-gray/70 leading-relaxed">
              Registro da atividade elétrica do coração de forma rápida e não invasiva. Exame essencial para a detecção de arritmias, bloqueios e outras alterações no ritmo cardíaco.
            </p>
          </motion.div>

          {/* Card 5: Pressão Arterial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 bg-unilab-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-unilab-gray/10 shadow-lg shadow-unilab-gray/5 hover:border-unilab-red/20 hover:shadow-xl hover:shadow-unilab-red/5 transition-all group flex flex-col items-center sm:items-start text-center sm:text-left"
          >
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-unilab-red group-hover:text-unilab-white text-unilab-red transition-colors">
              <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-unilab-gray mb-3 sm:mb-4 group-hover:text-unilab-red transition-colors">
              Mensuração de Pressão Arterial
            </h2>
            <p className="text-sm sm:text-base text-unilab-gray/70 leading-relaxed max-w-3xl">
              Aferição da pressão arterial sistêmica por métodos precisos e não invasivos. Indispensável para o monitoramento de pacientes nefropatas, cardiopatas e para a prevenção de hipertensão silenciosa na rotina clínica.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}