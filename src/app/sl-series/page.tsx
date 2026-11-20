"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import { COMPANY_INFO } from "@/data/siteData";

export default function SLSeriesPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    setBrochureDownloaded(true);
    const link = document.createElement("a");
    link.href = "/images/residential.png";
    link.download = "Vision-Lifts-SL-Series-SpecSheet.png";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setBrochureDownloaded(false), 3000);
  };

  const keyHighlights = [
    {
      title: "No pit needed: works with as little as 150 mm",
      desc: "Operates with as little as 150 mm below floor level, so there's no deep excavation or concrete pit digging in a finished home.",
    },
    {
      title: "No machine room, no headroom",
      desc: "The motor sits inside the shaft itself, at the top or bottom, with nothing extra built above your roof or terrace.",
    },
    {
      title: "Plugs into home power",
      desc: "Runs on single-phase 230V or three-phase 415V supply and uses about 30% less energy than traditional elevator systems.",
    },
    {
      title: "Fits where you need it",
      desc: "Indoors or outdoors on an MS structure, in villas, duplexes, stairwells, and existing buildings.",
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Smooth & quiet ride",
      desc: "Advanced gearless traction and VVVF micro-smoothing deliver whisper-quiet transit under 48 dB with seamless S-curve starts and stops.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Low maintenance, fits existing homes",
      desc: "Engineered to eliminate greasy oil pumps and heavy mechanical wear. Self-lubricating guides ensure years of hassle-free performance.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#423887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cost-effective ownership",
      desc: "Consumes up to ~30% less power than traditional hydraulic elevators, using less power than a standard domestic 1.5-ton split air conditioner.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Safety compliant",
      desc: "Built to strict IS 14665, EN 81-41, and NBC 2016 norms. Includes integrated battery ARD, door infrared light curtains, and overspeed governor.",
    },
  ];

  const techSpecs = [
    { label: "Drive Type", value: "Gearless PMSM Traction / Italian Hydraulic Power Pack" },
    { label: "Rated Capacity", value: "300 kg to 630 kg (3 to 8 Passengers)" },
    { label: "Rated Speed", value: "0.3 m/s to 0.65 m/s (Smooth residential profile)" },
    { label: "Pit Depth", value: "Min. 150 mm (Pitless ramp option available)" },
    { label: "Overhead Clearance", value: "Min. 2,750 mm (No terrace penthouse room required)" },
    { label: "Maximum Travel / Stops", value: "Up to 18 Metres (G + 5 Floors)" },
    { label: "Power Supply", value: "230V Single Phase / 415V 3-Phase Domestic" },
    { label: "Door Configuration", value: "Automatic Telescopic Glass / Center Opening SS 304 / Manual Swing" },
    { label: "Shaft Structure Option", value: "Self-supporting MS Glass Enclosure or Civil Masonry" },
    { label: "Suspension System", value: "Polyurethane Coated Steel Belts / High-Tensile Ropes" },
    { label: "Controller & Inverter", value: "32-Bit Microprocessor VVVF Vector Inverter" },
    { label: "Emergency Rescue (ARD)", value: "Automatic Rescue Device with Battery Backup Included" },
    { label: "Safety Compliance", value: "IS 14665, NBC 2016 & EN 81-41 Certified" },
  ];

  const applications = [
    {
      title: "VILLAS",
      subtitle: "Premium private homes",
    },
    {
      title: "DUPLEXES",
      subtitle: "Two- to four-floor residences",
    },
    {
      title: "EXISTING HOMES",
      subtitle: "Add a lift without building a new shaft",
    },
    {
      title: "CLINICS",
      subtitle: "Small healthcare facilities",
    },
  ];

  const personalisations = [
    {
      title: "Cabin Finishes",
      desc: "Stainless steel or MS (mild steel) panels. Glass cabin walls available for premium installations.",
    },
    {
      title: "Modernisation",
      desc: "Existing manual lifts can be upgraded to fully automatic operation without rebuilding the shaft.",
    },
    {
      title: "Lighting",
      desc: "Functional and aesthetic LED lighting options. Mood-lighting and ceiling-design choices.",
    },
  ];

  const safetyFeatures = [
    {
      title: "Sensor-Based Doors",
      desc: "Prevents door closure when an obstruction is detected, ensuring safe entry and exit.",
    },
    {
      title: "Automatic Rescue Device",
      desc: "Safely moves the elevator to the nearest floor and opens doors during power failure.",
    },
    {
      title: "Emergency Alarm System",
      desc: "Allows passengers to alert for assistance in case of an emergency, with two-way communication.",
    },
    {
      title: "Overload Protection",
      desc: "Prevents operation when load limits are exceeded. Audible warning alerts passengers.",
    },
    {
      title: "Automatic Big Vision Glass Door",
      desc: "Enhances the aesthetics and architectural appeal of the villa while maintaining safety standards.",
    },
    {
      title: "Fire-Rated Landing Doors",
      desc: "Optional 1-hour fire-rated landing doors for buildings requiring fire safety compliance.",
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
              {/* Sneha-style Series Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[11px] sm:text-xs font-bold text-[#a22b51] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a22b51] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a22b51]"></span>
                </span>
                Product Series · For Villas & Independent Homes
              </div>

              {/* Massive Display Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-none">
                <span className="bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] bg-clip-text text-transparent">SL</span>{" "}
                <span className="text-slate-900">Series</span>
              </h1>

              {/* 3 Sneha-style Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded-full bg-[#a22b51] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Pitless
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#863078] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Headroomless
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Home Elevator
                </span>
              </div>

              {/* Intro Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl pt-1">
                Elegance meets comfort for modern living. The SL Series is exclusively developed for villas, 
                duplexes, and existing structures with space constraints. It is a machine-room-less elevator 
                designed to fit into existing buildings without a new lift shaft.
              </p>

              {/* 5 Sneha-style Checkmark Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1 pb-1">
                {[
                  "Runs on single-phase power",
                  "30% lower energy use",
                  "Quiet performance",
                  "Glass door options",
                  "ARD included",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 text-[#a22b51] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <span style={{ color: "#ffffff" }}>Book a Free Site Survey →</span>
                </button>

                <button
                  type="button"
                  onClick={handleDownloadBrochure}
                  className="px-6 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 text-sm font-bold hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <svg className="w-4 h-4 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>{brochureDownloaded ? "Downloading..." : "Download Brochure ↓"}</span>
                </button>
              </div>

              {/* Direct Engineer Line Callout */}
              <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Direct Consultation:
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-slate-900 hover:text-[#423887] transition-colors underline underline-offset-2"
                >
                  +91 {COMPANY_INFO.phone}
                </a>
                <span>·</span>
                <span>Karimnagar & All 33 Telangana Districts</span>
              </div>
            </div>

            {/* Right Column: Architectural Elevator Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src="/images/residential.png"
                    alt="Vision Lifts SL Series Luxury Villa Elevator"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide uppercase border border-white/20">
                    SL-300 / 630 Luxe
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-[11px] font-bold tracking-wide flex items-center gap-1 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Single Phase 230V
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-rose-300 font-bold mb-1">
                    Villa & Duplex Engineering
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Whisper-Quiet Residential Vertical Mobility
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Minimal pit depth of just 150mm. Structural steel glass enclosure fits seamlessly into spiral staircases.
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
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-[#a22b51] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a22b51]" />
              Key Highlights
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Elegance meets comfort for modern living
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {keyHighlights.map((hl, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-200 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-full bg-rose-50 text-[#a22b51] flex items-center justify-center shrink-0 mt-0.5 font-black text-sm border border-rose-100">
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
        </div>
      </section>

      {/* =========================================================================
          3. 4-CARD FEATURE GRID (Image 3 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#863078] uppercase tracking-wider mb-3">
              Core Engineering
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why Homeowners Choose SL Series
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Purpose-built for domestic architecture with aerospace-grade safety and silent performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all flex flex-col justify-between"
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
        </div>
      </section>

      {/* =========================================================================
          4. TECHNICAL SPECIFICATIONS TABLE (Image 4 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-[#a22b51] uppercase tracking-wider">
                ● Technical Specifications
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Engineered for residential and villa applications
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every SL Series elevator is configured to your exact architectural dimensions. 
                Whether you need a compact 3-person elevator for an existing stairwell or a panoramic 
                glass cabin for a luxury penthouse duplex, our Karimnagar engineering team crafts the 
                ideal mechanical configuration.
              </p>

              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleDownloadBrochure}
                  className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-purple-50 text-slate-800 border-2 border-slate-200 hover:border-[#863078] font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer active:scale-98"
                >
                  <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span style={{ color: "#ffffff" }}>
                    {brochureDownloaded ? "Downloading Spec Sheet..." : "Download Full Spec Sheet (PDF) ↓"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request Custom Blueprint & Hoistway Plan →</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-bold text-slate-900 mb-1">
                  Need custom dimensions for your architect?
                </div>
                <div className="text-xs text-slate-500">
                  Call our engineering desk directly at{" "}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#a22b51] hover:underline">
                    +91 {COMPANY_INFO.phone}
                  </a>{" "}
                  for instant shaft drawings and structural loads.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-purple-200/80 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#2e1236] via-[#1c143d] to-[#251333] px-6 py-4 flex items-center justify-between text-white border-b border-purple-900/40">
                  <div className="font-bold text-sm tracking-wide text-white">
                    SL Series Engineering Matrix
                  </div>
                  <div className="text-xs text-purple-200 font-mono">
                    IS 14665 / EN 81-41
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
                        <span className="w-1.5 h-1.5 rounded-full bg-[#863078]" />
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
        </div>
      </section>

      {/* =========================================================================
          5. APPLICATIONS SECTION (Screenshot 1 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-[#a22b51] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a22b51]" />
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
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all text-center flex flex-col justify-center min-h-[140px]"
              >
                <h3 className="text-base sm:text-lg font-black tracking-wider text-[#a22b51] uppercase mb-2">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal">
                  {app.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PERSONALISATION CHOICES (Screenshots 1 & 2 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-[#a22b51] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a22b51]" />
              Personalisation Choices
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Tailored to match your architecture
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mt-3">
              With the SL Series machine-room-less elevator, you don&apos;t just choose an elevator, you shape it. 
              Select from a range of cabin materials, textures, lighting styles and panel finishes to match your 
              space. Our team works closely with you to ensure the SL Series blends with your villa or building 
              while delivering dependable performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalisations.map((p, i) => (
              <div
                key={i}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
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
        </div>
      </section>

      {/* =========================================================================
          7. SAFETY FEATURES GRID (Screenshots 3 & 4 Exact Architecture)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-xs font-bold text-[#a22b51] uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#a22b51]" />
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
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Sneha Red/Magenta Top Notch Bar */}
                  <div className="h-1 w-8 bg-[#a22b51] rounded-full mb-5 transition-all group-hover:w-12" />
                  
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
        </div>
      </section>

      {/* =========================================================================
          8. BOTTOM HERO CTA BANNER (Rich Brand Velvet Gradient, Zero Harsh Black)
          ========================================================================= */}
      <section className="py-10 sm:py-14 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-br from-[#2e1236] via-[#1c143d] to-[#251333] p-8 sm:p-12 md:p-16 text-center text-white overflow-hidden shadow-2xl border border-purple-400/25 transition-all duration-700">
            {/* Ambient slow breathing glow points */}
            <div className="ambient-orb w-80 h-80 -top-16 -left-16 bg-[#a22b51]/30 pointer-events-none animate-pulse-slow" />
            <div className="ambient-orb w-80 h-80 -bottom-16 -right-16 bg-[#423887]/35 pointer-events-none animate-pulse-slow" />

            <div className="max-w-3xl mx-auto relative z-10 space-y-4 sm:space-y-5">
              <span className="inline-block px-3.5 py-1 bg-white/10 text-purple-200 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                Tailored Hoistway Engineering
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Find out if SL Series fits your villa
              </h2>
              
              <p className="text-sm sm:text-base text-purple-100/90 font-normal leading-relaxed max-w-2xl mx-auto">
                Our team will check your civil layout and power supply and confirm the right configuration. 
                Because the SL Series is near-pitless, it fits even where a conventional lift can&apos;t.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-sm shadow-lg transition-all active:scale-98"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request a Site Survey →</span>
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
