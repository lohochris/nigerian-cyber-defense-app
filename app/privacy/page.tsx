"use client"
import React from 'react'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Fingerprint, 
  Database, 
  HardDrive, 
  ShieldCheck, 
  UserCheck, 
  Trash2,
  Lock
} from 'lucide-react'

export default function PrivacyPage() {
  const protocols = [
    {
      title: "Data We Collect",
      icon: <Database size={20} className="text-blue-600" />,
      content: "We follow the principle of data minimization. We only handle learning progress (stored locally), voluntary contact info, and certificate names which are processed in real-time and not stored centrally.",
      list: ["Learning Progress", "Contact Emails", "Certificate Data"]
    },
    {
      title: "How We Use Data",
      icon: <UserCheck size={20} className="text-green-600" />,
      content: "Your information is used strictly to provide the educational experience. We do not sell, trade, or leak your personal data. We are defenders, not data-miners.",
      list: ["Module Tracking", "User Support", "Certificate Generation"]
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] py-12 px-6 selection:bg-blue-100 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-[3.5rem] p-8 md:p-20 shadow-[0_2px_40px_rgba(0,0,0,0.03)] border border-slate-100 relative overflow-hidden">
        
        {/* Decorative Watermark */}
        <Fingerprint className="absolute -top-12 -right-12 text-slate-50 size-72 pointer-events-none" />

        <Link href="/" className="group inline-flex items-center gap-2 text-blue-600 font-black mb-16 uppercase text-[10px] tracking-[0.2em] transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Base
        </Link>

        <header className="mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Lock size={16} className="text-blue-600" />
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Confidentiality Agreement</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Privacy <br /> <span className="text-blue-600">Protocol</span>
          </h1>
          <p className="mt-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
            Last Updated: March 2026 • NDPR Compliant
          </p>
        </header>

        <div className="space-y-16 relative z-10">
          
          {/* CORE PROTOCOLS */}
          <div className="grid md:grid-cols-2 gap-12">
            {protocols.map((p, i) => (
              <section key={i}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-slate-50 rounded-xl">{p.icon}</div>
                  <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest">{p.title}</h2>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                  {p.content}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.list.map((item, idx) => (
                    <span key={idx} className="text-[9px] font-black uppercase tracking-tighter bg-slate-100 text-slate-500 px-3 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* LOCAL STORAGE HIGHLIGHT */}
          <section className="bg-blue-600 text-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-blue-200 relative overflow-hidden group">
            <HardDrive className="absolute -right-4 -bottom-4 text-white/10 size-40 rotate-12 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-2xl">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-lg font-black uppercase italic tracking-tight">Zero-Server Storage</h2>
              </div>
              <p className="text-blue-50 text-sm leading-relaxed font-medium max-w-xl">
                We use <strong>Local Storage</strong> to remember your progress. This data never leaves your device. When you clear your browser cache or click &quot;End Session,&quot; your digital footprint on Project Guard is permanently erased.
              </p>
            </div>
          </section>

          {/* NDPR RIGHTS */}
          <section className="border-l-4 border-slate-900 pl-8 py-2">
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Nigeria Data Protection Regulation (NDPR)</h2>
            <p className="text-slate-500 text-sm leading-relaxed font-medium">
              In accordance with the <strong>NDPR</strong>, you have the right to access, delete, or restrict the use of your data. Since we store almost nothing centrally, you can exercise these rights instantly by clearing your browser cache or utilizing our built-in session wipe tool.
            </p>
          </section>

          {/* ACTION FOOTER */}
          <footer className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-50 text-red-600 rounded-2xl">
                <Trash2 size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Instant Wipe</p>
                <button 
                  onClick={() => {
                    localStorage.clear();
                    alert("All local session data has been purged.");
                  }}
                  className="text-[11px] font-bold text-red-600 underline hover:text-red-700 transition-colors"
                >
                  Clear my local session data now
                </button>
              </div>
            </div>
            
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">
              Integrity • Privacy • Protection
            </p>
          </footer>

        </div>
      </div>
    </main>
  )
}