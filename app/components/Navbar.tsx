"use client"
import React from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { 
  ShieldAlert, 
  Target, 
  Headset, 
  Terminal, 
  Shield, 
  Languages,
  Zap,
  Radio,
  Dot,
  Info 
} from 'lucide-react'

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const isPidgin = lang === 'pidgin';

  const translations = {
    en: {
      intel: "Security Intel",
      about: "About",
      mission: "Mission",
      support: "Support",
      lab: "Enter Lab",
      ticker: [
        "ALERT: New 'Bank Upgrade' SMS scams targeting OPay/PalmPay users. Do not click links!",
        "Your OTP is secret — Never share it with anyone calling from \"Support\"",
        "Stay Guarded: Report suspicious account activity to your bank immediately."
      ]
    },
    pidgin: {
      intel: "Beta Info",
      about: "About Us",
      mission: "Target", 
      support: "Help Desk",
      lab: "Enter Lab",
      ticker: [
        "WAKE UP: New format don cast! If dem send you SMS say make you 'Upgrade' OPay/PalmPay, no touch the link!",
        "Your OTP na your life — No give anybody wey call you say dem be \"Support\"",
        "Shine Your Eye: If you see any movement for your account wey you no understand, tell your bank sharp-sharp."
      ]
    }
  };

  const t = isPidgin ? translations.pidgin : translations.en;

  const tickerContent = (
    <div className="flex items-center gap-12 pr-12">
      <span className="flex items-center gap-2">
        <ShieldAlert size={14} strokeWidth={3} className="text-blue-400" />
        <span className="text-slate-300">{t.ticker[0]}</span>
      </span>
      <Dot className="text-slate-600" />
      <span className="flex items-center gap-2">
        <Zap size={14} fill="currentColor" className="text-blue-500" />
        <span className="text-slate-300">{t.ticker[1]}</span>
      </span>
      <Dot className="text-slate-600" />
      <span className="flex items-center gap-2">
        <Shield size={14} strokeWidth={3} className="text-blue-400" />
        <span className="text-slate-300">{t.ticker[2]}</span>
      </span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] font-sans">
      {/* BRANDED TICKER BOX */}
      <div className="bg-slate-900 py-2.5 overflow-hidden border-b border-slate-800 shadow-sm flex relative">
        <div className="absolute left-0 top-0 bottom-0 bg-blue-600 px-4 flex items-center z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)]">
          <Radio size={12} className="text-white animate-pulse mr-2" />
          <span className="text-[9px] font-black uppercase tracking-tighter text-white">{t.intel}</span>
        </div>

        <div className="flex whitespace-nowrap animate-marquee-slow pl-[110px]">
          <div className="flex items-center text-[10px] font-black uppercase tracking-[0.2em]">
            {tickerContent}
            {tickerContent}
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
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

          {/* LINK LIST */}
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="hidden md:flex gap-8">
              <Link 
                href="/about" 
                className="text-[10px] font-black uppercase text-slate-500 hover:text-blue-600 transition-all flex items-center gap-2 tracking-[0.15em] relative group cursor-pointer"
              >
                <Info size={14} /> {t.about}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/mission" 
                className="text-[10px] font-black uppercase text-slate-500 hover:text-blue-600 transition-all flex items-center gap-2 tracking-[0.15em] relative group cursor-pointer"
              >
                <Target size={14} /> {t.mission}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
              </Link>

              <Link 
                href="/contact" 
                className="text-[10px] font-black uppercase text-slate-500 hover:text-blue-600 transition-all flex items-center gap-2 tracking-[0.15em] relative group cursor-pointer"
              >
                <Headset size={14} /> {t.support}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full" />
              </Link>
            </div>
            
            <div className="h-6 w-[1px] bg-slate-100 hidden md:block" />

            {/* ACTION SECTION */}
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleLang}
                className="hidden sm:flex text-[9px] font-black uppercase px-4 py-2 border-2 border-slate-100 rounded-xl hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all items-center gap-2 font-mono group active:scale-95 cursor-pointer"
              >
                <Languages size={14} strokeWidth={3} className={isPidgin ? "text-green-500" : "text-blue-600"} />
                <span>Pidgin:</span>
                <span className={isPidgin ? "text-green-500" : "text-slate-400 group-hover:text-blue-400"}>
                  {isPidgin ? "ON" : "OFF"}
                </span>
              </button>
              
              <Link 
                href="/learning" 
                className="bg-slate-900 text-white px-7 py-3 rounded-xl text-[10px] font-black uppercase hover:bg-blue-600 transition-all flex items-center gap-2 shadow-xl shadow-slate-200 active:scale-95 cursor-pointer"
              >
                <Terminal size={14} strokeWidth={2.5} />
                {t.lab}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}