"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, Send, UploadCloud, CheckCircle2, Loader2 } from "lucide-react";

export default function TrabalheConosco() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    area: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados para controle de envio
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePillClick = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.area) {
      alert("Por favor, selecione a área de interesse.");
      return;
    }

    if (!file) {
      alert("Por favor, anexe o seu currículo.");
      return;
    }

    setIsSubmitting(true);

    // Preparando os dados e o arquivo para o FormSubmit
    const data = new FormData();
    data.append("Nome", formData.nome);
    data.append("Telefone", formData.telefone);
    data.append("Email", formData.email);
    data.append("Área de Interesse", formData.area);
    data.append("Curriculo", file);

    // Configurações do FormSubmit
    data.append("_subject", `Candidatura - ${formData.area} - ${formData.nome}`);
    data.append("_captcha", "false"); // Desativa o captcha chato para não quebrar o layout
    data.append("_template", "table"); // Formata o e-mail em uma tabela bonita

    try {
      // Envio via AJAX para não recarregar a tela
      const response = await fetch("https://formsubmit.co/ajax/unilabvet@outlook.com", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert("Ocorreu um erro ao enviar sua candidatura. Tente novamente mais tarde.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet e tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col py-6 sm:py-8 overflow-y-auto scrollbar-hide">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <Briefcase className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-3 tracking-tight">
            Trabalhe <span className="text-unilab-red">Conosco</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Coluna Esquerda: Texto Institucional */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-unilab-red"></div>

              <h2 className="text-xl font-bold text-unilab-gray mb-6 flex items-center gap-2">
                🧬 Faça parte da nossa equipe
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-unilab-gray/80 leading-relaxed">
                <p>
                  Acreditamos que a excelência em diagnóstico veterinário é construída por profissionais altamente qualificados, aliados a tecnologia de ponta e processos rigorosamente controlados.
                </p>
                <p>
                  Nosso laboratório atua com foco em <strong className="text-unilab-gray">precisão, confiabilidade e inovação</strong>, oferecendo suporte essencial para a tomada de decisão clínica em medicina veterinária.
                </p>
                <p>
                  Buscamos médicos-veterinários e profissionais da área que valorizem a qualidade técnica, o aprendizado contínuo e a atuação em um ambiente estruturado, colaborativo e orientado por boas práticas laboratoriais.
                </p>
                <p className="font-semibold text-unilab-red pt-2 border-t border-unilab-gray/10">
                  Se você deseja atuar com exames de alta complexidade, participar de uma rotina baseada em evidência científica e contribuir para a evolução da medicina veterinária, teremos interesse em conhecer o seu perfil.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita: Formulário de Candidatura */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="bg-unilab-white p-6 sm:p-8 rounded-2xl border border-unilab-gray/10 shadow-lg h-full flex flex-col justify-center">

              {isSuccess ? (
                // Tela de Sucesso
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center text-[#25D366] mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-unilab-gray mb-2">Candidatura Enviada!</h3>
                  <p className="text-unilab-gray/70 max-w-sm">
                    Agradecemos o seu interesse em fazer parte da equipe Unilab. Seu currículo foi recebido e nosso RH entrará em contato caso seu perfil seja selecionado.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ nome: "", telefone: "", email: "", area: "" });
                      setFile(null);
                    }}
                    className="mt-8 text-unilab-red font-bold hover:underline"
                  >
                    Enviar nova candidatura
                  </button>
                </motion.div>
              ) : (
                // Formulário Padrão
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                  {/* Dados Pessoais */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5 sm:col-span-2">
                      <label htmlFor="nome" className="text-sm font-bold text-unilab-gray">Nome Completo</label>
                      <input id="nome" type="text" required placeholder="Digite seu nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="telefone" className="text-sm font-bold text-unilab-gray">Telefone / WhatsApp</label>
                      <input id="telefone" type="tel" required placeholder="(XX) XXXXX-XXXX" value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-bold text-unilab-gray">E-mail</label>
                      <input id="email" type="email" required placeholder="seu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-unilab-gray/20 bg-unilab-offWhite focus:bg-white focus:outline-none focus:border-unilab-red focus:ring-1 focus:ring-unilab-red transition-all text-sm text-unilab-gray" />
                    </div>
                  </div>

                  {/* Área de Interesse */}
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-unilab-gray">Área de Interesse</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {["Patologia Clínica", "Anatomia Patológica", "Recepção / ADM"].map((opcao) => (
                        <button key={opcao} type="button" onClick={() => handlePillClick("area", opcao)} className={`py-2.5 rounded-xl text-sm font-semibold transition-all border ${formData.area === opcao ? "bg-unilab-red text-white border-unilab-red shadow-md" : "bg-unilab-offWhite text-unilab-gray/70 border-unilab-gray/10 hover:bg-unilab-gray/5"}`}>
                          {opcao}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Upload de Currículo UI */}
                  <div className="flex flex-col gap-1.5">
                    <span className="text-sm font-bold text-unilab-gray">Anexar Currículo (PDF ou Word)</span>
                    <input type="file" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,.doc,.docx" className="hidden" />

                    <div
                      onClick={triggerFileInput}
                      className={`mt-1 border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all ${file ? 'border-[#25D366] bg-[#25D366]/5' : 'border-unilab-gray/20 bg-unilab-offWhite hover:bg-unilab-gray/5 hover:border-unilab-red/30'}`}
                    >
                      {file ? (
                        <>
                          <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-2">
                            <CheckCircle2 className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-bold text-[#25D366] text-center px-4">{file.name}</p>
                          <p className="text-xs text-unilab-gray/50 mt-1">Clique para trocar de arquivo</p>
                        </>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-full bg-unilab-white shadow-sm flex items-center justify-center text-unilab-red mb-3 border border-unilab-gray/10">
                            <UploadCloud className="w-6 h-6" />
                          </div>
                          <p className="text-sm font-bold text-unilab-gray">Clique para selecionar seu currículo</p>
                          <p className="text-xs text-unilab-gray/50 mt-1 text-center">Tamanho máximo: 5MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Botão de Envio com Estado de Loading */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-2 w-full text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wide flex items-center justify-center gap-2 transition-all ${isSubmitting ? 'bg-unilab-gray cursor-not-allowed' : 'bg-unilab-red hover:bg-[#b31b20] hover:shadow-lg active:scale-95'}`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Currículo
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}