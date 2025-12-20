import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
//import AuthInitializer from '@/components/auth/AuthInitializer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'vote-22nd',
  description: 'COES 22nd 투표 시스템 개발 프로젝트',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* 공통 wrapper */}
        <div className="min-h-screen flex justify-center">
          {/* 모바일/웹앱 고정 폭 */}
          <div className="max-w-[375px] w-full bg-yellow min-h-screen overflow-x-hidden shadow-2xl">{children}</div>
        </div>
      </body>
    </html>
  );
}
