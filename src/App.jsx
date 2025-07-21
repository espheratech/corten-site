import Header from './components/Header';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}

