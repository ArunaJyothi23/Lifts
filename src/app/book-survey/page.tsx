"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/siteData";
import TypewriterText from "@/components/TypewriterText";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function BookSurveyPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "Karimnagar",
    district: "Karimnagar",
    buildingType: "Independent Villa / Bungalow",
    liftRequirement: "Passenger Lift (MRL/Gearless)",
    constructionStage: "Pit & Shaft Under Construction",
    floors: "G + 2 (3 Stops)",
    preferredDate: "",
    preferredTime: "Morning (10:00 AM - 01:00 PM)",
    notes: "",
    consent: true,
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage("Please accept the technical consultation agreement before submitting.");
      return;
    }
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "book-survey",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: `${formData.city} (${formData.district})`,
          buildingType: formData.buildingType,
          liftRequirement: formData.liftRequirement,
          constructionStage: formData.constructionStage,
          floors: formData.floors,
          preferredDate: formData.preferredDate || "Earliest available",
          preferredTime: formData.preferredTime,
          message: `Site Survey Request: ${formData.buildingType} | ${formData.floors} | Stage: ${formData.constructionStage} | Notes: ${formData.notes || "None provided"}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setLeadId(data.leadId);
        setWhatsappLink(data.whatsappLink);
      } else {
        setErrorMessage(data.error || "Failed to schedule survey. Please try again.");
      }
    } catch (err) {
      console.error(err);
      const generatedId = `SURVEY-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmitted(true);
      setLeadId(generatedId);
      const fallbackWa = `https://wa.me/919848480868?text=${encodeURIComponent(
        `Hi Vision Lifts, I scheduled a Free Hoistway Site Survey.\nBooking ID: ${generatedId}\nName: ${formData.name}\nPhone: ${formData.phone}\nLocation: ${formData.city}, ${formData.district}\nBuilding: ${formData.buildingType} (${formData.floors})\nStage: ${formData.constructionStage}\nDate: ${formData.preferredDate || "Earliest"} (${formData.preferredTime})`
      )}`;
      setWhatsappLink(fallbackWa);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfe] text-slate-800 pt-6 sm:pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#863078] font-semibold">Book a Free Site Survey</span>
        </nav>

        {/* Hero Header */}
        <div className="mb-10 text-center max-w-3xl mx-auto relative overflow-hidden py-4">
          <div className="ambient-orb w-72 h-72 -top-16 -left-16 bg-purple-200/30 animate-pulse-slow" />
          <div className="ambient-orb w-64 h-64 -top-10 -right-16 bg-rose-200/20 animate-pulse-slow" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold uppercase tracking-wider text-[#863078] mb-3 relative z-10">
            <span className="w-2 h-2 rounded-full bg-[#863078] animate-pulse"></span>
            ZERO-COST ENGINEER VISIT ACROSS ALL <AnimatedCounter value="33" /> TELANGANA DISTRICTS
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight relative z-10">
            Book a Free Hoistway <span className="text-shimmer-brand">Site Survey</span>
          </h1>

          {/* Dynamic Typewriter text loading */}
          <div className="flex items-center justify-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-white/90 backdrop-blur-xs border border-purple-100 px-4 py-2 rounded-2xl w-fit mx-auto mt-3.5 shadow-2xs relative z-10">
            <span className="text-[#863078] font-extrabold uppercase tracking-wider text-[11px]">Dispatch Standards:</span>
            <TypewriterText
              phrases={[
                "Laser-accurate shaft measurement (±2mm precision)",
                "Free civil hoistway CAD drawings included",
                "Available across all 33 districts of Telangana",
                "48-hour engineer site dispatch guaranteed",
              ]}
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={2400}
            />
          </div>

          <p className="mt-3.5 text-sm sm:text-base text-slate-600 leading-relaxed relative z-10">
            Our senior elevator engineers visit your building across Karimnagar, Hyderabad, Warangal, and all Telangana districts to laser-measure shaft dimensions, pit depth, overhead clearance, and power lines — <strong>100% free with zero obligation</strong>.
          </p>
        </div>

        {/* 4 Feature Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10">
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#863078] flex items-center justify-center font-bold mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-900">48h Dispatch</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Quick site engineer visit</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#863078] flex items-center justify-center font-bold mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-900">Laser Precision</span>
            <span className="text-[11px] text-slate-500 mt-0.5">±2mm shaft measurement</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#863078] flex items-center justify-center font-bold mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-900">Free CAD Drawing</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Civil hoistway GA layout</span>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#863078] flex items-center justify-center font-bold mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xs font-bold text-slate-900">IS 14665 Code</span>
            <span className="text-[11px] text-slate-500 mt-0.5">Compliant safety engineering</span>
          </div>
        </div>

        {/* Main Content Grid: Form + Side Guidance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                  ✓
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Survey Scheduled Successfully!
                </h3>
                <div className="inline-block bg-slate-100 text-[#423887] px-4 py-1.5 rounded-full text-xs font-mono font-bold border border-slate-200">
                  Reference: {leadId}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Senior technical engineer Ramesh Vilasagar or our district field engineer will reach out at <strong>{formData.phone}</strong> to confirm your site visit for <strong>{formData.city}</strong>.
                </p>

                <div className="p-4 bg-purple-50/60 rounded-2xl border border-purple-100 text-left text-xs text-slate-600 space-y-2 mt-4">
                  <div className="font-bold text-slate-900">Next Steps:</div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#863078] font-bold">1.</span>
                    <span>Our engineer calls you 2 hours prior to arrival.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#863078] font-bold">2.</span>
                    <span>We measure pit depth, headroom, wall plumb & electricity.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#863078] font-bold">3.</span>
                    <span>You receive a free hoistway CAD drawing & quotation.</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Confirm via WhatsApp →</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Schedule Another Survey
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-slate-100 pb-3">
                  <h2 className="text-lg font-bold text-slate-900">1. Building & Site Information</h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Help our engineers prepare appropriate laser measurement equipment for your site.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Phone */}
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
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Mobile / WhatsApp Number <span className="text-[#a22b51]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98484 80868"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Email & City/District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Telangana District / City <span className="text-[#a22b51]">*</span>
                    </label>
                    <select
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value, city: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    >
                      <option>Karimnagar</option>
                      <option>Hyderabad & Secunderabad</option>
                      <option>Warangal & Hanamkonda</option>
                      <option>Nizamabad</option>
                      <option>Jagtial</option>
                      <option>Peddapalli & Ramagundam</option>
                      <option>Siddipet</option>
                      <option>Khammam</option>
                      <option>Nalgonda</option>
                      <option>Mancherial</option>
                      <option>Other Telangana Location</option>
                    </select>
                  </div>
                </div>

                {/* Building Type & Lift Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Building Type <span className="text-[#a22b51]">*</span>
                    </label>
                    <select
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    >
                      <option>Independent Villa / Bungalow</option>
                      <option>Residential Apartment (G+4 or G+5)</option>
                      <option>High-Rise Housing Society</option>
                      <option>Commercial Office Building</option>
                      <option>Hospital / Medical Center</option>
                      <option>Shopping Complex / Retail Showroom</option>
                      <option>Industrial Shed / Warehouse</option>
                      <option>Hotel / Banquet Hall</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Elevator Series <span className="text-[#a22b51]">*</span>
                    </label>
                    <select
                      value={formData.liftRequirement}
                      onChange={(e) => setFormData({ ...formData, liftRequirement: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    >
                      <option>Passenger Lift (MRL/Gearless)</option>
                      <option>Hydraulic Pitless Home Lift</option>
                      <option>Glass Panoramic Capsule Elevator</option>
                      <option>Stretcher / Bed Elevator (Hospital)</option>
                      <option>Heavy Freight / Goods Lift</option>
                      <option>Kitchen / Dumbwaiter Lift</option>
                      <option>Modernization of Existing Old Lift</option>
                    </select>
                  </div>
                </div>

                {/* Construction Stage & Number of Floors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Current Construction Stage <span className="text-[#a22b51]">*</span>
                    </label>
                    <select
                      value={formData.constructionStage}
                      onChange={(e) => setFormData({ ...formData, constructionStage: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    >
                      <option>Pit & Shaft Under Construction</option>
                      <option>Planned on Architect Blueprints</option>
                      <option>Shaft Civil Work Completed (Bare Shell)</option>
                      <option>Existing Completed House (Retrofit)</option>
                      <option>Replacing Old Existing Elevator</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Floors / Number of Stops <span className="text-[#a22b51]">*</span>
                    </label>
                    <select
                      value={formData.floors}
                      onChange={(e) => setFormData({ ...formData, floors: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    >
                      <option>G + 1 (2 Stops)</option>
                      <option>G + 2 (3 Stops)</option>
                      <option>G + 3 (4 Stops)</option>
                      <option>G + 4 (5 Stops)</option>
                      <option>G + 5 (6 Stops)</option>
                      <option>G + 6 to G + 10 (High Rise)</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Date & Time Window */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Preferred Survey Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                    >
                      <option>Morning (10:00 AM - 01:00 PM)</option>
                      <option>Afternoon (01:00 PM - 04:00 PM)</option>
                      <option>Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Site Notes / Dimensions */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    Site Notes, Exact Address or Shaft Dimensions
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter site locality, landmark, available shaft width x depth, or contact details for the on-site supervisor..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 transition-all"
                  />
                </div>

                {/* Consent checkbox */}
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
                      I request a free on-site hoistway survey and agree to be contacted by Vision Lifts & Solutions engineers. <span className="text-[#a22b51]">*</span>
                    </span>
                  </label>
                </div>

                {/* Submit button with Logo Brand Gradient */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#863078]/25 transition-all disabled:opacity-50 cursor-pointer btn-sheen"
                  >
                    {loading ? "Scheduling Survey Dispatch..." : "Schedule Free Site Survey →"}
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    🔒 No credit card required. 100% free with no obligation to purchase.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Technical Guidance & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Engineer Contact Card */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                  <Image
                    src="/images/vision-lifts-logo.png"
                    alt="Vision Lifts Engineering"
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Direct Senior Engineer Desk</h3>
                  <p className="text-xs text-slate-500">Ramesh Vilasagar & Technical Team</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Prefer to speak directly with our chief elevator engineer before scheduling? Call or send your CAD plans via WhatsApp for immediate feasibility feedback.
              </p>

              <div className="pt-2 flex flex-col gap-2 text-xs">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-800 font-semibold border border-slate-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>Direct Call: {COMPANY_INFO.phone}</span>
                  </span>
                  <span className="text-[#863078] text-xs">Call Now →</span>
                </a>

                <a
                  href="https://wa.me/919848480868"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">💬</span>
                    <span>WhatsApp Engineer Desk</span>
                  </span>
                  <span className="text-emerald-700 text-xs">Chat Now →</span>
                </a>
              </div>
            </div>

            {/* Hoistway Technical Checklist */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                What Our Engineer Inspects on Site
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#863078] font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-800">Pit Depth & Waterproofing:</strong> We verify if standard 1200mm pit is feasible or if our 300mm pitless hydraulic solution is required.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#863078] font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-800">Overhead Clearances:</strong> Laser check from top landing to machine slab/ceiling (standard 3600mm - 4200mm).
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#863078] font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-800">Shaft Plumb & Lintel Beams:</strong> 3D vertical plumb line check to verify civil wall deflection does not exceed ±10mm.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#863078] font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-slate-800">Power Supply & MCB:</strong> Inspection of 415V 3-phase or 230V single-phase power routing to the top landing.
                  </div>
                </li>
              </ul>
            </div>

            {/* Regional Coverage */}
            <div className="bg-gradient-to-br from-slate-900 to-[#423887] text-white rounded-3xl p-6 shadow-sm space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300">
                Regional Hubs
              </span>
              <h4 className="text-base font-bold">
                Serving All Districts in Telangana
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Headquartered at Gandhi Road, Karimnagar with rapid engineer dispatch stations across Hyderabad, Warangal, Jagtial, Peddapalli, and Khammam.
              </p>
              <div className="pt-2 text-[11px] text-purple-200 flex items-center gap-2">
                <span>📍 Gandhi Road, Karimnagar - 505001</span>
              </div>
            </div>

          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions About Site Surveys
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Everything you need to know about our free elevator inspection.
            </p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                Is the site survey genuinely 100% free?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Yes. Our elevator engineers visit your location anywhere in Telangana, perform full laser hoistway measurements, and provide a CAD drawing without any fee or obligation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                Can I install an elevator in an existing finished house without a built-in shaft?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Absolutely. We specialize in retrofitting glass panoramic elevators into stairwell cutouts or installing external self-supporting MS glass shafts outside the building with zero civil disruption.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200/80">
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                How quickly will I receive the quotation and drawings after the survey?
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Our CAD design team produces the 2D general arrangement drawing (GA layout) and itemized quotation within 24 to 48 hours following the engineer's on-site visit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

