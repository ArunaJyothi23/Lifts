"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { B2B_COMPONENTS, COMPANY_INFO } from "@/data/siteData";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProductionHubPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [b2bEnquiry, setB2bEnquiry] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    email: "",
    businessType: "Elevator Company / Contractor",
    componentCategory: "PMSM Gearless Traction Machines",
    quantity: "1 - 5 Units",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [selectedDocForDownload, setSelectedDocForDownload] = useState<string>("Complete B2B Catalogue 2026");

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
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("b2b-enquiry-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* =========================================================================
          1. HERO SECTION (Page 7 Requirements Document - Dark Signature Tech Theme)
          ========================================================================= */}
      <section className="relative bg-gradient-to-br from-[#1c143d] via-[#241334] to-[#2e1236] text-white pt-10 sm:pt-14 pb-16 sm:pb-20 overflow-hidden border-b border-purple-900/40">
        {/* Architectural Ambient Orbs & Technical Grid Overlay */}
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-500/20 pointer-events-none" />
        <div className="ambient-orb w-96 h-96 top-1/2 -right-24 bg-[#a22b51]/20 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Heading, Subtitle & B2B Action Buttons */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-black uppercase tracking-wider text-purple-200">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Parts, Components & Raw Materials</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight text-white leading-[1.12]">
                The details behind <br />
                <span className="bg-gradient-to-r from-purple-200 via-rose-200 to-amber-200 bg-clip-text text-transparent">
                  every lift start here.
                </span>
              </h1>

              <p className="text-purple-100/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal">
                A steady pipeline for elevator engineering companies, installation teams, fabrication workshops and civil partners seeking certified parts and raw materials. Manufactured, stocked, and tested in our Karimnagar Hub—powering our own turnkey installations and supplying contractors across South India.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDocForDownload("Complete B2B Catalogue 2026");
                    setDownloadModalOpen(true);
                  }}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg shadow-purple-950/30 transition-all active:scale-95 cursor-pointer"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request B2B Catalogue →</span>
                </button>

                <button
                  type="button"
                  onClick={scrollToEnquiry}
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-extrabold text-xs uppercase tracking-wider rounded-full border border-white/25 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Discuss Bulk Requirement →</span>
                </button>
              </div>

              {/* Verification Subtext */}
              <p className="text-[11px] sm:text-xs text-purple-200/70 pt-1 font-medium flex items-center gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Component specifications & raw-material grades verified by in-house engineering and test certifications before dispatch.</span>
              </p>
            </div>

            {/* Right Column: High-Tech Architectural Blueprint Wireframe Visual */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden group">
                {/* Tech Blueprint Grid & Crosshair Visual */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-purple-400/20 bg-gradient-to-br from-[#120b24] to-[#1c1236] p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-purple-300/80">
                    <span>CAD HOISTWAY BLUEPRINT</span>
                    <span className="text-emerald-400">IS 14665 SPEC</span>
                  </div>

                  {/* Geometric Elevator Hoistway Wireframe Graphic */}
                  <div className="relative w-full h-40 flex items-center justify-center">
                    <div className="w-28 h-36 border-2 border-purple-400/40 rounded-xl relative flex items-center justify-center">
                      <div className="w-20 h-28 border border-purple-300/60 rounded-lg flex flex-col items-center justify-center space-y-1">
                        <div className="w-12 h-1 bg-[#863078]/70 rounded-full animate-pulse" />
                        <div className="text-[9px] font-mono text-purple-200">CABIN</div>
                        <div className="w-8 h-8 rounded-full border border-purple-300/40 flex items-center justify-center text-xs text-purple-200 font-bold">
                          ⇅
                        </div>
                      </div>
                      {/* Guide Rail Vectors */}
                      <div className="absolute -left-3 top-0 bottom-0 w-1.5 bg-amber-400/50 rounded-full" />
                      <div className="absolute -right-3 top-0 bottom-0 w-1.5 bg-amber-400/50 rounded-full" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[10px] font-mono text-purple-300/80 pt-2 border-t border-white/10">
                    <span>T89/B MACHINED RAILS</span>
                    <span>PMSM DRIVE ±2MM</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 flex items-center justify-between text-xs text-purple-200">
                  <span className="font-bold">Production Hub Karimnagar</span>
                  <span className="text-[11px] font-bold text-emerald-400">Ready Stock Dispatch</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. STATS & COMPLIANCE RIBBON (Image 1 Bottom Header Strip)
          ========================================================================= */}
      <section className="bg-gradient-to-r from-[#863078] via-[#a22b51] to-[#423887] text-white py-4 shadow-md">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs sm:text-sm font-bold divide-y sm:divide-y-0 sm:divide-x divide-white/20">
            <div className="p-2 flex items-center justify-center gap-2">
              <span className="text-base">📦</span>
              <span>4,200+ Parts in Stock</span>
            </div>
            <div className="p-2 flex items-center justify-center gap-2">
              <span className="text-base">🛡️</span>
              <span>Tested for IS 14665 Compliance</span>
            </div>
            <div className="p-2 flex items-center justify-center gap-2">
              <span className="text-base">⚡</span>
              <span>24-48h Minimum Dispatch Lead Time</span>
            </div>
            <div className="p-2 flex items-center justify-center gap-2">
              <span className="text-base">📐</span>
              <span>Full CAD & Wiring Parameter Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. SOURCING PIPELINE & MANUFACTURING OVERVIEW (Section 2 in Image 1)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full">
                Manufacturing & Supply Pipeline
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                The right conversation starts with the right details.
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Elevator companies, contractors, and facility managers require zero mechanical guesswork. Here is exactly what our Karimnagar Hub produces in-house and what we supply through verified tier-1 OEM partnerships.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Big Feature Card: Signature Brand Purple Container */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#2e1236] to-[#1c143d] text-white rounded-3xl p-7 sm:p-10 shadow-xl border border-purple-900/40 flex flex-col justify-between relative overflow-hidden group">
              <div className="ambient-orb w-64 h-64 -top-12 -right-12 bg-[#a22b51]/20 pointer-events-none" />
              
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  Parts & Materials Sourcing Pipeline
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  What can be sourced, supplied or produced?
                </h3>
                
                <p className="text-purple-100/90 text-sm leading-relaxed">
                  All structural steel car slings, counterweight frames, landing door headers, and bespoke SS 304 titanium finishes are manufactured directly inside our Karimnagar facility. We install these in our own turnkey elevators and supply them wholesale to contractors, installation crews, and maintenance teams across Telangana.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                    <div className="font-bold text-white">In-House Manufacturing</div>
                    <div className="text-[11px] text-purple-200 mt-0.5">Car slings, counterweight frames, cabin walls & brackets.</div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-xl border border-white/15">
                    <div className="font-bold text-white">Wholesale Parts Supply</div>
                    <div className="text-[11px] text-purple-200 mt-0.5">Supplied to independent elevator firms & builders.</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-purple-200 relative z-10">
                <span>Verified Karimnagar Engineering Works</span>
                <span className="font-bold text-emerald-400">Zero Middleman Markup</span>
              </div>
            </div>

            {/* Right Side: 2-Card Technical Stacking */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6">
              {/* Card 1: Production Hub */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-2.5 py-1 rounded border border-purple-100">
                      Production Hub
                    </span>
                    <span className="text-xs font-bold text-slate-400">Karimnagar HQ</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">
                    Direct Fabrication & Machining
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Precision CNC bending, fiber laser cutting of hairline SS 304 panels, heavy-duty structural steel sling fabrication, and counterweight filler blocks engineered for high stability.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-[#863078] flex items-center justify-between">
                  <span>Custom Fabrication Available</span>
                  <span>CAD Drawings Included →</span>
                </div>
              </div>

              {/* Card 2: OEM Partnerships */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-300 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#423887] bg-indigo-50 px-2.5 py-1 rounded border border-indigo-100">
                      OEM Strategic Sourcing
                    </span>
                    <span className="text-xs font-bold text-emerald-600">Tier-1 Partnerships</span>
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">
                    Certified Drives & Controllers
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Official authorized integration for Monadrive & Torin PMSM gearless machines, Monarch & Step VVVF microprocessor control panels with built-in ARD rescue systems.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 text-[11px] font-bold text-[#423887] flex items-center justify-between">
                  <span>Factory Warranty Backed</span>
                  <span>Immediate Stock Dispatch →</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CONFIRMED PRODUCT RANGE & COMPONENT CATALOGUE (Section 3 in Image 1)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-100" id="component-catalogue">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full">
                Inventory & Raw Materials Catalogue
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                A place for the confirmed product range.
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Explore our stocked elevator components and raw materials. Every item includes confirmed specifications, minimum order quantities (MOQ), and dispatch turnaround times.
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white shadow-md shadow-[#863078]/25 scale-102"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-2xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Component Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredComponents.map((item, idx) => (
              <ScrollReveal key={item.id} animation="fadeInUp" delay={idx * 0.05}>
                <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs hover:border-purple-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between h-full group">
                  <div>
                    {/* Visual Media Frame */}
                    <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-slate-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#423887] shadow-xs">
                        {item.category}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                        <span className="font-extrabold truncate pr-2">{item.name}</span>
                        <span className="shrink-0 text-[10px] font-bold text-emerald-400 bg-slate-900/80 px-2 py-0.5 rounded">In Stock</span>
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1.5 group-hover:text-[#423887] transition-colors">
                      {item.name}
                    </h3>
                    
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Technical Parameter Chips */}
                    <div className="space-y-1.5 mb-4">
                      {item.specs.slice(0, 3).map((sp, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-slate-50 border border-slate-100">
                          <span className="text-slate-400 font-medium">{sp.label}</span>
                          <span className="font-bold text-slate-800">{sp.value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Minimum Order & Dispatch Lead Times */}
                    <div className="pt-2 pb-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-400 block font-medium">Min. Order (MOQ)</span>
                        <strong className="text-slate-800 font-bold">1 Set / Unit</strong>
                      </div>
                      <div>
                        <span className="text-slate-400 block font-medium">Dispatch Lead Time</span>
                        <strong className="text-emerald-700 font-bold">24 – 48 Hours</strong>
                      </div>
                    </div>
                  </div>

                  {/* Action Cluster */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDocForDownload(`${item.name} Datasheet (PDF)`);
                        setDownloadModalOpen(true);
                      }}
                      className="flex-1 py-2.5 px-3 bg-purple-50 hover:bg-purple-100 text-[#423887] border border-purple-200 rounded-xl text-xs font-bold text-center transition-all cursor-pointer"
                    >
                      Datasheet →
                    </button>
                    <button
                      type="button"
                      onClick={scrollToEnquiry}
                      className="btn-sheen flex-1 py-2.5 px-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white rounded-xl text-xs font-extrabold text-center shadow-xs transition-all cursor-pointer"
                      style={{ color: "#ffffff" }}
                    >
                      <span style={{ color: "#ffffff" }}>Inquire Wholesale</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. DOCUMENTATION BEFORE DECISIONS (Section 4 in Image 1)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full">
                Technical Verification
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Documentation before decisions.
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Before purchasing lift components or raw material lots, review our verified engineering parameters, CAD shaft drawings, and statutory test records.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Architectural Cards Matching Image 1 Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* 01 Product Datasheets */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#863078] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-purple-50 text-[#863078] border border-purple-100 flex items-center justify-center font-black text-xs">
                    01
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">PDF Specs</span>
                </div>
                <h4 className="text-base font-black text-slate-900 mb-2">Product Datasheets</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full mechanical dimensions, torque curves, load ratings, electrical schematics, and pinout wiring diagrams for all drive machines and controller units.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedDocForDownload("Component Engineering Datasheets Packet");
                  setDownloadModalOpen(true);
                }}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-[#863078] text-left hover:underline cursor-pointer"
              >
                Download Datasheet PDF →
              </button>
            </div>

            {/* 02 Hoistway CAD Plans */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#863078] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-indigo-50 text-[#423887] border border-indigo-100 flex items-center justify-center font-black text-xs">
                    02
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">CAD / DWG</span>
                </div>
                <h4 className="text-base font-black text-slate-900 mb-2">Hoistway CAD Plan</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Load calculation charts, beam reaction forces, wall anchor points, pit depth clearances (standard 1200mm vs near-pitless 150mm), and overhead layouts.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedDocForDownload("Hoistway CAD Architectural Drawings");
                  setDownloadModalOpen(true);
                }}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-[#423887] text-left hover:underline cursor-pointer"
              >
                Request DWG / CAD Bundle →
              </button>
            </div>

            {/* 03 Order Parameters */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#863078] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-rose-50 text-[#a22b51] border border-rose-100 flex items-center justify-center font-black text-xs">
                    03
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Commercial</span>
                </div>
                <h4 className="text-base font-black text-slate-900 mb-2">Order Parameters</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Transparent minimum order quantities (MOQ), wholesale tier pricing, palletized wooden crate packaging, and freight schedules across 33 districts.
                </p>
              </div>
              <button
                type="button"
                onClick={scrollToEnquiry}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-[#a22b51] text-left hover:underline cursor-pointer"
              >
                View Wholesale Terms →
              </button>
            </div>

            {/* 04 Quality / Inspection */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-xs hover:border-[#863078] hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center justify-center font-black text-xs">
                    04
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">IS 14665</span>
                </div>
                <h4 className="text-base font-black text-slate-900 mb-2">Quality & Inspection</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Batch test certificates, ultrasonic guide rail flaw checks, brake burnishing data, ARD auto-rescue simulation test logs, and compliance documents.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedDocForDownload("Statutory Inspection & Compliance Certs");
                  setDownloadModalOpen(true);
                }}
                className="mt-5 pt-3 border-t border-slate-200 text-xs font-bold text-emerald-700 text-left hover:underline cursor-pointer"
              >
                View Inspection Certs →
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          6. B2B ENQUIRY FORM ("Let's talk requirements." - Image 1 Bottom Section)
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#1c143d] via-[#241334] to-[#2e1236] text-white relative overflow-hidden" id="b2b-enquiry-form">
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-500/20 pointer-events-none" />
        <div className="ambient-orb w-96 h-96 -bottom-24 -right-24 bg-[#a22b51]/20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Column: Requirements Partnership Narrative & Checkmarks */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5 animate-fade-in-up">
              <span className="text-[10px] font-black uppercase tracking-wider text-purple-300 bg-white/10 px-3 py-1 rounded-full border border-white/15">
                B2B Commercial & Technical Desk
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Let&apos;s talk requirements.
              </h2>

              <p className="text-purple-100/80 text-sm leading-relaxed">
                Whether you need ready traction machines, pre-wired controller cabinets with ARD, or custom SS 304 laser-cut cabins for your own ongoing projects, our Karimnagar engineering desk is ready to collaborate.
              </p>

              {/* Verified Partnership Perks */}
              <div className="space-y-2.5 pt-2 text-xs text-purple-100/90">
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Direct wholesale tier pricing with zero middleman overhead</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Ready inventory in Karimnagar Central Hub & Hyderabad depot</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Wiring assistance, parameter tuning & on-site technical support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Custom engineering for shallow pits (150mm) and tight shafts</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Express transport coverage across all 33 districts of Telangana</span>
                </div>
              </div>

              {/* Direct Engineering Desk Card */}
              <div className="pt-4 p-4 rounded-2xl bg-white/5 border border-white/15 space-y-1">
                <div className="text-[10px] uppercase font-bold text-purple-300 tracking-wider">
                  Direct Escalation Desk
                </div>
                <div className="text-sm font-black text-white">
                  Chief Engineer: +91 98484 80868 · Dispatch: 9700 123 878
                </div>
                <div className="text-[11px] text-purple-200/70">
                  0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar – 505001
                </div>
              </div>
            </div>

            {/* Right Column: B2B Enquiry Form (Matching Image 1 Form Card) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 xl:p-10 text-slate-900 shadow-2xl border border-slate-100">
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Send a B2B enquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Provide your requirements below and our commercial engineering desk will respond within 2 working hours.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-10 space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold animate-pulse-badge">
                      ✓
                    </div>
                    <div className="inline-block px-3 py-0.5 bg-purple-50 text-[#423887] text-[10px] font-bold uppercase tracking-wider rounded-full border border-purple-100">
                      B2B Ref: {`B2B-${Math.floor(1000 + Math.random() * 9000)}`}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">B2B Enquiry Dispatched!</h4>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{b2bEnquiry.contactPerson || b2bEnquiry.companyName}</strong>. Our senior technical commercial lead will contact <strong>{b2bEnquiry.phone}</strong> with wholesale rates and drawings.
                    </p>

                    <div className="pt-3 flex flex-col sm:flex-row gap-2 justify-center">
                      <a
                        href={`https://wa.me/919700123878?text=Hello%20Vision%20Lifts%2C%20I%20just%20submitted%20a%20B2B%20component%20enquiry%20for%20${encodeURIComponent(b2bEnquiry.companyName)}%20regarding%20${encodeURIComponent(b2bEnquiry.componentCategory)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sheen px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow flex items-center justify-center gap-1.5"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>Chat on WhatsApp Now</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleEnquirySubmit} className="space-y-4">
                    {/* Row 1: Company Name & Contact Person */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Company / Firm Name <span className="text-[#863078]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Deccan Elevators & Works"
                          value={b2bEnquiry.companyName}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, companyName: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Contact Person <span className="text-[#863078]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Ramesh Reddy"
                          value={b2bEnquiry.contactPerson}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, contactPerson: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Phone Number <span className="text-[#863078]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 9700 123 878"
                          value={b2bEnquiry.phone}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, phone: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Business Email <span className="text-[#863078]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="procurement@company.com"
                          value={b2bEnquiry.email}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, email: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Row 3: Business Type & Primary Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Your Business Type
                        </label>
                        <select
                          value={b2bEnquiry.businessType}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, businessType: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        >
                          <option>Elevator Contractor / Installer</option>
                          <option>Elevator Manufacturing Company</option>
                          <option>Civil Builder & Developer</option>
                          <option>Maintenance & AMC Service Provider</option>
                          <option>Architectural / Structural Consultant</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Component of Interest
                        </label>
                        <select
                          value={b2bEnquiry.componentCategory}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, componentCategory: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        >
                          <option>PMSM Gearless Traction Machines</option>
                          <option>VVVF Microprocessor Controllers (with ARD)</option>
                          <option>SS 304 Designer Cabins & Car Slings</option>
                          <option>Automatic Door Operators & Headers</option>
                          <option>Machined T-Guide Rails & Brackets</option>
                          <option>Touch COP & LOP Display Fixtures</option>
                          <option>Complete Raw-Material Elevator Kits</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Quantity & Notes */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Estimated Quantity
                        </label>
                        <select
                          value={b2bEnquiry.quantity}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, quantity: e.target.value })}
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        >
                          <option>1 - 5 Units</option>
                          <option>5 - 15 Units (Contractor Lot)</option>
                          <option>15+ Units (OEM Wholesale)</option>
                          <option>Ongoing Monthly Procurement</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          Project Details & Capacity Needs
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 6-stop 408kg PMSM machine with 1.0 m/s speed..."
                          value={b2bEnquiry.notes}
                          onChange={(e) => setB2bEnquiry({ ...b2bEnquiry, notes: e.target.value })}
                          className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-sheen w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#863078]/25 transition-all cursor-pointer active:scale-98 disabled:opacity-50"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>
                          {isSubmitting ? "Dispatching B2B Enquiry..." : "Send B2B Enquiry →"}
                        </span>
                      </button>
                      <p className="text-center text-[10px] text-slate-400 mt-2 font-medium flex items-center justify-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Verified wholesale enquiry. Direct technical escalation to chief engineer.</span>
                      </p>
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DOWNLOAD B2B CATALOGUE MODAL
          ========================================================================= */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95">
            <button
              type="button"
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 p-2 cursor-pointer"
            >
              ✕
            </button>

            <div className="text-center space-y-2 mb-5">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                Official Engineering Asset
              </span>
              <h3 className="text-lg font-black text-slate-900">
                {selectedDocForDownload}
              </h3>
              <p className="text-xs text-slate-500">
                Enter your contractor / company phone number to access the direct download link and technical drawings.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Thank you! Downloading ${selectedDocForDownload}...`);
                setDownloadModalOpen(false);
              }}
              className="space-y-3.5"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Mobile Number / WhatsApp
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 9700 123 878"
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Firm / Contractor Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Telangana Elevators"
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40"
                />
              </div>

              <button
                type="submit"
                className="btn-sheen w-full py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                <span style={{ color: "#ffffff" }}>Download Technical Asset Now →</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
