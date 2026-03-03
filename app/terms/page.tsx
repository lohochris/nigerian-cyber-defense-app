"use client"
import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ShieldCheck, Scale, ZapOff, ScrollText, AlertCircle } from 'lucide-react'

export default function TermsPage() {
  const sections = [
    {
      id: "01",
      title: "Educational Intent",
      icon: <ShieldCheck size={20} className="text-blue-600" />,
      content: "Project Guard is an educational platform. The simulations, videos, and modules are designed to increase awareness of cyber-threats. Completion of this course does not guarantee 100% immunity, as threats evolve daily."
    },
    {
      id: "02",
      title: "Prohibited Conduct",
      icon: <ZapOff size={20} className="text-orange-600" />,
      content: "Users may not attempt to reverse-engineer this lab, inject malicious code, or use the information provided here to perform illegal hacking activities. We build defenders, not attackers."
    },
    {
      id: "03",
      title: "Certification Authenticity",
      icon: <ScrollText size={20} className="text-purple-600" />,
      content: "Certificates issued by Project Guard are digital tokens of completion. They are not university degrees or government-mandated licenses. They represent your commitment to digital safety."
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfcfc] py-12 px-6 selection:bg-blue-100">
      <div className="max-w-3xl mx-auto bg-white rounded-[3.5rem] p-10 md:p-20 shadow-[0_2px_40px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
        
        {/* Subtle Background Badge */}
        <Scale className="absolute -top-10 -right-10 text-slate-50 size-64 pointer-events-none" />

        <Link href="/" className="group inline-flex items-center gap-2 text-blue-600 font-black mb-16 uppercase text-[10px] tracking-[0.2em] transition-all">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
          Return to Command
        </Link>

        <header className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-blue-600"></span>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">Legal Framework</p>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            Terms of <br /> <span className="text-blue-600">Deployment</span>
          </h1>
          <p className="mt-6 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
            Last Updated: March 2026 • Version 1.0.4
          </p>
        </header>

        <div className="space-y-12 relative z-10">
          
          {/* DYNAMIC SECTIONS */}
          {sections.map((section) => (
            <section key={section.id} className="group">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-slate-50 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {section.icon}
                </div>
                <h2 className="text-xs font-black text-slate-900 uppercase tracking-widest leading-none">
                  {section.id}. {section.title}
                </h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed font-medium pl-12">
                {section.content}
              </p>
            </section>
          ))}

          {/* CRITICAL LIABILITY CARD */}
          <section className="bg-red-50 p-8 md:p-12 rounded-[2.5rem] border-2 border-red-100 relative overflow-hidden group">
            <AlertCircle className="absolute -right-4 -bottom-4 text-red-100 size-32 rotate-12" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-red-600 text-white p-2 rounded-lg">
                  <Scale size={20} />
                </div>
                <h2 className="text-xs font-black text-red-900 uppercase tracking-widest leading-none">
                  04. Limitation of Liability
                </h2>
              </div>
              
              <p className="text-red-900/80 text-sm leading-relaxed font-bold italic">
                &quot;Project Guard and its creators are NOT responsible for any financial loss, data breach, or security incident that occurs on your personal accounts. We provide the shield (knowledge), but you are the commander responsible for wielding it.&quot;
              </p>
              
              <div className="mt-8 pt-6 border-t border-red-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
                <span className="text-[10px] font-black text-red-700 uppercase tracking-widest">Absolute Disclaimer</span>
              </div>
            </div>
          </section>

          {/* ACCEPTANCE FOOTER */}
          <footer className="pt-12 text-center border-t border-slate-50">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              Engagement implies full consent to these protocols
            </p>
            <Link 
              href="/" 
              className="inline-block bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all shadow-xl active:scale-95"
            >
              I Accept Deployment Terms
            </Link>
          </footer>

        </div>
      </div>
    </main>
  )
}