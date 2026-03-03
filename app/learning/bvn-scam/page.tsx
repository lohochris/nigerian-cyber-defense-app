"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Headset, 
  Key, 
  Timer, 
  ChevronLeft, 
  ShieldAlert, 
  PhoneOff, 
  UserX,
  Lock,
  ArrowRight,
  ShieldCheck
} from 'lucide-react'

export default function SocialEngineeringModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "social-eng";

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

  const tactics = [
    {
      title: "The 'Customer Care' Lie",
      pidgin: "No be every call be from Bank",
      text: "Scammers will call you pretending to be bank managers or customer care. They claim your account has a 'Problem' or your 'BVN has an issue'. This is a scare tactic to gain control.",
      icon: <Headset className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The 'OTP' Trap",
      pidgin: "Your PIN and OTP na your life",
      text: "No bank staff will EVER ask for your PIN, Password, or that 6-digit OTP code sent to your phone. If anyone asks for it, they are a thief. Period.",
      icon: <Key className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    },
    {
      title: "The Urgency Trick",
      pidgin: "No let dem rush you (Gidi-gidi)",
      text: "They use 'Urgency' to stop you from thinking. 'Do it now or we block your account!' is a lie. Real banks don't rush you over the phone. Just hang up.",
      icon: <Timer className="text-amber-600" size={28} />,
      bgColor: "bg-amber-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* HEADER */}
      <header className="bg-red-900 text-white pt-32 pb-16 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden border-b-8 border-red-600">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.back()} 
            className="group flex items-center gap-2 text-red-300 font-black mb-8 hover:text-white transition-colors uppercase text-[10px] tracking-widest"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Abort Training
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-white text-red-900 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter">
              Module 03
            </span>
            <div className="h-[1px] w-12 bg-red-800" />
            <span className="text-red-300 text-[10px] font-black uppercase tracking-widest">
              Psychological Defense
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
            HUMAN <br/><span className="text-yellow-400">FIREWALL</span>
          </h1>
          <p className="text-lg md:text-xl text-red-100 font-bold max-w-2xl leading-relaxed">
            Scammers don't just hack code; they hack humans. Master the art of 'Caution' and learn when to kill the conversation.
          </p>
        </div>
        
        <UserX size={350} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="grid gap-6">
          {tactics.map((tactic, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-start group hover:border-red-500 transition-all duration-300">
              <div className={`${tactic.bgColor} w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                {tactic.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Tactic 0{index + 1}</span>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{tactic.title}</h2>
                </div>
                <p className="text-red-600 font-black mb-4 text-sm uppercase tracking-tight bg-red-50 inline-block px-3 py-1 rounded-full">
                   "{tactic.pidgin}"
                </p>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">{tactic.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* THE GOLDEN RULE BOX */}
        <div className="mt-12 bg-blue-900 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden border-t-8 border-blue-400">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <ShieldAlert size={32} className="text-blue-400 animate-pulse" />
              <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-blue-400">The Golden Rule</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-[3rem] border border-white/10 text-center mb-12 group hover:bg-white/10 transition-colors">
               <p className="text-2xl md:text-4xl font-black italic leading-tight text-white mb-4">
                "If anybody calls you asking for an <span className="text-red-500 underline uppercase underline-offset-8">OTP</span> or <span className="text-red-500 underline uppercase underline-offset-8">PIN</span>, just hang up."
               </p>
               <p className="text-blue-300 font-bold uppercase tracking-widest text-sm">No long talk. No explanations.</p>
            </div>

            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-3 ${
                isSubmitting 
                ? 'bg-slate-800 cursor-not-allowed text-slate-500 border border-slate-700' 
                : 'bg-white text-blue-900 hover:bg-red-600 hover:text-white shadow-2xl active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>Hardening Mental Shields... <Lock size={16} className="animate-pulse" /></>
              ) : (
                <>I'm a Human Firewall <ArrowRight size={18} /></>
              )}
            </button>
          </div>
          
          <PhoneOff size={300} className="absolute -bottom-20 -left-20 text-blue-400/5 -rotate-12 pointer-events-none" />
        </div>
      </section>

      <footer className="mt-20 text-center text-slate-400 font-black uppercase tracking-[0.5em] text-[10px]">
        Module 03 // Perception Protocol Verified
      </footer>
    </main>
  )
}