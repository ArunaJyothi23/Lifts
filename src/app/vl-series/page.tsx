"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import { COMPANY_INFO } from "@/data/siteData";
import ScrollReveal from "@/components/ScrollReveal";

export default function VLSeriesPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    setBrochureDownloaded(true);
    const link = document.createElement("a");
    link.href = "/images/commercial.png";
    link.download = "Vision-Lifts-VL-Series-Commercial-SpecSheet.png";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setBrochureDownloaded(false), 3000);
  };

  const keyHighlights = [
    {
      title: "Machine-Room-Less (MRL) Design",
      desc: "Eliminates the rooftop penthouse machine room, freeing 100% of terrace space for amenities, penthouses, or solar installations.",
    },
    {
      title: "High-Speed Gearless PMSM Drive",
      desc: "Delivers rapid vertical transit up to 2.5 m/s with permanent magnet synchronous motors, ensuring 40% energy reduction over geared traction.",
    },
    {
      title: "Intelligent Group Supervisory Dispatch",
      desc: "Smart traffic dispatching algorithms cut elevator waiting times by up to 35% during peak morning and evening commercial surges.",
    },
    {
      title: "Engineered for 24/7 Heavy Traffic",
      desc: "Aerospace-grade solid T-section guide rails, reinforced polyurethane roller guides, and heavy-duty steel structure withstand continuous commercial use.",
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "High speed & dynamic leveling",
      desc: "Smooth S-curve acceleration curves provide rapid vertical travel across 5 to 30 floors without passenger discomfort or inner-ear pressure.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Touchless & access control",
      desc: "Seamless integration with RFID smart cards, face recognition turnstiles, biometric scanners, and smartphone QR-code destination selection.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#423887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Regenerative power savings",
      desc: "High-efficiency regenerative VVVF drives capture kinetic braking energy during downward journeys, feeding clean power back to the building grid.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Heavy-duty 24/7 reliability",
      desc: "Built to stringent IS 14665 and NBC 2016 commercial building mandates with 2-hour fire-rated landing doors and dual mechanical brakes.",
    },
  ];

  const techSpecs = [
    { label: "Drive Type", value: "Permanent Magnet Synchronous Motor (PMSM) Gearless Monadrive" },
    { label: "Rated Capacity", value: "544 kg to 1,600 kg (8 to 24 Passengers)" },
    { label: "Rated Speed", value: "1.0 m/s to 2.5 m/s (VVVF closed-loop vector control)" },
    { label: "Pit Depth", value: "1,200 mm to 1,500 mm (Standard commercial pit)" },
    { label: "Overhead Clearance", value: "4,000 mm to 4,200 mm (No rooftop machine room needed)" },
    { label: "Maximum Travel / Stops", value: "Up to 30 Floors (100+ Metres Travel)" },
    { label: "Power Supply", value: "415V 3-Phase 50Hz with auto voltage stabilizer" },
    { label: "Door Configuration", value: "Center Opening 2-Panel SS 304 Hairline / Full Glass" },
    { label: "Door Protection", value: "128-Beam Infrared Multi-Light Curtain with 3D Detection" },
    { label: "Group Control", value: "Simplex, Duplex, Triplex & Quadplex Smart Dispatch" },
    { label: "Controller & Inverter", value: "32-Bit Microprocessor Dual CPU with Regenerative Drive" },
    { label: "Emergency Rescue (ARD)", value: "Heavy-Duty Microprocessor ARD with Auto Safe Floor Discharge" },
    { label: "Safety Compliance", value: "IS 14665, EN 81-20/50 & NBC 2016 Commercial Mandates" },
  ];

  const applications = [
    {
      title: "CORPORATE TOWERS",
      subtitle: "High-density multi-tenant office complexes",
    },
    {
      title: "IT PARKS",
      subtitle: "Peak shift management & turnstile integration",
    },
    {
      title: "SHOPPING MALLS",
      subtitle: "High passenger throughput & wide clear doors",
    },
    {
      title: "HOTELS & RESORTS",
      subtitle: "Whisper-quiet guest transit & service cars",
    },
  ];

  const personalisations = [
    {
      title: "Cabin Finishes",
      desc: "Hairline satin SS 304, scratch-resistant textured panels, mirror accents, and frameless laminated glass walls.",
    },
    {
      title: "Smart Access Control",
      desc: "Turnstile integration, RFID keycards, biometric facial recognition scanners, and QR-code destination dispatching.",
    },
    {
      title: "Lighting & Displays",
      desc: "7-inch TFT color multimedia screens, dynamic scrolling directional indicators, and eco-friendly sleep mode lighting.",
    },
  ];

  const safetyFeatures = [
    {
      title: "128-Beam 3D Light Curtain",
      desc: "Detects approaching passengers and moving carts from 20cm away, preventing accidental door strike incidents.",
    },
    {
      title: "Automatic Rescue Device",
      desc: "High-capacity emergency battery automatically moves the car to the nearest floor and opens doors during grid outages.",
    },
    {
      title: "Emergency Intercom System",
      desc: "Two-way hands-free communication link connected directly to building security and facility management 24/7.",
    },
    {
      title: "Overload Sensor & Buzzer",
      desc: "Electronic load-cell sensors prevent elevator start when capacity is exceeded, sounding an audible alert.",
    },
    {
      title: "Overspeed Governor Safety",
      desc: "Instantaneous mechanical clamping system locks onto guide rails if car descending speed exceeds safe thresholds.",
    },
    {
      title: "2-Hour Fire-Rated Doors",
      desc: "Certified landing door assemblies provide 120-minute flame and toxic smoke barrier compliant with NBC 2016.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* =========================================================================
          1. HERO SECTION: SNEHA-STYLE EXACT ARCHITECTURE
          ========================================================================= */}
      <section className="bg-white border-b border-slate-100 pt-6 pb-12 sm:pt-8 sm:pb-16 relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-100/50 animate-pulse-slow pointer-events-none" />
        <div className="ambient-orb w-96 h-96 top-1/3 -right-20 bg-rose-100/40 animate-pulse-slow pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Hero Story, Badges, Pills & CTAs */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <Link href="/products" className="hover:text-slate-900 transition-colors">Products</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">VL Series</span>
              </div>

              {/* Sneha-style Series Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#423887] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#423887] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#423887]"></span>
                </span>
                Product Series · For Commercial & Corporate Towers
              </div>

              {/* Massive Display Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-none">
                <span className="bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] bg-clip-text text-transparent">VL</span>{" "}
                <span className="text-slate-900">Series</span>
              </h1>

              {/* 3 Sneha-style Feature Pills - Zero Harsh Black */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded-full bg-[#423887] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Gearless PMSM
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#863078] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  MRL (No Machine Room)
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  High-Speed 2.5 m/s
                </span>
              </div>

              {/* Intro Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl pt-1">
                High-performance vertical transit engineered for IT parks, commercial office complexes, retail 
                malls, and corporate headquarters across Telangana. Powered by permanent magnet synchronous 
                gearless machines delivering up to 40% energy reduction and intelligent group dispatch.
              </p>

              {/* 5 Sneha-style Checkmark Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1 pb-1">
                {[
                  "Speeds up to 2.5 m/s",
                  "40% energy regeneration",
                  "Group supervisory dispatch",
                  "128-beam infrared curtain",
                  "Heavy traffic 24/7 rated",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 text-[#423887] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-98 flex items-center justify-center gap-2"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Book Commercial Site Survey →</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadBrochure}
                  className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <svg className="w-4 h-4 text-[#423887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>{brochureDownloaded ? "Downloading..." : "Download Brochure ↓"}</span>
                </button>
              </div>

              {/* Direct Engineer Line Callout */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Commercial Projects Hotline:
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-slate-900 hover:text-[#423887] transition-colors underline underline-offset-2"
                >
                  +91 {COMPANY_INFO.phone}
                </a>
                <span>·</span>
                <span>Karimnagar & Hyderabad Projects</span>
              </div>
            </div>

            {/* Right Column: Architectural Elevator Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-purple-200/80 bg-slate-900 group card-glow">
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src="/images/commercial.png"
                    alt="Vision Lifts VL Series Commercial MRL Elevator"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c143d] via-[#1c143d]/30 to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#423887] text-[11px] font-black tracking-wide uppercase border border-purple-100 shadow-xs">
                    VL-MRL 1600 Commercial
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-[11px] font-bold tracking-wide flex items-center gap-1 shadow-xs" style={{ color: "#ffffff" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    2.5 m/s High Speed
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-[#1c143d] via-[#1c143d]/85 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-purple-200 font-bold mb-1">
                    Corporate & Commercial Engineering
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Heavy Duty MRL Vertical Transit Systems
                  </h3>
                  <p className="text-xs text-purple-100/90 mt-1 line-clamp-2">
                    No rooftop machine room required. Gearless Monadrive machine delivering 40% energy reduction and intelligent dispatch.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. KEY HIGHLIGHTS SECTION (Image 2 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#423887]" />
                Key Highlights
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Built for commercial density, speed, and continuous duty
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {keyHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-4 card-glow"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-50 text-[#423887] flex items-center justify-center shrink-0 mt-0.5 font-black text-sm border border-purple-100">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                      {hl.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {hl.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          3. 4-CARD FEATURE GRID (Image 3 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#863078] uppercase tracking-wider mb-3">
                Performance Advantages
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Why Corporate Developers Choose VL Series
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Designed to optimize passenger throughput while minimizing operational lifecycle electricity costs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-purple-200 hover:-translate-y-1 transition-all flex flex-col justify-between card-glow"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-purple-50/80 border border-purple-100 flex items-center justify-center mb-5">
                      {feat.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          4. TECHNICAL SPECIFICATIONS TABLE (Image 4 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider">
                  ● Technical Specifications
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Engineered for commercial towers & retail plazas
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The VL Series offers customizable shaft layouts for single or multi-car banks. 
                  Equipped with regenerative VVVF drives, center-opening automated doors, and fire-rated 
                  stainless steel finishes meeting all NBC 2016 safety norms.
                </p>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    onClick={handleDownloadBrochure}
                    className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-purple-50 text-slate-800 border-2 border-slate-200 hover:border-[#863078] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                  >
                    <svg className="w-4 h-4 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>
                      {brochureDownloaded ? "Downloading Spec Sheet..." : "Download Full Spec Sheet (PDF) ↓"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSurveyOpen(true)}
                    className="btn-sheen w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>Request Project Hoistway Blueprint →</span>
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="text-xs font-bold text-slate-900 mb-1">
                    Architectural & Structural CAD Support
                  </div>
                  <div className="text-xs text-slate-500">
                    Contact our lead elevator structural engineer at{" "}
                    <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#423887] hover:underline">
                      +91 {COMPANY_INFO.phone}
                    </a>{" "}
                    for DWG hoistway drawings, pit loads, and electrical schematics.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-white rounded-2xl border border-purple-200/80 shadow-sm overflow-hidden">
                  <div className="bg-gradient-to-r from-[#2e1236] via-[#1c143d] to-[#251333] px-6 py-4 flex items-center justify-between text-white border-b border-purple-900/40">
                    <div className="font-bold text-sm tracking-wide text-white">
                      VL Series Engineering Matrix
                    </div>
                    <div className="text-xs text-purple-200 font-mono">
                      IS 14665 / EN 81-20
                    </div>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {techSpecs.map((spec, i) => (
                      <div
                        key={i}
                        className={`grid grid-cols-1 sm:grid-cols-12 p-3.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm transition-colors ${
                          i % 2 === 0 ? "bg-white" : "bg-slate-50/50"
                        } hover:bg-purple-50/40`}
                      >
                        <div className="sm:col-span-4 font-bold text-slate-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#423887]" />
                          {spec.label}
                        </div>
                        <div className="sm:col-span-8 text-slate-600 sm:text-right font-medium mt-1 sm:mt-0">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          5. APPLICATIONS SECTION (Screenshot 1 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#423887]" />
                Applications
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Fits seamlessly into these spaces
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all text-center flex flex-col justify-center min-h-[140px] card-glow"
                >
                  <h3 className="text-base sm:text-lg font-black tracking-wider text-[#423887] uppercase mb-2">
                    {app.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal">
                    {app.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          6. PERSONALISATION CHOICES (Screenshots 1 & 2 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#423887]" />
                Personalisation Choices
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Tailored to match your architecture
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3">
                With the VL Series machine-room-less elevator, you don&apos;t just choose an elevator, you shape it. 
                Select from commercial hairline stainless steel, panoramic viewing glass, smart access integrations, 
                and multimedia COP panels that integrate seamlessly into corporate building control systems.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalisations.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between card-glow"
                >
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          7. SAFETY FEATURES GRID (Screenshots 3 & 4 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#423887]" />
                Safety Features
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Safety at every level
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {safetyFeatures.map((sf, i) => (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-purple-300 transition-all flex flex-col justify-between group card-glow"
                >
                  <div>
                    {/* Accent Notch Bar */}
                    <div className="h-1 w-8 bg-[#423887] rounded-full mb-5 transition-all group-hover:w-12" />
                    
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {sf.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {sf.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          8. BOTTOM HERO CTA BANNER (Rich Brand Velvet Gradient, Zero Harsh Black)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#1c143d] via-[#251333] to-[#2e1236] p-8 sm:p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl border border-purple-400/25 transition-all duration-700">
            <div className="ambient-orb w-80 h-80 -top-16 -left-16 bg-[#423887]/35 pointer-events-none animate-pulse-slow" />
            <div className="ambient-orb w-80 h-80 -bottom-16 -right-16 bg-[#863078]/30 pointer-events-none animate-pulse-slow" />

            <div className="max-w-3xl mx-auto relative z-10 space-y-4 sm:space-y-5">
              <span className="inline-block px-3.5 py-1 bg-white/10 text-purple-200 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                Commercial Traffic Engineering
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Find out if VL Series fits your project
              </h2>
              
              <p className="text-sm sm:text-base text-purple-100/90 font-normal leading-relaxed max-w-2xl mx-auto">
                Our commercial engineering team will compute traffic analysis, recommend ideal car speeds, 
                and confirm shaft load calculations for your architects and structural consultants.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-sm shadow-lg transition-all active:scale-98"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request Commercial Survey →</span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-100 font-extrabold text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
                  style={{ color: "#0f172a", backgroundColor: "#ffffff" }}
                >
                  <svg className="w-4 h-4 shrink-0" style={{ color: "#0f172a" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ color: "#0f172a" }} className="font-extrabold">Call us: +91 {COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Survey Modal */}
      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
