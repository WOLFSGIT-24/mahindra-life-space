import React, { useState } from "react";
import { ExternalLink } from "lucide-react";
import { connectivityDestinations } from "../data";

interface LocationProps {
  onOpenEnquiry: (topic?: string) => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "transit" | "work" | "education" | "airport">("all");
  const [mapView, setMapView] = useState<"google" | "regional">("google");

  const filteredDestinations = connectivityDestinations.filter(
    (d) => activeCategory === "all" || d.category === activeCategory
  );

  return (
    <section id="location" className="w-full py-12 sm:py-16 lg:py-24 bg-slate-50 text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Strategic Connectivity
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Strategic Location <br />
            Seamless Arterial Connectivity
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-900 leading-relaxed pt-2">
            Located directly on the Grand Southern Trunk Road (NH 32) at Chengalpattu with an <strong>on site Paranur railway station</strong>, Mahindra World City provides rapid transit to Chennai city centre, international airports, tech parks, and top universities.
          </p>
        </div>

        {/* Interactive Google Map and Connectivity Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-stretch mb-8 sm:mb-12">
          
          {/* Left Column: Interactive Map with Toggle */}
          <div className="lg:col-span-6 rounded-xl overflow-hidden shadow-sm border border-slate-200 bg-slate-50 flex flex-col min-h-[340px] sm:min-h-[400px] lg:min-h-[440px]">
            <div className="bg-slate-50 text-slate-900 p-3 sm:p-4 border-b border-slate-200 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 bg-slate-200 p-1 rounded-md">
                <button
                  onClick={() => setMapView("google")}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                    mapView === "google" ? "bg-[#c8102e] text-white shadow-sm font-bold" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  Google Map
                </button>
                <button
                  onClick={() => setMapView("regional")}
                  className={`px-2.5 py-1 rounded text-[11px] font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                    mapView === "regional" ? "bg-[#c8102e] text-white shadow-sm font-bold" : "text-slate-700 hover:text-slate-900"
                  }`}
                >
                  Regional Plan
                </button>
              </div>

              <a
                href="https://maps.google.com/?q=Mahindra+World+City+Chengalpattu+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-800 hover:text-[#c8102e] font-semibold flex items-center gap-1 shrink-0"
              >
                Open in Maps <ExternalLink className="h-3 w-3" />
              </a>
            </div>
            
            {mapView === "google" ? (
              <iframe
                src="https://maps.google.com/maps?q=Mahindra%20World%20City%20Chengalpattu%20Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px", flexGrow: 1 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mahindra World City Chennai Location Map"
              />
            ) : (
              <div className="flex-1 bg-slate-100 flex items-center justify-center p-2 overflow-auto">
                <img loading="lazy" decoding="async"
                  src="/aquavista/location.webp"
                  alt="Mahindra World City Regional Connectivity Map"
                  className="max-w-full max-h-[380px] object-contain rounded"
                />
              </div>
            )}
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
                    className={`px-3.5 py-1.5 rounded-md font-body text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                      activeCategory === cat.id
                        ? "bg-[#c8102e] text-white shadow-sm font-bold"
                        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100"
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
                    className="p-3.5 sm:p-4 bg-white rounded-lg border border-slate-200 shadow-sm flex items-center justify-between gap-3 sm:gap-4"
                  >
                    <div>
                      <h4 className="font-display text-xs sm:text-sm font-bold text-slate-900">
                        {dest.name}
                      </h4>
                      {dest.detail && (
                        <p className="text-[11px] text-slate-900 line-clamp-1 mt-0.5">
                          {dest.detail}
                        </p>
                      )}
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-display text-sm sm:text-base font-bold text-[#c8102e] block">
                        {dest.distance}
                      </span>
                      <span className="text-[10px] text-slate-900 font-semibold uppercase">
                        ~{dest.timeEst}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA */}
            <div className="p-4 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm">
              <div className="text-xs text-slate-900 text-center sm:text-left">
                <strong className="text-slate-900 block">Want personalized driving route directions?</strong>
                Our team can share detailed GPS coordinates & transit maps.
              </div>
              <button
                onClick={() => onOpenEnquiry("Location Consultation")}
                className="w-full sm:w-auto bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow-sm cursor-pointer text-center"
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
