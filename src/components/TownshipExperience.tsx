import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Check } from "lucide-react";
import { mwcTownshipHighlights } from "../data";

interface TownshipExperienceProps {
  onOpenEnquiry: (topic?: string) => void;
}

const projectGalleries = {
  aquavista: {
    name: "Codename AquaVista",
    badge: "Lakefront Luxury Living",
    buttonLabel: "AquaVista Gallery",
    tagline: "Overlooking scenic Kolavai Lake with 16,000 Sq.Ft. Clubhouse & 2 Acre Park",
    slides: [
      {
        title: "Iconic Lakefront Towers & Promenade",
        subtitle: "Towers C7 & C8 rising above Kolavai Lake with private duplex rooftop terraces",
        image: "/aquavista/aqua gallery.webp",
        tag: "Lake View Towers",
      },
      {
        title: "16,000 Sq.Ft. Resort Clubhouse & Infinity Pool",
        subtitle: "Overlooking natural lake waters with pool deck, gymnasium & aerobics studio",
        image: "/aquavista/grand clubhouse.webp",
        tag: "Clubhouse & Pool",
      },
      {
        title: "2 Acre Central Park & Architectural Elegance",
        subtitle: "Shaded green pathways, open amphitheatre, sports courts and play lawns",
        image: "/aquavista/central podium.webp",
        tag: "Central Park",
      },
      {
        title: "Panoramic Kolavai Lake Balcony Vistas",
        subtitle: "Unobstructed lakefront serenity, cool breezes and picturesque sunset views",
        image: "/aquavista/kolavai view.webp",
        tag: "Balcony Vista",
      },
    ],
  },
  lakewoods: {
    name: "Mahindra Lakewoods",
    badge: "3.8 Acre Podium Living",
    buttonLabel: "Lakewoods Gallery",
    tagline: "3.8 Acre Central Vehicle Free Podium with Zero Common Walls residences",
    slides: [
      {
        title: "3.8 Acre Central Vehicle Free Elevated Podium",
        subtitle: "Lush green recreational podium with zero traffic, connecting Towers A to E",
        image: "/lakewoods/lakewood gallery.webp",
        tag: "Vehicle Free Podium",
      },
      {
        title: "Open To Sky Swimming Pool & Leisure Deck",
        subtitle: "Resort style pool, toddler splash zone, clubhouse and tropical sun loungers",
        image: "/lakewoods/pool-amenities.webp",
        tag: "Swimming Pool",
      },
      {
        title: "Lush Landscaped Podium Lawns & Walkways",
        subtitle: "Continuous jogging loop, children's play areas, yoga pergolas, and serene gardens",
        image: "/lakewoods/podium-park.webp",
        tag: "Podium Gardens",
      },
      {
        title: "Zero Common Walls Architectural Design",
        subtitle: "Thoughtfully crafted 2 & 3 BHK homes with complete 3 side ventilation & privacy",
        image: "/lakewoods/hero.webp",
        tag: "Podium Residences",
      },
    ],
  },
};

