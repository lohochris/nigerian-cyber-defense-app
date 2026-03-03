"use client"
import React from 'react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-6 md:p-20 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <Link href="/" className="text-blue-400 font-black mb-12 inline-block uppercase text-[10px] tracking-widest hover:text-white transition-colors">
          ← Back to Base
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              The <span className="text-blue-500">Guard</span> Mission
            </h1>
            <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8">
              In a world where ₦1.5 Billion can vanish in a "Mistaken Transfer" scam, silence is a vulnerability. 
              Project Guard was built to bridge the gap between technical security and the everyday user.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-3xl font-black text-blue-500 mb-2">10M+</h3>
              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Target Learners</p>
            </div>
            <div className="bg-blue-600 p-8 rounded-3xl shadow-2xl shadow-blue-900/20">
              <h3 className="text-3xl font-black text-white mb-2">0%</h3>
              <p className="text-[10px] uppercase font-bold tracking-widest text-blue-200">Data Selling</p>
            </div>
            <div className="col-span-2 bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <p className="text-sm font-medium text-slate-300 italic">
                "Our goal is simple: To make the Nigerian digital space the hardest environment for a scammer to operate in."
              </p>
            </div>
          </div>
        </div>

        <section className="mt-24">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-12 text-center text-blue-500 italic">The Three Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Awareness", desc: "Recognizing the 'red flags' before the click.", icon: "👁️" },
              { title: "Resistance", desc: "Hardening devices against SIM swaps and AI.", icon: "🛡️" },
              { title: "Reporting", desc: "Building a culture of reporting fraud to authorities.", icon: "📢" }
            ].map((pillar, i) => (
              <div key={i} className="p-8 border border-white/5 rounded-[2rem] hover:bg-white/5 transition-all">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h4 className="font-black uppercase tracking-tight text-lg mb-2">{pillar.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}