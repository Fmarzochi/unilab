"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Map, Droplet, Clock } from "lucide-react";
import Image from "next/image";

export default function Contato() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col justify-center py-6 sm:py-8 lg:py-12 overflow-y-auto scrollbar-hide">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-3 tracking-tight">
            Fale <span className="text-unilab-red">Conosco</span>
          </h1>
          <p className="text-base text-unilab-gray/80 leading-relaxed px-2">
            Estamos prontos para atende-los. Entre em contato ou venha nos fazer uma visita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">

          {/* Coluna Esquerda: Mapa e Endereço */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-unilab-white p-4 sm:p-5 rounded-2xl border border-unilab-gray/10 shadow-lg flex flex-col h-full"
          >
            {/* QUADRO INTERNO COM MAPA INTEGRADO E HIPERLINK */}
            <div className="flex-1 bg-unilab-offWhite rounded-xl border border-unilab-gray/10 flex flex-col overflow-hidden mb-4 group">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+Itapemirim,+732+-+Jardim+Ipiranga,+Americana+-+SP,+13468-480"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col h-full"
              >
                {/* Parte Superior: Texto e Ícone */}
                <div className="p-4 flex flex-col items-center justify-center text-center">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md mb-3 text-unilab-red group-hover:scale-110 transition-transform">
                    <Map className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-unilab-gray text-base mb-0.5">Unilab Americana</h3>
                  <p className="text-unilab-gray/70 text-xs font-medium">Laboratório Veterinário</p>
                </div>

                {/* Parte Inferior: O Mapa dentro do quadro com efeito hover */}
                <div className="relative w-full h-32 sm:h-40 border-t border-unilab-gray/10 overflow-hidden">
                  <div className="absolute inset-0 bg-unilab-red/5 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <Image
                    src="/images/mapa-unilab.jpg"
                    alt="Mapa de localização Unilab Americana"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/90 px-2 py-1 rounded text-[9px] font-bold text-unilab-red shadow-sm z-20">
                    VER ROTA NO MAPA
                  </div>
                </div>
              </a>
            </div>

            <div className="flex items-start gap-3 mb-4 px-1">
              <MapPin className="w-5 h-5 text-unilab-red flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-unilab-gray text-base">Nosso Endereço</p>
                <p className="text-unilab-gray/80 text-sm leading-relaxed mt-0.5">
                  Rua Itapemirim, 732<br />
                  Jardim Ipiranga - Americana/SP
                </p>
              </div>
            </div>

            {/* Smart Link: Traçar Rota via GPS - Link e Cor Preservados */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Itapemirim,+732+-+Jardim+Ipiranga,+Americana+-+SP,+13468-480"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full bg-unilab-red text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b31b20] hover:shadow-lg transition-all active:scale-95"
            >
              Traçar Rota no GPS
            </a>
          </motion.div>

          {/* Coluna Direita: Cartões de Contato (IGUAIS AO ORIGINAL) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-3 sm:gap-4 justify-center"
          >
            {/* PLANTÃO BANCO DE SANGUE */}
            <div className="bg-unilab-white p-4 sm:p-5 rounded-2xl border border-unilab-red/30 shadow-lg shadow-unilab-red/5 flex flex-col gap-3 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-unilab-red"></div>
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-unilab-red/10 flex items-center justify-center text-unilab-red flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Droplet className="w-5 h-5" fill="currentColor" strokeWidth={1} />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-unilab-red uppercase tracking-tight">Plantão Banco de Sangue</h2>
                  <p className="text-unilab-gray/70 text-xs sm:text-sm font-semibold">Emergência 24h</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between bg-unilab-offWhite p-2 sm:p-2.5 rounded-xl border border-unilab-gray/10 hover:border-unilab-red/20 transition-colors">
                  <span className="text-sm sm:text-base font-bold text-unilab-gray pl-2">(19) 99115-0546</span>
                  <div className="flex gap-2">
                    <a href="tel:+5519991150546" className="p-2 sm:p-2.5 bg-unilab-white rounded-lg text-unilab-red hover:bg-unilab-red hover:text-white transition-colors border border-unilab-gray/10 active:scale-95">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/5519991150546?text=Olá,%20eu%20vim%20do%20site%20oficial%20da%20Unilab%20e%20preciso%20de%20uma%20bolsa%20de%20sangue%20como%20proceder.%20Poderiam%20me%20ajudar?" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 bg-unilab-white rounded-lg text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors border border-unilab-gray/10 active:scale-95">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between bg-unilab-offWhite p-2 sm:p-2.5 rounded-xl border border-unilab-gray/10 hover:border-unilab-red/20 transition-colors">
                  <span className="text-sm sm:text-base font-bold text-unilab-gray pl-2">(19) 99866-5848</span>
                  <div className="flex gap-2">
                    <a href="tel:+5519998665848" className="p-2 sm:p-2.5 bg-unilab-white rounded-lg text-unilab-red hover:bg-unilab-red hover:text-white transition-colors border border-unilab-gray/10 active:scale-95">
                      <Phone className="w-4 h-4" />
                    </a>
                    <a href="https://wa.me/5519998665848?text=Olá,%20eu%20vim%20do%20site%20oficial%20da%20Unilab%20e%20preciso%20de%20uma%20bolsa%20de%20sangue%20como%20proceder.%20Poderiam%20me%20ajudar?" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 bg-unilab-white rounded-lg text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors border border-unilab-gray/10 active:scale-95">
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ATENDIMENTO COMERCIAL */}
            <div className="bg-unilab-white p-4 sm:p-5 rounded-2xl border border-unilab-gray/10 shadow-md flex flex-col gap-3 group">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-unilab-offWhite flex items-center justify-center text-unilab-gray group-hover:scale-110 transition-transform">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base sm:text-lg font-bold text-unilab-gray uppercase tracking-tight">Atendimento Comercial</h2>
                  <p className="text-unilab-gray/70 text-xs sm:text-sm">Seg a Sex (08h30 - 18h) | Sáb (08h30 - 13h)</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-unilab-offWhite p-2 sm:p-2.5 rounded-xl border border-unilab-gray/10 hover:border-unilab-gray/30 transition-colors">
                <span className="text-sm sm:text-base font-bold text-unilab-gray pl-2">(19) 3406-1779</span>
                <div className="flex gap-2">
                  <a href="tel:+551934061779" className="p-2 sm:p-2.5 bg-unilab-white rounded-lg text-unilab-red hover:bg-unilab-red hover:text-white transition-colors border border-unilab-gray/10 active:scale-95">
                    <Phone className="w-4 h-4" />
                  </a>
                  <a href="https://wa.me/551934061779?text=Olá,%20eu%20vim%20do%20site%20oficial%20da%20Unilab%20e%20preciso%20de%20ajuda%20como%20proceder?" target="_blank" rel="noopener noreferrer" className="p-2 sm:p-2.5 bg-unilab-white rounded-lg text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors border border-unilab-gray/10 active:scale-95">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* E-MAIL */}
            <a
              href="mailto:unilabvet@outlook.com"
              className="group flex items-center gap-4 bg-unilab-white p-3.5 sm:p-5 rounded-2xl border border-unilab-gray/10 hover:border-unilab-red/20 hover:shadow-lg transition-all"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-unilab-offWhite flex items-center justify-center text-unilab-gray group-hover:bg-unilab-red group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-unilab-gray group-hover:text-unilab-red transition-colors">E-mail</h2>
                <p className="text-unilab-gray/70 mt-0.5 text-sm">unilabvet@outlook.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}