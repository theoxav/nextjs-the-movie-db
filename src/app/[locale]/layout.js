import Header from '@/components/ui/layouts/Header/Header';
import { roboto, montserrat } from '../../../fonts';

import './globals.scss';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { availableLocales } from '@/services/i18n';
import AuthProvider from '@/providers/AuthProvider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export function generateStaticParams() {
  return availableLocales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header locale={locale} />
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
