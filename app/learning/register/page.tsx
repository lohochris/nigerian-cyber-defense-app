"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function RegisterCertificate() {
  const [name, setName] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return alert("Please enter your name")
    
    // Pass the name to the completion page via URL
    router.push(`/learning/completion?name=${encodeURIComponent(name)}`)
  }

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-2xl border-4 border-blue-600">
        <div className="text-center mb-8">
          <span className="text-4xl">✍️</span>
          <h1 className="text-3xl font-black text-slate-900 mt-4 uppercase tracking-tight">Final Step</h1>
          <p className="text-slate-500 font-medium mt-2">Enter your name exactly as you want it to appear on your official certificate.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 ml-2">
              Full Name / Your Name
            </label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Musa Ibrahim"
              className="w-full p-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-blue-600 focus:outline-none font-bold text-slate-800 transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs shadow-xl hover:bg-blue-700 active:scale-95 transition-all"
          >
            Generate My Certificate →
          </button>
        </form>
      </div>
    </main>
  )
}