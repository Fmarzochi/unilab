"use client";

import { motion } from "framer-motion";
import { Users, Microscope, Heart, MapPin, Clock, ShieldCheck, Droplet } from "lucide-react";

export default function QuemSomos() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col py-6 sm:py-8 lg:py-12 overflow-y-auto scrollbar-hide">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Cabeçalho da Página - Ícone alterado para Users */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <Users className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-4 tracking-tight">
            Laboratório <span className="text-unilab-red">Unilab</span>
          </h1>
          <p className="text-base sm:text-lg text-unilab-gray/80 leading-relaxed px-2">
            Conheça a nossa história, nossa estrutura e o compromisso que guia o nosso trabalho todos os dias.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Card 1: Sobre o Laboratório (MANTIDO COM SUAS ALTERAÇÕES) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-2 bg-unilab-white p-6 sm:p-8 lg:p-10 rounded-2xl border border-unilab-gray/10 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-unilab-red"></div>
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="w-6 h-6 text-unilab-red" />
              <h2 className="text-xl sm:text-2xl font-bold text-unilab-gray">Sobre o Laboratório Unilab</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-unilab-gray/80 leading-relaxed">
              <p>
                Nosso Laboratório é referência em diagnósticos veterinários de alta precisão na região de Americana e entorno. Atuamos com tecnologia de ponta, protocolos rigorosos e controle de qualidade em todas as etapas, assegurando resultados confiáveis e consistentes.
              </p>
              <p>
                Mais do que um centro de análises, somos um parceiro estratégico de médicos e clínicas veterinárias, oferecendo suporte completo para a tomada de decisão clínica. Nosso compromisso é fornecer bases diagnósticas sólidas, contribuindo diretamente para condutas mais assertivas, tratamentos eficazes e melhores desfechos para os pacientes.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Excelência no Cuidado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-unilab-red" />
              <h2 className="text-lg sm:text-xl font-bold text-unilab-gray">Excelência no Cuidado e Experiência</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-unilab-gray/80 leading-relaxed">
              <p>
                A experiência do paciente é tratada como parte essencial do processo diagnóstico. Nosso modelo de atendimento foi estruturado para reduzir o estresse e promover bem-estar, desde o acolhimento até a finalização dos exames.
              </p>
              <p>
                Dispomos de ambientes preparados para oferecer conforto e segurança nos procedimentos. Cada detalhe é pensado para proporcionar uma experiência mais humanizada, respeitando as necessidades do animal e a tranquilidade de seus tutores.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Ética e Responsabilidade */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-unilab-red" />
              <h2 className="text-lg sm:text-xl font-bold text-unilab-gray">Ética e Responsabilidade Científica</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-unilab-gray/80 leading-relaxed">
              <p>
                Cada amostra recebida representa uma vida, e é tratada com o mais alto nível de responsabilidade. Nossa atuação é guiada por princípios éticos, rigor científico e respeito absoluto aos pacientes e seus tutores.
              </p>
              <p>
                Trabalhamos com precisão diagnóstica e responsabilidade técnica para entregar resultados confiáveis desde a primeira análise, reduzindo retrabalho e acelerando o início do tratamento. Nosso papel é ser um elo essencial na cadeia de cuidado veterinário, contribuindo para a preservação da vida com seriedade, competência e sensibilidade.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Estrutura e Atuação Regional */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-unilab-red" />
              <h2 className="text-lg sm:text-xl font-bold text-unilab-gray">Estrutura e Atuação Regional</h2>
            </div>
            <div className="space-y-4 text-sm sm:text-base text-unilab-gray/80 leading-relaxed">
              <p>
                O Laboratório Unilab conta com banco de sangue veterinário, operando com plantão emergencial 24 horas, garantindo suporte crítico para clínicas e hospitais em situações de urgência.
              </p>
              <p>
                Além disso, oferecemos serviço de coleta de exames, ampliando a comodidade e a agilidade no atendimento, com atuação em toda a região de Americana e cidades adjacentes.
              </p>
            </div>
          </motion.div>

          {/* Card 5: Horários de Atendimento (Com visual diferenciado) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            className="bg-unilab-offWhite p-6 sm:p-8 rounded-2xl border border-unilab-red/20 shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-unilab-red" />
              <h2 className="text-lg sm:text-xl font-bold text-unilab-gray">Atendimento e Disponibilidade</h2>
            </div>

            <div className="flex flex-col gap-5">
              <div className="bg-white p-4 rounded-xl border border-unilab-gray/10">
                <h3 className="font-bold text-unilab-gray text-sm uppercase tracking-wider mb-2">Atendimento ao Público</h3>
                <ul className="space-y-2 text-sm sm:text-base text-unilab-gray/80">
                  <li className="flex justify-between items-center border-b border-unilab-gray/5 pb-2">
                    <span>Segunda a sexta-feira</span>
                    <span className="font-semibold text-unilab-gray">08h30 às 18h00</span>
                  </li>
                  <li className="flex justify-between items-center pt-1">
                    <span>Sábados</span>
                    <span className="font-semibold text-unilab-gray">08h30 às 13h00</span>
                  </li>
                </ul>
              </div>

              <div className="bg-unilab-red/5 p-4 rounded-xl border border-unilab-red/20">
                <h3 className="font-bold text-unilab-red text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Droplet className="w-4 h-4" /> Banco de Sangue
                </h3>
                <p className="text-sm sm:text-base font-semibold text-unilab-gray flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-unilab-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-unilab-red"></span>
                  </span>
                  Plantão emergencial 24 horas
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}