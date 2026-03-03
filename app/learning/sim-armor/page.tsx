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
  ArrowRight
} from 'lucide-react'

export default function SimArmorModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Match with your main learning page story ID
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

    // Security-themed delay
    setTimeout(() => {
      router.push('/learning');
    }, 1200);
  };

  const steps = [
    {
      title: "The Threat Brief",
      pidgin: "Why you gidi-gidi need SIM PIN",
      text: "If person tief your phone, dem no need your screen lock. Dem go just pull your SIM, put am for another phone, and use USSD codes (*901#, etc.) take empty your bank account. Your SIM is the key to your money.",
      icon: <ShieldAlert className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The Double-Lock",
      pidgin: "How to set the Armor",
      text: "Navigate to Settings > Security > SIM Card Lock. Switch it 'ON'. It will ask for a 'Default PIN'. For MTN/Airtel/Glo/9mobile, it is usually '0000' or '1111'. Change it to your own secret 4 digits immediately.",
      icon: <Settings className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "The PUK Protocol",
      pidgin: "If you forget your PIN (PUK)",
      text: "Do not guess more than 3 times! If you lock yourself out, find your original SIM Pack or call your Network Provider to get your PUK code. Too many wrong guesses will 'Burn' (permanently kill) the SIM.",
      icon: <LifeBuoy className="text-amber-600" size={28} />,
      bgColor: "bg-amber-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* MODULE HEADER */}
      <header className="bg-slate-900 text-white pt-32 pb-16 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-2 text-blue-400 font-black mb-8 hover:text-white transition-colors uppercase text-[10px] tracking-widest"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Abort Mission
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
              Module 01
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Level: Essential
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
            SIM CARD <br/><span className="text-blue-500">ARMOR</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-bold max-w-2xl leading-relaxed">
            Neutralize the #1 way scammers bypass your security. Your phone number is your bank—lock it down.
          </p>
        </div>
        
        {/* Abstract Tech Background */}
        <Smartphone size={300} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="grid gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-start group hover:border-blue-500 transition-all duration-300">
              <div className={`${step.bgColor} w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                {step.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Step 0{index + 1}</span>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{step.title}</h2>
                </div>
                <p className="text-blue-600 font-black mb-4 text-sm uppercase tracking-tight bg-blue-50 inline-block px-3 py-1 rounded-full">
                   "{step.pidgin}"
                </p>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PROACTIVE ASSIGNMENT */}
        <div className="mt-12 bg-slate-900 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden border border-slate-800">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center">
                <Zap size={20} fill="currentColor" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">Live Drill: 2-Min Assignment</h3>
            </div>
            
            <ul className="space-y-6 mb-12">
              {[
                "Open Phone Settings > Security now.",
                "Locate 'SIM Card Lock' protocol.",
                "Set a PIN (Avoid 0000 or your Birthday).",
                "Store your PUK code in a physical 'Safe House' (Paper)."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-lg font-bold group">
                  <div className="mt-1.5 w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center shrink-0 group-hover:bg-green-500 transition-colors">
                    <div className="w-2 h-2 bg-green-500 group-hover:bg-white rounded-full" />
                  </div>
                  <span className="opacity-90 group-hover:opacity-100 transition-opacity">{item}</span>
                </li>
              ))}
            </ul>

            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-3 ${
                isSubmitting 
                ? 'bg-slate-800 cursor-not-allowed text-slate-500 border border-slate-700' 
                : 'bg-blue-600 text-white hover:bg-white hover:text-slate-900 shadow-[0_20px_50px_rgba(37,99,235,0.3)] active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>Synchronizing Progress... <Lock size={16} className="animate-pulse" /></>
              ) : (
                <>Upload Completion Data <ArrowRight size={18} /></>
              )}
            </button>
          </div>
          
          <CheckCircle2 size={300} className="absolute -bottom-20 -left-20 text-green-500/5 -rotate-12 pointer-events-none" />
        </div>
      </section>

      <footer className="mt-20 text-center text-slate-400 font-black uppercase tracking-[0.5em] text-[10px] animate-pulse">
        Secure Infrastructure V1.0.4 // Progress Verified
      </footer>
    </main>
  )
}