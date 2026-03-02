"use client"
import React from 'react'
import Link from 'next/link'

export default function ReportPage() {
  const agencies = [
    {
      name: "EFCC (Cybercrime Unit)",
      desc: "For cases of bank fraud, wire transfer scams, and 'Yahoo' boy activities.",
      action: "Report via Eagle Eye App",
      link: "https://www.efcc.gov.ng/",
      color: "border-red-600 text-red-600"
    },
    {
      name: "NCC (Telecoms Issues)",
      desc: "For reporting fraudulent SMS, SIM card cloning, or annoying scam calls.",
      action: "Dial 622 (Toll Free)",
      link: "https://www.ncc.gov.ng/",
      color: "border-blue-600 text-blue-600"
    },
    {
      name: "INTERPOL Nigeria",
      desc: "For international scams or high-level digital identity theft.",
      action: "Visit Cybercrime Portal",
      link: "https://incp.npf.gov.ng/",
      color: "border-slate-800 text-slate-800"
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 pb-20">
      <div className="max-w-3xl mx-auto">
        
        <Link href="/" className="text-blue-600 font-bold mb-6 inline-block hover:underline">
          ← Back to Home / Back house
        </Link>

        <header className="mb-10 text-center">
          <h1 className="text-4xl font-black text-slate-900 mb-2 uppercase italic">Report Person / Report Scam</h1>
          <p className="text-slate-600">"No keep quiet. Talk so dem go fit catch dem."</p>
        </header>

        <div className="space-y-6">
          {agencies.map((agency, index) => (
            <div key={index} className="bg-white p-8 rounded-[2.5rem] shadow-lg border-t-8 border-slate-200">
              <h2 className={`text-2xl font-black mb-2 uppercase ${agency.color.split(' ')[1]}`}>
                {agency.name}
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {agency.desc}
              </p>
              
              <div className={`border-2 rounded-2xl p-4 inline-block font-bold ${agency.color} hover:bg-slate-50 transition-all cursor-pointer`}>
                <a href={agency.link} target="_blank" rel="noopener noreferrer">
                  {agency.action} →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-yellow-100 p-8 rounded-[2rem] border-2 border-yellow-400">
          <h3 className="font-bold text-yellow-800 mb-2">💡 Quick Tip for Evidence:</h3>
          <p className="text-yellow-700 text-sm leading-relaxed">
            Before you delete the chat or block the person, <strong>take a screenshot</strong>. Save the person's phone number and the bank account they asked you to pay into. This is the evidence the police will need.
          </p>
        </div>
      </div>
    </main>
  )
}