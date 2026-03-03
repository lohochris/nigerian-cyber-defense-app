"use client"
import React, { useEffect, useState, Suspense, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Confetti from 'react-confetti'
import { Dancing_Script, Inter, Montserrat } from 'next/font/google'
import { 
  ShieldCheck, 
  Download, 
  Copy, 
  Check, 
  Share2, 
  Award, 
  Fingerprint, 
  ArrowLeft,
  Verified,
  Loader2
} from 'lucide-react'
import jsPDF from 'jspdf'
import { domToCanvas } from 'modern-screenshot'

const handwriting = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const sans = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] })
const display = Montserrat({ subsets: ['latin'], weight: ['900'] })

function CertificateContent() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [currentDate, setCurrentDate] = useState("");
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [certId, setCertId] = useState("");
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || "Cyber Commander";
  
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    
    // MATCHED LOGIC: Calculating hash and ID exactly like the verify page
    const hash = userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const generatedId = `NCR-HUB-${hash}-${Math.floor(1000 + (hash % 8999))}`;
    setCertId(generatedId);
  }, [userName]);

  const getVerifyUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/verify?name=${encodeURIComponent(userName)}`;
    }
    return "";
  };

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);

    try {
      const canvas = await domToCanvas(certificateRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      pdf.save(`Certificate_${userName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed", error);
      alert("Render failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShare = (platform: 'whatsapp' | 'linkedin') => {
    const verifyUrl = getVerifyUrl();
    const message = `🛡️ I am officially a Certified Cyber-Commander! Verify my credential here: ${verifyUrl}`;
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(verifyUrl)}`,
    };
    window.open(urls[platform], '_blank', 'noreferrer,noopener');
  };

  const copyVerifyLink = () => {
    navigator.clipboard.writeText(getVerifyUrl());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className={`min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center p-4 md:p-8 ${sans.className}`}>
      <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={300} gravity={0.12} />

      <div className="relative w-full max-w-[1000px] aspect-[1.414/1]">
        <div className="absolute -inset-1 bg-blue-600/20 rounded-xl blur-lg"></div>
        
        <div 
          ref={certificateRef}
          className="relative bg-white h-full shadow-2xl p-1 md:p-3 rounded-sm overflow-hidden"
          style={{ backgroundColor: '#ffffff' }}
        >
          {/* Watermark */}
          <div className="absolute inset-0 pointer-events-none select-none flex flex-wrap gap-12 rotate-[-25deg] scale-125 z-0 opacity-5">
             {Array(30).fill("NAIJA CYBER HUB").map((t, i) => (
               <span key={i} className="text-[10px] font-black whitespace-nowrap tracking-widest text-slate-900">{t}</span>
             ))}
          </div>

          <div className="border-[12px] border-slate-50 h-full relative z-10">
            <div className="border-[1px] border-slate-200 h-full p-8 md:p-12 text-center flex flex-col items-center justify-between relative bg-white">
              <div className="w-full flex justify-between items-start">
                <div className="text-left flex items-center gap-2">
                  <div className="p-1.5 bg-blue-600 rounded text-white" style={{backgroundColor: '#2563eb'}}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <div className="text-slate-900 font-black text-lg tracking-tighter leading-none uppercase">Project Guard</div>
                    <div className="text-[7px] font-bold uppercase tracking-[0.3em] text-blue-600 mt-1" style={{color: '#2563eb'}}>Intervention Lab</div>
                  </div>
                </div>
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center border-4 border-white shadow-sm" style={{backgroundColor: '#eab308'}}>
                   <Award size={40} className="text-white" />
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1.5 justify-end text-blue-600 mb-1" style={{color: '#2563eb'}}>
                    <Verified size={14} />
                    <span className="font-black text-sm tracking-tighter uppercase">Verified</span>
                  </div>
                  <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-400 leading-tight">Authentic Digital<br/>Credential</div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-center py-4">
                <h3 className="text-blue-600 font-black uppercase tracking-[0.5em] text-[9px] mb-6" style={{color: '#2563eb'}}>Credential of Professional Readiness</h3>
                <h1 className={`${display.className} text-4xl md:text-5xl text-slate-900 mb-8 uppercase leading-none`}>
                  Certificate <span className="font-serif italic text-2xl lowercase font-light opacity-40 px-1">of</span> Completion
                </h1>
                <p className="text-slate-400 font-medium italic text-xs mb-3 uppercase tracking-widest">This document certifies that</p>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">
                    {userName}
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-xs md:text-sm font-medium mt-6">
                  Has successfully completed the advanced simulation for modern cyber threat mitigation, 
                  demonstrating mastery in <span className="text-blue-600 font-bold" style={{color: '#2563eb'}}>SIM-Swap Fraud Defense</span> and 
                  <span className="text-blue-600 font-bold" style={{color: '#2563eb'}}> Social Engineering Resistance</span>.
                </p>
              </div>

              <div className="grid grid-cols-3 w-full gap-6 pt-8 border-t border-slate-100 items-end">
                <div className="flex flex-col items-center">
                  <p className={`${handwriting.className} text-3xl text-slate-800 h-8`}>Naija Cyber Hub</p>
                  <div className="w-32 border-b border-slate-900 mt-1" />
                  <p className="text-[7px] font-black uppercase tracking-widest text-slate-400 mt-2">Directorate of Security</p>
                </div>
                <div className="flex flex-col items-center pb-1">
                   <div className="bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100 flex items-center gap-2" style={{backgroundColor: '#f8fafc'}}>
                      <Fingerprint size={10} className="text-blue-600" style={{color: '#2563eb'}} />
                      <p className="font-mono text-slate-900 text-[9px] font-bold tracking-tight">{certId}</p>
                   </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-black text-slate-900 text-sm">{currentDate}</p>
                  <div className="w-32 border-b border-slate-900 mt-1" />
                  <p className="text-[7px] font-black uppercase tracking-widest text-slate-400 mt-2">Date Issued</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full max-w-2xl flex flex-col gap-6">
        <div className="flex gap-4">
          <button 
            onClick={handleDownloadPDF} 
            disabled={isDownloading}
            className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isDownloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
            {isDownloading ? 'Generating PDF...' : 'Download PDF Certificate'}
          </button>
          <button 
            onClick={copyVerifyLink}
            className={`flex-1 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border-2 flex items-center justify-center gap-2 ${copied ? 'bg-green-500 border-green-500 text-white' : 'bg-white border-slate-800 text-slate-800 hover:bg-slate-50'}`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Link Copied' : 'Copy Verify Link'}
          </button>
        </div>

        <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <Share2 size={16} className="text-blue-400" />
             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Share Credential:</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => handleShare('whatsapp')} className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 transition-transform hover:scale-125"><Share2 size={14} className="text-white" /></button>
            <button onClick={() => handleShare('linkedin')} className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 transition-transform hover:scale-125"><Share2 size={14} className="text-white" /></button>
          </div>
        </div>

        <Link href="/learning?new=true" className="mx-auto flex items-center gap-2 text-slate-500 font-bold uppercase text-[9px] tracking-[0.3em] hover:text-blue-500">
          <ArrowLeft size={12} /> Return to Command Center
        </Link>
      </div>
    </main>
  )
}

export default function CompletionCertificate() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CertificateContent />
    </Suspense>
  )
}