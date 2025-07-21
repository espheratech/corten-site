export default function Projetos() {
  return (
    <section id="projetos" className="py-24 px-4 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Projetos Realizados</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Residência em Fortaleza</h3>
            <p>Construção completa com acabamentos premium.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Loja Comercial no Centro</h3>
            <p>Reforma e modernização de espaço comercial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
