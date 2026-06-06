import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { CartProvider } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';

export const metadata: Metadata = {
  metadataBase: new URL('https://smartsockets.co.ke'),
  title: {
    default: 'Smart Sockets Kenya | Remote Power Control & Monitoring',
    template: '%s | Smart Sockets Kenya',
  },
  description: 'Shop the best smart sockets and power solutions in Kenya. Remote control, energy monitoring, and home automation at the best prices on smartsockets.co.ke.',
  keywords: 'smart sockets Kenya, remote power control Nairobi, smart home devices Kenya, energy monitoring sockets, smart plugs Kenya, intelligent power adapter Kenya',
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://smartsockets.co.ke',
    siteName: 'Smart Sockets Kenya',
    title: 'Smart Sockets Kenya | Remote Power Control & Monitoring',
    description: 'The leading provider of intelligent power solutions in Kenya. Smart plugs and Wi-Fi sockets for your home.',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Smart Sockets Kenya Logo',
      },
    ],
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Sockets Kenya',
    description: 'Intelligent power solutions in Kenya. Shop online at smartsockets.co.ke.',
    images: ['/images/logo.png'],
  },
  verification: {
    google: "jbmgHaUZ5gtrMFx7kHxYzkg3KVPnUut006N_kfRotNo"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans">
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
