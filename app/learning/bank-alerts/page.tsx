"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  SmartphoneNfc, 
  Building2, 
  Wallet, 
  ChevronLeft, 
  BadgeCheck, 
  AlertTriangle,
  Fingerprint,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Lock
} from 'lucide-react'

export default function BankAlertModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "bank-alerts";

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleComplete = () => {
    setIsSubmitting(true);
    const savedProgress = localStorage.getItem('completedModules');
    const currentProgress = savedProgress ? JSON.parse(savedProgress) : [];

    if (!currentProgress.includes(MODULE_ID)) {
      currentProgress.push(MODULE_ID);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }

    setTimeout(() => {
      router.push('/learning');
    }, 1200);
  };

  const rules = [
    {
      title: "The SMS Deception",
      pidgin: "No trust text message o!",
      text: "Scammers use spoofing tools to make an SMS look like it is from your bank. Never trust an SMS as proof of payment.",
      icon: <SmartphoneNfc className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The Ultimate Proof",
      pidgin: "Always check your App or Code",
      text: "The only undeniable proof is your actual account balance via your bank app or USSD code. If the money is not there, it has not arrived.",
      icon: <Building2 className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "The Balance Audit",
      pidgin: "Look at your Total Balance",
      text: "Scammers edit credit alerts but cannot change your banks total. Check if your final balance actually increased.",
      icon: <TrendingUp className="text-green-600" size={28} />,
      bgColor: "bg-green-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20 selection:bg-green-100">
      {/* HEADER */}
      <header className="bg-slate-900 text-white pt-32 pb-16 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden border-b-8 border-green-600">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/learning')} 
            className="group flex items-center gap-2 text-slate-400 font-black mb-8 hover:text-green-500 transition-colors uppercase text-[10px] tracking-[0.3em]"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Exit Briefing
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-green-600 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
              Tactical Deep-Dive
            </span>
            <div className="h-[1px] w-12 bg-slate-800" />
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
              Financial Integrity
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
            FAKE ALERT <br/><span className="text-green-500">DEFENSE</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 font-bold max-w-2xl leading-relaxed">
            Verify before you release. In the world of digital finance, balance is the only truth.
          </p>
        </div>
        
        <Wallet size={350} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      {/* RULES SECTION */}
      <section className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="grid gap-6">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-start group hover:border-green-500 transition-all duration-300">
              <div className={`${rule.bgColor} w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                {rule.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">Protocol 0{index + 1}</span>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{rule.title}</h2>
                </div>
                <p className="text-green-600 font-black mb-4 text-xs uppercase tracking-widest bg-green-50 inline-block px-4 py-1.5 rounded-full border border-green-100">
                    {rule.pidgin}
                </p>
                <p className="text-slate-500 leading-relaxed text-lg font-bold">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* COMPLETION BOX */}
        <div className="mt-12 bg-slate-900 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden border-t-8 border-green-600">
          <div className="relative z-10 text-center">
            <div className="flex items-center gap-3 mb-10 justify-center">
              <ShieldCheck size={32} className="text-green-500 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white">Commitment to Truth</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-14 rounded-[3.5rem] border border-white/10 text-center mb-12 group hover:bg-white/10 transition-colors shadow-inner">
                <p className="text-2xl md:text-4xl font-black leading-tight text-white mb-6 uppercase tracking-tight">
                  I will never trust a notification alone. My balance is the only source of truth.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="h-px w-8 bg-green-500" />
                  <p className="text-green-400 font-black uppercase tracking-[0.4em] text-[10px]">Verification Over Assumption</p>
                  <div className="h-px w-8 bg-green-500" />
                </div>
            </div>

            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full max-w-md mx-auto py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 ${
                isSubmitting 
                ? 'bg-slate-800 cursor-not-allowed text-slate-500 border border-slate-700' 
                : 'bg-green-600 text-white hover:bg-white hover:text-slate-900 shadow-2xl active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>Syncing Security Log... <Lock size={18} className="animate-pulse" /></>
              ) : (
                <>I am Alert-Proof <ArrowRight size={20} /></>
              )}
            </button>
          </div>
          
          <Fingerprint size={300} className="absolute -bottom-20 -left-20 text-white/5 -rotate-12 pointer-events-none" />
          <Zap size={200} className="absolute top-0 right-0 text-green-600/10 pointer-events-none" />
        </div>
      </section>

      <footer className="mt-20 text-center text-slate-400 font-black uppercase tracking-[0.6em] text-[10px] opacity-50">
        Module 02 // Financial Defense Framework Verified // 2026 Edition
      </footer>
    </main>
  )
}