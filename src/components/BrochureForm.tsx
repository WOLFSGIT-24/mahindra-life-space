import React, { useState, useEffect } from "react";
import { Download, CheckCircle, Sparkles, Phone, Mail, User, ShieldCheck, Building2 } from "lucide-react";
import { LeadSubmission } from "../types";

interface BrochureFormProps {
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  preselectedUnit?: string | null;
  preselectedProject?: string | null;
}

export default function BrochureForm({
  onAddLead,
  preselectedUnit,
  preselectedProject,
}: BrochureFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    project: preselectedProject || "Both Projects (AquaVista & Lakewoods)",
    unitType: preselectedUnit || "3 BHK Luxury",
    preferredDate: "",
    preferredTime: "11:00 AM",
    source: "Website Landing Page" as const,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedUnit) {
      setFormData((prev) => ({ ...prev, unitType: preselectedUnit }));
    }
    if (preselectedProject) {
      setFormData((prev) => ({ ...prev, project: preselectedProject }));
    }
  }, [preselectedUnit, preselectedProject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    
    let sanitizedValue = value;
    if (id === "phone") {
      sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
    } else if (id === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
    }
    
    setFormData((prev) => ({ ...prev, [id]: sanitizedValue }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Please enter your valid name";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      onAddLead({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        project: formData.project,
        unitType: formData.unitType,
        preferredDate: formData.preferredDate || undefined,
        preferredTime: formData.preferredTime || undefined,
        source: "brochure_form",
        notes: `Selected Project: ${formData.project} | Typology: ${formData.unitType}`,
      });

      setLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const handleDownloadBrochure = () => {
    try {
      window.open("/Brochure.pdf", "_blank");
      const link = document.createElement("a");
      link.href = "/Brochure.pdf";
      link.setAttribute("download", "Mahindra_World_City_Brochures.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (e) {
      console.error("Error downloading brochure", e);
    }
  };

  return (
    <section id="lead-capture-section" className="w-full py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,24,55,0.08),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Project Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#e31837] bg-red-950/80 border border-red-500/30">
              <Sparkles className="h-3.5 w-3.5" />
              Direct Developer Desk
            </span>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              Begin Your Journey at <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-300 to-amber-100">
                Mahindra World City
              </span>
            </h2>

            <p className="font-body text-sm text-slate-300 leading-relaxed">
              Schedule a personalized site visit to experience the tranquil lakes, 16,000 sq.ft clubhouse, 3.8 acre vehicle free podium, and walk to work lifestyle.
            </p>

            {/* Quick Specs Cards */}
            <div className="bg-slate-800/80 backdrop-blur-md p-6 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="font-display text-base font-bold text-amber-300 flex items-center gap-2">
                <Building2 className="h-4 w-4 text-[#e31837]" />
                Project Snapshot & TNRERA
              </h4>

              <div className="space-y-3 text-xs text-slate-200 divide-y divide-slate-700/60">
                <div className="pt-2 flex justify-between items-start">
                  <span className="text-slate-400">Codename AquaVista:</span>
                  <span className="font-semibold text-right">3, 3.5 BHK & 4 BHK Duplex (TNRERA No: TN/01/Building/0174/2022)</span>
                </div>
                <div className="pt-2 flex justify-between items-start">
                  <span className="text-slate-400">Mahindra Lakewoods:</span>
                  <span className="font-semibold text-right">Spacious 2 & 3 BHK (TNRERA No: TN/01/Building/0041/2022)</span>
                </div>
                <div className="pt-2 flex justify-between items-start">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-right">Mahindra World City, Chengalpattu 603004</span>
                </div>
                <div className="pt-2 flex justify-between items-start">
                  <span className="text-slate-400">Sales Office:</span>
                  <span className="font-semibold text-right">The Canopy, 1st Floor, Block A, MWC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 p-5 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden border border-slate-100">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-[#e31837]" />

              {!formSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      Schedule VIP Site Walkthrough
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 mt-1">
                      Fill out the form below to receive customized price sheets, sample apartment videos, and instant PDF brochures.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    
                    {/* Project Preference Dropdown */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Interested In Project*
                      </label>
                      <select
                        id="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm font-body outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837]"
                      >
                        <option value="Both Projects (AquaVista & Lakewoods)">Both Projects (AquaVista & Lakewoods)</option>
                        <option value="Codename AquaVista (3, 3.5 & 4 BHK Duplex)">Codename AquaVista (3, 3.5 & 4 BHK Duplex)</option>
                        <option value="Mahindra Lakewoods (2 & 3 BHK)">Mahindra Lakewoods (2 & 3 BHK)</option>
                      </select>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                        Full Name*
                      </label>
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus-within:border-[#e31837] focus-within:ring-1 focus-within:ring-[#e31837]">
                        <User className="h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                        />
                      </div>
                      {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                          Email Address*
                        </label>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus-within:border-[#e31837] focus-within:ring-1 focus-within:ring-[#e31837]">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="e.g. rahul@example.com"
                            className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                          />
                        </div>
                        {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                          Phone Number (10 Digits)*
                        </label>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus-within:border-[#e31837] focus-within:ring-1 focus-within:ring-[#e31837]">
                          <Phone className="h-4 w-4 text-slate-400" />
                          <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="e.g. 9876543210"
                            className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                          />
                        </div>
                        {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Date & Time Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                          Preferred Visit Date
                        </label>
                        <input
                          type="date"
                          id="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-body outline-none focus:border-[#e31837]"
                        />
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1">
                          Preferred Time Slot
                        </label>
                        <select
                          id="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-body outline-none focus:border-[#e31837]"
                        >
                          <option value="10:00 AM">10:00 AM (Morning)</option>
                          <option value="11:30 AM">11:30 AM (Morning)</option>
                          <option value="02:30 PM">02:30 PM (Afternoon)</option>
                          <option value="04:30 PM">04:30 PM (Evening)</option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase py-4 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting Registration...
                        </>
                      ) : (
                        "Book Site Visit & Get Brochures"
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                      <ShieldCheck className="h-4 w-4 text-emerald-600" />
                      <span>Direct Official Developer Registration. Zero Brokerage.</span>
                    </div>

                  </form>
                </>
              ) : (
                <div className="text-center py-8 space-y-5 animate-fade-in">
                  <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                    <CheckCircle className="h-8 w-8" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      Walkthrough Registered!
                    </h3>
                    <p className="font-body text-sm text-slate-600 mt-2 max-w-md mx-auto">
                      Thank you <strong>{formData.fullName}</strong>. Our relationship manager will connect with you shortly with customized floor plans and pricing for <strong>{formData.project}</strong>.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-3">
                    <button
                      onClick={handleDownloadBrochure}
                      className="flex items-center justify-center gap-2 bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-lg shadow cursor-pointer"
                    >
                      <Download className="h-4 w-4" />
                      Download PDF Catalog
                    </button>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-lg cursor-pointer"
                    >
                      Register Another
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
