import type { Metadata } from 'next';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = { title: 'História' };

export default function HistoriaPage() {
  return (
    <section id="corpo">
      <article>
        <header id="cab">
          <h1>História</h1>
          <p id="alerta">
            <b>AVISO! CONTÉM APENAS INFORMAÇÕES DO ANIME</b>
          </p>
        </header>

        <p>
          Yuji foi criado principalmente por seu avô, que ele considerava um
          pai, mas infelizmente ele acaba falecendo e como último desejo ele
          pede a seu neto que proteja os outros com sua força. A vida de Yuji
          muda completamente quando ele come o dedo amaldiçoado de Sukuna e
          vira seu hospedeiro. Após isso ele aprende mais sobre o mundo dos
          feiticeiros Jujutsu e decide ajudar a destruir a maldição do Sukuna,
          comendo todos os 20 dedos e depois morrendo no final, levando o
          Sukuna junto com ele, um feito que só ele poderia fazer.
        </p>

        <p>
          Até o momento o Anime adaptou do volume 1 até o 63 do mangá e terá
          uma segunda temporada prevista para o ano de 2023, porém eles
          adaptarão o volume 0 em um filme chamado{' '}
          <i>&ldquo;Jujutsu Kaisen 0: O Filme&rdquo;</i> ainda neste ano de
          2021. Trailer Oficial abaixo:
        </p>

        <div id="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/MNTGup0yyKI"
            title="Trailer oficial de Jujutsu Kaisen 0: O Filme"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </article>

      <Footer />
    </section>
  );
}
