import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';
import type { Metadata } from 'next';
import { appName, siteUrl } from '@/lib/shared';
import { PublicFooter } from '@/components/public-footer';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: appName, template: `%s | ${appName}` },
  description: 'Public guides to Think4U donations, volunteering, community programs, governance, and support.',
  openGraph: { siteName: appName, type: 'website', locale: 'en_US' },
};

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}<PublicFooter /></Provider>
      </body>
    </html>
  );
}
