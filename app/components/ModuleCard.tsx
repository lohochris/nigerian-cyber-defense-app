"use client"
import React from 'react'
import Link from 'next/link'

interface ModuleCardProps {
  id: string;
  module: string;
  title: string;
  pidginTitle: string;
  description: string;
  isCompleted: boolean;
  youtubeId: string;
  path: string;
  onWatch: (id: string) => void;
}

export default function ModuleCard({
  id,
  module,
  title,
  pidginTitle,
  description,
  isCompleted,
  youtubeId,
  path,
  onWatch
}: ModuleCardProps) {
  return (
    <div className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-sm border-2 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full relative ${
      isCompleted ? 'border-green-500 shadow-green-100' : 'border-slate-100 hover:border-blue-400 hover:shadow-2xl'
    }`}>
      
      {/* COMPLETION BADGE */}
      {isCompleted && (
        <div className="absolute top-6 left-6 z-30 bg-green-500 text-white text-[8px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-2">
          <span>✅</span> Mastered
        </div>
      )}

      {/* VIDEO PREVIEW AREA */}
      <div 
        className="relative h-44 bg-slate-900 cursor-pointer overflow-hidden"
        onClick={() => onWatch(youtubeId)}
      >
        <div className={`absolute inset-0 ${isCompleted ? 'bg-green-900' : 'bg-blue-900'} opacity-20 group-hover:opacity-40 transition-opacity duration-500`} />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full border border-white/30 flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
          </div>
        </div>

        {/* Module Label */}
        <div className="absolute top-4 right-6 z-20">
          <span className="bg-slate-900/60 backdrop-blur-md text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-white/10">
            {module}
          </span>
        </div>
      </div>
      
      {/* CONTENT AREA */}
      <div className="p-8 flex-grow flex flex-col">
        <h2 className="text-lg font-black text-slate-900 mb-1 leading-tight tracking-tight uppercase group-hover:text-blue-600 transition-colors">
          {title}
        </h2>
        <p className="text-blue-600 font-black text-[9px] mb-4 uppercase tracking-widest italic leading-none">
          {pidginTitle}
        </p>
        <p className="text-slate-500 text-xs leading-relaxed mb-8 flex-grow font-medium">
          {description}
        </p>
        
        {/* ACTION BUTTONS */}
        <div className="grid grid-cols-2 gap-3 mt-auto">
          <button 
            onClick={() => onWatch(youtubeId)}
            className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[9px] tracking-widest hover:bg-blue-600 transition-all shadow-md active:scale-95"
          >
            Watch Video
          </button>
          
          <Link 
            href={path}
            className={`w-full py-4 text-center rounded-2xl font-black uppercase text-[9px] tracking-widest transition-all border-2 ${
              isCompleted 
              ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' 
              : 'bg-transparent text-slate-400 border-slate-100 hover:border-slate-300 hover:text-slate-600'
            }`}
          >
            {isCompleted ? 'Review' : 'Read More'}
          </Link>
        </div>
      </div>

      {/* Subtle Progress Indicator for uncompleted modules */}
      {!isCompleted && (
        <div className="h-1.5 w-full bg-slate-50">
          <div className="h-full bg-blue-100 w-0 group-hover:w-full transition-all duration-1000" />
        </div>
      )}
    </div>
  )
}