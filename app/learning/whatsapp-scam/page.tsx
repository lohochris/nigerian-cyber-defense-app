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
  PhoneCall,
  Lock,
  ShieldCheck,
  Flag
} from 'lucide-react'

export default function WhatsAppStory() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const chatMessages = [
    { 
      sender: "Scammer", 
      text: "Good morning Ma. This is your first son, I lost my phone and this is my new number.", 
      time: "08:15 AM", 
      isScam: true, 
      flag: "Identity Reset" 
    },
    { 
      sender: "You", 
      text: "Ah! Junior, is that you? What happened to the old one?", 
      time: "08:17 AM", 
      isScam: false 
    },
    { 
      sender: "Scammer", 
      text: "It fell in water Ma. Please, I need to pay for a delivery urgently, can you send 50k to this account? I will pay back today.", 
      time: "08:18 AM", 
      isScam: true, 
      flag: "Artificial Urgency" 
    },
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#E5DDD5] pb-40 selection:bg-teal-100">
      {/* COMMAND HEADER / WHATSAPP TOP BAR */}
      <div className="bg-[#075E54] text-white p-5 sticky top-0 z-30 flex items-center justify-between shadow-2xl border-b-4 border-[#128C7E]">
        <div className="flex items-center gap-4">
          <Link href="/learning" className="hover:bg-black/20 p-2 rounded-xl transition-all active:scale-90">
            <ArrowLeft size={24} strokeWidth={3} />
          </Link>
          <div className="relative">
            <div className="w-12 h-12 bg-slate-800 rounded-[1rem] flex items-center justify-center text-white font-black text-xl shadow-lg border-2 border-white/20">
              J
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-[#075E54] rounded-full" />
          </div>
          <div className="leading-tight">
            <h1 className="font-black text-sm uppercase tracking-tighter">Junior (Target Identity)</h1>
            <p className="text-[9px] opacity-70 uppercase tracking-[0.2em] font-black">Active Monitoring</p>
          </div>
        </div>
        <div className="flex gap-6 opacity-80">
          <Video size={20} className="cursor-not-allowed" />
          <Phone size={20} className="cursor-not-allowed" />
          <MoreVertical size={20} />
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-8 mt-4">
        {/* ENCRYPTION PROTOCOL NOTICE */}
        <div className="bg-[#FFF3C7] p-4 rounded-[1.5rem] text-[9px] text-slate-700 text-center shadow-md border border-yellow-300/30 font-black uppercase tracking-widest flex items-center justify-center gap-2 mx-4">
          <Lock size={12} strokeWidth={3} /> Perception Protocol: End-to-End Encryption Verified
        </div>

        {/* CHAT BUBBLES */}
        <div className="space-y-4">
          {chatMessages.map((msg, idx) => (
            <div key={idx} className={`flex flex-col ${msg.isScam ? 'items-start' : 'items-end'}`}>
              <div className={`max-w-[85%] p-5 rounded-[2rem] shadow-xl relative group transition-all duration-500 ${
                msg.isScam 
                  ? 'bg-white rounded-tl-none border-l-[6px] border-red-500' 
                  : 'bg-[#DCF8C6] rounded-tr-none border-r-[6px] border-green-500'
              }`}>
                <p className="text-sm md:text-base text-slate-900 font-bold leading-relaxed">
                  {msg.text}
                </p>
                
                <div className="flex items-center justify-end gap-2 mt-3">
                  <p className="text-[9px] text-slate-400 uppercase font-black tracking-tighter">{msg.time}</p>
                  {!msg.isScam && <CheckCheck size={14} className="text-blue-500" strokeWidth={3} />}
                </div>

                {/* SCAM ANALYSIS TAG */}
                {msg.isScam && (
                  <div className="absolute -top-4 -right-2 bg-red-600 text-white text-[9px] font-black px-3 py-1.5 rounded-xl uppercase tracking-[0.1em] shadow-2xl flex items-center gap-2 -rotate-2 group-hover:rotate-0 transition-transform">
                    <Flag size={10} fill="currentColor" /> {msg.flag}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* FORENSIC ANALYSIS CARD */}
        <div className="mt-16 bg-white rounded-[3.5rem] shadow-2xl border-b-[12px] border-blue-600 overflow-hidden relative">
          <div className="bg-slate-950 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Search className="text-blue-500" size={20} strokeWidth={3} />
              <h2 className="text-white font-black uppercase text-[10px] tracking-[0.4em]">Forensic Report</h2>
            </div>
            <ShieldCheck size={20} className="text-blue-500 opacity-50" />
          </div>
          
          <div className="p-10">
            <h3 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter leading-none">Hold On! <br/><span className="text-blue-600">Wait First!</span></h3>
            <p className="text-slate-400 font-black mb-10 text-[10px] uppercase tracking-[0.2em]">Threat Signature Detected</p>
            
            <div className="space-y-6">
              <div className="flex gap-5 p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 group hover:border-red-200 transition-all">
                <div className="bg-red-50 text-red-600 p-3 rounded-2xl h-fit shadow-sm"><Zap size={20} /></div>
                <div>
                  <strong className="text-slate-900 block text-[10px] font-black uppercase tracking-widest mb-2">Artificial Urgency</strong>
                  <p className="text-sm text-slate-500 leading-relaxed font-bold">Scammers use words like "urgently" to paralyze your logical thinking and force a mistake.</p>
                </div>
              </div>

              <div className="flex gap-5 p-6 bg-slate-50 rounded-[2rem] border-2 border-slate-100 group hover:border-blue-200 transition-all">
                <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl h-fit shadow-sm"><AlertTriangle size={20} /></div>
                <div>
                  <strong className="text-slate-900 block text-[10px] font-black uppercase tracking-widest mb-2">The Identity Reset</strong>
                  <p className="text-sm text-slate-500 leading-relaxed font-bold">Claiming a "New Number" or "Device Failure" is the #1 psychological exploit to bypass trust.</p>
                </div>
              </div>

              <div className="flex gap-5 p-8 bg-blue-600 rounded-[2.5rem] shadow-xl shadow-blue-600/20 items-center">
                <div className="bg-white text-blue-600 p-4 rounded-2xl shadow-lg"><PhoneCall size={24} strokeWidth={3} /></div>
                <div>
                  <strong className="text-white block text-[10px] font-black uppercase tracking-[0.3em] mb-2">The Counter-Move</strong>
                  <p className="text-blue-50 leading-tight font-black uppercase text-xs tracking-tight">
                    Always call the original saved number of your loved one before sending 1 Kobo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TACTICAL ACTION BAR */}
      <div className="fixed bottom-0 w-full bg-white/80 backdrop-blur-2xl p-6 flex gap-4 border-t-2 border-slate-100 z-40">
        <Link 
          href="/learning" 
          className="flex-1 py-6 bg-slate-100 text-slate-500 rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] text-center hover:bg-slate-200 transition-all active:scale-95 border-b-4 border-slate-200"
        >
          Reset Simulation
        </Link>
        <Link 
          href="/audit" 
          className="flex-1 py-6 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-[10px] tracking-[0.3em] text-center shadow-2xl shadow-blue-600/30 hover:bg-slate-950 transition-all active:scale-95 flex items-center justify-center gap-3 border-b-4 border-blue-800"
        >
          <ShieldAlert size={16} /> Final Audit
        </Link>
      </div>
    </main>
  )
}