"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function MistakenTransferModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CRITICAL: ID must match the one in app/learning/page.tsx
  const MODULE_ID = "mistaken-transfer";

  const handleComplete = () => {
    setIsSubmitting(true);
    
    const savedProgress = localStorage.getItem('completedModules');
    const currentProgress = savedProgress ? JSON.parse(savedProgress) : [];

    if (!currentProgress.includes(MODULE_ID)) {
      currentProgress.push(MODULE_ID);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }

    // Security simulation delay
    setTimeout(() => {
      router.push('/learning');
    }, 800);
  };

  return (
    <main className="min-h-screen bg-white pb-20">
      <nav className="p-6 border-b border-slate-100 sticky top-0 bg-white/80 backdrop-blur-md z-10">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link href="/learning" className="text-blue-600 font-bold flex items-center gap-2 uppercase text-[10px] tracking-widest">
            ← Back to Lab
          </Link>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Deep-Dive #4</span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tighter">
          The Mistaken Transfer Trap
        </h1>
        <p className="text-blue-600 font-black uppercase tracking-widest mb-8 italic text-sm">
          No let dem use "Sorry" format you
        </p>

        <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 leading-relaxed">
           <section className="mb-12 bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 shadow-sm">
            <h3 className="text-slate-900 font-black uppercase text-xs mb-3 tracking-widest">The Format (The Scam)</h3>
            <p className="text-lg">
              A scammer sends a fake SMS alert to your phone. Seconds later, they call you crying. 
              <span className="block mt-4 text-slate-800 italic font-bold">
                "Please, I mistakenly sent my rent money to your account! My children are hungry, please send it back!"
              </span>
            </p>
          </section>

          <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Why it works</h3>
          <p className="mb-8">
            They play on your <strong>empathy</strong>. Because you are a good person, you want to help. 
            But the money they "sent" isn't real, or it was stolen from another person's hacked account. If you send it back from your own funds, you lose your real money.
          </p>

          <div className="bg-red-50 p-10 rounded-[2.5rem] border-2 border-red-100 mb-12">
            <h3 className="text-red-600 font-black uppercase text-xs mb-6 tracking-widest">The Defense Protocol</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm">🚫</span> 
                <div>
                  <strong className="text-slate-900 block uppercase text-sm">Never send it back yourself</strong>
                  Tell them: "I have seen it. Please contact your bank to initiate a reversal."
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm">🏦</span> 
                <div>
                  <strong className="text-slate-900 block uppercase text-sm">Official Reversal Only</strong>
                  Only the bank should move money out of your account for a reversal. This protects you from money laundering.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm">📱</span> 
                <div>
                  <strong className="text-slate-900 block uppercase text-sm">Check Balance</strong>
                  Always check your actual bank app balance. Scammers can spoof bank SMS names.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* COMPLETION AREA */}
        <div className="mt-20 border-t-4 border-slate-100 pt-12">
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black uppercase mb-4 relative z-10">Module 4 Complete?</h3>
                <p className="text-slate-400 mb-8 max-w-md mx-auto relative z-10">
                    By clicking below, you confirm that you will never manually return "mistaken" funds without a bank reversal.
                </p>
                
                <button 
                    onClick={handleComplete}
                    disabled={isSubmitting}
                    className={`w-full max-w-xs py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all relative z-10 ${
                        isSubmitting 
                        ? 'bg-slate-800 text-slate-500' 
                        : 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 active:scale-95'
                    }`}
                >
                    {isSubmitting ? "Updating Progress..." : "I Understand - Complete"}
                </button>

                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-x-10 -translate-y-10 blur-2xl" />
            </div>
        </div>
      </article>

      <footer className="mt-20 py-10 text-center opacity-10 font-black uppercase tracking-[0.5em] text-[8px]">
        Mistaken Transfer Legal Compliance Framework
      </footer>
    </main>
  )
}