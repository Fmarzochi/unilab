'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-unilab-white border-t border-unilab-gray/10 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-xs sm:text-sm text-unilab-gray/70 font-medium tracking-wide flex justify-center items-center flex-wrap gap-1">
          <span>
            Desenvolvido com ❤️{" "}
            <a
              href="https://www.linkedin.com/company/catchup-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-unilab-gray/80 hover:text-unilab-gray transition-colors cursor-pointer"
            >
              CatchUp Tech
            </a>
          </span>
          <span className="ml-1">&copy;</span>
          <span className="hidden sm:inline mx-1">|</span>
          <span>{currentYear}</span>
        </p>
      </div>
    </footer>
  );
}