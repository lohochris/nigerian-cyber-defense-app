"use client"
import React from 'react'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto bg-white rounded-[3rem] p-8 md:p-16 shadow-sm border border-slate-100">
        <Link href="/" className="group text-blue-600 font-black mb-12 inline-flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-xs tracking-widest">
          ← Back house
        </Link>

        <header className="mb-12 border-b border-slate-100 pb-8">
          <h1 className="text-4xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Privacy Protocol</h1>
          <p className="text-slate-500 font-medium">Effective Date: March 2026</p>
        </header>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">1. Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              At **Project Guard**, we follow the principle of data minimization. We only collect:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Learning Progress:</strong> Stored locally on your device (localStorage) to track module completion.</li>
              <li><strong>Contact Information:</strong> Only if you voluntarily use our Contact Form (Name, Email).</li>
              <li><strong>Certificate Data:</strong> Your name is used solely to generate your PDF certificate and is not stored in our central database.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">2. How We Use Data</h2>
            <p className="text-slate-600 leading-relaxed">
              Your information is used strictly to provide the educational experience. We do not sell, trade, or leak your personal data to third-party advertisers. We are defenders, not data-miners.
            </p>
          </section>

          <section className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-xl font-black text-blue-900 uppercase tracking-tight mb-4">3. Local Storage Policy</h2>
            <p className="text-blue-800 leading-relaxed text-sm">
              We use <strong>Local Storage</strong> to remember which modules you have finished. This data stays on your computer. When you click "End Session" or "New Learner," this data is permanently wiped from your browser.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">4. Your Rights (NDPR)</h2>
            <p className="text-slate-600 leading-relaxed">
              In accordance with the <strong>Nigeria Data Protection Regulation (NDPR)</strong>, you have the right to access, delete, or restrict the use of your data. Since we store almost nothing centrally, you can exercise these rights simply by clearing your browser cache.
            </p>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-slate-100 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em]">
            Securing the Future, One Learner at a Time
          </p>
        </footer>
      </div>
    </main>
  )
}