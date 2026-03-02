"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AIScams() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CRITICAL: ID must match the one in app/learning/page.tsx
  const MODULE_ID = "ai-voice";

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
          <Link href="/learning" className="text-blue-600 font-bold flex items-center gap-2 hover:-translate-x-1 transition-transform uppercase text-[10px] tracking-widest">
            ← Back to Lab
          </Link>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Module 5</span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight uppercase tracking-tighter">
          AI Voice & Family Scams
        </h1>
        <p className="text-blue-600 font-black uppercase tracking-widest mb-8 italic text-sm">
          Verify the Voice: No rush send money
        </p>

        <div className="prose prose-slate lg:prose-xl font-medium text-slate-600 leading-relaxed">
           <section className="mb-12 bg-slate-50 p-8 rounded-[2.5rem] border-l-8 border-blue-600 shadow-sm">
            <h3 className="text-slate-900 font-black uppercase text-xs mb-3 tracking-widest">The "Pikin" Format</h3>
            <p className="text-lg">
              Scammers now use Artificial Intelligence (AI) to clone voices. They take a 5-second clip of your child or relative from social media and use it to call you. 
              The voice will sound exactly like them, crying that they had an accident or were arrested and need <strong>urgent money</strong> for bail or hospital bills.
            </p>
          </section>

          <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Why we fall for it</h3>
          <p className="mb-8">
            When we hear a loved one in pain, our "logical brain" switches off and our "emotional brain" takes over. Scammers use this <strong>panic</strong> to make sure you don't think twice before hitting 'Send'.
          </p>

          <div className="bg-green-50 p-10 rounded-[2.5rem] border-2 border-green-100 mb-12">
            <h3 className="text-green-700 font-black uppercase text-xs mb-6 tracking-widest italic underline">The "Double-Lock" Defense</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm text-xl">🔑</span> 
                <div>
                  <strong className="text-slate-900 block uppercase text-sm">Create a Family Password</strong>
                  Pick a secret word (e.g., "Orijin") that only your family knows. If the caller can't say it, it's an AI clone.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm text-xl">📞</span> 
                <div>
                  <strong className="text-slate-900 block uppercase text-sm">Hang up and Call back</strong>
                  Immediately hang up and call the person on their <strong>original</strong> saved number from your contact list.
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="bg-white p-2 rounded-xl shadow-sm text-xl">🚫</span> 
                <div>
                  <strong className="text-slate-900 block uppercase text-sm">Trust No "New" Numbers</strong>
                  Treat every "I'm calling from a friend's phone" or "My phone broke" call with 100% suspicion during money requests.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* COMPLETION AREA */}
        <div className="mt-20 border-t-4 border-slate-100 pt-12">
            <div className="bg-blue-600 text-white p-8 md:p-12 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black uppercase mb-4 relative z-10">Defense Verified?</h3>
                <p className="text-blue-100 mb-8 max-w-md mx-auto relative z-10">
                    I confirm that I will set a Family Password and always verify emergency calls by calling the original number back.
                </p>
                
                <button 
                    onClick={handleComplete}
                    disabled={isSubmitting}
                    className={`w-full max-w-xs py-5 rounded-2xl font-black uppercase tracking-[0.2em] transition-all relative z-10 shadow-xl ${
                        isSubmitting 
                        ? 'bg-blue-800 text-blue-300 cursor-not-allowed' 
                        : 'bg-white text-blue-600 hover:bg-slate-900 hover:text-white active:scale-95'
                    }`}
                >
                    {isSubmitting ? "Syncing Biometrics..." : "Mark as Mastered"}
                </button>

                {/* Background Decor */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            </div>
        </div>
      </article>

      <footer className="mt-20 py-10 text-center opacity-10 font-black uppercase tracking-[0.5em] text-[8px]">
        AI Voice Recognition & Neural Defense Protocol
      </footer>
    </main>
  )
}