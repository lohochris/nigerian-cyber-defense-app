"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ShieldCheck, 
  ArrowRight, 
  User, 
  Lock,
  Fingerprint
} from 'lucide-react'

export default function RegisterCertificate() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return;
    
    // Pass the name to the completion page via URL
    router.push(`/learning/completion?name=${encodeURIComponent(name)}`)
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6 selection:bg-blue-500/30">
      <div className="max-w-md w-full bg-white rounded-[3.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden border-b-[12px] border-blue-600">
        
        {/* DECORATIVE BACKGROUND ELEMENT */}
        <Fingerprint size={200} className="absolute -top-10 -right-10 text-slate-50 rotate-12 pointer-events-none" />

        <div className="text-center mb-10 relative z-10">
          <div className="w-20 h-20 bg-blue-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner rotate-3">
            <ShieldCheck size={40} className="text-blue-600" />
          </div>
          <h2 className="text-[10px] font-black text-blue-600 uppercase tracking-[0.5em] mb-3">Authentication Phase</h2>
          <h1 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-none">Final Step</h1>
          <p className="text-slate-500 font-bold mt-4 text-xs uppercase tracking-tight leading-relaxed">
            Enter your name exactly as it should appear on your official security credential.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="relative group">
            <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-3 ml-1">
              Legal Identity / Full Name
            </label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-600 transition-colors" size={20} />
              <input 
                required
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. MUSA IBRAHIM"
                className="w-full pl-14 pr-6 py-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] focus:border-blue-600 focus:bg-white focus:outline-none font-black text-slate-800 transition-all uppercase placeholder:text-slate-300 placeholder:font-bold"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full py-7 bg-blue-600 text-white rounded-[2rem] font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-blue-600/30 hover:bg-slate-900 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            Generate Credential <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-10 flex items-center justify-center gap-4 opacity-30">
           <Lock size={12} className="text-slate-900" />
           <span className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-900">Encrypted Processing Active</span>
        </div>
      </div>

      {/* FOOTER WATERMARK */}
      <div className="absolute bottom-8 text-center w-full opacity-20">
         <p className="text-white text-[9px] font-black uppercase tracking-[0.8em]">Naija Cyber-Hub // Perception Protocol 2026</p>
      </div>
    </main>
  )
}