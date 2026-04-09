"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  ShieldCheck, 
  Activity, 
  BookOpen, 
  AlertTriangle, 
  ArrowRight, 
  ChevronRight,
  Fingerprint,
  Zap,
  LucideIcon
} from 'lucide-react'

/**
 * TYPESCRIPT INTERFACES
 * Defines explicit types to prevent "implicit any" errors.
 */
interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText: string;
  colorClass: string;
  onClick: () => void;
}

/**
 * FEATURE CARD COMPONENT
 * Handles hover animations and consistent button styling for the grid.
 */
const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  actionText, 
  colorClass, 
  onClick 
}: FeatureCardProps) => (
  <button 
    onClick={onClick}
    className={`group p-8 rounded-[3rem] bg-slate-50 border-2 border-transparent text-left
               hover:bg-white transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl 
               hover:-translate-y-2 active:scale-[0.98] flex flex-col items-start w-full ${colorClass}`}
  >
    <div className={`w-16 h-16 rounded-3xl flex items-center justify-center mb-10 
                    group-hover:scale-110 transition-transform duration-500 shadow-sm
                    ${colorClass.includes('blue') ? 'bg-blue-100 text-blue-600' : 
                      colorClass.includes('yellow') ? 'bg-yellow-100 text-yellow-700' : 
                      colorClass.includes('red') ? 'bg-red-100 text-red-600' : 'bg-slate-200 text-slate-900'}`}>
      <Icon size={32} strokeWidth={2.5} />
    </div>
    <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter text-slate-900">{title}</h3>
    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-10 flex-grow">{description}</p>
    <div className="flex items-center gap-2 font-black text-[10px] uppercase tracking-[0.2em] transition-colors">
      {actionText} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
    </div>
  </button>
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col items-center selection:bg-blue-100">
      
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center py-24 md:py-36 px-6 text-center 
                        bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white overflow-hidden">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-blue-600/5 border border-blue-600/10 backdrop-blur-sm">
          <Fingerprint size={14} className="text-blue-700 animate-pulse" />
          <p className="text-[10px] md:text-xs font-black text-blue-700 uppercase tracking-[0.3em]">
            Human-Centred Security • Project Guard
          </p>
        </div>
        
        <h1 className="text-6xl md:text-9xl font-black mb-8 max-w-6xl tracking-tighter leading-[0.85] uppercase text-slate-900 drop-shadow-sm">
          Shield Your <br className="hidden md:block" /> 
          <span className="text-blue-600">Digital Life.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mb-14 font-medium leading-relaxed">
          Master the tactics used by modern scammers. From SIM-swaps to AI voice clones, learn to spot the threat before it strikes.
        </p>

        {/* Updated Button Container: Flex-row ensures they stay side-by-side */}
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
          <button 
            onClick={() => router.push('/learning')}
            className="group bg-blue-600 text-white px-6 md:px-12 py-5 md:py-6 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-sm 
                       hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 active:scale-95 
                       flex items-center justify-center gap-3 cursor-pointer whitespace-nowrap"
          >
            Start Training <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform hidden md:block" />
          </button>
          <button 
            onClick={() => router.push('/report')}
            className="bg-white text-slate-900 border-2 border-slate-200 px-6 md:px-12 py-5 md:py-6 rounded-2xl font-black uppercase 
                       tracking-widest text-[10px] md:text-sm hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 
                       shadow-lg shadow-slate-100 cursor-pointer whitespace-nowrap"
          >
            Report a Scam
          </button>
        </div>
      </section>

      {/* CORE CAPABILITIES GRID */}
      <section className="py-10 w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <FeatureCard 
            icon={ShieldCheck}
            title="Learning Lab"
            description="Step-by-step modules on SIM safety, Bank alerts, and Phone scams."
            actionText="Initialize"
            colorClass="hover:border-blue-600 text-blue-600"
            onClick={() => router.push('/learning')}
          />

          <FeatureCard 
            icon={Activity}
            title="Safety Audit"
            description="Test your defenses! Calculate your safety score with our 10-point test."
            actionText="Run Scan"
            colorClass="hover:border-yellow-500 text-yellow-600"
            onClick={() => router.push('/audit')}
          />

          <FeatureCard 
            icon={BookOpen}
            title="Cyber Lexicon"
            description='200+ terms. Translate "big grammar" into simple Naija street lingo.'
            actionText="Open Dictionary"
            colorClass="hover:border-slate-900 text-slate-900"
            onClick={() => router.push('/glossary')}
          />

          <FeatureCard 
            icon={Zap}
            title="Kill-Switches"
            description="Instant bank codes to freeze your accounts and stop stolen funds."
            actionText="Lock Account"
            colorClass="hover:border-red-600 text-red-600"
            onClick={() => router.push('/emergency')}
          />

        </div>
      </section>

      {/* EMERGENCY FLOATING ACTION */}
      <div className="fixed bottom-8 right-8 flex flex-col items-end gap-4 z-50">
        <button 
          onClick={() => router.push('/emergency')}
          className="bg-red-600 text-white font-black py-5 px-10 rounded-full cursor-pointer
                     shadow-[0_20px_50px_rgba(220,38,38,0.3)] hover:bg-red-700 hover:shadow-[0_25px_60px_rgba(220,38,38,0.5)]
                     hover:-translate-y-1 transition-all flex items-center gap-3 animate-pulse border-4 border-white active:scale-90"
        >
           <AlertTriangle size={24} fill="white" className="text-red-600" />
           <span className="uppercase text-xs tracking-[0.2em]">I&apos;m Under Attack!</span>
        </button>
      </div>

      <footer className="py-20 text-slate-400 text-[10px] font-bold uppercase tracking-[0.5em] opacity-60 hover:opacity-100 transition-opacity">
        Stay Vigilant • Project Guard 2026
      </footer>

    </main>
  )
}