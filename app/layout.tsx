import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { CartProvider } from '@/context/CartContext';
import CartSidebar from '@/components/CartSidebar';

export const metadata: Metadata = {
  title: 'Smart Sockets - Remote Power Control',
  description: 'Shop the best smart sockets and power solutions in Kenya. Remote control, energy monitoring, and home automation at the best prices on smartsockets.co.ke.',
  keywords: 'smart sockets Kenya, remote power control Nairobi, smart home devices Kenya, energy monitoring sockets, smart plugs Kenya',
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
