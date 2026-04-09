"use client"
import React, { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext'
import { 
  Search, 
  ShieldAlert, 
  Shield,
  ChevronLeft, 
  Clock, 
  Fingerprint, 
  Building2,
  Zap,
  Smartphone,
  LucideIcon
} from 'lucide-react'

interface BankCode {
  name: string;
  code: string;
  codeDisplay?: string;
  color: string;
  type: 'Commercial' | 'Fintech';
}

export default function EmergencyPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    en: {
      exit: "Exit to Dashboard",
      backSub: "Back to Project Guard",
      critical: "Critical Action Center",
      title: <>Lock Your <span className="text-red-600 italic">Wealth.</span></>,
      subtitle: "Speed is the only factor between safety and loss. Locate your provider and dial the deactivation code immediately.",
      search: "Search bank or fintech...",
      execute: "EXECUTE COMMAND",
      entity: "Entity",
      advisoryTitle: "Security Red-Line",
      advisoryBody: <>If anyone calls claiming to be a "Bank Officer" asking for an OTP to "complete the block," <span className="underline decoration-white/30 decoration-4 underline-offset-4 italic text-white">THEY ARE THE SCAMMER.</span></>,
      recoveryTitle: "Post-Action Recovery",
      rule300: "300-Second Rule",
      rule300Body: "Asset recovery probability drops instantly after money leaves your ecosystem. Act now.",
      handshake: "Vault Handshake",
      handshakeBody: "Prepare your BVN. Automated switches require verification to ensure you are the owner.",
      audit: "Physical Audit",
      auditBody: "Visit your branch within 24 hours to finalize the block and request a transaction recall."
    },
    pidgin: {
      exit: "Commot go Dashboard",
      backSub: "Return back to Project Guard",
      critical: "Sharp-Sharp Action Center",
      title: <>Lock Your <span className="text-red-600 italic">Money.</span></>,
      subtitle: "Na speed be the koko now. Find your bank for here, dial the code sharp-sharp make dem lock everywhere.",
      search: "Find your bank...",
      execute: "DIAL CODE NOW",
      entity: "Bank/Fintech",
      advisoryTitle: "Oya Shine Your Eye",
      advisoryBody: <>If anybody call you say dem be "Bank Staff" ask for OTP to "help you block account," <span className="underline decoration-white/30 decoration-4 underline-offset-4 italic text-white">NA DEM BE THIEF!</span></>,
      recoveryTitle: "Wetyn You Go Do Next",
      rule300: "300-Second Run",
      rule300Body: "The more you delay, the more your money dey fly go another place. No waste time.",
      handshake: "Check Your BVN",
      handshakeBody: "Keep your BVN ready. The system need am to confirm say na you get the money true-true.",
      audit: "Branch Waka",
      auditBody: "Waka go your bank branch within 24 hours make you tell dem to reverse the money sharp-sharp."
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  const bankCodes: BankCode[] = [
    { name: "OPay", code: "*955*10#", color: "bg-emerald-600", type: "Fintech" },
    { name: "PalmPay", code: "*895#", color: "bg-blue-600", type: "Fintech" },
    { name: "Moniepoint", code: "*5573*911#", color: "bg-indigo-700", type: "Fintech" },
    { name: "Kuda Bank", code: "Block via App", codeDisplay: "USE APP", color: "bg-purple-800", type: "Fintech" },
    { name: "FairMoney", code: "*322*0#", color: "bg-blue-500", type: "Fintech" },
    { name: "Carbon", code: "*1303#", color: "bg-slate-900", type: "Fintech" },
    { name: "Momo PSB", code: "*671#", color: "bg-yellow-500", type: "Fintech" },
    { name: "Access Bank", code: "*901*911#", color: "bg-orange-600", type: "Commercial" },
    { name: "Ecobank Nigeria", code: "*326*911#", color: "bg-teal-700", type: "Commercial" },
    { name: "Fidelity Bank", code: "*770*911#", color: "bg-blue-800", type: "Commercial" },
    { name: "First Bank (FBN)", code: "*894*911#", color: "bg-blue-900", type: "Commercial" },
    { name: "FCMB", code: "*329*911#", color: "bg-purple-700", type: "Commercial" },
    { name: "GTBank (GTCO)", code: "*737*51*10#", color: "bg-orange-500", type: "Commercial" },
    { name: "Heritage Bank", code: "*766*911#", color: "bg-blue-400", type: "Commercial" },
    { name: "Jaiz Bank", code: "*389*301*911#", color: "bg-green-800", type: "Commercial" },
    { name: "Keystone Bank", code: "*7111*911#", color: "bg-blue-700", type: "Commercial" },
    { name: "Polaris Bank", code: "*833*911#", color: "bg-purple-900", type: "Commercial" },
    { name: "Stanbic IBTC", code: "*909*29#", color: "bg-blue-600", type: "Commercial" },
    { name: "Sterling Bank", code: "*822*911#", color: "bg-red-600", type: "Commercial" },
    { name: "UBA", code: "*919*10#", color: "bg-red-800", type: "Commercial" },
    { name: "Union Bank", code: "*826*911#", color: "bg-blue-500", type: "Commercial" },
    { name: "Unity Bank", code: "*7799*911#", color: "bg-orange-400", type: "Commercial" },
    { name: "Wema Bank", code: "*945*911#", color: "bg-purple-600", type: "Commercial" },
    { name: "Zenith Bank", code: "*966*911#", color: "bg-red-700", type: "Commercial" }
  ];

  const filteredBanks = useMemo(() => 
    bankCodes.filter(bank => bank.name.toLowerCase().includes(search.toLowerCase())),
    [search]
  );

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#fdf2f2] pb-32">
      
      {/* IMPROVED EXIT BUTTON WITH HOVER STATES */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:bg-slate-900 group-hover:rotate-12 transition-all duration-300">
            <ShieldAlert size={24} />
          </div>
          <div className="text-left">
            <span className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-red-600 group-hover:text-slate-900 transition-colors">
              <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> {t.exit}
            </span>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter block">{t.backSub}</span>
          </div>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-12">
        
        {/* HERO HEADER */}
        <header className="mb-20 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl animate-bounce">
            <ShieldAlert size={14} /> {t.critical}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-8 uppercase tracking-tighter leading-[0.85]">
            {t.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {/* SEARCH BAR */}
        <div className="mb-16 sticky top-8 z-[90] flex justify-center">
          <div className="relative w-full max-w-2xl group drop-shadow-2xl">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={24} />
            <input 
              type="text" 
              placeholder={t.search}
              className="w-full p-7 pl-16 rounded-[2.5rem] border-4 border-white bg-white/95 backdrop-blur-2xl shadow-2xl focus:border-red-600 outline-none text-xl font-bold transition-all placeholder:text-slate-300 uppercase tracking-tight"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* PROVIDER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {filteredBanks.map((bank, index) => (
            <BankActionCard key={index} bank={bank} t={t} />
          ))}
        </div>

        {/* ADVISORY SECTION */}
        <div className="bg-red-600 text-white p-10 md:p-20 rounded-[4rem] shadow-2xl mb-40 flex flex-col lg:flex-row items-center gap-12 border-[12px] border-white relative overflow-hidden">
            <div className="bg-white text-red-600 p-10 rounded-[3rem] shadow-2xl shrink-0 z-10">
              <ShieldAlert size={64} strokeWidth={3} />
            </div>
            <div className="text-center lg:text-left z-10">
              <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">{t.advisoryTitle}</h3>
              <p className="text-2xl font-bold opacity-90 leading-tight">
                {t.advisoryBody}
              </p>
            </div>
            <Shield size={400} className="absolute -right-20 -bottom-20 opacity-10 rotate-12" />
        </div>

        {/* RECOVERY PROTOCOL */}
        <div className="bg-slate-950 text-white p-12 md:p-28 rounded-[5rem] shadow-2xl relative overflow-hidden border border-white/10 text-center">
          <h3 className="text-3xl md:text-5xl font-black text-red-500 mb-24 uppercase tracking-tighter">
              {t.recoveryTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-20 relative z-10">
            <RecoveryStep icon={Clock} color="bg-red-600" title={t.rule300} desc={t.rule300Body} />
            <RecoveryStep icon={Fingerprint} color="bg-blue-600" title={t.handshake} desc={t.handshakeBody} />
            <RecoveryStep icon={Building2} color="bg-emerald-600" title={t.audit} desc={t.auditBody} />
          </div>
        </div>
      </div>
    </main>
  )
}

const BankActionCard = ({ bank, t }: { bank: BankCode, t: any }) => (
  <a 
    href={bank.code === "Block via App" ? "#" : `tel:${bank.code.replace(/#/g, '%23')}`}
    className={`${bank.color} text-white p-10 rounded-[3.5rem] shadow-xl flex flex-col justify-between group hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 border-4 border-transparent hover:border-white relative overflow-hidden active:scale-[0.97] cursor-pointer`}
  >
    <div className="relative z-10 mb-12">
      <p className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em] mb-4 flex items-center gap-2">
        {bank.type === "Commercial" ? <Building2 size={14} /> : <Smartphone size={14} />} 
        {bank.type} {t.entity}
      </p>
      <h2 className="text-4xl font-black tracking-tighter leading-none uppercase">{bank.name}</h2>
    </div>
    <div className="bg-black/20 backdrop-blur-md p-6 rounded-3xl border border-white/20 text-center relative z-10 group-hover:bg-white group-hover:text-slate-900 transition-all duration-500">
      <p className="text-[10px] font-black uppercase mb-2 tracking-[0.3em] opacity-80 group-hover:text-red-600 transition-colors">
          {t.execute}
      </p>
      <p className="text-3xl font-black font-mono tracking-tighter leading-none">
        {bank.codeDisplay || bank.code}
      </p>
    </div>
    <Zap size={140} className="absolute -bottom-10 -right-10 opacity-10 rotate-12 group-hover:scale-125 transition-transform duration-700" />
  </a>
);

const RecoveryStep = ({ icon: Icon, color, title, desc }: { icon: LucideIcon, color: string, title: string, desc: string }) => (
  <div className="flex flex-col items-center space-y-8 group">
    <div className={`w-24 h-24 ${color} text-white rounded-[2.5rem] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
      <Icon size={40} strokeWidth={2.5} />
    </div>
    <div className="space-y-4">
      <h4 className="font-black text-2xl uppercase tracking-tighter">{title}</h4>
      <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] font-medium mx-auto">
        {desc}
      </p>
    </div>
  </div>
);