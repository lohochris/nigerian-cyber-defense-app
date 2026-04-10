"use client"
import React, { useEffect, useState, Suspense, useRef } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Confetti from 'react-confetti'
import { Dancing_Script, Inter, Montserrat } from 'next/font/google'
import { 
  ShieldCheck, 
  Download, 
  Award, 
  Fingerprint, 
  ArrowLeft,
  BadgeCheck,
  Loader2,
  Facebook,
  Linkedin,
  Twitter,
  MessageCircle
} from 'lucide-react'
import jsPDF from 'jspdf'
import { domToCanvas } from 'modern-screenshot'

const handwriting = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const sans = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] })
const display = Montserrat({ subsets: ['latin'], weight: ['900'] })

function CertificateContent() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [currentDate, setCurrentDate] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);
  const [certId, setCertId] = useState("");
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || "Cyber Commander";
  
  const certificateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateSize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', updateSize);
    updateSize();
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    
    const hash = userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    setCertId(`NCR-HUB-${hash}-${Math.floor(1000 + (hash % 8999))}`);
    return () => window.removeEventListener('resize', updateSize);
  }, [userName]);

  const handleDownloadPDF = async () => {
    if (!certificateRef.current) return;
    setIsDownloading(true);

    try {
      const canvas = await domToCanvas(certificateRef.current, {
        scale: 2, 
        backgroundColor: "#ffffff",
        width: 1000,
        height: 707
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);
      pdf.save(`Certificate_${userName.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error("PDF Generation failed", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <main className={`min-h-screen bg-[#0a0c10] flex flex-col items-center py-12 px-4 ${sans.className}`}>
      <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={200} gravity={0.1} />

      <div className="w-full max-w-[1000px] overflow-hidden flex justify-center items-center py-8">
        <div className="origin-center transition-transform duration-500" 
             style={{ 
               transform: windowSize.width < 1000 ? `scale(${(windowSize.width - 40) / 1000})` : 'scale(1)',
               width: '1000px',
               height: '707px'
             }}>
          
          <div 
            ref={certificateRef}
            className="relative bg-white w-[1000px] h-[707px] shadow-2xl p-4 rounded-sm overflow-hidden"
          >
            {/* Watermark */}
            <div className="absolute inset-0 pointer-events-none select-none flex flex-wrap gap-8 rotate-[-25deg] scale-150 z-0 opacity-[0.02]">
               {Array(30).fill("PROJECT GUARD INTERVENTION LAB").map((t, i) => (
                 <span key={i} className="text-[10px] font-black whitespace-nowrap tracking-[0.5em] text-slate-900">{t}</span>
               ))}
            </div>

            <div className="border-[16px] border-slate-50 h-full relative z-10">
              <div className="border-[1px] border-slate-200 h-full p-10 text-center flex flex-col items-center bg-white relative">
                
                {/* Header Section */}
                <div className="w-full flex justify-between items-start mb-10">
                  <div className="text-left flex items-center gap-4">
                    <div className="p-3 bg-slate-900 rounded-xl text-white">
                      <ShieldCheck size={32} />
                    </div>
                    <div>
                      <div className="text-slate-900 font-black text-2xl tracking-tighter leading-none uppercase">Project Guard</div>
                      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mt-1">Intervention Lab</div>
                    </div>
                  </div>
                  
                  <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center border-[6px] border-slate-50 shadow-xl">
                     <Award size={48} className="text-blue-500" />
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 justify-end text-blue-600 mb-1">
                      <BadgeCheck size={18} />
                      <span className="font-black text-sm tracking-tighter uppercase">Verified Credential</span>
                    </div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">Secure Digital<br/>Academic Record</div>
                  </div>
                </div>

                {/* Main Body - Fixed Spacing to Prevent Overlap */}
                <div className="w-full pt-4">
                  <h3 className="text-blue-600 font-black uppercase tracking-[0.6em] text-[11px] mb-8">Professional Readiness Certification</h3>
                  
                  <h1 className={`${display.className} text-5xl text-slate-900 uppercase leading-none tracking-tighter mb-10`}>
                    Certificate <span className="font-light opacity-30 px-1 tracking-normal">of</span> Completion
                  </h1>
                  
                  <p className="text-slate-400 font-black text-[11px] mb-6 uppercase tracking-[0.4em]">This academic record confirms that</p>
                  
                  <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-10 border-b-2 border-slate-100 pb-2 px-12 inline-block">
                    {userName}
                  </h2>
                  
                  <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm font-bold uppercase tracking-tight mb-12">
                    Has successfully completed the advanced simulation for modern cyber threat mitigation, demonstrating mastery in <span className="text-blue-600">SIM-Swap Fraud Defense</span> and <span className="text-blue-600">Social Engineering Resistance Protocols</span>.
                  </p>
                </div>

                {/* Footer Signatures - Pushed to Bottom */}
                <div className="absolute bottom-10 left-10 right-10 grid grid-cols-3 gap-12 pt-8 border-t border-slate-100 items-end">
                  <div className="flex flex-col items-center">
                    <p className={`${handwriting.className} text-4xl text-slate-800 h-10`}>Naija Cyber Hub</p>
                    <div className="w-40 border-b-2 border-slate-900 mt-1" />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mt-3">Directorate of Security</p>
                  </div>
                  
                  <div className="flex flex-col items-center pb-2">
                     <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 flex items-center gap-3">
                        <Fingerprint size={16} className="text-blue-600" />
                        <p className="font-mono text-slate-900 text-[11px] font-black tracking-widest">{certId}</p>
                     </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <p className="font-black text-slate-900 text-lg tracking-tighter uppercase">{currentDate}</p>
                    <div className="w-40 border-b-2 border-slate-900 mt-1" />
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 mt-3">Date of Issuance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION CONTROLS */}
      <div className="w-full max-w-xl flex flex-col gap-6 mt-4">
        <button 
          onClick={handleDownloadPDF} 
          disabled={isDownloading} 
          className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-blue-600/20 cursor-pointer"
        >
          {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Download size={18} />}
          {isDownloading ? 'Finalizing Security Doc...' : 'Download Official PDF'}
        </button>

        <div className="grid grid-cols-4 gap-4">
           <SocialBtn icon={<MessageCircle size={20} />} color="#25D366" />
           <SocialBtn icon={<Linkedin size={20} />} color="#0077B5" />
           <SocialBtn icon={<Twitter size={20} />} color="#000000" />
           <SocialBtn icon={<Facebook size={20} />} color="#1877F2" />
        </div>

        <Link href="/learning" className="mx-auto flex items-center gap-2 text-slate-600 font-black uppercase text-[10px] tracking-[0.3em] hover:text-white transition-colors">
          <ArrowLeft size={14} /> Return to Command Center
        </Link>
      </div>
    </main>
  );
}

function SocialBtn({ icon, color }: { icon: React.ReactNode, color: string }) {
  return (
    <button className="h-14 rounded-xl flex items-center justify-center text-white transition-all hover:scale-105 cursor-pointer shadow-lg" style={{ backgroundColor: color }}>
      {icon}
    </button>
  );
}

export default function CompletionCertificate() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0c10] flex items-center justify-center text-white text-xs font-black uppercase tracking-widest">Loading Security Credential...</div>}>
      <CertificateContent />
    </Suspense>
  )
}