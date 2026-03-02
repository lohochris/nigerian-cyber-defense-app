"use client"
import React from 'react'
import Link from 'next/link'

export default function WhatsAppStory() {
  const chatMessages = [
    { sender: "Scammer", text: "Good morning Ma. This is your first son, I lost my phone and this is my new number.", time: "08:15 AM", isScam: true },
    { sender: "You", text: "Ah! Junior, is that you? What happened to the old one?", time: "08:17 AM", isScam: false },
    { sender: "Scammer", text: "It fell in water Ma. Please, I need to pay for a delivery urgently, can you send 50k to this account? I will pay back today.", time: "08:18 AM", isScam: true },
  ];

  return (
    <main className="min-h-screen bg-[#ece5dd] pb-20">
      {/* Header */}
      <div className="bg-[#075e54] text-white p-4 sticky top-0 z-10 flex items-center gap-4">
        <Link href="/learning" className="text-xl">←</Link>
        <div className="w-10 h-10 bg-slate-300 rounded-full flex items-center justify-center text-slate-600 font-bold">J</div>
        <div>
          <h1 className="font-bold">Junior (My Son)</h1>
          <p className="text-xs opacity-80 text-white">Online</p>
        </div>
      </div>

      <div className="max-w-md mx-auto p-4 space-y-4">
        <div className="bg-[#fff3c7] p-3 rounded-lg text-xs text-center shadow-sm border border-yellow-200">
          Messages to this chat are now secured with end-to-end encryption.
        </div>

        {chatMessages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.isScam ? 'justify-start' : 'justify-end'}`}>
            <div className={`max-w-[80%] p-3 rounded-lg shadow-sm relative ${msg.isScam ? 'bg-white' : 'bg-[#dcf8c6]'}`}>
              <p className="text-sm text-slate-800">{msg.text}</p>
              <p className="text-[10px] text-slate-400 text-right mt-1">{msg.time}</p>
            </div>
          </div>
        ))}

        {/* The "Learning" Overlay */}
        <div className="mt-10 bg-white p-6 rounded-3xl shadow-xl border-t-4 border-blue-600">
          <h2 className="text-xl font-black text-blue-600 mb-2 uppercase italic">Wait First! / Hold On!</h2>
          <p className="text-slate-700 font-bold mb-4">Why this message be format?</p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">🚩 <strong>Sense of Urgency:</strong> Dem say "urgently" so you no go get time think.</li>
            <li className="flex gap-2">🚩 <strong>New Number:</strong> Scammers always talk say dem lose phone or get new line.</li>
            <li className="flex gap-2">🚩 <strong>Money Request:</strong> Once person ask for money for WhatsApp, call the person real number first!</li>
          </ul>
        </div>
      </div>

      {/* Action Bar */}
      <div className="fixed bottom-0 w-full bg-white p-4 flex gap-4 border-t">
        <button onClick={() => window.location.href='/learning'} className="flex-1 py-3 bg-slate-100 rounded-xl font-bold">Try Another</button>
        <button onClick={() => window.location.href='/audit'} className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold">Check My Safety</button>
      </div>
    </main>
  )
}