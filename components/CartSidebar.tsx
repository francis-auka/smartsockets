'use client';

import { useCart } from '@/context/CartContext';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CartSidebar() {
  const { cart, removeFromCart, updateQuantity, cartTotal, isCartOpen, setIsCartOpen } = useCart();
  const whatsappNumber = '254717308051';

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    const orderLines = cart
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} x${item.quantity} - KES ${item.price * item.quantity}`
      )
      .join('\n');

    const message = `Hello SmartSockets,%0A%0AI would like to place an order:%0A%0A${orderLines}%0A%0ATotal: KES ${cartTotal}%0A%0AThank you.`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, '_blank');
  };
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500" 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sidebar - Redesigned for Beats Theme */}
      <div className="absolute inset-y-0 right-0 w-full md:max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-700 md:rounded-l-[3.5rem] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-10 border-b border-black/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#f5f5f7] rounded-full flex items-center justify-center">
              <ShoppingBag size={18} strokeWidth={2.5} className="text-black" />
            </div>
            <h2 className="text-xl font-black tracking-tighter text-black">Your Bag</h2>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="p-3 text-black/20 hover:text-black transition-colors"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-10 py-12 no-scrollbar">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-10">
              <div className="w-24 h-24 bg-[#f5f5f7] rounded-full flex items-center justify-center animate-bounce">
                <ShoppingBag size={32} strokeWidth={1} className="text-black/10" />
              </div>
              <div className="space-y-4">
                <p className="text-xl font-bold tracking-tight text-black">Your bag is empty.</p>
                <p className="text-sm font-medium text-black/30 max-w-[200px] mx-auto">Discover our latest Pro Series and accessories.</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-[12px] font-black uppercase tracking-widest text-white bg-black px-12 py-5 rounded-full hover:scale-105 transition duration-500 shadow-xl shadow-black/20"
              >
                Start Exploring
              </button>
            </div>
          ) : (
            <div className="space-y-14">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-8 group">
                  {/* Image */}
                  <div className="relative w-28 aspect-[4/5] bg-[#f5f5f7] rounded-[2rem] flex-shrink-0 overflow-hidden shadow-lg shadow-black/[0.03]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="112px"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-center gap-6">
                    <div className="space-y-2">
                       <div className="flex justify-between items-start gap-4">
                          <h3 className="text-lg font-black tracking-tight text-black leading-tight uppercase">
                            {item.name}
                          </h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-black/10 hover:text-red-500 transition-colors p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                       </div>
                       <p className="text-[13px] font-bold text-black/40">
                          KES {item.price.toLocaleString()}
                       </p>
                    </div>

                    <div className="flex items-center justify-between mt-auto">
                       <div className="flex items-center bg-[#f5f5f7] rounded-full px-4 py-2 border border-black/5">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-black/30 hover:text-black transition px-3 font-bold"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-xs font-black text-black">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-black/30 hover:text-black transition px-3 font-bold"
                        >
                          +
                        </button>
                       </div>
                       <p className="text-[13px] font-black tracking-tight text-black">
                          KES {(item.price * item.quantity).toLocaleString()}
                       </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="p-10 bg-[#f5f5f7] border-t border-black/5 space-y-8 md:rounded-bl-[3rem]">
            <div className="flex justify-between items-end">
              <div className="space-y-1">
                 <span className="text-[12px] font-bold uppercase tracking-widest text-black/30">Total</span>
                 <p className="text-[11px] font-bold text-black/20 uppercase tracking-widest leading-none">Excluding Shipping</p>
              </div>
              <span className="text-3xl font-black tracking-tighter text-black">
                KES {cartTotal.toLocaleString()}
              </span>
            </div>
            
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-black text-white text-[13px] font-black uppercase tracking-widest py-6 rounded-full hover:scale-[1.02] transition duration-500 shadow-2xl shadow-black/20"
            >
              Checkout via WhatsApp
            </button>
            <p className="text-[10px] font-bold uppercase tracking-widest text-black/20 text-center">
              Secure Checkout Encrypted
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
