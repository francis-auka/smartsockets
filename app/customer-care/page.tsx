'use client';
import SeoDescription from '@/components/SeoDescription';

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
            Empowering your connected home. Professional support for all power management systems.
          </p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Setup Assistance', desc: 'Help with connecting your plugs to the Smart Life or Tuya apps.' },
            { title: 'Energy Insights', desc: 'Guides on how to interpret energy monitoring data and set schedules.' },
            { title: 'Resolutions', desc: 'Dedicated agents available for any hardware or software inquiries.' }
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
