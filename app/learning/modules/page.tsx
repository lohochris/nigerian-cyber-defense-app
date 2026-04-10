"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Smartphone, 
  BellRing, 
  BrainCircuit, 
  Banknote, 
  Mic2, 
  Zap, 
  ChevronLeft,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

export default function LearningModules() {
  const router = useRouter();
  const [completedList, setCompletedList] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('completedModules');
    if (saved) setCompletedList(JSON.parse(saved));
  }, []);

  const markAsComplete = (moduleId: string, path: string) => {
    // We don't mark as complete here anymore, just navigate. 
    // The individual page will handle completion after the video is watched.
    router.push(path);
  };

  const modules = [
    {
      id: "sim-security",
      title: "The SIM Card Armor",
      pidgin: "Lock your SIM with PIN",
      difficulty: "Essential",
      topics: ["SIM-Swap Fraud", "Double-Lock PIN", "PUK Safety"],
      icon: Smartphone,
      youtubeId: "d7CvC1Z8QkQ", // Syncing the ID
      path: "/learning/sim-armor"
    },
    {
      id: "social-eng",
      title: "The Human Firewall",
      pidgin: "How to spot 'Sweet Mouth'",
      difficulty: "Advanced",
      topics: ["Urgency Tactics", "Fake Bank Calls", "OTP Protection"],
      icon: BrainCircuit,
      youtubeId: "qnUNRdbtKjU",
      path: "/learning/social-eng"
    },
    {
      id: "bank-alerts",
      title: "Spotting Fake Bank Alerts",
      pidgin: "Verify the Alert: No fall Mugu",
      difficulty: "Essential",
      topics: ["SMS Spoofing", "Balance Check", "Bank App Security"],
      icon: BellRing,
      youtubeId: "vfgxmJj0Stc",
      path: "/learning/bank-alerts"
    },
    {
      id: "mistaken-transfer",
      title: "The 'Mistake' Credit Trap",
      pidgin: "No send am back quickly!",
      difficulty: "Intermediate",
      topics: ["Money Laundering", "Legal Returns", "Bank Protocols"],
      icon: Banknote,
      youtubeId: "6HhWC8rB7Fw",
      path: "/learning/mistaken-transfer"
    },
    {
      id: "ai-voice",
      title: "AI Voice & Family Scams",
      pidgin: "Verify the Voice with Password",
      difficulty: "Advanced",
      topics: ["Deepfake Audio", "Family Safe-words", "Identity Theft"],
      icon: Mic2,
      youtubeId: "pJZYd_65xs4",
      path: "/learning/ai-scams"
    },
    {
      id: "public-safety",
      title: "Public WiFi & USB Safety",
      pidgin: "Free WiFi: The Silent Thief",
      difficulty: "Intermediate",
      topics: ["Juice Jacking", "VPN Defense", "Charging Risks"],
      icon: Zap,
      youtubeId: "dNiYae0iZ-U",
      path: "/learning/public-safety"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 selection:bg-blue-100">
      <div className="bg-slate-900 text-white p-12 md:p-24 rounded-b-[4rem] shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -mr-20 -mt-20"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <button 
            onClick={() => router.push('/learning')} 
            className="mb-8 text-blue-400 hover:text-white transition-colors font-black flex items-center gap-2 uppercase text-[10px] tracking-[0.3em]"
          >
            <ChevronLeft size={16} /> Back to Lab
          </button>
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none">
            Security <span className="text-blue-500">Mastery</span>
          </h1>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl font-medium leading-relaxed">
            Complete the curriculum to unlock your <span className="text-white font-bold underline decoration-blue-500 underline-offset-4">Cyber-Commander</span> certification.
          </p>
        </div>
      </div>

      <section className="max-w-5xl mx-auto p-6 md:p-12 -mt-16 relative z-20">
        <div className="grid gap-6">
          {modules.map((mod) => {
            const isDone = completedList.includes(mod.id);
            const Icon = mod.icon;
            
            return (
              <div 
                key={mod.id} 
                className={`group bg-white border-2 ${
                  isDone ? 'border-green-500 shadow-xl shadow-green-500/5' : 'border-white shadow-lg'
                } rounded-[3rem] p-8 transition-all hover:scale-[1.01] hover:border-blue-500 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden`}
              >
                {isDone && (
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-8 py-2 rounded-bl-3xl font-black text-[9px] uppercase tracking-[0.2em] flex items-center gap-2">
                    <CheckCircle2 size={12} /> Mastered
                  </div>
                )}

                <div className={`${
                  isDone ? 'bg-green-50 text-green-600' : 'bg-slate-900 text-white'
                } w-24 h-24 shrink-0 rounded-[2rem] flex items-center justify-center transition-colors group-hover:bg-blue-600`}>
                  <Icon size={40} strokeWidth={1.5} />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-3 mb-3">
                     <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${
                       mod.difficulty === 'Essential' ? 'bg-blue-100 text-blue-700' :
                       mod.difficulty === 'Intermediate' ? 'bg-orange-100 text-orange-700' : 'bg-purple-100 text-purple-700'
                     }`}>
                       {mod.difficulty}
                     </span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-1">
                    {mod.title}
                  </h2>
                  <p className="text-blue-600 font-bold text-xs mb-5 uppercase tracking-wide">
                    {mod.pidgin}
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    {mod.topics.map((t, i) => (
                      <span key={i} className="text-[9px] font-bold bg-slate-50 text-slate-500 px-3 py-1.5 rounded-xl border border-slate-100 uppercase tracking-tight">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => markAsComplete(mod.id, mod.path)}
                  className={`w-full md:w-auto px-10 py-5 rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 ${
                    isDone 
                    ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                    : 'bg-slate-900 text-white hover:bg-blue-600 shadow-blue-500/20'
                  }`}
                >
                  {isDone ? 'Review' : 'Start'} <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="py-24 text-center">
        <div className="h-[1px] w-24 bg-slate-200 mx-auto mb-8"></div>
        <p className="opacity-30 font-black uppercase tracking-[0.5em] text-[9px] text-slate-900">
          Academic Intelligence • Project Guard • 2026
        </p>
      </footer>
    </main>
  )
}