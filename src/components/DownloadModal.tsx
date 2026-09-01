import React, { useState } from "react";
import { X, Download, Check, Phone, Mail, User } from "lucide-react";
import { LeadSubmission } from "../types";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
}

export default function DownloadModal({
  isOpen,
  onClose,
  onAddLead,
}: DownloadModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    project: "Both Projects (AquaVista & Lakewoods)",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
        source: "brochure_form",
        notes: `Downloaded Brochure for ${formData.project}`,
      });

      try {
        window.open("/Brochure.pdf", "_blank");
        const link = document.createElement("a");
        link.href = "/Brochure.pdf";
        link.setAttribute("download", "Mahindra_World_City_Brochures.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (e) {
        console.error(e);
      }

      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden relative border border-slate-200">
        <div className="bg-[#0f172a] p-6 text-white flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-800 text-white rounded-lg">
              <Download className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold">
                Download PDF Brochures
              </h3>
              <p className="text-[11px] text-slate-300">
                AquaVista & Lakewoods E Catalogs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Brochure Selection
                </label>
                <select
                  id="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-md px-3 py-2 text-xs sm:text-sm font-body outline-none focus:border-[#c8102e]"
                >
                  <option value="Both Projects (AquaVista & Lakewoods)">Both Projects (AquaVista & Lakewoods)</option>
                  <option value="Codename AquaVista (3, 3.5 & 4 BHK Duplex)">Codename AquaVista (3, 3.5 & 4 BHK Duplex)</option>
                  <option value="Mahindra Lakewoods (2 & 3 BHK)">Mahindra Lakewoods (2 & 3 BHK)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Your Full Name*
                </label>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2">
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
                {errors.fullName && <p className="text-red-600 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Email Address*
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2">
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
                  {errors.email && <p className="text-red-600 text-[10px] mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Phone (10 Digits)*
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-md px-3 py-2">
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
                  {errors.phone && <p className="text-red-600 text-[10px] mt-1">{errors.phone}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded-md shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Instant Download PDF"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="h-12 w-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-[#c8102e]">
                <Check className="h-6 w-6" />
              </div>
              <h4 className="font-display text-xl font-bold text-slate-900">
                Download Started
              </h4>
              <p className="font-body text-xs text-slate-600 max-w-sm mx-auto">
                Your official brochures for <strong>{formData.project}</strong> have been downloaded. Our team has also emailed you the complete price sheets.
              </p>
              <button
                onClick={onClose}
                className="bg-[#c8102e] text-white font-body text-xs font-bold tracking-wider uppercase px-6 py-2.5 rounded-md shadow"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
