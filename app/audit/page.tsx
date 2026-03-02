"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SecurityAudit() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "How do you handle your Bank App password?",
      pq: "How you de manage your Bank App password?",
      options: [
        { text: "I use the same password for everything", p: "I de use one password for all", points: 0 },
        { text: "I use a unique password only for my bank", p: "My bank password different from others", points: 10 },
        { text: "I write it down in my phone contacts", p: "I save am for my phone contacts", points: 2 }
      ]
    },
    {
      q: "If you receive an SMS saying your BVN is blocked, what is your first step?",
      pq: "If text come say dem block your BVN, wetin you go do first?",
      options: [
        { text: "Click the link in the SMS immediately", p: "Click that link sharp-sharp", points: 0 },
        { text: "Call the number that sent the message", p: "Call the person wey send am", points: 2 },
        { text: "Go to the bank or check my app", p: "Waka go bank or check my bank app", points: 10 }
      ]
    },
    {
      q: "Is your WhatsApp protected with a 6-digit PIN (2FA)?",
      pq: "You don put that 6-digit PIN for your WhatsApp (Two-Step)?",
      options: [
        { text: "Yes, I enabled it long ago", p: "Yes, I don do am tay-tay", points: 10 },
        { text: "No, I don't know what that is", p: "No, I no even sabi wetin be that", points: 0 },
        { text: "I started but didn't finish", p: "I try do am but I no finish am", points: 3 }
      ]
    },
    {
      q: "What do you do when a 'Bank Staff' calls asking for your OTP?",
      pq: "Wetin you go do if 'Bank Staff' call ask for your OTP?",
      options: [
        { text: "I give it to them to resolve the issue", p: "I go give dem make dem fix the problem", points: 0 },
        { text: "I hang up immediately", p: "I go just cut the call one-time", points: 10 },
        { text: "I ask them to prove they are from the bank", p: "I go tell dem make dem prove say dem be bank staff", points: 5 }
      ]
    },
    {
      q: "Do you have a SIM Card PIN enabled?",
      pq: "Your SIM card get PIN lock wey you put?",
      options: [
        { text: "Yes, to protect against phone theft", p: "Yes, if dem tief phone my money go safe", points: 10 },
        { text: "No, it's too stressful to type", p: "No, e de stress me to de type am", points: 0 }
      ]
    },
    {
      q: "How do you verify a Credit Alert?",
      pq: "How you de check say person send you money true-true?",
      options: [
        { text: "I trust the SMS that enters my phone", p: "I de believe the text wey enter phone", points: 0 },
        { text: "I check my total balance via USSD/App", p: "I de check my balance for App or Code", points: 10 }
      ]
    },
    {
      q: "Do you use Public WiFi (like at a park) for banking?",
      pq: "You de use Free WiFi for public place take do bank transfer?",
      options: [
        { text: "Yes, if I don't have data", p: "Yes, if I no get data", points: 0 },
        { text: "Never, I only use my own data", p: "Never, na my data I de use", points: 10 }
      ]
    },
    {
      q: "Someone sends you money 'by mistake' and calls you to send it back. What do you do?",
      pq: "Person send you money 'by mistake' come de beg you make you send am back. Wetin you go do?",
      options: [
        { text: "Send it back to the number they give me", p: "I go send am back to the number dem give me", points: 0 },
        { text: "Tell them to contact their bank", p: "I go tell dem make dem call dem bank", points: 10 }
      ]
    },
    {
      q: "Do you change your Banking PIN regularly?",
      pq: "You de change your Bank PIN once in a while?",
      options: [
        { text: "Yes, every few months", p: "Yes, every few months I de change am", points: 10 },
        { text: "No, I've used the same one for years", p: "No, na the same one I de use since", points: 2 }
      ]
    },
    {
      q: "Do you check for the 'Padlock' icon on websites?",
      pq: "You de look for that 'Padlock' sign for top of website?",
      options: [
        { text: "Yes, always", p: "Yes, every time", points: 10 },
        { text: "I don't really notice it", p: "I no de really look that side", points: 0 }
      ]
    }
  ];

  const handleAnswer = (points: number) => {
    setTotalScore(totalScore + points);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border-b-[12px] border-blue-600">
        
        {!showResult ? (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div className="h-2 w-2/3 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-500" 
                  style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
              <span className="font-black text-blue-600 text-sm italic ml-4">
                Step {step + 1}/{questions.length}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 leading-tight">
              {questions[step].q}
            </h2>
            <p className="text-blue-600 font-bold mb-10 text-lg">
              "{questions[step].pq}"
            </p>

            <div className="grid grid-cols-1 gap-4">
              {questions[step].options.map((opt, idx) => (
                <button 
                  key={idx}
                  onClick={() => handleAnswer(opt.points)}
                  className="group text-left p-6 bg-slate-50 border-2 border-slate-100 rounded-3xl hover:border-blue-600 hover:bg-blue-50 transition-all active:scale-95"
                >
                  <p className="font-bold text-slate-800 text-lg group-hover:text-blue-900">{opt.text}</p>
                  <p className="text-sm text-slate-500 font-medium group-hover:text-blue-600 italic">"{opt.p}"</p>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-10">
            <div className="text-8xl mb-8">
              {totalScore >= 80 ? "🛡️" : totalScore >= 50 ? "⚠️" : "🚨"}
            </div>
            <h2 className="text-5xl font-black mb-4 uppercase tracking-tighter">
              Score: {totalScore}%
            </h2>
            <p className="text-2xl font-bold text-slate-600 mb-10 max-w-md mx-auto">
              {totalScore >= 80 
                ? "You are a Cyber-Commander! Your money is safe." 
                : totalScore >= 50 
                ? "You try, but scammers still fit catch you. No let dem wash you." 
                : "Your level low o! Scammers fit clear your account easily. Go Learning Lab now!"}
            </p>
            
            <div className="flex flex-col gap-4">
               <button 
                onClick={() => router.push('/learning')}
                className="w-full py-5 bg-blue-600 text-white rounded-[2rem] font-black text-xl shadow-xl hover:bg-blue-700 transition-all"
              >
                Go to Learning Lab
              </button>
              <button 
                onClick={() => router.push('/')}
                className="w-full py-5 bg-slate-100 text-slate-600 rounded-[2rem] font-bold text-lg"
              >
                Back to Home
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}