import React, { useState } from "react";
import { ZoomIn, Sparkles, Waves, Trees } from "lucide-react";

interface MasterPlanProps {
  onSelectUnit: (unitType: string) => void;
}

export default function MasterPlan({ onSelectUnit }: MasterPlanProps) {
  const [activePlan, setActivePlan] = useState<"aquavista" | "lakewoods">("aquavista");
  const [zoomOpen, setZoomOpen] = useState(false);

  const plans = {
    aquavista: {
      name: "Codename AquaVista Master Plan",
      subtitle: "Overlooking Serene Kolavai Lake with 2 Acre Central Park & 16,000 Sq.Ft. Clubhouse",
      imageUrl: "/aquavista-hero.jpg",
      badge: "Lakefront Master Layout",
      legendItems: [
        "Grand Entry / Exit Portal & Security",
        "2 Acre Central Park with Shaded Walkways",
        "Stepped Open Amphitheatre & Party Lawn",
        "Half Basketball Court & Play Enclave",
        "Children's Safe Activity Play Area",
        "16,000 Sq.Ft. Clubhouse (Multipurpose Hall, Gym, Aerobics, Indoor Games)",
        "Resort Swimming Pool & Kids Splash Pool Deck",
        "Outdoor Regulation Tennis Court",
        "Outdoor Badminton Courts",
        "Towers C7 & C8 Lake view Residential Enclave"
      ]
    },
    lakewoods: {
      name: "Mahindra Lakewoods Master Plan",
      subtitle: "3.8 Acre Central Vehicle Free Elevated Podium with Towers A to E",
      imageUrl: "/lakewoods-hero.jpg",
      badge: "3.8 Acre Podium Master Layout",
      legendItems: [
        "Ground Level Grand Entry / Exit & Security Cabin",
        "Ramp to Stilt & Covered Resident Car Parking",
        "3.8 Acre Vehicle Free Elevated Podium",
        "Kids Play Area & Safe Playgrounds",
        "Manicured Wellness Lawns & Yoga Pergola",
        "Open Air Badminton Court",
        "Podium Fitness Gymnasium",
        "Continuous Shaded Jogging Loop",
        "Swimming Pool, Kids Splash Pool & Pool Deck",
        "Multipurpose Hall, Indoor Games Room & Elevated Sky Lounge"
      ]
    }
  };

  const current = plans[activePlan];

  return (
    <section id="master-plan" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#e31837] bg-red-50 border border-red-200">
            <Sparkles className="h-3.5 w-3.5" />
            Architectural Master Plans
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Thoughtful Master Planning <br />
            <span className="text-[#e31837]">Harmonized with Nature</span>
          </h2>
          <div className="h-1 w-20 bg-[#e31837] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Explore the master layouts of both projects within Mahindra World City. Each development provides generous open space, dedicated sports courts, pedestrian safety, and tranquil water vistas.
          </p>
        </div>

        {/* Master Plan Selector Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          <button
            onClick={() => setActivePlan("aquavista")}
            className={`flex items-center justify-center gap-2 px-5 sm:px-8 py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activePlan === "aquavista"
                ? "bg-[#e31837] text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Waves className="h-4 w-4" />
            AquaVista Master Plan
          </button>

          <button
            onClick={() => setActivePlan("lakewoods")}
            className={`flex items-center justify-center gap-2 px-5 sm:px-8 py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activePlan === "lakewoods"
                ? "bg-[#059669] text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Trees className="h-4 w-4" />
            Lakewoods Master Plan
          </button>
        </div>

        {/* Master Plan Display Card */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 sm:p-8 lg:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Legend & Overview */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-2 ${
                activePlan === "aquavista" ? "bg-red-100 text-[#e31837]" : "bg-emerald-100 text-emerald-800"
              }`}>
                {current.badge}
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-bold text-slate-900">
                {current.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                {current.subtitle}
              </p>
            </div>

            {/* Master Plan Legend Items */}
            <div className="space-y-2.5 pt-2 border-t border-slate-200">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 block">
                Key Master Plan Elements:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {current.legendItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setZoomOpen(true)}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 px-6 rounded-lg shadow cursor-pointer text-center"
              >
                <ZoomIn className="h-4 w-4" />
                Enlarge Master Plan
              </button>
            </div>
          </div>

          {/* Right Column: Visual Render */}
          <div
            onClick={() => setZoomOpen(true)}
            className="lg:col-span-7 relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200 group cursor-pointer"
          >
            <img
              src={current.imageUrl}
              alt={current.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors flex items-center justify-center p-3 text-center">
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-white/95 text-slate-900 text-[11px] sm:text-xs font-bold rounded-full shadow-lg flex items-center gap-2 uppercase tracking-wider transform group-hover:scale-110 transition-transform">
                <ZoomIn className="h-4 w-4 text-[#e31837]" />
                Click to View High Res Master Plan
              </span>
            </div>
          </div>

        </div>

      </div>

      {/* Master Plan Zoom Modal */}
      {zoomOpen && (
        <div
          className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in"
          onClick={() => setZoomOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-4 relative shadow-2xl max-h-[94vh]"
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
                className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg cursor-pointer shrink-0 ml-2"
              >
                ✕ Close
              </button>
            </div>

            <div className="h-[45vh] sm:h-[60vh] p-2 bg-slate-100 rounded-xl overflow-auto flex items-center justify-center">
              <img
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
                className="w-full sm:w-auto bg-[#e31837] hover:bg-[#b9122c] text-white font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow text-center cursor-pointer"
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
