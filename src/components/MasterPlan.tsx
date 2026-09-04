import React, { useState } from "react";
import { ZoomIn, Check } from "lucide-react";

interface MasterPlanProps {
  onSelectUnit: (unitType: string) => void;
}

export default function MasterPlan({ onSelectUnit }: MasterPlanProps) {
  const [activePlan, setActivePlan] = useState<"aquavista" | "lakewoods">("aquavista");
  const [zoomOpen, setZoomOpen] = useState(false);

  const plans = {
    aquavista: {
      name: "3, 3.5 & 4 BHK Duplex Master Layout",
      subtitle: "Lakefront Residences (1,053 to 1,610 Sft) with 2 Acre Central Park & 16,000 Sq.Ft. Clubhouse",
      imageUrl: "/aquavista/master pla aqua.webp",
      badge: "3, 3.5 & 4 BHK • ₹ 79 L* onwards",
      legendItems: [
        "Towers C7 & C8 Lake View Residential Enclave",
        "16,000 Sq.Ft. Clubhouse with Resort Swimming Pool",
        "2 Acre Central Park with Shaded Walkways",
        "Stepped Open Amphitheatre & Party Lawn",
        "Outdoor Tennis, Badminton & Basketball Courts"
      ]
    },
    lakewoods: {
      name: "2 BHK Deck Residences Master Layout",
      subtitle: "9.33 Acre Master Layout with Towers D & E (1,079 Sft) & 45% Open Spaces",
      imageUrl: "/lakewoods/lakewood masterplan.webp",
      badge: "2 BHK (1,079 Sft) • ₹ 84 L* (No GST*)",
      legendItems: [
        "Towers D & E with 2 BHK (1079 Sft) Ready to Move In Residences",
        "Stilt + 14 Floors with East & West Facing Orientations",
        "Zero Common Walls Architecture & 45% Open Green Landscapes",
        "Swimming Pool, Kids Splash Pool & Leisure Sun Deck",
        "Continuous Shaded Jogging Loop & Fitness Gymnasium"
      ]
    }
  };

  const current = plans[activePlan];

  return (
    <section id="master-plan" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Architectural Master Plans
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Thoughtful Master Planning <br />
            Harmonized with Nature
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-900 leading-relaxed pt-2">
            Explore the master layouts of the residences within Mahindra World City. Each enclave provides generous open space, dedicated sports courts, pedestrian safety, and tranquil green vistas.
          </p>
        </div>

        {/* Master Plan Selector Tabs */}
        <div className="flex items-center justify-center max-w-lg mx-auto bg-slate-100 p-1 rounded-lg border border-slate-200 mb-8 sm:mb-10">
          <button
            onClick={() => setActivePlan("aquavista")}
            className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md font-body text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
              activePlan === "aquavista"
                ? "bg-[#c8102e] text-white shadow-sm font-bold"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <span className="sm:hidden">3 & 4 BHK Duplex</span>
            <span className="hidden sm:inline">3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft)</span>
          </button>

          <button
            onClick={() => setActivePlan("lakewoods")}
            className={`flex-1 py-2 sm:py-2.5 px-2 sm:px-4 rounded-md font-body text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer text-center whitespace-nowrap ${
              activePlan === "lakewoods"
                ? "bg-[#c8102e] text-white shadow-sm font-bold"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <span className="sm:hidden">2 BHK (1,079 Sft)</span>
            <span className="hidden sm:inline">2 BHK Deck (1,079 Sft)</span>
          </button>
        </div>

        {/* Master Plan Display Card */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-8 lg:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Legend & Overview */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-200 text-slate-900 inline-block mb-2">
                {current.badge}
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-bold text-slate-900">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-900 mt-1.5 leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            {/* Master Plan Key Highlights */}
            <div className="space-y-2.5 pt-2 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                Key Master Plan Highlights:
              </span>
              <div className="space-y-2">
                {current.legendItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-900">
                    <Check className="h-4 w-4 text-[#c8102e] shrink-0" />
                    <span className="leading-tight font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setZoomOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 px-6 rounded-md shadow cursor-pointer text-center"
              >
                <ZoomIn className="h-4 w-4" />
                Enlarge Master Plan
              </button>
            </div>
          </div>

          {/* Right Column: Visual Render */}
          <div
            onClick={() => setZoomOpen(true)}
            className="lg:col-span-7 relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-sm"
          >
            <img loading="lazy" decoding="async"
              src={current.imageUrl}
              alt={current.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-950/20 hover:bg-slate-950/40 transition-colors flex items-center justify-center p-3 text-center">
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white text-slate-900 text-xs font-bold rounded shadow-md flex items-center gap-2 uppercase tracking-wider">
                <ZoomIn className="h-4 w-4 text-[#c8102e]" />
                View High-Resolution Plan
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Master Plan Zoom Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="bg-white rounded-xl max-w-5xl w-full p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 relative shadow-2xl max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start border-b border-slate-200 pb-3">
              <div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                  {current.name}
                </h3>
                <span className="text-[11px] sm:text-xs text-slate-500 line-clamp-1">{current.subtitle}</span>
              </div>
              <button
                onClick={() => setZoomOpen(false)}
                className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded cursor-pointer shrink-0 ml-2"
              >
                ✕ Close
              </button>
            </div>

            <div className="h-[45vh] sm:h-[60vh] p-2 bg-slate-100 rounded overflow-auto flex items-center justify-center">
              <img loading="lazy" decoding="async"
                src={current.imageUrl}
                alt={current.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-slate-500 border-t border-slate-200 pt-3">
              <span className="text-center sm:text-left">*Artistic master layout representation. Specific site details subject to final authority approvals.</span>
              <button
                onClick={() => {
                  setZoomOpen(false);
                  onSelectUnit(current.name);
                }}
                className="w-full sm:w-auto bg-[#c8102e] hover:bg-[#a60d26] text-white font-bold uppercase tracking-wider px-5 py-2.5 rounded shadow text-center cursor-pointer"
              >
                Schedule Site Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
