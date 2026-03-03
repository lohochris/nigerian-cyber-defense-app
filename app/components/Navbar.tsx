"use client"
import React from 'react'
import Link from 'next/link'
import { 
  ShieldAlert, 
  Target, 
  Headset, 
  Terminal, 
  Shield, 
  Languages 
} from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* Sleek Ticker Component */}
      <div className="bg-amber-400 py-1.5 overflow-hidden whitespace-nowrap border-b border-amber-500">
        <div className="inline-block animate-marquee hover:pause px-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-950 flex items-center gap-2">
            <ShieldAlert size={12} strokeWidth={3} />
            ALERT: New 'Bank Upgrade' SMS scams targeting OPay/PalmPay users. Do not click links! | Your OTP is secret — Never share it! | 🛡️ Stay Guarded.
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <Shield size={18} strokeWidth={3} fill="currentColor" />
            </div>
            <span className="text-lg font-black tracking-tighter uppercase">
              Project<span className="text-blue-600">Guard</span>
            </span>
          </Link>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6">
              <Link href="/about" className="text-[10px] font-black uppercase text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                <Target size={14} strokeWidth={2.5} />
                Mission
              </Link>
              <Link href="/contact" className="text-[10px] font-black uppercase text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                <Headset size={14} strokeWidth={2.5} />
                Contact
              </Link>
            </div>
            
            <div className="h-4 w-[1px] bg-slate-200 hidden md:block" />

            <button className="text-[9px] font-black uppercase px-3 py-1.5 border-2 border-slate-900 rounded-lg hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2">
              <Languages size={12} strokeWidth={3} />
              Pidgin Mode
            </button>
            
            <Link href="/learning" className="bg-slate-900 text-white px-5 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-blue-600 transition-all flex items-center gap-2 shadow-lg shadow-slate-200">
              <Terminal size={14} strokeWidth={2.5} />
              Enter Lab
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}