"use client"
import React from 'react'
import Link from 'next/link'
import { 
  ShieldAlert, 
  Target, 
  Headset, 
  Terminal, 
  Shield, 
  Languages,
  Zap,
  Radio,
  Dot
} from 'lucide-react'

export default function Navbar() {
  const tickerContent = (
    <div className="flex items-center gap-12 pr-12">
      <span className="flex items-center gap-2">
        <ShieldAlert size={14} strokeWidth={3} className="text-red-700" />
        <span className="text-amber-950">ALERT: New &apos;Bank Upgrade&apos; SMS scams targeting OPay/PalmPay users. Do not click links!</span>
      </span>
      <Dot className="text-amber-700" />
      <span className="flex items-center gap-2">
        <Zap size={14} fill="currentColor" className="text-amber-900" />
        <span className="text-amber-950">Your OTP is secret — Never share it with anyone calling from &quot;Support&quot;</span>
      </span>
      <Dot className="text-amber-700" />
      <span className="flex items-center gap-2">
        <Shield size={14} strokeWidth={3} className="text-amber-900" />
        <span className="text-amber-950">Stay Guarded: Report suspicious account activity to your bank immediately.</span>
      </span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] font-sans">
      {/* SEAMLESS SLOW TICKER */}
      <div className="bg-amber-400 py-2.5 overflow-hidden border-b border-amber-500 shadow-sm flex relative">
        {/* Fixed Label */}
        <div className="absolute left-0 top-0 bottom-0 bg-amber-500 px-4 flex items-center z-20 shadow-[5px_0_15px_rgba(0,0,0,0.1)]">
          <Radio size={12} className="text-amber-950 animate-pulse mr-2" />
          <span className="text-[9px] font-black uppercase tracking-tighter text-amber-950">Security Intel</span>
        </div>

        <div className="flex whitespace-nowrap animate-marquee-slow pl-[110px]">
          {/* Double the content for a seamless infinite loop */}
          <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em]">
            {tickerContent}
            {tickerContent}
          </div>
        </div>
      </div>

      {/* MAIN NAVIGATION */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* BRAND */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white transition-all duration-500 group-hover:bg-blue-600 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] shadow-lg">
                <Shield size={20} strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase italic leading-none">
                Project<span className="text-blue-600">Guard</span>
              </span>
              <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest mt-1">Nigeria Digital Defense</span>
            </div>
          </Link>

          {/* NAV LINKS */}
          <div className="flex items-center gap-4 lg:gap-10">
            <div className="hidden md:flex gap-10">
              {[
                { name: "The Mission", href: "/about", icon: <Target size={14} /> },
                { name: "Support", href: "/contact", icon: <Headset size={14} /> },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="text-[10px] font-black uppercase text-slate-500 hover:text-blue-600 transition-all flex items-center gap-2 tracking-[0.15em] relative group"
                >
                  {link.icon}
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <div className="h-6 w-[1px] bg-slate-100 hidden md:block" />

            {/* CTA SECTION */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:flex text-[9px] font-black uppercase px-4 py-2 border-2 border-slate-100 rounded-xl hover:bg-slate-50 transition-all items-center gap-2 font-mono">
                <Languages size={14} strokeWidth={3} className="text-blue-600" />
                Pidgin: <span className="text-green-600">ON</span>
              </button>
              
              <Link 
                href="/learning" 
                className="bg-slate-900 text-white px-7 py-3 rounded-xl text-[10px] font-black uppercase hover:bg-blue-600 transition-all flex items-center gap-2 shadow-xl shadow-slate-200 active:scale-95"
              >
                <Terminal size={14} strokeWidth={2.5} />
                Enter Lab
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}