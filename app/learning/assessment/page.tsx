"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function FinalAssessment() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState("");

  // SECURITY GATE: Check if all 6 modules are completed in localStorage
  useEffect(() => {
    const checkProgress = () => {
      const savedProgress = localStorage.getItem('completedModules');
      const progress = savedProgress ? JSON.parse(savedProgress) : [];
      
      // We need exactly 6 unique IDs to pass
      if (progress.length < 6) {
        setIsAuthorized(false);
        // Give them a moment to read the "Access Denied" before kicking them out
        const timer = setTimeout(() => router.push('/learning'), 4000);
        return () => clearTimeout(timer);
      } else {
        setIsAuthorized(true);
      }
    };

    checkProgress();
  }, [router]);

  const questions = [
    {
      question: "A 'Bank Staff' calls you saying your BVN is blocked. They ask for the OTP sent to your phone to 'unblock' it. What do you do?",
      options: ["Give them the OTP quickly", "Hang up and call your bank's official number", "Ask them for their staff ID first", "Post the OTP on Twitter"],
      correct: 1
    },
    {
      question: "You receive a ₦50,000 credit alert via SMS, but your bank app balance hasn't changed. The sender calls begging for a refund. What is this?",
      options: ["A miracle", "A mistaken transfer", "A fake alert scam", "A banking error"],
      correct: 2
    },
    {
      question: "What is the most secure way to protect your SIM card from being used for unauthorized bank transfers?",
      options: ["Hide the phone", "Set a 4-digit SIM PIN", "Delete all bank apps", "Use a strong phone lock screen"],
      correct: 1
    },
    {
      question: "You get a voice note from your 'brother' crying for money due to an emergency, but the voice sounds slightly robotic. What should you do?",
      options: ["Send money immediately", "Call him back and ask for the 'Family Password'", "Ignore him forever", "Report him to the police"],
      correct: 1
    }
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  // 1. ACCESS DENIED SCREEN
  if (isAuthorized === false) {
    return (
      <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl border-t-8 border-red-500">
          <div className="text-7xl mb-6">🔒</div>
          <h1 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Clearance Required</h1>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            You haven't finished all 6 Learning Modules. A <span className="text-red-600 font-bold">Cyber-Commander</span> must be fully trained before taking the final exam.
          </p>
          <div className="flex items-center justify-center gap-3 bg-slate-50 py-4 rounded-2xl border border-slate-100">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
             <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Redirecting to Lab...</span>
          </div>
        </div>
      </main>
    );
  }

  // 2. LOADING SCREEN
  if (isAuthorized === null) return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-blue-500 font-black text-xs uppercase tracking-[0.5em] animate-pulse">Verifying Credentials...</div>
    </main>
  );

  // 3. RESULTS SCREEN
  if (showResults) {
    const passed = score >= 3;
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl text-center border-8 border-white relative overflow-hidden">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Assessment Results</h2>
          <div className="text-8xl mb-8 transform hover:scale-110 transition-transform cursor-default">{passed ? "🎖️" : "📚"}</div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 uppercase mb-4 tracking-tighter leading-none">
            {passed ? "Commander Verified" : "Module Retraining"}
          </h1>
          <p className="text-slate-500 text-xl mb-12 font-medium">
            Strategic Accuracy: <span className="text-slate-900 font-black">{Math.round((score/questions.length)*100)}%</span>
          </p>

          {passed ? (
            <div className="space-y-6 relative z-10">
              <input 
                type="text" 
                placeholder="Full Name for ID Card" 
                className="w-full p-6 rounded-3xl border-4 border-slate-50 focus:border-blue-600 outline-none text-center font-black text-2xl uppercase tracking-tight transition-all placeholder:text-slate-200"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Link 
                href={`/learning/completion?name=${encodeURIComponent(userName || "Cyber Commander")}`}
                className="block w-full py-6 bg-blue-600 text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-slate-900 transition-all shadow-2xl active:scale-95"
              >
                Issue Certificate →
              </Link>
            </div>
          ) : (
            <button 
              onClick={() => window.location.reload()}
              className="w-full py-6 bg-slate-900 text-white rounded-3xl font-black uppercase tracking-widest text-sm hover:bg-blue-600 transition-all shadow-xl"
            >
              Re-take Assessment
            </button>
          )}

          {/* BG DECOR */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -translate-y-10 translate-x-10" />
        </div>
      </main>
    );
  }

  // 4. QUIZ SCREEN
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-3xl w-full">
        <div className="flex justify-between items-center mb-8 text-white px-4">
          <div className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
            Phase <span className="text-blue-500">{currentQuestion + 1}</span> / {questions.length}
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 animate-pulse">
             System Live • Security Final
          </div>
        </div>

        <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl relative overflow-hidden border-b-[12px] border-blue-600/20">
            {/* PROGRESS BAR */}
            <div className="absolute top-0 left-0 w-full h-3 bg-slate-100">
                 <div 
                    className="h-full bg-blue-600 transition-all duration-700 ease-out" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} 
                 />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.1] mb-12 tracking-tight">
                {questions[currentQuestion].question}
            </h2>

            <div className="grid gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full p-8 text-left border-2 border-slate-50 rounded-[2rem] font-bold text-slate-700 hover:border-blue-600 hover:bg-blue-50/50 transition-all active:scale-[0.97] flex items-center gap-6 group relative overflow-hidden"
                    >
                        <span className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-xs font-black group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-lg md:text-xl tracking-tight leading-tight">{option}</span>
                        
                        {/* Hover effect detail */}
                        <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-opacity text-blue-600 text-2xl font-black">
                            →
                        </div>
                    </button>
                ))}
            </div>
        </div>
        
        <footer className="mt-12 text-center opacity-30">
            <p className="text-white text-[10px] font-black uppercase tracking-[0.8em]">Military Grade Verification</p>
        </footer>
      </div>
    </main>
  );
}