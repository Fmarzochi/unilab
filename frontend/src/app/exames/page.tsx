"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClipboardList, Send } from "lucide-react";

export default function Exames() {
  const [formData, setFormData] = useState({
    responsavel: "",
    paciente: "",
    especie: "",
    sexo: "",
    raca: "",
    castrado: "",
    sintomas: "",
    veterinario: "",
    crmv: "",
    clinica: "",
  });

  const handlePillClick = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação básica para garantir que as pílulas foram selecionadas
    if (!formData.especie || !formData.sexo || !formData.castrado) {
      alert("Por favor, preencha todos os campos de seleção (Espécie, Sexo e Castrado).");
      return;
    }

    // Formatação da mensagem para o WhatsApp
    const texto = `*OLÁ, EU GOSTARIA DE AGENDAR UM EXAME:*%0A%0A*Responsável:* ${formData.responsavel}%0A*Paciente:* ${formData.paciente}%0A*Espécie:* ${formData.especie}%0A*Sexo:* ${formData.sexo}%0A*Raça:* ${formData.raca}%0A*Castrado:* ${formData.castrado}%0A*Sintomas:* ${formData.sintomas}%0A*Veterinário Solicitante:* ${formData.veterinario}%0A*CRMV:* ${formData.crmv}%0A*Clínica:* ${formData.clinica}`;

    const numeroWhatsApp = "551934061779";
    const url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;

    window.open(url, "_blank");
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col py-6 sm:py-8 overflow-y-auto scrollbar-hide">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <ClipboardList className="w-6 h-6" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-unilab-gray mb-2 tracking-tight">
            Agendar <span className="text-unilab-red">Exame</span>
          </h1>
          <p className="text-sm text-unilab-gray/80 leading-relaxed px-2">
            Preencha os dados clínicos do paciente abaixo para iniciar a triagem e o agendamento via WhatsApp.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-unilab-white p-5 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">

            {/* Linha 1: Responsável e Paciente */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="responsavel" className="text-sm font-bold text-unilab-gray">Nome do Responsável</label>
                <input
                  id="responsavel"
                  type="text"
                  required
                  placeholder="Nome completo"
                  value={formData.responsavel}
                  onChange={(e) => setFormData({ ...formData, responsavel: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="paciente" className="text-sm font-bold text-unilab-gray">Nome do Paciente</label>
                <input
                  id="paciente"
                  type="text"
                  required
                  placeholder="Nome do pet"
                  value={formData.paciente}
                  onChange={(e) => setFormData({ ...formData, paciente: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray"
                />
              </div>
            </div>

            {/* Linha 2: Pílulas de Espécie e Sexo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-unilab-gray">Espécie</span>
                <div className="flex gap-2">
                  {["Canino", "Felino"].map((opcao) => (
                    <button
                      key={opcao}
                      type="button"
                      onClick={() => handlePillClick("especie", opcao)}
                      className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all border ${
                        formData.especie === opcao
                          ? "bg-unilab-red text-white border-unilab-red shadow-md"
                          : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-unilab-gray">Sexo</span>
                <div className="flex gap-2">
                  {["Macho", "Fêmea"].map((opcao) => (
                    <button
                      key={opcao}
                      type="button"
                      onClick={() => handlePillClick("sexo", opcao)}
                      className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all border ${
                        formData.sexo === opcao
                          ? "bg-unilab-gray text-white border-unilab-gray shadow-md"
                          : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Linha 3: Raça e Castrado */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="raca" className="text-sm font-bold text-unilab-gray">Raça</label>
                <input
                  id="raca"
                  type="text"
                  required
                  placeholder="Ex: Poodle, SRD, Persa..."
                  value={formData.raca}
                  onChange={(e) => setFormData({ ...formData, raca: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-bold text-unilab-gray">Castrado?</span>
                <div className="flex gap-2">
                  {["Sim", "Não"].map((opcao) => (
                    <button
                      key={opcao}
                      type="button"
                      onClick={() => handlePillClick("castrado", opcao)}
                      className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all border ${
                        formData.castrado === opcao
                          ? "bg-unilab-gray text-white border-unilab-gray shadow-md"
                          : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Linha 4: Sintomas */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-end">
                <label htmlFor="sintomas" className="text-sm font-bold text-unilab-gray">Descreva os sintomas brevemente</label>
                <span className={`text-xs font-semibold ${formData.sintomas.length === 500 ? "text-unilab-red" : "text-unilab-gray/50"}`}>
                  {formData.sintomas.length}/500
                </span>
              </div>
              <textarea
                id="sintomas"
                required
                maxLength={500}
                rows={3}
                placeholder="Relate os sintomas principais ou o motivo do exame..."
                value={formData.sintomas}
                onChange={(e) => setFormData({ ...formData, sintomas: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray resize-none"
              />
            </div>

            {/* Linha 5: Veterinário e CRMV */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="veterinario" className="text-sm font-bold text-unilab-gray">Veterinário Solicitante</label>
                <input
                  id="veterinario"
                  type="text"
                  required
                  placeholder="Nome do profissional"
                  value={formData.veterinario}
                  onChange={(e) => setFormData({ ...formData, veterinario: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="crmv" className="text-sm font-bold text-unilab-gray">CRMV</label>
                <input
                  id="crmv"
                  type="text"
                  required
                  placeholder="Ex: 12345-SP"
                  value={formData.crmv}
                  onChange={(e) => setFormData({ ...formData, crmv: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray"
                />
              </div>
            </div>

            {/* Linha 6: Clínica */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="clinica" className="text-sm font-bold text-unilab-gray">Clínica Veterinária</label>
              <input
                id="clinica"
                type="text"
                required
                placeholder="Nome da clínica de origem"
                value={formData.clinica}
                onChange={(e) => setFormData({ ...formData, clinica: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray"
              />
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="mt-2 w-full bg-unilab-red text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#b31b20] hover:shadow-lg transition-all active:scale-95"
            >
              Agendar exames
            </button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}