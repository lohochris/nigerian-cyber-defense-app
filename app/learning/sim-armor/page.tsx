"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ShieldAlert, 
  Settings, 
  LifeBuoy, 
  ChevronLeft, 
  CheckCircle2, 
  Smartphone,
  Lock,
  Zap,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'

export default function SimArmorModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "sim-security";

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

  const steps = [
    {
      title: "The Threat Brief",
      pidgin: "Why you gidi-gidi need SIM PIN",
      text: "If a bad actor steals your phone, they do not need your screen lock. They simply pull your SIM, insert it into another device, and use USSD codes to empty your bank accounts. Your SIM is the physical key to your wealth.",
      icon: <ShieldAlert className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The Double-Lock",
      pidgin: "How to set the Armor",
      text: "Navigate to Settings > Security > SIM Card Lock. Switch it ON. Use the Default PIN (usually 0000 or 1111 for MTN, Airtel, Glo, or 9mobile). Change it to your unique 4-digit secret immediately.",
      icon: <Settings className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "The PUK Protocol",
      pidgin: "If you forget your PIN",
      text: "Do not guess more than 3 times. If locked out, locate your original SIM Pack or contact your Network Provider for the PUK code. Excessive wrong guesses will permanently burn the SIM card.",
      icon: <LifeBuoy className="text-amber-600" size={28} />,
      bgColor: "bg-amber-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20 selection:bg-blue-100">
      {/* MODULE HEADER */}
      <header className="bg-slate-950 text-white pt-32 pb-20 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-2 text-blue-500 font-black mb-10 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em]"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Abort Mission
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em]">
              Module 01
            </span>
            <div className="h-px w-12 bg-slate-800" />
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              Level: Essential
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.85] uppercase tracking-tighter">
            SIM CARD <br/><span className="text-blue-500">ARMOR</span>
          </h1>
          <p className="text-xl text-slate-400 font-bold max-w-2xl leading-snug uppercase text-sm tracking-tight">
            Neutralize the primary method scammers use to bypass your digital security. Your phone number is your identity—lock it down.
          </p>
        </div>
        
        <Smartphone size={350} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto -mt-12 px-6">
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl flex flex-col md:flex-row gap-10 items-start group hover:border-blue-500 transition-all duration-500">
              <div className={`${step.bgColor} w-20 h-20 shrink-0 rounded-[2rem] flex items-center justify-center transition-transform group-hover:rotate-6 shadow-sm`}>
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Step 0{index + 1}</span>
                  <div className="h-px w-8 bg-slate-100" />
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{step.title}</h2>
                </div>
                <div className="mb-6">
                   <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] bg-blue-50 inline-block px-4 py-1.5 rounded-full border border-blue-100">
                      {step.pidgin}
                   </p>
                </div>
                <p className="text-slate-500 leading-relaxed text-lg font-bold">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PROACTIVE ASSIGNMENT */}
        <div className="mt-16 bg-slate-900 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden border-b-[12px] border-blue-600">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center border border-blue-500/30">
                <Zap size={24} fill="currentColor" />
              </div>
              <h3 className="text-3xl font-black uppercase tracking-tighter">Live Drill: 2-Min Assignment</h3>
            </div>
            
            <ul className="space-y-8 mb-16">
              {[
                "Open Phone Settings > Security immediately",
                "Locate the SIM Card Lock protocol",
                "Set a unique PIN (Avoid 0000 or Birthdays)",
                "Document your PUK code in a physical Safe House"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-5 text-xl font-black uppercase tracking-tight group">
                  <div className="mt-1 w-6 h-6 rounded-lg border-2 border-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <div className="w-2 h-2 bg-blue-600 group-hover:bg-white rounded-sm" />
                  </div>
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 ${
                isSubmitting 
                ? 'bg-slate-800 cursor-not-allowed text-slate-500 border border-slate-700' 
                : 'bg-blue-600 text-white hover:bg-white hover:text-slate-900 shadow-2xl shadow-blue-600/20 active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>Synchronizing Progress... <Lock size={18} className="animate-pulse" /></>
              ) : (
                <>Upload Completion Data <ArrowRight size={20} /></>
              )}
            </button>
          </div>
          
          <ShieldCheck size={350} className="absolute -bottom-20 -left-20 text-blue-600/5 -rotate-12 pointer-events-none" />
        </div>
      </section>

      <footer className="mt-24 text-center text-slate-400 font-black uppercase tracking-[0.6em] text-[10px]">
        Secure Infrastructure V1.0.4 // Progress Verified // 2026
      </footer>
    </main>
  )
}