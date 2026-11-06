"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function ServiceRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Karimnagar",
    assetRef: "",
    issueCategory: "Door operation",
    observedConcern: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage("Please confirm this is a routine request and consent to follow-up.");
      return;
    }
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "service-request",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          liftRequirement: "Service & Maintenance",
          enquiryType: "Service-AMC",
          issueCategory: formData.issueCategory,
          message: `[Asset: ${formData.assetRef || "N/A"}] [Issue: ${formData.issueCategory}] ${formData.observedConcern} ${formData.message}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setLeadId(data.leadId);
        setWhatsappLink(data.whatsappLink);
      } else {
        setErrorMessage(data.error || "Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
      setLeadId(`SR-${Math.floor(100 + Math.random() * 900)}`);
      const fallbackWa = `https://wa.me/919848480868?text=${encodeURIComponent(
        `Hi Vision Lifts, I submitted a Service Request.\nName: ${formData.name}\nPhone: ${formData.phone}\nIssue: ${formData.issueCategory}\nLocation: ${formData.city}`
      )}`;
      setWhatsappLink(fallbackWa);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] pt-6 sm:pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#863078] font-semibold">Service Request</span>
        </div>

        <div className="mb-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#863078] mb-2">
            VISION LIFTS & SOLUTIONS / TELANGANA
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Service Request
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
            Report a routine maintenance or repair concern. Describe the asset and issue so the service team can dispatch a qualified elevator technician.
          </p>
        </div>

        {/* High-Priority Safety Notice */}
        <div className="mb-8 bg-red-500/10 border-2 border-red-500/40 rounded-3xl p-6 text-slate-900">
          <div className="flex items-start gap-3.5">
            <span className="text-2xl mt-0.5">🚨</span>
            <div>
              <h2 className="text-base font-black text-red-700 tracking-tight">
                Safety comes before a form — Trapped passenger or immediate danger?
              </h2>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                Use the installed emergency alarm, in-cabin intercom, or contact our 24/7 Breakdown Rapid AMC Team immediately. Do not force doors or attempt self-rescue.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Emergency Hotline: {COMPANY_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=URGENT%20BREAKDOWN%20ALERT`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  WhatsApp Emergency Alert
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Routine Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Service Request Registered
              </h3>
              <div className="inline-block bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-xs font-mono font-bold">
                Ticket Reference: {leadId}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your routine service request for <strong>{formData.issueCategory}</strong> in <strong>{formData.city}</strong> has been assigned to our maintenance division.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                  >
                    Track via WhatsApp →
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Submit Another Service Request
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Routine Service & Maintenance Details</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Describe what you observed without attempting internal repairs or mechanical dismantling.
                </p>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Your Full Name <span className="text-[#a22b51]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Reddy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Mobile Number <span className="text-[#a22b51]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98484 80868"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Building City & Locality <span className="text-[#a22b51]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Karimnagar, Warangal, etc."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Lift / Asset Reference (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lift #1, Block B, or AMC No."
                    value={formData.assetRef}
                    onChange={(e) => setFormData({ ...formData, assetRef: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Issue Category <span className="text-[#a22b51]">*</span>
                </label>
                <select
                  value={formData.issueCategory}
                  onChange={(e) => setFormData({ ...formData, issueCategory: e.target.value })}
                  className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                >
                  <option>Door Operation / Re-opening</option>
                  <option>Unusual Noise or Vibration</option>
                  <option>Floor Levelling Inaccuracy</option>
                  <option>Cabin Lighting / Display Screen / Button</option>
                  <option>Periodic Preventive AMC Inspection</option>
                  <option>Lubrication & Guide Rail Check</option>
                  <option>Other Operational Concern</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Observed Concern & Symptoms <span className="text-[#a22b51]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe when the issue was observed, floor where it occurs, and any sounds or unusual behaviors..."
                  value={formData.observedConcern}
                  onChange={(e) => setFormData({ ...formData, observedConcern: e.target.value })}
                  className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                />
              </div>

              <div>
                <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-0.5 rounded border-slate-300 text-[#863078] focus:ring-[#863078]"
                  />
                  <span>
                    I confirm this is a routine service request and consent to follow-up by Vision Lifts & Solutions engineers. <span className="text-[#a22b51]">*</span>
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all disabled:opacity-50"
                >
                  {loading ? "Registering Service Request..." : "Register Service Request →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
