import React, { useState } from "react";
import { Download, Check, ShieldCheck, Phone, Mail, User } from "lucide-react";
import { LeadSubmission } from "../types";
import { downloadBrochures } from "../utils/downloadBrochure";

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
    project: preselectedProject || "All Residences (2, 3, 3.5 & 4 BHK Duplex)",
    unitType: preselectedUnit || "All Typologies",
    source: "brochure_form" as const,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    let sanitized = value;
    if (id === "phone") sanitized = value.replace(/\D/g, "").slice(0, 10);
    if (id === "fullName") sanitized = value.replace(/[^A-Za-z\s]/g, "");

    setFormData((prev) => ({ ...prev, [id]: sanitized }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Please enter your name";
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
        source: "brochure_form",
        notes: `Enquiry for ${formData.project} (${formData.unitType})`,
      });

      // Trigger project specific or both PDF downloads
      downloadBrochures(formData.project);

      setLoading(false);
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <section id="lead-capture-section" className="w-full py-16 lg:py-24 bg-slate-50 text-slate-900 relative overflow-hidden scroll-mt-20 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Project Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c8102e]">
              Direct Developer Desk
            </p>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Begin Your Journey at <br />
              Mahindra World City
            </h2>

            <p className="font-body text-sm text-slate-700 leading-relaxed">
              Schedule a personalized site visit to experience the tranquil lakes, 16,000 sq.ft clubhouse, 3.8 acre vehicle free podium, and walk to work lifestyle.
            </p>

            {/* Quick Specs Cards */}
            <div className="bg-white p-5 sm:p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
              <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                Project Snapshot & RERA
              </h4>

              <div className="space-y-2.5 text-xs text-slate-700 divide-y divide-slate-100">
                <div className="pt-2 flex justify-between items-start">
                  <span className="font-semibold text-slate-900">3, 3.5 & 4 BHK Duplex:</span>
                  <span className="text-right text-slate-700">1,053 - 1,610 Sft • ₹ 79 L* onwards (TNRERA: TN/01/Building/0174/2022)</span>
                </div>
                <div className="pt-2 flex justify-between items-start">
                  <span className="font-semibold text-slate-900">2 BHK Deck Residences:</span>
                  <span className="text-right text-slate-700">1,079 Sft • ₹ 84 L* No GST* (TNRERA: TN/01/Building/0041/2022)</span>
                </div>
                <div className="pt-2 flex justify-between items-start">
                  <span className="font-semibold text-slate-900">Location:</span>
                  <span className="text-right text-slate-700">Mahindra World City, Chengalpattu 603004</span>
                </div>
                <div className="pt-2 flex justify-between items-start">
                  <span className="font-semibold text-slate-900">Sales Office:</span>
                  <span className="text-right text-slate-700">The Canopy, 1st Floor, Block A, MWC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 p-5 sm:p-8 md:p-10 rounded-xl shadow-md relative overflow-hidden border border-slate-200">
              <div className="absolute top-0 left-0 w-full h-[4px] bg-[#c8102e]" />

              {!formSubmitted ? (
                <>
                  <div className="mb-6">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      Schedule Site Walkthrough
                    </h3>
                    <p className="font-body text-xs sm:text-sm text-slate-600 mt-1">
                      Fill out the form below to receive customized price sheets, sample apartment videos, and instant PDF brochures.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Project Preference Dropdown */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-1">
                        Interested Residence Configuration*
                      </label>
                      <select
                        id="project"
                        value={formData.project}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-xs sm:text-sm font-body outline-none focus:border-[#c8102e]"
                      >
                        <option value="All Residences (2, 3, 3.5 & 4 BHK Duplex)">All Residences (2, 3, 3.5 & 4 BHK Duplex)</option>
                        <option value="2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)">2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)</option>
                        <option value="3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)">3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)</option>
                      </select>
                    </div>

                    {/* Full Name */}
                    <div>
                      <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-1">
                        Full Name*
                      </label>
                      <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2.5 focus-within:border-[#c8102e]">
                        <User className="h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          id="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-red-600 text-[10px] mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    {/* Email & Phone Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                          Email Address*
                        </label>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2.5 focus-within:border-[#c8102e]">
                          <Mail className="h-4 w-4 text-slate-400" />
                          <input
                            type="email"
                            id="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-600 text-[10px] mt-1">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-1">
                          Phone (10 Digits)*
                        </label>
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2.5 focus-within:border-[#c8102e]">
                          <Phone className="h-4 w-4 text-slate-400" />
                          <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="XXXXX XXXXX"
                            className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                          />
                        </div>
                        {errors.phone && (
                          <p className="text-red-600 text-[10px] mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs sm:text-sm font-bold tracking-[0.15em] uppercase py-3.5 sm:py-4 rounded-md shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 mt-2"
                    >
                      {loading ? (
                        <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Download className="h-4 w-4" />
                          Submit & Download E Brochure
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[10px] text-slate-600 pt-1">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#c8102e]" />
                      <span>100% Privacy Assured • Direct Developer Team</span>
                    </div>

                  </form>
                </>
              ) : (
                /* Success State */
                <div className="text-center py-8 space-y-4 animate-fade-in">
                  <div className="w-14 h-14 bg-red-50 text-[#c8102e] rounded-full flex items-center justify-center mx-auto">
                    <Check className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Thank You, {formData.fullName}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-slate-700 max-w-md mx-auto">
                    Your site visit & brochure request for <strong>{formData.project}</strong> has been registered. Our relationship team will reach out to you shortly.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-[#c8102e] uppercase tracking-wider cursor-pointer"
                    >
                      Submit Another Enquiry
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
