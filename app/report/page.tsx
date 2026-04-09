"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  ShieldAlert, 
  PhoneCall, 
  ExternalLink, 
  ArrowLeft, 
  Eye, 
  Smartphone, 
  Globe, 
  Info,
  Camera,
  History,
  AlertTriangle,
  MessageSquare,
  LucideIcon
} from 'lucide-react'

/**
 * TYPESCRIPT INTERFACES
 */
interface Agency {
  name: string;
  desc: string;
  action: string;
  link: string;
  phone: string;
  icon: React.ReactNode;
  btnColor: string;
  type: 'phone' | 'whatsapp';
}

/**
 * AGENCY CARD COMPONENT
 */
const AgencyCard = ({ agency }: { agency: Agency }) => (
  <div className="group bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 hover:border-red-500/30 transition-all flex flex-col h-full">
    <div className="flex justify-between items-start mb-6">
      <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 group-hover:bg-red-50 transition-all duration-300">
        {agency.icon}
      </div>
      
      <a 
        href={agency.type === 'whatsapp' ? `https://wa.me/${agency.phone.replace(/[^0-9]/g, '')}` : `tel:${agency.phone}`}
        className={`flex items-center gap-2 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
          agency.type === 'whatsapp' 
          ? 'bg-green-100 text-green-700 hover:bg-green-600 hover:text-white' 
          : 'bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white'
        }`}
      >
        {agency.type === 'whatsapp' ? <MessageSquare size={14} /> : <PhoneCall size={14} />}
        {agency.phone}
      </a>
    </div>
    
    <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-3 leading-tight">
      {agency.name}
    </h2>
    
    <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-8 flex-1">
      {agency.desc}
    </p>
    
    <a 
      href={agency.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-black uppercase tracking-widest text-[10px] transition-all shadow-lg active:scale-95 cursor-pointer ${agency.btnColor}`}
    >
      {agency.action} <ExternalLink size={14} />
    </a>
  </div>
);

export default function ReportPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const agencies: Agency[] = [
    {
      name: "EFCC (Cybercrime Unit)",
      desc: "For cases of bank fraud, wire transfer scams, business email compromise, and 'Yahoo' boy activities.",
      action: "Official Website",
      link: "https://www.efcc.gov.ng/",
      phone: "08093322644",
      icon: <Eye className="text-red-600" size={28} />,
      btnColor: "bg-red-600 hover:bg-red-700 shadow-red-200",
      type: "phone"
    },
    {
      name: "NCC (Telecoms Issues)",
      desc: "For reporting fraudulent SMS, SIM card cloning, or persistent scam calls and data theft.",
      action: "Visit NCC Portal",
      link: "https://www.ncc.gov.ng/",
      phone: "622",
      icon: <Smartphone className="text-blue-600" size={28} />,
      btnColor: "bg-blue-600 hover:bg-blue-700 shadow-blue-200",
      type: "phone"
    },
    {
      name: "NPF-NCCC / INTERPOL",
      desc: "For international scams and crypto-theft. Use the WhatsApp line if the website portal is unreachable.",
      action: "E-Report Portal",
      link: "https://nccc.npf.gov.ng/", 
      phone: "+2349018181789",
      icon: <Globe className="text-slate-800" size={28} />,
      btnColor: "bg-slate-800 hover:bg-slate-900 shadow-slate-200",
      type: "whatsapp"
    }
  ];

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#f8fafc] pb-20 font-sans selection:bg-red-100">
      
      {/* HEADER SECTION */}
      <header className="bg-red-600 text-white pt-10 pb-20 px-6 rounded-b-[3rem] shadow-2xl relative overflow-hidden">
        <ShieldAlert size={200} className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none rotate-12" />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white font-black mb-6 uppercase tracking-[0.2em] text-[10px] transition-all group cursor-pointer">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Base
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter leading-none">
                Action Center
              </h1>
              <p className="text-lg opacity-80 font-medium mt-2">
                &quot;No keep quiet. Talk so dem go fit catch dem.&quot;
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hidden md:block">
              <p className="text-[10px] font-black uppercase tracking-widest text-white">Priority Reporting</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* EMERGENCY BANNER - ACTIVE 122 DIALER */}
        <div className="bg-white p-5 rounded-3xl shadow-xl border-2 border-yellow-400 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
          <div className="flex items-center gap-5 text-left">
            <div className="bg-yellow-400 p-4 rounded-2xl text-yellow-950 animate-pulse">
              <PhoneCall size={24} strokeWidth={3} />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-700">Immediate Threat?</p>
              <p className="text-xl font-black text-slate-900 tracking-tight">Dial <span className="text-red-600">122</span> now</p>
            </div>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            {/* The tel:122 protocol makes this button active */}
            <a 
              href="tel:122" 
              className="flex-1 md:flex-none text-center bg-red-600 text-white px-8 py-4 rounded-xl font-black uppercase text-xs tracking-widest 
                         hover:bg-red-700 hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95 cursor-pointer shadow-lg shadow-red-200"
            >
              Emergency Call (122)
            </a>
          </div>
        </div>

        {/* AGENCY LISTING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agencies.map((agency, index) => (
            <AgencyCard key={index} agency={agency} />
          ))}
        </div>

        {/* EVIDENCE CHECKLIST SECTION */}
        <section className="mt-12 bg-slate-900 rounded-[3.5rem] p-8 md:p-12 text-white relative overflow-hidden">
          <div className="relative z-10 text-left">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-red-600 rounded-2xl shadow-lg shadow-red-900/50">
                <Info size={20} />
              </div>
              <h3 className="text-2xl font-black uppercase italic tracking-tight">Evidence Checklist</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ChecklistItem 
                icon={Camera} 
                title="Screenshots" 
                color="text-red-500"
                text="Capture conversations, payment receipts, and scammer profile details."
              />
              <ChecklistItem 
                icon={History} 
                title="Bank Details" 
                color="text-blue-500"
                text="Save every account name and number the scammer shared with you."
              />
              <ChecklistItem 
                icon={AlertTriangle} 
                title="Phone Records" 
                color="text-yellow-500"
                text="Document the phone numbers or WhatsApp IDs used by the suspects."
              />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px] rounded-full"></div>
        </section>

        <footer className="mt-12 text-center pb-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-100 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Verified Reporting Channels • Project Guard 2026
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}

/**
 * HELPER COMPONENT FOR CHECKLIST
 */
const ChecklistItem = ({ icon: Icon, title, text, color }: { icon: LucideIcon, title: string, text: string, color: string }) => (
  <div className="flex gap-4 group cursor-default">
    <div className={`${color} shrink-0 group-hover:scale-125 transition-transform duration-300`}>
      <Icon size={28} />
    </div>
    <div>
      <h4 className={`font-black uppercase text-xs tracking-widest mb-1 ${color}`}>{title}</h4>
      <p className="text-[11px] text-slate-400 leading-normal">{text}</p>
    </div>
  </div>
);