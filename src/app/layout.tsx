import type { Metadata } from 'next';
import './_style/globals.css';
import './_style/components.css';
import { ThemeProvider } from '../context/ThemeContext';
import { env } from 'process';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_URL_PRODUCTION}`),
  generator: "Next.js",
  applicationName: 'Website Portofolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Adam', 'Adam setiadi', 'Madam', 'MadamRoger', "Madamroger", "madamroger", "Setiadi", "Portofolio", "Website Portofolio", "Website Portofolio Madamroger", "Website Portofolio Adam Setiadi"],
  authors: [{ name: 'Adam', url: process.env.NEXT_PUBLIC_URL_PRODUCTION }],
  creator: 'Adam Setiadi',
  publisher: 'Adam Setiadi',
  formatDetection: {
    email: true,
    address: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'id-ID': '/id-ID'
    },
  },
  title: {
    absolute: "",
    default: "Madamroger",
    template: "%s | Madamroger"
  },
  description: "Website portofolio Madamroger",
  openGraph: {
    title: "Madamroger",
    description: "Hai! Nama saya Adam Setiadi, saat ini saya tinggal di Bandung, Jawa Barat, Indonesia. Saya sedang menempuh pendidikan di Universitas Bale Bandung",
    url: env.NEXT_PUBLIC_URL_PRODUCTION, 
    siteName: "Madamroger",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Madamroger",
    description: "WHai! Nama saya Adam Setiadi, saat ini saya tinggal di Bandung, Jawa Barat, Indonesia. Saya sedang menempuh pendidikan di Universitas Bale Bandung"
  },
  verification: {
    google: "pg2-6f1k4QpvbM4zw8oQgkvvIzOvBHQJJes4IzWjbFI"

  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem

        >
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
