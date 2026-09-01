import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { amenitiesCategories } from "../data";

interface AmenitiesProps {
  onOpenEnquiry: (topic?: string) => void;
}

export default function Amenities({ onOpenEnquiry }: AmenitiesProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const activeCategory = amenitiesCategories[activeTab];

  return (
    <section id="amenities" className="w-full py-12 sm:py-16 lg:py-24 bg-[#0f172a] text-white scroll-mt-20 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-red-400">
            Lifestyle & Leisure
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            Designed for Fitness <br />
            Wellness & Community
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-white leading-relaxed pt-2">
            From the 16,000 sq.ft clubhouse at <strong>AquaVista</strong> to the 3.8 acre vehicle free podium at <strong>Lakewoods</strong> and the prestigious <strong>MWC Club</strong>, experience leisure on a grand scale.
          </p>
        </div>

        {/* Category Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12">
          {amenitiesCategories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#c8102e] text-white font-bold shadow-sm"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }`}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>

        {/* Active Category Intro */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h3 className="font-display text-lg sm:text-xl font-bold text-white">
            {activeCategory.categoryName}
          </h3>
          <p className="text-xs sm:text-sm text-white mt-1">
            {activeCategory.subtitle}
          </p>
        </div>

        {/* Amenities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activeCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-sm"
            >
              <div>
                {item.image && (
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400">
                      Feature 0{idx + 1}
                    </span>
                    {item.tag && (
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-white">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div>
                    <h4 className="font-display text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-white mt-1.5 leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-white">
                  <span className="flex items-center gap-1.5 text-white text-[11px] font-medium">
                    <Check className="h-3.5 w-3.5 text-[#c8102e]" /> Ready Facility
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(item.title)}
                    className="text-red-400 hover:text-red-300 font-semibold uppercase tracking-wider text-[11px] flex items-center gap-1 cursor-pointer"
                  >
                    Enquire <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
