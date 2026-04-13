import type { Metadata } from 'next';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = { title: 'Home' };

const episodes = [
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-1-ryomen-sukuna-797865', label: 'Ryomen Sukuna' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-2-for-myself-797866', label: 'Por mim mesmo' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-3-girl-of-steel-797867', label: 'Garota de Aço' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-4-curse-womb-must-die-797868', label: 'Morte ao feto amaldiçoado' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-5-curse-womb-must-die-ii-797869', label: 'Morte ao feto amaldiçoado -II-' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-6-after-rain-797870', label: 'Depois da Chuva' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-7-assault-797871', label: 'Ataque' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-8-boredom-797872', label: 'Tédio' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-9-small-fry-and-reverse-retribution-797873', label: 'Peixes Pequenos e Punições Reversas' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-10-idle-transfiguration-797874', label: 'Transfiguração Inerte' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-11-narrow-minded-797875', label: 'Mente Fechada' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-12-to-you-someday-797876', label: 'Pra você, em algum dia' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-13-tomorrow-797877', label: 'Amanhã' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-14-kyoto-sister-school-exchange-event-group-battle-0-801607', label: 'Intercâmbio na escola irmã de Kyoto - Batalha de Grupos 0' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-15-kyoto-sister-school-exchange-event-group-battle-1-801608', label: 'Intercâmbio na escola irmã de Kyoto - Batalha de Grupos 1' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-16-kyoto-sister-school-exchange-event-group-battle-2-801609', label: 'Intercâmbio na escola irmã de Kyoto - Batalha de Grupos 2' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-17-kyoto-sister-school-exchange-event-group-battle-3-801610', label: 'Intercâmbio na escola irmã de Kyoto - Batalha de Grupos 3' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-18-sage-801611', label: 'Sábio' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-19-black-flash-801612', label: 'Fulgor Negro' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-20-nonstandard-801613', label: 'Fora do Padrão' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-21-jujutsu-koshien-801614', label: 'Jujutsu Koshien' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-22-the-origin-of-blind-obedience-801615', label: 'A origem da obediência cega' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-23-the-origin-of-blind-obedience-2-801616', label: 'A origem da obediência cega - 2 -' },
  { href: 'https://www.crunchyroll.com/pt-br/jujutsu-kaisen/episode-24-accomplices-801617', label: 'Cúmplices' },
];

export default function HomePage() {
  return (
    <section id="corpo">
      <article>
        <header id="cab">
          <h1>Jujutsu Kaisen</h1>
          <p id="alerta">
            <b>AVISO! CONTÉM APENAS INFORMAÇÕES DO ANIME</b>
          </p>
        </header>

        <h2>Sinopse &amp; Info</h2>
        <p>
          Um estudante de colegial chamado Yuji Itadori entra em um clube de
          Ocultismo, porém quando eles encontram um{' '}
          <i>&ldquo;objeto amaldiçoado&rdquo;</i> no qual retiram o selo,
          acabam atraindo criaturas chamadas <i>&ldquo;maldições&rdquo;</i>.
          Depois de atraírem a maldição, Megumi Fushiguro, um estudante de{' '}
          <i>&ldquo;jujutsu&rdquo;</i>, vai salvá-los e com a ajuda de Yuji,
          que havia comido o objeto amaldiçoado e começado a hospedar o rei das
          maldições em seu corpo, a exorcisam. Após essa batalha, a escola de
          Feiticeiros Jujutsu faz um acordo com Itadori. E é desta maneira que
          começa a história do nosso protagonista junto de seus amigos, Megumi
          Fushiguro, Nobara Kugisaki e Satoru Gojo.
        </p>

        <h2>Minha experiência assistindo</h2>
        <p>
          Para ser sincero, no início eu não estava nem um pouco animado com o
          anime, mas agora eu retiro o que eu disse. Depois que você começa
          assistir não tem como parar, a trama extraordinária, personagens com
          propósito e a dublagem espetacular te prendem na tela! Recomendo
          muito que você assista esse anime.
        </p>

        <div className="centered-media">
          <Image
            src="/imagens/imagempagp.png"
            alt="Imagem principal de Jujutsu Kaisen com os protagonistas"
            width={800}
            height={450}
            sizes="(max-width: 500px) 100vw, 800px"
            priority
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>

        <h2>Lista de Episódios</h2>
        <p>
          Atualmente Jujutsu Kaisen possui 24 episódios (Legendado), que são:
        </p>
        <ul>
          {episodes.map((ep, i) => (
            <li key={ep.href}>
              <a
                href={ep.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {String(i + 1).padStart(2, '0')}. {ep.label}
              </a>
            </li>
          ))}
        </ul>

        <h2>Aberturas</h2>
        <video
          controls
          aria-label="Abertura 1 de Jujutsu Kaisen"
        >
          <source src="/videos/op1.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>

        <video
          controls
          aria-label="Abertura 2 de Jujutsu Kaisen"
        >
          <source src="/videos/op2.mp4" type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </video>
      </article>

      <Footer />
    </section>
  );
}
