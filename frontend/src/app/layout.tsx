import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Unilab - Laboratório Veterinário e Banco de Sangue Animal",
  description: "Infraestrutura de ponta e corpo clínico especializado em diagnósticos precisos e banco de sangue animal em Americana/SP e região.",
  keywords: [
    "laboratório veterinário",
    "exames veterinários",
    "banco de sangue animal",
    "diagnóstico veterinário",
    "clínica veterinária",
    "Americana",
    "SP",
    "Unilab",
    "saúde animal",
    "laudos veterinários"
  ],
  authors: [{ name: "Felipe Marzochi", url: "https://github.com/Fmarzochi" }],
  openGraph: {
    title: "Unilab - Laboratório Veterinário",
    description: "Diagnóstico exato e suporte vital que o seu paciente merece. Atendimento especializado em Americana e região.",
    url: "https://www.unilab.com.br", // Atualize para o domínio real quando o site for pro ar
    siteName: "Unilab Vet",
    images: [
      {
        url: "/images/unilab.svg",
        width: 800,
        height: 600,
        alt: "Logo Unilab Laboratório Veterinário",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/images/unilab.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}