export default function Servicos() {
  return (
    <section id="servicos" className="py-24 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">Nossos Serviços</h2>
        <ul className="grid md:grid-cols-2 gap-8">
          <li className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Construção Residencial</h3>
            <p>Projetos personalizados, do início ao fim, com qualidade e segurança.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Reformas Comerciais</h3>
            <p>Reformas e adaptações para o seu negócio com agilidade e eficiência.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Obras Industriais</h3>
            <p>Infraestrutura robusta e soluções escaláveis para grandes projetos.</p>
          </li>
          <li className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Consultoria Técnica</h3>
            <p>Auxílio profissional na análise e execução de obras civis.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
