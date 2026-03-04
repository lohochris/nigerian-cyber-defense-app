"use client"
import React from 'react'
import Link from 'next/link'
import { 
  ShieldCheck, 
  Target, 
  Flag, 
  ChevronLeft, 
  Eye, 
  Zap, 
  Megaphone,
  Fingerprint,
  Users
} from 'lucide-react'

export default function AboutPage() {
  const objectives = [
    { title: "Awareness", desc: "Recognizing the 'red flags' before the first click.", icon: <Eye size={24} /> },
    { title: "Resistance", desc: "Hardening devices against SIM swaps and AI cloning.", icon: <ShieldCheck size={24} /> },
    { title: "Reporting", desc: "Building a culture of reporting fraud to authorities.", icon: <Megaphone size={24} /> }
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6 md:p-20 overflow-hidden relative">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation */}
        <Link href="/" className="group text-blue-400 font-black mb-16 inline-flex items-center gap-2 uppercase text-[10px] tracking-[0.3em] hover:text-white transition-all">
          <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Command Center
        </Link>

        {/* Hero Section: The Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 text-blue-500">
               <Fingerprint size={32} />
               <span className="font-black uppercase tracking-[0.4em] text-[10px]">Declassified Intelligence</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
              The <span className="text-blue-600">Guard</span> <br />Initiative
            </h1>
            {/* Justified Hero Text */}
            <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl text-justify [text-justify:inter-word]">
              In an era where <span className="text-white font-bold">₦1.5 Billion</span> can vanish in a single "Mistaken Transfer" scam, silence is a vulnerability. 
              Project Guard bridges the gap between technical security and the everyday user by providing the tools needed to stay ahead of evolving threats.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-md hover:border-blue-500/50 transition-colors">
              <h3 className="text-4xl font-black text-blue-500 mb-2">10M+</h3>
              <p className="text-[9px] uppercase font-black tracking-[0.2em] text-slate-500">Projected Reach</p>
            </div>
            <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/40 relative overflow-hidden group">
              <Zap className="absolute -right-2 -bottom-2 text-blue-400/20 group-hover:scale-110 transition-transform" size={100} />
              <h3 className="text-4xl font-black text-white mb-2">0%</h3>
              <p className="text-[9px] uppercase font-black tracking-[0.2em] text-blue-200 leading-tight">Data Exploitation Policy</p>
            </div>
            <div className="col-span-2 bg-slate-800/50 border border-white/5 p-8 rounded-[2.5rem] backdrop-blur-sm">
               <Users className="text-blue-500 mb-4" size={24} />
               {/* Justified Quote */}
               <p className="text-sm font-medium text-slate-300 italic leading-relaxed text-justify [text-justify:inter-word]">
                "Our goal is simple: To make the Nigerian digital space the hardest environment for a cyber-criminal to operate in by empowering every citizen with defense knowledge."
              </p>
            </div>
          </div>
        </div>

        {/* Aim & Core Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <section className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem]">
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                    <Target size={28} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Our Aim</h2>
                {/* Justified Paragraph */}
                <p className="text-slate-400 leading-relaxed font-medium text-justify [text-justify:inter-word]">
                    To democratize cybersecurity education by translating complex financial threats into 
                    actionable, culturally relevant insights (Pidgin & English) that protect the average 
                    Nigerian's hard-earned money from sophisticated modern fraud.
                </p>
            </section>

            <section className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-[3rem]">
                <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                    <Flag size={28} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">The Vision</h2>
                {/* Justified Paragraph */}
                <p className="text-slate-400 leading-relaxed font-medium text-justify [text-justify:inter-word]">
                    A Nigeria where every smartphone user is a trained 'Commander' capable of identifying, 
                    resisting, and neutralizing social engineering attempts before they cause financial harm, 
                    ensuring a safer digital economy for all people.
                </p>
            </section>
        </div>

        {/* Objectives: The Three Pillars */}
        <section className="relative">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mb-4 italic">Operational Strategy</h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">The Three Pillars</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((obj, i) => (
              <div key={i} className="group p-10 bg-slate-900 border border-white/5 rounded-[3rem] hover:bg-blue-600 transition-all duration-500">
                <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                  {obj.icon}
                </div>
                <h4 className="font-black uppercase tracking-tight text-xl mb-4 group-hover:text-white transition-colors">
                    {obj.title}
                </h4>
                {/* Pillar Descriptions - Justified */}
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-blue-50 transition-colors text-justify [text-justify:inter-word]">
                    {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <div className="mt-32 pt-20 border-t border-white/5 text-center">
            <p className="text-slate-500 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Ready to enlist?</p>
            <Link href="/learning" className="inline-flex bg-white text-black px-12 py-6 rounded-full font-black uppercase text-xs tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
                Access the Learning Lab
            </Link>
        </div>
      </div>
    </main>
  )
}