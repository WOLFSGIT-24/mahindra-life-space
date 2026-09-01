import React, { useState } from "react";
import { Lock, ZoomIn, Check } from "lucide-react";
import { floorPlansData } from "../data";
import { FloorPlanUnit } from "../types";

interface FloorPlansProps {
  onSelectUnit: (unitType: string, project?: string) => void;
  isUnlocked: boolean;
  onUnlockRequest: (unitType?: string) => void;
  selectedProjectFilter?: "all" | "aquavista" | "lakewoods";
}

export default function FloorPlans({
  onSelectUnit,
  isUnlocked,
  onUnlockRequest,
  selectedProjectFilter = "all",
}: FloorPlansProps) {
  const [projectFilter, setProjectFilter] = useState<"all" | "aquavista" | "lakewoods">(selectedProjectFilter);
  const [typologyFilter, setTypologyFilter] = useState<string>("all");
  const [selectedPlanModal, setSelectedPlanModal] = useState<FloorPlanUnit | null>(null);

  const filteredPlans = floorPlansData.filter((plan) => {
    const matchesProject = projectFilter === "all" || plan.projectId === projectFilter;
    const matchesTypology =
      typologyFilter === "all" ||
      (typologyFilter === "2bhk" && plan.bedrooms === 2) ||
      (typologyFilter === "3bhk" && plan.bedrooms === 3 && !plan.type.includes("3.5")) ||
      (typologyFilter === "3.5bhk" && plan.type.includes("3.5")) ||
      (typologyFilter === "4bhk" && plan.bedrooms === 4);
    return matchesProject && matchesTypology;
  });

  const handlePlanClick = (plan: FloorPlanUnit) => {
    if (!isUnlocked) {
      onUnlockRequest(`${plan.projectName}: ${plan.type}`);
    } else {
      setSelectedPlanModal(plan);
    }
  };

  return (
    <section id="floor-plans" className="w-full py-12 sm:py-16 lg:py-24 bg-slate-50 text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            Floor Plans & Layouts
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Efficient Living Spaces <br />
            Designed for Light & Ventilation
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed pt-2">
            Every apartment at <strong>Codename AquaVista</strong> and <strong>Mahindra Lakewoods</strong> is crafted with zero space wastage, large balconies or private decks, and adheres strictly to RERA carpet area measurements.
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm w-full sm:w-auto">
            {[
              { id: "all", label: "All Projects" },
              { id: "aquavista", label: "AquaVista" },
              { id: "lakewoods", label: "Lakewoods" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setProjectFilter(tab.id as any)}
                className={`flex-1 sm:flex-none px-3.5 sm:px-4 py-2 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  projectFilter === tab.id
                    ? "bg-[#c8102e] text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Typology Filter */}
          <div className="flex flex-wrap justify-center gap-1 sm:gap-1.5 bg-white p-1.5 rounded-lg border border-slate-200 shadow-sm w-full sm:w-auto">
            {[
              { id: "all", label: "All Types" },
              { id: "2bhk", label: "2 BHK" },
              { id: "3bhk", label: "3 BHK" },
              { id: "3.5bhk", label: "3.5 BHK" },
              { id: "4bhk", label: "4 BHK Duplex" },
            ].map((type) => (
              <button
                key={type.id}
                onClick={() => setTypologyFilter(type.id)}
                className={`px-3 py-2 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  typologyFilter === type.id
                    ? "bg-slate-900 text-white shadow-sm font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Floor Plan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="p-4 sm:p-5 border-b border-slate-100 flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-900 inline-block mb-1">
                      {plan.projectName}
                    </span>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900 leading-tight">
                      {plan.type}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-display text-sm sm:text-base font-bold text-slate-900">
                      {plan.carpetAreaSqFt}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-slate-900 font-semibold uppercase block">
                      Sq.Ft. Carpet
                    </span>
                  </div>
                </div>

                {/* Blueprint Image Preview Container */}
                <div
                  onClick={() => handlePlanClick(plan)}
                  className="relative aspect-[4/3] bg-slate-50 p-4 flex items-center justify-center overflow-hidden cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <img
                    src={plan.imageUrl}
                    alt={plan.title}
                    className={`max-w-full max-h-full object-contain transition-all duration-300 ${
                      isUnlocked
                        ? "filter-none"
                        : "filter blur-sm scale-95 select-none pointer-events-none"
                    }`}
                  />

                  {/* Lock Shield */}
                  {!isUnlocked ? (
                    <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-4">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg mb-2">
                        <Lock className="h-4 sm:h-5 w-4 sm:w-5 text-[#c8102e]" />
                      </div>
                      <span className="px-3.5 py-1.5 bg-white text-slate-900 text-xs font-bold rounded shadow tracking-wider uppercase">
                        Unlock Floor Plan
                      </span>
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-slate-950/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded shadow-lg flex items-center gap-1.5 uppercase tracking-wider">
                        <ZoomIn className="h-4 w-4 text-[#c8102e]" />
                        Zoom Blueprint
                      </span>
                    </div>
                  )}
                </div>

                {/* Specifications & Area Breakdown */}
                <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 sm:p-3 rounded border border-slate-100">
                    <div>
                      <span className="text-slate-900 block text-[10px] uppercase font-semibold">RERA Carpet</span>
                      <span className="font-semibold text-slate-900">{plan.carpetAreaSqM} Sq.M ({plan.carpetAreaSqFt} Sft)</span>
                    </div>
                    <div>
                      <span className="text-slate-900 block text-[10px] uppercase font-semibold">Balcony / Deck</span>
                      <span className="font-semibold text-slate-900">{plan.balconyOrDeckSqFt} Sq.Ft</span>
                    </div>
                    <div>
                      <span className="text-slate-900 block text-[10px] uppercase font-semibold">Utility Area</span>
                      <span className="font-semibold text-slate-900">{plan.utilitySqFt} Sq.Ft</span>
                    </div>
                    <div>
                      <span className="text-slate-900 block text-[10px] uppercase font-semibold">Orientation</span>
                      <span className="font-semibold text-slate-900 truncate block">
                        {plan.projectId === "lakewoods" ? "0 Common Walls" : "Lake / Park View"}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="space-y-1 text-xs text-slate-900">
                    {plan.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5">
                        <Check className="h-3.5 w-3.5 text-[#c8102e] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-4 sm:p-5 pt-0">
                <button
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-3 px-4 rounded-md font-body text-xs font-bold tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isUnlocked
                      ? "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                      : "bg-[#c8102e] hover:bg-[#a60d26] text-white shadow-sm"
                  }`}
                >
                  {isUnlocked ? (
                    <>
                      <ZoomIn className="h-4 w-4" />
                      View Detailed Plan
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      Unlock Floor Plan
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Blueprint Magnifier Modal */}
      {selectedPlanModal && (
        <div
          className="fixed inset-0 bg-slate-950/90 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in"
          onClick={() => setSelectedPlanModal(null)}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 relative shadow-2xl overflow-hidden max-h-[94vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start border-b border-slate-200 pb-3 sm:pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-slate-100 text-slate-800 inline-block mb-1">
                  {selectedPlanModal.projectName}
                </span>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-slate-900">
                  {selectedPlanModal.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-slate-500 font-semibold uppercase mt-0.5">
                  {selectedPlanModal.totalAreaDisplay}
                </p>
              </div>
              <button
                onClick={() => setSelectedPlanModal(null)}
                className="text-slate-500 hover:text-slate-900 font-body text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded focus:outline-none cursor-pointer shrink-0"
              >
                ✕ Close
              </button>
            </div>

            {/* High-res Image Preview */}
            <div className="h-[40vh] sm:h-[48vh] p-2 sm:p-4 bg-slate-50 rounded border border-slate-200 flex items-center justify-center overflow-auto">
              <img
                src={selectedPlanModal.imageUrl}
                alt={selectedPlanModal.title}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Key highlights & Action buttons */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs font-body border-t border-slate-200 pt-3 sm:pt-4">
              <div className="text-slate-600 text-left w-full sm:w-auto">
                <p className="font-semibold text-slate-800 text-[11px] sm:text-xs">
                  RERA Carpet: {selectedPlanModal.carpetAreaSqM} Sq.M ({selectedPlanModal.carpetAreaSqFt} Sq.Ft) | Balcony/Deck: {selectedPlanModal.balconyOrDeckSqFt} Sq.Ft
                </p>
                <p className="text-[10px] text-slate-400 italic">
                  *All dimensions strictly comply with Tamil Nadu RERA provisions.
                </p>
              </div>

              <div className="flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const unit = `${selectedPlanModal.projectName}: ${selectedPlanModal.type}`;
                    setSelectedPlanModal(null);
                    onSelectUnit(unit, selectedPlanModal.projectName);
                  }}
                  className="w-full sm:w-auto bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase px-6 py-3 sm:py-3.5 rounded shadow-sm transition-all cursor-pointer text-center"
                >
                  Request Price Sheet
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
