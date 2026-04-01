import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        unilab: {
          red: "#D32F2F",       // Vermelho principal para botões e chamadas de ação
          darkRed: "#B71C1C",   // Vermelho escuro para efeitos de interação (hover)
          white: "#FFFFFF",     // Branco puro para o minimalismo (regra do 80/20)
          offWhite: "#F8F9FA",  // Gelo muito sutil para o fundo, evitando cansar a vista
          gray: "#333333",      // Cinza chumbo elegante para os textos
        },
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;