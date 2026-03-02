"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LearningModules() {
  const router = useRouter();
  const [completedList, setCompletedList] = useState<string[]>([]);

  // Load existing progress to show "Completed" status on this page too
  useEffect(() => {
    const saved = localStorage.getItem('completedModules');
    if (saved) setCompletedList(JSON.parse(saved));
  }, []);

  const markAsComplete = (moduleId: string, path: string) => {
    const savedProgress = localStorage.getItem('completedModules');
    let currentProgress = savedProgress ? JSON.parse(savedProgress) : [];
    
    if (!currentProgress.includes(moduleId)) {
      currentProgress.push(moduleId);
      localStorage.setItem('completedModules', JSON.stringify(currentProgress));
    }
    
    // Redirect to the actual deep-dive lesson content
    router.push(path);
  };

  const modules = [
    {
      id: "sim-security",
      title: "The SIM Card Armor",
      pidgin: "Lock your SIM with PIN",
      difficulty: "Essential",
      topics: ["Why scammers steal SIMs", "How to set a SIM PIN", "PUK Code safety"],
      icon: "📲",
      path: "/learning/sim-armor"
    },
    {
      id: "bank-alerts",
      title: "Spotting Fake Bank Alerts",
      pidgin: "Verify the Alert: No fall Mugu",
      difficulty: "Essential",
      topics: ["SMS Spoofing", "Balance verification", "Bank App security"],
      icon: "💰",
      path: "/learning/bank-alert"
    },
    {
      id: "social-eng",
      title: "The Human Firewall",
      pidgin: "How to spot 'Sweet Mouth'",
      difficulty: "Advanced",
      topics: ["Urgency tactics", "Fake Bank Staff calls", "The 5-minute cooling rule"],
      icon: "🧠",
      path: "/learning/bvn-scam"
    },
    {
      id: "mistaken-transfer",
      title: "The 'Mistake' Credit Trap",
      pidgin: "No send am back quickly!",
      difficulty: "Intermediate",
      topics: ["Money Laundering risks", "Legal return process", "Reversal protocols"],
      icon: "💸",
      path: "/learning/mistaken-transfer"
    },
    {
      id: "ai-voice",
      title: "AI Voice & Family Scams",
      pidgin: "Verify the Voice with Password",
      difficulty: "Advanced",
      topics: ["Deepfake Audio", "Family Safe-words", "Identity verification"],
      icon: "🎙️",
      path: "/learning/ai-scams"
    },
    {
      id: "public-safety",
      title: "Public WiFi & USB Safety",
      pidgin: "Free WiFi: The Silent Thief",
      difficulty: "Intermediate",
      topics: ["Juice Jacking", "VPN usage", "Public Charging risks"],
      icon: "🔌",
      path: "/learning/public-safety"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <div className="bg-blue-600 text-white p-8 md:p-16 rounded-b-[3rem] shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <button onClick={() => router.push('/learning')} className="mb-6 opacity-80 hover:opacity-100 font-bold flex items-center gap-2 uppercase text-xs tracking-widest">
            ← Back to Lab
          </button>
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight leading-none">Security Mastery</h1>
          <p className="text-xl opacity-90 max-w-2xl font-medium">
            Finish all 6 modules to unlock the "Cyber-Commander" certificate. Every lesson counts towards your defense.
          </p>
        </div>
      </div>

      {/* MODULE LIST */}
      <section className="max-w-5xl mx-auto p-8 -mt-10">
        <div className="grid gap-6">
          {modules.map((mod) => {
            const isDone = completedList.includes(mod.id);
            
            return (
              <div key={mod.id} className={`bg-white border-2 ${isDone ? 'border-green-500 shadow-green-100' : 'border-slate-100'} rounded-[2.5rem] p-8 shadow-xl hover:border-blue-500 transition-all flex flex-col md:flex-row gap-8 items-start relative overflow-hidden`}>
                
                {isDone && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest">
                    Mastered
                  </div>
                )}

                <div className={`text-6xl ${isDone ? 'bg-green-50' : 'bg-slate-50'} p-6 rounded-3xl transition-colors`}>{mod.icon}</div>
                
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                     <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{mod.difficulty}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-tight">{mod.title}</h2>
                  <p className="text-blue-600 font-black text-sm mb-4 italic uppercase">{mod.pidgin}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {mod.topics.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold bg-slate-50 text-slate-500 px-3 py-1.5 rounded-lg border border-slate-100 uppercase tracking-tighter">✓ {t}</span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => markAsComplete(mod.id, mod.path)}
                  className={`w-full md:w-auto self-center px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest transition-all shadow-lg active:scale-95 ${
                    isDone 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-slate-900 text-white hover:bg-blue-600'
                  }`}
                >
                  {isDone ? 'Review Module' : 'Start Module'}
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="py-20 text-center opacity-20 font-black uppercase tracking-[0.5em] text-[10px]">
        Project Guard • 2026 Edition
      </footer>
    </main>
  )
}