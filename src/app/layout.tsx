import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Navbar from '@/components/Navbar/Navbar';
import './globals.css';

const fonteT = localFont({
  src: '../../public/fontes/Mohave-VariableFont_wght.ttf',
  variable: '--font-mohave',
  display: 'swap',
});

const fonteC = localFont({
  src: '../../public/fontes/Lato-Regular.ttf',
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Blog Jujutsu Kaisen',
    template: '%s | Blog JK',
  },
  description: 'Blog pessoal sobre o anime Jujutsu Kaisen',
  icons: {
    icon: '/imagens/icon-site.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fonteT.variable} ${fonteC.variable}`}>
      <body>
        <div id="full">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
