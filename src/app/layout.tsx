import './globals.css';

import { Inter } from 'next/font/google';

import SupabaseProvider from '@/lib/supabase-provider';

export const metadata = {
  title: 'Notez App',
  description: 'Note Taking app built with Next.js, Supabase, TipTap editor',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-neutral-900 font-sans text-neutral-50 antialiased">
        <SupabaseProvider>{children}</SupabaseProvider>
      </body>
    </html>
  );
}
