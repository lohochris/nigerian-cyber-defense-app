"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Users, 
  ShieldAlert, 
  UserX, 
  ChevronLeft, 
  BadgeCheck, 
  AlertTriangle,
  Fingerprint,
  Zap,
  ArrowRight,
  ShieldCheck,
  PhoneOff,
  Lock
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

  const rules = [
    {
      title: "The Impersonation Trap",
      pidgin: "No be everyone be who dem say dem be.",
      text: "Scammers pretend to be bank officials, distant relatives, or government agents. They use emotional stories to bypass your logic. Always verify identities through a completely separate, trusted channel.",
      icon: <UserX className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The Urgency Tactic",
      pidgin: "Dem go wan make you rush rush.",
      text: "If a caller claims your account will be blocked within minutes, it is a scam. Banks do not use fear or artificial deadlines to communicate with customers. Take a breath and hang up immediately.",
      icon: <Zap className="text-yellow-600" size={28} />,
      bgColor: "bg-yellow-50"
    },
    {
      title: "The PIN/OTP Rule",
      pidgin: "Your OTP na your secret power.",
      text: "No bank staff will ever ask for your OTP, PIN, or Password. Anyone requesting these codes is a bad actor looking for a victim. Your secret codes are for your eyes only.",
      icon: <Lock className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20 selection:bg-blue-100">
      {/* HEADER */}
      <header className="bg-slate-950 text-white pt-32 pb-20 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden border-b-[12px] border-blue-600">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/learning')} 
            className="group flex items-center gap-2 text-blue-500 font-black mb-10 hover:text-white transition-colors uppercase text-[10px] tracking-[0.4em]"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Exit Briefing
          </button>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
              Module 02
            </span>
            <div className="h-px w-12 bg-slate-800" />
            <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
              Human Firewall Training
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[0.85] uppercase tracking-tighter">
            SOCIAL <br/><span className="text-blue-600">ENGINEERING</span>
          </h1>
          <p className="text-xl text-slate-400 font-bold max-w-2xl leading-snug uppercase text-sm tracking-tight">
            Scammers don't just hack computers; they hack <span className="text-white italic">people</span>. Master the protocols to neutralize psychological manipulation.
          </p>
        </div>
        
        <Users size={350} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto -mt-12 px-6">
        <div className="grid gap-8">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl flex flex-col md:flex-row gap-10 items-start group hover:border-blue-600 transition-all duration-500">
              <div className={`${rule.bgColor} w-20 h-20 shrink-0 rounded-[2rem] flex items-center justify-center transition-transform group-hover:rotate-6 shadow-sm`}>
                {rule.icon}
              </div>
              <div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Protocol 0{index + 1}</span>
                  <div className="h-px w-8 bg-slate-100" />
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">{rule.title}</h2>
                </div>
                <div className="mb-6">
                   <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] bg-blue-50 inline-block px-4 py-1.5 rounded-full border border-blue-100">
                      {rule.pidgin}
                   </p>
                </div>
                <p className="text-slate-500 leading-relaxed text-lg font-bold">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DEFENSE CHECKLIST */}
        <div className="mt-16 bg-blue-600 text-white p-10 md:p-16 rounded-[4.5rem] shadow-2xl relative overflow-hidden border-b-[12px] border-blue-800">
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-12 justify-center text-center">
              <div className="w-14 h-14 bg-white/20 text-white rounded-2xl flex items-center justify-center border border-white/30 backdrop-blur-md">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">The Human Firewall</h3>
            </div>
            
            <div className="grid gap-6 mb-16">
              {[
                { label: "Verify through callback", desc: "If the bank calls you, hang up and call the official number on your ATM card.", icon: <PhoneOff size={20} className="text-white" /> },
                { label: "Identity Check", desc: "Ask the caller a personal question only the real person would know. Scammers will fail.", icon: <Fingerprint size={20} className="text-white" /> },
                { label: "Pressure is a Sign", desc: "The more they rush you, the more likely it is a scam. Legitimate business takes time.", icon: <AlertTriangle size={20} className="text-white" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-8 bg-black/10 rounded-[2.5rem] border border-white/10 hover:bg-black/20 transition-all group">
                  <div className="mt-1 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <p className="font-black text-white uppercase text-sm mb-2 tracking-[0.2em]">{item.label}</p>
                    <p className="text-blue-100/80 text-lg font-bold leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-7 rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs transition-all flex items-center justify-center gap-4 ${
                isSubmitting 
                ? 'bg-blue-800 cursor-not-allowed text-blue-300 border border-blue-700' 
                : 'bg-white text-blue-600 hover:bg-slate-950 hover:text-white shadow-2xl active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>Updating Defense Logs... <ShieldCheck size={20} className="animate-pulse" /></>
              ) : (
                <>I am Scam-Proof <ArrowRight size={20} /></>
              )}
            </button>
          </div>
          
          <BadgeCheck size={400} className="absolute -bottom-20 -left-20 text-white/5 -rotate-12 pointer-events-none" />
        </div>
      </section>

      <footer className="mt-24 text-center text-slate-400 font-black uppercase tracking-[0.6em] text-[10px]">
        Module 02: Social Engineering // Scrutiny Active // 2026
      </footer>
    </main>
  )
}