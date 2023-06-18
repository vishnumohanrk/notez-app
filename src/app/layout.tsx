import './globals.css';

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'Notez App',
  description: 'A Note taking app with Rich Text Edting and Markdown support',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-950 font-sans text-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}
