"use client";

import React, { useState } from "react";
import { COMPANY_INFO } from "@/data/siteData";

interface SiteSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SiteSurveyModal({ isOpen, onClose }: SiteSurveyModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Karimnagar",
    buildingType: "Residential Villa / Home",
    floors: "G+2 Floors",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [leadId, setLeadId] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "modal-survey",
          name: formData.name,
          phone: formData.phone,
          city: formData.location,
          buildingType: formData.buildingType,
          floors: formData.floors,
          message: formData.notes,
        }),
      });
      const data = await res.json();
      if (data.leadId) setLeadId(data.leadId);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white p-5 sm:p-6 relative shrink-0">
          <button
            type="button"
            onClick={resetAndClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/20 hover:bg-white/30 rounded-full w-8 h-8 flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
          <div className="inline-block px-3 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-white/20 rounded-full mb-1.5">
            Zero Cost · Zero Obligation
          </div>
          <h3 className="text-xl sm:text-2xl font-black">Book a Free Site Survey</h3>
          <p className="text-xs text-white/90 mt-1">
            Our certified elevator engineers will inspect your site in Karimnagar & across Telangana to recommend the exact shaft, pit, and power specifications.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                ✓
              </div>
              <div className="inline-block px-3 py-1 bg-purple-50 text-[#423887] text-[11px] font-bold uppercase tracking-wider rounded-full border border-purple-100 mb-2">
                Booking Ref: {leadId || "SURVEY-REQUEST"}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Survey Request Received!</h4>
              <p className="text-xs text-slate-600 mb-6">
                Thank you, <strong>{formData.name}</strong>. Ramesh Vilasagar or our senior technical engineer will call you shortly at <strong>{formData.phone}</strong> to coordinate the site survey.
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20just%20booked%20a%20site%20survey%20for%20my%20${encodeURIComponent(formData.buildingType)}%20in%20${encodeURIComponent(formData.location)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Chat on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider rounded-full transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Reddy"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98484 80868"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Site Location / City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karimnagar, Warangal"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Building Type
                  </label>
                  <select
                    value={formData.buildingType}
                    onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                    className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40 bg-white"
                  >
                    <option>Residential Villa / Home</option>
                    <option>Apartment Building</option>
                    <option>Commercial Complex / Office</option>
                    <option>Hospital / Medical Center</option>
                    <option>Industrial Plant / Warehouse</option>
                    <option>Other / Modernization</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Number of Floors
                  </label>
                  <select
                    value={formData.floors}
                    onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                    className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40 bg-white"
                  >
                    <option>G+1 (2 Stops)</option>
                    <option>G+2 (3 Stops)</option>
                    <option>G+3 (4 Stops)</option>
                    <option>G+4 (5 Stops)</option>
                    <option>G+5 or more</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Specific Requirements or Civil Status (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Existing building with no pit, requires glass capsule, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold rounded-full shadow-md shadow-[#863078]/25 transition-all text-xs uppercase tracking-wider cursor-pointer active:scale-98"
                >
                  Confirm Free Site Survey Request
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2">
                  🔒 We respect your privacy. No spam. Direct technical consultation.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
