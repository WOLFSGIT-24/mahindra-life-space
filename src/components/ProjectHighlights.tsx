import React, { useState } from "react";
import { Download, Calendar, Check, ArrowRight } from "lucide-react";
import { projectsData } from "../data";

interface ProjectHighlightsProps {
  onOpenBooking?: (unitType?: string, projectId?: string) => void;
  onOpenDownload?: (projectId?: string) => void;
  onOpenEnquiry?: (topicOrProject?: string) => void;
  onRequestDownload?: (projectId?: string) => void;
  onSelectProject?: (projectId: "aquavista" | "lakewoods") => void;
}

export default function ProjectHighlights({
  onOpenBooking,
  onOpenDownload,
  onOpenEnquiry,
  onRequestDownload,
  onSelectProject,
}: ProjectHighlightsProps) {
  const handleBooking = (unitType?: string, projectId?: string) => {
    if (onOpenBooking) onOpenBooking(unitType, projectId);
    else if (onOpenEnquiry) onOpenEnquiry(projectId || unitType);
  };

  const handleDownload = (projectId?: string) => {
    if (onOpenDownload) onOpenDownload();
    else if (onRequestDownload) onRequestDownload(projectId);
  };

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
            Choose Your Ideal Home
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-900 leading-relaxed pt-2">
            Explore both signature residential configurations at Mahindra World City: <strong>3, 3.5 & 4 BHK Duplex Residences (1,053 - 1,610 Sq.Ft.)</strong> starting from ₹ 79 Lakhs*, and ready-to-move-in <strong>2 BHK Deck Residences (1,079 Sq.Ft.)</strong> at ₹ 84 Lakhs* with No GST*.
          </p>
        </div>

        {/* Projects Cards Grid - Both Residences Displayed Directly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* RESIDENCE 1: 3, 3.5 & 4 BHK Duplex Card */}
          <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
              <div>
                {/* Visual Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                  <img loading="lazy" decoding="async"
                    src={av.heroImage}
                    alt="3, 3.5 & 4 BHK Duplex Residences at Mahindra World City"
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
                        "Lakefront 3, 3.5 & 4 BHK Duplex residences overlooking Kolavai lake",
                        "Grand 16,000 Sq.Ft resort clubhouse with swimming pool & gymnasium",
                        "2 Acre central park with open amphitheatre & sports courts",
                        "Private rooftop party terraces & full-height French balcony windows"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-[#c8102e] shrink-0" />
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
                  onClick={() => handleBooking(undefined, "3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft)")}
                  className="flex-1 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="h-4 w-4" />
                  Book Site Visit
                </button>
                <button
                  onClick={() => handleDownload("3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft)")}
                  className="flex-1 bg-white hover:bg-slate-50 text-slate-900 font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded border border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="h-4 w-4 text-[#c8102e]" />
                  Download Brochure
                </button>
              </div>
            </div>

          {/* PROJECT 2: Mahindra Lakewoods Card */}
          <div className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all duration-300 overflow-hidden flex flex-col justify-between">
            <div>
              {/* Visual Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img loading="lazy" decoding="async"
                  src={lw.heroImage}
                  alt="2 BHK Deck Residences at Mahindra World City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {/* Top Badges */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between">
                  <span className="px-2.5 sm:px-3 py-1 bg-[#c8102e] text-white text-[11px] font-semibold tracking-wider uppercase rounded">
                    Ready to Move In
                  </span>
                  <span className="px-2.5 sm:px-3 py-1 bg-white text-slate-900 text-[11px] font-semibold tracking-wider uppercase rounded">
                    No GST*
                  </span>
                </div>

                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    {lw.name}
                  </h3>
                  <p className="text-xs text-white/90 font-medium">
                    Towers D & E • 9.33 Acres • Stilt + 14 Floors • 166 Units
                  </p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-8 space-y-4 sm:space-y-6">
                {/* Key Stats Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-200 text-center">
                  <div>
                    <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Typology</span>
                    <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">2 BHK (1079 Sft)</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Status</span>
                    <span className="font-display text-xs sm:text-sm font-bold text-[#c8102e] block truncate">Ready to Move In</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-900 font-semibold uppercase tracking-wider block">Payment Plan</span>
                    <span className="font-display text-xs sm:text-sm font-bold text-slate-900 block truncate">10-70-20</span>
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
                      "9.33 Acre land parcel with 166 units across Stilt + 14 floors (Towers D & E)",
                      "Ready to move in residences with NO GST* & special 10-70-20 payment plan",
                      "Spacious 1079 Sq.Ft 2 BHK homes with East and West facing options",
                      "Zero common walls architecture with 45% open green spaces"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-[#c8102e] shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Pricing Box */}
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-900 font-bold uppercase tracking-wider block">
                      Starting Price (No GST*)
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
                onClick={() => handleBooking(undefined, "2 BHK Deck Residences (1,079 Sft)")}
                className="flex-1 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="h-4 w-4" />
                Book Site Visit
              </button>
              <button
                onClick={() => handleDownload("2 BHK Deck Residences (1,079 Sft)")}
                className="flex-1 bg-white hover:bg-slate-50 text-slate-900 font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded border border-slate-300 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="h-4 w-4 text-[#c8102e]" />
                Download Brochure
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
