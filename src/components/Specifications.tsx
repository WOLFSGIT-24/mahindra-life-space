import React, { useState } from "react";
import { Check, Award } from "lucide-react";
import { projectSpecifications, sustainabilityScorecard } from "../data";

export default function Specifications() {
  const [activeTab, setActiveTab] = useState<"specs" | "sustainability">("specs");

  return (
    <section id="specifications" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Engineering & Sustainability
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Superior Specifications <br />
            IGBC Certified Green Homes
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-900 leading-relaxed pt-2">
            Constructed with high grade aluminium formwork RCC structures, luxury Roca & Grohe bath fittings, and IGBC Gold & Platinum pre certifications designed to lower electricity and water bills for a lifetime.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center justify-center max-w-md mx-auto bg-slate-100 p-1 rounded-lg border border-slate-200 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab("specs")}
            className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md font-body text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
              activeTab === "specs"
                ? "bg-[#c8102e] text-white shadow-sm font-bold"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <span className="sm:hidden">Specifications</span>
            <span className="hidden sm:inline">Technical Specifications</span>
          </button>
          <button
            onClick={() => setActiveTab("sustainability")}
            className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md font-body text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
              activeTab === "sustainability"
                ? "bg-[#c8102e] text-white shadow-sm font-bold"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <span className="sm:hidden">Green Scorecard</span>
            <span className="hidden sm:inline">Green Living Scorecard</span>
          </button>
        </div>

        {/* Technical Specs Tab Content */}
        {activeTab === "specs" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in">
            {projectSpecifications.map((specCat, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                    <h3 className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {specCat.category}
                    </h3>
                    <span className="text-xs font-bold text-[#c8102e]">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {specCat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block">
                          {item.feature}
                        </span>
                        <p className="text-xs text-slate-900 leading-relaxed font-body">
                          {item.spec}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center gap-1.5 text-xs text-slate-900 font-medium">
                  <Check className="h-3.5 w-3.5 text-[#c8102e] shrink-0" />
                  <span>Mahindra Brand Standard Guarantee</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Sustainability & Green Living Tab Content */}
        {activeTab === "sustainability" && (
          <div className="space-y-8 sm:space-y-12 animate-fade-in">
            
            {/* Green Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {sustainabilityScorecard.map((green, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 text-slate-900 rounded-xl p-5 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all duration-200 shadow-sm space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#c8102e]">
                        Initiative 0{idx + 1}
                      </span>
                      {green.stat && (
                        <span className="px-2.5 py-0.5 bg-slate-200 text-slate-900 font-display text-[11px] font-bold rounded border border-slate-300">
                          {green.stat}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                      {green.title}
                    </h4>

                    <p className="text-xs text-slate-900 leading-relaxed font-body">
                      {green.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-900 font-medium">
                    <Check className="h-3.5 w-3.5 text-[#c8102e] shrink-0" />
                    <span>IGBC Certified Standard</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Certification Assurance Banner */}
            <div className="bg-slate-50 text-slate-900 rounded-xl p-6 sm:p-8 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-sm text-center md:text-left">
              <div className="space-y-1.5">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Award className="h-5 w-5 text-[#c8102e] shrink-0" />
                  <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    India’s 1st IGBC Gold Certified Green Township
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-900 max-w-2xl leading-relaxed">
                  Mahindra World City adheres to stringent green urbanisation standards. Living here reduces carbon footprints, guarantees fresh air, and protects natural ecology with 3 Lakh+ trees planted.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="px-4 py-2 bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs rounded uppercase tracking-wider">
                  IGBC Gold & Platinum
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
