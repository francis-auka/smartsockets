'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav border-b border-black/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl tracking-tighter font-black text-black">
            SMARTSOCKETS.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {['Indoor', 'Outdoor', 'Smart Home', 'Power'].map((item) => (
              <Link 
                key={item}
                href={`/?category=${item.toLowerCase()}`} 
                className="text-[13px] font-semibold text-black/60 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hidden md:flex p-2 text-black/60 hover:text-black transition">
              <Search size={20} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 text-black transition relative"
            >
              <ShoppingCart size={20} strokeWidth={2.5} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-black text-white text-[9px] flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </span>
              )}
            </button>
            <Link 
              href="/contact" 
              className="hidden md:block text-[12px] font-bold bg-black text-white px-8 py-3 rounded-full hover:bg-black/80 transition shadow-lg shadow-black/10"
            >
              Support
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden glass-nav absolute top-full left-0 w-full border-t border-black/5 py-10 space-y-8 px-10 animate-in fade-in slide-in-from-top-4 duration-500 rounded-b-3xl shadow-2xl">
            {['Indoor', 'Outdoor', 'Smart Home', 'Power'].map((item) => (
              <Link 
                key={item}
                href={`/?category=${item.toLowerCase()}`} 
                className="block text-2xl font-bold text-black"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="pt-6 border-t border-black/5">
               <Link 
                href="/contact" 
                className="block text-center bg-black text-white py-5 rounded-3xl font-bold uppercase tracking-widest text-xs"
                onClick={() => setIsOpen(false)}
              >
                Customer Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
