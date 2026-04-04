"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Lock, FileText, AlertCircle, Loader2 } from "lucide-react";

export default function LoginTutor() {
  const [protocolo, setProtocolo] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Reseta o erro ao tentar de novo
    setError(false);
    setIsLoading(true);

    // Simula uma requisição ao banco de dados (1.5 segundos)
    setTimeout(() => {
      setIsLoading(false);
      setError(true); // Sempre dará erro no momento (Mock)
    }, 1500);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

      {/* Elemento decorativo de fundo */}
      <div className="absolute top-0 left-0 -ml-20 -mt-20 w-72 h-72 rounded-full bg-unilab-red/5 blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto w-full relative z-10">

        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Link
            href="/resultados"
            className="inline-flex items-center text-sm font-medium text-unilab-gray/70 hover:text-unilab-red transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para perfis
          </Link>
        </motion.div>

        {/* Card de Login */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-unilab-white p-8 sm:p-10 rounded-3xl border border-unilab-gray/10 shadow-xl"
        >
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-unilab-gray mb-2">
              Acompanhe a saúde do seu melhor amigo
            </h1>
            <p className="text-sm text-unilab-gray/70 leading-relaxed">
              Insira o protocolo e a senha impressos no seu comprovante de atendimento para visualizar ou baixar o laudo do seu pet.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* Input Protocolo */}
            <div>
              <label htmlFor="protocolo" className="block text-sm font-semibold text-unilab-gray mb-1.5">
                Número do Protocolo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <FileText className="h-5 w-5 text-unilab-gray/40" />
                </div>
                <input
                  type="text"
                  id="protocolo"
                  value={protocolo}
                  onChange={(e) => setProtocolo(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-unilab-offWhite border border-unilab-gray/20 rounded-xl text-sm text-unilab-gray focus:ring-2 focus:ring-unilab-red/20 focus:border-unilab-red transition-all outline-none"
                  placeholder="Ex: 123456789"
                  required
                />
              </div>
            </div>

            {/* Input Senha */}
            <div>
              <label htmlFor="senha" className="block text-sm font-semibold text-unilab-gray mb-1.5">
                Senha de Acesso
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-unilab-gray/40" />
                </div>
                <input
                  type="password"
                  id="senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full pl-10 pr-4 py-3 bg-unilab-offWhite border border-unilab-gray/20 rounded-xl text-sm text-unilab-gray focus:ring-2 focus:ring-unilab-red/20 focus:border-unilab-red transition-all outline-none"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            {/* Mensagem de Erro (Aparece apenas quando error for true) */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p><strong>Acesso negado.</strong> Protocolo ou senha inválidos. Verifique as informações no seu comprovante.</p>
              </motion.div>
            )}

            {/* Botão de Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-xl shadow-md text-sm font-bold text-white bg-unilab-red hover:bg-[#b31b20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-unilab-red transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                  Buscando laudos...
                </>
              ) : (
                "Acessar Resultados"
              )}
            </button>

          </form>

          {/* Rodapé do Form */}
          <div className="mt-8 pt-6 border-t border-unilab-gray/10 text-center">
            <p className="text-xs text-unilab-gray/60">
              Perdeu seu comprovante? Entre em contato com a recepção da unidade que realizou o atendimento.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}