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
  Cpu,
  ArrowUpRight,
  ShieldAlert,
  Fingerprint
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-6 mt-auto relative overflow-hidden">
      {/* Decorative Background Element */}
      <Fingerprint className="absolute -bottom-10 -left-10 text-slate-50 size-48 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-8 h-8 bg-slate-900 rounded-xl flex items-center justify-center text-white group-hover:bg-blue-600 transition-colors duration-500 shadow-lg shadow-slate-200">
                <Cpu size={18} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase italic">
                Project<span className="text-blue-600">Guard</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed font-medium mb-8">
              Nigeria&apos;s frontline digital defense laboratory. We provide the tactical knowledge required to navigate the fintech landscape with total immunity.
            </p>
            <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100 max-w-xs">
              <ShieldAlert className="text-blue-600 shrink-0" size={20} />
              <p className="text-[10px] font-black text-blue-700 uppercase tracking-widest leading-tight">
                Vigilance is the first <br /> line of defense.
              </p>
            </div>
          </div>

          {/* NAVIGATION GRID */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* COMMAND CENTER */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-2">
                <Terminal size={12} className="text-blue-600" /> Command
              </h4>
              <ul className="space-y-5">
                {[
                  { name: "Learning Lab", href: "/learning", icon: <Shield size={14} /> },
                  { name: "The Mission", href: "/about", icon: <Target size={14} /> },
                  { name: "Contact Support", href: "/contact", icon: <Headset size={14} /> },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="group text-xs font-black text-slate-600 hover:text-blue-600 transition-all uppercase flex items-center gap-2">
                      <span className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">{link.icon}</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROTOCOLS */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-2">
                <Lock size={12} className="text-blue-600" /> Protocol
              </h4>
              <ul className="space-y-5">
                {[
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "Safety Audit", href: "/audit" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="group text-xs font-black text-slate-600 hover:text-blue-600 transition-all uppercase flex items-center gap-2">
                      <FileText size={14} className="text-slate-300 group-hover:text-blue-600" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* EXTERNAL RESOURCES */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-2">
                 Intelligence
              </h4>
              <ul className="space-y-5">
                <li>
                  <a href="https://efcc.gov.ng" target="_blank" rel="noopener noreferrer" className="group text-xs font-black text-slate-600 hover:text-red-600 transition-all uppercase flex items-center justify-between border-b border-slate-50 pb-2">
                    EFCC Portal <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
                <li>
                  <a href="https://ncc.gov.ng" target="_blank" rel="noopener noreferrer" className="group text-xs font-black text-slate-600 hover:text-blue-600 transition-all uppercase flex items-center justify-between border-b border-slate-50 pb-2">
                    NCC Nigeria <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECURITY BAR */}
        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-900 flex items-center justify-center text-[8px] text-white font-bold">PG</div>
              <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-600 flex items-center justify-center text-[8px] text-white font-bold">NG</div>
            </div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
              © {currentYear} Project Guard <span className="mx-2 text-slate-200">|</span> Encrypted Infrastructure V1.0.4
            </p>
          </div>

          <div className="flex items-center gap-6 px-6 py-2 bg-slate-50 rounded-full border border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">
                Mainframe Live
              </span>
            </div>
            <div className="h-4 w-px bg-slate-200" />
            <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest">
              Nigeria Region
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}