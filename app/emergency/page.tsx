"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '../context/LanguageContext' // Import the global context
import { 
  Search, 
  PhoneCall, 
  ShieldAlert, 
  ChevronLeft, 
  Clock, 
  Fingerprint, 
  Building2,
  Zap,
  Smartphone,
  Languages
} from 'lucide-react'

export default function EmergencyPage() {
  const router = useRouter();
  const { lang, toggleLang } = useLanguage(); // Use global state
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    en: {
      exit: "Exit to Dashboard",
      critical: "Critical Action Center",
      title: <>Lock Your <span className="text-red-600 italic">Wealth.</span></>,
      subtitle: "Speed is the only factor between safety and loss. Locate your provider and dial the deactivation code Immediately.",
      search: "Search provider...",
      execute: "EXECUTE COMMAND",
      entity: "Entity",
      advisoryTitle: "Security Red-Line",
      advisoryBody: <>If anyone calls you claiming to be a "Bank Officer" and asks for an OTP to "complete the block," <span className="underline decoration-white decoration-4 underline-offset-4 italic">THEY ARE THE SCAMMER.</span> Do not share details.</>,
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
      critical: "Sharp-Sharp Action Center",
      title: <>Lock Your <span className="text-red-600 italic">Money.</span></>,
      subtitle: "Na speed be the koko now. Find your bank for here, dial the code Sharp-Sharp make dem lock everywhere.",
      search: "Find your bank...",
      execute: "DIAL CODE NOW",
      entity: "Bank/Fintech",
      advisoryTitle: "Oya Shine Your Eye",
      advisoryBody: <>If anybody call you say dem be "Bank Staff" and dem ask for OTP to "help you block account," <span className="underline decoration-white decoration-4 underline-offset-4 italic">NA DEY BE THIEF!</span> No give dem anything.</>,
      recoveryTitle: "Wetyn You Go Do Next",
      rule300: "300-Second Run",
      rule300Body: "The more you delay, the more your money dey fly go another place. No waste time.",
      handshake: "Check Your BVN",
      handshakeBody: "Keep your BVN ready. The system need am to confirm say na you get the money true-true.",
      audit: "Branch Waka",
      auditBody: "Waka go your bank branch within 24 hours make you tell dem to reverse the money sharp-sharp."
    }
  };

  const t = translations[lang];

  const bankCodes = [
    { name: "OPay", code: "*955*10#", color: "bg-emerald-600", type: "Fintech" },
    { name: "PalmPay", code: "*895#", color: "bg-blue-600", type: "Fintech" },
    { name: "Moniepoint", code: "*5573*911#", color: "bg-indigo-700", type: "Fintech" },
    { name: "Kuda Bank", code: "Block via App", codeDisplay: "USE APP", color: "bg-purple-800", type: "Fintech" },
    { name: "FairMoney", code: "*322*0#", color: "bg-blue-500", type: "Fintech" },
    { name: "Carbon", code: "*1303#", color: "bg-slate-900", type: "Fintech" },
    { name: "Momo PSB", code: "*671#", color: "bg-yellow-500", type: "Fintech" },
    { name: "Access Bank", code: "*901*911#", color: "bg-orange-600", type: "Commercial" },
    { name: "Alternative Bank", code: "*911#", color: "bg-slate-800", type: "Commercial" },
    { name: "Citibank Nigeria", code: "*911#", color: "bg-blue-900", type: "Commercial" },
    { name: "Ecobank Nigeria", code: "*326*911#", color: "bg-teal-700", type: "Commercial" },
    { name: "Fidelity Bank", code: "*770*911#", color: "bg-blue-800", type: "Commercial" },
    { name: "First Bank (FBN)", code: "*894*911#", color: "bg-blue-900", type: "Commercial" },
    { name: "FCMB", code: "*329*911#", color: "bg-purple-700", type: "Commercial" },
    { name: "Globus Bank", code: "*911#", color: "bg-slate-700", type: "Commercial" },
    { name: "GTBank (GTCO)", code: "*737*51*10#", color: "bg-orange-500", type: "Commercial" },
    { name: "Heritage Bank", code: "*766*911#", color: "bg-blue-400", type: "Commercial" },
    { name: "Jaiz Bank", code: "*389*301*911#", color: "bg-green-800", type: "Commercial" },
    { name: "Keystone Bank", code: "*7111*911#", color: "bg-blue-700", type: "Commercial" },
    { name: "Lotus Bank", code: "*911#", color: "bg-green-900", type: "Commercial" },
    { name: "Optimus Bank", code: "*911#", color: "bg-indigo-600", type: "Commercial" },
    { name: "Parallex Bank", code: "*911#", color: "bg-slate-900", type: "Commercial" },
    { name: "Polaris Bank", code: "*833*911#", color: "bg-purple-900", type: "Commercial" },
    { name: "Premium Trust Bank", code: "*911#", color: "bg-blue-400", type: "Commercial" },
    { name: "Providus Bank", code: "*911#", color: "bg-slate-600", type: "Commercial" },
    { name: "Signature Bank", code: "*911#", color: "bg-amber-900", type: "Commercial" },
    { name: "Stanbic IBTC", code: "*909*29#", color: "bg-blue-600", type: "Commercial" },
    { name: "Standard Chartered", code: "*911#", color: "bg-blue-900", type: "Commercial" },
    { name: "Sterling Bank", code: "*822*911#", color: "bg-red-600", type: "Commercial" },
    { name: "Suntrust Bank", code: "*911#", color: "bg-blue-300", type: "Commercial" },
    { name: "TAJBank", code: "*911#", color: "bg-emerald-800", type: "Commercial" },
    { name: "Titan Trust Bank", code: "*911#", color: "bg-slate-500", type: "Commercial" },
    { name: "UBA", code: "*919*10#", color: "bg-red-800", type: "Commercial" },
    { name: "Union Bank", code: "*826*911#", color: "bg-blue-500", type: "Commercial" },
    { name: "Unity Bank", code: "*7799*911#", color: "bg-orange-400", type: "Commercial" },
    { name: "Wema Bank", code: "*945*911#", color: "bg-purple-600", type: "Commercial" },
    { name: "Zenith Bank", code: "*966*911#", color: "bg-red-700", type: "Commercial" }
  ];

  const filteredBanks = bankCodes.filter(bank => 
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[#fdf2f2] p-6 pt-24 selection:bg-red-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation & Global Language Toggle */}
        <div className="flex justify-between items-center mb-10">
          <button 
            onClick={() => router.push('/')}
            className="group text-red-700 font-bold flex items-center gap-2 hover:text-slate-950 transition-colors uppercase text-[10px] tracking-widest"
          >
            <ChevronLeft size={14} strokeWidth={3} className="group-hover:-translate-x-1 transition-transform" /> {t.exit}
          </button>

          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 bg-slate-950 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-600 transition-all active:scale-95 shadow-lg"
          >
            <Languages size={14} /> {lang === 'en' ? 'Switch to Pidgin 🇳🇬' : 'Change to English 🇬🇧'}
          </button>
        </div>

        {/* HEADER */}
        <header className="mb-16 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-lg">
            <ShieldAlert size={14} /> {t.critical}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 uppercase tracking-tight leading-tight">
            {t.title}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl leading-relaxed">
            {t.subtitle}
          </p>
        </header>

        {/* SEARCH BOX */}
        <div className="mb-16 sticky top-6 z-50 flex justify-center">
          <div className="relative w-full max-w-xl group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={22} />
            <input 
              type="text" 
              placeholder={t.search}
              className="w-full p-6 pl-16 rounded-3xl border-2 border-white bg-white/90 backdrop-blur-xl shadow-xl focus:border-red-600 outline-none text-xl font-bold transition-all placeholder:text-slate-300 uppercase tracking-tight"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* PROVIDER GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {filteredBanks.map((bank, index) => (
            <a 
              key={index} 
              href={bank.code === "Block via App" ? "#" : `tel:${bank.code.replace(/#/g, '%23')}`}
              className={`${bank.color} text-white p-10 rounded-[3rem] shadow-lg flex flex-col justify-between group hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-white relative overflow-hidden active:scale-95`}
            >
              <div className="relative z-10 mb-10">
                <p className="text-[9px] font-black uppercase opacity-60 tracking-widest mb-3 flex items-center gap-2">
                  {bank.type === "Commercial" ? <Building2 size={12} /> : <Smartphone size={12} />} 
                  {bank.type} {t.entity}
                </p>
                <h2 className="text-3xl font-black tracking-tighter leading-none">{bank.name}</h2>
              </div>
              
              <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center relative z-10 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300">
                <p className="text-[10px] font-black uppercase mb-2 tracking-[0.2em] opacity-80">
                    {t.execute}
                </p>
                <p className="text-3xl font-black font-mono tracking-tighter">
                  {bank.codeDisplay || bank.code}
                </p>
              </div>

              <Zap size={120} className="absolute -bottom-10 -right-10 opacity-10 rotate-12 group-hover:scale-110 transition-transform duration-700" />
            </a>
          ))}
        </div>

        {/* DANGER ADVISORY */}
        <div className="bg-red-600 text-white p-12 md:p-20 rounded-[4rem] shadow-2xl mb-32 flex flex-col lg:flex-row items-center gap-12 border-8 border-white">
            <div className="bg-white text-red-600 p-10 rounded-[2.5rem] shadow-xl shrink-0">
                <ShieldAlert size={60} strokeWidth={3} />
            </div>
            <div className="text-center lg:text-left">
                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">{t.advisoryTitle}</h3>
                <p className="text-xl font-bold opacity-95 leading-snug">
                    {t.advisoryBody}
                </p>
            </div>
        </div>

        {/* RECOVERY PROTOCOL */}
        <div className="bg-slate-950 text-white p-12 md:p-24 rounded-[5rem] shadow-2xl relative overflow-hidden border border-white/10 mb-20 text-center">
          <h3 className="text-3xl md:text-5xl font-black text-red-500 mb-20 uppercase tracking-tighter">
              {t.recoveryTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-16 relative z-10">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-red-600 text-white rounded-3xl flex items-center justify-center shadow-lg">
                <Clock size={36} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-xl uppercase tracking-tight">{t.rule300}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {t.rule300Body}
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-lg">
                <Fingerprint size={36} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-xl uppercase tracking-tight">{t.handshake}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {t.handshakeBody}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-emerald-600 text-white rounded-3xl flex items-center justify-center shadow-lg">
                <Building2 size={36} strokeWidth={2.5} />
              </div>
              <h4 className="font-black text-xl uppercase tracking-tight">{t.audit}</h4>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                {t.auditBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}