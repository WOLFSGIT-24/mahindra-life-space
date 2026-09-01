import React, { useState } from "react";
import { Download, Calendar, Check, ArrowRight } from "lucide-react";
import { projectsData } from "../data";

interface ProjectHighlightsProps {
  onOpenBooking?: (unitType?: string, projectId?: string) => void;
  onOpenDownload?: () => void;
  onOpenEnquiry?: (topicOrProject?: string) => void;
  onRequestDownload?: () => void;
  onSelectProject?: (projectId: "aquavista" | "lakewoods") => void;
}

export default function ProjectHighlights({
  onOpenBooking,
  onOpenDownload,
  onOpenEnquiry,
  onRequestDownload,
  onSelectProject,
}: ProjectHighlightsProps) {
  const [filter, setFilter] = useState<"both" | "aquavista" | "lakewoods">("both");

  const handleBooking = (unitType?: string, projectId?: string) => {
    if (onOpenBooking) onOpenBooking(unitType, projectId);
    else if (onOpenEnquiry) onOpenEnquiry(projectId || unitType);
  };

  const handleDownload = () => {
    if (onOpenDownload) onOpenDownload();
    else if (onRequestDownload) onRequestDownload();
  };

  const av = projectsData.aquavista;
  const lw = projectsData.lakewoods;

  const showAquaVista = filter === "both" || filter === "aquavista";
  const showLakewoods = filter === "both" || filter === "lakewoods";

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
            Choose Your Ideal Home
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-900 leading-relaxed pt-2">
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
              onClick={() => setFilter(tab.id as any)}
              className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                filter === tab.id
                  ? "bg-[#c8102e] text-white shadow-sm font-bold"
                  : "bg-slate-100 text-slate-900 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className={`grid grid-cols-1 ${filter === "both" ? "lg:grid-cols-2" : "max-w-4xl mx-auto"} gap-8 sm:gap-10`}>
          
          {/* PROJECT 1: Codename AquaVista Card */}
          {showAquaVista && (
            <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Visual Banner */}
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
                    <span className="px-2.5 sm:px-3 py-1 bg-white text-slate-900 text-[11px] font-semibold tracking-wider uppercase rounded">
                      {av.greenRating}
                    </span>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {av.name}
                    </h3>
                    <p className="text-xs text-white/90 font-medium">
                      Towers C7 & C8 • Overlooking Kolavai Lake
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <div>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Typology</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">3, 3.5 & 4 BHK</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Carpet Area</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">1053 to 1610 Sft</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Clubhouse</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#c8102e] block truncate">16,000 Sq.Ft</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-slate-900 italic border-l-2 border-[#c8102e] pl-3 py-1 bg-slate-50">
                    "{av.tagline}"
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      Signature Features:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-900">
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

                  {/* Pricing Box */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-900 font-bold uppercase tracking-wider block">
                        Launch Price Range
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {av.startingPrice} <span className="text-xs font-normal text-slate-900">onwards</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#c8102e] uppercase tracking-wider">
                      {av.carpetAreaRange}
                    </span>
                  </div>

                  {/* RERA Strip */}
                  <div className="text-[11px] text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <strong>RERA:</strong> {av.reraNumber} ({av.reraProjectName}) • Valid: {av.reraValidUntil}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleBooking(undefined, "Codename AquaVista (3, 3.5 & 4 BHK Duplex)")}
                  className="flex-1 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  Book Site Visit
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-900 font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded border border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="h-4 w-4 text-[#c8102e]" />
                  Download Brochure
                </button>
              </div>
            </div>
          )}

          {/* PROJECT 2: Mahindra Lakewoods Card */}
          {showLakewoods && (
            <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Visual Banner */}
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
                      Zero Common Walls
                    </span>
                    <span className="px-2.5 sm:px-3 py-1 bg-white text-slate-900 text-[11px] font-semibold tracking-wider uppercase rounded">
                      {lw.greenRating}
                    </span>
                  </div>

                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {lw.name}
                    </h3>
                    <p className="text-xs text-white/90 font-medium">
                      Towers A to E • 3.8 Acre Central Elevated Podium
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                    <div>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Typology</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">2 & 3 BHK</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Carpet Area</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">751 to 1013 Sft</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Podium</span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#c8102e] block truncate">3.8 Acres</span>
                    </div>
                  </div>

                  {/* Tagline */}
                  <p className="text-xs sm:text-sm text-slate-900 italic border-l-2 border-[#c8102e] pl-3 py-1 bg-slate-50">
                    "{lw.tagline}"
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2.5 sm:space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                      Signature Features:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-900">
                      {[
                        "Multi storeyed towers (Towers A to E) with spacious 2 & 3 BHK deck residences",
                        "Maximum privacy: Zero common walls between homes for peaceful living",
                        "3.8 acre central vehicle free podium park with lush landscaping and open green lawns",
                        "Private decks with authentic wooden tile finish offering views of lake, hill & podium",
                        "Swimming pool, kids pool, elevated lounge pavilion, gym & open badminton court",
                        "Wide entrance corridor leading to open concept living and dining spaces with hand wash nook",
                        "Pre certified IGBC Platinum green homes with 100% SRI high albedo paint on terrace"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-[#c8102e] shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-900 font-bold uppercase tracking-wider block">
                        Launch Price Range
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {lw.startingPrice} <span className="text-xs font-normal text-slate-900">onwards</span>
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#c8102e] uppercase tracking-wider">
                      {lw.carpetAreaRange}
                    </span>
                  </div>

                  {/* RERA Strip */}
                  <div className="text-[11px] text-slate-900 bg-slate-50 p-2.5 rounded border border-slate-200">
                    <strong>RERA:</strong> {lw.reraNumber} ({lw.reraProjectName}) • Valid: {lw.reraValidUntil}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-5 sm:p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => handleBooking(undefined, "Mahindra Lakewoods (2 & 3 BHK)")}
                  className="flex-1 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  Book Site Visit
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-900 font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded border border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="h-4 w-4 text-[#c8102e]" />
                  Download Brochure
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
