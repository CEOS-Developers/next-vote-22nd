// src/app/layout.tsx
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ReactQueryProvider } from '@/lib/react-query';

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-dvh">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
