"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter();

  const pmtPillars = [
    {
      title: "Threat Appraisal",
      desc: "Helping users recognize the severity of 'Formats' (scams) and their own vulnerability to them.",
      icon: "🔍"
    },
    {
      title: "Coping Appraisal",
      desc: "Boosting self-efficacy through simple emergency bank codes and step-by-step reporting guides.",
      icon: "🛠️"
    },
    {
      title: "Cultural Context",
      desc: "Using Naija Pidgin to bypass technical 'grammar' barriers for the 35–55 age demographic.",
      icon: "🇳🇬"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        <button 
          onClick={() => router.push('/')}
          className="text-blue-600 font-bold mb-8 hover:underline flex items-center gap-2"
        >
          ← Back to Hub / Go back house
        </button>

        <header className="mb-12">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tight">The Research Lab</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
            Building <strong>Cyber-Resilience</strong> through Human-Centred Design and Protection Motivation Theory (PMT).
          </p>
        </header>

        {/* PMT DIAGRAM SECTION */}
        <div className="mb-12 bg-white p-8 rounded-[2rem] border-2 border-dashed border-slate-200 text-center">
          <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-6">PMT Framework Flow</p>
          <div className="flex flex-col md:flex-row items-center justify-around gap-6 text-sm font-bold">
            <div className="p-5 bg-red-50 text-red-700 rounded-2xl border border-red-100 w-full">Threat Appraisal</div>
            <div className="text-slate-300 hidden md:block">➜</div>
            <div className="p-5 bg-green-50 text-green-700 rounded-2xl border border-green-100 w-full">Coping Appraisal</div>
            <div className="text-slate-300 hidden md:block">➜</div>
            <div className="p-5 bg-blue-600 text-white rounded-2xl shadow-lg w-full">Protection Motivation</div>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pmtPillars.map((pillar, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </section>

        <section className="bg-slate-900 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl font-black mb-6 uppercase tracking-tight">Methodology Note</h2>
            <p className="text-lg opacity-80 leading-relaxed mb-8">
              Scams in Nigeria are highly social. By blending academic security theory with local lingo, we create a 
              mental "Double-Lock" for users who find traditional security advice too foreign or complicated.
            </p>
            
            <div className="flex flex-col md:flex-row gap-10 pt-10 border-t border-slate-800">
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-1">Lead Researcher</p>
                <p className="font-bold text-xl text-blue-400">Ahmad</p>
              </div>
              <div>
                <p className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-1">Focus Group</p>
                <p className="font-bold text-xl text-blue-400">Nigerian Adults (35–55)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}