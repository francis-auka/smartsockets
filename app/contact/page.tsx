'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-24 xl:gap-40 items-start">
          {/* Text Content */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-[14px] font-black uppercase tracking-[0.3em] text-red-500 block">Stay Connected</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-black uppercase leading-[0.9]">
                Customer<br />Support.
              </h1>
              <p className="text-black/60 text-xl font-medium tracking-tight max-w-md leading-relaxed">
                Our support team is ready to help you. Reach out to us for technical assistance or order updates.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-12 pt-10">
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl flex items-center justify-center">
                    <Mail size={20} strokeWidth={2.5} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-black uppercase">Email Us</h3>
                  <p className="text-sm font-bold text-black/30 uppercase tracking-widest leading-none">support@smartsockets.co.ke</p>
               </div>
               
               <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl flex items-center justify-center">
                    <Phone size={20} strokeWidth={2.5} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-black uppercase">Call Us</h3>
                  <p className="text-sm font-bold text-black/30 uppercase tracking-widest leading-none">+254 700 000 000</p>
               </div>

               <div className="space-y-4 text-left">
                  <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl flex items-center justify-center">
                    <MapPin size={20} strokeWidth={2.5} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-black uppercase">Our Office</h3>
                  <p className="text-sm font-bold text-black/30 uppercase tracking-widest leading-relaxed">
                    Digital Square, Suite 404<br />Nairobi, Kenya
                  </p>
               </div>

               <div className="space-y-4">
                  <div className="w-12 h-12 bg-[#f5f5f7] rounded-2xl flex items-center justify-center">
                    <Clock size={20} strokeWidth={2.5} className="text-black" />
                  </div>
                  <h3 className="text-lg font-black tracking-tight text-black uppercase">Business Hours</h3>
                  <p className="text-sm font-bold text-black/30 uppercase tracking-widest leading-relaxed">
                    MON — FRI: 08:00 - 18:00<br />SAT: 10:00 - 14:00
                  </p>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f5f5f7] p-10 md:p-16 rounded-[3.5rem] shadow-2xl shadow-black/[0.03]">
             {submitted ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center space-y-8 animate-in fade-in zoom-in duration-500">
                   <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center">
                      <Send size={32} className="text-green-600 ml-1 mt-1" />
                   </div>
                   <div className="space-y-4">
                      <h2 className="text-3xl font-black tracking-tighter text-black uppercase">Message Sent.</h2>
                      <p className="text-black/40 font-bold tracking-tight">Our team has received your message. We'll get back to you within 24 hours.</p>
                   </div>
                   <button onClick={() => setSubmitted(false)} className="bg-black text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest">Send Another Message</button>
                </div>
             ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="space-y-8">
                      <h2 className="text-3xl font-black tracking-tighter text-black uppercase mb-10">Contact Us.</h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                         <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-widest text-black/30 ml-4">Full Name</label>
                            <input required type="text" className="w-full bg-white border-none rounded-full py-5 px-8 outline-none text-sm font-bold text-black focus:ring-2 focus:ring-black/5" />
                         </div>
                         <div className="space-y-3">
                            <label className="text-[11px] font-black uppercase tracking-widest text-black/30 ml-4">Email Address</label>
                            <input required type="email" className="w-full bg-white border-none rounded-full py-5 px-8 outline-none text-sm font-bold text-black focus:ring-2 focus:ring-black/5" />
                         </div>
                      </div>

                      <div className="space-y-3">
                         <label className="text-[11px] font-black uppercase tracking-widest text-black/30 ml-4">Subject</label>
                         <input required type="text" className="w-full bg-white border-none rounded-full py-5 px-8 outline-none text-sm font-bold text-black focus:ring-2 focus:ring-black/5" />
                      </div>

                      <div className="space-y-3">
                         <label className="text-[11px] font-black uppercase tracking-widest text-black/30 ml-4">Message</label>
                         <textarea required rows={6} className="w-full bg-white border-none rounded-[2rem] py-8 px-8 outline-none text-sm font-bold text-black focus:ring-2 focus:ring-black/5 resize-none"></textarea>
                      </div>

                      <button type="submit" className="w-full bg-black text-white text-[13px] font-black uppercase tracking-widest py-6 rounded-full hover:scale-[1.02] active:scale-95 transition duration-500 shadow-2xl shadow-black/20 flex items-center justify-center gap-4 group">
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                   </div>
                </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
