"use client"
import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { 
  ShieldCheck, 
  Lock, 
  ChevronLeft, 
  UserPlus, 
  Play, 
  CheckCircle2,
  Trophy,
  LayoutDashboard
} from 'lucide-react'
import ModuleCard from '@/app/components/ModuleCard' 

function LearningLabContent() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const referralSource = searchParams.get('ref');
  const isNewSession = searchParams.get('new');

  // Handle Session Logic
  useEffect(() => {
    if (isNewSession === 'true') {
      localStorage.removeItem('completedModules');
      setCompletedModules([]);
      router.replace('/learning');
      return;
    }

    const savedProgress = localStorage.getItem('completedModules');
    if (savedProgress) {
      setCompletedModules(JSON.parse(savedProgress));
    }
  }, [isNewSession, router]);

  const resetProgress = () => {
    if (confirm("This will clear all progress so a new learner can start. Continue?")) {
      localStorage.removeItem('completedModules');
      setCompletedModules([]);
      window.location.reload();
    }
  };

  const stories = [
    {
      id: "sim-security",
      module: "Module 1",
      title: "SIM Card & Data Security",
      pidginTitle: "No let dem pull money from your SIM",
      description: "Learn why your SIM card is the key to your bank account and how to set a 'Double-Lock' PIN today.",
      youtubeId: "d7CvC1Z8QkQ", 
      path: "/learning/sim-armor"
    },
    {
      id: "social-eng", // SYNCED: Matches app/learning/social-eng/page.tsx
      module: "Module 2",
      title: "Social Engineering Defense",
      pidginTitle: "Caution: No give out your PIN",
      description: "Learn how to spot the psychological tricks hackers use to steal your OTP or BVN before they steal your funds.",
      youtubeId: "qnUNRdbtKjU", 
      path: "/learning/social-eng" 
    },
    {
      id: "bank-alerts", // SYNCED: This expects app/learning/bank-alerts/page.tsx
      module: "Module 3",
      title: "Spotting Fake Bank Alerts",
      pidginTitle: "Verify the Alert: No fall Mugu",
      description: "A practical guide on checking your balance vs. trusting SMS alerts, and identifying fraudulent notifications.",
      youtubeId: "vfgxmJj0Stc", 
      path: "/learning/bank-alerts"
    },
    {
      id: "mistaken-transfer",
      module: "Module 4",
      title: "The 'Mistaken' Transfer Trap",
      pidginTitle: "Mistake Credit: No send am back!",
      description: "Real stories of ₦1.5 Billion mistaken credits. Learn the legal rules for returning 'wrong' money safely.",
      youtubeId: "6HhWC8rB7Fw", 
      path: "/learning/mistaken-transfer"
    },
    {
      id: "ai-voice",
      module: "Module 5",
      title: "AI Voice & Family Scams",
      pidginTitle: "Family Emergency: Verify the Voice",
      description: "Scammers now clone voices of loved ones to beg for money. Learn how to spot AI and use a Family Password.",
      youtubeId: "pJZYd_65xs4", 
      path: "/learning/ai-scams"
    },
    {
      id: "public-safety",
      module: "Module 6",
      title: "Public WiFi & USB Safety",
      pidginTitle: "Free WiFi: The Silent Thief",
      description: "Watch how 'Juice Jacking' and public WiFi allow hackers to see your bank app. Protect your data in public.",
      youtubeId: "dNiYae0iZ-U", 
      path: "/learning/public-safety"
    }
  ];

  const allModulesCompleted = completedModules.length === stories.length;
  const progressPercentage = (completedModules.length / stories.length) * 100;

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 relative">
      {referralSource && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-black text-[10px] uppercase tracking-widest animate-bounce flex items-center gap-2">
          <ShieldCheck size={14} /> Welcome {referralSource} Community!
        </div>
      )}

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="w-full max-w-4xl relative">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-14 right-0 text-white font-black text-[10px] uppercase tracking-widest bg-white/10 px-6 py-3 rounded-full hover:bg-red-600 transition-all border border-white/20"
            >
              ✕ Close Briefing
            </button>
            <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-black shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* TOP NAV */}
        <div className="flex justify-between items-center mb-12">
            <Link href="/" className="group text-slate-400 font-black inline-flex items-center gap-2 hover:text-blue-600 transition-colors uppercase text-[10px] tracking-widest">
              <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
              Back to Base
            </Link>
            
            <button 
                onClick={resetProgress}
                className="bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm flex items-center gap-2"
            >
                <UserPlus size={14} /> New Session
            </button>
        </div>

        {/* HERO SECTION */}
        <header className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
               <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
               <span className="text-blue-600 font-black uppercase text-[10px] tracking-[0.3em]">Operational Lab</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-[0.85]">
              Learning <br/><span className="text-blue-600">Defense</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-xl font-medium mb-8">
              Watch the briefings, then <span className="text-slate-900 font-bold">enter the module</span> to verify your defense protocols.
            </p>
            
            {/* PROGRESS TRACKER */}
            <div className="max-w-md">
              <div className="flex justify-between items-end mb-3">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">
                  System Hardening: {Math.round(progressPercentage)}%
                </p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">
                  {completedModules.length} / {stories.length} Fixed
                </p>
              </div>
              <div className="bg-slate-200 h-4 rounded-full overflow-hidden p-1">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:mb-2">
            {allModulesCompleted ? (
              <Link href="/learning/assessment" className="group bg-blue-600 text-white px-10 py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-900 transition-all shadow-[0_20px_40px_rgba(37,99,235,0.3)] active:scale-95 flex items-center gap-3">
                Final Assessment <Trophy size={18} className="group-hover:rotate-12 transition-transform" />
              </Link>
            ) : (
              <div className="bg-slate-100 text-slate-400 px-10 py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] border-2 border-dashed border-slate-200 flex items-center gap-3">
                Certification Locked <Lock size={16} />
              </div>
            )}
          </div>
        </header>

        {/* MODULE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <ModuleCard 
              key={story.id}
              {...story}
              isCompleted={completedModules.includes(story.id)}
              onWatch={setActiveVideo}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-20 bg-slate-900 rounded-[4rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">Master the Shield</h2>
            <p className="text-slate-400 mb-10 max-w-md mx-auto font-medium text-lg">
              {allModulesCompleted 
                ? "Excellent work. Your neural firewall is synchronized. Proceed to the certification exam to claim your rank."
                : "Complete all 6 security briefings to unlock your Commander Credentials and final badge."
              }
            </p>
            
            {allModulesCompleted ? (
              <Link href="/learning/assessment" className="inline-flex bg-blue-600 text-white px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-blue-600 transition-all shadow-xl active:scale-95 items-center gap-3">
                Begin Exam <CheckCircle2 size={18} />
              </Link>
            ) : (
              <div className="inline-flex bg-slate-800 text-slate-500 px-12 py-6 rounded-3xl font-black uppercase text-xs tracking-[0.2em] border border-slate-700 opacity-50 cursor-not-allowed items-center gap-3">
                Exam Encrypted <Lock size={18} />
              </div>
            )}
          </div>
          <LayoutDashboard size={400} className="absolute -bottom-20 -right-20 text-white/5 -rotate-12 pointer-events-none" />
        </div>
      </div>

      <footer className="mt-24 py-10 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.5em]">
            Naija Cyber-Hub // Knowledge is the Primary Shield
          </p>
      </footer>
    </main>
  )
}

export default function LearningLab() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="font-black text-slate-400 uppercase text-[10px] tracking-[0.4em]">Booting Learning Lab...</p>
      </div>
    }>
      <LearningLabContent />
    </Suspense>
  )
}