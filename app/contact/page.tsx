"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';
import { 
  Mail, 
  MessageCircle, 
  ShieldCheck, 
  ChevronLeft, 
  Send, 
  AlertOctagon,
  LifeBuoy,
  LucideIcon
} from 'lucide-react';

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  // Formspree Integration
  const [state, handleSubmit] = useForm("xpqjgpyr");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      
      {/* HEADER SECTION - Consistent Radial Gradient */}
      <section className="pt-24 pb-16 px-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="group inline-flex items-center gap-2 text-blue-700 font-black mb-10 uppercase text-[10px] tracking-[0.3em] hover:opacity-70 transition-all cursor-pointer">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> 
            Back House
          </Link>

          <header className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
              Contact <span className="text-blue-600">Command</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
              Have a question or need to report a suspicious scam? 
              Reach out to the <span className="text-blue-600 font-bold">Guard Team</span> for technical assistance.
            </p>
          </header>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* LEFT COLUMN: DIRECT CHANNELS */}
          <div className="space-y-6">
            <div className="bg-slate-50 p-8 rounded-[2.5rem] border-2 border-transparent hover:border-slate-200 transition-all shadow-sm">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Direct Channels</p>
              
              <ContactLink 
                href="mailto:lohoinfortech@gmail.com"
                icon={Mail}
                title="Email"
                subtitle="Fast response"
                color="bg-blue-100 text-blue-600"
                hoverColor="group-hover:bg-blue-600"
              />

              <ContactLink 
                href="https://wa.me/+2348126000659"
                icon={MessageCircle}
                title="WhatsApp"
                subtitle="Instant Chat"
                color="bg-green-100 text-green-600"
                hoverColor="group-hover:bg-green-600"
              />
            </div>

            {/* URGENT HELP BOX - High Contrast */}
            <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <p className="text-[10px] font-black uppercase tracking-widest mb-3 text-blue-400 flex items-center gap-2">
                  <AlertOctagon size={12} /> Urgent Help
                </p>
                <h3 className="font-black text-xl leading-tight mb-3">Victim of a SIM Swap?</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-medium mb-6">
                  Contact your bank immediately and dial your bank's USSD emergency block code.
                </p>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                   <LifeBuoy size={20} className="text-white group-hover:rotate-45 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full"></div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-[3.5rem] shadow-2xl shadow-slate-100 border border-slate-100 relative">
              
              {state.succeeded ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-700">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <ShieldCheck size={40} strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Transmission Received</h2>
                  <p className="text-slate-500 mt-3 font-medium">A Cyber Guardian will review your request shortly.</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="mt-10 px-8 py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                      <input id="full-name" name="name" required type="text" 
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-5 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300" 
                        placeholder="Commander Name" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                      <input id="email" name="email" required type="email" 
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-5 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300" 
                        placeholder="email@hq.com" 
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-2 ml-4 font-black" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Subject</label>
                    <select id="reason" name="reason" 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-5 outline-none transition-all font-bold text-slate-900 appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Report a Scam/Fraud</option>
                      <option>Course Feedback</option>
                      <option>Partnership Proposal</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Intelligence Details</label>
                    <textarea id="message" name="message" required rows={5} 
                      className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-5 outline-none transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none" 
                      placeholder="Type your message here..."
                    ></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-2 ml-4 font-black" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={state.submitting} 
                    className="w-full bg-blue-600 text-white p-6 rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {state.submitting ? 'Transmitting...' : (
                      <>Transmit Message <Send size={16} strokeWidth={3} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
        Secure Communication Channel • Project Guard 2026
      </footer>
    </main>
  )
}

/**
 * REUSABLE CONTACT LINK COMPONENT
 */
const ContactLink = ({ href, icon: Icon, title, subtitle, color, hoverColor }: { 
  href: string, 
  icon: LucideIcon, 
  title: string, 
  subtitle: string, 
  color: string, 
  hoverColor: string 
}) => (
  <a href={href} target="_blank" rel="noopener noreferrer" 
     className="flex items-center gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all group cursor-pointer border border-transparent hover:border-slate-100 mb-2">
    <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center transition-all duration-300 ${hoverColor} group-hover:text-white group-hover:scale-110`}>
      <Icon size={20} strokeWidth={2.5} />
    </div>
    <div>
      <p className="text-sm font-black uppercase text-slate-900">{title}</p>
      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{subtitle}</p>
    </div>
  </a>
);