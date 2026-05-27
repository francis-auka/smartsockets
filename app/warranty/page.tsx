'use client';

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
            Every SmartSockets piece ships with an engineered warranty protocol. We stand behind every component, every circuit, every relay.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: '12-Month Full Coverage', desc: 'All Pro Series and Core devices are covered under our standard 12-month manufacturing defect protocol. This includes display modules, bio-sensors, and haptic feedback units.' },
            { title: 'Extended Shield Program', desc: 'Upgrade to our 24-month Extended Shield for complete peace of mind. Covers accidental drops, water exposure beyond rating, and battery degradation beyond 20%.' },
            { title: 'Claim Procedure', desc: 'Initiate a warranty claim through our Contact portal or directly via your order dashboard. Include your order ID and a brief diagnostic description. Our agents respond within 48 hours.' },
            { title: 'What\'s Not Covered', desc: 'Intentional damage, unauthorized modifications, cosmetic wear from normal use, and accessories purchased from third-party vendors fall outside our warranty arc.' }
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
