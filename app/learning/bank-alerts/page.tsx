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
  Zap 
} from 'lucide-react'

export default function BankAlertModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // This matches the ID in your stories array in app/learning/page.tsx
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
      text: "Scammers use spoofing tools to make an SMS look like it's from your bank. Never trust an SMS as proof of payment.",
      icon: <SmartphoneNfc className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The Ultimate Proof",
      pidgin: "Always check your App or *Code#",
      text: "The only undeniable proof is your actual account balance via your bank app or USSD code. If the money isn't there, it hasn't arrived.",
      icon: <Building2 className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "The Balance Audit",
      pidgin: "Look at your Total Balance",
      text: "Scammers edit credit alerts but can't change your bank's total. Check if your final balance actually increased.",
      icon: <TrendingUp className="text-green-600" size={28} />,
      bgColor: "bg-green-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      <header className="bg-green-900 text-white pt-32 pb-16 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/learning')} 
            className="group flex items-center gap-2 text-green-400 font-black mb-8 hover:text-white transition-colors uppercase text-[10px] tracking-widest"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Exit Briefing
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
            FAKE ALERT <br/><span className="text-yellow-400">DEFENSE</span>
          </h1>
        </div>
        <Wallet size={350} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      <section className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="grid gap-6">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-start group">
              <div className={`${rule.bgColor} w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center`}>
                {rule.icon}
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase mb-2">{rule.title}</h2>
                <p className="text-green-600 font-black mb-4 text-sm uppercase bg-green-50 inline-block px-3 py-1 rounded-full italic">"{rule.pidgin}"</p>
                <p className="text-slate-500 leading-relaxed font-medium">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-slate-900 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 ${
                isSubmitting ? 'bg-slate-800 text-slate-500' : 'bg-yellow-400 text-slate-900 hover:bg-white'
              }`}
            >
              {isSubmitting ? "Syncing..." : "I am Alert-Proof"} <ArrowRight size={18} />
            </button>
        </div>
      </section>
    </main>
  )
}