"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function EmergencyPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Alphabetical List of Nigerian Commercial Banks with Emergency Codes
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

  return (
    <main className="min-h-screen bg-red-50 p-6">
      <div className="max-w-5xl mx-auto">
        
        <button 
          onClick={() => router.push('/')}
          className="text-red-700 font-black mb-8 flex items-center gap-2 hover:underline tracking-tight"
        >
          ← EXIT EMERGENCY HUB
        </button>

        <header className="mb-10 text-center">
          <div className="inline-block bg-red-600 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-4 shadow-lg animate-pulse">
            Active Security Response
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-4 uppercase tracking-tighter leading-none">
            BLOCK YOUR ACCOUNT
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl mx-auto">
            Search for your bank below. Dial the code <span className="text-red-600 underline underline-offset-4">NOW</span> to freeze your money before scammers move it.
          </p>
        </header>

        {/* SEARCH BOX */}
        <div className="mb-10 sticky top-4 z-30">
          <input 
            type="text" 
            placeholder="Type your bank name (e.g. UBA, Lotus, Jaiz)..."
            className="w-full p-6 md:p-8 rounded-[2.5rem] border-4 border-red-100 focus:border-red-600 outline-none text-xl font-bold shadow-2xl transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* ALPHABETICAL CODES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBanks.map((bank, index) => (
            <div 
              key={index} 
              className={`${bank.color} text-white p-6 rounded-[2rem] shadow-md flex flex-col justify-between group hover:scale-[1.03] transition-transform duration-300 border border-white/10`}
            >
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase opacity-60 tracking-widest mb-1">Bank Name</p>
                <h2 className="text-xl font-black tracking-tight leading-tight">{bank.name}</h2>
              </div>
              <div className="bg-black/20 p-4 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] font-black uppercase opacity-60 mb-1">Dial This Code</p>
                <p className="text-2xl font-black font-mono tracking-tighter group-hover:tracking-widest transition-all">
                  {bank.code}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DRILL INSTRUCTIONS */}
        <div className="mt-16 bg-slate-900 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
            <svg width="200" height="200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-red-500 mb-8 uppercase tracking-tighter">Immediate Recovery Protocol:</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-4xl">🏃</span>
              <p className="font-bold text-lg">Act Fast</p>
              <p className="text-sm opacity-70">Scammers move money in minutes. Dial the code from any nearby phone immediately.</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl">🆔</span>
              <p className="font-bold text-lg">Verify ID</p>
              <p className="text-sm opacity-70">After dialing, the prompt will ask for your linked phone number to confirm your identity.</p>
            </div>
            <div className="space-y-2">
              <span className="text-4xl">🏦</span>
              <p className="font-bold text-lg">Visit Bank</p>
              <p className="text-sm opacity-70">Once blocked, go to your bank branch with your ID card to reactivate your account.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}