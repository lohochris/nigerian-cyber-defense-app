"use client"
import React from 'react'
import Link from 'next/link'

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
        <Link href="/" className="group text-blue-600 font-black mb-12 inline-flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-xs tracking-widest text-[10px]">
          ← Back house
        </Link>

        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Terms of Deployment</h1>
          <p className="text-slate-500 font-medium">Standard Operating Procedures • v1.0</p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">1. Educational Intent</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Project Guard is an educational platform. The simulations, videos, and modules are designed to increase awareness of cyber-threats. Completion of this course does not guarantee 100% immunity from hackers, as threats evolve daily.
            </p>
          </section>

          <section className="bg-red-50 p-8 rounded-3xl border border-red-100">
            <h2 className="text-sm font-black text-red-900 uppercase tracking-widest mb-4">2. Limitation of Liability</h2>
            <p className="text-red-800 text-sm leading-relaxed font-medium">
              Project Guard and its creators are NOT responsible for any financial loss, data breach, or security incident that occurs on your personal accounts. We provide the "shield" (knowledge), but you are the "commander" responsible for wielding it.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">3. Prohibited Conduct</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Users may not attempt to reverse-engineer this lab, inject malicious code into the contact forms, or use the information provided here to perform illegal "hacking" activities. We build defenders, not attackers.
            </p>
          </section>

          <section>
            <h2 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">4. Certification Authenticity</h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Certificates issued by Project Guard are digital tokens of completion. They are not university degrees or government-mandated licenses. 
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}