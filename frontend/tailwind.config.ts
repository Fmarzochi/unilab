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
          red: "#9B0000",       // Vermelho escuro oficial da marca (extraído do print)
          darkRed: "#6A0000",   // Um tom ainda mais escuro para os efeitos de interação (hover)
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