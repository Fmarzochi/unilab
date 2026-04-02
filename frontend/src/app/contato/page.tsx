"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Navigation, MessageCircle, Map } from "lucide-react";

export default function Contato() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col justify-center py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-4 sm:mb-6">
            <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-3 tracking-tight">
            Fale <span className="text-unilab-red">Conosco</span>
          </h1>
          <p className="text-base text-unilab-gray/80 leading-relaxed px-2">
            Estamos prontos para atende-los. Entre em contato ou venha nos fazer uma visita.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">

          {/* Coluna Esquerda: Mapa e Endereço */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-lg flex flex-col h-full"
          >
            <div className="flex-1 bg-unilab-offWhite rounded-xl border border-unilab-gray/10 flex flex-col items-center justify-center p-6 sm:p-8 mb-6 text-center group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md mb-4 text-unilab-red group-hover:scale-110 transition-transform">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-unilab-gray text-lg mb-2">Unilab Americana</h3>
              <p className="text-unilab-gray/70 text-sm">Laboratório Veterinário</p>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <MapPin className="w-6 h-6 text-unilab-red flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-unilab-gray text-lg">Nosso Endereço</p>
                <p className="text-unilab-gray/80 leading-relaxed mt-1">
                  Rua Itapemirim, 732<br />
                  Jardim Ipiranga - 13468-480<br />
                  Americana - SP
                </p>
              </div>
            </div>

            {/* Smart Link: Traçar Rota via GPS */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Rua+Itapemirim,+732+-+Jardim+Ipiranga,+Americana+-+SP,+13468-480"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full bg-unilab-red text-white py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#b31b20] hover:shadow-lg transition-all active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              Traçar Rota no GPS
            </a>
          </motion.div>

          {/* Coluna Direita: Cartões de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col gap-4 justify-center"
          >
            {/* Smart Link: WhatsApp */}
            <a
              href="https://wa.me/551934061779?text=Olá,%20Unilab!%20Gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 sm:gap-6 bg-unilab-white p-4 sm:p-6 rounded-2xl border border-unilab-gray/10 hover:border-[#25D366]/30 hover:shadow-lg hover:shadow-[#25D366]/5 transition-all"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors flex-shrink-0">
                <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-unilab-gray group-hover:text-[#25D366] transition-colors">WhatsApp</h2>
                <p className="text-unilab-gray/70 mt-1">(19) 3406-1779</p>
              </div>
            </a>

            {/* Smart Link: Telefone Fixo */}
            <a
              href="tel:+551934061779"
              className="group flex items-center gap-4 sm:gap-6 bg-unilab-white p-4 sm:p-6 rounded-2xl border border-unilab-gray/10 hover:border-unilab-red/20 hover:shadow-lg hover:shadow-unilab-red/5 transition-all"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center text-unilab-red group-hover:bg-unilab-red group-hover:text-white transition-colors flex-shrink-0">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-unilab-gray group-hover:text-unilab-red transition-colors">Telefone Comercial</h2>
                <p className="text-unilab-gray/70 mt-1">(19) 3406-1779</p>
              </div>
            </a>

            {/* Smart Link: E-mail */}
            <a
              href="mailto:unilabvet@outlook.com"
              className="group flex items-center gap-4 sm:gap-6 bg-unilab-white p-4 sm:p-6 rounded-2xl border border-unilab-gray/10 hover:border-unilab-red/20 hover:shadow-lg hover:shadow-unilab-red/5 transition-all"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-unilab-offWhite flex items-center justify-center text-unilab-red group-hover:bg-unilab-red group-hover:text-white transition-colors flex-shrink-0">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-unilab-gray group-hover:text-unilab-red transition-colors">E-mail</h2>
                <p className="text-unilab-gray/70 mt-1 text-sm sm:text-base">unilabvet@outlook.com</p>
              </div>
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}