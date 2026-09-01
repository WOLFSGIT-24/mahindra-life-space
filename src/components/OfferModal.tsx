import React, { useState, useEffect } from "react";
import { X, Check } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.agree) {
      newErrors.agree = "Please agree to receive project updates";
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
        source: "offer_modal",
        notes: `Interest in ${formData.project} (${formData.unitType})`,
      });
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden animate-fade-in border border-slate-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors z-10 p-1 rounded-full bg-slate-100 hover:bg-slate-200 cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="p-6 bg-[#0f172a] text-white border-b border-slate-800">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-red-400 block mb-1">
                Mahindra World City, Chennai
              </span>
              <h3 className="font-display text-xl font-bold text-white">
                Request Price Sheet & Details
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
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e]"
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
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e]"
                />
                {errors.fullName && <p className="text-red-600 text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Phone Number (10 Digits)*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e]"
                />
                {errors.phone && <p className="text-red-600 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. rahul@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e]"
                />
                {errors.email && <p className="text-red-600 text-[10px] mt-1">{errors.email}</p>}
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  name="agree"
                  id="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-slate-300 text-[#c8102e] focus:ring-[#c8102e]"
                />
                <label htmlFor="agree" className="text-[11px] text-slate-600 font-body">
                  I agree to receive official brochure and updates from Mahindra Lifespaces.
                </label>
              </div>
              {errors.agree && <p className="text-red-600 text-[10px]">{errors.agree}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold uppercase tracking-[0.15em] rounded-md shadow transition-all cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? "Submitting..." : "Get Price Sheet & Floor Plans"}
              </button>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-slate-100 text-[#c8102e] rounded-full flex items-center justify-center mx-auto">
              <Check className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900">
              Details Shared Successfully
            </h3>
            <p className="font-body text-xs text-slate-600">
              Thank you <strong>{formData.fullName}</strong>. Our official representative will share the complete portfolio for <strong>{formData.project}</strong> shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold uppercase tracking-wider rounded-md shadow cursor-pointer mt-2"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
