"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ShieldCheck, 
  Activity, 
  BookOpen, 
  AlertTriangle, 
  ArrowRight, 
  ShieldAlert, 
  ChevronRight,
  Fingerprint
} from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col items-center selection:bg-blue-100">
      
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-24 md:py-36 px-6 text-center bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-600/5 border border-blue-600/10 backdrop-blur-sm">
          <Fingerprint size={14} className="text-blue-700" />
          <p className="text-[10px] md:text-xs font-black text-blue-700 uppercase tracking-[0.3em]">
            Human-Centred Security • Project Guard
          </p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 max-w-6xl tracking-tighter leading-[0.8] uppercase text-slate-900">
          Shield Your <br className="hidden md:block" /> 
          <span className="text-blue-600">Digital Life.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mb-14 font-medium leading-relaxed">
          Master the tactics used by modern scammers. From SIM-swaps to AI voice clones, learn to spot the threat before it strikes.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <button 
            onClick={() => router.push('/learning')}
            className="group bg-blue-600 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95 flex items-center justify-center gap-3"
          >
            Start Training <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => router.push('/report')}
            className="bg-white text-slate-900 border-2 border-slate-200 px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all active:scale-95 shadow-lg shadow-slate-100"
          >
            Report a Scam
          </button>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-10 w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* LEARNING LAB */}
          <div 
            className="group p-8 rounded-[3rem] bg-slate-50 border-2 border-transparent hover:border-blue-600 hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-2xl" 
            onClick={() => router.push('/learning')}
          >
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-slate-900">Learning Lab</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">Step-by-step modules on SIM safety, Bank alerts, and Phone scams.</p>
            <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em]">
              Initialize <ChevronRight size={14} />
            </div>
          </div>

          {/* SECURITY AUDIT */}
          <div 
            className="group p-8 rounded-[3rem] bg-slate-50 border-2 border-transparent hover:border-yellow-500 hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-2xl" 
            onClick={() => router.push('/audit')}
          >
            <div className="w-16 h-16 bg-yellow-100 text-yellow-700 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <Activity size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-slate-900">Safety Audit</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">Test your defenses! Calculate your safety score with our 10-point test.</p>
            <div className="flex items-center gap-2 text-yellow-600 font-black text-[10px] uppercase tracking-[0.2em]">
              Run Scan <ChevronRight size={14} />
            </div>
          </div>

          {/* CYBER GLOSSARY */}
          <div 
            className="group p-8 rounded-[3rem] bg-slate-50 border-2 border-transparent hover:border-slate-900 hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-2xl" 
            onClick={() => router.push('/glossary')}
          >
            <div className="w-16 h-16 bg-slate-200 text-slate-900 rounded-3xl flex items-center justify-center mb-10 group-hover:rotate-12 transition-transform">
              <BookOpen size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-slate-900">Cyber Lexicon</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">200+ terms. Translate &quot;big grammar&quot; into simple Naija street lingo.</p>
            <div className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-[0.2em]">
              Open Dictionary <ChevronRight size={14} />
            </div>
          </div>

          {/* REPORT SCAM */}
          <div 
            className="group p-8 rounded-[3rem] bg-slate-50 border-2 border-transparent hover:border-red-600 hover:bg-white transition-all cursor-pointer shadow-sm hover:shadow-2xl" 
            onClick={() => router.push('/report')}
          >
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <ShieldAlert size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-slate-900">Action Center</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10">No keep quiet. Contact EFCC, NCC, and INTERPOL directly.</p>
            <div className="flex items-center gap-2 text-red-600 font-black text-[10px] uppercase tracking-[0.2em]">
              Report Case <ChevronRight size={14} />
            </div>
          </div>

        </div>
      </section>

      {/* EMERGENCY FLOATING ACTION */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
        <button 
          onClick={() => router.push('/report')}
          className="bg-red-600 text-white font-black py-5 px-10 rounded-full shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:bg-red-700 transition-all flex items-center gap-3 animate-pulse border-4 border-white active:scale-90"
        >
           <AlertTriangle size={24} fill="white" className="text-red-600" />
           <span className="uppercase text-xs tracking-[0.2em]">I&apos;m Under Attack!</span>
        </button>
      </div>

      <footer className="py-20 text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em]">
        Stay Vigilant • Project Guard 2026
      </footer>

    </main>
  )
}