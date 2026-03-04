"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { 
  ShieldAlert, 
  ShieldCheck, 
  Trophy, 
  RotateCcw, 
  ChevronRight, 
  User, 
  Award,
  AlertOctagon,
  Fingerprint,
  Zap,
  Activity
} from 'lucide-react'

export default function FinalAssessment() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [userName, setUserName] = useState("");

  // SECURITY CHECK: Ensure all 6 modules are done
  useEffect(() => {
    const checkProgress = () => {
      const savedProgress = localStorage.getItem('completedModules');
      const progress = savedProgress ? JSON.parse(savedProgress) : [];
      
      if (progress.length < 6) {
        setIsAuthorized(false);
        // Redirect after 4 seconds
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
      question: "A 'Bank Staff' calls asking for an OTP to unblock your BVN. What is your immediate action?",
      options: ["Give them the OTP", "Hang up and call official line", "Ask for their Staff ID", "Wait for them to call back"],
      correct: 1
    },
    {
      question: "You get a ₦50k SMS alert, but your App balance is unchanged. The sender begs for a refund. This is:",
      options: ["A Banking Error", "A Mistaken Transfer", "A Fake Alert Scam", "A Network Delay"],
      correct: 2
    },
    {
      question: "What is the primary defense for your SIM card against unauthorized bank transfers?",
      options: ["Strong Phone Password", "A 4-digit SIM PIN", "Deleting Bank Apps", "Turning off Data"],
      correct: 1
    },
    {
      question: "An AI-cloned voice of a relative begs for emergency money. How do you verify?",
      options: ["Send 50% first", "Ask for a 'Family Password'", "Call the Police", "Ignore the call"],
      correct: 1
    },
    {
      question: "A stranger offers you a 'Free USB Charger' at the airport. What is the risk?",
      options: ["Fast Charging", "Juice Jacking (Data Theft)", "Battery Damage", "Slow Internet"],
      correct: 1
    },
    {
      question: "You see a public WiFi named 'Free_Airport_Secure'. Should you log into your bank app?",
      options: ["Yes, if it has a padlock", "Only for 2 minutes", "Never on public WiFi", "Yes, with a VPN only"],
      correct: 2
    },
    {
      question: "Which of these is NOT a red flag for Social Engineering?",
      options: ["Extreme Urgency", "Asking for OTP", "Professional Greeting", "Threats of account closure"],
      correct: 2
    },
    {
      question: "A buyer sends you a screenshot of a successful transfer but no alert has reached you. You should:",
      options: ["Release the goods", "Ask for their ID card", "Wait for balance reflection", "Call your bank manager"],
      correct: 2
    },
    {
      question: "What does 'Double-Lock' protection mean in this course?",
      options: ["Two Phone Passwords", "SIM PIN + App Biometrics", "Two Bank Accounts", "Physical Safe for Phone"],
      correct: 1
    },
    {
      question: "If you accidentally gave a scammer your OTP, what is the first thing to do?",
      options: ["Change your ATM PIN", "Call Bank to 'Freeze' Account", "Wait for a debit alert", "Pray"],
      correct: 1
    },
    {
      question: "Why do scammers use 'SMS Broadcasters'?",
      options: ["To send messages faster", "To spoof official Bank IDs", "To give free airtime", "To bypass 2FA"],
      correct: 1
    },
    {
      question: "Your 'Bank' sends an email with a link to 'Update your KYC'. The URL is 'secure-zenith-update.top'. Is it safe?",
      options: ["Yes, it says secure", "No, the domain is fake", "Yes, KYC is mandatory", "Only if you use a PC"],
      correct: 1
    },
    {
      question: "What is the 'Golden Rule' of Nigerian Fintech security?",
      options: ["Trust but Verify", "No OTP, No Entry", "Banks never ask for PIN/OTP", "Fast finger wins"],
      correct: 2
    },
    {
      question: "Someone 'mistakenly' sends ₦1M to you and wants it back in a different account. You should:",
      options: ["Send it back immediately", "Spend the commission", "Contact your bank to reverse", "Withdraw the cash"],
      correct: 2
    },
    {
      question: "A 'Customer Care' agent on Twitter (X) asks for your phone number to help with a failed transaction. Risk level?",
      options: ["Low - they need to call", "Zero - it's Twitter", "High - Phishing attempt", "Medium - check their bio"],
      correct: 2
    }
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) setScore(prev => prev + 1);
    
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  // 1. LOADING STATE
  if (isAuthorized === null) return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
        <Activity className="text-blue-500 animate-spin mb-4" size={40} />
        <div className="text-blue-500 font-black text-[10px] uppercase tracking-[0.5em]">Verifying Security Clearances...</div>
    </main>
  );

  // 2. ACCESS DENIED SCREEN
  if (isAuthorized === false) {
    return (
      <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 text-center">
        <div className="max-w-md bg-white p-10 rounded-[3rem] shadow-2xl border-t-8 border-red-500">
          <ShieldAlert size={80} className="mx-auto text-red-500 mb-6" />
          <h1 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tighter">Access Denied</h1>
          <p className="text-slate-500 font-medium mb-8 leading-relaxed">
            You haven't finished all 6 Modules. A <span className="text-red-600 font-bold">Commander</span> must be fully trained before the final exam.
          </p>
          <div className="flex items-center justify-center gap-3 bg-slate-50 py-4 rounded-2xl border border-slate-100">
             <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
             <span className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">Redirecting to Lab...</span>
          </div>
        </div>
      </main>
    );
  }

  // 3. RESULTS SCREEN
  if (showResults) {
    const passed = score >= 12; // 80% to pass (12/15)
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl text-center border-4 border-white relative overflow-hidden">
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Final Report</h2>
          {passed ? <Trophy size={80} className="mx-auto text-yellow-500 mb-6" /> : <ShieldAlert size={80} className="mx-auto text-slate-300 mb-6" />}
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 uppercase mb-4 tracking-tighter">
            {passed ? "Certified Commander" : "Training Failed"}
          </h1>
          <p className="text-slate-500 text-lg mb-8 font-medium">
            Defense Accuracy: <span className="text-slate-900 font-black">{Math.round((score/questions.length)*100)}%</span>
          </p>

          {passed ? (
            <div className="space-y-4">
              <div className="relative">
                <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  type="text" 
                  placeholder="Enter Name for Certificate" 
                  className="w-full pl-14 pr-6 py-5 rounded-2xl border-2 border-slate-100 focus:border-blue-600 outline-none font-bold uppercase"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <Link 
                href={`/learning/completion?name=${encodeURIComponent(userName || "Cyber Commander")}`}
                className="flex items-center justify-center gap-3 w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-xl"
              >
                Claim My Rank & Certificate <Award size={18} />
              </Link>
            </div>
          ) : (
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-3 w-full py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-600 transition-all"
            >
              Restart Simulation <RotateCcw size={18} />
            </button>
          )}
        </div>
      </main>
    );
  }

  // 4. QUIZ SCREEN
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full flex flex-col h-[90vh] max-h-[700px]">
        
        <div className="flex justify-between items-center mb-4 text-white px-2">
          <div className="text-[10px] font-black uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/10 flex items-center gap-2">
            <Fingerprint size={12} className="text-blue-500" />
            Stage {currentQuestion + 1} <span className="text-slate-500">/ {questions.length}</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 flex items-center gap-2">
             <Zap size={12} className="animate-pulse" /> Final Assessment
          </div>
        </div>

        <div className="bg-white rounded-[3rem] p-6 md:p-10 shadow-2xl relative overflow-hidden flex flex-col flex-1 border-b-[8px] border-blue-600/20">
            <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
                 <div 
                    className="h-full bg-blue-600 transition-all duration-500" 
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} 
                 />
            </div>
            
            <div className="flex-1 flex flex-col justify-center mb-6">
                <AlertOctagon size={32} className="text-blue-600 mb-4" />
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-[1.1] tracking-tight">
                    {questions[currentQuestion].question}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        onClick={() => handleAnswer(index)}
                        className="w-full p-4 md:p-5 text-left border-2 border-slate-50 rounded-2xl font-bold text-slate-700 hover:border-blue-600 hover:bg-blue-50 transition-all active:scale-[0.98] flex items-center gap-4 group relative"
                    >
                        <span className="w-8 h-8 shrink-0 rounded-xl bg-slate-100 flex items-center justify-center text-[10px] font-black group-hover:bg-blue-600 group-hover:text-white transition-all">
                            {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-sm md:text-base tracking-tight leading-tight">{option}</span>
                        <ChevronRight size={16} className="absolute right-4 opacity-0 group-hover:opacity-100 text-blue-600 transition-all" />
                    </button>
                ))}
            </div>
        </div>
        
        <footer className="mt-6 text-center opacity-20">
            <p className="text-white text-[9px] font-black uppercase tracking-[0.6em]">Naija Cyber-Hub // Security Assessment</p>
        </footer>
      </div>
    </main>
  );
}