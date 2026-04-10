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
  ArrowRight,
  Lock,
  Waves,
  Fingerprint,
  PlayCircle
} from 'lucide-react'

export default function AIScams() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "ai-voice";
  const YOUTUBE_ID = "pJZYd_65xs4"; // Correct ID for AI Voice Scams

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
    <main className="min-h-screen bg-slate-50 pb-20 selection:bg-blue-100">
      <nav className="p-6 border-b-2 border-slate-100 sticky top-0 bg-white/90 backdrop-blur-xl z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/learning" className="group text-blue-600 font-black flex items-center gap-2 hover:text-slate-900 transition-colors uppercase text-[10px] tracking-[0.4em]">
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Lab
          </Link>
          <div className="flex items-center gap-3">
            <BrainCircuit size={16} className="text-blue-600 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Security Module 05</span>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-20">
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-red-600 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">High Threat</span>
            <div className="h-px w-8 bg-slate-200" />
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">Neural Exploit Training</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-slate-950 mb-8 leading-[0.8] uppercase tracking-tighter">
            AI VOICE <br/><span className="text-blue-600">& CLONING</span>
          </h1>
          <div className="flex items-center gap-4">
             <div className="h-1.5 w-16 bg-blue-600 rounded-full" />
             <p className="text-slate-900 font-black uppercase tracking-tight text-sm flex items-center gap-3">
               <Mic2 size={18} className="text-blue-600" /> Verify Identity: Neutralize the Clone
             </p>
          </div>
        </div>

        {/* NEW: INTELLIGENCE BRIEFING (VIDEO SECTION) */}
        <section className="mb-20 group">
          <div className="flex items-center gap-3 mb-8">
            <PlayCircle className="text-blue-600" size={24} />
            <h3 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.4em]">Visual Intelligence Briefing</h3>
          </div>
          <div className="aspect-video w-full bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white group-hover:border-blue-500 transition-all relative">
            <iframe 
              width="100%" 
              height="100%" 
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1&autoplay=0`}
              title="AI Voice Scam Briefing"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
          <p className="mt-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">
            Watch the simulation above to understand how voice synthesis is weaponized.
          </p>
        </section>

        <div className="grid gap-12 text-slate-600">
          <section className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-blue-900/10 border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-xl shadow-blue-200 group-hover:rotate-6 transition-transform">
                    <Waves size={28} />
                </div>
                <h3 className="text-slate-900 font-black uppercase text-[10px] tracking-[0.4em]">Analysis: The Pikin Format</h3>
              </div>
              <p className="text-2xl md:text-3xl font-black leading-[1.1] text-slate-900 mb-8 uppercase tracking-tighter">
                Scammers leverage neural networks to clone voices using 3-second social media clips. 
              </p>
              <p className="text-lg font-bold text-slate-500 leading-relaxed">
                The clone mimics tone, accent, and emotion. Scammers call parents or elders, pretending to be a child in <span className="text-red-600 underline decoration-[6px] underline-offset-8 uppercase">immediate danger</span>—usually an accident or arrest, demanding instant bail funds.
              </p>
            </div>
            <Fingerprint size={300} className="absolute -bottom-20 -right-20 text-slate-50 opacity-[0.03] rotate-12 pointer-events-none" />
          </section>

          <section className="p-12 bg-blue-50/70 rounded-[3.5rem] border-2 border-blue-100 relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tighter flex items-center gap-4">
                <Zap size={28} className="text-yellow-500 fill-yellow-500" /> The Biological Exploit
              </h3>
              <p className="text-xl font-bold text-slate-700 leading-snug">
                The sound of a loved one in distress triggers the <span className="text-slate-950 uppercase underline decoration-blue-500 decoration-4 underline-offset-4">Amygdala Hijack</span>. Your logical brain shuts down, replaced by a "Panic Protocol" that scammers exploit to force a transfer before you can verify the truth.
              </p>
            </div>
          </section>

          <div className="bg-slate-950 text-white p-12 md:p-20 rounded-[5rem] shadow-2xl relative overflow-hidden border-b-[16px] border-blue-600">
            <div className="relative z-10">
              <h3 className="text-blue-500 font-black uppercase text-[10px] mb-16 tracking-[0.5em] flex items-center gap-4">
                <ShieldCheck size={24} /> Counter-Measure Deployment
              </h3>
              
              <div className="space-y-16">
                <div className="flex gap-10 items-start group">
                  <div className="bg-slate-900 p-6 rounded-3xl border-2 border-slate-800 group-hover:border-blue-500 transition-all shadow-inner">
                    <KeyRound size={32} className="text-blue-500" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-xs mb-4 tracking-[0.3em] font-black text-blue-400">01. Family Password</strong>
                    <p className="text-slate-400 font-black text-xl leading-tight uppercase tracking-tight">Establish a secret verbal key. If the caller cannot provide the passphrase, the entity is a clone.</p>
                  </div>
                </div>

                <div className="flex gap-10 items-start group">
                  <div className="bg-slate-900 p-6 rounded-3xl border-2 border-slate-800 group-hover:border-red-500 transition-all shadow-inner">
                    <PhoneOff size={32} className="text-red-500" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-xs mb-4 tracking-[0.3em] font-black text-red-400">02. Hard Disconnect</strong>
                    <p className="text-slate-400 font-black text-xl leading-tight uppercase tracking-tight">Sever the connection immediately. Re-initiate contact using the original saved profile number only.</p>
                  </div>
                </div>

                <div className="flex gap-10 items-start group">
                  <div className="bg-slate-900 p-6 rounded-3xl border-2 border-slate-800 group-hover:border-yellow-500 transition-all shadow-inner">
                    <ShieldBan size={32} className="text-yellow-500" />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-xs mb-4 tracking-[0.3em] font-black text-yellow-400">03. Suspicion Default</strong>
                    <p className="text-slate-400 font-black text-xl leading-tight uppercase tracking-tight">Treat every emergency call from an unknown or "borrowed" device as a malicious threat by default.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Users size={400} className="absolute -bottom-20 -right-20 text-white opacity-[0.02] rotate-12 pointer-events-none" />
          </div>
        </div>

        <div className="mt-24">
            <div className="bg-white p-12 md:p-20 rounded-[5rem] text-center shadow-2xl relative overflow-hidden border-t-[1px] border-slate-100">
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-inner">
                     <ShieldCheck size={48} className="text-blue-600" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-4xl font-black uppercase mb-6 tracking-tighter text-slate-950">Defense Verified?</h3>
                  <p className="text-slate-400 mb-14 max-w-md mx-auto font-black uppercase text-[10px] tracking-[0.2em] leading-relaxed">
                      I acknowledge the threat of AI cloning. I commit to establishing a family passphrase and executing hard disconnects on unverified emergency calls.
                  </p>
                  
                  <button 
                      onClick={handleComplete}
                      disabled={isSubmitting}
                      className={`w-full max-w-sm py-8 rounded-[2.5rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all flex items-center justify-center gap-4 mx-auto border-b-8 ${
                          isSubmitting 
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200' 
                          : 'bg-blue-600 text-white hover:bg-slate-950 border-blue-800 hover:border-slate-800 shadow-2xl active:scale-95'
                      }`}
                  >
                      {isSubmitting ? (
                        <>Synchronizing Logs... <Lock size={18} className="animate-pulse" /></>
                      ) : (
                        <>Authorize Protocol <ArrowRight size={20} /></>
                      )}
                  </button>
                </div>

                <BrainCircuit size={400} className="absolute -top-40 -left-40 text-slate-100 opacity-40 rotate-12 pointer-events-none" />
            </div>
        </div>
      </article>

      <footer className="mt-32 py-10 text-center opacity-30 font-black uppercase tracking-[0.8em] text-[9px]">
        Neural Defense Protocol // Scrutiny Active // 2026 
      </footer>
    </main>
  )
}