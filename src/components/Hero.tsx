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
              Welcome to Mahindra World City, Chennai. India’s 1st integrated green township with 65+ global blue chip corporates, 1,00,000+ professionals, 1,000 acres of reserve forest, 7 lakes, and on site Paranur railway station. Choose your preferred residence:
            </p>

            {/* Mobile Only Hero Visual (Directly under Heading & Paragraph) */}
            <div className="block lg:hidden my-4 sm:my-5">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={currentProj.heroImage}
                    alt={currentProj.name}
                    fetchPriority="high"
                    decoding="async"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
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
            </div>

            {/* Direct Dual-Project Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0">
              {/* Option 1: AquaVista */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-left hover:border-slate-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#c8102e] bg-red-50 px-2 py-0.5 rounded">
                      Lakefront Luxury
                    </span>
                    <span className="text-[11px] font-bold text-slate-900">
                      ₹ 79 L* onwards
                    </span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                    Codename AquaVista
                  </h3>
                  <p className="text-[11px] text-slate-700 mt-1">
                    3, 3.5 & 4 BHK Duplex • 1,053 to 1,610 Sft
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    16,000 Sq.Ft. Clubhouse • 2 Acre Central Park
                  </p>
                </div>
              </div>

              {/* Option 2: Lakewoods */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm text-left hover:border-slate-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      Ready to Move In
                    </span>
                    <span className="text-[11px] font-bold text-[#c8102e]">
                      ₹ 84 L* (No GST*)
                    </span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                    Mahindra Lakewoods
                  </h3>
                  <p className="text-[11px] text-slate-700 mt-1">
                    2 BHK (1079 Sft) • Towers D & E
                  </p>
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    9.33 Acres • 10-70-20 Plan • Zero Common Walls
                  </p>
                </div>
              </div>
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
            <div className="hidden lg:block relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
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
