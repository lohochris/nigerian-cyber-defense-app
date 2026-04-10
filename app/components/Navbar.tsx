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

      {/* NAVIGATION BAR - Increased Max Width and Spacing */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-100 py-4 px-8 relative">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-4 group cursor-pointer z-50 transition-transform active:scale-95">
            <div className="relative">
              <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 shadow-lg">
                <Shield size={22} strokeWidth={2} />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter uppercase text-slate-900 leading-none group-hover:text-blue-600 transition-colors">
                CyberGuard <span className="text-blue-600">Lab</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1.5">Nigeria Digital Defense</span>
            </div>
          </Link>

          {/* DESKTOP LINK LIST - Spacing updated to match sample image */}
          <div className="hidden lg:flex items-center gap-12">
            <div className="flex items-center gap-8">
              <Link href="/" className="nav-lab-link">{t.home}</Link>
              <Link href="/about" className="nav-lab-link">{t.about}</Link>
              <Link href="/mission" className="nav-lab-link">{t.mission}</Link>
              <Link href="/contact" className="nav-lab-link">{t.support}</Link>
            </div>
            
            <div className="h-8 w-[1px] bg-slate-200" />

            <div className="flex items-center gap-6">
              <button 
                onClick={toggleLang} 
                className="group cursor-pointer flex items-center gap-2 text-[11px] font-black uppercase tracking-widest"
              >
                <span className="text-slate-400 transition-colors group-hover:text-blue-600">LANG:</span>
                <span className={`${isPidgin ? "text-green-600" : "text-blue-600"}`}>
                  {isPidgin ? "ENG" : "ENG"}
                </span>
              </button>
              
              <Link href="/learning" className="enter-lab-btn">
                {t.lab}
              </Link>
            </div>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-3 rounded-xl z-[110] transition-all cursor-pointer ${isMenuOpen ? 'text-white bg-white/20' : 'text-slate-900 bg-slate-100'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
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
        /* Minimalist text links like the 'Programs' sample */
        .nav-lab-link {
          @apply text-slate-600 text-[13px] font-bold tracking-tight hover:text-blue-600 
                 transition-all relative py-2 px-1 cursor-pointer;
        }
        
        /* Active indicator line on hover */
        .nav-lab-link::after {
          content: '';
          @apply absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300;
        }
        
        .nav-lab-link:hover::after {
          @apply w-full;
        }

        .enter-lab-btn {
          @apply bg-slate-900 text-white px-8 py-3 rounded-xl text-[11px] font-black uppercase tracking-widest
                 hover:bg-blue-600 transition-all duration-300 flex items-center gap-2 
                 shadow-lg shadow-slate-200 active:scale-95 cursor-pointer hover:-translate-y-0.5;
        }
        
        .mobile-lab-btn {
          @apply flex items-center gap-5 p-6 border border-white/20 rounded-2xl text-xl 
                 font-bold uppercase tracking-tight text-white transition-all cursor-pointer 
                 active:scale-95 bg-white/5 active:bg-blue-600/20 active:text-blue-400;
        }
      `}</style>
    </header>
  )
}