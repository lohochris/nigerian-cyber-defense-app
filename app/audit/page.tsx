"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ShieldCheck, 
  ShieldAlert, 
  ShieldX, 
  ChevronRight, 
  RotateCcw, 
  BookOpen, 
  Home,
  Lock,
  Smartphone,
  AlertTriangle
} from 'lucide-react'

export default function SecurityAudit() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const questions = [
    {
      q: "How do you handle your Bank App password?",
      pq: "How you de manage your Bank App password?",
      icon: <Lock className="text-blue-600" />,
      options: [
        { text: "I use the same password for everything", p: "I de use one password for all", points: 0 },
        { text: "I use a unique password only for my bank", p: "My bank password different from others", points: 10 },
        { text: "I write it down in my phone contacts", p: "I save am for my phone contacts", points: 2 }
      ]
    },
    {
      q: "If you receive an SMS saying your BVN is blocked, what is your first step?",
      pq: "If text come say dem block your BVN, wetin you go do first?",
      icon: <AlertTriangle className="text-amber-500" />,
      options: [
        { text: "Click the link in the SMS immediately", p: "Click that link sharp-sharp", points: 0 },
        { text: "Call the number that sent the message", p: "Call the person wey send am", points: 2 },
        { text: "Go to the bank or check my app", p: "Waka go bank or check my bank app", points: 10 }
      ]
    },
    {
      q: "Is your WhatsApp protected with a 6-digit PIN (2FA)?",
      pq: "You don put that 6-digit PIN for your WhatsApp (Two-Step)?",
      icon: <ShieldCheck className="text-green-600" />,
      options: [
        { text: "Yes, I enabled it long ago", p: "Yes, I don do am tay-tay", points: 10 },
        { text: "No, I don't know what that is", p: "No, I no even sabi wetin be that", points: 0 },
        { text: "I started but didn't finish", p: "I try do am but I no finish am", points: 3 }
      ]
    },
    {
      q: "What do you do when a 'Bank Staff' calls asking for your OTP?",
      pq: "Wetin you go do if 'Bank Staff' call ask for your OTP?",
      icon: <Smartphone className="text-purple-600" />,
      options: [
        { text: "I give it to them to resolve the issue", p: "I go give dem make dem fix the problem", points: 0 },
        { text: "I hang up immediately", p: "I go just cut the call one-time", points: 10 },
        { text: "I ask them to prove they are from the bank", p: "I go tell dem make dem prove say dem be bank staff", points: 5 }
      ]
    },
    {
      q: "Do you have a SIM Card PIN enabled?",
      pq: "Your SIM card get PIN lock wey you put?",
      icon: <Lock className="text-red-600" />,
      options: [
        { text: "Yes, to protect against phone theft", p: "Yes, if dem tief phone my money go safe", points: 10 },
        { text: "No, it's too stressful to type", p: "No, e de stress me to de type am", points: 0 }
      ]
    }
    // ... Additional questions follow the same pattern
  ];

  const handleAnswer = (points: number) => {
    setTotalScore(prev => prev + points);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-center pt-24">
      <div className="max-w-3xl w-full bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-b-[12px] border-blue-600 relative overflow-hidden">
        
        {!showResult ? (
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-10">
              <div className="h-3 w-2/3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-700 ease-out" 
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <span className="font-black text-blue-600 text-xs uppercase tracking-widest ml-4 bg-blue-50 px-3 py-1 rounded-lg">
                Phase {step + 1}/{questions.length}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center">
                {questions[step].icon}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight uppercase tracking-tighter">
                Security Inquiry
              </h2>
            </div>

            <p className="text-xl font-bold text-slate-800 mb-2">{questions[step].q}</p>
            <p className="text-blue-600 font-black mb-10 text-lg italic uppercase tracking-tight">
               "{questions[step].pq}"
            </p>

            <div className="grid grid-cols-1 gap-4">
              {questions[step].options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(opt.points)}
                  className="group text-left p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] hover:border-blue-600 hover:bg-blue-50 transition-all active:scale-95 flex justify-between items-center"
                >
                  <div>
                    <p className="font-black text-slate-800 text-lg group-hover:text-blue-900 uppercase tracking-tight">{opt.text}</p>
                    <p className="text-sm text-slate-500 font-bold group-hover:text-blue-600 italic">"{opt.p}"</p>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-blue-600 transition-colors" size={24} />
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-6 animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center mb-8">
               {totalScore >= 40 ? (
                 <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-100">
                    <ShieldCheck size={48} strokeWidth={2.5} />
                 </div>
               ) : totalScore >= 25 ? (
                 <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-100">
                    <ShieldAlert size={48} strokeWidth={2.5} />
                 </div>
               ) : (
                 <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-100">
                    <ShieldX size={48} strokeWidth={2.5} />
                 </div>
               )}
            </div>

            <h2 className="text-6xl font-black mb-2 uppercase tracking-tighter text-slate-900 leading-none">
              {totalScore} <span className="text-2xl text-slate-400">/ 50</span>
            </h2>
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8">Overall Immunity Rating</p>

            <div className="bg-slate-50 p-8 rounded-[2.5rem] mb-10 border border-slate-100">
              <p className="text-xl font-black text-slate-800 uppercase tracking-tight mb-2">
                {totalScore >= 40 
                  ? "Cyber Commander" 
                  : totalScore >= 25 
                  ? "Vulnerable Target" 
                  : "Critical Risk"}
              </p>
              <p className="text-slate-500 font-bold leading-relaxed italic">
                {totalScore >= 40 
                  ? "Excellent! You sabi the scope. Scammers go hard to catch you." 
                  : totalScore >= 25 
                  ? "You try, but scammers still fit 'wash' you easily. You need more training." 
                  : "Your level low o! Scammers fit clear your account in minutes. Go Learning Lab now!"}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => router.push('/learning')}
                className="flex items-center justify-center gap-3 py-5 bg-blue-600 text-white rounded-[2rem] font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all uppercase tracking-widest"
              >
                <BookOpen size={20} /> Learning Lab
              </button>
              <button 
                onClick={() => {setStep(0); setTotalScore(0); setShowResult(false);}}
                className="flex items-center justify-center gap-3 py-5 bg-white text-slate-900 border-2 border-slate-200 rounded-[2rem] font-black text-lg hover:bg-slate-50 transition-all uppercase tracking-widest"
              >
                <RotateCcw size={20} /> Retest
              </button>
            </div>
            
            <button 
              onClick={() => router.push('/')}
              className="mt-8 flex items-center justify-center gap-2 mx-auto text-slate-400 font-black uppercase text-[10px] tracking-widest hover:text-slate-900 transition-colors"
            >
              <Home size={12} /> Return to Command
            </button>
          </div>
        )}
      </div>
    </main>
  )
}