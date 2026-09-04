import React, { useState, useEffect } from "react";
import { Phone, Building2 } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectHighlights from "./components/ProjectHighlights";
import FloorPlans from "./components/FloorPlans";
import MasterPlan from "./components/MasterPlan";
import Amenities from "./components/Amenities";
import TownshipExperience from "./components/TownshipExperience";
import Location from "./components/Location";
import Specifications from "./components/Specifications";
import MahindraLegacy from "./components/MahindraLegacy";
import BrochureForm from "./components/BrochureForm";
import BookingModal from "./components/BookingModal";
import DownloadModal from "./components/DownloadModal";
import OfferModal from "./components/OfferModal";
import AdminDashboard from "./components/AdminDashboard";
import PrivacyPolicyModal from "./components/PrivacyPolicyModal";
import TermsModal from "./components/TermsModal";
import Footer from "./components/Footer";
import { LeadSubmission } from "./types";

const LOCAL_STORAGE_KEY = "mahindra_world_city_leads";

export default function App() {
  const [leads, setLeads] = useState<LeadSubmission[]>([]);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  
  const [selectedProject, setSelectedProject] = useState<"all" | "aquavista" | "lakewoods">("all");
  const [preselectedUnit, setPreselectedUnit] = useState<string | null>(null);
  const [preselectedProject, setPreselectedProject] = useState<string | null>(null);

  const [floorPlansUnlocked, setFloorPlansUnlocked] = useState(() => {
    try {
      return localStorage.getItem("mwc_floor_plans_unlocked") === "true";
    } catch {
      return false;
    }
  });

  // Initialize cached leads
  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        setLeads(JSON.parse(stored));
      } else {
        const initialSeeds = generateMockLeads();
        setLeads(initialSeeds);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialSeeds));
      }
    } catch (e) {
      console.error("Error reading storage cache", e);
    }
  }, []);

  const saveLeadsToCache = (newLeads: LeadSubmission[]) => {
    setLeads(newLeads);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newLeads));
    } catch (e) {
      console.error("Error saving lead entries to storage", e);
    }
  };

  const handleAddLead = (rawLead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => {
    const isoTimestamp = new Date().toISOString();
    const localTimestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const newLead: LeadSubmission = {
      ...rawLead,
      id: "MWC-" + Math.floor(1000 + Math.random() * 9000),
      submittedAt: isoTimestamp,
      status: "Pending",
    };

    // Post to Make.com Webhook
    fetch("https://hook.us1.make.com/jd38fqyyxprgcrewe8q0abh9mj6iibmm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: newLead.id,
        fullName: newLead.fullName,
        email: newLead.email,
        phone: newLead.phone,
        project: newLead.project || "Both Projects",
        unitType: newLead.unitType || "",
        preferredDate: newLead.preferredDate || "",
        preferredTime: newLead.preferredTime || "",
        source: newLead.source,
        notes: newLead.notes || "",
        submittedAt: isoTimestamp,
        localTimestamp: localTimestamp,
        status: newLead.status,
      }),
    }).catch((err) => {
      console.error("Webhook submission failed:", err);
    });

    const updated = [newLead, ...leads];
    saveLeadsToCache(updated);

    try {
      localStorage.setItem("mwc_floor_plans_unlocked", "true");
    } catch (e) {
      console.error(e);
    }
    setFloorPlansUnlocked(true);
  };

  const handleUpdateStatus = (id: string, status: LeadSubmission["status"]) => {
    const updated = leads.map((l) => (l.id === id ? { ...l, status } : l));
    saveLeadsToCache(updated);
  };

  const handleClearLeads = () => {
    saveLeadsToCache([]);
  };

  const handleAddMockLeads = () => {
    const extraSeeds = generateMockLeads();
    saveLeadsToCache([...extraSeeds, ...leads]);
  };

  const handleSelectUnit = (unitType: string, project?: string) => {
    setPreselectedUnit(unitType);
    if (project) setPreselectedProject(project);
    setOfferOpen(true);
  };

  const handleOpenEnquiry = (topicOrProject?: string) => {
    if (topicOrProject) {
      if (topicOrProject.toLowerCase().includes("aquavista") || topicOrProject.toLowerCase().includes("duplex") || topicOrProject.toLowerCase().includes("3")) {
        setPreselectedProject("3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)");
      } else if (topicOrProject.toLowerCase().includes("lakewoods") || topicOrProject.toLowerCase().includes("deck") || topicOrProject.toLowerCase().includes("2")) {
        setPreselectedProject("2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)");
      } else {
        setPreselectedUnit(topicOrProject);
      }
    }
    setOfferOpen(true);
  };

  const handleRequestDownload = (project?: string) => {
    if (project) {
      setPreselectedProject(project);
    } else {
      setPreselectedProject(null);
    }
    setDownloadModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 pb-20 md:pb-0 overflow-x-hidden w-full font-body">
      
      {/* Navigation Header */}
      <Header
        onOpenBooking={() => {
          setPreselectedUnit(null);
          setPreselectedProject(null);
          setBookingOpen(true);
        }}
        onRequestDownload={() => handleRequestDownload()}
        onToggleAdmin={() => setAdminOpen(!adminOpen)}
        isAdminActive={adminOpen}
        selectedProject={selectedProject}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* Hero Section */}
      <Hero
        onOpenEnquiry={handleOpenEnquiry}
        onRequestDownload={() => handleRequestDownload(selectedProject !== "all" ? (selectedProject === "aquavista" ? "3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)" : "2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)") : undefined)}
        selectedProject={selectedProject}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      {/* 2 Premier Projects Comparison & Highlights */}
      <ProjectHighlights
        onSelectProject={(p) => setSelectedProject(p)}
        onOpenEnquiry={handleOpenEnquiry}
        onRequestDownload={(p) => handleRequestDownload(p)}
      />

      {/* Floor Plans & Unit Layouts */}
      <FloorPlans
        onSelectUnit={handleSelectUnit}
        isUnlocked={floorPlansUnlocked}
        onUnlockRequest={(unit) => {
          if (unit) setPreselectedUnit(unit);
          setOfferOpen(true);
        }}
        selectedProjectFilter={selectedProject}
      />

      {/* Master Plans (AquaVista & Lakewoods) */}
      <MasterPlan
        onSelectUnit={(planName) => {
          handleOpenEnquiry(planName);
        }}
      />

      {/* Resort & Clubhouse Amenities */}
      <Amenities
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* 1500 Acre Mahindra World City Integrated Experience */}
      <TownshipExperience
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Location & Regional Connectivity */}
      <Location
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Technical Specifications & Green Scorecard */}
      <Specifications />

      {/* The Mahindra Legacy */}
      <MahindraLegacy />

      {/* Direct Developer Lead Intake Section */}
      <BrochureForm
        onAddLead={handleAddLead}
        preselectedUnit={preselectedUnit}
        preselectedProject={preselectedProject}
      />

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => {
          setBookingOpen(false);
          setPreselectedUnit(null);
          setPreselectedProject(null);
        }}
        onAddLead={handleAddLead}
        initialUnitType={preselectedUnit}
        initialProject={preselectedProject}
      />

      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => {
          setDownloadModalOpen(false);
          setPreselectedProject(null);
        }}
        onAddLead={handleAddLead}
        initialProject={preselectedProject}
      />

      <OfferModal
        isOpen={offerOpen}
        onClose={() => {
          setOfferOpen(false);
          setPreselectedUnit(null);
          setPreselectedProject(null);
        }}
        onAddLead={handleAddLead}
        initialProject={preselectedProject || undefined}
        initialUnit={preselectedUnit || undefined}
      />

      <PrivacyPolicyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <TermsModal
        isOpen={termsOpen}
        onClose={() => setTermsOpen(false)}
      />

      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        leads={leads}
        onUpdateStatus={handleUpdateStatus}
        onClearLeads={handleClearLeads}
        onAddMockLeads={handleAddMockLeads}
      />

      {/* Mobile Fixed CTA Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex shadow-[0_-8px_25px_rgba(0,0,0,0.2)] bg-[#0f172a] border-t border-slate-800">
        <a
          href="tel:08047359991"
          className="flex-1 flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-slate-800 text-white font-body text-xs font-bold uppercase tracking-wider py-3.5 border-r border-slate-800 transition-colors"
        >
          <Phone className="h-4 w-4 text-[#c8102e]" />
          Call Now
        </a>
        <button
          onClick={() => {
            setPreselectedUnit(null);
            setPreselectedProject(null);
            setBookingOpen(true);
          }}
          className="flex-1 flex items-center justify-center gap-2 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold uppercase tracking-wider py-3.5 transition-colors cursor-pointer"
        >
          <Building2 className="h-4 w-4" />
          Enquire Now
        </button>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919035679657?text=Hi%2C%20I%20am%20interested%20in%20Mahindra%20World%20City%20residences%20(2%2C%203%2C%203.5%20%26%204%20BHK%20Duplex)."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[68px] md:bottom-6 right-3.5 md:right-6 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3 md:p-3.5 rounded-full shadow-2xl hover:scale-110 transition-transform z-30 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

    </div>
  );
}

function generateMockLeads(): LeadSubmission[] {
  return [
    {
      id: "MWC-7182",
      fullName: "Anand Swaminathan",
      email: "anand.swamy@infosys.com",
      phone: "9445128941",
      project: "3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)",
      unitType: "4 BHK Duplex with Private Terrace",
      submittedAt: new Date(Date.now() - 3 * 3600000).toISOString(),
      source: "site_visit_form",
      preferredDate: new Date(Date.now() + 2 * 86400000).toISOString().split("T")[0],
      preferredTime: "11:30 AM",
      status: "Scheduled",
      notes: "Seeking Lakefront Duplex. Employee at Infosys MWC campus.",
    },
    {
      id: "MWC-4091",
      fullName: "Pooja Malhotra",
      email: "pooja.malhotra@renault.com",
      phone: "8826519032",
      project: "2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)",
      unitType: "2 BHK Luxury Deck",
      submittedAt: new Date(Date.now() - 9 * 3600000).toISOString(),
      source: "brochure_form",
      status: "Contacted",
      notes: "Interested in 3.8 acre podium view & zero common walls unit.",
    },
    {
      id: "MWC-1120",
      fullName: "Dr. Sandeep Vardhan",
      email: "sandeep.v@srm.edu.in",
      phone: "9916030214",
      project: "All Residences (2, 3, 3.5 & 4 BHK Duplex)",
      unitType: "3.5 BHK + Study",
      submittedAt: new Date(Date.now() - 20 * 3600000).toISOString(),
      source: "site_visit_form",
      preferredDate: new Date(Date.now() + 1 * 86400000).toISOString().split("T")[0],
      preferredTime: "10:00 AM",
      status: "Pending",
      notes: "Doctor at SRM Hospital checking proximity and CBSE school admission.",
    },
  ];
}
