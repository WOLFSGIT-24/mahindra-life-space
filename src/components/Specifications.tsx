import React, { useState } from "react";
import { Leaf, CheckCircle2, Award } from "lucide-react";
import { projectSpecifications, sustainabilityScorecard } from "../data";

export default function Specifications() {
  const [activeTab, setActiveTab] = useState<"specs" | "sustainability">("specs");

  return (
    <section id="specifications" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#059669] bg-emerald-50 border border-emerald-200">
            <Leaf className="h-3.5 w-3.5" />
            Quality & Sustainability
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Superior Specifications <br />
            <span className="text-[#059669]">IGBC Certified Green Homes</span>
          </h2>
          <div className="h-1 w-20 bg-[#059669] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Constructed with high grade aluminium formwork RCC structures, luxury Roca & Grohe bath fittings, and IGBC Gold & Platinum pre certifications designed to lower electricity and water bills for a lifetime.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === "specs"
                ? "bg-slate-900 text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Technical Specifications
          </button>
          <button
            onClick={() => setActiveTab("sustainability")}
            className={`px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeTab === "sustainability"
                ? "bg-[#059669] text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Green & Sustainable Living
          </button>
        </div>

        {/* Technical Specifications Tab Content */}
        {activeTab === "specs" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 animate-fade-in">
            {projectSpecifications.map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-4 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-3 sm:space-y-4"
              >
                <div className="flex items-center gap-2.5 border-b border-slate-200 pb-3">
                  <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-lg bg-red-100 text-[#e31837] flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="text-xs sm:text-sm">
                      <span className="font-bold text-slate-800 block mb-0.5">
                        {item.feature}:
                      </span>
                      <p className="text-slate-600 leading-relaxed font-body text-[11px] sm:text-xs">
                        {item.spec}
                      </p>
                    </div>
                  ))}
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
                  className="bg-emerald-950/90 text-white rounded-2xl p-5 sm:p-8 border border-emerald-500/20 shadow-xl space-y-3 sm:space-y-4 flex flex-col justify-between hover:border-emerald-400/50 transition-all"
                >
                  <div className="space-y-2.5 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-emerald-800/60 text-emerald-300 flex items-center justify-center">
                        <span className="material-symbols-outlined text-xl sm:text-2xl">
                          {green.icon}
                        </span>
                      </div>
                      {green.stat && (
                        <span className="px-2.5 sm:px-3 py-1 bg-emerald-500/20 text-emerald-300 font-display text-[11px] sm:text-xs font-black rounded-full border border-emerald-400/30">
                          {green.stat}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                      {green.title}
                    </h4>

                    <p className="text-[11px] sm:text-xs text-emerald-100/80 leading-relaxed font-body">
                      {green.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-emerald-800/60 flex items-center gap-2 text-[10px] sm:text-[11px] text-emerald-300 font-semibold">
                    <CheckCircle2 className="h-3.5 sm:h-4 w-3.5 sm:w-4 text-emerald-400 shrink-0" />
                    <span>IGBC Certified Standard</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Certification Assurance Banner */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xl text-center md:text-left">
              <div className="space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <Award className="h-5 sm:h-6 w-5 sm:h-6 text-amber-400 shrink-0" />
                  <h3 className="font-display text-lg sm:text-2xl font-bold text-white">
                    India’s 1st IGBC Gold Certified Green Township
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Mahindra World City adheres to stringent green urbanisation standards. Living here reduces carbon footprints, guarantees fresh air, and protects natural ecology with 3 Lakh+ trees planted.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="px-4 py-2 bg-emerald-900/80 border border-emerald-500/40 text-emerald-300 font-bold text-xs rounded-lg uppercase tracking-wider">
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
