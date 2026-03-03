"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  Wifi, 
  Usb, 
  Zap, 
  ChevronLeft, 
  ShieldCheck, 
  Cable, 
  DatabaseZap, 
  SignalHigh, 
  Trophy,
  ArrowRight,
  ShieldAlert
} from 'lucide-react'

export default function PublicSafety() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "public-safety";

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
    }, 1500);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
      {/* NAVIGATION */}
      <nav className="p-6 border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/learning" className="group text-blue-600 font-black flex items-center gap-2 hover:text-slate-900 transition-colors uppercase text-[10px] tracking-widest">
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Lab
          </Link>
          <div className="flex items-center gap-2">
            <ShieldAlert size={14} className="text-amber-500" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Final Module 06</span>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-16">
        {/* HERO HEADER */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-[10px] font-black uppercase tracking-widest mb-6">
            <Wifi size={12} /> External Threat Detection
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[0.85] uppercase tracking-tighter">
            PUBLIC WIFI & <br/><span className="text-blue-600">USB SAFETY</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-bold max-w-2xl leading-relaxed italic">
            "Free WiFi: The Silent Thief." Not every free connection is a blessing; some are traps designed to mirror your every move.
          </p>
        </div>

        <div className="grid gap-8">
          {/* JUICE JACKING SECTION */}
          <section className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-slate-100 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                  <Usb size={28} />
                </div>
                <div>
                   <h3 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em]">Format Awareness</h3>
                   <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">The "Juice Jacking" Trap</h2>
                </div>
              </div>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Scammers set up free charging stations in airports, parks, or malls. When you plug in, the USB cable doesn't just charge—it <span className="text-red-600 font-bold">copies your data</span>. It can steal bank app passwords, private photos, and contact lists in seconds. 
              </p>
            </div>
            <DatabaseZap size={200} className="absolute -bottom-10 -right-10 text-slate-50 pointer-events-none" />
          </section>

          

          {/* THE PROTOCOL LIST */}
          <div className="bg-blue-900 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden border-t-8 border-blue-400">
            <div className="relative z-10">
              <h3 className="text-blue-400 font-black uppercase text-[10px] mb-12 tracking-[0.3em] flex items-center gap-2">
                <ShieldCheck size={16} /> THE "IRON-CLAD" PROTOCOL
              </h3>
              
              <div className="grid gap-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                    <Zap size={24} />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Wall Sockets Only</strong>
                    <p className="text-blue-100/60 font-medium">Avoid direct USB ports in public. Use your own "follow-come" three-pin charger block in a standard wall power socket.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                    <Cable size={24} />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Use a USB Data Blocker</strong>
                    <p className="text-blue-100/60 font-medium">If you must use a public USB port, use a "USB Condom" (Data Blocker). It physically disconnects the data wires and only allows power.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                    <SignalHigh size={24} />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Avoid Public Banking</strong>
                    <p className="text-blue-100/60 font-medium">Never open bank apps or OPay on "Free Airport WiFi." Hackers can "sniff" the air and grab your login details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL COMPLETION BOX */}
          <div className="mt-12 bg-slate-900 p-12 md:p-20 rounded-[4rem] text-center shadow-2xl relative overflow-hidden border-4 border-blue-600/20">
            <div className="relative z-10">
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full shadow-2xl shadow-blue-500/40">
                    <Trophy size={32} className="text-white" />
                </div>
                
                <div className="space-y-2 mb-8">
                  <h3 className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px] italic">
                    Course Completion / Mission Accomplished
                  </h3>
                  <h2 className="text-4xl md:text-6xl text-white font-black uppercase tracking-tighter leading-none">
                    LEVEL 1 <br/><span className="text-blue-500">COMMANDER</span>
                  </h2>
                </div>

                <p className="text-slate-400 mb-12 font-medium text-lg leading-relaxed max-w-md mx-auto">
                  You have successfully navigated all 6 modules of the **Naija Cyber-Hub**. Your digital defenses are now active.
                </p>
                
                <button 
                  onClick={handleComplete}
                  disabled={isSubmitting}
                  className={`w-full max-w-sm py-7 rounded-[2rem] font-black uppercase tracking-[0.2em] text-sm transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto ${
                    isSubmitting 
                    ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed' 
                    : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <>Generating Certificate... <ShieldCheck size={20} className="animate-spin" /></>
                  ) : (
                    <>Claim Your Credentials <ArrowRight size={20} /></>
                  )}
                </button>
            </div>

            <Wifi size={400} className="absolute -top-20 -left-20 text-white/5 -rotate-12 pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]" />
          </div>
        </div>
      </article>

      <footer className="mt-20 py-10 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[10px] text-slate-500">
        Cyber-Hub Verification Status: Mastered // Registry ID: {MODULE_ID.toUpperCase()}
      </footer>
    </main>
  )
}