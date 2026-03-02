"use client"
import React, { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Confetti from 'react-confetti'
import { Dancing_Script, Inter, Montserrat } from 'next/font/google'

const handwriting = Dancing_Script({ subsets: ['latin'], weight: ['700'] })
const sans = Inter({ subsets: ['latin'], weight: ['400', '700', '900'] })
const display = Montserrat({ subsets: ['latin'], weight: ['900'] })

function CertificateContent() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [currentDate, setCurrentDate] = useState("");
  const [copied, setCopied] = useState(false);
  const [certId, setCertId] = useState("");
  const searchParams = useSearchParams();
  const userName = searchParams.get('name') || "Cyber Commander";

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setCurrentDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
    
    const hash = userName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    setCertId(`NG-PRJ-GARD-${hash}-${Math.floor(1000 + Math.random() * 9000)}`);
  }, [userName]);

  const handleDownload = () => window.print();

  const handleShare = (platform: 'whatsapp' | 'linkedin' | 'twitter' | 'facebook') => {
    const baseUrl = `${window.location.origin}/learning`;
    const message = `🛡️ I am officially a Certified Cyber-Commander! I've mastered the defense against AI Voice Scams and SIM Swaps. \n\nVerify my credential or get certified here: ${baseUrl}`;
    
    const urls = {
      whatsapp: `https://wa.me/?text=${encodeURIComponent(message)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(baseUrl)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(baseUrl)}`
    };
    
    window.open(urls[platform], '_blank', 'noreferrer,noopener');
  };

  return (
    <main className={`min-h-screen bg-[#0a0c10] flex flex-col items-center justify-center p-4 md:p-8 print:bg-white print:p-0 ${sans.className}`}>
      <div className="print:hidden">
        <Confetti width={windowSize.width} height={windowSize.height} recycle={false} numberOfPieces={400} />
      </div>

      {/* A4 LANDSCAPE CALIBRATED CONTAINER */}
      <div className="relative group w-full max-w-[1123px] aspect-[1.414/1] print:max-w-none print:aspect-auto">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg blur opacity-10 print:hidden"></div>
        
        <div id="certificate" className="relative bg-white h-full shadow-2xl print:shadow-none p-1 md:p-2">
          {/* OUTER FRAME */}
          <div className="border-[12px] border-[#f8fafc] h-full relative">
            <div className="border-[1px] border-[#e2e8f0] h-full p-6 md:p-12 text-center flex flex-col items-center justify-between relative overflow-hidden">
              
              {/* WATERMARK */}
              <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none flex flex-wrap gap-8 rotate-[-15deg] scale-110">
                {Array(30).fill("PROJECT GUARD SECURE").map((t, i) => (
                  <span key={i} className="text-lg font-black whitespace-nowrap">{t}</span>
                ))}
              </div>

              {/* TOP BRANDING */}
              <div className="w-full flex justify-between items-center relative z-10">
                <div className="text-left">
                  <div className="text-blue-600 font-black text-lg tracking-tighter leading-none">PROJECT<br/>GUARD</div>
                  <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">Intervention Lab</div>
                </div>
                
                <div className="relative w-20 h-20 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-600 rounded-full shadow-md flex items-center justify-center border-2 border-white">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-3 h-8 bg-blue-700 clip-path-ribbon"></div>
                    <div className="w-3 h-8 bg-blue-800 clip-path-ribbon"></div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-slate-900 font-black text-lg tracking-tighter leading-none underline decoration-blue-600">2026</div>
                  <div className="text-[7px] font-bold uppercase tracking-[0.2em] text-slate-400 mt-1">Verified Digital Asset</div>
                </div>
              </div>

              {/* CENTER CONTENT */}
              <div className="relative z-10 flex-1 flex flex-col justify-center py-4">
                <h3 className="text-blue-600 font-black uppercase tracking-[0.4em] text-[9px] mb-4">Defense Intelligence & Resilience Certification</h3>
                
                <h1 className={`${display.className} text-4xl md:text-5xl text-slate-900 mb-6 tracking-tight uppercase leading-none`}>
                  Certificate <span className="font-serif italic text-3xl lowercase font-light opacity-50">of</span> Completion
                </h1>

                <p className="text-slate-400 font-medium italic text-sm mb-2">This official document confirms that</p>

                <div className="relative inline-block mb-6">
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter relative z-10 px-4">
                    {userName}
                  </h2>
                  <div className="absolute bottom-1 left-0 w-full h-3 bg-blue-50 -rotate-1 z-0"></div>
                </div>

                <p className="text-slate-600 max-w-xl mx-auto leading-relaxed text-xs md:text-sm font-medium">
                  Has demonstrated superior proficiency in mitigating modern cyber threats, specifically 
                  mastering defenses against <strong>SIM-Swap fraud, AI Voice cloning, and social engineering</strong>.
                </p>
              </div>

              {/* FOOTER SECTION */}
              <div className="grid grid-cols-3 w-full gap-4 pt-6 border-t border-slate-100 relative z-10 items-end">
                <div className="flex flex-col items-center">
                  <p className={`${handwriting.className} text-3xl text-slate-800 h-8`}>Cyber Guardian</p>
                  <div className="w-32 border-b border-slate-900 mt-1"></div>
                  <p className="text-[7px] font-black uppercase tracking-widest text-slate-400 mt-2">Chief Security Officer</p>
                </div>

                <div className="flex flex-col items-center pb-1">
                   <div className="bg-slate-50 px-3 py-2 rounded border border-slate-100 text-center">
                      <p className="font-mono text-slate-400 text-[7px] uppercase tracking-tight">Credential ID</p>
                      <p className="font-mono text-slate-900 text-[8px] font-bold">{certId}</p>
                   </div>
                </div>

                <div className="flex flex-col items-center">
                  <p className="font-black text-slate-900 text-base h-8 flex items-center">{currentDate}</p>
                  <div className="w-32 border-b border-slate-900 mt-1"></div>
                  <p className="text-[7px] font-black uppercase tracking-widest text-slate-400 mt-2">Date of Issue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ACTION TRAY */}
      <div className="mt-8 w-full max-w-2xl flex flex-col gap-6 print:hidden">
        <div className="flex gap-4">
          <button onClick={handleDownload} className="flex-1 px-6 py-4 bg-white text-slate-900 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all shadow-lg">
              📥 Download (A4 PDF)
          </button>
          <button 
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            className={`flex-1 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all border-2 ${copied ? 'bg-green-500 border-green-500 text-white' : 'border-slate-800 text-slate-400 hover:text-white'}`}
          >
            {copied ? '✅ Link Copied' : '🔗 Copy Share Link'}
          </button>
        </div>

        <div className="flex items-center justify-between bg-slate-900/50 p-4 rounded-2xl border border-white/5">
          <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Broadcast Credential:</p>
          <div className="flex gap-3">
            <SocialBtn type="whatsapp" onClick={() => handleShare('whatsapp')} />
            <SocialBtn type="facebook" onClick={() => handleShare('facebook')} />
            <SocialBtn type="linkedin" onClick={() => handleShare('linkedin')} />
            <SocialBtn type="twitter" onClick={() => handleShare('twitter')} />
          </div>
        </div>

        {/* UPDATED LINK: Clears progress for next learner */}
        <Link 
          href="/learning?new=true" 
          className="mx-auto text-slate-600 font-bold uppercase text-[9px] tracking-[0.3em] hover:text-blue-500 transition-all text-center"
        >
          ← Return to Command Center & End Session
        </Link>
      </div>

      <style jsx global>{`
        .clip-path-ribbon { clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 80%, 0% 100%); }
        @media print {
          @page { size: landscape; margin: 0; }
          body { background: white !important; }
          main { padding: 0 !important; background: white !important; justify-content: flex-start !important; }
        }
      `}</style>
    </main>
  )
}

function SocialBtn({ type, onClick }: { type: string, onClick: () => void }) {
  const brands: any = {
    whatsapp: { color: '#25D366', icon: <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.553 4.197 1.603 6.02L0 24l6.135-1.61a11.796 11.796 0 005.91 1.586h.005c6.635 0 12.049-5.415 12.05-12.052a11.772 11.772 0 00-3.689-8.523" /> },
    facebook: { color: '#1877F2', icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /> },
    linkedin: { color: '#0077B5', icon: <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> },
    twitter: { color: '#000000', icon: <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z" /> }
  };

  return (
    <button onClick={onClick} className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110 active:scale-95" style={{ backgroundColor: brands[type].color }}>
      <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">{brands[type].icon}</svg>
    </button>
  );
}

export default function CompletionCertificate() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0c10] flex items-center justify-center text-blue-500 font-black uppercase tracking-[1em] animate-pulse">Initializing Credential...</div>}>
      <CertificateContent />
    </Suspense>
  )
}