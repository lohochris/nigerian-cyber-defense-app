"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Search, 
  PhoneCall, 
  ShieldAlert, 
  ChevronLeft, 
  Clock, 
  Fingerprint, 
  Building2,
  Zap
} from 'lucide-react'

export default function EmergencyPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const bankCodes = [
    { name: "Access Bank", code: "*901*911#", color: "bg-orange-600" },
    { name: "Alternative Bank", code: "*911#", color: "bg-slate-800" },
    { name: "Citibank Nigeria", code: "*911#", color: "bg-blue-900" },
    { name: "Ecobank Nigeria", code: "*326*911#", color: "bg-teal-600" },
    { name: "Fidelity Bank", code: "*770*911#", color: "bg-blue-700" },
    { name: "First Bank (FBN)", code: "*894*911#", color: "bg-blue-800" },
    { name: "FCMB", code: "*329*911#", color: "bg-purple-600" },
    { name: "Globus Bank", code: "*911#", color: "bg-slate-700" },
    { name: "GTBank (GTCO)", code: "*737*51*10#", color: "bg-orange-500" },
    { name: "Heritage Bank", code: "*766*911#", color: "bg-blue-500" },
    { name: "Jaiz Bank", code: "*389*301*911#", color: "bg-green-700" },
    { name: "Keystone Bank", code: "*7111*911#", color: "bg-blue-600" },
    { name: "Lotus Bank", code: "*911#", color: "bg-green-800" },
    { name: "Optimus Bank", code: "*911#", color: "bg-indigo-600" },
    { name: "Parallex Bank", code: "*911#", color: "bg-slate-900" },
    { name: "Polaris Bank", code: "*833*911#", color: "bg-purple-800" },
    { name: "Premium Trust Bank", code: "*911#", color: "bg-blue-400" },
    { name: "Providus Bank", code: "*911#", color: "bg-slate-600" },
    { name: "Signature Bank", code: "*911#", color: "bg-amber-900" },
    { name: "Stanbic IBTC", code: "*909*29#", color: "bg-blue-500" },
    { name: "Standard Chartered", code: "*911#", color: "bg-blue-900" },
    { name: "Sterling Bank", code: "*822*911#", color: "bg-red-500" },
    { name: "Suntrust Bank", code: "*911#", color: "bg-blue-300" },
    { name: "TAJBank", code: "*911#", color: "bg-emerald-700" },
    { name: "Titan Trust Bank", code: "*911#", color: "bg-slate-500" },
    { name: "UBA", code: "*919*10#", color: "bg-red-700" },
    { name: "Union Bank", code: "*826*911#", color: "bg-blue-400" },
    { name: "Unity Bank", code: "*7799*911#", color: "bg-orange-400" },
    { name: "Wema Bank", code: "*945*911#", color: "bg-purple-700" },
    { name: "Zenith Bank", code: "*966*911#", color: "bg-red-600" }
  ];

  const filteredBanks = bankCodes.filter(bank => 
    bank.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-red-50 p-6 pt-32">
      <div className="max-w-5xl mx-auto">
        
        <button 
          onClick={() => router.push('/')}
          className="text-red-700 font-black mb-8 flex items-center gap-2 hover:translate-x-[-4px] transition-transform uppercase text-xs tracking-widest"
        >
          <ChevronLeft size={16} strokeWidth={3} /> Exit Emergency Hub
        </button>

        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-xl animate-pulse">
            <ShieldAlert size={14} /> Active Security Response
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-[0.85]">
            Freeze Your <span className="text-red-600">Account.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl mx-auto leading-relaxed">
            Scammers move money in seconds. Find your bank and dial the code <span className="text-red-600 underline decoration-4 underline-offset-4">IMMEDIATELY</span>.
          </p>
        </header>

        {/* SEARCH BOX */}
        <div className="mb-12 sticky top-28 z-30">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-600 transition-colors" size={24} />
            <input 
              type="text" 
              placeholder="Search your bank (e.g. UBA, Zenith)..."
              className="w-full p-6 md:p-8 pl-16 md:pl-20 rounded-[2.5rem] border-4 border-white shadow-2xl focus:border-red-600 outline-none text-xl font-bold transition-all placeholder:text-slate-300"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* ALPHABETICAL CODES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBanks.map((bank, index) => (
            <a 
              key={index} 
              href={`tel:${bank.code.replace(/#/g, '%23')}`}
              className={`${bank.color} text-white p-8 rounded-[2.5rem] shadow-lg flex flex-col justify-between group hover:scale-[1.05] transition-all duration-300 border-4 border-transparent hover:border-white relative overflow-hidden active:scale-95`}
            >
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-2 flex items-center gap-2">
                  <Building2 size={12} /> Commercial Bank
                </p>
                <h2 className="text-2xl font-black tracking-tight leading-tight mb-8">{bank.name}</h2>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 text-center relative z-10">
                <p className="text-[10px] font-black uppercase opacity-80 mb-2 flex justify-center items-center gap-2">
                   TAP TO DIAL <PhoneCall size={10} />
                </p>
                <p className="text-3xl font-black font-mono tracking-tighter">
                  {bank.code}
                </p>
              </div>

              {/* Decorative Icon in background */}
              <Zap size={100} className="absolute -bottom-4 -right-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>

        {/* PROTOCOL INSTRUCTIONS */}
        <div className="mt-20 bg-slate-900 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden border border-slate-800">
          <h3 className="text-2xl md:text-4xl font-black text-red-500 mb-12 uppercase tracking-tighter flex items-center gap-3">
             Recovery Protocol
          </h3>
          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-red-600/20 text-red-500 rounded-2xl flex items-center justify-center">
                <Clock size={24} strokeWidth={2.5} />
              </div>
              <p className="font-black text-xl uppercase tracking-tight">Act Within 5 Mins</p>
              <p className="text-sm opacity-60 font-medium leading-relaxed">The "Golden Window" for recovery is 5 minutes. Every second counts before the funds are dispersed.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center">
                <Fingerprint size={24} strokeWidth={2.5} />
              </div>
              <p className="font-black text-xl uppercase tracking-tight">Verify Identity</p>
              <p className="text-sm opacity-60 font-medium leading-relaxed">The USSD prompt will ask for your linked phone number or NIN. Have these details ready in your mind.</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-600/20 text-green-500 rounded-2xl flex items-center justify-center">
                <Building2 size={24} strokeWidth={2.5} />
              </div>
              <p className="font-black text-xl uppercase tracking-tight">Visit Branch</p>
              <p className="text-sm opacity-60 font-medium leading-relaxed">Once the block is successful, visit your nearest branch with a valid ID card to begin fund recovery.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}