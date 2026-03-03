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

  // CRITICAL: This ID must match exactly what you have in app/learning/page.tsx
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
      text: "Scammers pretend to be bank officials, 'Junior from school', or even government agents. They use emotional stories to make you act fast. Always verify the person's identity through a different channel.",
      icon: <UserX className="text-red-600" size={28} />,
      bgColor: "bg-red-50"
    },
    {
      title: "The Urgency Tactic",
      pidgin: "Dem go wan make you rush rush.",
      text: "If a caller says your account will be blocked in 5 minutes unless you give a code, it is a scam. Banks don't use fear to talk to customers. Take a breath and hang up.",
      icon: <Zap className="text-yellow-600" size={28} />,
      bgColor: "bg-yellow-50"
    },
    {
      title: "The PIN/OTP Rule",
      pidgin: "Your OTP na your secret power.",
      text: "No bank staff will EVER ask for your OTP, PIN, or Password. Anyone asking for these is a 'Mugu' looking for a victim. Keep your secret codes secret.",
      icon: <Lock className="text-blue-600" size={28} />,
      bgColor: "bg-blue-50"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* HEADER */}
      <header className="bg-slate-900 text-white pt-32 pb-16 px-6 rounded-b-[4rem] shadow-2xl relative overflow-hidden border-b-8 border-blue-600">
        <div className="max-w-4xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/learning')} 
            className="group flex items-center gap-2 text-blue-400 font-black mb-8 hover:text-white transition-colors uppercase text-[10px] tracking-widest"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Exit Briefing
          </button>

          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-tighter shadow-lg">
              Module 02
            </span>
            <div className="h-[1px] w-12 bg-slate-700" />
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Human Firewall Training
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
            SOCIAL <br/><span className="text-blue-600">ENGINEERING</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 font-bold max-w-2xl leading-relaxed">
            Scammers don't just hack computers; they hack <span className="text-white italic">people</span>. Learn how to spot the psychological tricks before they steal your funds.
          </p>
        </div>
        
        <Users size={350} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
      </header>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto -mt-10 px-6">
        <div className="grid gap-6">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-start group hover:border-blue-600 transition-all duration-300">
              <div className={`${rule.bgColor} w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-12`}>
                {rule.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em]">Protocol 0{index + 1}</span>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{rule.title}</h2>
                </div>
                <p className="text-blue-600 font-black mb-4 text-sm uppercase tracking-tight bg-blue-50 inline-block px-3 py-1 rounded-full">
                    "{rule.pidgin}"
                </p>
                <p className="text-slate-500 leading-relaxed text-lg font-medium">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* DEFENSE CHECKLIST */}
        <div className="mt-12 bg-blue-600 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-10 justify-center text-center">
              <div className="w-12 h-12 bg-white/20 text-white rounded-full flex items-center justify-center">
                <ShieldAlert size={24} />
              </div>
              <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">The Human Firewall</h3>
            </div>
            
            <div className="grid gap-6 mb-12">
              {[
                { label: "Verify through callback", desc: "If 'the bank' calls you, hang up and call the number on the back of your ATM card.", icon: <PhoneOff size={18} className="text-white" /> },
                { label: "Identity Check", desc: "Ask the caller a personal question only the real person would know. Scammers will fumble.", icon: <Fingerprint size={18} className="text-white" /> },
                { label: "Pressure is a Sign", desc: "The more they rush you, the more likely it is a scam. Real business takes time.", icon: <AlertTriangle size={18} className="text-white" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-black/10 rounded-3xl border border-white/10 hover:bg-black/20 transition-colors group">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <p className="font-black text-white uppercase text-sm mb-1">{item.label}</p>
                    <p className="text-blue-100/70 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 ${
                isSubmitting 
                ? 'bg-blue-800 cursor-not-allowed text-blue-300' 
                : 'bg-white text-blue-600 hover:bg-slate-900 hover:text-white shadow-2xl active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>Updating Defense Logs... <ShieldCheck size={16} className="animate-pulse" /></>
              ) : (
                <>I am Scam-Proof <ArrowRight size={18} /></>
              )}
            </button>
          </div>
          
          <BadgeCheck size={300} className="absolute -bottom-20 -left-20 text-white/10 -rotate-12 pointer-events-none" />
        </div>
      </section>

      <footer className="mt-20 text-center text-slate-400 font-black uppercase tracking-[0.5em] text-[10px]">
        Module 02: Social Engineering // Scrutiny Active
      </footer>
    </main>
  )
}