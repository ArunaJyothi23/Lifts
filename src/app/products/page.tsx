"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_CATALOG, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ProductsPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>(PRODUCTS_CATALOG[0].id);

  const cabinFinishes = [
    { title: "Rose Gold Mirror Titanium", desc: "Luxury PVD coated reflective finish for high-end villas & boutique hotels.", image: "/images/cabin-study.png" },
    { title: "Hairline SS 304", desc: "Classic satin brushed stainless steel with anti-scratch coating for offices & apartments.", image: "/images/commercial.png" },
    { title: "Panoramic Safety Glass", desc: "10mm + 10mm laminated safety glass offering 180° scenic view for atriums.", image: "/images/hero-lobby.png" },
    { title: "Etched Gold Patterned SS", desc: "Artistic laser-etched floral and geometric panels for grand residential lobbies.", image: "/images/residential.png" },
  ];

  const currentProd = PRODUCTS_CATALOG.find((p) => p.id === selectedProduct) || PRODUCTS_CATALOG[0];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION: BALANCED 2-COLUMN ARCHITECTURAL SHOWCASE
          ========================================================================= */}
      <section className="bg-white border-b border-slate-100 pt-6 pb-12 sm:pt-8 sm:pb-16 relative overflow-hidden animate-fade-in-up">
        {/* Subtle Ambient Glowing Background Orbs */}
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-100/50 animate-pulse-slow" />
        <div className="ambient-orb w-96 h-96 top-1/3 -right-20 bg-rose-100/40 animate-pulse-slow" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Product Story & Specifications */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">Products & Catalog</span>
              </div>

              {/* Verified Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#863078] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Complete Elevator Catalog & Technical Specs</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Engineered elevators &{" "}
                <span className="text-shimmer-brand font-black">premium cabins.</span>
              </h1>

              {/* Dynamic Typewriter text loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Product Highlights:</span>
                <TypewriterText
                  words={[
                    "VL-Home Luxe: Single-Phase 220V Pitless Villa Lift",
                    "VL-Commercial: High-Speed PMSM Gearless MRL",
                    "VL-Medicare: Dual-Entrance ICU Stretcher Bed Lift",
                    "VL-Capsule: 180° & 360° Panoramic Architectural Glass",
                    "Custom Titanium Rose Gold & Hairline SS 304 Cabins",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Executive Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Explore our full portfolio of residential, commercial, hospital, freight, and panoramic capsule elevators with verified engineering specifications, civil shaft dimensions, and designer cabin finishes.
              </p>

              {/* Action Buttons Cluster (Guaranteed High-Contrast White Text) */}
              <div className="pt-1.5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Book Free Hoistway Survey →</span>
                </button>

                <a
                  href="tel:9700123878"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center gap-2 shadow-sm active:scale-95 border border-slate-800"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-emerald-400 text-sm">📞</span>
                  <span style={{ color: "#ffffff" }}>Call 9700 123 878 Direct</span>
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>PMSM Gearless Motors</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Integrated ARD Safety Battery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Titanium PVD Finishes</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Luxury Cabin Showcase Card */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative bg-white/95 rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden card-glow group backdrop-blur-sm">
                
                {/* Elevated Image Frame */}
                <div className="relative h-64 sm:h-72 xl:h-80 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/cabin-study.png"
                    alt="Vision Lifts Designer Cabin Interiors"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#423887] border border-purple-100 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Rose Gold Mirror Titanium</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 border border-slate-700 shadow-xs">
                    36-Beam Light Curtain
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Architectural Aesthetics
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 flex items-center justify-between">
                      <span>Bespoke Car Interior Studio</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded">All 33 Districts</span>
                    </div>
                  </div>
                </div>

                {/* 4-Stat Architectural Spec Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  {[
                    { value: "PMSM", label: "Gearless Drive" },
                    { value: "1.75m/s", label: "Max Speed" },
                    { value: "5000kg", label: "Max Payload" },
                    { value: "360°", label: "Panoramic Glass" },
                  ].map((s, idx) => (
                    <div key={idx} className="bg-slate-50/90 p-2.5 rounded-xl border border-slate-200/80 text-center hover:bg-purple-50/50 transition-colors">
                      <div className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]">
                        <AnimatedCounter value={s.value} />
                      </div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-slate-600 mt-0.5 leading-tight">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Catalog Navigation & Detail Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar Product Selection */}
            <div className="lg:col-span-4 space-y-2.5">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Select Elevator Model:
              </h2>
              {PRODUCTS_CATALOG.map((prod) => (
                <button
                  key={prod.id}
                  onClick={() => setSelectedProduct(prod.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col justify-between cursor-pointer card-glow ${
                    selectedProduct === prod.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-md ring-1 ring-[#863078]/40"
                      : "bg-slate-50/70 hover:bg-slate-100 text-slate-800 border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#863078]">
                      {prod.category}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${selectedProduct === prod.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>
                      {prod.machineRoom}
                    </span>
                  </div>
                  <div className="text-sm font-bold">{prod.name}</div>
                  <div className={`text-xs mt-0.5 ${selectedProduct === prod.id ? "text-slate-300" : "text-slate-500"}`}>
                    Cap: {prod.capacity} · {prod.speed}
                  </div>
                </button>
              ))}

              <div className="pt-4 p-5 rounded-2xl bg-purple-50 border border-purple-100 text-slate-800 card-glow">
                <div className="text-xs font-bold uppercase tracking-wider text-[#423887] mb-1">
                  Need Custom Dimensions?
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Have non-standard shaft sizes or heritage stairwell openings? We design bespoke car frames in Karimnagar.
                </p>
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen w-full py-2.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
                >
                  Request Custom Sizing
                </button>
              </div>
            </div>

            {/* Main Product Display Card */}
            <div className="lg:col-span-8">
              <ScrollReveal animation="fadeInUp">
                <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm card-glow">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-[#423887] rounded-full text-xs font-bold uppercase tracking-wider">
                      {currentProd.category} Series
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">
                      Configuration: {currentProd.machineRoom}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                    {currentProd.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#423887] font-semibold mb-6">
                    {currentProd.tagline}
                  </p>

                  {/* Product Image */}
                  <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden shadow border border-slate-200 mb-6 bg-slate-900 group">
                    <Image
                      src={currentProd.image}
                      alt={currentProd.name}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/95 backdrop-blur-md text-slate-800 text-xs flex justify-between shadow border border-slate-200">
                      <span>Capacity: <strong>{currentProd.capacity}</strong></span>
                      <span>Speed: <strong>{currentProd.speed}</strong></span>
                      <span>Floors: <strong>{currentProd.floors}</strong></span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {currentProd.description}
                  </p>

                  {/* Features Pill Strip */}
                  <div className="mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Standard Features Included:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentProd.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                          <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                            ✓
                          </span>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Specifications Table */}
                  <div className="mb-8">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Engineering Specifications:
                    </h4>
                    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-2xs">
                      <table className="w-full text-left text-xs divide-y divide-slate-100">
                        <tbody className="divide-y divide-slate-100">
                          {currentProd.specs.map((spec, i) => (
                            <tr key={i} className="hover:bg-purple-50/30 transition-colors">
                              <td className="p-3 font-semibold text-slate-500 w-1/3 bg-slate-50/50">
                                {spec.label}
                              </td>
                              <td className="p-3 font-bold text-slate-900">
                                {spec.value}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-200">
                    <button
                      type="button"
                      onClick={() => setSurveyOpen(true)}
                      className="btn-sheen px-6 py-2.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all cursor-pointer"
                    >
                      Book Site Survey for {currentProd.name}
                    </button>
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20want%20to%20know%20the%20price%20and%20civil%20requirements%20for%20${encodeURIComponent(currentProd.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sheen px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all"
                    >
                      Get Quotation on WhatsApp
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Design Showcase: Cabins, Ceilings & Finishes */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Custom Aesthetics
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Cabins, Finishes & Architectural Fixtures
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                Match the interior of your elevator to your home or office architecture. Choose from titanium PVD mirrors, brushed hairline stainless steel, and custom LED false ceilings.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cabinFinishes.map((cabin, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs card-glow transition-all flex flex-col h-full group"
                >
                  <div className="relative h-48 bg-slate-900 overflow-hidden">
                    <Image
                      src={cabin.image}
                      alt={cabin.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#423887] transition-colors">
                        {cabin.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {cabin.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-[#423887]">
                      Sample Available at Karimnagar HQ
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
