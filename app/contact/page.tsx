"use client"
import React from 'react'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';
// Import Lucide Icons
import { 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ChevronLeft, 
  Send, 
  AlertOctagon,
  LifeBuoy
} from 'lucide-react';

export default function ContactPage() {
  // Your Formspree ID is correctly integrated here
  const [state, handleSubmit] = useForm("xpqjgpyr");

  return (
    <main className="min-h-screen bg-slate-50 p-6 pt-32">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="group text-blue-600 font-black mb-8 inline-flex items-center gap-2 hover:translate-x-1 transition-transform uppercase text-xs tracking-widest">
          <ChevronLeft size={16} strokeWidth={3} /> Back house
        </Link>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Contact Command</h1>
          <p className="text-xl text-slate-500 font-medium">
            Have a question or need to report a suspicious scam? Reach out to the <span className="text-blue-600">Guard Team.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: QUICK LINKS */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Direct Channels</p>
              
              {/* FIXED EMAIL LINK */}
              <a href="mailto:lohoinfortech@gmail.com" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group cursor-pointer">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase">Email</p>
                  <p className="text-[10px] text-slate-500">Fast response</p>
                </div>
              </a>

              <a href="https://wa.me/+2348126000659" target="_blank" className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all">
                  <MessageCircle size={18} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase">WhatsApp</p>
                  <p className="text-[10px] text-slate-500">Instant Chat</p>
                </div>
              </a>
            </div>

            <div className="bg-blue-600 p-6 rounded-3xl text-white shadow-xl shadow-blue-200 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-80 flex items-center gap-2">
                  <AlertOctagon size={12} /> Urgent Help
                </p>
                <h3 className="font-black text-lg leading-tight mb-2">Victim of a SIM Swap?</h3>
                <p className="text-xs opacity-90 mb-4 font-medium">Contact your bank immediately and dial your bank's USSD emergency block code.</p>
              </div>
              <LifeBuoy size={80} className="absolute -bottom-4 -right-4 opacity-10 rotate-12" />
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="md:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden">
              {state.succeeded ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShieldCheck size={40} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Message Transmitted!</h2>
                  <p className="text-slate-500 mt-2">A Cyber Guardian will review your request shortly.</p>
                  <button onClick={() => window.location.reload()} className="mt-8 text-blue-600 font-bold uppercase text-[10px] tracking-widest border-b-2 border-blue-600">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="full-name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">Full Name</label>
                      <input id="full-name" name="name" required type="text" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-300" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">Email Address</label>
                      <input id="email" name="email" required type="email" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-300" placeholder="john@example.com" />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-2 font-bold" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="reason" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">Reason for Contact</label>
                    <select id="reason" name="reason" className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-slate-900 appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Report a Scam/Fraud</option>
                      <option>Course Feedback</option>
                      <option>Partnership Proposal</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 ml-2">Your Message</label>
                    <textarea id="message" name="message" required rows={4} className="w-full bg-slate-50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-600 transition-all font-medium text-slate-900 placeholder:text-slate-300" placeholder="Tell us more..."></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1 ml-2 font-bold" />
                  </div>

                  <button type="submit" disabled={state.submitting} className="w-full bg-blue-600 text-white p-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all shadow-lg active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3">
                    {state.submitting ? 'Transmitting...' : (
                      <>
                        Transmit Message <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}