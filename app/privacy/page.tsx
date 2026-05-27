'use client';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white pt-40 pb-32">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-16">
        <div className="space-y-6">
          <span className="text-[14px] font-black uppercase tracking-[0.3em] text-red-500 block">Data Encryption</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-black uppercase leading-[0.9]">
            Privacy <br />Protocol.
          </h1>
          <p className="text-black/60 text-xl font-medium tracking-tight leading-relaxed max-w-2xl">
            Your biometric data, purchase history, and personal information are encrypted end-to-end. We never sell, share, or expose your digital identity.
          </p>
          <p className="text-black/30 text-sm font-bold uppercase tracking-widest">Last updated: May 2026</p>
        </div>

        <div className="grid gap-12">
          {[
            { title: 'Data We Collect', desc: 'We collect only the information you provide: name, email, shipping address, and payment details at checkout. Device telemetry from SmartSockets hardware is anonymized and never linked to your identity.' },
            { title: 'How We Use It', desc: 'Your data powers order fulfillment, customer support, and product improvement. We use anonymized analytics to enhance the shopping experience but never for targeted advertising.' },
            { title: 'Third-Party Sharing', desc: 'We share data only with essential service providers: payment processors (Stripe/M-Pesa), shipping carriers, and our cloud infrastructure partner (Supabase). All partners are bound by strict data agreements.' },
            { title: 'Your Rights', desc: 'You can request a full export or deletion of your data at any time by contacting our support team. We comply with all applicable data protection regulations.' },
            { title: 'Cookie Protocol', desc: 'We use essential cookies for cart state and authentication. No tracking cookies or third-party advertisers operate on our platform.' },
            { title: 'Security Infrastructure', desc: 'All data in transit uses TLS 1.3 encryption. Data at rest is encrypted with AES-256. Our infrastructure is monitored 24/7 for anomalies.' }
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
