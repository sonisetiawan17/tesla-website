import { Quicksand } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import Head from './head';
import './globals.css';

const quicksand = Quicksand({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className={quicksand.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
