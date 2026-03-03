"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
// Import the Lucide icons
import { ShieldCheck, Activity, BookOpen, AlertTriangle, ArrowRight } from 'lucide-react'

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col items-center">
      
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-20 md:py-32 px-6 text-center bg-gradient-to-b from-slate-50 to-white">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-50 border border-blue-100">
          <p className="text-[10px] md:text-xs font-black text-blue-600 uppercase tracking-[0.2em]">
            Human-Centred Security for Nigeria
          </p>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black mb-6 max-w-5xl tracking-tighter leading-[0.85] uppercase text-slate-900">
          Defend Your <span className="text-blue-600">Digital Life.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 font-medium leading-relaxed">
          Master the tactics used by local scammers. From SIM-swaps to AI voice clones, learn to spot the threat before it strikes.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={() => router.push('/learning')}
            className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 active:scale-95 flex items-center gap-2"
          >
            Initialize Lab <ArrowRight size={18} strokeWidth={3} />
          </button>
          <button 
            onClick={() => router.push('/about')}
            className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all active:scale-95"
          >
            View Mission
          </button>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 w-full max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LAB CARD */}
          <div className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-blue-600 transition-all cursor-pointer" onClick={() => router.push('/learning')}>
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-800">Learning Lab</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Step-by-step modules on SIM safety, Bank alerts, and Phone scams.</p>
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest border-b-2 border-blue-600 pb-1">Enter Lab</span>
          </div>

          {/* AUDIT CARD */}
          <div className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-yellow-500 transition-all cursor-pointer" onClick={() => router.push('/audit')}>
            <div className="w-14 h-14 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Activity size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-800">Security Audit</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Test your defenses! Calculate your safety score with our 10-point test.</p>
            <span className="text-yellow-600 font-black text-[10px] uppercase tracking-widest border-b-2 border-yellow-600 pb-1">Check Score</span>
          </div>

          {/* GLOSSARY CARD */}
          <div className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-slate-900 transition-all cursor-pointer" onClick={() => router.push('/glossary')}>
            <div className="w-14 h-14 bg-slate-200 text-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform">
              <BookOpen size={32} strokeWidth={2.5} />
            </div>
            <h3 className="text-2xl font-black mb-4 uppercase tracking-tight text-slate-800">Cyber Glossary</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">Translate technical &quot;big grammar&quot; into simple, everyday Naija terms.</p>
            <span className="text-slate-900 font-black text-[10px] uppercase tracking-widest border-b-2 border-slate-900 pb-1">Learn Terms</span>
          </div>

        </div>
      </section>

      {/* EMERGENCY FLOATING ACTION */}
      <button 
        onClick={() => router.push('/emergency')}
        className="fixed bottom-8 right-8 bg-red-600 text-white font-black py-4 px-8 rounded-full shadow-2xl hover:bg-red-700 transition-all z-50 flex items-center gap-3 animate-pulse border-4 border-white"
      >
         <AlertTriangle size={20} fill="white" className="text-red-600" />
         <span className="uppercase text-xs tracking-widest">I'm Under Attack!</span>
      </button>

    </main>
  )
}