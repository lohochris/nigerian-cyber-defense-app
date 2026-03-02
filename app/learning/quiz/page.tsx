"use client"
import React, { useState } from 'react'
import Link from 'next/link'

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
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden">
        {!showResult ? (
          <div className="p-10">
            {/* PROGRESS BAR */}
            <div className="flex justify-between items-center mb-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">
                Assessment {currentStep + 1} of {QUIZ_DATA.length}
              </span>
              <div className="h-2 w-32 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500" 
                  style={{ width: `${((currentStep + 1) / QUIZ_DATA.length) * 100}%` }}
                />
              </div>
            </div>

            <h2 className="text-2xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tight">
              {QUIZ_DATA[currentStep].question}
            </h2>

            <div className="space-y-4">
              {QUIZ_DATA[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                  className={`w-full p-6 text-left rounded-2xl font-bold transition-all border-2 ${
                    selectedOption === index 
                      ? (isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700')
                      : 'border-slate-100 bg-slate-50 hover:border-blue-400 text-slate-600'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {selectedOption !== null && (
              <div className="mt-8 animate-in fade-in slide-in-from-bottom-4">
                <div className={`p-4 rounded-xl mb-6 ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
                    <p className={`text-xs font-black uppercase tracking-widest ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                    {isCorrect ? "✅ Defense Successful" : `❌ Security Breach: ${QUIZ_DATA[currentStep].pidginHint}`}
                    </p>
                </div>
                <button 
                  onClick={nextQuestion}
                  className="w-full py-4 bg-slate-900 text-white rounded-xl font-black uppercase text-xs tracking-widest hover:bg-blue-600 transition-all"
                >
                  {currentStep + 1 === QUIZ_DATA.length ? "Finalize Score" : "Next Question →"}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="mb-6 text-6xl">
              {score >= 4 ? "🎖️" : "⚠️"}
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tighter">
              Score: {Math.round((score / QUIZ_DATA.length) * 100)}%
            </h2>
            <p className="text-slate-500 font-medium mb-10">
              {score >= 4 
                ? "Excellent! You have achieved Cyber-Commander status." 
                : "Security clearance denied. Please review the modules and try again."}
            </p>

            <div className="flex flex-col gap-4">
              {score >= 4 ? (
                <Link 
                  href="/learning/register" 
                  className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-blue-700 hover:-translate-y-1 transition-all"
                >
                  Continue to Registration →
                </Link>
              ) : (
                <button 
                  onClick={() => window.location.reload()}
                  className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-slate-800"
                >
                  Restart Assessment
                </button>
              )}
              <Link href="/learning" className="text-slate-400 font-bold uppercase text-[10px] tracking-widest hover:text-slate-600 mt-4">
                ← Return to Learning Lab
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}