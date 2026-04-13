import type { Metadata } from 'next';
import CharacterGrid from '@/components/CharacterGrid/CharacterGrid';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = { title: 'Personagens' };

export default function PersonagensPage() {
  return (
    <section id="corpo">
      <article>
        <header id="cab">
          <h1>Personagens</h1>
          <p id="alerta">
            <b>AVISO! CONTÉM APENAS INFORMAÇÕES DO ANIME</b>
          </p>
        </header>

        <p>
          Depois de ter conhecido uma pequena parte desse anime incrível você
          deve estar se perguntando,{' '}
          <i>&ldquo;Como são os personagens?&rdquo;</i>. Vou falar um pouco
          sobre os principais da trama!
        </p>

        <CharacterGrid />
      </article>

      <Footer />
    </section>
  );
}
