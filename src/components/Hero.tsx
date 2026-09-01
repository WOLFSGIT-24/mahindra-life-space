import React, { useState } from "react";
import { ArrowRight, Download, MapPin, Sparkles, CheckCircle2, ShieldCheck, Waves, Trees } from "lucide-react";
import { projectsData } from "../data";

interface HeroProps {
  onOpenEnquiry: (project?: string) => void;
  onRequestDownload: () => void;
  selectedProject: "all" | "aquavista" | "lakewoods";
  onSelectProject: (proj: "all" | "aquavista" | "lakewoods") => void;
}

export default function Hero({
  onOpenEnquiry,
  onRequestDownload,
  selectedProject,
  onSelectProject,
}: HeroProps) {
  const [activeHeroTab, setActiveHeroTab] = useState<"aquavista" | "lakewoods">("aquavista");

  const currentProj = projectsData[activeHeroTab];

  return (
    <section
      id="overview"
      className="relative w-full pt-[98px] sm:pt-[115px] pb-12 lg:pb-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5 sm:mb-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-[#e31837] text-white tracking-wider uppercase shadow-sm">
            <Sparkles className="h-3 sm:h-3.5 w-3 sm:w-3.5" />
            Mahindra Lifespaces
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-white/10 text-slate-200 border border-white/10">
            <MapPin className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-amber-400" />
            Mahindra World City, Chengalpattu
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            IGBC Gold & Platinum Green Homes
          </span>
        </div>

        {/* Main Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Project Switcher */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold tracking-tight text-white leading-tight sm:leading-[1.15]">
              Two Iconic Residences <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-100">
                One 1,500 Acre Green Township
              </span>
            </h1>

            <p className="font-body text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to Mahindra World City, Chennai. India’s 1st integrated green township with 65+ global blue chip corporates, 1,000 acres of reserve forest, 7 lakes, and on site Paranur railway station. Choose your perfect lifestyle:
            </p>

            {/* Interactive Dual Project Toggle Tabs */}
            <div className="bg-slate-900/90 p-1 sm:p-1.5 rounded-xl border border-slate-700/80 max-w-xl mx-auto lg:mx-0 flex gap-1.5 sm:gap-2 shadow-xl">
              <button
                onClick={() => {
                  setActiveHeroTab("aquavista");
                  onSelectProject("aquavista");
                }}
                className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                  activeHeroTab === "aquavista"
                    ? "bg-[#e31837] text-white shadow-lg font-bold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider font-extrabold truncate">
                  <Waves className="h-3.5 w-3.5 shrink-0" />
                  <span>AquaVista</span>
                </div>
                <div className="text-[10px] sm:text-[11px] opacity-90 mt-0.5 font-medium truncate">
                  3, 3.5 & 4 BHK Duplex
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveHeroTab("lakewoods");
                  onSelectProject("lakewoods");
                }}
                className={`flex-1 py-2.5 sm:py-3 px-2 sm:px-4 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                  activeHeroTab === "lakewoods"
                    ? "bg-[#059669] text-white shadow-lg font-bold"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                <div className="flex items-center gap-1 sm:gap-1.5 text-[11px] sm:text-xs uppercase tracking-wider font-extrabold truncate">
                  <Trees className="h-3.5 w-3.5 shrink-0" />
                  <span>Lakewoods</span>
                </div>
                <div className="text-[10px] sm:text-[11px] opacity-90 mt-0.5 font-medium truncate">
                  2 & 3 BHK • Podium
                </div>
              </button>
            </div>

            {/* Active Project Highlight Pills */}
            <div className="bg-slate-800/60 backdrop-blur-md p-3.5 sm:p-5 rounded-xl border border-slate-700/60 max-w-xl mx-auto lg:mx-0 space-y-3 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-700 pb-2.5">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 block">
                    {currentProj.badge}
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold text-white">
                    {currentProj.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase tracking-wider block">
                    Starting From
                  </span>
                  <span className="font-display text-lg sm:text-xl font-black text-amber-300">
                    {currentProj.startingPrice}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{currentProj.carpetAreaRange}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{currentProj.greenRating}</span>
                </div>
                <div className="flex items-center gap-2 sm:col-span-2 text-slate-300 text-[10px] sm:text-[11px]">
                  <span className="font-bold text-amber-300">RERA:</span> {currentProj.reraNumber}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 max-w-xl mx-auto lg:mx-0">
              <button
                onClick={() => onOpenEnquiry(currentProj.name)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg shadow-xl hover:shadow-red-600/30 transition-all cursor-pointer"
              >
                Book a Site Visit
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onRequestDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-body text-xs font-bold tracking-widest uppercase px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg border border-slate-600 transition-all cursor-pointer"
              >
                <Download className="h-4 w-4 text-amber-400" />
                Download PDF Brochures
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900 group">
              <img
                src={currentProj.heroImage}
                alt={`${currentProj.name} at Mahindra World City`}
                className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

              {/* Float Overlays */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3 sm:p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-amber-400 uppercase tracking-wider text-[11px] sm:text-xs">
                    {activeHeroTab === "aquavista" ? "Kolavai Lakefront View" : "3.8 Acre Central Podium"}
                  </span>
                  <span className="text-[9px] sm:text-[10px] bg-white/20 px-2 py-0.5 rounded text-white font-medium">
                    Actual Design
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-2 leading-relaxed">
                  {currentProj.keyFeature}
                </p>
              </div>
            </div>

            {/* Quick Stat Pill below visual */}
            <div className="grid grid-cols-3 gap-2 mt-3 sm:mt-4 text-center">
              <div className="bg-slate-800/70 p-2 sm:p-3 rounded-lg border border-slate-700/60">
                <span className="block font-display text-sm sm:text-base font-bold text-white">1,500</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold">Acres</span>
              </div>
              <div className="bg-slate-800/70 p-2 sm:p-3 rounded-lg border border-slate-700/60">
                <span className="block font-display text-sm sm:text-base font-bold text-amber-400">65+</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold">Corporates</span>
              </div>
              <div className="bg-slate-800/70 p-2 sm:p-3 rounded-lg border border-slate-700/60">
                <span className="block font-display text-sm sm:text-base font-bold text-emerald-400">2,500+</span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold">Families</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
