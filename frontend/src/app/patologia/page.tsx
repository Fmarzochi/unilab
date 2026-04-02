"use client";

import { motion } from "framer-motion";
import { Microscope, TestTube2, Dna } from "lucide-react";

export default function Patologia() {
  return (
    <div className="min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] bg-unilab-offWhite flex flex-col py-4 sm:py-6 lg:py-8 lg:overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-shrink-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-unilab-red/10 text-unilab-red mb-4">
            <Microscope className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-unilab-gray mb-3 tracking-tight">
            Laboratório de <span className="text-unilab-red">Patologia</span>
          </h1>
          <p className="text-base text-unilab-gray/80 leading-relaxed px-2">
            Estrutura laboratorial completa garantindo diagnósticos precisos, desde exames de rotina até análises teciduais complexas.
          </p>
        </motion.div>
      </div>

      <div className="flex-1 min-h-0 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2 pb-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 h-full">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-unilab-white rounded-2xl border border-unilab-gray/10 shadow-lg flex flex-col h-[500px] lg:h-full overflow-hidden group"
          >
            <div className="p-4 sm:p-6 border-b border-unilab-gray/10 flex items-center gap-4 flex-shrink-0 bg-unilab-white z-10 group-hover:border-unilab-red/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-unilab-offWhite flex items-center justify-center text-unilab-red group-hover:bg-unilab-red group-hover:text-unilab-white transition-colors">
                <TestTube2 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-unilab-gray group-hover:text-unilab-red transition-colors">Patologia Clínica</h2>
                <p className="text-xs text-unilab-gray/60">Monitoramento através de amostras biológicas</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-unilab-white/50">
              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Hematologia</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">Hemograma Completo:</strong> Inclui eritrograma, leucograma e plaquetograma.</li>
                  <li><strong className="text-unilab-gray">Pesquisa de Hemoparasitas:</strong> Identificação de Ehrlichia, Babesia ou Anaplasma.</li>
                  <li><strong className="text-unilab-gray">Contagem de Reticulócitos:</strong> Avaliação da resposta da medula óssea a anemias.</li>
                  <li><strong className="text-unilab-gray">Fibrinogênio:</strong> Indicador de inflamação aguda.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Bioquímica Sérica e Plasmática</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">Função Renal:</strong> Ureia e Creatinina.</li>
                  <li><strong className="text-unilab-gray">Função Hepática:</strong> ALT, AST, FA, GGT, Bilirrubinas e Albumina.</li>
                  <li><strong className="text-unilab-gray">Perfil Lipídico:</strong> Colesterol Total e Triglicerídeos.</li>
                  <li><strong className="text-unilab-gray">Metabolismo de Carboidratos:</strong> Glicemia e Frutosamina.</li>
                  <li><strong className="text-unilab-gray">Eletrólitos e Minerais:</strong> Cálcio, Fósforo, Magnésio, Sódio, Potássio e Cloretos.</li>
                  <li><strong className="text-unilab-gray">Enzimas Pancreáticas:</strong> Amilase e Lipase.</li>
                  <li><strong className="text-unilab-gray">Proteínas:</strong> Totais, Albumina e Globulina.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Urinálise</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">Urina Tipo I (EAS):</strong> Avaliação física, química e sedimentoscopia.</li>
                  <li><strong className="text-unilab-gray">Relação UPC:</strong> Medição precisa da perda de proteína pelo rim.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Coprologia & Imunologia</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">Coproparasitológico:</strong> Pesquisa de helmintos e protozoários.</li>
                  <li><strong className="text-unilab-gray">Sangue Oculto:</strong> Detecção de sangramentos gastrointestinais.</li>
                  <li><strong className="text-unilab-gray">Testes Rápidos (SNAP):</strong> FIV/FeLV, Erliquiose, Cinomose, Leishmaniose e Parvovirose.</li>
                </ul>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Endocrinologia & Líquidos</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">Dosagens Hormonais:</strong> T4 Total/Livre, TSH, Cortisol e Progesterona.</li>
                  <li><strong className="text-unilab-gray">Líquidos Cavitários:</strong> Análise de efusões e líquido cefalorraquidiano.</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="bg-unilab-white rounded-2xl border border-unilab-gray/10 shadow-lg flex flex-col h-[500px] lg:h-full overflow-hidden group"
          >
            <div className="p-4 sm:p-6 border-b border-unilab-gray/10 flex items-center gap-4 flex-shrink-0 bg-unilab-white z-10 group-hover:border-unilab-red/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-unilab-offWhite flex items-center justify-center text-unilab-red group-hover:bg-unilab-red group-hover:text-unilab-white transition-colors">
                <Dna className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-unilab-gray group-hover:text-unilab-red transition-colors">Anatomia Patológica</h2>
                <p className="text-xs text-unilab-gray/60">Alterações morfológicas e diagnósticos definitivos</p>
              </div>
            </div>

            <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-unilab-white/50">
              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Citopatologia</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">CAAF:</strong> Citologia por Agulha Fina para coleta de nódulos ou massas.</li>
                  <li><strong className="text-unilab-gray">Citologia de Impressão:</strong> Feita em lesões ulceradas ou órgãos durante cirurgias.</li>
                  <li><strong className="text-unilab-gray">Citologia Otológica e Vaginal:</strong> Para diagnóstico de otites ou fases do ciclo estral.</li>
                  <li><strong className="text-unilab-gray">Mielograma:</strong> Análise de medula óssea para avaliar células sanguíneas.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Histopatologia</h3>
                <ul className="space-y-2 text-sm text-unilab-gray/80">
                  <li><strong className="text-unilab-gray">Biópsia Incisional ou Excisional:</strong> Análise de fragmentos ou peças cirúrgicas para determinar malignidade.</li>
                  <li><strong className="text-unilab-gray">Colorações Especiais:</strong> PAS ou Ziehl-Neelsen para identificar fungos ou bactérias específicas.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Imuno-histoquímica</h3>
                <p className="text-sm text-unilab-gray/80 leading-relaxed">
                  Exame avançado que utiliza anticorpos para identificar o tipo exato de célula cancerígena, essencial para oncologia veterinária e direcionamento terapêutico preciso.
                </p>
              </div>

              <div className="mb-2">
                <h3 className="font-bold text-unilab-red mb-2 border-b border-unilab-red/10 pb-1 text-sm uppercase tracking-wider">Necropsia</h3>
                <p className="text-sm text-unilab-gray/80 leading-relaxed">
                  Exame macroscópico sistemático para determinar a causa mortis e documentar lesões sistêmicas abrangentes.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}