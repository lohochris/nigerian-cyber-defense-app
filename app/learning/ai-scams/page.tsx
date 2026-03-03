"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Mic2, 
  Users, 
  PhoneForwarded, 
  ShieldBan, 
  ChevronLeft, 
  KeyRound, 
  PhoneOff, 
  Zap,
  ShieldCheck,
  BrainCircuit,
  ArrowRight
} from 'lucide-react'

export default function AIScams() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "ai-voice";

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

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* NAVIGATION */}
      <nav className="p-6 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/learning" className="group text-blue-600 font-black flex items-center gap-2 hover:text-slate-900 transition-colors uppercase text-[10px] tracking-widest">
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Lab
          </Link>
          <div className="flex items-center gap-2">
            <BrainCircuit size={14} className="text-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Module 05</span>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-16">
        {/* HERO SECTION */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[0.85] uppercase tracking-tighter">
            AI VOICE & <br/><span className="text-blue-600">FAMILY SCAMS</span>
          </h1>
          <p className="text-blue-600 font-black uppercase tracking-widest mb-8 italic text-sm flex items-center gap-2">
            <Mic2 size={16} /> Verify the Voice: No rush send money
          </p>
        </div>

        <div className="grid gap-12 text-slate-600 leading-relaxed">
          {/* THE FORMAT EXPLAINER */}
          <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-blue-900/5 border border-slate-100 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-xl"><Mic2 size={20} /></span>
                <h3 className="text-slate-900 font-black uppercase text-sm tracking-widest">The "Pikin" Format</h3>
              </div>
              <p className="text-xl font-medium leading-relaxed">
                Scammers now use **Artificial Intelligence (AI)** to clone voices. They take a 5-second clip of your child or relative from social media and use it to call you. 
                The voice will sound exactly like them, crying that they had an accident or were arrested and need <strong className="text-red-600 underline decoration-2 underline-offset-4">urgent money</strong> for bail or hospital bills.
              </p>
            </div>
          </section>

          {/* PSYCHOLOGY SECTION */}
          <section className="px-4">
            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter flex items-center gap-2">
              <Zap size={20} className="text-yellow-500 fill-yellow-500" /> Why we fall for it
            </h3>
            <p className="text-lg font-medium">
              When we hear a loved one in pain, our "logical brain" switches off and our "emotional brain" takes over. Scammers use this <strong className="text-slate-900">panic</strong> to make sure you don't think twice before hitting 'Send'.
            </p>
          </section>

          {/* THE DEFENSE LIST */}
          <div className="bg-slate-900 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-blue-400 font-black uppercase text-xs mb-10 tracking-[0.2em] flex items-center gap-2">
                <ShieldCheck size={16} /> The "Double-Lock" Defense
              </h3>
              
              <div className="space-y-10">
                <div className="flex gap-6 items-start group">
                  <div className="bg-blue-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <KeyRound size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Create a Family Password</strong>
                    <p className="text-slate-400 font-medium">Pick a secret word (e.g., "Orijin" or "Obioma") that only your family knows. If the caller can't say it, it's an AI clone.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="bg-red-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <PhoneOff size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Hang up and Call back</strong>
                    <p className="text-slate-400 font-medium">Immediately hang up and call the person on their <span className="text-white font-bold">original</span> saved number from your contact list. Do not trust the incoming call.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start group">
                  <div className="bg-amber-600 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    <ShieldBan size={24} className="text-white" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Trust No "New" Numbers</strong>
                    <p className="text-slate-400 font-medium">Treat every "I'm calling from a friend's phone" call with 100% suspicion if they are asking for cash.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Users size={300} className="absolute -bottom-20 -right-20 text-white/5 rotate-12 pointer-events-none" />
          </div>
        </div>

        {/* COMPLETION AREA */}
        <div className="mt-20 pt-12">
            <div className="bg-blue-600 text-white p-10 md:p-16 rounded-[4rem] text-center shadow-2xl relative overflow-hidden border-b-[12px] border-blue-800">
                <div className="relative z-10">
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">Defense Verified?</h3>
                  <p className="text-blue-100 mb-10 max-w-md mx-auto font-bold opacity-80">
                      I confirm that I will set a Family Password and always verify emergency calls by calling the original number back.
                  </p>
                  
                  <button 
                      onClick={handleComplete}
                      disabled={isSubmitting}
                      className={`w-full max-w-sm py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-sm transition-all flex items-center justify-center gap-3 mx-auto ${
                          isSubmitting 
                          ? 'bg-blue-800 text-blue-300 cursor-not-allowed border border-blue-700' 
                          : 'bg-white text-blue-600 hover:bg-slate-900 hover:text-white shadow-xl active:scale-95'
                      }`}
                  >
                      {isSubmitting ? (
                        <>Synchronizing Data... <ShieldCheck size={18} className="animate-pulse" /></>
                      ) : (
                        <>Accept Protocol <ArrowRight size={18} /></>
                      )}
                  </button>
                </div>

                {/* Background Decor */}
                <BrainCircuit size={300} className="absolute -top-20 -left-20 text-white/5 rotate-45 pointer-events-none" />
            </div>
        </div>
      </article>

      <footer className="mt-20 py-10 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[8px]">
        AI Voice Recognition & Neural Defense Protocol // Active
      </footer>
    </main>
  )
}