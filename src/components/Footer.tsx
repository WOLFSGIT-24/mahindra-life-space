import React from "react";
import { Phone, MapPin, Building2 } from "lucide-react";
import { projectsData } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const av = projectsData.aquavista;
  const lw = projectsData.lakewoods;

  return (
    <footer className="w-full bg-[#0b1120] text-white border-t border-slate-800 py-10 sm:py-16 font-body text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 space-y-8 sm:space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-[#c8102e] font-bold text-xl sm:text-2xl tracking-tight uppercase font-display">
                Mahindra
              </span>
              <span className="text-white font-bold text-sm sm:text-base uppercase tracking-wider font-display">
                Lifespaces
              </span>
            </div>
            <p className="text-xs text-white leading-relaxed max-w-sm">
              Joyful Homecomings • Sustainable Urbanisation. Developing India's premier integrated green townships and residential benchmarks.
            </p>

            <div className="space-y-2 text-xs text-white pt-1 sm:pt-2">
              <p className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#c8102e] shrink-0 mt-0.5" />
                <span>
                  <strong>Sales Office:</strong> The Canopy, 1st Floor, Block A, Unit No. 2, Mahindra World City, Chengalpattu 603004.
                </span>
              </p>
              <p className="flex items-start gap-2">
                <Building2 className="h-4 w-4 text-[#c8102e] shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Office:</strong> Admin Block, Central Avenue, Mahindra World City, Chengalpattu, Tamil Nadu 603004.
                </span>
              </p>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
              Quick Links
            </span>
            <ul className="space-y-2 text-xs text-white">
              {[
                { label: "Overview", id: "overview" },
                { label: "The 2 Projects", id: "projects" },
                { label: "Floor & Unit Plans", id: "floor-plans" },
                { label: "Master Plans", id: "master-plan" },
                { label: "Amenities & Clubs", id: "amenities" },
                { label: "1500 Acre City", id: "township" },
                { label: "Location & Transit", id: "location" },
                { label: "Specifications", id: "specifications" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-[#c8102e] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The 2 Projects RERA details */}
          <div className="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
              Project Registrations
            </span>
            <div className="space-y-2.5 sm:space-y-3 text-xs text-white">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-white font-bold block">{av.name}</span>
                <span className="text-[11px] text-white block mt-0.5">
                  TNRERA: <strong>{av.reraNumber}</strong>
                </span>
                <span className="text-[10px] text-white block">
                  Reg: {av.reraProjectName} (Valid: {av.reraValidUntil})
                </span>
              </div>

              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800">
                <span className="text-white font-bold block">{lw.name}</span>
                <span className="text-[11px] text-white block mt-0.5">
                  TNRERA: <strong>{lw.reraNumber}</strong>
                </span>
                <span className="text-[10px] text-white block">
                  Reg: {lw.reraProjectName} (Valid: {lw.reraValidUntil})
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Site Visits */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <span className="text-[11px] font-bold text-white uppercase tracking-wider block">
              Direct Contact
            </span>
            <p className="text-xs text-white">
              Connect with our official relationship desk for brochures, unit availability & pricing.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <a
                href="tel:08047359991"
                className="flex items-center gap-2 text-sm font-bold text-white hover:text-[#c8102e] transition-colors"
              >
                <Phone className="h-4 w-4 text-[#c8102e]" />
                080 4735 9991
              </a>
              <p className="text-[11px] text-white">
                Open Daily: 9:30 AM to 7:00 PM IST
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-slate-800 w-full" />

        {/* Legal Disclaimers from PDF */}
        <div className="space-y-3 sm:space-y-4 text-[11px] text-white leading-relaxed">
          <div className="space-y-2">
            <p>
              <strong>Codename AquaVista Disclaimer:</strong> Codename AquaVista is registered as “Aqualily phase 2C2” under TNRERA No: TN/01/Building/0174/2022 dated 20.05.2022 valid up to 31.12.2024 and details are available at <a href="https://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c8102e]">www.rera.tn.gov.in</a>. Developed by Mahindra World City Developers Limited in phases.
            </p>
            <p>
              <strong>Mahindra Lakewoods Disclaimer:</strong> This project is registered as “Lakewoods Towers D & E” under TNRERA No. TN/01/Building/0041/2022 dated 01.02.2022 valid up to 31.05.2025 available on <a href="https://www.rera.tn.gov.in" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#c8102e]">www.rera.tn.gov.in</a>. Developed by Mahindra Integrated Township Limited in phases.
            </p>
            <p>
              This communication is purely conceptual and for representational purposes only. Any furniture, fixtures and white goods shown are not part of the offering and purely for showcasing possibilities. Distances and timelines are indicative and approximate. Mentioned prices do not include stamp duty and registration fees. Terms and conditions apply.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 border-t border-slate-800 text-[11px]">
            <div>
              © {new Date().getFullYear()} Mahindra Lifespaces & Mahindra World City. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
                className="hover:text-[#c8102e] underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>|</span>
              <button
                onClick={(e) => { e.preventDefault(); onOpenTerms?.(); }}
                className="hover:text-[#c8102e] underline cursor-pointer"
              >
                Terms of Use
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
