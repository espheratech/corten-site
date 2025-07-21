export default function Contato() {
  return (
    <section id="contato" className="py-24 px-4 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Entre em Contato</h2>
        <p className="text-lg mb-4">Vamos conversar sobre o seu projeto.</p>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition"
        >
          Fale conosco via WhatsApp
        </a>
      </div>
    </section>
  );
}
