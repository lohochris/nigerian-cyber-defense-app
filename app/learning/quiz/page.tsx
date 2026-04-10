"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ShieldCheck, 
  ShieldAlert, 
  ArrowRight, 
  RotateCcw, 
  Medal, 
  AlertTriangle,
  ChevronRight,
  ShieldIcon
} from 'lucide-react'

const QUIZ_DATA = [
  {
    question: "A 'Bank Official' calls asking for your OTP to 'block a fraudulent transaction'. What do you do?",
    options: ["Give it to them quickly", "Hang up and call your bank's official line", "Ask them to verify their name first"],
    correct: 1,
    pidginHint: "Bank no go ever ask for your OTP!"
  },
  {
    question: "You receive a 'Mistaken Credit' of ₦50,000. The sender calls crying for a refund. What is the safest move?",
    options: ["Send it back via your app", "Ignore the call entirely", "Tell them to contact their bank for a formal reversal"],
    correct: 2,
    pidginHint: "No touch am, let Bank handle the reverse."
  },
  {
    question: "What is a 'Family Password' used for in 2026?",
    options: ["To log into Netflix", "To verify a relative's identity during an AI Voice scam", "To secure your WiFi router"],
    correct: 1,
    pidginHint: "Use am confirm say na your real person dey call."
  },
  {
    question: "Is it safe to use a public USB charging port at the airport?",
    options: ["Yes, if your phone is off", "No, it could be 'Juice Jacking' your data", "Yes, it only provides power"],
    correct: 1,
    pidginHint: "That cable fit thief your bank details."
  },
  {
    question: "Someone hacks your friend's WhatsApp and asks you for money. How do you verify?",
    options: ["Call them on a normal phone call", "Send a small amount first", "Ask for their BVN"],
    correct: 0,
    pidginHint: "Call dem outside WhatsApp make you sure."
  }
];

export default function SecurityQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleOptionClick = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    const correct = index === QUIZ_DATA[currentStep].correct;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentStep + 1 < QUIZ_DATA.length) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsCorrect(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6 selection:bg-blue-100">
      <div className="max-w-2xl w-full bg-white rounded-[3.5rem] shadow-2xl border border-slate-200 overflow-hidden relative">
        {!showResult ? (
          <div className="p-10 md:p-14">
            {/* PROGRESS BAR */}
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-2">
                <ShieldIcon size={16} className="text-blue-600" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">
                  Assessment {currentStep + 1} of {QUIZ_DATA.length}
                </span>
              </div>
              <div className="h-1.5 w-32 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-700 ease-out" 
                  style={{ width: `${((currentStep + 1) / QUIZ_DATA.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-10 leading-tight uppercase tracking-tight">
              {QUIZ_DATA[currentStep].question}
            </h2>

            <div className="space-y-4">
              {QUIZ_DATA[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                  className={`w-full p-6 text-left rounded-2xl font-bold transition-all border-2 flex justify-between items-center group ${
                    selectedOption === index 
                      ? (isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700')
                      : 'border-slate-100 bg-slate-50 hover:border-blue-400 text-slate-600 hover:bg-white'
                  }`}
                >
                  <span className="text-sm md:text-base">{option}</span>
                  {selectedOption === index && (
                    isCorrect ? <ShieldCheck size={20} /> : <ShieldAlert size={20} />
                  )}
                </button>
              ))}
            </div>

            {selectedOption !== null && (
              <div className="mt-10 animate-in fade-in slide-in-from-bottom-6 duration-500">
                <div className={`p-5 rounded-2xl mb-8 flex items-start gap-4 ${isCorrect ? 'bg-green-100/50' : 'bg-red-100/50'}`}>
                    <div className="mt-1">
                      {isCorrect ? <ShieldCheck size={18} className="text-green-600" /> : <AlertTriangle size={18} className="text-red-600" />}
                    </div>
                    <div>
                      <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                        {isCorrect ? "Defense Successful" : "Security Breach Identified"}
                      </p>
                      <p className={`text-xs font-bold leading-relaxed ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                        {isCorrect ? "Your response aligns with secure banking protocols." : QUIZ_DATA[currentStep].pidginHint}
                      </p>
                    </div>
                </div>
                <button 
                  onClick={nextQuestion}
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] hover:bg-blue-600 transition-all shadow-lg flex items-center justify-center gap-3 group"
                >
                  {currentStep + 1 === QUIZ_DATA.length ? "Finalize Score" : "Next Protocol"} 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-14 text-center">
            <div className={`w-24 h-24 mx-auto mb-8 rounded-[2rem] flex items-center justify-center shadow-2xl ${score >= 4 ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
              {score >= 4 ? <Medal size={48} /> : <AlertTriangle size={48} />}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter">
              Score: {Math.round((score / QUIZ_DATA.length) * 100)}%
            </h2>
            
            <p className="text-slate-500 font-medium mb-12 text-lg leading-relaxed max-w-sm mx-auto">
              {score >= 4 
                ? "Excellent. You have demonstrated high-level cyber resilience and achieved Cyber-Commander status." 
                : "Security clearance denied. Your profile shows critical vulnerabilities to modern social engineering."}
            </p>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              {score >= 4 ? (
                <Link 
                  href="/learning/register" 
                  className="w-full py-6 bg-blue-600 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/20 hover:bg-blue-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
                >
                  Obtain Certification <ArrowRight size={16} />
                </Link>
              ) : (
                <button 
                  onClick={() => window.location.reload()}
                  className="w-full py-6 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-slate-800 flex items-center justify-center gap-3 transition-all"
                >
                  <RotateCcw size={16} /> Restart Assessment
                </button>
              )}
              
              <Link href="/learning" className="text-slate-400 font-black uppercase text-[10px] tracking-[0.3em] hover:text-blue-600 mt-6 transition-colors">
                Return to Learning Lab
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}