import React, { useState } from "react";
import { ArrowRight, Eye, Check } from "lucide-react";
import { projectsData } from "../data";

interface ProjectHighlightsProps {
  onSelectProject: (proj: "all" | "aquavista" | "lakewoods") => void;
  onOpenEnquiry: (project?: string) => void;
  onRequestDownload: () => void;
}

export default function ProjectHighlights({
  onSelectProject,
  onOpenEnquiry,
  onRequestDownload,
}: ProjectHighlightsProps) {
  const [activeTab, setActiveTab] = useState<"both" | "aquavista" | "lakewoods">("both");

  const av = projectsData.aquavista;
  const lw = projectsData.lakewoods;

  return (
    <section id="projects" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Residential Portfolios
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Two Architectural Expressions <br />
            <span className="text-slate-600 font-normal">Choose Your Ideal Home</span>
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed pt-2">
            Whether you desire lake facing duplex luxury with a 16,000 sq.ft clubhouse at <strong>AquaVista</strong>, or podium centric living with zero common walls at <strong>Lakewoods</strong>, both projects offer unmatched quality backed by the trust of Mahindra.
          </p>
        </div>

        {/* Filter Switcher */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {[
            { id: "both", label: "Compare Both Projects" },
            { id: "aquavista", label: "Codename AquaVista" },
            { id: "lakewoods", label: "Mahindra Lakewoods" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-[#c8102e] text-white shadow-sm font-bold"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 2 Big Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Project 1: Codename AquaVista */}
          {(activeTab === "both" || activeTab === "aquavista") && (
            <div className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between ${
              activeTab === "aquavista" ? "border-[#c8102e] lg:col-span-2 max-w-4xl mx-auto" : "border-slate-200"
            }`}>
              {/* Card Header & Visual */}
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={av.heroImage}
                    alt="Codename AquaVista at Mahindra World City"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                    <span className="px-2.5 sm:px-3 py-1 bg-black/80 text-white text-[11px] font-semibold tracking-wider uppercase rounded">
                      Lakefront Luxury
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 bg-white/90 text-slate-900 text-[11px] font-semibold tracking-wider uppercase rounded">
                      {av.greenRating}
                    </span>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {av.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      Towers C7 & C8 • Overlooking Kolavai Lake
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Typology</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">3, 3.5 & 4 BHK</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Carpet Area</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">1053 to 1610 Sft</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Clubhouse</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#c8102e] block truncate">16,000 Sq.Ft</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-[#c8102e] pl-3 py-1 bg-slate-50">
                    "{av.tagline}"
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      Signature Features:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {[
                        "Multi storeyed towers (C7 & C8) with efficiently designed 3, 3.5 BHK & 4 BHK Duplex units",
                        "Overlooks serene Kolavai Lake & rolling green hill vistas",
                        "Grand 16,000 sq.ft clubhouse with pool, gym, aerobics/yoga room & multipurpose hall",
                        "2 acre central park with shaded walkways, seating areas, half basketball court & amphitheatre",
                        "Full height French windows & large L shaped balconies for maximum cross ventilation",
                        "Duplex units feature private rooftop party terraces with granite staircase & SS railing",
                        "Exclusive bay windows in living room and dedicated study room in 3.5 BHK homes"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#c8102e] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RERA Badge */}
                  <div className="p-3 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-600">
                    <strong className="text-slate-800">TNRERA No:</strong> {av.reraNumber} (Registered as "{av.reraProjectName}") valid up to {av.reraValidUntil} • <a href="https://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#c8102e] underline">rera.tn.gov.in</a>
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-5 sm:p-8 pt-0 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => onOpenEnquiry("Codename AquaVista")}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 px-4 rounded-md transition-all shadow-sm cursor-pointer"
                >
                  Enquire AquaVista
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#floor-plans"
                  onClick={() => onSelectProject("aquavista")}
                  className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 px-4 rounded-md transition-all text-center cursor-pointer"
                >
                  <Eye className="h-4 w-4 text-slate-500" />
                  View 3 & 4 BHK Plans
                </a>
              </div>
            </div>
          )}

          {/* Project 2: Mahindra Lakewoods */}
          {(activeTab === "both" || activeTab === "lakewoods") && (
            <div className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden shadow-sm hover:shadow-md flex flex-col justify-between ${
              activeTab === "lakewoods" ? "border-[#c8102e] lg:col-span-2 max-w-4xl mx-auto" : "border-slate-200"
            }`}>
              {/* Card Header & Visual */}
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={lw.heroImage}
                    alt="Mahindra Lakewoods at Mahindra World City"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                    <span className="px-2.5 sm:px-3 py-1 bg-black/80 text-white text-[11px] font-semibold tracking-wider uppercase rounded">
                      Podium Living
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 bg-white/90 text-slate-900 text-[11px] font-semibold tracking-wider uppercase rounded">
                      {lw.greenRating}
                    </span>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {lw.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium">
                      Towers A to E • 3.8 Acre Vehicle Free Central Podium
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Typology</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">2 & 3 BHK</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Carpet Area</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">751 to 1013 Sft</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider block">Podium</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#c8102e] block truncate">3.8 Acre Open</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-slate-700 italic border-l-2 border-[#c8102e] pl-3 py-1 bg-slate-50">
                    "{lw.tagline}"
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      Signature Features:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      {[
                        "Zero common walls layout ensuring extraordinary privacy, natural light, and quietude",
                        "Massive 3.8 acre vehicle free central podium with lush landscaped lawns & walkways",
                        "Clubhouse with open to sky swimming pool, toddler's pool, badminton & tennis courts",
                        "Jogging & cycling tracks, outdoor gym, children's play grove, and senior citizen pavilions",
                        "High performance aluminium formwork RCC structure with premium vitrified tile flooring",
                        "Pre certified IGBC Platinum green development with 100% LED lighting in common areas",
                        "Rainwater harvesting, organic waste converter, and water efficient plumbing fixtures"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#c8102e] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* RERA Badge */}
                  <div className="p-3 bg-slate-50 rounded border border-slate-200 text-[11px] text-slate-600">
                    <strong className="text-slate-800">TNRERA No:</strong> {lw.reraNumber} (Registered as "{lw.reraProjectName}") valid up to {lw.reraValidUntil} • <a href="https://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer" className="text-[#c8102e] underline">rera.tn.gov.in</a>
                  </div>
                </div>
              </div>

              {/* Card Footer CTAs */}
              <div className="p-5 sm:p-8 pt-0 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => onOpenEnquiry("Mahindra Lakewoods")}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 px-4 rounded-md transition-all shadow-sm cursor-pointer"
                >
                  Enquire Lakewoods
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href="#floor-plans"
                  onClick={() => onSelectProject("lakewoods")}
                  className="flex-1 flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 px-4 rounded-md transition-all text-center cursor-pointer"
                >
                  <Eye className="h-4 w-4 text-slate-500" />
                  View 2 & 3 BHK Plans
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
