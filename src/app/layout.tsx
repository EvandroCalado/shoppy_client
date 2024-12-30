import type { Metadata } from 'next';
import { Geist } from 'next/font/google';

import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shoppy',
  description: 'A modern online shop',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='pt-BR'>
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
};

export default RootLayout;
