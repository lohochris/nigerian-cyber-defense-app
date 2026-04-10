"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  Trophy, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight,
  AlertOctagon,
  Terminal,
  Send,
  CheckCircle2
} from 'lucide-react'

export default function FinalAssessment() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(15).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState("");

  const questions = [
    { question: "A Bank Staff calls asking for an OTP to unblock your BVN. What is your immediate action?", options: ["Give them the OTP", "Hang up and call official line", "Ask for their Staff ID", "Wait for them to call back"], correct: 1 },
    { question: "You get a 50k SMS alert, but your App balance is unchanged. The sender begs for a refund. This is:", options: ["A Banking Error", "A Mistaken Transfer", "A Fake Alert Scam", "A Network Delay"], correct: 2 },
    { question: "What is the primary defense for your SIM card against unauthorized bank transfers?", options: ["Strong Phone Password", "A 4-digit SIM PIN", "Deleting Bank Apps", "Turning off Data"], correct: 1 },
    { question: "An AI-cloned voice of a relative begs for emergency money. How do you verify?", options: ["Send 50% first", "Ask for a Family Password", "Call the Police", "Ignore the call"], correct: 1 },
    { question: "A stranger offers you a Free USB Charger at the airport. What is the risk?", options: ["Fast Charging", "Juice Jacking (Data Theft)", "Battery Damage", "Slow Internet"], correct: 1 },
    { question: "You see a public WiFi named Free_Airport_Secure. Should you log into your bank app?", options: ["Yes, if it has a padlock", "Only for 2 minutes", "Never on public WiFi", "Yes, with a VPN only"], correct: 2 },
    { question: "Which of these is NOT a red flag for Social Engineering?", options: ["Extreme Urgency", "Asking for OTP", "Professional Greeting", "Threats of account closure"], correct: 2 },
    { question: "A buyer sends you a screenshot of a successful transfer but no alert has reached you. You should:", options: ["Release the goods", "Ask for their ID card", "Wait for balance reflection", "Call your bank manager"], correct: 2 },
    { question: "What does Double-Lock protection mean in this course?", options: ["Two Phone Passwords", "SIM PIN + App Biometrics", "Two Bank Accounts", "Physical Safe for Phone"], correct: 1 },
    { question: "If you accidentally gave a scammer your OTP, what is the first thing to do?", options: ["Change your ATM PIN", "Call Bank to Freeze Account", "Wait for a debit alert", "Pray"], correct: 1 },
    { question: "Why do scammers use SMS Broadcasters?", options: ["To send messages faster", "To spoof official Bank IDs", "To give free airtime", "To bypass 2FA"], correct: 1 },
    { question: "Your Bank sends an email with a link to Update your KYC. The URL is secure-zenith-update.top. Is it safe?", options: ["Yes, it says secure", "No, the domain is fake", "Yes, KYC is mandatory", "Only if you use a PC"], correct: 1 },
    { question: "What is the Golden Rule of Nigerian Fintech security?", options: ["Trust but Verify", "No OTP, No Entry", "Banks never ask for PIN/OTP", "Fast finger wins"], correct: 2 },
    { question: "Someone mistakenly sends 1M to you and wants it back in a different account. You should:", options: ["Send it back immediately", "Spend the commission", "Contact your bank to reverse", "Withdraw the cash"], correct: 2 },
    { question: "A Customer Care agent on Twitter (X) asks for your phone number to help with a failed transaction. What is the Risk level?", options: ["Low - they need to call", "Zero - it is Twitter", "High - Phishing attempt", "Medium - check their bio"], correct: 2 }
  ];

  useEffect(() => {
    const savedProgress = localStorage.getItem('completedModules');
    const progress = savedProgress ? JSON.parse(savedProgress) : [];
    if (progress.length < 6) {
      setIsAuthorized(false);
      setTimeout(() => router.push('/learning'), 3000);
    } else {
      setIsAuthorized(true);
    }
  }, [router]);

  const selectOption = (idx: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = idx;
    setUserAnswers(newAnswers);
  };

  if (isAuthorized === false) return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-white text-[10px] font-bold uppercase tracking-widest">
      Access Restricted: Complete all training modules.
    </main>
  );

  if (showResults) {
    const score = userAnswers.filter((ans, i) => ans === questions[i].correct).length;
    const passed = score >= 12;
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-slate-900 border border-white/10 p-10 rounded-2xl text-center">
          {passed ? <Trophy className="mx-auto text-yellow-500 mb-4" size={48} /> : <AlertOctagon className="mx-auto text-red-500 mb-4" size={48} />}
          <h1 className="text-lg font-black text-white uppercase">{passed ? "Assessment Passed" : "Assessment Failed"}</h1>
          <p className="text-slate-500 text-[10px] mt-2 mb-8 uppercase tracking-widest font-bold">Accuracy: {score} / {questions.length}</p>
          
          {passed ? (
            <div className="space-y-4">
              <input 
                type="text" placeholder="Full Name for Certificate" 
                className="w-full bg-slate-800 p-4 rounded-lg border border-white/5 text-white text-[10px] uppercase outline-none focus:border-blue-500 transition-all"
                value={userName} onChange={(e) => setUserName(e.target.value)}
              />
              <Link href={`/learning/completion?name=${userName}`} className="block w-full py-4 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-black uppercase rounded-lg transition-colors cursor-pointer">
                Generate Credential
              </Link>
            </div>
          ) : (
            <button onClick={() => window.location.reload()} className="w-full py-4 bg-white hover:bg-slate-200 text-black text-[10px] font-black uppercase rounded-lg transition-colors cursor-pointer">
              Restart Test
            </button>
          )}
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center selection:bg-blue-500/30">
      {/* Spacer to push content below a navigation bar if present */}
      <div className="pt-24 pb-12 w-full max-w-2xl px-6 flex flex-col min-h-screen">
        
        {/* Progress Tracker */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Terminal size={14} className="text-blue-500" />
            <span className="text-white text-[9px] font-black uppercase tracking-[0.2em]">Live Simulation</span>
          </div>
          <div className="text-slate-500 text-[9px] font-black uppercase tracking-[0.2em]">
            Step {currentQuestion + 1} of {questions.length}
          </div>
        </div>

        {/* Question Area */}
        <div className="flex-grow">
          <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight mb-10">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => selectOption(idx)}
                className={`w-full p-4 text-left rounded-xl text-[11px] font-bold uppercase tracking-wide transition-all border-2 cursor-pointer flex items-center justify-between group
                  ${userAnswers[currentQuestion] === idx 
                    ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20' 
                    : 'bg-slate-900/50 border-white/5 text-slate-400 hover:border-blue-500/50 hover:text-slate-200'}`}
              >
                <div className="flex items-center gap-4">
                    <span className={`text-[9px] font-black ${userAnswers[currentQuestion] === idx ? 'text-white' : 'text-slate-600'}`}>
                        {String.fromCharCode(65 + idx)}
                    </span>
                    {option}
                </div>
                {userAnswers[currentQuestion] === idx && <CheckCircle2 size={14} className="text-white" />}
              </button>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between items-center">
          <button
            disabled={currentQuestion === 0}
            onClick={() => setCurrentQuestion(prev => prev - 1)}
            className="flex items-center gap-2 text-slate-500 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg disabled:opacity-0 transition-all text-[9px] font-black uppercase tracking-widest cursor-pointer"
          >
            <ChevronLeft size={16} /> Back
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              disabled={userAnswers.includes(null)}
              onClick={() => setShowResults(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-900/40"
            >
              Finalize <Send size={14} />
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion(prev => prev + 1)}
              className="flex items-center gap-2 text-blue-500 hover:text-white hover:bg-blue-500/10 px-4 py-2 rounded-lg transition-all text-[9px] font-black uppercase tracking-widest cursor-pointer"
            >
              Continue <ChevronRight size={16} />
            </button>
          )}
        </div>

        <div className="mt-8 text-center">
            <span className="text-[8px] text-slate-800 font-black uppercase tracking-[0.5em]">System Protected // 2026</span>
        </div>
      </div>
    </main>
  );
}