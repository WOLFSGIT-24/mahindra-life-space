import React, { useState, useEffect } from "react";
import { X, Check, Building2, Sparkles } from "lucide-react";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: any) => void;
  initialProject?: string;
  initialUnit?: string;
}

export default function OfferModal({
  isOpen,
  onClose,
  onAddLead,
  initialProject = "Both Projects (AquaVista & Lakewoods)",
  initialUnit = "",
}: OfferModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    project: initialProject,
    unitType: initialUnit || "3 BHK Luxury",
    agree: true,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialProject) {
      setFormData((prev) => ({ ...prev, project: initialProject }));
    }
    if (initialUnit) {
      setFormData((prev) => ({ ...prev, unitType: initialUnit }));
    }
  }, [initialProject, initialUnit]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    let sanitizedValue = value;
    if (name === "phone") {
      sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (name === "fullName") {
      sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : sanitizedValue,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
    
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    onAddLead({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      project: formData.project,
      unitType: formData.unitType,
      source: "popup_visit_form",
      status: "Pending",
      notes: `Modal Enquiry for ${formData.project} (${formData.unitType})`,
    });
    
    setLoading(false);
    setSubmitted(true);
    
    setTimeout(() => {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors z-10 p-1 rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="p-6 bg-slate-900 text-white border-b border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e31837] mb-1">
                <Sparkles className="h-4 w-4" />
                Mahindra World City, Chennai
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Schedule Site Visit & Price Sheet
              </h3>
              <p className="font-body text-xs text-slate-300 mt-1">
                Explore Codename AquaVista & Mahindra Lakewoods residences.
              </p>
            </div>

            <div className="p-6 space-y-4 text-slate-900">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Project Choice*
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2.5 text-xs sm:text-sm font-body outline-none focus:border-[#e31837]"
                >
                  <option value="Both Projects (AquaVista & Lakewoods)">Both Projects (AquaVista & Lakewoods)</option>
                  <option value="Codename AquaVista (3, 3.5 & 4 BHK Duplex)">Codename AquaVista (3, 3.5 & 4 BHK Duplex)</option>
                  <option value="Mahindra Lakewoods (2 & 3 BHK)">Mahindra Lakewoods (2 & 3 BHK)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Anand Swaminathan"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-body outline-none focus:border-[#e31837]"
                />
                {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. anand@example.com"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-body outline-none focus:border-[#e31837]"
                />
                {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number (10 Digits)*
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs sm:text-sm font-body outline-none focus:border-[#e31837]"
                />
                {errors.phone && <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  checked={formData.agree}
                  onChange={handleChange}
                  required
                  className="mt-0.5"
                />
                <label htmlFor="agree" className="text-[10px] text-slate-500 leading-tight">
                  I agree to receive price quotes, brochures, and site visit updates via WhatsApp & SMS.
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Submit & Access Pricing"
                )}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center h-[340px] flex flex-col justify-center items-center">
            <div className="h-16 w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
              <Check className="h-8 w-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Request Confirmed</h3>
            <p className="font-body text-xs text-slate-600 leading-relaxed max-w-xs">
              Thank you! Our relationship team at Mahindra World City has received your details and will get in touch shortly.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
