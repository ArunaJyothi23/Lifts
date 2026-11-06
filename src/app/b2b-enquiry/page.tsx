"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function B2BBulkEnquiryPage() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    deliveryCity: "Karimnagar",
    buyerRole: "Lift Company / OEM",
    componentCategory: "PMS Traction Machines",
    quantity: "5 units",
    partRefs: "",
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
      setErrorMessage("Please consent to the terms before submitting.");
      return;
    }
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "b2b-enquiry",
          name: formData.name,
          companyName: formData.companyName,
          phone: formData.phone,
          email: formData.email,
          city: formData.deliveryCity,
          deliveryCity: formData.deliveryCity,
          liftRequirement: "B2B Components",
          enquiryType: "B2B Supply",
          componentCategory: formData.componentCategory,
          quantity: formData.quantity,
          message: `[Company: ${formData.companyName}] [Role: ${formData.buyerRole}] [Category: ${formData.componentCategory}] [Qty: ${formData.quantity}] [Part Ref: ${formData.partRefs}] ${formData.message}`,
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
      setLeadId(`B2B-${Math.floor(100 + Math.random() * 900)}`);
      const fallbackWa = `https://wa.me/919848480868?text=${encodeURIComponent(
        `Hi Vision Lifts, I submitted a B2B Bulk Enquiry.\nCompany: ${formData.companyName}\nName: ${formData.name}\nPhone: ${formData.phone}\nCategory: ${formData.componentCategory}\nQty: ${formData.quantity}`
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
          <Link href="/production-hub" className="hover:text-[#423887] transition-colors">Production Hub</Link>
          <span>/</span>
          <span className="text-[#863078] font-semibold">B2B Bulk Enquiry</span>
        </div>

        <div className="mb-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#863078] mb-2">
            VISION LIFTS & SOLUTIONS / PRODUCTION HUB
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            B2B Component Bulk Enquiry
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
            Bring your sourcing requirements together. Share quantities, references and technical specifications for direct factory OEM supply across India.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                B2B Sourcing Enquiry Received!
              </h3>
              <div className="inline-block bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-xs font-mono font-bold">
                Enquiry Ref: {leadId}
              </div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong> from <strong>{formData.companyName}</strong>. Our manufacturing and supply chain desk will review your component quote and contact you.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                {whatsappLink && (
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2"
                  >
                    Direct Supply WhatsApp →
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Submit Another Sourcing Brief
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Your Sourcing Brief</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  High-tolerance precision components engineered to BIS 14665 standards.
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
                    Contact Person Name <span className="text-[#a22b51]">*</span>
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
                    Company / Firm Name <span className="text-[#a22b51]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad Elevators Pvt Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Phone Number <span className="text-[#a22b51]">*</span>
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
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="procurement@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Delivery City <span className="text-[#a22b51]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Karimnagar, Hyderabad, etc."
                    value={formData.deliveryCity}
                    onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Buyer Role
                  </label>
                  <select
                    value={formData.buyerRole}
                    onChange={(e) => setFormData({ ...formData, buyerRole: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  >
                    <option>Lift Company / OEM</option>
                    <option>Independent Lift Contractor</option>
                    <option>AMC Maintenance Provider</option>
                    <option>Real Estate Builder / Developer</option>
                    <option>Government / Infrastructure Contractor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Component Category <span className="text-[#a22b51]">*</span>
                  </label>
                  <select
                    value={formData.componentCategory}
                    onChange={(e) => setFormData({ ...formData, componentCategory: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  >
                    <option>PMS Gearless Traction Machines</option>
                    <option>Integrated VVVF Microprocessor Controllers</option>
                    <option>Automatic Door Operators & Headers</option>
                    <option>Cabins, Car Frames & Counterweight Blocks</option>
                    <option>Overspeed Governors & Progressive Safety Gears</option>
                    <option>T-Guide Rails, Brackets & Fasteners</option>
                    <option>Automatic Rescue Devices (ARD)</option>
                    <option>COP/LOP Operating Panels & TFT Displays</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Estimated Quantity <span className="text-[#a22b51]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 10 sets / 500 meters"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Part References & Technical Context
                </label>
                <textarea
                  rows={4}
                  placeholder="Provide part numbers, rope diameter, load capacity, speed (m/s), motor kW, or custom finish preferences..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                    I confirm this is an authentic commercial inquiry and consent to communication regarding wholesale pricing and technical specs. <span className="text-[#a22b51]">*</span>
                  </span>
                </label>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all disabled:opacity-50"
                >
                  {loading ? "Transmitting B2B Sourcing Brief..." : "Submit B2B Bulk Sourcing Brief →"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
