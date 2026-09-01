import React, { useState } from "react";
import { MapPin, ExternalLink, Sparkles } from "lucide-react";
import { connectivityDestinations } from "../data";

interface LocationProps {
  onOpenEnquiry: (topic?: string) => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "transit" | "work" | "education" | "airport">("all");

  const filteredDestinations = connectivityDestinations.filter(
    (d) => activeCategory === "all" || d.category === activeCategory
  );

  return (
    <section id="location" className="w-full py-12 sm:py-16 lg:py-24 bg-slate-50 text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#e31837] bg-red-50 border border-red-200">
            <Sparkles className="h-3.5 w-3.5" />
            Prime GST Road Corridor
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Strategic Location <br />
            <span className="text-[#e31837]">Seamless Arterial Connectivity</span>
          </h2>
          <div className="h-1 w-20 bg-[#e31837] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Located directly on the Grand Southern Trunk Road (NH 32) at Chengalpattu with an <strong>on site Paranur railway station</strong>, Mahindra World City provides rapid transit to Chennai city centre, international airports, tech parks, and top universities.
          </p>
        </div>

        {/* Interactive Google Map and Connectivity Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch mb-8 sm:mb-12">
          
          {/* Left Column: Interactive Google Map */}
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 flex flex-col min-h-[300px] sm:min-h-[380px] lg:min-h-[420px]">
            <div className="bg-slate-900 text-white p-3.5 sm:p-4 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#e31837]" />
                <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-wider truncate">
                  Mahindra World City, Chengalpattu
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Mahindra+World+City+Chengalpattu+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] sm:text-[11px] text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 shrink-0 ml-2"
              >
                Open in Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            <iframe
              src="https://maps.google.com/maps?q=Mahindra%20World%20City%20Chengalpattu%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "260px", flexGrow: 1 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahindra World City Chennai Location Map"
            />
          </div>

          {/* Right Column: Category Filter & Key Distances */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {[
                  { id: "all", label: "All Hubs" },
                  { id: "transit", label: "Rail & Highway" },
                  { id: "work", label: "Corporate Hubs" },
                  { id: "education", label: "Colleges & Hospitals" },
                  { id: "airport", label: "Airports" },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id as any)}
                    className={`px-3 sm:px-3.5 py-1.5 rounded-full font-body text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-[#e31837] text-white shadow-sm"
                        : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Distances List */}
              <div className="space-y-2.5 sm:space-y-3 max-h-[360px] sm:max-h-[380px] overflow-y-auto pr-1">
                {filteredDestinations.map((dest) => (
                  <div
                    key={dest.id}
                    className="p-3 sm:p-4 bg-white rounded-xl border border-slate-200 hover:border-red-300 shadow-sm transition-all flex items-center justify-between gap-3 sm:gap-4"
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-red-50 text-[#e31837] flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-lg sm:text-xl">
                          {dest.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900">
                          {dest.name}
                        </h4>
                        {dest.detail && (
                          <p className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1">
                            {dest.detail}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-display text-sm sm:text-base font-black text-[#e31837] block">
                        {dest.distance}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-slate-400 font-semibold uppercase">
                        ~{dest.timeEst}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div className="text-[11px] sm:text-xs text-slate-600 text-center sm:text-left">
                <strong className="text-slate-900 block">Want personalized driving route directions?</strong>
                Our team can share detailed GPS coordinates & transit maps.
              </div>
              <button
                onClick={() => onOpenEnquiry("Location Consultation")}
                className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-body text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-md shrink-0 shadow cursor-pointer text-center"
              >
                Get Route Map
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
