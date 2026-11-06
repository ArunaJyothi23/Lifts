"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { B2B_COMPONENTS, COMPANY_INFO } from "@/data/siteData";

export default function ProductionHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [b2bEnquiry, setB2bEnquiry] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    city: "",
    componentInterest: "Traction Machines (PMSM Gearless)",
    quantity: "1 - 5 Units",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    "All",
    "Traction Machines",
    "Controllers",
    "Door Systems",
    "Cabins & Interiors",
    "Mechanical & Hardware",
    "Fixtures",
  ];

  const filteredComponents =
    selectedCategory === "All"
      ? B2B_COMPONENTS
      : B2B_COMPONENTS.filter((c) => c.category === selectedCategory);

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header Banner (White Background) */}
      <section className="bg-white border-b border-slate-100 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#423887] font-bold">Production Hub</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 border border-purple-100 rounded-full text-xs font-bold text-[#423887] uppercase tracking-wider">
              B2B Manufacturing & OEM Component Supply
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Production hub & <span className="text-[#423887]">raw materials catalog.</span>
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              We supply certified elevator machines, VVVF integrated controllers, automatic door operators, guide rails, and custom laser-cut SS 304 cabins to elevator companies, contractors, and OEMs across South India.
            </p>
          </div>
        </div>
      </section>

      {/* B2B Advantage Ribbons */}
      <section className="py-8 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-2xl font-black text-[#423887]">Direct Factory</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Wholesale Pricing in Karimnagar</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-2xl font-black text-[#423887]">IS 14665</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Certified Batch Quality Testing</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-2xl font-black text-[#423887]">Ready Stock</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Machines, Rails & Panels On Demand</div>
            </div>
            <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
              <div className="text-2xl font-black text-[#423887]">Engineering</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Free Wiring & Parameter Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-white border-b border-slate-100 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white shadow-xs"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {filteredComponents.map((comp) => (
            <div
              key={comp.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xs hover:shadow-sm transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-3.5">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
                    {comp.category}
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {comp.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#423887]">
                    {comp.shortDesc}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {comp.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {comp.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                        <span className="text-emerald-500 font-bold">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Technical Parameters:
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {comp.specs.map((sp, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full border border-slate-200 text-slate-700">
                          <strong>{sp.label}:</strong> {sp.value}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4">
                  <div className="relative h-60 rounded-2xl overflow-hidden shadow border border-slate-200 bg-slate-900 mb-4">
                    <Image
                      src={comp.image}
                      alt={comp.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20am%20an%20elevator%20contractor%20inquiring%20about%20bulk%20supply%20for%20${encodeURIComponent(comp.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-xs"
                  >
                    B2B Wholesale WhatsApp Inquiry
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* B2B OEM / Dealer Registration Form (Clean White Card Theme) */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
              Partner With Us
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Request B2B Price List & Component Catalog
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              For elevator maintenance firms, civil builders, and independent technicians across Telangana & Andhra Pradesh.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl font-bold">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">B2B Request Submitted!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-5">
                  Thank you, <strong>{b2bEnquiry.companyName}</strong>. Our commercial sales desk in Karimnagar will reach out to <strong>{b2bEnquiry.phone}</strong> with wholesale price sheets and technical brochures.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleEnquirySubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Company / Firm Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Telangana Elevator Services"
                      value={b2bEnquiry.companyName}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Contact Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh"
                      value={b2bEnquiry.contactPerson}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, contactPerson: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98484 80868"
                      value={b2bEnquiry.phone}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="dealer@company.com"
                      value={b2bEnquiry.email}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      City / Region <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Karimnagar, Warangal"
                      value={b2bEnquiry.city}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, city: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Primary Component of Interest
                    </label>
                    <select
                      value={b2bEnquiry.componentInterest}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, componentInterest: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    >
                      <option>Traction Machines (PMSM Gearless)</option>
                      <option>Integrated VVVF Controller Cabinets</option>
                      <option>Automatic Landing & Car Door Systems</option>
                      <option>SS 304 Designer Cabins & Slings</option>
                      <option>Machined T-Guide Rails & Hardware</option>
                      <option>COP & LOP Touch Fixtures & TFT Indicators</option>
                      <option>Complete Raw Material Elevator Kits</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Estimated Monthly Requirement
                    </label>
                    <select
                      value={b2bEnquiry.quantity}
                      onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, quantity: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                    >
                      <option>1 - 5 Units / Month</option>
                      <option>5 - 15 Units / Month</option>
                      <option>15+ Units (OEM Bulk Supply)</option>
                      <option>One-Time Project Procurement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Specific Technical Details or Shaft Dimensions
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. 6-stop 1.0 m/s gearless controller with ARD board..."
                    value={b2bEnquiry.notes}
                    onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, notes: e.target.value })}
                    className="w-full px-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all"
                  >
                    Request Wholesale B2B Price Quotation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
