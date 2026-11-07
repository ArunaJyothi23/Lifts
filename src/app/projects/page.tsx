"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ProjectsPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Residential", "Commercial", "Hospital", "Industrial"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  const clientList = [
    { name: "Vasavi Group", city: "Hyderabad & Karimnagar", segment: "Gated Communities" },
    { name: "Trends Retail Plazas", city: "Karimnagar Main Road", segment: "Commercial Shopping" },
    { name: "Vamsiram Builders", city: "Commercial Projects", segment: "Office Towers" },
    { name: "My Home Group", city: "South India", segment: "Luxury Residences" },
    { name: "UrbanX Spaces", city: "Hyderabad & Warangal", segment: "Modern Workspaces" },
    { name: "Croma Electronics", city: "Telangana Outlets", segment: "Commercial Showrooms" },
    { name: "Rajapushpa Properties", city: "Telangana Corridor", segment: "High-Rise Residential" },
    { name: "Zudio Stores", city: "Karimnagar & Jagtial", segment: "Retail Movement" },
    { name: "RV Nirmaan", city: "Warangal & Karimnagar", segment: "Institutional Infrastructure" },
    { name: "Prathima Healthcare", city: "Karimnagar Healthcare Zone", segment: "Bed & Stretcher Lifts" },
    { name: "Apex Commercial", city: "Gandhi Road", segment: "Corporate Hubs" },
    { name: "Telangana Industrial Logistics", city: "Karimnagar IDA", segment: "Heavy Cargo" },
  ];

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
            
            {/* Left Column: Projects Story & Executed Landmarks */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">Projects Gallery</span>
              </div>

              {/* Verified Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#863078] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Over <AnimatedCounter value="500+" /> Landmark Sites Across Telangana</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Completed installation{" "}
                <span className="text-shimmer-brand font-black">sites gallery.</span>
              </h1>

              {/* Dynamic Typewriter text loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Executed Across:</span>
                <TypewriterText
                  words={[
                    "Karimnagar Central Commercial Towers & Duplexes",
                    "Greater Hyderabad Luxury Penthouse Villa Lifts",
                    "Warangal Multi-Speciality Hospital Bed Lifts",
                    "Nizamabad & Jagtial Retail Showroom MRL Elevators",
                    "Heavy-Duty Industrial Freight & Cargo Facilities",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Executive Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Explore our landmark installations across Karimnagar, Hyderabad, Warangal, and throughout Telangana—spanning luxury villas, corporate towers, hospitals, and heavy industrial facilities.
              </p>

              {/* Action Buttons Cluster (Guaranteed High-Contrast White Text) */}
              <div className="pt-1.5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Survey My Site →</span>
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
                  <span>100% On-Time Handover</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Zero Subcontracting Policy</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>IS 14665 Deflection Certified</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Landmark Project Showcase Card */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative bg-white/95 rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden card-glow group backdrop-blur-sm">
                
                {/* Elevated Image Frame */}
                <div className="relative h-64 sm:h-72 xl:h-80 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/commercial.png"
                    alt="Vision Lifts Landmark Sites Portfolio"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#423887] border border-purple-100 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>500+ Landmark Sites Commissioned</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 border border-slate-700 shadow-xs">
                    Statewide Portfolio
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Commercial · Residential · Healthcare
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 flex items-center justify-between">
                      <span>Landmark Towers & Private Villas</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded">33 Districts</span>
                    </div>
                  </div>
                </div>

                {/* 4-Stat Architectural Spec Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  {[
                    { value: "500+", label: "Commissioned" },
                    { value: "15+", label: "Years Mastery" },
                    { value: "33", label: "Districts Active" },
                    { value: "99.4%", label: "Uptime Record" },
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
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`btn-sheen px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    filter === cat
                      ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat === "All" ? "All Projects" : `${cat} Lifts`}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSurveyOpen(true)}
              className="btn-sheen px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              Survey My Site
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid with ScrollReveal & Card Glow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} animation="fadeInUp" delay={idx * 0.08}>
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs card-glow transition-all flex flex-col group h-full"
                >
                  <div className="relative h-60 bg-slate-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      {project.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                      {project.completedYear}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-[#423887] font-semibold mb-1 flex items-center gap-1">
                        <span>📍</span>
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#423887] transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600 mb-4">
                        <span className="bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                          🏢 {project.floors}
                        </span>
                        <span className="bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                          👥 {project.capacity}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-slate-700 mb-2">
                        Series: {project.type}
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSurveyOpen(true)}
                      className="btn-sheen w-full py-2.5 text-center bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-[#423887] border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Request Similar Installation
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Esteemed Partnerships
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Prominent Clients & Commercial Portfolios
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                We take pride in powering smooth daily vertical passenger movement for leading builders, hospitals, and retail brands across South India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clientList.map((client, i) => (
              <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.05}>
                <div
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between card-glow h-full"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#863078] mb-1">
                      {client.segment}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{client.name}</h4>
                  </div>
                  <div className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100 flex items-center gap-1">
                    <span>📍</span>
                    <span>{client.city}</span>
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
