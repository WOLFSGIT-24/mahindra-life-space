import React, { useState } from "react";
import { Sparkles, Waves, Trees, Trophy, Check, ArrowRight } from "lucide-react";
import { amenitiesCategories } from "../data";

interface AmenitiesProps {
  onOpenEnquiry: (topic?: string) => void;
}

export default function Amenities({ onOpenEnquiry }: AmenitiesProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeCategory = amenitiesCategories[activeTab];

  return (
    <section id="amenities" className="w-full py-12 sm:py-16 lg:py-24 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20">
            <Sparkles className="h-3.5 w-3.5" />
            Resort Style Amenities
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Designed for Fitness <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-100">
              Wellness & Community Bond
            </span>
          </h2>
          <div className="h-1 w-20 bg-[#e31837] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            From the 16,000 sq.ft clubhouse at <strong>AquaVista</strong> to the 3.8 acre vehicle free podium at <strong>Lakewoods</strong> and the prestigious <strong>MWC Club</strong>, experience leisure on a grand scale.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
          {amenitiesCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 sm:px-7 py-2 sm:py-3 rounded-full font-body text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 sm:gap-2 ${
                activeTab === idx
                  ? "bg-[#e31837] text-white shadow-xl scale-105"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
              }`}
            >
              {idx === 0 && <Waves className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
              {idx === 1 && <Trees className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
              {idx === 2 && <Trophy className="h-3.5 sm:h-4 w-3.5 sm:w-4" />}
              <span>{cat.categoryName}</span>
            </button>
          ))}
        </div>

        {/* Active Category Intro */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
          <h3 className="font-display text-lg sm:text-2xl font-bold text-amber-300">
            {activeCategory.categoryName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            {activeCategory.subtitle}
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group flex flex-col justify-between"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl sm:text-2xl">
                      {item.icon}
                    </span>
                  </div>
                  {item.tag && (
                    <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/10 text-slate-300 border border-white/10">
                      {item.tag}
                    </span>
                  )}
                </div>

                <div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-slate-300 mt-1.5 leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-slate-700/60 flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Check className="h-3.5 w-3.5" /> Ready to Use
                </span>
                <button
                  onClick={() => onOpenEnquiry(item.title)}
                  className="text-amber-400 hover:text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
                >
                  Explore <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
