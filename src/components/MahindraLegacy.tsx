import React from "react";
import { Sparkles, Globe2, Building2, Car, Shield, Award } from "lucide-react";
import { mahindraLegacyData } from "../data";

export default function MahindraLegacy() {
  const legacy = mahindraLegacyData;

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#e31837] bg-red-950/80 border border-red-500/30">
            <Sparkles className="h-3.5 w-3.5" />
            Brand Trust & Heritage
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {legacy.title} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-100">
              {legacy.subtitle}
            </span>
          </h2>
          <div className="h-1 w-20 bg-[#e31837] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed">
            Mahindra Lifespaces brings 75+ years of the Mahindra Group's trusted leadership in engineering, sustainability, and ethics to transform Chennai's residential skyline.
          </p>
        </div>

        {/* 4 Grand Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 mb-10 sm:mb-16">
          {legacy.stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-800/80 backdrop-blur-md p-3.5 sm:p-6 rounded-2xl border border-slate-700/80 text-center hover:border-amber-400/40 transition-all hover:-translate-y-1 shadow-lg"
            >
              <span className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-amber-400 block mb-1">
                {st.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-300 font-bold uppercase tracking-wider block">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Leadership in India Verticals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {legacy.verticals.map((vert, idx) => (
            <div
              key={idx}
              className="bg-slate-800/60 p-4 sm:p-6 rounded-xl border border-slate-700/60 flex items-start gap-3 sm:gap-4 hover:border-slate-500 transition-colors"
            >
              <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-red-950 text-[#e31837] flex items-center justify-center shrink-0 border border-red-500/20">
                {idx === 0 && <Car className="h-4 sm:h-5 w-4 sm:h-5" />}
                {idx === 1 && <Building2 className="h-4 sm:h-5 w-4 sm:h-5" />}
                {idx === 2 && <Globe2 className="h-4 sm:h-5 w-4 sm:h-5" />}
                {idx === 3 && <Award className="h-4 sm:h-5 w-4 sm:h-5" />}
                {idx === 4 && <Sparkles className="h-4 sm:h-5 w-4 sm:h-5" />}
                {idx === 5 && <Shield className="h-4 sm:h-5 w-4 sm:h-5" />}
              </div>
              <div>
                <h4 className="font-display text-sm sm:text-base font-bold text-white mb-0.5 sm:mb-1">
                  {vert.name}
                </h4>
                <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-body">
                  {vert.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
