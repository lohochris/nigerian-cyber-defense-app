"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SocialEngineeringModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CRITICAL: ID must match the one in app/learning/page.tsx
  const MODULE_ID = "social-eng";

  const handleComplete = () => {
    setIsSubmitting(true);
    
    const savedProgress = localStorage.getItem('completedModules');
    const currentProgress = savedProgress ? JSON.parse(savedProgress) : [];

    if (!currentProgress.includes(MODULE_ID)) {
      currentProgress.push(MODULE_ID);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }

    // Security simulation delay
    setTimeout(() => {
      router.push('/learning');
    }, 800);
  };

  const tactics = [
    {
      title: "The 'Customer Care' Lie",
      pidgin: "No be every call be from Bank",
      text: "Scammers go call you, talk like say dem be bank manager or customer care. Dem go say your account get 'Problem' or your 'BVN get issue'. This na just to make you fear so you go do wetin dem want.",
      icon: "📞"
    },
    {
      title: "The 'OTP' Trap",
      pidgin: "Your PIN and OTP na your life",
      text: "No bank staff go ever ask you for your PIN, Password, or that 6-digit code (OTP) wey come enter your phone. If anybody ask for am, na thief! Dem wan enter your app pull your money.",
      icon: "🔐"
    },
    {
      title: "The Urgency Trick",
      pidgin: "No let dem rush you (Gidi-gidi)",
      text: "Dem go say 'Do am now now or we go block your account!' This na lie. Real banks no dey rush person for phone. If dem call you like that, just hang up the call immediately.",
      icon: "⏳"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="bg-red-700 text-white p-10 md:p-20 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
         <div className="absolute top-0 right-0 opacity-10 text-[15rem] font-black pointer-events-none">🛡️</div>
        <div className="max-w-4xl mx-auto relative z-10">
          <button onClick={() => router.back()} className="text-red-200 font-bold mb-6 hover:text-white transition-colors uppercase text-xs tracking-widest">
            ← Cancel Lesson
          </button>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight uppercase">MODULE 3: <br/><span className="text-yellow-400">HUMAN FIREWALL</span></h1>
          <p className="text-xl opacity-90 font-medium max-w-2xl text-red-50">Master the art of 'Caution'. Don't let sweet-mouth scammers manipulate your emotions to steal your data.</p>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid gap-8">
          {tactics.map((tactic, index) => (
            <div key={index} className="group bg-white p-8 rounded-[2.5rem] border-l-8 border-red-600 shadow-sm flex gap-6 items-start hover:shadow-xl hover:bg-red-50/30 transition-all">
              <div className="hidden md:flex bg-red-50 text-3xl p-5 rounded-2xl group-hover:bg-red-100 transition-colors">{tactic.icon}</div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">{tactic.title}</h2>
                <p className="text-red-700 font-bold mb-4 italic">"{tactic.pidgin}"</p>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{tactic.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* THE 'GOLDEN RULE' BOX */}
        <div className="mt-12 bg-blue-900 text-white p-10 rounded-[3rem] shadow-xl border-t-8 border-blue-400 relative overflow-hidden">
          <h3 className="text-2xl font-black mb-6 uppercase tracking-widest text-blue-400 text-center relative z-10">The One Golden Rule:</h3>
          <div className="bg-white/10 p-8 rounded-3xl text-center border border-white/20 mb-10 relative z-10 backdrop-blur-sm">
             <p className="text-2xl md:text-3xl font-black italic leading-tight">
                "If anybody call you ask for OTP or PIN, just <span className="text-red-400 underline uppercase">HANG UP</span>. No talk too much."
             </p>
          </div>

          {/* MASTER BUTTON */}
          <button 
            onClick={handleComplete}
            disabled={isSubmitting}
            className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-2xl relative z-10 ${
              isSubmitting 
              ? 'bg-blue-800 cursor-not-allowed text-white/50' 
              : 'bg-white text-blue-900 hover:bg-red-500 hover:text-white active:scale-95'
            }`}
          >
            {isSubmitting ? "Hardening Firewall..." : "I'm a Human Firewall - Complete"}
          </button>

          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/10 rounded-full blur-3xl" />
        </div>
      </section>

      <footer className="py-20 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[10px]">
        Mental Defense Protocol: Activated
      </footer>
    </main>
  )
}