"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SOLUTIONS_DATA, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function SolutionsPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredSolutions =
    activeTab === "all"
      ? SOLUTIONS_DATA
      : SOLUTIONS_DATA.filter((s) => s.category.toLowerCase() === activeTab.toLowerCase());

  const comparisonData = [
    {
      category: "Residential Villa Lifts",
      series: "VL-Home Luxe",
      pit: "150 mm (Pitless)",
      overhead: "2800 mm",
      speed: "0.5 - 0.7 m/s",
      capacity: "250 - 450 kg (3-6 Pax)",
      power: "Single Phase 220V / 3-Ph",
      bestFor: "Duplex Villas, Bungalows, Penthouse",
    },
    {
      category: "Commercial Office Lifts",
      series: "VL-Commercial MRL",
      pit: "1200 - 1400 mm",
      overhead: "3800 mm",
      speed: "1.0 - 1.75 m/s",
      capacity: "544 - 1360 kg (8-20 Pax)",
      power: "3 Phase 415V, 50Hz",
      bestFor: "Corporate Offices, Malls, Showrooms",
    },
    {
      category: "Hospital Bed Lifts",
      series: "VL-Medicare Stretcher",
      pit: "1400 mm",
      overhead: "4200 mm",
      speed: "0.75 - 1.0 m/s",
      capacity: "1020 - 1768 kg (Bed + Attendants)",
      power: "3 Phase 415V, 50Hz",
      bestFor: "Hospitals, Nursing Homes, Clinics",
    },
    {
      category: "Industrial Freight Lifts",
      series: "VL-Heavy Cargo",
      pit: "1500 mm",
      overhead: "4400 mm",
      speed: "0.35 - 0.5 m/s",
      capacity: "1000 - 5000 kg Heavy Load",
      power: "3 Phase 415V, Heavy Duty",
      bestFor: "Factories, Warehouses, Auto Centers",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden max-w-full w-full">
      {/* =========================================================================
          1. HERO SECTION: BALANCED 2-COLUMN ARCHITECTURAL SHOWCASE
          ========================================================================= */}
      <section className="bg-white border-b border-slate-100 pt-6 pb-12 sm:pt-8 sm:pb-16 relative overflow-hidden animate-fade-in-up">
        {/* Subtle Ambient Glowing Background Orbs */}
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-100/50 animate-pulse-slow" />
        <div className="ambient-orb w-96 h-96 top-1/3 -right-20 bg-rose-100/40 animate-pulse-slow" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Solution Story & Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">Solutions</span>
              </div>

              {/* Verified Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#863078] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Custom Engineered Elevator Systems</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Elevator solutions for{" "}
                <span className="text-shimmer-brand font-black">every building.</span>
              </h1>

              {/* Dynamic Typewriter text loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Engineered Specifications:</span>
                <TypewriterText
                  words={[
                    "Single-Phase 220V Pitless Villa Lifts (150mm Pit)",
                    "High-Speed Gearless Commercial MRL (Up to 2.5 m/s)",
                    "Smooth-Leveling ICU Hospital Bed & Stretcher Lifts",
                    "Heavy Duty 5,000kg Industrial Freight Hoists",
                    "Curved 360° Architectural Panoramic Glass Capsules",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Executive Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                From whisper-quiet pitless villa elevators running on single-phase household power to high-capacity hospital bed lifts and heavy industrial freight systems across all 33 districts of Telangana.
              </p>

              {/* Action Buttons Cluster (Guaranteed High-Contrast White Text) */}
              <div className="pt-1.5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request Hoistway Blueprint →</span>
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
                  <span>150mm Pitless Options</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Single-Phase 220V Compatible</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>IS 14665 & NBC 2016 Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Elevator System Showcase Card */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative bg-white/95 rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden card-glow group backdrop-blur-sm">
                
                {/* Elevated Image Frame */}
                <div className="relative h-64 sm:h-72 xl:h-80 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/residential.png"
                    alt="Vision Lifts Precision Elevator Systems"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#423887] border border-purple-100 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>100% In-House Mechanical Rigging</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 border border-slate-700 shadow-xs">
                    MRL (Machine-Room-Less)
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Civil & Structural Flexibility
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 flex items-center justify-between">
                      <span>Precision Hoistway Engineering</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded">All 33 Districts</span>
                    </div>
                  </div>
                </div>

                {/* 4-Stat Architectural Spec Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  {[
                    { value: "150mm", label: "Min. Pit Depth" },
                    { value: "±2mm", label: "Floor Leveling" },
                    { value: "<48dB", label: "Quiet Operation" },
                    { value: "40%", label: "Power Savings" },
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

      {/* Filter Tabs (Rounded-Full) */}
      <section className="py-6 bg-slate-50 border-b border-slate-100 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-slate-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {["all", "Residential", "Commercial", "Hospital", "Industrial"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`btn-sheen px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab.toLowerCase() === tab.toLowerCase()
                      ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {tab === "all" ? "All Solutions" : tab}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSurveyOpen(true)}
              className="btn-sheen px-5 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-slate-800 transition-all cursor-pointer"
            >
              Request Hoistway Blueprint
            </button>
          </div>
        </div>
      </section>

      {/* Solutions Detailed List with Staggered ScrollReveal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredSolutions.map((solution, idx) => (
            <ScrollReveal key={solution.id} animation="fadeInUp" delay={idx * 0.08}>
              <div
                id={solution.id}
                className="scroll-mt-32 p-6 sm:p-10 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xs card-glow transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="inline-block px-3 py-1 bg-purple-100 text-[#423887] rounded-full text-xs font-bold uppercase tracking-wider">
                      {solution.category} Elevator Solution
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {solution.title}
                    </h2>
                    <p className="text-[#423887] font-semibold text-xs sm:text-sm">
                      {solution.subtitle}
                    </p>
                    <p className="text-slate-600 leading-relaxed text-sm">
                      {solution.description}
                    </p>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Key Engineering Inclusions:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {solution.highlights.map((hl, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600">
                      {solution.specs.map((sp, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                          {sp}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => setSurveyOpen(true)}
                        className="btn-sheen px-6 py-2.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all cursor-pointer"
                      >
                        Book Site Survey for {solution.category}
                      </button>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20am%20interested%20in%20a%20quotation%20for%20${encodeURIComponent(solution.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sheen px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all flex items-center gap-1.5"
                      >
                        <span>WhatsApp Direct</span>
                      </a>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow border border-slate-200 bg-slate-900 group">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover group-hover:scale-104 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Comparative Specification Matrix */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Civil & Technical Comparison
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Compare Elevator Series Requirements
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                Evaluate pit depth, overhead height, and power configurations before finalising your architectural plan.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeInUp" delay={0.1}>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-xs card-glow">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 border-b border-slate-200">
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Solution / Series</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Min. Pit Depth</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Overhead</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Rated Speed</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Carrying Capacity</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Electrical Supply</th>
                    <th className="p-4 text-xs font-bold uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-purple-50/40 transition-colors">
                      <td className="p-4 font-bold text-slate-900">
                        <div>{row.category}</div>
                        <div className="text-[11px] text-[#423887] font-semibold">{row.series}</div>
                      </td>
                      <td className="p-4 text-slate-700 font-medium">{row.pit}</td>
                      <td className="p-4 text-slate-700">{row.overhead}</td>
                      <td className="p-4 text-slate-700">{row.speed}</td>
                      <td className="p-4 text-slate-700">{row.capacity}</td>
                      <td className="p-4 text-slate-700 font-medium">{row.power}</td>
                      <td className="p-4">
                        <button
                          type="button"
                          onClick={() => setSurveyOpen(true)}
                          className="btn-sheen px-3.5 py-1.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-full text-[11px] uppercase tracking-wider hover:opacity-95 transition-all cursor-pointer"
                        >
                          Survey
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
