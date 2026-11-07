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

      {/* 3. EIGHT-POINT REDUNDANT SAFETY SYSTEM */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Redundant Fail-Safes
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                8-Tier Protection Standard on All Models
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                From our compact villa lifts to multi-ton industrial cargo elevators.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_FEATURES_DATA.map((item, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.08}>
                <div
                  className="p-6 rounded-2xl border border-slate-200 hover:border-slate-300 card-glow transition-all flex flex-col justify-between bg-white h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-full bg-purple-50 text-[#423887] flex items-center justify-center font-bold text-xs border border-purple-100">
                        {idx + 1}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#423887] mb-1">
                      {item.tag}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. STATUTORY COMPLIANCE & BIS CERTIFICATIONS */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal animation="fadeInUp">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                  Regulatory Standards
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-2">
                  Tested & Approved for Commercial Handover
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">
                  We handle the entire documentation and inspection workflow required by the Department of Electrical Inspectorate and local municipal authorities in Telangana.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => setSurveyOpen(true)}
                    className="btn-sheen px-7 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all cursor-pointer"
                  >
                    Schedule Statutory Inspection
                  </button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {complianceStandards.map((std, i) => (
                <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.1}>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs card-glow h-full">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#423887] mb-1">
                      {std.category}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{std.code}</h4>
                    <div className="text-xs font-semibold text-slate-700 mt-0.5 mb-2">{std.title}</div>
                    <p className="text-xs text-slate-500 leading-relaxed">{std.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
