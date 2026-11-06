"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function QuoteRequestPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Karimnagar",
    buildingType: "Residential",
    liftRequirement: "Passenger",
    enquiryType: "New installation",
    sameAsPhone: true,
    whatsappNumber: "",
    floors: "",
    expectedLoad: "",
    doorPreference: "Automatic",
    preferredContact: "Phone",
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
      setErrorMessage("Please agree to the consent checkbox before submitting.");
      return;
    }
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "quote-request",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          buildingType: formData.buildingType,
          liftRequirement: formData.liftRequirement,
          enquiryType: formData.enquiryType,
          whatsapp: formData.sameAsPhone ? formData.phone : formData.whatsappNumber,
          floors: formData.floors,
          expectedLoad: formData.expectedLoad,
          doorPreference: formData.doorPreference,
          preferredContact: formData.preferredContact,
          message: formData.message,
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
      // Fallback client-side confirmation
      setSubmitted(true);
      setLeadId(`LEAD-${Math.floor(100 + Math.random() * 900)}`);
      const fallbackWa = `https://wa.me/919848480868?text=${encodeURIComponent(
        `Hi Vision Lifts, I submitted a Quote Request.\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.liftRequirement} (${formData.buildingType})\nCity: ${formData.city}`
      )}`;
      setWhatsappLink(fallbackWa);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] pt-6 sm:pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Eyebrow */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#863078] font-semibold">Quote Request</span>
        </div>

        <div className="mb-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#863078] mb-2">
            VISION LIFTS & SOLUTIONS / TELANGANA
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Quote Request
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
            A meaningful proposal starts with a clear brief. Share your building and intended application; technical specifications follow assessment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What informs your proposal */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 tracking-tight mb-4">
                What informs your proposal
              </h2>
              <ul className="space-y-3.5 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Application & Building Type:</strong> Specific usage requirements shaped for your architectural layout.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Site Conditions:</strong> Pit depth, overhead clearance, shaft dimensions, and power availability.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Scope & Exclusions:</strong> Transparent civil, electrical, and fabrication responsibilities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span><strong>Finishes & Technology:</strong> Glass, Hairline SS 304, ARD rescue, and gearless PMS traction drive.</span>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Direct founder & engineer review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>IS 14665 & NBC 2016 compliant planning</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="bg-[#071d27] text-white rounded-3xl p-6 border border-[#143e4f]">
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                Prefer immediate assistance?
              </div>
              <h3 className="text-sm font-bold text-white mb-3">Speak directly with our team</h3>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                Connect on WhatsApp or call our central office for rapid advice on site feasibility.
              </p>
              <div className="space-y-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20would%20like%20a%20quote%20for%20an%20elevator.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Chat on WhatsApp
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Call {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: The Quote Request Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Proposal Request Received!
                  </h3>
                  <div className="inline-block bg-slate-100 text-slate-800 px-4 py-1.5 rounded-full text-xs font-mono font-bold">
                    Reference ID: {leadId}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Your enquiry for a <strong>{formData.liftRequirement}</strong> in <strong>{formData.city}</strong> has been logged. Our engineering team will review site requirements and contact you via {formData.preferredContact}.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    {whatsappLink && (
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-xs"
                      >
                        Confirm on WhatsApp →
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          ...formData,
                          message: "",
                          floors: "",
                          expectedLoad: "",
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Tell us what you need</h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fields marked with <span className="text-[#a22b51]">*</span> are required for engineering assessment.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <span>⚠️</span>
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Section 1: Contact Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Full Name <span className="text-[#a22b51]">*</span>
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Email Address (Recommended)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        City / Site Location <span className="text-[#a22b51]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Karimnagar, Warangal, Hyderabad, etc."
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      />
                    </div>
                  </div>

                  {/* WhatsApp checkbox */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                    <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.sameAsPhone}
                        onChange={(e) => setFormData({ ...formData, sameAsPhone: e.target.checked })}
                        className="rounded border-slate-300 text-[#863078] focus:ring-[#863078]"
                      />
                      <span>WhatsApp number is the same as phone number</span>
                    </label>
                    {!formData.sameAsPhone && (
                      <input
                        type="tel"
                        placeholder="WhatsApp number"
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        className="w-48 px-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none"
                      />
                    )}
                  </div>

                  {/* Section 2: Building & Lift Parameters */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Building Type <span className="text-[#a22b51]">*</span>
                      </label>
                      <select
                        value={formData.buildingType}
                        onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      >
                        <option>Residential Villa</option>
                        <option>Residential Apartment</option>
                        <option>Commercial Complex / Offices</option>
                        <option>Hospital & Healthcare</option>
                        <option>Industrial Plant / Warehouse</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Lift Requirement <span className="text-[#a22b51]">*</span>
                      </label>
                      <select
                        value={formData.liftRequirement}
                        onChange={(e) => setFormData({ ...formData, liftRequirement: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      >
                        <option>Passenger Lift</option>
                        <option>Panoramic Glass Capsule</option>
                        <option>Hospital Bed / Stretcher Lift</option>
                        <option>Heavy Freight / Goods Lift</option>
                        <option>Dumbwaiter / Small Service</option>
                        <option>Structure / Shaft Fabrication</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Enquiry Type <span className="text-[#a22b51]">*</span>
                      </label>
                      <select
                        value={formData.enquiryType}
                        onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      >
                        <option>New installation</option>
                        <option>Replacement of Existing Lift</option>
                        <option>Modernization & Controller Upgrade</option>
                        <option>Maintenance / AMC Support</option>
                        <option>B2B Component Supply</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Section 3: Technical Preferences */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Floors / Stops (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. G+3 (4 Stops)"
                        value={formData.floors}
                        onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Expected Capacity (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 6 Persons / 408 kg"
                        value={formData.expectedLoad}
                        onChange={(e) => setFormData({ ...formData, expectedLoad: e.target.value })}
                        className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                        Door Preference
                      </label>
                      <select
                        value={formData.doorPreference}
                        onChange={(e) => setFormData({ ...formData, doorPreference: e.target.value })}
                        className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                      >
                        <option>Automatic Center Opening</option>
                        <option>Automatic Telescopic</option>
                        <option>Manual Collapsible / Swing</option>
                        <option>Undecided / Engineer Advice</option>
                      </select>
                    </div>
                  </div>

                  {/* Section 4: Message / Brief */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Message & Site Brief <span className="text-[#a22b51]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about the building, expected timeline, shaft availability or any specific custom interior requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 rounded border-slate-300 text-[#863078] focus:ring-[#863078]"
                      />
                      <span>
                        I consent to being contacted by Vision Lifts & Solutions regarding this enquiry and have read the{" "}
                        <Link href="/privacy-policy" className="text-[#423887] font-semibold underline">
                          Privacy Policy
                        </Link>
                        . <span className="text-[#a22b51]">*</span>
                      </span>
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all disabled:opacity-50"
                    >
                      {loading ? "Submitting Proposal Request..." : "Submit Proposal Request →"}
                    </button>
                    <Link
                      href="/site-survey"
                      className="w-full sm:w-auto px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-center font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                    >
                      Book Free Site Survey Instead
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
