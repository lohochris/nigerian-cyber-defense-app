"use client"
import React, { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { 
  ShieldCheck, 
  GraduationCap, 
  Globe,
  Award,
  BookOpen,
  Fingerprint,
  Shield,
  Code2,
  Cpu,
  LucideIcon 
} from 'lucide-react'

/**
 * TYPESCRIPT INTERFACES
 */
interface Pillar {
  title: string;
  desc: string;
  icon: LucideIcon;
}

/**
 * PILLAR CARD COMPONENT
 */
const PillarCard = ({ icon: Icon, title, desc }: Pillar) => (
  <div className="group p-10 rounded-[2.5rem] bg-slate-50 border-2 border-transparent shadow-sm 
                  hover:shadow-2xl hover:border-blue-600 hover:bg-white transition-all duration-500">
    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 
                    group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-8">
      <Icon size={28} strokeWidth={2.5} />
    </div>
    <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight mb-4">{title}</h4>
    <p className="text-slate-500 leading-relaxed text-sm font-medium">{desc}</p>
  </div>
);

/**
 * HELPER BADGE COMPONENT
 * CORRECTED: Removed 'uppercase' class to allow 'Ph.D.' to render properly
 */
const Badge = ({ icon: Icon, text }: { icon: LucideIcon, text: string }) => (
  <div className="px-5 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
    <Icon size={16} className="text-blue-400" />
    <span className="text-[10px] font-black tracking-widest text-slate-200">{text}</span>
  </div>
);

export default function AboutPage() {
  const { lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    en: {
      tag: "Research & Development",
      intro: "Project Guard is a Human-Centered Cyber-Resilience Lab developed as a strategic research initiative. We bridge the critical awareness gap between rapidly evolving financial technology and the diverse populations that rely on it daily.",
      problemTitle: "The Challenge",
      problemBody: "In Nigeria, the transition to digital banking has moved faster than widespread digital literacy. Middle-aged professionals and elders (35-65+) are now the primary targets for social engineering, AI-driven voice clones, and unauthorized SIM swaps. Our research identifies these vulnerabilities and provides immediate, language-accessible countermeasures.",
      pillarsTitle: "Core Research Pillars",
      pillars: [
        { title: "Academic Rigor", desc: "Rooted in stochastic optimization and delay-time analysis, our methodology is backed by ongoing doctoral research at Bayero University Kano.", icon: GraduationCap },
        { title: "Social Impact", desc: "A cornerstone project of the 3MTT Cybersecurity Programme, specifically designed to protect the digital footprints of vulnerable citizens.", icon: Globe },
        { title: "Proactive Defense", desc: "We leverage modern cloud architectures to provide real-time security intelligence and sub-100ms access to emergency banking protocols.", icon: ShieldCheck }
      ],
      researcherTitle: "Lead Researcher Profile",
      researcherBio: "Loho Christopher Dondo is an academic professional and researcher specializing in Applied Mathematics, Software Development, Data Analytics and Cybersecurity. Currently, a Lecturer at Skyline University Nigeria and a Ph.D. candidate at Bayero University Kano, his work synthesizes mathematical modeling with human-centered digital security."
    },
    pidgin: {
      tag: "Correct Research Work",
      intro: "Project Guard na big research work to make sure say every Nigerian sabi how to defend dem self for internet. We dey build table for everybody to understand how to block thieves.",
      problemTitle: "The Wahala",
      problemBody: "As everyone dey use phone bank now, na so thieves dey find new way to craze. Many people wey don work hard (35-65 years) no really sabi the new-new format wey these bad boys dey use. Our work na to find where the problem dey and show everybody how to stop am sharp-sharp.",
      pillarsTitle: "Wetyn We Stand For",
      pillars: [
        { title: "Correct Schooling", desc: "This work no be play-play; e get deep mathematics and research from BUK Kano wey support am.", icon: GraduationCap },
        { title: "People First", desc: "Na 3MTT Cybersecurity program bring this idea, to help Nigerians keep dem account safe and protect dem identity.", icon: Globe },
        { title: "Fast Tech", desc: "We use modern cloud tech take build this system make e fast well-well. If emergency happen, you fit reach your bank code in less than one second.", icon: ShieldCheck }
      ],
      researcherTitle: "The Person Behind the Work",
      researcherBio: "Loho Christopher Dondo na teacher for Skyline University Nigeria and him dey do Ph.D for BUK. Him be graduate of eHA Academy, ALX Africa and 3MTT Cybersecurity, and him dey use mathematics, software development, data analytics join cybersecurity take protect Nigerians from bad people."
    }
  };

  const t = translations[lang as keyof typeof translations] || translations.en;

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white pb-20 selection:bg-blue-100 selection:text-blue-900">
      
      {/* HERO SECTION - Updated pt-28 to stay close to Navbar */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-24 px-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
            <Fingerprint size={12} className="text-blue-400" />
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-[5rem] font-black tracking-tighter mb-10 leading-[0.9] text-balance uppercase text-slate-900">
            Securing the <span className="text-blue-600">Digital Frontier</span> for Nigeria.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto text-center">
            {t.intro}
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-40">
            {/* THE CHALLENGE SECTION */}
            <div className="lg:sticky lg:top-32">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-8 flex items-center gap-3">
                <span className="w-12 h-[2px] bg-blue-600"></span> {t.problemTitle}
              </h2>
              <p className="text-lg md:text-xl text-slate-500 leading-loose text-justify font-medium [text-justify:inter-word]">
                {t.problemBody}
              </p>
            </div>
            
            {/* RESEARCH PILLARS */}
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">
                {t.pillarsTitle}
              </h2>
              {t.pillars.map((pillar, i) => (
                <PillarCard key={i} icon={pillar.icon} title={pillar.title} desc={pillar.desc} />
              ))}
            </div>
          </div>

          {/* ACADEMIC & SOFTWARE PROFILE CARD */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[4rem] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="relative bg-slate-900 rounded-[3.5rem] p-8 md:p-20 text-white overflow-hidden shadow-2xl border border-white/5">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-8 relative z-10 text-left">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 mb-10 flex items-center gap-3">
                    <Award size={18} /> {t.researcherTitle}
                  </h3>
                  
                  <p className="text-2xl md:text-3xl font-bold leading-snug mb-12 text-justify tracking-tight [text-justify:inter-word]">
                    {t.researcherBio}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <Badge icon={GraduationCap} text="Skyline University Faculty" />
                    <Badge icon={BookOpen} text="Ph.D. Candidate (BUK)" />
                    <Badge icon={Code2} text="eHA Academy Alum" />
                    <Badge icon={Cpu} text="ALX Africa Alum" />
                    
                    <div className="px-5 py-3 bg-blue-600 rounded-2xl flex items-center gap-3 shadow-lg shadow-blue-900/50 hover:bg-blue-500 transition-colors cursor-default">
                      <ShieldCheck size={16} />
                      <span className="text-[10px] font-black uppercase tracking-widest">3MTT Cybersecurity Alum</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 hidden lg:flex justify-end">
                  <div className="w-64 h-64 border-2 border-white/10 rounded-full flex items-center justify-center relative">
                    <div className="w-48 h-48 border border-blue-500/30 rounded-full animate-[spin_10s_linear_infinite] flex items-center justify-center">
                        <Shield size={60} className="text-blue-500/20" />
                    </div>
                    <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      <footer className="pt-20 text-center text-slate-400 text-[10px] font-black uppercase tracking-[0.5em]">
        Academic Intelligence • Project Guard 2026
      </footer>
    </main>
  );
}