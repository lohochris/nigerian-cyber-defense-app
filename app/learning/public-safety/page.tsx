"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function PublicSafety() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CRITICAL: ID must match the one in app/learning/page.tsx
  const MODULE_ID = "public-safety";

  const handleComplete = () => {
    setIsSubmitting(true);
    
    const savedProgress = localStorage.getItem('completedModules');
    const currentProgress = savedProgress ? JSON.parse(savedProgress) : [];

    if (!currentProgress.includes(MODULE_ID)) {
      currentProgress.push(MODULE_ID);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }

    // Small delay to simulate "Final Sync"
    setTimeout(() => {
      router.push('/learning');
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      <nav className="p-6 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/learning" className="text-blue-600 font-bold flex items-center gap-2 hover:-translate-x-1 transition-transform uppercase text-[10px] tracking-widest">
            ← Back to Lab
          </Link>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Final Module 6</span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight uppercase text-balance tracking-tighter">
          Public WiFi & USB Safety
        </h1>
        <p className="text-blue-600 font-black uppercase tracking-widest mb-8 italic text-sm">
          Free WiFi: The Silent Thief
        </p>

        <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 leading-relaxed">
           <section className="mb-12 bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-yellow-500 shadow-sm">
            <h3 className="text-slate-900 font-black uppercase text-xs mb-3 tracking-widest">The "Juice Jacking" Format</h3>
            <p className="text-lg">
              Scammers set up free charging stations in airports or malls. When you plug your phone in, the USB cable doesn't just charge your phone—it <strong>copies your data</strong>, including bank app passwords and photos. 
              Similarly, hackers on "Free Public WiFi" can see everything you type.
            </p>
          </section>

          

          <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">The Invisible Hazard</h3>
          <p className="mb-8">
            Unlike a phone call scam, you don't talk to anyone here. It is silent. By the time you realize your data is gone, your account has already been "formatted."
          </p>

          <div className="bg-blue-50 p-10 rounded-[2.5rem] border-2 border-blue-100 mb-12 shadow-sm">
            <h3 className="text-blue-700 font-black uppercase text-xs mb-6 tracking-widest italic underline">The "Iron-Clad" Protocol</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm text-xl">🔌</span> 
                <div>
                    <strong className="text-slate-900 block uppercase text-sm">Wall Sockets Only</strong>
                    Avoid USB ports in public. Use your own "follow-come" three-pin charger in a wall socket.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm text-xl">🛡️</span> 
                <div>
                    <strong className="text-slate-900 block uppercase text-sm">USB Data Blocker</strong>
                    If you must use public USB, use a "USB Condom" (Data Blocker) that only allows power, no data.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm text-xl">📶</span> 
                <div>
                    <strong className="text-slate-900 block uppercase text-sm">Avoid Public Banking</strong>
                    Never open your bank app or OPay while connected to "Free Airport WiFi." Use your mobile data.
                </div>
              </li>
            </ul>
          </div>

          {/* FINAL GATEKEEPER */}
          <div className="mt-20 bg-slate-900 p-12 rounded-[3.5rem] text-center shadow-2xl border-4 border-blue-600/30 relative overflow-hidden">
            <div className="relative z-10">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full animate-bounce shadow-lg shadow-blue-500/50">
                    <span className="text-2xl text-white font-bold">🎯</span>
                </div>
                <h3 className="text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-2 italic">
                  All Lessons Complete / You Don Finish
                </h3>
                <h2 className="text-3xl text-white font-black mb-6 uppercase tracking-tight leading-none">
                  Final Verification
                </h2>
                <p className="text-slate-400 mb-10 font-medium text-sm leading-relaxed max-w-sm mx-auto">
                  You have mastered all 6 Modules. Are you ready to claim your <strong>Cyber-Commander Certificate</strong>?
                </p>
                
                <button 
                  onClick={handleComplete}
                  disabled={isSubmitting}
                  className={`w-full max-w-xs py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all shadow-xl ${
                    isSubmitting 
                    ? 'bg-slate-800 text-slate-500' 
                    : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 active:scale-95'
                  }`}
                >
                  {isSubmitting ? "Finalizing Credentials..." : "Complete Final Module →"}
                </button>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-20 translate-x-20" />
          </div>
        </div>
      </article>

      <footer className="mt-20 py-10 text-center opacity-10 font-black uppercase tracking-[0.5em] text-[8px]">
        End of Learning Track: Level 1 Commander
      </footer>
    </main>
  )
}