import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Check, Phone, Mail, User } from "lucide-react";
import { LeadSubmission } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddLead: (lead: Omit<LeadSubmission, "id" | "submittedAt" | "status">) => void;
  initialUnitType?: string | null;
  initialProject?: string | null;
}

export default function BookingModal({
  isOpen,
  onClose,
  onAddLead,
  initialUnitType,
  initialProject,
}: BookingModalProps) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    project: initialProject || "Both Projects (AquaVista & Lakewoods)",
    unitType: initialUnitType || "",
    preferredDate: "",
    preferredTime: "11:00 AM",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialUnitType) {
      setFormData((prev) => ({ ...prev, unitType: initialUnitType }));
    }
    if (initialProject) {
      setFormData((prev) => ({ ...prev, project: initialProject }));
    }
  }, [initialUnitType, initialProject]);

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
      newErrors.fullName = "Please enter your full name";
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
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        source: "site_visit_form",
        notes: `Direct booking for ${formData.project} (${formData.unitType || "General"}) on ${formData.preferredDate} at ${formData.preferredTime}`,
      });
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto relative border border-slate-200">
        <div className="bg-slate-900 p-4 sm:p-6 text-white flex justify-between items-center border-b border-slate-800 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 sm:p-2.5 bg-[#e31837] rounded-xl text-white">
              <Calendar className="h-4 sm:h-5 w-4 sm:w-5" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold">
                Book Site Visit & Model Tour
              </h3>
              <p className="text-[10px] sm:text-[11px] text-slate-300">
                Mahindra World City, Chengalpattu, Chennai
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

        <div className="p-4 sm:p-6 md:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Select Project
                </label>
                <select
                  id="project"
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
                <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                  Your Full Name*
                </label>
                <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Email Address*
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2">
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
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Phone (10 Digits)*
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Preferred Date
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <input
                      type="date"
                      id="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1">
                    Preferred Time Slot
                  </label>
                  <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <select
                      id="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full bg-transparent border-none text-xs sm:text-sm font-body outline-none"
                    >
                      <option value="10:00 AM (Morning)">10:00 AM (Morning)</option>
                      <option value="11:30 AM (Morning)">11:30 AM (Morning)</option>
                      <option value="02:30 PM (Afternoon)">02:30 PM (Afternoon)</option>
                      <option value="04:30 PM (Evening)">04:30 PM (Evening)</option>
                      <option value="06:00 PM (Sunset Tour)">06:00 PM (Sunset Tour)</option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#e31837] hover:bg-[#b9122c] text-white font-body text-xs font-bold tracking-widest uppercase py-3.5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Confirm Site Visit Schedule"
                )}
              </button>
            </form>
          ) : (
            <div className="text-center py-6 sm:py-8 space-y-3 sm:space-y-4 animate-fade-in">
              <div className="h-14 w-14 sm:h-16 sm:w-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                <Check className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Site Visit Requested
              </h4>
              <p className="font-body text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.fullName}</strong>. Our relationship manager at The Canopy, Mahindra World City will contact you shortly to confirm your scheduled slot.
              </p>
              <button
                onClick={onClose}
                className="bg-slate-900 text-white font-body text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-lg shadow"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
