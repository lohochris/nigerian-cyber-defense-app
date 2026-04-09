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
  AlertTriangle,
  ArrowLeft
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
  ];

  const handleAnswer = (points: number) => {
    setTotalScore(prev => prev + points);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#f8fafc] p-4 md:p-6 flex flex-col items-center justify-center font-sans">
      {/* Decorative Background Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-3xl w-full bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden transition-all duration-500">
        
        {/* Accent Bar */}
        <div className="h-2 w-full bg-blue-600" />

        {!showResult ? (
          <div className="p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Header Area */}
            <div className="flex justify-between items-center mb-8">
              <button 
                onClick={handlePrevious}
                disabled={step === 0}
                className={`flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${step === 0 ? 'opacity-0' : 'text-slate-400 hover:text-blue-600'}`}
              >
                <ArrowLeft size={16} /> Back
              </button>
              <span className="font-black text-blue-600 text-xs uppercase tracking-[0.2em] bg-blue-50 px-4 py-2 rounded-full shadow-sm">
                Module {step + 1} of {questions.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden mb-12">
              <div 
                className="h-full bg-blue-600 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(37,99,235,0.4)]" 
                style={{ width: `${((step + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            {/* Question Content */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner border border-slate-100">
                {questions[step].icon}
              </div>
              <div>
                <h2 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-1">Cyber Intelligence</h2>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight tracking-tight">
                  {questions[step].q}
                </h3>
              </div>
            </div>

            <div className="mb-10 p-4 bg-blue-50/50 rounded-2xl border-l-4 border-blue-600">
                <p className="text-blue-700 font-bold text-lg italic leading-relaxed">
                  "{questions[step].pq}"
                </p>
            </div>

            {/* Options Grid */}
            <div className="grid grid-cols-1 gap-4">
              {questions[step].options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(opt.points)}
                  className="group relative text-left p-6 bg-white border-2 border-slate-100 rounded-3xl cursor-pointer
                             hover:border-blue-600 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1
                             transition-all duration-300 active:scale-[0.98] flex justify-between items-center"
                >
                  <div className="pr-4">
                    <p className="font-bold text-slate-800 text-lg group-hover:text-blue-900 transition-colors leading-snug">{opt.text}</p>
                    <p className="text-sm text-slate-400 font-medium mt-1 italic group-hover:text-blue-400">"{opt.p}"</p>
                  </div>
                  <div className="bg-slate-50 group-hover:bg-blue-600 group-hover:text-white p-2 rounded-xl transition-all duration-300 shadow-sm">
                    <ChevronRight size={20} />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center p-8 md:p-16 animate-in zoom-in fade-in duration-500">
            {/* Result Header */}
            <div className="flex justify-center mb-8">
               {totalScore >= 40 ? (
                 <div className="w-28 h-28 bg-green-50 text-green-500 rounded-full flex items-center justify-center border-4 border-green-100 shadow-xl animate-bounce-slow">
                    <ShieldCheck size={56} strokeWidth={2} />
                 </div>
               ) : totalScore >= 25 ? (
                 <div className="w-28 h-28 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center border-4 border-amber-100 shadow-xl">
                    <ShieldAlert size={56} strokeWidth={2} />
                 </div>
               ) : (
                 <div className="w-28 h-28 bg-red-50 text-red-500 rounded-full flex items-center justify-center border-4 border-red-100 shadow-xl">
                    <ShieldX size={56} strokeWidth={2} />
                 </div>
               )}
            </div>

            <div className="mb-4">
              <span className="text-slate-400 text-sm font-black uppercase tracking-[0.4em]">Audit Assessment</span>
              <h2 className="text-7xl font-black text-slate-900 mt-2 mb-2 tracking-tighter">
                {totalScore}<span className="text-3xl text-slate-300">/50</span>
              </h2>
            </div>

            <div className="max-w-md mx-auto bg-slate-50/80 backdrop-blur-sm p-8 rounded-[2.5rem] mb-12 border border-slate-100 shadow-inner">
              <p className={`text-2xl font-black uppercase tracking-tight mb-3 ${
                totalScore >= 40 ? "text-green-600" : totalScore >= 25 ? "text-amber-600" : "text-red-600"
              }`}>
                {totalScore >= 40 ? "Cyber Commander" : totalScore >= 25 ? "Vulnerable Target" : "Critical Risk"}
              </p>
              <p className="text-slate-600 font-bold leading-relaxed italic text-lg">
                {totalScore >= 40 
                  ? "Excellent! You sabi the scope. Scammers go hard to catch you." 
                  : totalScore >= 25 
                  ? "You try, but scammers still fit 'wash' you easily. You need more training." 
                  : "Your level low o! Scammers fit clear your account in minutes. Go Learning Lab now!"}
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
              <button 
                onClick={() => router.push('/learning')}
                className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-full cursor-pointer
                           font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:shadow-2xl 
                           hover:-translate-y-1 transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <BookOpen size={20} /> Learning Lab
              </button>
              <button 
                onClick={() => {setStep(0); setTotalScore(0); setShowResult(false);}}
                className="w-full md:w-auto px-10 py-5 bg-white text-slate-900 border-2 border-slate-200 
                           rounded-full cursor-pointer font-black text-lg hover:bg-slate-50 
                           transition-all active:scale-95 uppercase tracking-widest flex items-center justify-center gap-3"
              >
                <RotateCcw size={20} /> Retest
              </button>
            </div>
            
            <button 
              onClick={() => router.push('/')}
              className="mt-12 flex items-center justify-center gap-2 mx-auto text-slate-400 cursor-pointer 
                         font-black uppercase text-xs tracking-widest hover:text-blue-600 transition-colors"
            >
              <Home size={14} /> Return to Dashboard
            </button>
          </div>
        )}
      </div>
    </main>
  )
}