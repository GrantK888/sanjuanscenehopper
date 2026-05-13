import type { Metadata } from 'next';
import { Fraunces, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['opsz'],
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetBrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://sanjuanscenehopper.com'),
  title: 'San Juan Scene Hopper — Old San Juan Golf Cart Adventures',
  description:
    'Effortlessly explore Old San Juan in our street-legal, shaded golf carts. Day rides through the colonial city and adults-only nightlife tours. Wheelchair accessible.',
  keywords: [
    'Old San Juan',
    'Puerto Rico',
    'golf cart tour',
    'San Juan transportation',
    'nightlife tour',
    'accessible tours',
  ],
  openGraph: {
    title: 'San Juan Scene Hopper',
    description:
      'Discover Old San Juan five times faster — in a shaded, street-legal golf cart.',
    url: 'https://sanjuanscenehopper.com',
    siteName: 'San Juan Scene Hopper',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'San Juan Scene Hopper',
    description: 'Old San Juan golf cart adventures — day & night.',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${interTight.variable} ${jetBrains.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
