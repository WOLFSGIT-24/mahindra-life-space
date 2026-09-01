import React, { useState, useEffect } from "react";
import { Sparkles, Briefcase, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight, Waves, Trees } from "lucide-react";
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
        image: "/aquavista-lake-view.jpg",
        tag: "Panoramic Lake Vista",
      },
      {
        title: "16,000 Sq.Ft. Resort Clubhouse & Infinity Pool",
        subtitle: "Overlooking natural lake waters with pool deck, gymnasium & aerobics studio",
        image: "/aquavista-club-pool.jpg",
        tag: "Luxury Clubhouse",
      },
      {
        title: "2 Acre Central Park & Architectural Elegance",
        subtitle: "Shaded green pathways, open amphitheatre, sports courts and play lawns",
        image: "/aquavista-hero.jpg",
        tag: "Central Park Landscape",
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
        image: "/lakewoods-podium-park.jpg",
        tag: "Vehicle Free Podium",
      },
      {
        title: "Open To Sky Swimming Pool & Leisure Deck",
        subtitle: "Resort style pool, toddler splash zone, clubhouse and tropical sun loungers",
        image: "/lakewoods-pool-amenities.jpg",
        tag: "Resort Pool & Sports",
      },
      {
        title: "Zero Common Walls Architectural Design",
        subtitle: "Thoughtfully crafted 2 & 3 BHK homes with complete 3 side ventilation & privacy",
        image: "/lakewoods-hero.jpg",
        tag: "Zero Common Walls",
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
    <section id="township" className="w-full py-12 sm:py-16 lg:py-24 bg-white text-slate-900 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-[#e31837] bg-red-50 border border-red-200">
            <Sparkles className="h-3.5 w-3.5" />
            1,500 Acre Master Ecosystem
          </span>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Mahindra World City, Chennai <br />
            <span className="text-[#e31837]">A City Where Life Thrives</span>
          </h2>
          <div className="h-1 w-20 bg-[#e31837] mx-auto rounded-full" />
          <p className="font-body text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
            Ranked the <strong>4th Best City to Live in India</strong> by JLL, Mahindra World City is a benchmark for sustainable urbanisation where nature, global employment, world class schooling, and residences coalesce.
          </p>
        </div>

        {/* 2 Project Tabs for Slideshow */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <button
            onClick={() => handleTabChange("aquavista")}
            className={`flex items-center justify-center gap-2 px-5 sm:px-8 py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeProject === "aquavista"
                ? "bg-[#e31837] text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Waves className="h-4 w-4" />
            {projectGalleries.aquavista.buttonLabel}
          </button>

          <button
            onClick={() => handleTabChange("lakewoods")}
            className={`flex items-center justify-center gap-2 px-5 sm:px-8 py-3 rounded-full font-body text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              activeProject === "lakewoods"
                ? "bg-[#059669] text-white shadow-lg"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            <Trees className="h-4 w-4" />
            {projectGalleries.lakewoods.buttonLabel}
          </button>
        </div>

        {/* Interactive Image Slide Showcase */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-950 mb-12 sm:mb-16 border border-slate-200 group">
          
          {/* Slide Visual Image */}
          <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[540px] overflow-hidden bg-slate-900">
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20" />
                
                {/* Top Badge on Slide */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white bg-slate-900/80 backdrop-blur-md border border-white/20 shadow-md">
                    <Sparkles className="h-3 w-3 text-amber-400" />
                    {slide.tag}
                  </span>
                </div>

                {/* Bottom Slide Info Caption */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 z-20 text-white">
                  <div className="max-w-2xl bg-slate-950/80 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 space-y-1 sm:space-y-2">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-400 block">
                      {gallery.name} • {gallery.badge}
                    </span>
                    <h3 className="font-display text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-snug">
                      {slide.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
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
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 shadow-lg cursor-pointer focus:outline-none"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-slate-900 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 shadow-lg cursor-pointer focus:outline-none"
            aria-label="Next Slide"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Slide Indicator Dots */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-1.5 sm:gap-2 bg-slate-950/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all rounded-full cursor-pointer ${
                  idx === currentSlide
                    ? "w-6 h-2 bg-[#e31837]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
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
              className="p-3.5 sm:p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-xl flex items-center gap-3 text-emerald-900"
            >
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle2 className="h-4 sm:h-5 w-4 sm:w-5" />
              </div>
              <span className="font-display text-xs font-bold leading-snug">
                {cert}
              </span>
            </div>
          ))}
        </div>

        {/* Social Infrastructure Grid */}
        <div className="space-y-6 mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-[#e31837] block">
                Integrated Lifestyle
              </span>
              <h3 className="font-display text-xl sm:text-3xl font-bold text-slate-900">
                Everything at Your Doorstep
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              From top CBSE schooling to shopping at The Canopy, hospitality at Fairfield by Marriott, and on site train connectivity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {mwc.socialInfra.map((infra, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-200 hover:border-slate-300 transition-all hover:shadow-md space-y-2.5 sm:space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-red-100 text-[#e31837] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    {infra.icon}
                  </span>
                </div>
                <h4 className="font-display text-sm sm:text-base font-bold text-slate-900">
                  {infra.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-body">
                  {infra.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Hubs & Walk-to-Work Ecosystem */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-3 sm:space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 block">
                Walk To Work Privilege
              </span>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Work Close to Home with 65+ Global Conglomerates
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Save hours of stressful daily traffic. Mahindra World City houses dedicated SEZs and corporate parks employing over 1,00,000 professionals across IT, automotive, healthcare, and engineering.
              </p>
              <div className="pt-1 sm:pt-2">
                <button
                  onClick={() => onOpenEnquiry("Walk to Work at MWC")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-lg shadow cursor-pointer transition-all"
                >
                  Explore MWC Life
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {mwc.corporateHubs.map((corp, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/90 p-3 sm:p-4 rounded-xl border border-slate-700 text-center hover:border-amber-400/50 transition-colors"
                >
                  <Briefcase className="h-4 sm:h-5 w-4 sm:h-5 text-amber-400 mx-auto mb-1.5 sm:mb-2" />
                  <span className="font-display text-xs sm:text-sm font-bold text-white block truncate">
                    {corp.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-slate-400 block mt-0.5 truncate">
                    {corp.sector}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
