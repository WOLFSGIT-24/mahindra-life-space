import React, { useState, useEffect } from "react";
import { X, Calendar, Check, Gift } from "lucide-react";
import { LeadSubmission } from "../types";

interface OfferModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  initialProject?: string | null;
  initialUnit?: string | null;
}

export default function OfferModal({
  isOpen,
  onClose,
  onAddLead,
  initialProject,
  initialUnit,
}: OfferModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    project: initialProject || "All Residences (2, 3, 3.5 & 4 BHK Duplex)",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === "phone") sanitized = value.replace(/\D/g, "").slice(0, 10);
    if (name === "fullName") sanitized = value.replace(/[^A-Za-z\s]/g, "");

    setFormData((prev) => ({ ...prev, [name]: sanitized }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!/^[A-Za-z\s]+$/.test(formData.fullName.trim())) {
      newErrors.fullName = "Please enter your name";
    }
    if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email";
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
        source: "popup_visit_form",
        notes: `Exclusive Festival Booking Benefit Claimed for ${formData.project}`,
      });
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl border border-slate-200">
        
        {/* Modal Header */}
        <div className="relative bg-slate-50 p-6 text-slate-900 text-center border-b border-slate-200">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-200/80 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-[#c8102e] mb-3 border border-red-100 shadow-sm">
            <Gift className="h-6 w-6" />
          </div>

          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c8102e] block mb-1">
            Exclusive Developer Benefits
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
            Limited Period Booking Advantage
          </h3>
          <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
            Book a site visit today and unlock zero stamp duty assistance, custom payment plans & complimentary clubhouse access.
          </p>
        </div>

        {/* Modal Form */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  Interested Project
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e] text-slate-900"
                >
                  <option value="All Residences (2, 3, 3.5 & 4 BHK Duplex)">All Residences (2, 3, 3.5 & 4 BHK Duplex)</option>
                  <option value="2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)">2 BHK Deck Residences (1,079 Sft - ₹ 84 L* No GST*)</option>
                  <option value="3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)">3, 3.5 & 4 BHK Duplex (1,053 - 1,610 Sft - ₹ 79 L* onwards)</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  Your Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e] text-slate-900"
                />
                {errors.fullName && <p className="text-[#c8102e] text-[10px] mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  Phone (10 Digits)*
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="XXXXX XXXXX"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e] text-slate-900"
                />
                {errors.phone && <p className="text-[#c8102e] text-[10px] mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-900 block mb-1">
                  Email Address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-md text-xs sm:text-sm font-body outline-none focus:border-[#c8102e] text-slate-900"
                />
                {errors.email && <p className="text-[#c8102e] text-[10px] mt-1">{errors.email}</p>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c8102e] hover:bg-[#a60d26] text-white font-body text-xs font-bold tracking-[0.15em] uppercase py-3.5 rounded-md shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Calendar className="h-4 w-4" />
                    Claim Special Benefit & Tour
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4 animate-fade-in">
              <div className="w-14 h-14 bg-red-50 text-[#c8102e] rounded-full flex items-center justify-center mx-auto">
                <Check className="h-7 w-7" />
              </div>
              <h4 className="font-display text-2xl font-bold text-slate-900">
                Offer Code Reserved
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-900 max-w-sm mx-auto">
                Thank you <strong>{formData.fullName}</strong>. Your exclusive developer benefit for <strong>{formData.project}</strong> has been locked in. Our team will contact you with visit confirmation.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#c8102e] text-white font-body text-xs font-bold uppercase tracking-wider rounded shadow cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
