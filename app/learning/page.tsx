"use client"
import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { 
  ShieldCheck, 
  Lock, 
  ChevronLeft, 
  UserPlus, 
  CheckCircle2,
  Trophy,
  LayoutDashboard
} from 'lucide-react'
import ModuleCard from '@/app/components/ModuleCard' 

function LearningLabContent() {
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const referralSource = searchParams.get('ref');
  const isNewSession = searchParams.get('new');

  // Handle Session Logic & Load Progress
  useEffect(() => {
    // If URL has ?new=true, wipe everything for a fresh start
    if (isNewSession === 'true') {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('module_progress_') || key === 'completedModules') {
          localStorage.removeItem(key);
        }
      });
      setCompletedModules([]);
      router.replace('/learning');
      return;
    }

    // Otherwise, load existing progress
    const savedProgress = localStorage.getItem('completedModules');
    if (savedProgress) {
      setCompletedModules(JSON.parse(savedProgress));
    }
  }, [isNewSession, router]);

  // Manual Reset for a New Learner
  const resetProgress = () => {
    if (confirm("This will clear all progress for a new learner. Continue?")) {
      const keys = Object.keys(localStorage);
      keys.forEach(key => {
        if (key.startsWith('module_progress_') || key === 'completedModules') {
          localStorage.removeItem(key);
        }
      });
      setCompletedModules([]);
      window.location.reload(); // Refresh to reset all component internal states
    }
  };

  // Callback for when a module is marked "Mastered"
  const handleModuleComplete = (id: string) => {
    setCompletedModules((prev) => {
      if (prev.includes(id)) return prev;
      const updated = [...prev, id];
      localStorage.setItem('completedModules', JSON.stringify(updated));
      return updated;
    });
  };

  const stories = [
    { id: "sim-security", module: "Module 1", title: "SIM Card & Data Security", pidginTitle: "No let dem pull money from your SIM", description: "Learn why your SIM card is the key to your bank account and how to set a 'Double-Lock' PIN today.", youtubeId: "d7CvC1Z8QkQ", path: "/learning/sim-armor" },
    { id: "social-eng", module: "Module 2", title: "Social Engineering Defense", pidginTitle: "Caution: No give out your PIN", description: "Learn how to spot the psychological tricks hackers use to steal your OTP or BVN.", youtubeId: "qnUNRdbtKjU", path: "/learning/social-eng" },
    { id: "bank-alerts", module: "Module 3", title: "Spotting Fake Bank Alerts", pidginTitle: "Verify the Alert: No fall Mugu", description: "A practical guide on checking your balance vs. trusting SMS alerts.", youtubeId: "vfgxmJj0Stc", path: "/learning/bank-alerts" },
    { id: "mistaken-transfer", module: "Module 4", title: "The 'Mistaken' Transfer Trap", pidginTitle: "Mistake Credit: No send am back!", description: "Real stories of ₦1.5 Billion mistaken credits and legal rules for returning money.", youtubeId: "6HhWC8rB7Fw", path: "/learning/mistaken-transfer" },
    { id: "ai-voice", module: "Module 5", title: "AI Voice & Family Scams", pidginTitle: "Family Emergency: Verify the Voice", description: "Scammers now clone voices of loved ones. Learn how to spot AI scams.", youtubeId: "pJZYd_65xs4", path: "/learning/ai-scams" },
    { id: "public-safety", module: "Module 6", title: "Public WiFi & USB Safety", pidginTitle: "Free WiFi: The Silent Thief", description: "Watch how 'Juice Jacking' allows hackers to see your bank app.", youtubeId: "dNiYae0iZ-U", path: "/learning/public-safety" }
  ];

  const progressPercentage = (completedModules.length / stories.length) * 100;
  const allModulesCompleted = completedModules.length === stories.length;

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 relative">
      {referralSource && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-black text-[10px] uppercase tracking-widest animate-bounce flex items-center gap-2">
          <ShieldCheck size={14} /> Welcome {referralSource} Community!
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        {/* TOP NAV */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="group text-slate-400 font-black inline-flex items-center gap-2 hover:text-blue-600 transition-colors uppercase text-[10px] tracking-widest">
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> 
            Back to Base
          </Link>
          <button onClick={resetProgress} className="bg-white border border-slate-200 text-slate-500 hover:text-blue-600 hover:border-blue-600 px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm flex items-center gap-2">
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
            
            <div className="max-w-md">
              <div className="flex justify-between items-end mb-3">
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">System Hardening: {Math.round(progressPercentage)}%</p>
                <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest">{completedModules.length} / {stories.length} Fixed</p>
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
              <Link href="/learning/assessment" className="group bg-blue-600 text-white px-10 py-6 rounded-[2rem] font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-900 transition-all shadow-lg flex items-center gap-3">
                Final Assessment <Trophy size={18} />
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
          {stories.map((story, index) => {
            // LOCK LOGIC: Module is locked if it's not the first one AND the previous one isn't done.
            const isLocked = index !== 0 && !completedModules.includes(stories[index - 1].id);
            
            return (
              <ModuleCard 
                key={story.id} 
                {...story} 
                locked={isLocked}
                isCompleted={completedModules.includes(story.id)}
                onComplete={handleModuleComplete}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default function LearningLab() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center">Loading...</div>}>
      <LearningLabContent />
    </Suspense>
  );
}