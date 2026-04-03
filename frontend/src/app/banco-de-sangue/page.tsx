"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Droplet, Send, HeartPulse, ShieldCheck, User, MapPin } from "lucide-react";

export default function BancoDeSangue() {
  const [formData, setFormData] = useState({
    // Dados do tutor
    tutor: "",
    telefone: "",
    email: "",
    localizacao: "",
    // Dados do pet
    pet: "",
    especie: "",
    raca: "",
    idade: "",
    peso: "",
    // Condições de saúde
    vacinas: "",
    vermifugacao: "",
    condicao: "",
    transfusao: "",
  });

  const handlePillClick = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos botões de seleção (pílulas)
    if (!formData.especie || !formData.vacinas || !formData.vermifugacao || !formData.transfusao) {
      alert("Por favor, preencha todas as opções de seleção (Espécie, Vacinas, Vermifugação e Transfusão).");
      return;
    }

    // Formatação do e-mail com quebras de linha nativas (\n)
    const assunto = "Novo Cadastro de Pet Doador - Banco de Sangue";
    const corpoTexto = `NOVO CADASTRO DE DOADOR DE SANGUE

--- DADOS DO TUTOR ---
Nome do tutor: ${formData.tutor}
Telefone: ${formData.telefone}
E-mail: ${formData.email}
Localização (Cidade/Bairro/Estado): ${formData.localizacao}

--- DADOS DO PET ---
Nome do pet: ${formData.pet}
Espécie: ${formData.especie}
Raça: ${formData.raca}
Idade: ${formData.idade}
Peso: ${formData.peso}

--- CONDIÇÕES DE SAÚDE ---
Vacinas em dia: ${formData.vacinas}
Vermifugação em dia: ${formData.vermifugacao}
Possui alguma condição clínica?: ${formData.condicao || "Nenhuma relatada"}
Já recebeu transfusão?: ${formData.transfusao}`;

    // Codificando o texto para o formato seguro de URL mailto
    const mailtoLink = `mailto:unilabvet@outlook.com?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoTexto)}`;

    // Abre o aplicativo de e-mail padrão do usuário
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col py-6 sm:py-8 overflow-y-auto scrollbar-hide">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0">

        {/* Cabeçalho e Texto Introdutório */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <Droplet className="w-6 h-6" fill="currentColor" strokeWidth={1} />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-unilab-gray mb-6 tracking-tight">
            Programa de <span className="text-unilab-red">Doação de Sangue</span> Veterinário
          </h1>

          <div className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-red/10 shadow-sm text-left flex flex-col gap-4 text-sm sm:text-base text-unilab-gray/80 leading-relaxed relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-unilab-red/50"></div>
            <p>
              Em medicina veterinária avançada, a disponibilidade de sangue é um fator crítico para a realização de procedimentos complexos e atendimentos de emergência. Transfusões são essenciais em cirurgias, tratamentos oncológicos, anemias severas e situações de risco à vida.
            </p>
            <p>
              A doação de sangue entre animais é um ato <strong className="text-unilab-gray">seguro, rigorosamente controlado e conduzido por equipe especializada</strong>, seguindo protocolos clínicos que garantem total cuidado e bem-estar ao doador.
            </p>
            <p>
              Ao integrar o programa de doadores, seu pet passa a contribuir diretamente para a preservação da vida de outros animais, além de contar com acompanhamento clínico e avaliações periódicas de saúde.
            </p>
            <p className="font-semibold text-unilab-gray mt-2">
              Caso tenha interesse em participar, convidamos você a realizar o cadastro abaixo. Nossa equipe fará a análise das informações e entrará em contato para orientação dos próximos passos.
            </p>
          </div>
        </motion.div>

        {/* Formulário de Triagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="bg-unilab-white p-5 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-lg mb-8"
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-unilab-gray/10">
            <HeartPulse className="w-6 h-6 text-unilab-red" />
            <h2 className="text-xl font-bold text-unilab-gray">Cadastro de Pet Doador</h2>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-8">

            {/* SEÇÃO 1: Dados do Tutor */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-unilab-red uppercase tracking-wider flex items-center gap-2">
                <User className="w-4 h-4" /> Dados do Tutor
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="tutor" className="text-sm font-bold text-unilab-gray">Nome do tutor</label>
                  <input id="tutor" type="text" required placeholder="Seu nome completo" value={formData.tutor} onChange={(e) => setFormData({ ...formData, tutor: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="telefone" className="text-sm font-bold text-unilab-gray">Telefone</label>
                  <input id="telefone" type="tel" required placeholder="(XX) XXXXX-XXXX" value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-bold text-unilab-gray">E-mail</label>
                  <input id="email" type="email" required placeholder="seu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="localizacao" className="text-sm font-bold text-unilab-gray flex items-center gap-1.5"><MapPin className="w-4 h-4 text-unilab-red" /> Cidade/Bairro/Estado</label>
                  <input id="localizacao" type="text" required placeholder="Ex: Americana / Jardim Ipiranga / SP" value={formData.localizacao} onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
              </div>
            </div>

            {/* SEÇÃO 2: Dados do Pet */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-unilab-red uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Dados do Pet
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="pet" className="text-sm font-bold text-unilab-gray">Nome do pet</label>
                  <input id="pet" type="text" required placeholder="Nome do animal" value={formData.pet} onChange={(e) => setFormData({ ...formData, pet: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-unilab-gray">Espécie</span>
                  <div className="flex gap-2">
                    {["Canino", "Felino"].map((opcao) => (
                      <button key={opcao} type="button" onClick={() => handlePillClick("especie", opcao)} className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all border ${formData.especie === opcao ? "bg-unilab-red text-white border-unilab-red shadow-md" : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"}`}>
                        {opcao}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label htmlFor="raca" className="text-sm font-bold text-unilab-gray">Raça</label>
                  <input id="raca" type="text" required placeholder="Ex: Golden Retriever, SRD..." value={formData.raca} onChange={(e) => setFormData({ ...formData, raca: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="idade" className="text-sm font-bold text-unilab-gray">Idade</label>
                  <input id="idade" type="text" required placeholder="Ex: 3 anos" value={formData.idade} onChange={(e) => setFormData({ ...formData, idade: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="peso" className="text-sm font-bold text-unilab-gray">Peso</label>
                  <input id="peso" type="text" required placeholder="Ex: 25 kg" value={formData.peso} onChange={(e) => setFormData({ ...formData, peso: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
              </div>
            </div>

            {/* SEÇÃO 3: Condições de Saúde */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-bold text-unilab-red uppercase tracking-wider flex items-center gap-2">
                <HeartPulse className="w-4 h-4" /> Condições de Saúde
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-unilab-gray">Vacinas em dia?</span>
                  <div className="flex gap-2">
                    {["Sim", "Não"].map((opcao) => (
                      <button key={`vac-${opcao}`} type="button" onClick={() => handlePillClick("vacinas", opcao)} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all border ${formData.vacinas === opcao ? "bg-unilab-gray text-white border-unilab-gray shadow-md" : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"}`}>
                        {opcao}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-unilab-gray">Vermifugação em dia?</span>
                  <div className="flex gap-2">
                    {["Sim", "Não"].map((opcao) => (
                      <button key={`verm-${opcao}`} type="button" onClick={() => handlePillClick("vermifugacao", opcao)} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all border ${formData.vermifugacao === opcao ? "bg-unilab-gray text-white border-unilab-gray shadow-md" : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"}`}>
                        {opcao}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-bold text-unilab-gray text-center sm:text-left">Já recebeu transfusão?</span>
                  <div className="flex gap-2">
                    {["Sim", "Não"].map((opcao) => (
                      <button key={`transf-${opcao}`} type="button" onClick={() => handlePillClick("transfusao", opcao)} className={`flex-1 py-2 rounded-xl text-sm font-semibold transition-all border ${formData.transfusao === opcao ? "bg-unilab-gray text-white border-unilab-gray shadow-md" : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"}`}>
                        {opcao}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 sm:col-span-3 mt-2">
                  <label htmlFor="condicao" className="text-sm font-bold text-unilab-gray">Possui alguma condição clínica?</label>
                  <input id="condicao" type="text" placeholder="Se sim, qual? (Deixe em branco se não houver)" value={formData.condicao} onChange={(e) => setFormData({ ...formData, condicao: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                </div>
              </div>
            </div>

            {/* Botão de Envio */}
            <button
              type="submit"
              className="mt-4 w-full bg-unilab-red text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 hover:bg-[#b31b20] hover:shadow-lg transition-all active:scale-95"
            >
              <Send className="w-5 h-5" />
              Enviar Cadastro por E-mail
            </button>

          </form>
        </motion.div>
      </div>
    </div>
  );
}