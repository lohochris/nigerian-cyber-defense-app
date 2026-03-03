"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, 
  MoreVertical, 
  Phone, 
  Video, 
  AlertTriangle, 
  ShieldAlert, 
  Search, 
  CheckCheck,
  Zap,
  PhoneCall
} from 'lucide-react'

export default function WhatsAppStory() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chatMessages = [
    { sender: "Scammer", text: "Good morning Ma. This is your first son, I lost my phone and this is my new number.", time: "08:15 AM", isScam: true, flag: "New Number Trick" },
    { sender: "You", text: "Ah! Junior, is that you? What happened to the old one?", time: "08:17 AM", isScam: false },
    { sender: "Scammer", text: "It fell in water Ma. Please, I need to pay for a delivery urgently, can you send 50k to this account? I will pay back today.", time: "08:18 AM", isScam: true, flag: "Artificial Urgency" },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#E5DDD5] pb-32">
      {/* WHATSAPP TOP BAR */}
      <div className="bg-[#075E54] text-white p-4 sticky top-0 z-30 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <Link href="/learning" className="hover:bg-black/10 p-1 rounded-full transition-colors">
            <ArrowLeft size={24} />
          </Link>
          <div className="w-10 h-10 bg-slate-400 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner">
            J
          </div>
          <div className="leading-tight">
            <h1 className="font-bold text-base">Junior (My Son)</h1>
            <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Online</p>
          </div>
        </div>
        <div className="flex gap-5 opacity-90">
          <Video size={20} />
          <Phone size={20} />
          <MoreVertical size={20} />
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-6">
        {/* ENCRYPTION NOTICE */}
        <div className="bg-[#FFF3C7] p-3 rounded-xl text-[10px] text-slate-600 text-center shadow-sm border border-yellow-200/50 font-medium">
          <Lock size={10} className="inline mr-1 mb-0.5" /> Messages to this chat are now secured with end-to-end encryption. WhatsApp cannot read them.
        </div>

        {/* CHAT BUBBLES */}
        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`flex flex-col ${msg.isScam ? 'items-start' : 'items-end'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-md relative group transition-all ${
              msg.isScam 
                ? 'bg-white rounded-tl-none border-l-4 border-red-500' 
                : 'bg-[#DCF8C6] rounded-tr-none'
            }`}>
              <p className="text-sm md:text-base text-slate-800 font-medium leading-relaxed">
                {msg.text}
              </p>
              
              <div className="flex items-center justify-end gap-1 mt-1">
                <p className="text-[9px] text-slate-400 uppercase font-bold">{msg.time}</p>
                {!msg.isScam && <CheckCheck size={12} className="text-blue-500" />}
              </div>

              {/* SCAM ANALYSIS TAG */}
              {msg.isScam && (
                <div className="absolute -top-3 -right-3 bg-red-600 text-white text-[8px] font-black px-2 py-1 rounded-md uppercase tracking-tighter shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                  🚩 {msg.flag}
                </div>
              )}
            </div>
          </div>
        ))}

        {/* THREAT ANALYSIS CARD */}
        <div className="mt-12 bg-white rounded-[2.5rem] shadow-2xl border-b-[8px] border-blue-600 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-700">
          <div className="bg-blue-600 p-4 flex items-center gap-3">
            <Search className="text-white" size={20} />
            <h2 className="text-white font-black uppercase text-xs tracking-widest">Forensic Analysis</h2>
          </div>
          
          <div className="p-8">
            <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter italic">Hold On! / Wait First!</h3>
            <p className="text-slate-500 font-bold mb-6 text-sm">Why is this message a "Format"?</p>
            
            <div className="space-y-4">
              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-red-100 text-red-600 p-2 rounded-lg h-fit"><Zap size={18} /></div>
                <div>
                  <strong className="text-slate-900 block text-xs uppercase mb-1">Sense of Urgency</strong>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">Scammers use words like "urgently" so your brain doesn't have time to think logically.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="bg-blue-100 text-blue-600 p-2 rounded-lg h-fit"><AlertTriangle size={18} /></div>
                <div>
                  <strong className="text-slate-900 block text-xs uppercase mb-1">The Identity Reset</strong>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">Claiming a "New Number" or "Phone broke" is the #1 way scammers bypass your suspicion.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="bg-blue-600 text-white p-2 rounded-lg h-fit"><PhoneCall size={18} /></div>
                <div>
                  <strong className="text-blue-900 block text-xs uppercase mb-1 text-blue-600">The Golden Counter-Move</strong>
                  <p className="text-xs text-blue-800 leading-relaxed font-bold italic">Always call the original saved number of your loved one before sending 1 Kobo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIXED ACTION BAR */}
      <div className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md p-5 flex gap-4 border-t border-slate-200 z-40">
        <Link 
          href="/learning" 
          className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black uppercase text-[10px] tracking-widest text-center hover:bg-slate-200 transition-all active:scale-95"
        >
          Try Another
        </Link>
        <Link 
          href="/audit" 
          className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest text-center shadow-lg shadow-blue-500/30 hover:bg-slate-900 transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          <ShieldAlert size={14} /> Safety Audit
        </Link>
      </div>
    </main>
  )
}

function Lock({ size, className }: { size: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  )
}