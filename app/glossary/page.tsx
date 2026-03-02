"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function GlossaryPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const terms = [
    {
      word: "2FA (Two-Factor Authentication)",
      pidgin: "Double-Lock Security",
      meaning: "A security layer where you need two things to login: your password AND a code sent to your phone. It's like having a key and a padlock on one door.",
      context: "Always turn this on for WhatsApp and Facebook."
    },
    {
      word: "BVN (Bank Verification Number)",
      pidgin: "Your Bank Identity",
      meaning: "Your unique 11-digit biometric ID. Scammers want this so they can 'map' all your bank accounts.",
      context: "Never give your BVN to anyone over the phone, even if they claim to be from the CBN."
    },
    {
      word: "Format",
      pidgin: "The Scammer's Script",
      meaning: "The specific lie or story a scammer uses to deceive you (e.g., 'The NNPC Job Format' or 'The Fake DNA Format').",
      context: "If a story sounds too good or too scary, it's likely a format."
    },
    {
      word: "Mugu / Maga",
      pidgin: "The Victim",
      meaning: "A person who has been successfully 'formatted' or deceived by a scammer.",
      context: "Our goal is to ensure you sabi the game so you no go fall mugu."
    },
    {
      word: "OTP (One-Time Password)",
      pidgin: "Security Token / Alert Code",
      meaning: "A short 6-digit code sent to your SMS to authorize a transaction. It expires in minutes.",
      context: "This is the final key to your money. If you give a scammer your OTP, they can empty your account instantly."
    },
    {
      word: "Phishing",
      pidgin: "Throwing Hook (Fake Links)",
      meaning: "When scammers send you a fake link (via SMS or Email) that looks like a bank login page to steal your password.",
      context: "Look at the link well. If it says 'gtbank-login.biz' instead of 'gtbank.com', na hook dem throw so."
    },
    {
      word: "Social Engineering",
      pidgin: "Sweet-Mouth / Psychological Wash",
      meaning: "The art of manipulating people into giving up confidential info. It's 'hacking' the person instead of the computer.",
      context: "Scammers use fear (urgency) or greed (free money) to do this."
    },
    {
      word: "Smishing",
      pidgin: "SMS Scams",
      meaning: "Scams that happen through text messages, like fake bank alerts or fake job offers.",
      context: "Always verify SMS info by calling your bank's official number."
    },
    {
      word: "Vishing",
      pidgin: "Voice Call Scams",
      meaning: "Scams that happen over a phone call where the person pretends to be an official (Bank Staff, Customs, etc.).",
      context: "If they ask for secrets on a call, hang up."
    }
  ];

  const filteredTerms = terms.filter(t => 
    t.word.toLowerCase().includes(searchTerm.toLowerCase()) || 
    t.pidgin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HEADER */}
      <header className="bg-blue-700 text-white p-10 md:p-20 rounded-b-[3rem] shadow-xl">
        <div className="max-w-5xl mx-auto">
          <button onClick={() => router.push('/')} className="mb-6 font-bold opacity-80 hover:opacity-100 transition-opacity">
            ← Back to Hub
          </button>
          <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter">Cyber Dictionary</h1>
          <p className="text-xl font-medium opacity-90 max-w-2xl">
            Understand the grammar. No let dem use "big phonetics" take format your brain.
          </p>
        </div>
      </header>

      {/* SEARCH SECTION */}
      <section className="max-w-5xl mx-auto p-6 md:p-10">
        <div className="relative -mt-16 md:-mt-24 mb-12">
          <input 
            type="text" 
            placeholder="Search a word (e.g. OTP, Format, Phishing)..."
            className="w-full p-6 md:p-8 rounded-[2rem] border-4 border-blue-100 shadow-2xl outline-none focus:border-blue-500 text-xl font-bold transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* GLOSSARY GRID */}
        <div className="grid gap-6">
          {filteredTerms.map((item, index) => (
            <div key={index} className="group bg-slate-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-blue-500 hover:bg-white transition-all shadow-sm hover:shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <h2 className="text-2xl font-black text-blue-700 uppercase tracking-tight">{item.word}</h2>
                <span className="bg-blue-100 text-blue-800 text-xs font-black px-4 py-2 rounded-full uppercase tracking-widest">
                  Pidgin: {item.pidgin}
                </span>
              </div>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                {item.meaning}
              </p>
              <div className="bg-white p-4 rounded-2xl border border-slate-200">
                <p className="text-sm font-bold text-slate-500 italic">
                  <span className="text-blue-600 not-italic">Pro Tip:</span> {item.context}
                </p>
              </div>
            </div>
          ))}
          
          {filteredTerms.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl font-bold text-slate-400">Word no dey our dictionary yet...</p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER CALL TO ACTION */}
      <footer className="max-w-5xl mx-auto p-10 text-center">
        <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Knowledge is Power</p>
        <button 
          onClick={() => router.push('/learning')}
          className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-blue-600 transition-all shadow-lg"
        >
          GO TO LEARNING LAB
        </button>
      </footer>
    </main>
  )
}