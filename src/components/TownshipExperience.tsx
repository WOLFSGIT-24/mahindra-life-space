import React from "react";
import { Sparkles, Briefcase, CheckCircle2, ArrowRight } from "lucide-react";
import { mwcTownshipHighlights } from "../data";

interface TownshipExperienceProps {
  onOpenEnquiry: (topic?: string) => void;
}

export default function TownshipExperience({ onOpenEnquiry }: TownshipExperienceProps) {
  const mwc = mwcTownshipHighlights;

  return (
    <section id="township" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#e31837] bg-red-50 border border-red-200">
            <Sparkles className="h-3.5 w-3.5" />
            1,500 Acre Master Ecosystem
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Mahindra World City, Chennai <br />
            <span className="text-[#e31837]">A City Where Life Thrives</span>
          </h2>
          <div className="h-1 w-20 bg-[#e31837] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Ranked the <strong>4th Best City to Live in India</strong> by JLL, Mahindra World City is a benchmark for sustainable urbanisation where nature, global employment, world-class schooling, and residences coalesce.
          </p>
        </div>

        {/* Big Hero Aerial Banner with Stats Overlay */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-950 mb-12 sm:mb-16 border border-slate-200">
          <img
            src="/mwc-township.jpg"
            alt="Mahindra World City Chennai Aerial View"
            className="w-full h-[360px] sm:h-[420px] lg:h-[480px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Township Stat Counters Grid */}
          <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 lg:bottom-10 lg:left-10 lg:right-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
              <div className="bg-slate-900/90 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/10 text-white">
                <span className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-amber-400 block">1,500</span>
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300">Total Acres</span>
                <span className="text-[8px] sm:text-[10px] text-slate-400 block mt-0.5">150 Acres Green</span>
              </div>
              <div className="bg-slate-900/90 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/10 text-white">
                <span className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-emerald-400 block">65+</span>
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300">Corporates</span>
                <span className="text-[8px] sm:text-[10px] text-slate-400 block mt-0.5">Infosys, BMW, Renault</span>
              </div>
              <div className="bg-slate-900/90 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/10 text-white">
                <span className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-sky-400 block">1,00,000+</span>
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300">Working Pop.</span>
                <span className="text-[8px] sm:text-[10px] text-slate-400 block mt-0.5">Walk to Work</span>
              </div>
              <div className="bg-slate-900/90 backdrop-blur-md p-2.5 sm:p-4 rounded-xl border border-white/10 text-white">
                <span className="font-display text-lg sm:text-2xl lg:text-3xl font-black text-rose-400 block">2,500+</span>
                <span className="text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300">Families</span>
                <span className="text-[8px] sm:text-[10px] text-slate-400 block mt-0.5">Thriving Social Life</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Green Benchmark Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {mwc.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-3.5 sm:p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-center gap-3 text-emerald-900"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5" />
              </div>
              <span className="font-display text-xs font-bold leading-snug">
                {cert}
              </span>
            </div>
          ))}
        </div>

        {/* Social Infrastructure Grid */}
        <div className="space-y-6 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#e31837] block">
                Integrated Lifestyle
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-bold text-slate-900">
                Everything at Your Doorstep
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              From top CBSE schooling to shopping at The Canopy, hospitality at Fairfield by Marriott, and on site train connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mwc.socialInfra.map((infra, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md space-y-2.5 sm:space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-red-100 text-[#e31837] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    {infra.icon}
                  </span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                  {infra.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {infra.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Hubs & Walk-to-Work Ecosystem */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block">
                Walk To Work Privilege
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Work Close to Home with 65+ Global Conglomerates
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Save hours of stressful daily traffic. Mahindra World City houses dedicated SEZs and corporate parks employing over 1,00,000 professionals across IT, automotive, healthcare, and engineering.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onOpenEnquiry("Walk to Work at MWC")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-lg shadow cursor-pointer transition-all"
                >
                  Explore MWC Life
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {mwc.corporateHubs.map((corp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/90 p-3 sm:p-4 rounded-xl border border-slate-700 text-center hover:border-amber-400/50 transition-colors"
                >
                  <Briefcase className="h-4 sm:h-5 w-4 sm:h-5 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
                  <span className="font-display text-xs sm:text-sm font-bold text-white block truncate">
                    {corp.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 block mt-0.5 truncate">
                    {corp.sector}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
