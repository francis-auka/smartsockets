'use client';

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-6">
          <span className="text-[14px] font-black uppercase tracking-[0.3em] text-red-500 block">Logistics Grid</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Shipping <br />Synchronization.
          </h1>
          <p className="text-black/60 text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
            We operate an encrypted global transit network. Your archive is tracked in real-time until physical deployment.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Standard Deployment', desc: '3-5 business solar cycles for standard metropolitan transit. Fully tracked from the logistics hub.' },
            { title: 'Express Sync', desc: 'Direct factory-to-center transit within 24-48 hours. Priority sequence on our shipping grid.' },
            { title: 'Global Grid', desc: 'We deliver to over 150 regions worldwide. International customs protocols apply for inter-continental transit.' }
          ].map((item, i) => (
             <div key={i} className="bg-[#f5f5f7] p-10 rounded-[2.5rem] border border-black/5 space-y-4">
                <h3 className="text-2xl font-black tracking-tight text-black uppercase">{item.title}</h3>
                <p className="text-black/40 font-bold leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
