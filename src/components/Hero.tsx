import React, { useState } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";
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
      className="relative w-full pt-[98px] sm:pt-[115px] pb-12 lg:pb-20 bg-[#0f172a] text-white overflow-hidden border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Top Eyebrow Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5 sm:mb-6">
          <span className="px-3 py-1 text-[11px] font-bold tracking-[0.15em] uppercase text-white bg-[#c8102e] rounded-md">
            Mahindra Lifespaces
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 rounded-md">
            <MapPin className="h-3.5 w-3.5 text-red-400" />
            Mahindra World City, Chengalpattu, Chennai
          </span>
          <span className="hidden sm:inline-flex items-center px-3 py-1 text-[11px] font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 rounded-md">
            IGBC Gold & Platinum Green Township
          </span>
        </div>

        {/* Main Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Project Switcher */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-white leading-tight sm:leading-[1.15]">
              Two Iconic Residences <br />
              <span className="text-slate-300 font-medium">
                One 1,500 Acre Green Township
              </span>
            </h1>

            <p className="font-body text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to Mahindra World City, Chennai. India’s 1st integrated green township with 65+ global blue chip corporates, 1,000 acres of reserve forest, 7 lakes, and on site Paranur railway station. Choose your preferred residence:
            </p>

            {/* Project Selection Tabs */}
            <div className="bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 max-w-xl mx-auto lg:mx-0 flex gap-2">
              <button
                onClick={() => {
                  setActiveHeroTab("aquavista");
                  onSelectProject("aquavista");
                }}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                  activeHeroTab === "aquavista"
                    ? "bg-[#c8102e] text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <div className="text-xs uppercase tracking-wider font-bold truncate">
                  Codename AquaVista
                </div>
                <div className="text-[11px] opacity-80 mt-0.5 font-normal truncate">
                  3, 3.5 & 4 BHK Duplex • Lake View
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveHeroTab("lakewoods");
                  onSelectProject("lakewoods");
                }}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                  activeHeroTab === "lakewoods"
                    ? "bg-[#c8102e] text-white font-bold shadow-md"
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <div className="text-xs uppercase tracking-wider font-bold truncate">
                  Mahindra Lakewoods
                </div>
                <div className="text-[11px] opacity-80 mt-0.5 font-normal truncate">
                  2 & 3 BHK • 3.8 Acre Podium
                </div>
              </button>
            </div>

            {/* Active Project Highlight Details */}
            <div className="bg-slate-900/60 p-4 sm:p-5 rounded-xl border border-slate-800 max-w-xl mx-auto lg:mx-0 space-y-3 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-red-400 block">
                    {currentProj.badge}
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold text-white">
                    {currentProj.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                    Starting From
                  </span>
                  <span className="font-display text-lg sm:text-xl font-bold text-white">
                    {currentProj.startingPrice}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div>
                  <span className="text-slate-400">Carpet Area: </span>
                  <span className="font-medium text-white">{currentProj.carpetAreaRange}</span>
                </div>
                <div>
                  <span className="text-slate-400">Rating: </span>
                  <span className="font-medium text-white">{currentProj.greenRating}</span>
                </div>
                <div className="sm:col-span-2 text-slate-400 text-[11px] pt-1">
                  <span>RERA Reg: </span>
                  <span className="text-slate-300 font-medium">{currentProj.reraNumber}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-1 max-w-xl mx-auto lg:mx-0">
              <button
                onClick={() => onOpenEnquiry(currentProj.name)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase px-7 py-4 rounded-md shadow-lg transition-all cursor-pointer"
              >
                Book Site Visit
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={onRequestDownload}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-body text-xs font-bold tracking-[0.15em] uppercase px-7 py-4 rounded-md border border-slate-700 transition-all cursor-pointer"
              >
                <Download className="h-4 w-4 text-slate-300" />
                Download Brochures
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
              <img
                src={currentProj.heroImage}
                alt={`${currentProj.name} at Mahindra World City`}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

              {/* Float Overlays */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 p-3.5 sm:p-4 rounded-lg bg-slate-950/90 border border-slate-800 text-white">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold text-red-400 uppercase tracking-wider text-[11px] sm:text-xs">
                    {activeHeroTab === "aquavista" ? "Kolavai Lakefront View" : "3.8 Acre Central Podium"}
                  </span>
                  <span className="text-[10px] text-slate-400 uppercase">
                    Actual Project View
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {currentProj.keyFeature}
                </p>
              </div>
            </div>

            {/* Stat Counters below visual */}
            <div className="grid grid-cols-3 gap-2 mt-3 sm:mt-4 text-center">
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="block font-display text-base font-bold text-white">1,500</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Acres</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="block font-display text-base font-bold text-white">65+</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Corporates</span>
              </div>
              <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                <span className="block font-display text-base font-bold text-white">2,500+</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Families</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
