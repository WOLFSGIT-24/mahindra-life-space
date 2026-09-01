import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Download, Building2, ChevronRight } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
  onRequestDownload: () => void;
  onToggleAdmin: () => void;
  isAdminActive: boolean;
  selectedProject: "all" | "aquavista" | "lakewoods";
  onSelectProject: (proj: "all" | "aquavista" | "lakewoods") => void;
}

export default function Header({
  onOpenBooking,
  onRequestDownload,
  onToggleAdmin,
  isAdminActive,
  selectedProject,
  onSelectProject,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = [
        "overview",
        "projects",
        "floor-plans",
        "master-plan",
        "amenities",
        "township",
        "location",
        "specifications",
        "lead-capture-section",
      ];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navLinks = [
    { label: "Overview", id: "overview" },
    { label: "Projects", id: "projects" },
    { label: "Floor Plans", id: "floor-plans" },
    { label: "Master Plan", id: "master-plan" },
    { label: "Amenities", id: "amenities" },
    { label: "Township", id: "township" },
    { label: "Location", id: "location" },
    { label: "Specs", id: "specifications" },
  ];

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-slate-900 text-white text-[11px] font-medium py-1.5 px-4 text-center border-b border-slate-800 z-50 relative flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#e31837] text-white uppercase tracking-wider">
          Mahindra World City, Chennai
        </span>
        <span className="hidden sm:inline text-slate-300">
          Two Residences: <strong>Codename AquaVista</strong> (3, 3.5 & 4 BHK Duplex) & <strong>Mahindra Lakewoods</strong> (2 & 3 BHK)
        </span>
        <span className="sm:hidden text-slate-300">
          AquaVista & Lakewoods • 1500 Acre City
        </span>
        <button
          onClick={onRequestDownload}
          className="underline text-amber-300 hover:text-amber-200 font-bold ml-2 cursor-pointer transition-colors"
        >
          Download PDF
        </button>
      </div>

      <header
        className={`fixed top-[29px] left-0 w-full h-[72px] z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo Brand Lockup */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[#e31837] font-black text-[19px] sm:text-[21px] tracking-tight uppercase font-display leading-none group-hover:opacity-90 transition-opacity">
                  Mahindra
                </span>
                <span className="text-slate-800 font-bold text-[13px] sm:text-[14px] uppercase tracking-wider font-display leading-none">
                  Lifespaces
                </span>
              </div>
              <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
                World City • Chengalpattu
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 mx-auto">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#e31837] bg-red-50/90 font-bold shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/80"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action CTA Group */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-wider uppercase px-4 sm:px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
            >
              <Building2 className="h-4 w-4" />
              Book Site Visit
            </button>

            <a
              href="tel:08047359991"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-200 text-slate-700 hover:text-[#e31837] hover:border-[#e31837] hover:bg-red-50/50 transition-colors"
              title="Call Sales Office: 080 4735 9991"
            >
              <Phone className="h-4 w-4" />
            </a>

            {/* Hamburger Button for Mobile / Tablet */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-slate-200 text-slate-800 focus:outline-none hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[101px] bg-slate-950/95 backdrop-blur-xl z-50 lg:hidden flex flex-col p-6 space-y-4 animate-fade-in overflow-y-auto">
          <div className="text-[10px] font-bold text-amber-400 uppercase tracking-widest pb-1 border-b border-slate-800">
            Quick Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-display text-base font-semibold py-2 border-b border-slate-800/60 flex items-center justify-between transition-colors ${
                activeSection === link.id ? "text-amber-400 font-bold" : "text-white/90 hover:text-amber-400"
              }`}
            >
              <span>{link.label}</span>
              <ChevronRight className="h-4 w-4 text-slate-500" />
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#e31837] text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg shadow-lg"
            >
              <Building2 className="h-4 w-4" />
              Book Site Visit
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDownload();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-800 text-slate-200 font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg border border-slate-700 hover:bg-slate-700"
            >
              <Download className="h-4 w-4 text-amber-400" />
              Download PDF Catalog
            </button>

            <a
              href="tel:08047359991"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg"
            >
              <Phone className="h-4 w-4" />
              Call 080 4735 9991
            </a>
          </div>
        </div>
      )}
    </>
  );
}
