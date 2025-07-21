export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">Corten Construções</h1>
        <nav className="space-x-6 text-blue-700 font-medium">
          <a href="#sobre" className="hover:text-blue-900">Sobre</a>
          <a href="#servicos" className="hover:text-blue-900">Serviços</a>
          <a href="#projetos" className="hover:text-blue-900">Projetos</a>
          <a href="#contato" className="hover:text-blue-900">Contato</a>
        </nav>
      </div>
    </header>
  );
}