export default function TownshipExperience({ onOpenEnquiry }: TownshipExperienceProps) {
  const mwc = mwcTownshipHighlights;
  const [activeProject, setActiveProject] = useState<"aquavista" | "lakewoods">("aquavista");
  const [currentSlide, setCurrentSlide] = useState(0);

  const gallery = projectGalleries[activeProject];
  const slides = gallery.slides;

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length, activeProject]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTabChange = (proj: "aquavista" | "lakewoods") => {
    setActiveProject(proj);
    setCurrentSlide(0);
  };

  return (
    <section id="township" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
            1,500 Acre Master Ecosystem
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Mahindra World City, Chennai <br />
            A City Where Life Thrives
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-900 leading-relaxed pt-2">
            Ranked the <strong>4th Best City to Live in India</strong> by JLL, Mahindra World City is a benchmark for sustainable urbanisation where nature, global employment, world class schooling, and residences coalesce.
          </p>
        </div>

        {/* 2 Project Tabs for Slideshow */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <button
            onClick={() => handleTabChange("aquavista")}
            className={`px-6 py-2.5 sm:py-3 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeProject === "aquavista"
                ? "bg-[#c8102e] text-white shadow-sm font-bold"
                : "bg-slate-100 text-slate-900 hover:bg-slate-200"
            }`}
          >
            {projectGalleries.aquavista.buttonLabel}
          </button>

          <button
            onClick={() => handleTabChange("lakewoods")}
            className={`px-6 py-2.5 sm:py-3 rounded-md font-body text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeProject === "lakewoods"
                ? "bg-[#c8102e] text-white shadow-sm font-bold"
                : "bg-slate-100 text-slate-900 hover:bg-slate-200"
            }`}
          >
            {projectGalleries.lakewoods.buttonLabel}
          </button>
        </div>

        {/* Interactive Image Slide Showcase */}
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-slate-950 mb-12 sm:mb-16 border border-slate-200 group">
          
          {/* Slide Visual Image */}
          <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[520px] overflow-hidden bg-slate-900">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img loading="lazy" decoding="async"
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                
                {/* Top Badge on Slide */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                  <span className="px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white bg-black/70 rounded">
                    {slide.tag}
                  </span>
                </div>

                {/* Bottom Slide Info Caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 text-white">
                  <div className="max-w-2xl bg-slate-950/90 p-4 sm:p-5 rounded-lg border border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 block">
                      {gallery.name} • {gallery.badge}
                    </span>
                    <h3 className="font-display text-base sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-white leading-relaxed font-body">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-slate-700 text-white flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-1.5 bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-5 h-1.5 bg-[#c8102e]"
                    : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* 4 Green Benchmark Credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {mwc.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-center gap-3 text-slate-900"
            >
              <div className="w-7 h-7 rounded bg-slate-900 text-white flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-xs font-semibold leading-snug">
                {cert}
              </span>
            </div>
          ))}
        </div>

        {/* Social Infrastructure Grid with Real Imagery */}
        <div className="space-y-6 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
                Integrated Lifestyle
              </p>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                Everything at Your Doorstep
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-900 max-w-md">
              From top CBSE schooling to shopping at The Canopy, hospitality at Fairfield by Marriott, and on site train connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mwc.socialInfra.map((infra, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all overflow-hidden shadow-sm flex flex-col justify-between"
              >
                {infra.image && (
                  <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={infra.image}
                      alt={infra.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}
                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#c8102e]">
                    Convenience 0{idx + 1}
                  </span>
                  <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                    {infra.title}
                  </h4>
                  <p className="text-xs text-slate-900 leading-relaxed font-body">
                    {infra.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Hubs & Walk-to-Work Ecosystem */}
        <div className="bg-[#0f172a] rounded-xl p-6 sm:p-8 lg:p-10 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-red-400 block">
                Walk To Work Privilege
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Work Close to Home with 65+ Global Conglomerates
              </h3>
              <p className="text-xs sm:text-sm text-white leading-relaxed">
                Save hours of stressful daily traffic. Mahindra World City houses dedicated SEZs and corporate parks employing over 1,00,000 professionals across IT, automotive, healthcare, and engineering.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onOpenEnquiry("Walk to Work at MWC")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase px-6 py-3.5 rounded shadow cursor-pointer transition-all"
                >
                  Explore MWC Life
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {mwc.corporateHubs.map((corp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/90 p-3.5 sm:p-4 rounded-lg border border-slate-800 text-center flex flex-col items-center justify-between min-h-[110px]"
                >
                  {corp.image ? (
                    <div className="h-8 flex items-center justify-center mb-1">
                      <img loading="lazy" decoding="async"
                        src={corp.image}
                        alt={corp.name}
                        className="max-h-7 max-w-[80px] object-contain filter brightness-110"
                      />
                    </div>
                  ) : null}
                  <div>
                    <span className="font-display text-xs sm:text-sm font-bold text-white block truncate">
                      {corp.name}
                    </span>
                    <span className="text-[10px] text-white block mt-0.5 truncate">
                      {corp.sector}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
