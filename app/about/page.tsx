"use client"
import React from 'react'
import { useLanguage } from '../context/LanguageContext'
import { 
  ShieldCheck, 
  BarChart3, 
  GraduationCap, 
  Globe,
  Award,
  BookOpen,
  Fingerprint,
  Shield 
} from 'lucide-react'

export default function AboutPage() {
  const { lang } = useLanguage();

  const translations = {
    en: {
      tag: "Research & Development",
      title: "Securing the Digital Frontier for Every Nigerian.",
      intro: "Project Guard is a Human-Centered Cyber-Resilience Lab developed as a strategic research initiative. We bridge the critical awareness gap between rapidly evolving financial technology and the diverse populations that rely on it daily.",
      problemTitle: "The Challenge",
      problemBody: "In Nigeria, the transition to digital banking has moved faster than widespread digital literacy. Middle-aged professionals and elders (35-65+) are now the primary targets for social engineering, AI-driven voice clones, and unauthorized SIM swaps. Our research identifies these vulnerabilities and provides immediate, language-accessible countermeasures.",
      pillarsTitle: "Core Research Pillars",
      pillars: [
        { 
          title: "Academic Rigor", 
          desc: "Rooted in stochastic optimization and delay-time analysis, our methodology is backed by ongoing doctoral research at Bayero University Kano.",
          icon: <GraduationCap size={28} />
        },
        { 
          title: "Social Impact", 
          desc: "A cornerstone project of the 3MTT Cybersecurity Programme, specifically designed to protect the digital footprints of vulnerable citizens.",
          icon: <Globe size={28} />
        },
        { 
          title: "Proactive Defense", 
          desc: "We leverage modern cloud architectures to provide real-time security intelligence and sub-100ms access to emergency banking protocols.",
          icon: <ShieldCheck size={28} />
        }
      ],
      researcherTitle: "Lead Researcher Profile",
      researcherBio: "Loho Christopher Dondo is an academic professional and researcher specializing in Applied Mathematics and Cybersecurity. Currently an Assistant Lecturer at Skyline University Nigeria and a Ph.D. candidate at Bayero University Kano, his work synthesizes mathematical modeling with human-centered digital security to create practical, life-saving technology."
    },
    pidgin: {
      tag: "Correct Research Work",
      title: "We Dey Protect Your Sweat and Your Money.",
      intro: "Project Guard na big research work to make sure say every Nigerian sabi how to defend dem self for internet. We dey build table for everybody to understand how to block thieves.",
      problemTitle: "The Wahala",
      problemBody: "As everyone dey use phone bank now, na so thieves dey find new way to craze. Many people wey don work hard (35-65 years) no really sabi the new-new format wey these bad boys dey use. Our work na to find where the problem dey and show everybody how to stop am sharp-sharp.",
      pillarsTitle: "Wetyn We Stand For",
      pillars: [
        { 
          title: "Correct Schooling", 
          desc: "This work no be play-play; e get deep mathematics and research from BUK Kano wey support am.",
          icon: <GraduationCap size={28} />
        },
        { 
          title: "People First", 
          desc: "Na 3MTT Cybersecurity program bring this idea, to help Nigerians keep dem account safe and protect dem identity.",
          icon: <Globe size={28} />
        },
        { 
          title: "Fast Tech", 
          desc: "We build this system make e fast well-well. If emergency happen, you fit reach your bank code in less than one second.",
          icon: <ShieldCheck size={28} />
        }
      ],
      researcherTitle: "The Person Behind the Work",
      researcherBio: "Loho Christopher Dondo na teacher for Skyline University Nigeria and him dey do Ph.D for BUK. Him be 3MTT Cybersecurity graduate, and him dey use mathematics join cybersecurity take protect Nigerians from bad people."
    }
  };

  const t = translations[lang];

  return (
    <main className="min-h-screen bg-white pb-20 selection:bg-blue-600 selection:text-white">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-24 px-6 bg-[radial-gradient(#e2e8f0_1.5px,transparent_1px)] [background-size:32px_32px] border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-xl">
            <Fingerprint size={12} className="text-blue-400" />
            {t.tag}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.9] text-balance">
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto text-center">
            {t.intro}
          </p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* THE CHALLENGE SECTION */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start mb-40">
            <div className="sticky top-32">
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-8 flex items-center gap-3">
                <span className="w-12 h-[2px] bg-blue-600"></span> {t.problemTitle}
              </h2>
              <p className="text-lg md:text-xl text-slate-700 leading-loose text-justify font-medium">
                {t.problemBody}
              </p>
            </div>
            
            <div className="space-y-6">
               <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-8">
                {t.pillarsTitle}
              </h2>
              {t.pillars.map((pillar, i) => (
                <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 mb-8">
                    {pillar.icon}
                  </div>
                  <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight mb-4">{pillar.title}</h4>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACADEMIC PROFILE CARD */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-slate-900 rounded-[3.5rem] p-8 md:p-20 text-white overflow-hidden shadow-2xl">
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-8 relative z-10">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-400 mb-10 flex items-center gap-3">
                    <Award size={18} /> {t.researcherTitle}
                  </h3>
                  <p className="text-2xl md:text-3xl font-bold leading-snug mb-12 text-justify tracking-tight">
                    {t.researcherBio}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <div className="px-5 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
                      <GraduationCap size={16} className="text-blue-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Skyline University Faculty</span>
                    </div>
                    <div className="px-5 py-3 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 flex items-center gap-3">
                      <BookOpen size={16} className="text-blue-400" />
                      <span className="text-[10px] font-black uppercase tracking-widest">Ph.D. Candidate (BUK)</span>
                    </div>
                    <div className="px-5 py-3 bg-blue-600 rounded-2xl flex items-center gap-3 shadow-lg shadow-blue-900/50">
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

              {/* Decorative Geometric Shapes */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px]"></div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}