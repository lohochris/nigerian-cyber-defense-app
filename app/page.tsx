"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [isPidgin, setIsPidgin] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = {
    en: {
      title: "Naija Cyber-Resilience Hub",
      subtitle: "Human-Centred Security for Nigerian Adults",
      description: "Protect your money and your data. Learn to identify and stop scams before they happen.",
      label1: "Learning Lab",
      desc1: "Step-by-step modules on SIM safety, Bank alerts, and Phone scams.",
      label2: "Security Audit",
      desc2: "Take our robust 10-question test to calculate your safety score.",
      label3: "Cyber Glossary",
      desc3: "Translate technical 'big grammar' into simple, everyday terms.",
      btn1: "Enter Lab",
      btn2: "Start Quiz",
      btn3: "Open Dictionary",
      emergency: "I'M UNDER ATTACK!",
      ticker: "HOT ALERT: New 'Bank Upgrade' SMS scam reported. Do not click any links! | Your OTP is your secret, never share it!"
    },
    pid: {
      title: "Naija Cyber-Safety Hub",
      subtitle: "Correct security info for every confirm Nigerian",
      description: "Protect your money and your data. No let dem format your brain with fake alerts or wayray links.",
      label1: "Learning Lab",
      desc1: "See how these formatters take run street so you go sabi catch dem.",
      label2: "Check Your Level",
      desc2: "Test your brain! Check if your WhatsApp and Bank App get double-lock.",
      label3: "Cyber Dictionary",
      desc3: "Learn the grammar no let dem format you with big phonetics.",
      btn1: "Enter Lab",
      btn2: "Start Quiz",
      btn3: "Open Dictionary",
      emergency: "🚨 DEM WAN SCAM ME!",
      ticker: "OYA LOOK: New fake NNPC job link dey fly for WhatsApp. No open am! | Your OTP na your life, no give am out!"
    }
  }

  const t = mounted ? (isPidgin ? content.pid : content.en) : content.en;

  if (!mounted) {
    return <div className="min-h-screen bg-white" />;
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans" suppressHydrationWarning>
      {/* SCAM TICKER */}
      <div className="bg-yellow-400 py-2 overflow-hidden whitespace-nowrap border-b border-yellow-600">
        <div className="animate-marquee-infinite inline-block font-bold text-sm uppercase tracking-tight">
          {t.ticker} &nbsp;&nbsp;&nbsp;&nbsp; {t.ticker} &nbsp;&nbsp;&nbsp;&nbsp; {t.ticker}
        </div>
      </div>

      {/* FIXED NAV BAR */}
      <nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 p-4 md:p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div 
            className="font-black text-xl md:text-2xl text-blue-600 tracking-tighter cursor-pointer" 
            onClick={() => router.push('/')}
          >
            CYBER-NAIJA
          </div>
          
          <div className="flex items-center gap-4">
            <button onClick={() => router.push('/about')} className="text-slate-600 font-bold text-xs md:text-sm hover:text-blue-600">
              Research
            </button>
            <button 
              onClick={() => setIsPidgin(!isPidgin)}
              className="bg-slate-900 text-white px-5 py-2 rounded-xl font-bold text-[10px] md:text-xs transition-all shadow-md active:scale-95"
            >
              {isPidgin ? "English Mode" : "Pidgin Mode"}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex-grow flex flex-col items-center justify-center py-16 md:py-24 px-6 text-center">
        <h2 className="text-blue-600 font-black uppercase tracking-[0.3em] mb-4 text-[10px] md:text-xs">{t.subtitle}</h2>
        <h1 className="text-4xl md:text-6xl font-black mb-6 max-w-4xl tracking-tighter leading-tight uppercase text-slate-900">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-14 font-medium leading-relaxed">
          {t.description}
        </p>

        {/* UNIFIED CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-left px-4">
          
          {/* CARD 1: LEARNING LAB */}
          <div 
            onClick={() => router.push('/learning')}
            className="group bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-100 hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">📖</div>
              <h3 className="text-2xl font-black mb-3 tracking-tight uppercase text-slate-800">{t.label1}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-bold mb-8">{t.desc1}</p>
            </div>
            {/* Blue Button */}
            <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest inline-block text-center shadow-lg group-hover:bg-blue-700 transition-colors">
              {t.btn1}
            </div>
          </div>

          {/* CARD 2: SECURITY AUDIT (The Primary Action) */}
          <div 
            onClick={() => router.push('/audit')}
            className="group bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-100 hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">🛡️</div>
              <h3 className="text-2xl font-black mb-3 tracking-tight uppercase text-slate-800">{t.label2}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-bold mb-8">{t.desc2}</p>
            </div>
            {/* The Focal Point: Yellow Button */}
            <div className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest inline-block text-center shadow-lg group-hover:scale-105 transition-transform">
              {t.btn2}
            </div>
          </div>

          {/* CARD 3: GLOSSARY */}
          <div 
            onClick={() => router.push('/glossary')}
            className="group bg-slate-50 p-10 rounded-[2.5rem] border-2 border-slate-100 hover:border-blue-600 hover:bg-white hover:shadow-2xl transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="text-4xl mb-6 group-hover:rotate-12 transition-transform">📚</div>
              <h3 className="text-2xl font-black mb-3 tracking-tight uppercase text-slate-800">{t.label3}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-bold mb-8">{t.desc3}</p>
            </div>
            {/* Blue Button */}
            <div className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest inline-block text-center shadow-lg group-hover:bg-blue-700 transition-colors">
              {t.btn3}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-12 border-t border-slate-100 text-center bg-slate-50/50">
        <div className="flex flex-wrap justify-center gap-10 mb-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
          <button onClick={() => router.push('/emergency')} className="hover:text-red-600 transition-colors">Bank Codes</button>
          <button onClick={() => router.push('/about')} className="hover:text-blue-600 transition-colors">Project Science</button>
          <button onClick={() => router.push('/glossary')} className="hover:text-yellow-600 transition-colors">Dictionary</button>
        </div>
        <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">
          Naija Cyber-Resilience Project © 2026
        </p>
      </footer>

      {/* FIXED EMERGENCY BUTTON */}
      <button 
        onClick={() => router.push('/emergency')}
        className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-red-600 hover:bg-red-700 text-white font-black py-4 px-8 rounded-full shadow-2xl animate-bounce z-50 border-4 border-white tracking-widest text-xs md:text-sm flex items-center gap-3 active:scale-95 transition-all"
      >
        <span></span> {t.emergency}
      </button>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-infinite {
          display: inline-block;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </main>
  )
}