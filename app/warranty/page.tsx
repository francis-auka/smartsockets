'use client';
import SeoDescription from '@/components/SeoDescription';

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-6">
          <span className="text-[14px] font-black uppercase tracking-[0.3em] text-red-500 block">Coverage Arc</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Warranty <br />Architecture.
          </h1>
          <p className="text-black/60 text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
            Our smart sockets are engineered for longevity and back by a 1-year manufacturing warranty.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: '12-Month Coverage', desc: 'Protection against relay failure, Wi-Fi module issues, and sensor inaccuracies.' },
            { title: 'Surge Protection', desc: 'Warranty remains valid when used with recommended voltage ranges.' },
            { title: 'Replacement', desc: 'Direct replacement for any verified defective units within the warranty window.' }
          ].map((item, i) => (
             <div key={i} className="bg-[#f5f5f7] p-10 rounded-[2.5rem] border border-black/5 space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-black uppercase">{item.title}</h3>
                <p className="text-black/40 font-bold leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
      <SeoDescription />
    </div>
  );
}
