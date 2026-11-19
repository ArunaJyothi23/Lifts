"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import { COMPANY_INFO } from "@/data/siteData";

export default function CabinsFinishesPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [brochureDownloaded, setBrochureDownloaded] = useState(false);

  const handleDownloadBrochure = (e: React.MouseEvent) => {
    e.preventDefault();
    setBrochureDownloaded(true);
    const link = document.createElement("a");
    link.href = "/images/cabin-study.png";
    link.download = "Vision-Lifts-Luxury-Cabins-Catalog.png";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setBrochureDownloaded(false), 3000);
  };

  const keyHighlights = [
    {
      title: "PVD Titanium Mirror Coatings",
      desc: "Vacuum-deposited titanium coating in Rose Gold, Champagne, Bronze, and Obsidian Black with scratch-resistant nano-ceramic sealing that resists fingerprint smudges.",
    },
    {
      title: "Curved 360° Panoramic Safety Glass",
      desc: "High-strength 10mm + 10mm laminated toughened glass panels provide panoramic 360-degree views, perfectly complementing villa staircases and glass atriums.",
    },
    {
      title: "Architectural LED Ceiling Canopies",
      desc: "Indirect ambient coves, starry night fiber optic patterns, and laser-cut stainless steel latticework providing glare-free warm lighting tailored to interior design schemes.",
    },
    {
      title: "Precision Smart COP & LOP Fixtures",
      desc: "Ultra-thin brushed faceplates with integrated 7-inch TFT color multimedia displays, Braille tactile pushbuttons, and contactless proximity call sensors.",
    },
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "PVD titanium luxury coating",
      desc: "Physical Vapor Deposition creates an ultra-durable, corrosion-proof layer that retains its lustrous metallic brilliance for decades without fading.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Acoustic noise damping",
      desc: "Multi-layered honeycomb core sandwich panels isolate hoistway mechanical sound, keeping cabin interior noise levels below 42 dB.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#423887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Diffused ambient LED arrays",
      desc: "High CRI (>90) warm white LED illumination mimics natural sunlight, enhancing the rich grain of stone flooring and metallic wall reflections.",
    },
    {
      icon: (
        <svg className="w-6 h-6 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "100% bespoke customization",
      desc: "We collaborate with your interior designer to match wood veneers, Italian marble inlays, leather trims, and personalized family emblems.",
    },
  ];

  const techSpecs = [
    { label: "Cabin Wall Finishes", value: "PVD Titanium Rose Gold, Hairline SS 304, Mirror Finish, Smoked Bronze" },
    { label: "Glass Wall Option", value: "10mm + 10mm Laminated Toughened Safety Glass (EN 12600 Compliant)" },
    { label: "Ceiling System", value: "Laser-cut Stainless Lattice with Diffused Indirect LED / Starry Fiber Optic" },
    { label: "Handrail Profiles", value: "Ergonomic Flat / Round SS 304 (Titanium Rose Gold, Matte Black, Satin Chrome)" },
    { label: "Car Operating Panel (COP)", value: "Full-Height Flush Column / Slimline with 7-Inch TFT Multimedia Screen" },
    { label: "Landing Fixtures (LOP)", value: "Surface-mount brushed stainless with touchless proximity / Braille buttons" },
    { label: "Flooring Selection", value: "Italian Statuario Marble, Imported Black Granite, Heavy-Duty PVC Vinyl" },
    { label: "Ventilation System", value: "Concealed Whisper Cross-Flow Blower Fan (<40 dB noise level)" },
    { label: "Door Panel Finishes", value: "Matching PVD Titanium, Etched Stainless Steel, or Frameless Clear Glass" },
    { label: "Interior Weight Allowance", value: "Engineered chassis balanced for heavy stone floors and glass wall loads" },
    { label: "Fire Resistance", value: "Class A Fire-Retardant Interior Materials & NBC 2016 Certified" },
    { label: "Custom Crafting", value: "100% Custom Built to Architect CAD Drawings & Mood Boards" },
  ];

  const applications = [
    {
      title: "LUXURY VILLAS",
      subtitle: "Opulent private residential spaces & duplexes",
    },
    {
      title: "HOTELS & RESORTS",
      subtitle: "Bespoke hospitality experience & royal ambiance",
    },
    {
      title: "PENTHOUSE SUITES",
      subtitle: "Panoramic 360° glass atrium viewing",
    },
    {
      title: "CORPORATE HQS",
      subtitle: "Executive boardroom prestige & satin finishes",
    },
  ];

  const personalisations = [
    {
      title: "Cabin Finishes",
      desc: "Rose Gold, Champagne, Obsidian Black, and Smoked Bronze vacuum PVD mirror or hairline stainless steel.",
    },
    {
      title: "Modernisation",
      desc: "Upgrade older elevator cabins to modern titanium mirror walls and touchless pushbuttons without mechanical replacement.",
    },
    {
      title: "Lighting",
      desc: "Star-lit optical fibers, laser-cut backlit geometric stainless canopies, and warm ambient floor cove lights.",
    },
  ];

  const safetyFeatures = [
    {
      title: "Sensor-Based Doors",
      desc: "Full-height infrared light curtain detects objects or passengers in the door threshold, preventing door closure.",
    },
    {
      title: "Automatic Rescue Device",
      desc: "Integrated battery ARD safely drives the cabin to the nearest floor and turns on emergency lights during outages.",
    },
    {
      title: "Emergency Alarm System",
      desc: "Concealed hands-free two-way intercom and high-decibel alarm chime for instant outside communication.",
    },
    {
      title: "Overload Protection",
      desc: "Sub-floor electronic load cells ensure the elevator cannot travel if maximum weight capacity is exceeded.",
    },
    {
      title: "Shatterproof Safety Glass",
      desc: "10mm + 10mm laminated safety glass with high-strength PVB interlayer that will not shatter upon severe impact.",
    },
    {
      title: "Fire-Rated Interior Materials",
      desc: "All decorative composites, veneers, and false ceilings adhere strictly to Class A flame-retardant safety standards.",
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
                <span className="text-[#863078] font-bold">Cabins & Finishes</span>
              </div>

              {/* Sneha-style Series Category Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[11px] sm:text-xs font-bold text-[#a22b51] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a22b51] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#a22b51]"></span>
                </span>
                Cabin Studio · Designer Finishes & Architectural Options
              </div>

              {/* Massive Display Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-none">
                <span className="bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] bg-clip-text text-transparent">Cabins</span>{" "}
                <span className="text-slate-900">& Finishes</span>
              </h1>

              {/* 3 Sneha-style Feature Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="px-3.5 py-1.5 rounded-full bg-[#a22b51] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Titanium Rose Gold
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#863078] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Panoramic Curved Glass
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-xs font-bold tracking-wide shadow-xs" style={{ color: "#ffffff" }}>
                  Hairline SS 304
                </span>
              </div>

              {/* Intro Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl pt-1">
                Transform your elevator into an architectural masterpiece. Choose from luxury titanium mirror 
                finishes, satin hairline stainless steel, panoramic laminated safety glass, bespoke false 
                ceilings with ambient LED arrays, and touchless COP operating panels.
              </p>

              {/* 5 Sneha-style Checkmark Feature Pills */}
              <div className="flex flex-wrap gap-2 pt-1 pb-1">
                {[
                  "Titanium Mirror Rose Gold",
                  "Hairline Stainless Steel 304",
                  "360° Panoramic glass options",
                  "Touchless COP & LOP displays",
                  "Italian marble & granite floor ready",
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
                  <span style={{ color: "#ffffff" }}>Book Free Cabin Consultation →</span>
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
                  Design Studio Helpline:
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="font-bold text-slate-900 hover:text-[#423887] transition-colors underline underline-offset-2"
                >
                  +91 {COMPANY_INFO.phone}
                </a>
                <span>·</span>
                <span>Custom Material Swatches Available</span>
              </div>
            </div>

            {/* Right Column: Architectural Elevator Showcase Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <div className="relative h-[420px] sm:h-[480px] w-full">
                  <Image
                    src="/images/cabin-study.png"
                    alt="Vision Lifts Luxury Elevator Cabin Study Rose Gold Titanium"
                    fill
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />
                </div>

                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold tracking-wide uppercase border border-white/20">
                    Bespoke Studio
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-600 text-white text-[11px] font-bold tracking-wide flex items-center gap-1 shadow-xs" style={{ color: "#ffffff" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    Rose Gold PVD
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 text-white bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="text-xs uppercase tracking-wider text-rose-300 font-bold mb-1">
                    Architectural Interior Craftsmanship
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Bespoke Titanium & Glass Cabin Crafting
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    Mirror finishes, hairline textures, curved panoramic glass, and customized ambient LED ceilings.
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
              Bespoke finishes crafted for luxurious spaces
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
              Master Craftsmanship
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why Discerning Architects Specify Vision Lifts
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Every cabin is crafted with certified architectural materials and precision acoustic engineering.
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
                ● Material Specifications
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Architectural material standards & fixtures
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                All Vision Lifts cabins are constructed with grade SS 304 austenitic stainless steel, 
                high-clarity laminated safety glass, and certified flame-retardant structural cores. 
                Our team provides full 3D CAD renders before fabrication begins.
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
                    {brochureDownloaded ? "Downloading Catalog..." : "Download Full Spec Sheet (PDF) ↓"}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs sm:text-sm hover:opacity-95 transition-all shadow-md flex items-center justify-center gap-2"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request 3D Custom Cabin Visualization →</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <div className="text-xs font-bold text-slate-900 mb-1">
                  Architect Sample Kit & Box
                </div>
                <div className="text-xs text-slate-500">
                  Are you an architect or interior designer? Call our technical design desk at{" "}
                  <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-[#a22b51] hover:underline">
                    +91 {COMPANY_INFO.phone}
                  </a>{" "}
                  to receive our physical stainless steel and glass finish sample box.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-purple-200/80 shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#2e1236] via-[#1c143d] to-[#251333] px-6 py-4 flex items-center justify-between text-white border-b border-purple-900/40">
                  <div className="font-bold text-sm tracking-wide text-white">
                    Cabin Materials & Finishes Matrix
                  </div>
                  <div className="text-xs text-purple-200 font-mono">
                    Grade SS 304 / EN 12600
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
              With Vision Lifts custom cabins, you don&apos;t just choose an elevator, you shape it. 
              Select from a range of cabin materials, textures, lighting styles and panel finishes to match your 
              space. Our team works closely with you to ensure the elevator cabin blends with your villa or building 
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
            <div className="ambient-orb w-80 h-80 -top-16 -left-16 bg-[#a22b51]/30 pointer-events-none animate-pulse-slow" />
            <div className="ambient-orb w-80 h-80 -bottom-16 -right-16 bg-[#863078]/35 pointer-events-none animate-pulse-slow" />

            <div className="max-w-3xl mx-auto relative z-10 space-y-4 sm:space-y-5">
              <span className="inline-block px-3.5 py-1 bg-white/10 text-purple-200 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                Architectural Studio & Mockups
              </span>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Find out if custom finishes fit your space
              </h2>
              
              <p className="text-sm sm:text-base text-purple-100/90 font-normal leading-relaxed max-w-2xl mx-auto">
                Our design studio will provide physical stainless steel swatches, 3D interior renders, 
                and lighting mockups tailored directly to your architect&apos;s mood boards.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-sm shadow-lg transition-all active:scale-98"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Request Cabin Consultation →</span>
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
