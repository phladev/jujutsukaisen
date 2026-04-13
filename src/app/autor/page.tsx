import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = { title: 'Autor' };

export default function AutorPage() {
  return (
    <section id="corpo">
      <article>
        <header id="cab">
          <h1>Autor</h1>
          <p id="alerta">
            <b>AVISO! CONTÉM APENAS INFORMAÇÕES DO ANIME</b>
          </p>
        </header>

        <p>
          Depois de ter conhecido tanto sobre Jujutsu Kaisen chegou a hora de
          saber mais sobre quem escreveu essa obra espetacular. Seu nome é{' '}
          <b>Gege Akutami</b>!
        </p>

        <div className="centered-media">
          <Image
            src="/imagens/gege.png"
            alt="Gege Akutami, autor de Jujutsu Kaisen"
            width={300}
            height={300}
            style={{ borderRadius: '8px' }}
          />
        </div>

        <p>
          Gege Akutami, nascido em 26 de fevereiro de 1992, é um mangaká
          japonês mais conhecido por criar Jujutsu Kaisen e seu prequel,{' '}
          <i>Jujutsu Kaisen 0: Jujutsu High</i>. Nascido na província de Iwate,
          Akutami mudou-se para Sendai na província de Miyagi no quinto ano.
          Akutami começou a desenhar mangá imitando um amigo, o que ajudou a
          inspirá-los a se tornarem mangakás profissionais.
        </p>

        <div className="centered-media">
          <Image
            src="/imagens/imagem_01.png"
            alt="Mangá Jujutsu Kaisen 0: Jujutsu High"
            width={600}
            height={400}
            sizes="(max-width: 550px) 100vw, 600px"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <p>
          Em 2017, Gege Akutami iniciou sua primeira serialização com{' '}
          <i>Jujutsu Kaisen 0: Jujutsu High</i>. A série era para ser curta e
          continuou até o Vol. 4. A série era sobre uma criança amaldiçoada que
          entrou em uma escola mágica para se livrar da maldição e ajudar outras
          pessoas em situações semelhantes.
        </p>

        <p>
          Em 2018, devido à boa recepção da série anterior do Akutami, uma
          serialização completa da série foi concedida, a partir da edição
          Weekly Shonen Jump 2018-14. A série foi intitulada <i>Jujutsu Kaisen</i>{' '}
          e foi uma sequência direta de seu trabalho anterior. A história era
          sobre um menino que entrou em uma escola de magia na tentativa de
          coletar e matar todas as partes de um poderoso espírito amaldiçoado.
        </p>

        <div className="centered-media">
          <Image
            src="/imagens/imagem_02.png"
            alt="Mangá Jujutsu Kaisen serialização principal"
            width={600}
            height={400}
            sizes="(max-width: 550px) 100vw, 600px"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </article>

      <Footer />
    </section>
  );
}
