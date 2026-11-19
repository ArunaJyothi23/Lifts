"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SAFETY_FEATURES_DATA, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";

export default function SafetyTechnologyPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedSafetyTier, setSelectedSafetyTier] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<"standards" | "inspection">("standards");

  const ardSteps = [
    {
      step: "01",
      title: "Utility Power Interruption",
      time: "< 50 milliseconds",
      desc: "Grid power failure or severe voltage imbalance is instantly detected by high-speed solid-state phase monitoring relays.",
      state: "Fail-Safe Engaged",
    },
    {
      step: "02",
      title: "Battery Inverter Activation",
      time: "Immediate",
      desc: "Dedicated maintenance-free 48V/96V sealed lead-acid battery bank powers the auxiliary inverter without allowing the car to drop.",
      state: "Auxiliary Power Online",
    },
    {
      step: "03",
      title: "Smart Direction Calculation",
      time: "1.2 seconds",
      desc: "Microprocessor measures motor current demand to dynamically determine whether moving upward or downward requires the least torque.",
      state: "Optimal Path Selected",
    },
    {
      step: "04",
      title: "Flush Levelling & Door Release",
      time: "15 - 25 seconds",
      desc: "The cabin docks with millimeter precision at the nearest landing threshold, releases door mechanical interlocks, and passengers walk out.",
      state: "Safe Evacuation Complete",
    },
  ];

  const complianceStandards = [
    {
      code: "IS 14665 (Part 1 to 5)",
      category: "Bureau of Indian Standards",
      title: "Electric Traction Lifts Safety Code",
      desc: "Governs structural safety factors for counterweights, guide rails, car sling chassis, wire ropes, and mechanical safety gear.",
    },
    {
      code: "IS 15259:2002",
      category: "Installation Standard",
      title: "Shaft & Hoistway Clearances",
      desc: "Regulates pit depth, overhead clearances, ventilation standards, and structural fire enclosure ratings.",
    },
    {
      code: "NBC 2016",
      category: "National Building Code",
      title: "Fire Evacuation & Healthcare Access",
      desc: "Specifies firefighter emergency control override, stretcher bed dimensions, and public disability accessibility.",
    },
    {
      code: "ISO 9001:2015",
      category: "Quality Management",
      title: "Component Traceability & Testing",
      desc: "Ensures every brake assembly, governor, and controller undergoes verified pre-dispatch bench calibration.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* 1. ARCHITECTURAL SPLIT HERO with Ambient Glow */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-14 relative overflow-hidden animate-fade-in-up">
        <div className="ambient-orb w-96 h-96 -top-20 -left-20 bg-purple-200/35 animate-pulse-slow" />
        <div className="ambient-orb w-80 h-80 top-1/2 -right-16 bg-rose-200/25 animate-pulse-slow" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">Safety & Engineering</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#863078] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>IS 14665 & NBC 2016 Compliant Systems</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Safety systems built for{" "}
                <span className="text-shimmer-brand font-black">peace of mind.</span>
              </h1>

              {/* Dynamic Typewriter text loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Protection Standards:</span>
                <TypewriterText
                  words={[
                    "Automatic Rescue Device (ARD) Anti-Trap Battery Backup",
                    "Infrared Full-Height 128-Beam Light Curtains",
                    "Instantaneous Mechanical Bi-Directional Safety Gear",
                    "Firefighter Emergency Recall & Overload Sensors",
                    "Real-Time CAN-Bus Electronic Diagnostics",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Elevator safety is not an optional accessory. At Vision Lifts & Solutions, every system installed across Telangana incorporates multi-layered mechanical fail-safes, real-time electronic diagnostics, and automatic battery rescue systems.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request On-Site Safety Inspection →</span>
                </button>
                <a
                  href="tel:9700123878"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#2e1236] to-[#1c143d] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center gap-2 shadow-sm active:scale-95 border border-purple-800/40"
                  style={{ color: "#ffffff" }}
                >
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ color: "#ffffff" }}>Call 9700 123 878 Direct</span>
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className="pt-3 pb-2 sm:pb-0 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>8-Tier Redundant Fail-Safes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>100% Anti-Trap ARD Standard</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>IS 14665 & NBC 2016 Certified</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card with subtle float */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 bg-slate-900 shadow-xl card-glow group">
                <div className="relative h-80 sm:h-96">
                  <Image
                    src="/images/safety-panel.png"
                    alt="Precision Microprocessor Safety Panel"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 border border-slate-200 shadow-md backdrop-blur-md">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Active Monitoring Active
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold">VVVF Micro-Control</span>
                    </div>
                    <p className="text-xs text-slate-600">
                      Real-time CAN-bus sensor feedback on governor tension, door interlocks, and motor thermal limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARD (AUTOMATIC RESCUE DEVICE) INTERACTIVE WORKFLOW */}
      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-100/70 px-3 py-1 rounded-full">
                Power Loss Protection
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Automatic Rescue Device (ARD) Technology
              </h2>
              <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                Power outages are common in regional grid systems. Vision Lifts integrates dedicated emergency battery systems ensuring passengers are smoothly evacuated within seconds without requiring manual external assistance.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Step Sequential Process */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {ardSteps.map((item, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between card-glow h-full ${
                    activeStep === idx
                      ? "bg-white border-[#863078] shadow-md ring-1 ring-[#863078]/40"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-black px-2.5 py-0.5 rounded-full ${activeStep === idx ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white" : "bg-slate-100 text-slate-700"}`}>
                        STEP {item.step}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {item.time}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      {item.state}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. EIGHT-POINT REDUNDANT SAFETY SYSTEM (Animated with Interactive Technical Blueprints) */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="ambient-orb w-96 h-96 -top-20 right-10 bg-purple-100/40 pointer-events-none animate-pulse-slow" />
        <div className="ambient-orb w-96 h-96 bottom-10 left-10 bg-rose-100/30 pointer-events-none animate-pulse-slow" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-black uppercase tracking-wider text-[#863078] bg-purple-50/90 border border-purple-200/80 px-4 py-1.5 rounded-full shadow-2xs inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#863078] animate-ping" />
                8-Tier Redundant Protection Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mt-3 tracking-tight">
                Engineered fail-safes for{" "}
                <span className="text-shimmer-brand">absolute safety.</span>
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                From our compact villa lifts to multi-ton industrial cargo elevators, every installation features our synchronized 8-tier safety shield tested to exceed BIS guidelines.
              </p>
            </div>
          </ScrollReveal>

          {/* 8-Tier Cards Grid with Slow Animated Entrance & Hover Dynamics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {SAFETY_FEATURES_DATA.map((item, idx) => {
              const isSelected = selectedSafetyTier === idx;
              return (
                <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.07}>
                  <div
                    onClick={() => setSelectedSafetyTier(isSelected ? null : idx)}
                    className={`group relative p-6 rounded-3xl border transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between h-full bg-white/95 backdrop-blur-sm ${
                      isSelected
                        ? "border-[#863078] shadow-2xl shadow-purple-950/15 ring-2 ring-[#863078]/30 -translate-y-2"
                        : "border-slate-200/90 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/8 hover:-translate-y-2"
                    }`}
                  >
                    {/* Top Animated Badge Strip */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="relative">
                          <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#a22b51]/10 via-[#863078]/15 to-[#423887]/15 text-[#423887] flex items-center justify-center font-black text-xs border border-purple-200/80 shadow-2xs group-hover:scale-110 group-hover:bg-[#423887] group-hover:text-white transition-all duration-500">
                            0{idx + 1}
                          </span>
                          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                          </span>
                        </div>

                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-50 border border-slate-200/90 px-2.5 py-1 rounded-full group-hover:border-purple-300 transition-colors">
                          {item.badge}
                        </span>
                      </div>

                      <div className="text-[10px] font-black uppercase tracking-widest text-[#863078] mb-1.5 flex items-center gap-1.5">
                        <span className="w-1 h-3 rounded-full bg-gradient-to-b from-[#a22b51] to-[#863078]"></span>
                        {item.tag}
                      </div>

                      <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-[#423887] transition-colors duration-300 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>

                    {/* Interactive Bottom Status Pill */}
                    <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded-full border border-emerald-200/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Active Fail-Safe
                      </span>

                      <span className="text-[11px] font-bold text-[#863078] group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                        {isSelected ? "Close ↑" : "Inspect ↓"}
                      </span>
                    </div>

                    {/* Expandable Technical Detail Pop-over on Click */}
                    {isSelected && (
                      <div className="mt-3 p-3 rounded-2xl bg-purple-50/80 border border-purple-200 text-slate-700 text-xs animate-fade-in space-y-1.5">
                        <div className="font-extrabold text-[#423887] text-[11px] uppercase tracking-wider flex items-center gap-1">
                          <span>⚙️</span> Technical Verification:
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed">
                          Tested to 125% rated load capacity. Incorporates dual-channel redundant contact switches with instant micro-controller trip telemetry.
                        </p>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STATUTORY COMPLIANCE & BIS CERTIFICATIONS (Animated Effects & Inspectorate Verification) */}
      <section className="py-16 sm:py-20 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
        <div className="ambient-orb w-80 h-80 top-1/2 -left-20 bg-purple-200/30 animate-pulse-slow pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <ScrollReveal animation="fadeInUp">
                <span className="text-xs font-black uppercase tracking-wider text-[#423887] bg-white border border-purple-200/90 px-3.5 py-1.5 rounded-full shadow-2xs inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Statutory & Electrical Inspectorate
                </span>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2 leading-tight">
                  Tested & Approved for Commercial Handover
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                  We handle the complete statutory documentation, speed-load calibrations, and joint testing required by the <strong>Chief Electrical Inspector to Government (CEIG)</strong> across all 33 districts of Telangana.
                </p>

                {/* Animated Interactive Tabs */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab("standards")}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                      activeTab === "standards"
                        ? "bg-[#423887] text-white shadow-sm ring-1 ring-[#423887]/50"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                    style={activeTab === "standards" ? { color: "#ffffff" } : {}}
                  >
                    <span>Regulatory Standards</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("inspection")}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                      activeTab === "inspection"
                        ? "bg-[#423887] text-white shadow-sm ring-1 ring-[#423887]/50"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                    }`}
                    style={activeTab === "inspection" ? { color: "#ffffff" } : {}}
                  >
                    <span>Handover Protocol</span>
                  </button>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSurveyOpen(true)}
                    className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/20 transition-all cursor-pointer active:scale-95"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>Schedule Statutory Inspection →</span>
                  </button>
                  <a
                    href="tel:9700123878"
                    className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-xs uppercase tracking-wider rounded-full border border-slate-200 shadow-2xs transition-all inline-flex items-center gap-2"
                  >
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>9700 123 878 Direct</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Interactive Cards Grid */}
            <div className="lg:col-span-7">
              {activeTab === "standards" ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {complianceStandards.map((std, i) => (
                    <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.1}>
                      <div className="group p-5 sm:p-6 rounded-3xl bg-white/95 backdrop-blur-sm border border-slate-200/90 shadow-xs hover:border-purple-300 hover:shadow-xl hover:shadow-purple-900/6 hover:-translate-y-1.5 transition-all duration-500 ease-out h-full flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-black uppercase tracking-wider text-[#423887] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100">
                              {std.category}
                            </span>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          </div>
                          <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#423887] transition-colors">
                            {std.code}
                          </h4>
                          <div className="text-xs font-bold text-slate-700 mt-1 mb-2">
                            {std.title}
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed font-normal">
                            {std.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-[#863078]">
                          <span>Verified Compliant</span>
                          <span className="group-hover:translate-x-1 transition-transform">✓ Certified</span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              ) : (
                /* Handover Protocol Interactive Checklist */
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4 animate-fade-in">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div>
                      <h4 className="text-base font-black text-slate-900">Telangana CEIG 4-Point Handover Audit</h4>
                      <p className="text-xs text-slate-500">Every elevator receives signed engineer signoff before passenger operation.</p>
                    </div>
                    <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      100% Pass Rate
                    </span>
                  </div>

                  {[
                    { step: "01", name: "125% Static & Dynamic Load Safety Drop Test", detail: "Governor wedge engagement verified under extreme overload condition." },
                    { step: "02", name: "Full-Height Infrared Light Curtain Interlock Audit", detail: "Multi-point door auto-reversal verified down to 5mm object obstruction." },
                    { step: "03", name: "Automatic Rescue Device (ARD) Grid Simulation", detail: "Simulated complete phase loss; emergency evacuation completed in <25 seconds." },
                    { step: "04", name: "Chief Electrical Inspectorate Telangana Filing", detail: "Issuance of formal Form-B lift operating license." },
                  ].map((p, pIdx) => (
                    <div key={pIdx} className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-xl bg-[#423887] text-white flex items-center justify-center font-black text-xs shrink-0">
                        {p.step}
                      </span>
                      <div>
                        <div className="text-xs font-black text-slate-900">{p.name}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">{p.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
