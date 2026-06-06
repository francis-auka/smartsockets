'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="bg-white pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 border-t border-black/5 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-10">
          <div className="space-y-8">
            <Link href="/" className="block">
              <Image src="/images/logo.png" alt="SmartSockets Logo" width={140} height={40} className="h-8 w-auto" />
            </Link>
            <p className="text-black/40 font-bold text-sm max-w-xs leading-relaxed tracking-tight">
              Premium remote power solutions. Engineering the future of home automation and energy management.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-black/30">Explore</h4>
              <ul className="space-y-4">
                <li><Link href="/shop" className="text-sm font-bold text-black/60 hover:text-black transition">Shop All</Link></li>
                <li><Link href="/" className="text-sm font-bold text-black/60 hover:text-black transition">Elite Series</Link></li>
                <li><Link href="/warranty" className="text-sm font-bold text-black/60 hover:text-black transition">Warranty</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-black/30">Connect</h4>
              <ul className="space-y-4">
                <li><Link href="/contact" className="text-sm font-bold text-black/60 hover:text-black transition">Contact</Link></li>
                <li><a href="#" className="text-sm font-bold text-black/60 hover:text-black transition">Instagram</a></li>
                <li><a href="#" className="text-sm font-bold text-black/60 hover:text-black transition">Twitter</a></li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-black/30 mb-8">Newsletter</h4>
            <div className="relative">
              <input type="text" placeholder="Your email" className="w-full bg-[#f5f5f7] border-none rounded-full py-5 px-8 outline-none text-sm font-medium text-black" />
              <button className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 rounded-full font-bold text-[11px] uppercase tracking-tighter">Join</button>
            </div>
          </div>
        </div>
        
        <div className="mt-40 pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[12px] font-bold text-black/20 uppercase tracking-widest">© 2026 SmartSockets Lifestyle.</p>
          <div className="flex gap-10">
            <Link href="/privacy" className="text-[11px] font-bold text-black/20 hover:text-black transition uppercase tracking-widest">Privacy Policy</Link>
            <Link href="/contact" className="text-[11px] font-bold text-black/20 hover:text-black transition uppercase tracking-widest">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
