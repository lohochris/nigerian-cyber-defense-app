"use client"
import React, { useState, useEffect } from 'react'
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
  Users,
  LucideIcon
} from 'lucide-react'

/**
 * TYPESCRIPT INTERFACES
 */
interface Objective {
  title: string;
  desc: string;
  icon: LucideIcon;
}

/**
 * OBJECTIVE PILLAR COMPONENT
 * Standardizing the UI for the "Three Pillars" section.
 */
const PillarCard = ({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) => (
  <div className="group p-10 bg-slate-50 border-2 border-transparent rounded-[3rem] 
                  hover:border-blue-600 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-2xl">
    <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 
                    group-hover:scale-110 transition-transform duration-500">
      <Icon size={28} strokeWidth={2.5} />
    </div>
    <h4 className="font-black uppercase tracking-tight text-xl mb-4 text-slate-900 transition-colors">
        {title}
    </h4>
    <p className="text-slate-500 text-sm leading-relaxed text-justify [text-justify:inter-word]">
        {desc}
    </p>
  </div>
);

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const objectives: Objective[] = [
    { title: "Awareness", desc: "Recognizing the 'red flags' before the first click. We simplify the psychology of social engineering.", icon: Eye },
    { title: "Resistance", desc: "Hardening personal devices against SIM swaps, phishing links, and the new wave of AI voice cloning.", icon: ShieldCheck },
    { title: "Reporting", desc: "Building a culture of reporting fraud to authorities to ensure criminals don't walk free.", icon: Megaphone }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      
      {/* HEADER SECTION: Matching Homepage Gradient */}
      <section className="w-full pt-16 pb-10 px-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
        <div className="max-w-6xl mx-auto">
          {/* Navigation */}
          <Link href="/" className="group inline-flex items-center gap-2 text-blue-700 font-black mb-16 uppercase text-[10px] tracking-[0.3em] hover:opacity-70 transition-all cursor-pointer">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Command Center
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6 text-blue-600">
                 <Fingerprint size={32} />
                 <span className="font-black uppercase tracking-[0.4em] text-[10px]">Declassified Intelligence</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-slate-900">
                The <span className="text-blue-600">Guard</span> <br />Initiative
              </h1>
              <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl text-justify [text-justify:inter-word]">
                In an era where <span className="text-blue-600 font-bold">₦1.5 Billion</span> can vanish in a single scam, silence is a vulnerability. 
                Project Guard bridges the gap between technical security and the everyday user.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="bg-slate-50 border-2 border-slate-100 p-8 rounded-[2.5rem] hover:border-blue-500 transition-colors shadow-sm">
                <h3 className="text-4xl font-black text-blue-600 mb-2">10M+</h3>
                <p className="text-[9px] uppercase font-black tracking-[0.2em] text-slate-500">Projected Reach</p>
              </div>
              <div className="bg-blue-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-200 relative overflow-hidden group">
                <Zap className="absolute -right-2 -bottom-2 text-blue-400/20 group-hover:scale-110 transition-transform" size={100} />
                <h3 className="text-4xl font-black text-white mb-2">0%</h3>
                <p className="text-[9px] uppercase font-black tracking-[0.2em] text-blue-100 leading-tight">Data Exploitation Policy</p>
              </div>
              <div className="col-span-2 bg-slate-900 p-8 rounded-[2.5rem] shadow-xl">
                 <Users className="text-blue-400 mb-4" size={24} />
                 <p className="text-sm font-medium text-slate-300 italic leading-relaxed text-justify [text-justify:inter-word]">
                  "Our goal is simple: To make the Nigerian digital space the hardest environment for a cyber-criminal to operate in."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIM & VISION: Consistent Card Styling */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
            <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border-2 border-transparent hover:border-slate-200 transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <Target size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">Our Aim</h2>
                <p className="text-slate-500 leading-relaxed font-medium text-justify [text-justify:inter-word]">
                    To democratize cybersecurity education by translating complex financial threats into 
                    actionable insights that protect the average 
                    citizen's hard-earned money.
                </p>
            </div>

            <div className="bg-slate-50 p-10 md:p-14 rounded-[3rem] border-2 border-transparent hover:border-slate-200 transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <Flag size={28} strokeWidth={2.5} />
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">The Vision</h2>
                <p className="text-slate-500 leading-relaxed font-medium text-justify [text-justify:inter-word]">
                    A Nigeria where every smartphone user is a trained 'Commander' capable of identifying, 
                    resisting, and neutralizing social engineering attempts before they cause financial harm.
                </p>
            </div>
        </div>

        {/* PILLARS SECTION */}
        <div className="text-center mb-16">
          <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 mb-4 italic">Operational Strategy</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900">The Three Pillars</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <PillarCard key={i} icon={obj.icon} title={obj.title} desc={obj.desc} />
          ))}
        </div>

        {/* Footer CTA: Matching Primary Home Button */}
        <div className="mt-32 pt-20 border-t border-slate-100 text-center">
            <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] mb-8">Ready to enlist?</p>
            <Link href="/learning" 
                  className="inline-flex bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase text-xs 
                             tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95 cursor-pointer">
                Access the Learning Lab
            </Link>
        </div>
      </section>

      <footer className="py-20 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
        Stay Vigilant • Project Guard 2026
      </footer>
    </main>
  )
}