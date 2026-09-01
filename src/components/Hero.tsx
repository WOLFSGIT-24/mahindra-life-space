import React, { useState } from "react";
import { Download, Calendar, MapPin, Check, ArrowRight } from "lucide-react";
import { projectsData } from "../data";

interface HeroProps {
  onOpenBooking?: () => void;
  onOpenDownload?: () => void;
  onOpenEnquiry?: (topicOrProject?: string) => void;
  onRequestDownload?: () => void;
  selectedProject?: "all" | "aquavista" | "lakewoods" | null;
  onSelectProject?: (projectId: "aquavista" | "lakewoods") => void;
}

export default function Hero({
  onOpenBooking,
  onOpenDownload,
  onOpenEnquiry,
  onRequestDownload,
  selectedProject,
  onSelectProject,
}: HeroProps) {
  const initialTab = (selectedProject && selectedProject !== "all") ? selectedProject : "aquavista";
  const [activeHeroTab, setActiveHeroTab] = useState<"aquavista" | "lakewoods">(initialTab);

  const handleBooking = () => {
    if (onOpenBooking) onOpenBooking();
    else if (onOpenEnquiry) onOpenEnquiry(activeHeroTab === "aquavista" ? "Codename AquaVista" : "Mahindra Lakewoods");
  };

  const handleDownload = () => {
    if (onOpenDownload) onOpenDownload();
    else if (onRequestDownload) onRequestDownload();
  };

  const currentProj = projectsData[activeHeroTab] || projectsData.aquavista;

  return (
    <section
      id="overview"
      className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#FAF9F6] via-[#F8F7F4] to-white text-slate-900 pt-28 pb-14 sm:pt-36 sm:pb-20 overflow-hidden border-b border-slate-200"
    >
      {/* Background Architectural Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full z-10">
        
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-5 sm:mb-6">
          <span className="px-3 py-1 text-[11px] font-bold tracking-[0.15em] uppercase text-white bg-[#c8102e] rounded-md shadow-sm">
            Mahindra Lifespaces
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-slate-800 bg-white border border-slate-200/90 rounded-md shadow-sm">
            <MapPin className="h-3.5 w-3.5 text-[#c8102e]" />
            Mahindra World City, Chengalpattu, Chennai
          </span>
          <span className="hidden sm:inline-flex items-center px-3 py-1 text-[11px] font-medium text-slate-800 bg-white border border-slate-200/90 rounded-md shadow-sm">
            IGBC Gold & Platinum Green Township
          </span>
        </div>

        {/* Main Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Project Switcher */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold tracking-tight text-slate-900 leading-tight sm:leading-[1.15]">
              Two Iconic Residences <br />
              One 1,500 Acre Green Township
            </h1>

            <p className="font-body text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Welcome to Mahindra World City, Chennai. India’s 1st integrated green township with 65+ global blue chip corporates, 1,000 acres of reserve forest, 7 lakes, and on site Paranur railway station. Choose your preferred residence:
            </p>

            {/* Project Selection Tabs */}
            <div className="bg-slate-100 p-1.5 rounded-xl border border-slate-200 max-w-xl mx-auto lg:mx-0 flex gap-2">
              <button
                onClick={() => {
                  setActiveHeroTab("aquavista");
                  onSelectProject?.("aquavista");
                }}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                  activeHeroTab === "aquavista"
                    ? "bg-[#c8102e] text-white font-bold shadow-sm"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="text-xs uppercase tracking-wider font-bold truncate">
                  Codename AquaVista
                </div>
                <div className={`text-[11px] mt-0.5 font-normal truncate ${activeHeroTab === "aquavista" ? "text-white/90" : "text-slate-500"}`}>
                  3, 3.5 & 4 BHK Duplex • Lake View
                </div>
              </button>

              <button
                onClick={() => {
                  setActiveHeroTab("lakewoods");
                  onSelectProject?.("lakewoods");
                }}
                className={`flex-1 py-3 px-3 sm:px-4 rounded-lg text-left transition-all duration-200 cursor-pointer ${
                  activeHeroTab === "lakewoods"
                    ? "bg-[#c8102e] text-white font-bold shadow-sm"
                    : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
                }`}
              >
                <div className="text-xs uppercase tracking-wider font-bold truncate">
                  Mahindra Lakewoods
                </div>
                <div className={`text-[11px] mt-0.5 font-normal truncate ${activeHeroTab === "lakewoods" ? "text-white/90" : "text-slate-500"}`}>
                  2 & 3 BHK • 3.8 Acre Podium
                </div>
              </button>
            </div>

            {/* Active Project Highlight Details */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm max-w-xl mx-auto lg:mx-0 space-y-3.5 text-left">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c8102e] block">
                    {currentProj.badge}
                  </span>
                  <h3 className="font-display text-base sm:text-xl font-bold text-slate-900">
                    {currentProj.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider block">
                    Starting From
                  </span>
                  <span className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    {currentProj.startingPrice}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                    Configuration
                  </span>
                  <span className="font-semibold text-slate-900">
                    {currentProj.typologies.join(", ")}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase font-semibold">
                    Carpet Area Range
                  </span>
                  <span className="font-semibold text-slate-900">
                    {currentProj.carpetAreaRange}
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed pt-1">
                {currentProj.keyFeature}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={handleBooking}
                className="w-full sm:w-auto bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-md shadow hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                Schedule Site Visit
              </button>

              <button
                onClick={handleDownload}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-900 font-body text-xs font-bold tracking-[0.15em] uppercase px-7 py-3.5 rounded-md border border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Download className="h-4 w-4 text-[#c8102e]" />
                Download Brochure
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual & Fast Facts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={currentProj.heroImage}
                  alt={currentProj.name}
                  fetchPriority="high"
                  decoding="async"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Image Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white bg-slate-950/80 backdrop-blur-sm p-2.5 rounded border border-white/20">
                  <span className="font-semibold">{currentProj.name}</span>
                  <span className="text-red-300 font-bold uppercase text-[10px] tracking-wider">
                    {currentProj.greenRating}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {currentProj.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm text-center"
                >
                  <span className="text-slate-500 block text-[9px] uppercase tracking-wider font-semibold">
                    {stat.label}
                  </span>
                  <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block mt-0.5">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* RERA Registration Strip */}
            <div className="p-2.5 bg-white rounded border border-slate-200 shadow-sm text-[10px] text-slate-700 text-center font-medium">
              RERA No: <span className="text-slate-900 font-mono font-bold">{currentProj.reraNumber}</span> | Valid: {currentProj.reraValidUntil}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
