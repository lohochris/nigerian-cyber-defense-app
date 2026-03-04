"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Play, 
  CheckCircle2, 
  BookOpen, 
  ChevronRight, 
  Eye, 
  MonitorPlay,
  X,
  ShieldCheck,
  Maximize2,
  Trophy,
  Lock,
  Circle,
  ClipboardCheck
} from 'lucide-react'

interface ModuleCardProps {
  id: string;
  module: string;
  title: string;
  pidginTitle: string;
  description: string;
  isCompleted: boolean; 
  youtubeId: string;
  path: string;
  locked?: boolean; // New Prop: Prevents access if previous module isn't done
  onComplete?: (id: string) => void; 
}

export default function ModuleCard({
  id,
  module,
  title,
  pidginTitle,
  description,
  isCompleted: initialIsCompleted,
  youtubeId,
  path,
  locked = false, // Defaults to unlocked
  onComplete
}: ModuleCardProps) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [hasWatched, setHasWatched] = useState(false);
  const [hasRead, setHasRead] = useState(false);
  const [watchTime, setWatchTime] = useState(0);
  const [isMastered, setIsMastered] = useState(initialIsCompleted);

  // 1. LOAD PERSISTED PROGRESS
  useEffect(() => {
    const savedProgress = localStorage.getItem(`module_progress_${id}`);
    if (savedProgress) {
      const { watched, read, mastered } = JSON.parse(savedProgress);
      setHasWatched(watched);
      setHasRead(read);
      setIsMastered(mastered);
    }
  }, [id]);

  // 2. WATCH TIMER LOGIC
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showOverlay && !hasWatched) {
      interval = setInterval(() => {
        setWatchTime((prev) => {
          if (prev >= 30) {
            const newState = { watched: true, read: hasRead, mastered: isMastered };
            setHasWatched(true);
            localStorage.setItem(`module_progress_${id}`, JSON.stringify(newState));
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [showOverlay, hasWatched, hasRead, isMastered, id]);

  const handleReadClick = (e: React.MouseEvent) => {
    if (locked) {
      e.preventDefault();
      return;
    }
    const newState = { watched: hasWatched, read: true, mastered: isMastered };
    setHasRead(true);
    localStorage.setItem(`module_progress_${id}`, JSON.stringify(newState));
  };

  const handleFinalCompletion = () => {
    if (hasWatched && hasRead) {
      setIsMastered(true);
      const newState = { watched: true, read: true, mastered: true };
      localStorage.setItem(`module_progress_${id}`, JSON.stringify(newState));
      if (onComplete) onComplete(id);
    }
  };

  const handleWatch = () => {
    if (!locked) setShowOverlay(true);
  };

  return (
    <>
      <div className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border-2 transition-all duration-500 flex flex-col h-full relative ${
        locked ? 'opacity-60 grayscale pointer-events-none' : 'hover:-translate-y-2'
      } ${
        isMastered ? 'border-green-500 shadow-green-50' : 'border-slate-100 hover:border-blue-500 hover:shadow-2xl'
      }`}>
        
        {/* TOP STATUS BADGE */}
        <div className="absolute top-6 left-6 z-30">
          {locked ? (
            <div className="bg-slate-500 text-white text-[8px] font-black px-4 py-2 rounded-xl uppercase tracking-widest flex items-center gap-2">
              <Lock size={10} /> <span>Module Locked</span>
            </div>
          ) : isMastered ? (
            <div className="bg-green-500 text-white text-[8px] font-black px-4 py-2 rounded-xl uppercase tracking-widest shadow-lg flex items-center gap-2">
              <Trophy size={12} strokeWidth={3} />
              <span>Module Mastered</span>
            </div>
          ) : (
            <div className="bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-black px-4 py-2 rounded-xl uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck size={10} className="text-blue-400" />
              <span>Access Granted</span>
            </div>
          )}
        </div>

        {/* VIDEO PREVIEW AREA */}
        <div className="relative h-48 bg-slate-900 cursor-pointer overflow-hidden" onClick={handleWatch}>
          {locked && <div className="absolute inset-0 z-40 bg-slate-900/20 backdrop-blur-[2px] flex items-center justify-center">
            <Lock size={40} className="text-white/20" />
          </div>}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className={`w-14 h-14 rounded-3xl border flex items-center justify-center transition-all duration-500 shadow-2xl ${
              hasWatched ? 'bg-green-500 border-green-400 text-white' : 'bg-white/10 backdrop-blur-md border-white/20 text-white group-hover:bg-blue-600'
            }`}>
              {hasWatched ? <CheckCircle2 size={24} strokeWidth={3} /> : <Play size={24} fill="currentColor" className="ml-1" />}
            </div>
          </div>
        </div>
        
        <div className="p-8 flex-grow flex flex-col">
          <div className="mb-4">
            <h2 className="text-xl font-black text-slate-900 mb-1 leading-tight tracking-tighter uppercase italic">{title}</h2>
            <p className="text-blue-600 font-black text-[9px] uppercase tracking-widest">{pidginTitle}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-4 mb-6 space-y-3 border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-2">
                {hasWatched ? <CheckCircle2 size={12} className="text-green-500" /> : <Circle size={12} />} Video
              </span>
              <span className={`text-[8px] font-black px-2 py-0.5 rounded ${hasWatched ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-400'}`}>
                {hasWatched ? 'PASSED' : `${Math.round((watchTime/30)*100)}%`}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-slate-500 uppercase flex items-center gap-2">
                {hasRead ? <CheckCircle2 size={12} className="text-green-500" /> : <Circle size={12} />} Reading
              </span>
              <span className={`text-[8px] font-black px-2 py-0.5 rounded ${hasRead ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-400'}`}>
                {hasRead ? 'PASSED' : 'PENDING'}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 mt-auto">
            {!isMastered && hasWatched && hasRead ? (
              <button onClick={handleFinalCompletion} className="w-full py-4 bg-green-500 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-3 animate-pulse">
                <ClipboardCheck size={16} /> Mark Module Complete
              </button>
            ) : (
              <>
                <button onClick={handleWatch} className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                  <Maximize2 size={16} /> {hasWatched ? 'Rewatch Video' : 'Watch Intelligence'}
                </button>
                <Link href={locked ? '#' : path} onClick={handleReadClick} className={`w-full py-4 text-center rounded-2xl font-black uppercase text-[10px] tracking-widest transition-all border-2 flex items-center justify-center gap-3 ${
                    hasRead ? 'bg-green-50 text-green-700 border-green-200' : 'bg-transparent text-slate-400 border-slate-100 hover:text-slate-900'
                }`}>
                  <BookOpen size={16} /> {hasRead ? 'Review Briefing' : 'Study Briefing'}
                </Link>
              </>
            )}
          </div>
        </div>

        <div className="h-2 w-full bg-slate-50 flex overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${isMastered ? 'bg-green-500' : 'bg-blue-500'}`} 
            style={{ width: isMastered ? '100%' : `${((hasWatched ? 0.5 : (watchTime/30)*0.5) + (hasRead ? 0.5 : 0)) * 100}%` }}
          />
        </div>
      </div>

      {showOverlay && (
        <div className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-slate-950/95 backdrop-blur-3xl p-4 md:p-8">
          <div className="w-full max-w-5xl mb-6 flex justify-between items-center border-b border-white/10 pb-6">
            <div className="flex items-center gap-4 text-white">
              <ShieldCheck className="text-blue-500" size={24} />
              <h3 className="text-lg font-black uppercase italic tracking-tight">{title}</h3>
            </div>
            <button onClick={() => setShowOverlay(false)} className="bg-white/5 hover:bg-red-500 text-white p-3 rounded-xl transition-all"><X size={20} /></button>
          </div>
          <div className="w-full max-w-5xl aspect-video rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-2xl relative bg-black">
            <iframe src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`} className="w-full h-full" allowFullScreen />
          </div>
        </div>
      )}
    </>
  )
}