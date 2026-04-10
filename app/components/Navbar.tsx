"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import { 
  Shield, 
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
      home: "Home",
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
      home: "Home",
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
        <span className="text-slate-300 font-bold">{t.ticker[0]}</span>
      </span>
      <span className="w-1 h-1 bg-slate-600 rounded-full" />
      <span className="flex items-center gap-2">
        <span className="text-slate-300 font-bold">{t.ticker[1]}</span>
      </span>
      <span className="w-1 h-1 bg-slate-600 rounded-full" />
      <span className="flex items-center gap-2">
        <span className="text-slate-300 font-bold">{t.ticker[2]}</span>
      </span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      {/* BRANDED TICKER BOX */}
      <div className="bg-slate-900 py-2.5 overflow-hidden border-b border-slate-800 shadow-sm flex relative">
        <div className="absolute left-0 top-0 bottom-0 bg-blue-600 px-4 flex items-center z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)]">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse mr-2" />
          <span className="text-[9px] font-bold uppercase tracking-wider text-white">{t.intel}</span>
        </div>

        <div className="flex whitespace-nowrap animate-marquee-slow pl-[110px]">
          <div className="flex items-center text-[10px] uppercase tracking-wider font-bold">
            {tickerContent}
            {tickerContent}
          </div>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 px-6 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer z-50 transition-transform active:scale-95">
            <div className="relative">
              <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 shadow-md">
                <Shield size={20} strokeWidth={2} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight uppercase text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                CyberGuard <span className="text-blue-600">Lab</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Nigeria Digital Defense</span>
            </div>
          </Link>

          {/* DESKTOP LINK LIST */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex gap-2">
              <Link href="/" className="nav-lab-btn">
                {t.home}
              </Link>
              <Link href="/about" className="nav-lab-btn">
                {t.about}
              </Link>
              <Link href="/mission" className="nav-lab-btn">
                {t.mission}
              </Link>
              <Link href="/contact" className="nav-lab-btn">
                {t.support}
              </Link>
            </div>
            
            <div className="h-6 w-[1px] bg-slate-200 mx-1" />

            <div className="flex items-center gap-2">
              <button 
                onClick={toggleLang} 
                className="nav-lab-btn group cursor-pointer"
              >
                {/* Fixed Hover logic: Added group-hover to prefix */}
                <span className="text-slate-600 transition-colors group-hover:text-blue-600">LANG:</span>
                <span className={`${isPidgin ? "text-green-600" : "text-blue-600"} font-black`}>
                  {isPidgin ? "PDG" : "ENG"}
                </span>
              </button>
              
              <Link href="/learning" className="enter-lab-btn cursor-pointer">
                {t.lab}
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE - Enhanced Visibility when open */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg z-[110] transition-all cursor-pointer ${isMenuOpen ? 'text-white bg-white/20' : 'text-slate-900 bg-slate-100'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY - Added explicit background and padding */}
        <div className={`
          fixed inset-0 bg-slate-950 z-[100] lg:hidden flex flex-col pt-32 px-8 transition-all duration-500 ease-in-out
          ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}
        `}>
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="mobile-lab-btn">
              {t.home}
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="mobile-lab-btn">
              {t.about}
            </Link>
            <Link href="/mission" onClick={() => setIsMenuOpen(false)} className="mobile-lab-btn">
              {t.mission}
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="mobile-lab-btn">
              {t.support}
            </Link>

            <div className="h-[1px] bg-white/10 my-6" />

            <button 
              onClick={() => { toggleLang(); setIsMenuOpen(false); }}
              className="flex items-center justify-between w-full p-6 bg-blue-600 text-white rounded-2xl cursor-pointer shadow-xl active:scale-95 transition-all"
            >
              <div className="flex items-center gap-4 text-lg font-bold">
                Switch to {isPidgin ? "ENG" : "PDG"}
              </div>
              <div className="text-[10px] font-black px-3 py-1 rounded-full bg-black/20 uppercase tracking-widest">
                {isPidgin ? "PDG" : "ENG"}
              </div>
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        /* DESKTOP BUTTONS: Fixed Hover color change */
        .nav-lab-btn {
          @apply flex items-center gap-2 px-5 py-2.5 border border-slate-200 rounded-lg 
                 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 
                 cursor-pointer text-[10px] font-bold uppercase text-slate-700 
                 active:scale-95 hover:shadow-sm;
        }
        
        /* LANGUAGE BUTTON PREFIX: Force blue on hover */
        .nav-lab-btn.group:hover .text-slate-600 {
          @apply text-blue-600;
        }

        .enter-lab-btn {
          @apply bg-slate-900 text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase 
                 hover:bg-blue-600 transition-all duration-200 flex items-center gap-2 
                 shadow-md active:scale-95 cursor-pointer;
        }
        
        /* MOBILE MENU BUTTONS: Forced Visibility (White text) */
        .mobile-lab-btn {
          @apply flex items-center gap-5 p-6 border border-white/20 rounded-2xl text-xl 
                 font-bold uppercase tracking-tight text-white/90 active:text-blue-400 
                 hover:text-blue-400 transition-all cursor-pointer active:scale-95 bg-slate-900/50;
        }
      `}</style>
    </header>
  )
}