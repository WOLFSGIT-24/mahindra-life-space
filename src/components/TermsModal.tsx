import React, { useEffect } from "react";
import { X } from "lucide-react";

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col border border-slate-200 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:p-8 border-b border-slate-100 bg-slate-50 shrink-0">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-slate-900 font-bold">Terms & Conditions</h2>
            <p className="font-body text-xs text-slate-500 mt-1 uppercase tracking-widest">Mahindra Lifespaces at Mahindra World City</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors focus:outline-none cursor-pointer"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto font-body text-sm text-slate-700 leading-relaxed space-y-8">
          
          <div className="space-y-4">
            <p>
              By accessing and using this website, you agree to be bound by these Terms and Conditions. This website presents information on 2, 3, 3.5 & 4 BHK Luxury Residences at Mahindra World City, Chengalpattu, Chennai.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">1. Website Purpose</h3>
            <p>
              This website has been created for the purpose of providing residential configuration information and generating customer enquiries for residential developments at Mahindra World City, Chennai.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">2. Disclaimers</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>All images, renders, floor plans, and layouts shown are artistic impressions and represent conceptual design.</li>
              <li>Prices, specifications, amenities, and availability are subject to change as per developer discretion.</li>
              <li>TNRERA registrations: 3, 3.5 & 4 BHK Duplex is registered as Aqualily phase 2C2 (TN/01/Building/0174/2022) and 2 BHK Deck is registered as Lakewoods Towers D & E (TN/01/Building/0041/2022). Details are available at www.rera.tn.gov.in.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">3. Communication Consent</h3>
            <p>
              By submitting your contact details, you consent to being contacted by the official sales team via phone, email, or messaging regarding project updates and site visits.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">4. Contact Office</h3>
            <p>Sales Office: The Canopy, 1st Floor, Block A, Unit No. 2, Mahindra World City, Chengalpattu 603004. Phone: 080 4735 9991.</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:px-8 sm:py-6 border-t border-slate-100 bg-slate-50 shrink-0 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded bg-[#e31837] text-white font-body text-xs font-bold tracking-wider uppercase hover:bg-[#b9122c] transition-colors shadow-sm cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
