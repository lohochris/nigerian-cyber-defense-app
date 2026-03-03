"use client"
import React from 'react'
import Link from 'next/link'
import { 
  Shield, 
  Terminal, 
  Target, 
  Headset, 
  FileText, 
  Lock, 
  Cpu 
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
                <Cpu size={14} strokeWidth={3} />
              </div>
              <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">
                Project<span className="text-blue-600">Guard</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm max-w-xs leading-relaxed font-medium">
              Nigeria's frontline digital defense laboratory. Empowering citizens to navigate the fintech landscape with total immunity.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              <Terminal size={10} /> Command
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/learning" className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase flex items-center gap-2">
                  <Shield size={12} strokeWidth={2.5} /> Learning Lab
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase flex items-center gap-2">
                  <Target size={12} strokeWidth={2.5} /> The Mission
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase flex items-center gap-2">
                  <Headset size={12} strokeWidth={2.5} /> Contact Support
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-2">
              <Lock size={10} /> Protocol
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase flex items-center gap-2">
                  <FileText size={12} strokeWidth={2.5} /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs font-bold text-slate-600 hover:text-blue-600 transition-colors uppercase flex items-center gap-2">
                  <FileText size={12} strokeWidth={2.5} /> Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            © {currentYear} Project Guard • Secure Infrastructure V1.0.4
          </p>
          <div className="flex gap-6 items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}