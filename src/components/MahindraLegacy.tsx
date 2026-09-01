import React from "react";
import { mahindraLegacyData } from "../data";

export default function MahindraLegacy() {
  const legacy = mahindraLegacyData;

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Brand Trust & Heritage
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            {legacy.title} <br />
            {legacy.subtitle}
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed pt-2">
            Mahindra Lifespaces brings 75+ years of the Mahindra Group's trusted leadership in engineering, sustainability, and ethics to transform Chennai's residential skyline.
          </p>
        </div>

        {/* 4 Pillars Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-14">
          {legacy.stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 text-center space-y-1.5 shadow-sm"
            >
              <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 block">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-slate-600 font-semibold uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Group Conglomerate Businesses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {legacy.verticals.map((vert, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 shadow-sm space-y-2 transition-all duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#c8102e]">
                  Leadership
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-semibold">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                {vert.name}
              </h3>
              <p className="text-xs text-slate-700 leading-relaxed font-body">
                {vert.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
