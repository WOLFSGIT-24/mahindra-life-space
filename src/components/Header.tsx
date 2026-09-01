import React, { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

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
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "overview",
        "projects",
        "floor-plans",
        "master-plan",
        "amenities",
        "township",
        "location",
        "specifications",
      ];

      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

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
    { label: "Specifications", id: "specifications" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-200">
      
      {/* Top Banner Announcement Strip - Minimal Luxury Light */}
      <div className="bg-slate-100/95 text-slate-800 text-[10px] sm:text-[11px] font-medium py-1.5 px-3 sm:px-4 border-b border-slate-200/80 flex items-center justify-center gap-2 text-center backdrop-blur-sm">
        <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-[#c8102e] text-white uppercase tracking-wider shrink-0">
          Mahindra World City
        </span>
        <span className="hidden sm:inline text-slate-700 font-medium">
          Codename AquaVista & Mahindra Lakewoods • Luxury Residences
        </span>
        <button
          onClick={onRequestDownload}
          className="underline text-[#c8102e] hover:text-[#a60d26] font-bold cursor-pointer transition-colors shrink-0 text-[10px] sm:text-[11px]"
        >
          Download PDF
        </button>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`w-full h-[64px] sm:h-[72px] transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 xl:gap-4">
          
          {/* Logo Brand Lockup */}
          <a
            href="#overview"
            onClick={(e) => handleLinkClick(e, "overview")}
            className="flex items-center gap-2.5 shrink-0 focus:outline-none"
          >
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-[#c8102e] font-bold text-[20px] sm:text-[22px] tracking-tight uppercase font-display leading-none">
                  Mahindra
                </span>
                <span className="text-slate-900 font-bold text-[14px] sm:text-[15px] uppercase tracking-wider font-display leading-none">
                  Lifespaces
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mt-1">
                World City • Chengalpattu
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 mx-auto shrink-0">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`px-2 xl:px-3 py-1.5 rounded-md text-[11px] xl:text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? "text-[#c8102e] font-bold bg-red-50"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:08047359991"
              className="flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#c8102e] transition-colors py-2 px-2.5 rounded border border-slate-200 hover:border-slate-300"
            >
              <Phone className="h-3.5 w-3.5 text-[#c8102e]" />
              <span>080 4735 9991</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.12em] uppercase px-4 py-2.5 rounded shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              Book Site Visit
            </button>
          </div>

          {/* Mobile Phone & Hamburger Actions */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:08047359991"
              className="p-2 rounded-md border border-slate-200 text-slate-800 hover:text-[#c8102e] bg-slate-50"
              aria-label="Call Sales"
            >
              <Phone className="h-4 w-4 text-[#c8102e]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-slate-200 text-slate-800 hover:bg-slate-100 focus:outline-none cursor-pointer"
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
      </div>

      {/* Mobile Drawer Menu Overlay - Minimal Light Luxury */}
      {mobileMenuOpen && (
        <div className="bg-white/98 backdrop-blur-xl border-b border-slate-200 shadow-2xl lg:hidden flex flex-col p-6 space-y-4 animate-fade-in max-h-[80vh] overflow-y-auto">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pb-1 border-b border-slate-100">
            Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`font-display text-base font-semibold py-2.5 border-b border-slate-100 flex items-center justify-between transition-colors ${
                activeSection === link.id ? "text-[#c8102e] font-bold" : "text-slate-800 hover:text-slate-950"
              }`}
            >
              <span>{link.label}</span>
            </a>
          ))}

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#c8102e] text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-md shadow"
            >
              Book Site Visit
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestDownload();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-900 font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-md border border-slate-200 hover:bg-slate-200"
            >
              Download PDF Catalog
            </button>

            <a
              href="tel:08047359991"
              className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-md"
            >
              <Phone className="h-4 w-4 text-[#c8102e]" />
              Call 080 4735 9991
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
