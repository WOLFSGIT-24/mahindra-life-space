import React, { useState } from "react";
import { X, ClipboardList, RefreshCw, FileSpreadsheet, Trash2, CheckCircle2, User, Building2 } from "lucide-react";
import { LeadSubmission } from "../types";

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadSubmission[];
  onUpdateStatus: (id: string, status: LeadSubmission["status"]) => void;
  onClearLeads: () => void;
  onAddMockLeads: () => void;
}

export default function AdminDashboard({
  isOpen,
  onClose,
  leads,
  onUpdateStatus,
  onClearLeads,
  onAddMockLeads,
}: AdminDashboardProps) {
  if (!isOpen) return null;

  const [filter, setFilter] = useState<LeadSubmission["status"] | "All">("All");
  const [projectFilter, setProjectFilter] = useState<string>("All");

  const filteredLeads = leads.filter((lead) => {
    const matchesStatus = filter === "All" || lead.status === filter;
    const matchesProject =
      projectFilter === "All" ||
      (lead.project && lead.project.toLowerCase().includes(projectFilter.toLowerCase()));
    return matchesStatus && matchesProject;
  });

  const stats = {
    total: leads.length,
    pending: leads.filter((l) => l.status === "Pending").length,
    contacted: leads.filter((l) => l.status === "Contacted").length,
    scheduled: leads.filter((l) => l.status === "Scheduled").length,
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Mahindra_World_City_Leads_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[88vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Header Console */}
        <div className="bg-slate-900 p-6 text-white flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#e31837] rounded-xl text-white">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-lg sm:text-xl font-bold">
                Mahindra World City Sales Partner CRM
              </h3>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold">
                Mahindra World City Real-Time Inquiries & Site Bookings
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

        {/* Analytics Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-100 bg-slate-50">
          <div className="p-4 border-r border-slate-200 text-center">
            <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
              Total Inquiries
            </span>
            <span className="font-display text-2xl font-bold text-slate-900">{stats.total}</span>
          </div>
          <div className="p-4 border-r border-slate-200 text-center">
            <span className="block text-[10px] font-bold text-amber-600 uppercase tracking-wider">
              Pending Validation
            </span>
            <span className="font-display text-2xl font-bold text-amber-600">{stats.pending}</span>
          </div>
          <div className="p-4 border-r border-slate-200 text-center">
            <span className="block text-[10px] font-bold text-indigo-600 uppercase tracking-wider">
              Contacted Leads
            </span>
            <span className="font-display text-2xl font-bold text-indigo-600">{stats.contacted}</span>
          </div>
          <div className="p-4 text-center">
            <span className="block text-[10px] font-bold text-emerald-600 uppercase tracking-wider">
              Site Visits Scheduled
            </span>
            <span className="font-display text-2xl font-bold text-emerald-600">{stats.scheduled}</span>
          </div>
        </div>

        {/* Console Controls panel */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
          <div className="flex flex-wrap gap-2">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              {["All", "Pending", "Contacted", "Scheduled", "Completed"].map((status) => (
                <button
                  key={status}
                  onClick={() => setFilter(status as any)}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    filter === status
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            <div className="flex bg-slate-100 p-1 rounded-lg">
              {["All", "3, 3.5 & 4 BHK", "2 BHK Deck"].map((proj) => (
                <button
                  key={proj}
                  onClick={() => setProjectFilter(proj)}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                    projectFilter === proj
                      ? "bg-[#e31837] text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {proj}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onAddMockLeads}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-body text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md flex items-center gap-1.5 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Seed Demos
            </button>
            
            <button
              onClick={handleExportJSON}
              disabled={leads.length === 0}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-body text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md flex items-center gap-1.5 shadow disabled:opacity-50 cursor-pointer"
            >
              <FileSpreadsheet className="h-3.5 w-3.5" />
              Export
            </button>

            <button
              onClick={onClearLeads}
              disabled={leads.length === 0}
              className="bg-rose-600 hover:bg-rose-700 text-white font-body text-[10px] font-bold tracking-wider uppercase px-3.5 py-2 rounded-md flex items-center gap-1.5 shadow disabled:opacity-50 cursor-pointer"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>
        </div>

        {/* Lead List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50 space-y-3">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-200 p-8">
              <ClipboardList className="h-12 w-12 text-slate-300 mx-auto mb-2" />
              <span className="block font-display text-base font-semibold text-slate-800">
                No Leads Found Matching Filters
              </span>
              <span className="text-xs text-slate-500">
                Submit an inquiry or click 'Seed Demos' to populate.
              </span>
            </div>
          ) : (
            filteredLeads.map((lead) => (
              <div
                key={lead.id}
                className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 transition-all flex flex-col md:flex-row justify-between gap-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-red-50 text-[#e31837] flex items-center justify-center shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-display font-bold text-slate-900">
                        {lead.fullName}
                      </span>
                      <span className="text-[10px] text-slate-400 block font-semibold uppercase">
                        ID: {lead.id} · {new Date(lead.submittedAt).toLocaleDateString()}
                      </span>
                    </div>
                    {lead.project && (
                      <span className="ml-2 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                        {lead.project}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 pl-10 font-body text-xs text-slate-600">
                    <div>📧 {lead.email}</div>
                    <div>📞 {lead.phone}</div>
                    {lead.preferredDate && (
                      <div className="col-span-2 text-indigo-600 font-semibold mt-1">
                        🗓️ Site Walkthrough: {lead.preferredDate} at {lead.preferredTime || "11:00 AM"}
                      </div>
                    )}
                    {lead.notes && (
                      <div className="col-span-2 text-slate-700 bg-slate-50 p-2 rounded text-[11px] mt-1 border border-slate-200">
                        {lead.notes}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col justify-between items-end gap-3 self-stretch border-t md:border-t-0 border-slate-100 pt-3 md:pt-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-slate-600 uppercase">
                      Status:
                    </span>
                    <select
                      value={lead.status}
                      onChange={(e) => onUpdateStatus(lead.id, e.target.value as any)}
                      className="text-xs font-bold px-2.5 py-1 rounded border outline-none bg-slate-50 border-slate-300"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                  <div className="text-[10px] text-slate-400 font-semibold uppercase">
                    Source: {lead.source}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
