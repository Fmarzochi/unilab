export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-unilab-white border-t border-unilab-gray/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-sm text-unilab-gray/70">
          Desenvolvido por Felipe Marzochi© | {currentYear}
        </p>
      </div>
    </footer>
  );
}