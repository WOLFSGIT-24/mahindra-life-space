import React, { useEffect } from "react";
import { X } from "lucide-react";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
            <h2 className="font-display text-2xl sm:text-3xl text-slate-900 font-bold">Privacy Policy</h2>
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
              This website provides information for Codename AquaVista and Mahindra Lakewoods at Mahindra World City, Chengalpattu, Chennai. We are committed to protecting the privacy of every visitor to this website and handling your personal information with care, transparency, and respect.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">1. Information We Collect</h3>
            <p>When you submit an enquiry form on this website, we collect the following personal information:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Phone Number</li>
              <li>Project of interest (AquaVista or Lakewoods)</li>
              <li>Preferred visit date and time slot</li>
            </ul>
            <p>We may also automatically collect non personal technical data such as browser type, IP address, device type, and pages visited, solely for analytics and performance optimisation purposes.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">2. How We Use Your Information</h3>
            <p>Your personal information is used solely for the following purposes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Responding to your enquiry about Codename AquaVista and Mahindra Lakewoods</li>
              <li>Sharing digital brochures, floor plans, and project price sheets</li>
              <li>Connecting you with the official sales team at The Canopy, Mahindra World City</li>
              <li>Scheduling site walkthrough appointments</li>
              <li>Sending relevant updates about the project launch and construction milestones</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">3. Data Sharing</h3>
            <p>We share your information with Mahindra Lifespaces and their authorised representatives for the sole purpose of fulfilling your enquiry and following up on your interest in this project.</p>
            <p>We do not sell, rent, or trade your personal data to any third parties for unrelated marketing purposes.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">4. Cookies and Tracking Technologies</h3>
            <p>This website uses cookies and tracking technologies to measure advertising performance and optimize your browsing experience.</p>
            <p>You may disable cookies through your browser settings at any time.</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-slate-900">5. Contact Us</h3>
            <p>For any privacy related queries, please reach out to the sales office:</p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>Sales Office:</strong> The Canopy, 1st Floor, Block A, Unit No. 2, Mahindra World City, Chengalpattu 603004</li>
              <li><strong>Phone:</strong> 080 4735 9991</li>
            </ul>
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
