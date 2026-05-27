'use client';

export default function CustomerCarePage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-6">
          <span className="text-[14px] font-black uppercase tracking-[0.3em] text-red-500 block">Support Interface</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Customer <br />Care Protocol.
          </h1>
          <p className="text-black/60 text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
            Our commitment to your performance extends beyond the archive. Explore our care directives for optimal device synchronization.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Technical Sync', desc: 'Facing synchronization issues between your Pro Series and mobile hub? Our technical agents provide 24/7 calibration logs.' },
            { title: 'Archive Status', desc: 'Track your acquisition from the factory to your nerve center. Every movement is logged through our global transit grid.' },
            { title: 'Device Maintenance', desc: 'Preserve the cinematic finish of your hardware. Follow our cleaning and maintenance protocols for peak longevity.' }
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
