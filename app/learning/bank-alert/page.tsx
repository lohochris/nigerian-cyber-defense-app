"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function BankAlertModule() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CRITICAL: ID must match the one in app/learning/page.tsx
  const MODULE_ID = "bank-alerts";

  const handleComplete = () => {
    setIsSubmitting(true);
    
    const savedProgress = localStorage.getItem('completedModules');
    const currentProgress = savedProgress ? JSON.parse(savedProgress) : [];

    if (!currentProgress.includes(MODULE_ID)) {
      currentProgress.push(MODULE_ID);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }

    // Short delay for better UX "feedback"
    setTimeout(() => {
      router.push('/learning');
    }, 800);
  };

  const rules = [
    {
      title: "The SMS Lie",
      pidgin: "No trust text message o!",
      text: "Scammers use 'SMS Broadcasters' to send messages that look like they come from your bank. They can even make the sender name show 'GTBank' or 'Zenith'. Never believe a credit alert just because you saw a text.",
      icon: "📱"
    },
    {
      title: "The Real Proof",
      pidgin: "Always check your App or *Code#",
      text: "The only true way to know if money entered your account is to check your Bank App directly or use your bank's USSD code (e.g., *737# or *894#). If the money no show for there, nobody sent you anything!",
      icon: "🏦"
    },
    {
      title: "The Balance Trick",
      pidgin: "Look at your Total Balance",
      text: "Scammers often write the 'Credit' amount but they can't change your 'Total Balance'. Always look at the final amount in your account. If it didn't increase, the alert is a 'Format'.",
      icon: "💰"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="bg-green-700 text-white p-10 md:p-20 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 text-[15rem] font-black pointer-events-none">₦</div>
        <div className="max-w-4xl mx-auto relative z-10">
          <button onClick={() => router.back()} className="text-green-200 font-bold mb-6 hover:text-white transition-colors uppercase text-xs tracking-widest">
            ← Cancel Lesson
          </button>
          <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight uppercase">MODULE 2: <br/><span className="text-yellow-400">FAKE ALERT DEFENSE</span></h1>
          <p className="text-xl opacity-90 font-medium max-w-2xl">Stop scammers from 'formatting' your brain with fake credit alerts. Verify before you carry goods give person.</p>
        </div>
      </header>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid gap-8">
          {rules.map((rule, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] border-l-8 border-green-600 shadow-sm flex gap-6 items-start hover:shadow-md transition-shadow">
              <div className="hidden md:flex bg-green-50 text-3xl p-5 rounded-2xl">{rule.icon}</div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-1 uppercase tracking-tight">{rule.title}</h2>
                <p className="text-green-700 font-bold mb-4 italic">"{rule.pidgin}"</p>
                <p className="text-slate-600 leading-relaxed text-lg font-medium">{rule.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PROACTIVE CHECKLIST */}
        <div className="mt-12 bg-slate-900 text-white p-10 rounded-[3rem] shadow-xl border-4 border-yellow-400 overflow-hidden relative">
          <h3 className="text-2xl font-black mb-8 uppercase tracking-widest text-yellow-400 text-center relative z-10">The "Anti-Mugu" Checklist</h3>
          <div className="space-y-6 mb-12 relative z-10">
            <div className="flex gap-4 items-start">
              <span className="text-2xl bg-white/10 p-2 rounded-xl">1️⃣</span>
              <p className="font-bold text-lg">Ignore the 'Sender Name'. Anyone can use a computer to send SMS as 'Your Bank'.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl bg-white/10 p-2 rounded-xl">2️⃣</span>
              <p className="font-bold text-lg">Check your Balance via USSD or Bank App. If the money no show for there, NA LIE.</p>
            </div>
            <div className="flex gap-4 items-start">
              <span className="text-2xl bg-white/10 p-2 rounded-xl">3️⃣</span>
              <p className="font-bold text-lg">No let anybody rush you. Scammers use 'Gidi-gidi' (urgency) to make you forget to verify.</p>
            </div>
          </div>

          {/* MASTER BUTTON */}
          <button 
            onClick={handleComplete}
            disabled={isSubmitting}
            className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] transition-all shadow-2xl relative z-10 ${
              isSubmitting 
              ? 'bg-slate-800 cursor-not-allowed text-white/50' 
              : 'bg-yellow-400 text-slate-900 hover:bg-white active:scale-95'
            }`}
          >
            {isSubmitting ? "Updating Defense Logs..." : "Mark as Mastered"}
          </button>
          
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400/5 rounded-full blur-3xl" />
        </div>
      </section>

      <footer className="py-20 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[10px]">
        Module 2 Clearance: Verified
      </footer>
    </main>
  )
}