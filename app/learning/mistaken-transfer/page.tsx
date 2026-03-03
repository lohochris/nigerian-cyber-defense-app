"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  ChevronLeft, 
  ShieldAlert, 
  Banknote, 
  Undo2, 
  Smartphone, 
  ArrowRight, 
  Scale, 
  Heart, 
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function MistakenTransferModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  const MODULE_ID = "mistaken-transfer";

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
      <nav className="p-6 border-b border-slate-200 sticky top-0 bg-white/90 backdrop-blur-md z-30">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/learning" className="group text-blue-600 font-black flex items-center gap-2 hover:text-slate-900 transition-colors uppercase text-[10px] tracking-widest">
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Exit Briefing
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tactical Deep-Dive #04</span>
          </div>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-16">
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
              <Scale size={20} />
            </div>
            <span className="text-blue-600 font-black uppercase text-[10px] tracking-widest">Legal & Financial Safety</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-[0.85] uppercase tracking-tighter">
            THE MISTAKEN <br/><span className="text-blue-600">TRANSFER TRAP</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold max-w-2xl leading-relaxed italic">
            "No let dem use 'Sorry' format you." Scammers exploit your conscience to make you an accidental accomplice.
          </p>
        </div>

        <div className="prose prose-slate max-w-none">
           <section className="mb-12 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="text-amber-500" size={24} />
                <h3 className="text-slate-900 font-black uppercase text-xs tracking-[0.2em]">The Scenario</h3>
              </div>
              <p className="text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                A scammer sends a fake SMS alert. Seconds later, they call you crying: 
                <span className="block mt-6 p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-600 text-slate-900 italic font-black text-lg md:text-xl shadow-inner">
                  "Please, I mistakenly sent my children's school fees to your account! I beg you in God's name, send it back!"
                </span>
              </p>
            </div>
            <Banknote size={250} className="absolute -bottom-20 -right-20 text-slate-50 pointer-events-none group-hover:rotate-12 transition-transform" />
          </section>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-amber-50 p-8 rounded-[2.5rem] border border-amber-100">
              <div className="bg-amber-100 text-amber-700 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                <Heart size={24} />
              </div>
              <h4 className="font-black uppercase text-sm mb-2 text-amber-900">Why it works</h4>
              <p className="text-slate-600 font-medium">They play on your <strong>empathy</strong>. Because you are a good person, you want to help immediately without checking facts.</p>
            </div>
            <div className="bg-red-50 p-8 rounded-[2.5rem] border border-red-100">
              <div className="bg-red-100 text-red-700 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                <ShieldAlert size={24} />
              </div>
              <h4 className="font-black uppercase text-sm mb-2 text-red-900">The Danger</h4>
              <p className="text-slate-600 font-medium">The money is either non-existent (Fake SMS) or stolen. If you send it back manually, you are laundering money for them.</p>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-10 md:p-14 rounded-[4rem] shadow-2xl relative overflow-hidden border-t-8 border-blue-400">
            <div className="relative z-10">
              <h3 className="text-blue-400 font-black uppercase text-[10px] mb-12 tracking-[0.3em] flex items-center gap-2">
                <CheckCircle size={16} /> DEFENSE PROTOCOL
              </h3>
              
              <div className="grid gap-10">
                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                    <Undo2 size={24} />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Official Reversal Only</strong>
                    <p className="text-blue-100/60 font-medium italic">Tell them: "I have seen the alert. Please contact your bank to initiate a formal reversal."</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Manual Balance Check</strong>
                    <p className="text-blue-100/60 font-medium">Never trust an SMS notification. Open your bank app and verify if your "Available Balance" has actually increased.</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="bg-white/10 p-4 rounded-2xl text-blue-400">
                    <Scale size={24} />
                  </div>
                  <div>
                    <strong className="text-white block uppercase text-sm mb-2 tracking-wide">Legal Protection</strong>
                    <p className="text-blue-100/60 font-medium">By letting the bank handle the reversal, you create a legal paper trail that proves you are not part of the scam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-slate-900 p-12 md:p-16 rounded-[4rem] text-center shadow-2xl border-4 border-blue-600/20 relative overflow-hidden">
            <div className="relative z-10">
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full shadow-2xl shadow-blue-500/50">
                    <CheckCircle size={32} className="text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl text-white font-black mb-6 uppercase tracking-tighter leading-none">
                  COMMIT TO SAFETY
                </h2>
                <p className="text-slate-400 mb-10 font-medium text-lg leading-relaxed max-w-sm mx-auto">
                  Do you confirm that you will <strong>never</strong> manually return "mistaken" funds without a bank-initiated reversal?
                </p>
                
                <button 
                  onClick={handleComplete}
                  disabled={isSubmitting}
                  className={`w-full max-w-sm py-6 rounded-3xl font-black uppercase tracking-[0.2em] text-xs transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl ${
                    isSubmitting 
                    ? 'bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed' 
                    : 'bg-white text-blue-900 hover:bg-blue-600 hover:text-white active:scale-95'
                  }`}
                >
                  {isSubmitting ? (
                    <>Syncing Defense... <CheckCircle size={18} className="animate-pulse" /></>
                  ) : (
                    <>I Understand - Complete Module <ArrowRight size={18} /></>
                  )}
                </button>
            </div>
          </div>
        </div>
      </article>

      <footer className="mt-20 py-10 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[10px] text-slate-500">
        Module 04 // Anti-Money Laundering Framework Verified
      </footer>
    </main>
  )
}