export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-unilab-white border-t border-unilab-gray/10 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <p className="text-sm text-unilab-gray/70">
          Desenvolvido por{" "}
          <a
            href="https://www.linkedin.com/in/felipemarzochi/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-inherit no-underline outline-none"
          >
            Felipe Marzochi
          </a>
          © | {currentYear}
        </p>
      </div>
    </footer>
  );
}