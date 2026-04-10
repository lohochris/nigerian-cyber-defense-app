"use client"
import React, { useState } from 'react'
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
  Info,
  Menu,
  X 
} from 'lucide-react'

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* BRANDED TICKER BOX */}
      <div className="bg-slate-900 py-2.5 overflow-hidden border-b border-slate-800 shadow-sm flex relative">
        <div className="absolute left-0 top-0 bottom-0 bg-blue-600 px-4 flex items-center z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)]">
          <Radio size={12} className="text-white animate-pulse mr-2" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-white">{t.intel}</span>
        </div>

        <div className="flex whitespace-nowrap animate-marquee-slow pl-[110px]">
          <div className="flex items-center text-[10px] font-medium uppercase tracking-wider">
            {tickerContent}
            {tickerContent}
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 px-6 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer z-50">
            <div className="relative">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 shadow-md">
                <Shield size={20} strokeWidth={2} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight uppercase text-slate-900 leading-none">
                CyberGuard <span className="text-blue-600">Lab</span>
              </span>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest mt-1">Nigeria Digital Defense</span>
            </div>
          </Link>

          {/* DESKTOP LINK LIST */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex gap-8">
              <Link href="/about" className="nav-link"><Info size={14} /> {t.about}</Link>
              <Link href="/mission" className="nav-link"><Target size={14} /> {t.mission}</Link>
              <Link href="/contact" className="nav-link"><Headset size={14} /> {t.support}</Link>
            </div>
            
            <div className="h-6 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-4">
              {/* PIDGIN TOGGLE - FIXED POINTER */}
              <button 
                onClick={toggleLang} 
                className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:border-slate-900 hover:bg-slate-50 transition-all cursor-pointer group"
              >
                <Languages size={15} className={`${isPidgin ? "text-green-500" : "text-blue-600"}`} />
                <span className="text-[10px] font-bold uppercase text-slate-600">Pidgin Mode:</span>
                <span className={`text-[10px] font-bold ${isPidgin ? "text-green-600" : "text-slate-300"}`}>
                  {isPidgin ? "ON" : "OFF"}
                </span>
              </button>
              
              <Link href="/learning" className="enter-lab-btn">
                <Terminal size={15} /> {t.lab}
              </Link>
            </div>
          </div>

          {/* MOBILE CONTROLS */}
          <div className="flex lg:hidden items-center gap-4">
            <Link 
              href="/learning" 
              className="bg-slate-900 text-white p-2.5 rounded-lg shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <Terminal size={18} />
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 p-1 z-50 cursor-pointer"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div className={`
          fixed inset-0 bg-white z-40 lg:hidden flex flex-col pt-32 px-8 transition-all duration-500
          ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
        `}>
          <div className="flex flex-col gap-6">
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
               {t.about}
            </Link>
            <Link href="/mission" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
               {t.mission}
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mobile-nav-link">
               {t.support}
            </Link>

            <div className="h-[1px] bg-slate-100 my-4" />

            <button 
              onClick={() => { toggleLang(); setIsMenuOpen(false); }}
              className="flex items-center justify-between w-full p-5 bg-slate-50 rounded-2xl cursor-pointer"
            >
              <div className="flex items-center gap-3 text-sm font-bold text-slate-600">
                <Languages size={20} className={isPidgin ? "text-green-500" : "text-blue-600"} />
                Switch to Pidgin
              </div>
              <div className={`text-[10px] font-bold px-3 py-1 rounded-full ${isPidgin ? "bg-green-100 text-green-700" : "bg-slate-200 text-slate-500"}`}>
                {isPidgin ? "ACTIVE" : "OFF"}
              </div>
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .nav-link {
          @apply text-[11px] font-bold uppercase text-slate-500 hover:text-slate-900 transition-all flex items-center gap-2 tracking-wide cursor-pointer;
        }
        .enter-lab-btn {
          @apply bg-slate-900 text-white px-6 py-2.5 rounded-lg text-[11px] font-bold uppercase hover:bg-blue-600 transition-all flex items-center gap-2 shadow-sm active:scale-95 cursor-pointer;
        }
        .mobile-nav-link {
          @apply text-2xl font-bold uppercase tracking-tight text-slate-900 border-b border-slate-50 pb-4 cursor-pointer;
        }
      `}</style>
    </header>
  )
}