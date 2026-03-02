"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SimArmorModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // The ID MUST match the one in your app/learning/page.tsx 'stories' array
  const MODULE_ID = "sim-security";

  const handleComplete = () => {
    setIsSubmitting(true);
    
    // 1. Get existing progress from localStorage
    const savedProgress = localStorage.getItem('completedModules');
    const currentProgress = savedProgress ? JSON.parse(savedProgress) : [];

    // 2. Add this module if it's not already there
    if (!currentProgress.includes(MODULE_ID)) {
      currentProgress.push(MODULE_ID);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }

    // 3. Small delay for "Security Feel" then redirect
    setTimeout(() => {
      router.push('/learning');
    }, 800);
  };

  const steps = [
    {
      title: "The Danger (Threat)",
      pidgin: "Why you gidi-gidi need SIM PIN",
      text: "If person tief your phone, dem no need your screen lock. Dem go just pull your SIM, put am for another phone, and use USSD codes (*901#, etc.) take empty your bank account. Your SIM is the key to your money.",
      icon: "⚠️"
    },
    {
      title: "The Solution (Action)",
      pidgin: "How to set the Double-Lock",
      text: "Go to Settings > Security > SIM Card Lock. Switch am 'ON'. e go ask for 'Default PIN'. For MTN/Airtel/Glo, e usually be '0000' or '1111'. Change am to your own secret 4 digits.",
      icon: "⚙️"
    },
    {
      title: "The Safety Net (Backup)",
      pidgin: "If you forget your PIN (PUK)",
      text: "No try guess more than 3 times! If you lock am, find your SIM Pack or call your Network Provider to get your PUK code. If you try guess too much, the SIM go spoil (Burn).",
      icon: "🛡️"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* MODULE HEADER */}
      <header className="bg-slate-900 text-white p-10 md:p-20 rounded-b-[4rem] shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => router.back()} className="text-blue-400 font-bold mb-6 hover:text-white transition-colors uppercase text-xs tracking-widest">
            ← Cancel Lesson
          </button>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">MODULE 1: <br/><span className="text-blue-500 text-6xl md:text-8xl">SIM CARD ARMOR</span></h1>
          <p className="text-xl opacity-80 font-medium">Stop scammers from using your phone number to withdraw your money.</p>
        </div>
      </header>

      {/* CONTENT SECTION */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex gap-6 items-start hover:border-blue-500 transition-colors">
              <div className="hidden md:flex bg-blue-50 text-3xl p-5 rounded-2xl">{step.icon}</div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">{step.title}</h2>
                <p className="text-blue-600 font-bold mb-4 italic">"{step.pidgin}"</p>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PROACTIVE CHECKLIST */}
        <div className="mt-12 bg-green-600 text-white p-10 rounded-[3.5rem] shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-widest">Your 2-Minute Assignment:</h3>
            <ul className="space-y-4 font-bold text-lg mb-10">
              <li className="flex items-center gap-3">✅ Open your Phone Settings now.</li>
              <li className="flex items-center gap-3">✅ Locate "SIM Card Lock".</li>
              <li className="flex items-center gap-3">✅ Set a PIN that is NOT your birthday.</li>
              <li className="flex items-center gap-3">✅ Write the PUK code and keep it on paper.</li>
            </ul>

            {/* THE MASTER BUTTON */}
            <button 
              onClick={handleComplete}
              disabled={isSubmitting}
              className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-2xl ${
                isSubmitting 
                ? 'bg-green-800 cursor-not-allowed text-white/50' 
                : 'bg-white text-green-700 hover:bg-slate-900 hover:text-white active:scale-95'
              }`}
            >
              {isSubmitting ? "Saving Progress..." : "Finish & Mark as Complete"}
            </button>
          </div>
          
          {/* Abstract background shape for the green box */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </section>

      <footer className="py-20 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[10px]">
        Module Verification System Active
      </footer>
    </main>
  )
}