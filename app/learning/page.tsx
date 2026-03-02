"use client"
import React, { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
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
    // If URL has ?new=true, clear everything for a fresh start
    if (isNewSession === 'true') {
      localStorage.removeItem('completedModules');
      setCompletedModules([]);
      // Clean the URL so it doesn't keep resetting on every refresh
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
      id: "bank-alerts",
      module: "Module 2",
      title: "Spotting Fake Bank Alerts",
      pidginTitle: "Verify the Alert: No fall Mugu",
      description: "A practical guide on checking your balance vs. trusting SMS alerts, and how to identify fraudulent notifications.",
      youtubeId: "vfgxmJj0Stc", 
      path: "/learning/bank-alert"
    },
    {
      id: "social-eng",
      module: "Module 3",
      title: "Social Engineering Defense",
      pidginTitle: "Caution: No give out your PIN",
      description: "Learn why 'Caution' is your best defense against 'Customer Care' scammers asking for your OTP or BVN.",
      youtubeId: "qnUNRdbtKjU", 
      path: "/learning/bvn-scam"
    },
    {
      id: "mistaken-transfer",
      module: "Module 4",
      title: "The 'Mistaken' Transfer Trap",
      pidginTitle: "Mistake Credit: No send am back!",
      description: "Real stories of ₦1.5 Billion mistaken credits. Learn the legal and security rules for returning 'wrong' money safely.",
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
      description: "Watch how 'Juice Jacking' and public WiFi allow hackers to see your bank app. Protect your data in public spaces.",
      youtubeId: "dNiYae0iZ-U", 
      path: "/learning/public-safety"
    }
  ];

  const allModulesCompleted = completedModules.length === stories.length;
  const progressPercentage = (completedModules.length / stories.length) * 100;

  return (
    <main className="min-h-screen bg-slate-50 p-6 relative">
      {referralSource && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[60] bg-blue-600 text-white px-6 py-3 rounded-full shadow-2xl font-bold text-xs uppercase tracking-widest animate-bounce">
          Welcome {referralSource} Community member! 🛡️
        </div>
      )}

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="w-full max-w-4xl relative">
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute -top-14 right-0 text-white font-black text-sm uppercase tracking-widest bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all"
            >
              ✕ Close Lesson
            </button>
            <div className="aspect-video rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/10">
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
        <div className="flex justify-between items-center mb-8">
            <Link href="/" className="group text-blue-600 font-black inline-flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-xs tracking-widest">
            ← Back house
            </Link>
            
            {/* NEW LEARNER BUTTON */}
            <button 
                onClick={resetProgress}
                className="bg-white border-2 border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-sm flex items-center gap-2"
            >
                <span>👤</span> New Learner Session
            </button>
        </div>

        <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 uppercase tracking-tighter leading-none">Learning Lab</h1>
            <p className="text-xl text-slate-500 max-w-2xl font-medium mb-4">
              Watch these <span className="text-blue-600 font-bold italic">6 Modules</span> to build your Cyber-Resilience.
            </p>
            
            {/* PROGRESS BAR */}
            <div className="max-w-md bg-slate-200 h-3 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-1000 ease-out"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-[10px] font-black text-slate-400 mt-2 uppercase tracking-widest">
              Progress: {completedModules.length} / {stories.length} Modules Completed
            </p>
          </div>
          
          {allModulesCompleted ? (
            <Link href="/learning/assessment" className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-center">
              Take Final Assessment →
            </Link>
          ) : (
            <div className="bg-slate-200 text-slate-400 px-8 py-4 rounded-2xl font-black uppercase text-xs tracking-widest cursor-not-allowed text-center border-2 border-slate-300">
              Locked: Finish All Modules 🔒
            </div>
          )}
        </header>

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

        <div className="mt-16 bg-slate-900 rounded-[3rem] p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Ready to become a Commander?</h2>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            {allModulesCompleted 
              ? "You have completed all modules! You are now eligible to take the certification exam."
              : "Finish all 6 modules above to unlock the final exam and receive your official certificate."
            }
          </p>
          
          {allModulesCompleted ? (
            <Link href="/learning/assessment" className="inline-block bg-blue-600 text-white px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-blue-700 transition-all shadow-xl active:scale-95">
              Start the Certification Quiz
            </Link>
          ) : (
            <button disabled className="inline-block bg-slate-800 text-slate-500 px-12 py-5 rounded-2xl font-black uppercase text-sm tracking-widest cursor-not-allowed opacity-50 border border-slate-700">
              Assessment Locked 🔒
            </button>
          )}
        </div>
      </div>

      <footer className="mt-20 py-10 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-300 font-black uppercase tracking-[0.4em]">
            Knowledge is your strongest shield
          </p>
      </footer>
    </main>
  )
}

export default function LearningLab() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50 flex items-center justify-center font-black text-slate-400 uppercase tracking-widest">Loading Lab...</div>}>
      <LearningLabContent />
    </Suspense>
  )
}