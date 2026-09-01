import React from "react";
import { mahindraLegacyData } from "../data";

export default function MahindraLegacy() {
  const legacy = mahindraLegacyData;

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-[#0f172a] text-white relative overflow-hidden border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Brand Trust & Heritage
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {legacy.title} <br />
            <span className="text-slate-400 font-normal">
              {legacy.subtitle}
            </span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed pt-2">
            Mahindra Lifespaces brings 75+ years of the Mahindra Group's trusted leadership in engineering, sustainability, and ethics to transform Chennai's residential skyline.
          </p>
        </div>

        {/* 4 Grand Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 mb-10 sm:mb-16">
          {legacy.stats.map((st, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 p-4 sm:p-6 rounded-xl border border-slate-800 text-center shadow-sm"
            >
              <span className="font-display text-2xl sm:text-3xl font-bold text-white block mb-1">
                {st.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider block">
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
              className="bg-slate-900/60 p-5 sm:p-6 rounded-xl border border-slate-800 space-y-1.5"
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                Pillar 0{idx + 1}
              </span>
              <h4 className="font-display text-sm sm:text-base font-bold text-white">
                {vert.name}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-body">
                {vert.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
