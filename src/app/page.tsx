"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  COMPANY_INFO,
  SOLUTIONS_DATA,
  PROJECTS_DATA,
  SAFETY_FEATURES_DATA,
  TESTIMONIALS_DATA,
} from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [selectedBuildingType, setSelectedBuildingType] = useState<string>("villa");

  // Hero Automated 3-Image Cross-Fade Carousel (Ultra-Luxurious Architectural Visuals, Zero Text Cards, Zero Shadows)
  const heroCarouselImages = [
    {
      src: "/images/hero-luxury-villa-gold.jpg",
      title: "Vision Lifts Luxury Villa Elevator - Champagne Gold Finish",
    },
    {
      src: "/images/hero-panoramic-glass.jpg",
      title: "Vision Lifts Panoramic Curved Glass Villa Elevator",
    },
    {
      src: "/images/hero-modern-residential.jpg",
      title: "Vision Lifts Modern Residential Home Elevator",
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % heroCarouselImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [heroCarouselImages.length]);

  // Hero Lead Form State
  const [leadForm, setLeadForm] = useState({
    name: "",
    buildingType: "Villas & Independent Homes",
    city: "Karimnagar",
    phone: "",
  });
  const [leadSubmitted, setLeadSubmitted] = useState(false);

  const [leadLoading, setLeadLoading] = useState(false);
  const [heroLeadId, setHeroLeadId] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "hero-lead",
          name: leadForm.name,
          phone: leadForm.phone,
          city: leadForm.city,
          buildingType: leadForm.buildingType,
        }),
      });
      const data = await res.json();
      if (data.leadId) setHeroLeadId(data.leadId);
      if (data.whatsappUrl) setWhatsappUrl(data.whatsappUrl);
    } catch (err) {
      console.error(err);
    } finally {
      setLeadLoading(false);
      setLeadSubmitted(true);
    }
  };

  const buildingTypes = [
    {
      id: "villa",
      title: "Villas & Homes",
      series: "VL-Home Luxe Series",
      desc: "Zero machine room, minimal 150mm pit or ramp, runs on single-phase 220V household electricity. Perfect for luxury duplexes and existing homes.",
      highlights: ["Pitless / Shallow 150mm Pit", "Whisper Silent <48 dB", "Glass / Rose Gold Cabin", "ARD Auto-Rescue Included"],
      link: "/solutions#residential",
      image: "/images/residential.png",
      renderIcon: () => (
        <svg className="w-5 h-5 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "apartment",
      title: "Apartments",
      series: "VL-Commercial Gearless MRL",
      desc: "Fast, energy-efficient passenger movement designed for multi-family buildings and gated societies. Regenerative drive saves 40% energy.",
      highlights: ["MRL Space Saving", "Up to 1.75 m/s Speed", "Durable SS 304 Finish", "Full Collective Dispatch"],
      link: "/solutions#residential",
      image: "/images/hero-lobby.png",
      renderIcon: () => (
        <svg className="w-5 h-5 text-[#423887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "commercial",
      title: "Commercial",
      series: "VL-Commercial Gearless Series",
      desc: "Engineered for intense passenger flow during rush hours. Smart group supervisory controls, RFID access, and luxury glass/stainless cabins.",
      highlights: ["Heavy Duty 16-20 Pax", "TFT Screen Indicators", "Regenerative Power", "Infrared Light Curtain"],
      link: "/solutions#commercial",
      image: "/images/commercial.png",
      renderIcon: () => (
        <svg className="w-5 h-5 text-[#a22b51]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "hospital",
      title: "Hospitals",
      series: "VL-Medicare Stretcher Lift",
      desc: "Deep car dimensions accommodating intensive care stretchers and beds. S-curve smooth leveling prevents jerks for critical patients.",
      highlights: ["Stretcher / ICU Bed Depth", "Millimeter Leveling Precision", "Priority Medical Override", "Anti-microbial SS Finish"],
      link: "/solutions#hospital",
      image: "/images/hospital.png",
      renderIcon: () => (
        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: "industrial",
      title: "Industrial",
      series: "VL-Heavy Freight Series",
      desc: "Built to withstand forklift loading and pallet trucks. Reinforced structural steel sling and checkered steel flooring up to 5,000 kg.",
      highlights: ["500 kg to 5,000 kg Payload", "Chequered Steel Flooring", "Bi-Parting Steel Gates", "Impact Absorbing Buffers"],
      link: "/solutions#industrial",
      image: "/images/industrial.png",
      renderIcon: () => (
        <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  const activeBuilding = buildingTypes.find((b) => b.id === selectedBuildingType) || buildingTypes[0];

  const partners = [
    "Vasavi Group",
    "Trends Retail",
    "Vamsiram Builders",
    "My Home Infra",
    "UrbanX Spaces",
    "Croma Electronics",
    "Muppa Projects",
    "Rajapushpa Properties",
    "APR Group",
    "DSR Infrastructure",
    "Zudio Stores",
    "RV Nirmaan",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION (White Background, Engineered to Fit 100% Desktop Viewport) */}
      <section className="bg-white pt-3 pb-5 sm:py-6 lg:py-4 xl:py-8 border-b border-slate-100 relative overflow-hidden lg:min-h-[calc(100vh-80px)] lg:flex lg:flex-col lg:justify-center">
        {/* Ambient Glowing Background Orbs */}
        <div className="ambient-orb w-96 h-96 -top-20 -left-20 bg-purple-200/35 animate-pulse-slow" />
        <div className="ambient-orb w-80 h-80 top-1/2 -right-16 bg-rose-200/25 animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
            {/* Left Column: Canva & Figma Official Branding */}
            <div className="lg:col-span-7 space-y-3 xl:space-y-4 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 via-rose-50 to-amber-50 text-[#423887] border border-purple-200/70 text-[11px] xl:text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Operating Since 2014 · Telangana, India</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] font-black tracking-tight text-slate-900 leading-[1.08]">
                Elevating Spaces. <br />
                Moving People. <br />
                <span className="bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] bg-clip-text text-transparent font-black">
                  Building Trust.
                </span>
              </h1>

              {/* Dynamic Modern Text Loading Animation */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-semibold text-slate-700 bg-white/95 backdrop-blur-md border border-purple-100/90 px-3.5 py-2 rounded-2xl w-fit shadow-xs">
                <span className="inline-flex items-center gap-1.5 text-slate-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#863078]"></span>
                  Engineered for:
                </span>
                <TypewriterText
                  words={[
                    "Luxury Residential Villas",
                    "Gearless Commercial Towers",
                    "ICU Hospital Stretcher Lifts",
                    "Heavy-Duty Industrial Freight",
                    "All 33 Districts of Telangana",
                  ]}
                  className="text-[#423887] font-black"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              <p className="text-sm sm:text-[15px] xl:text-base text-slate-600 max-w-xl leading-relaxed font-normal">
                Reliable elevator solutions engineered for homes, commercial buildings, hospitals and industrial applications. Designed for safety, built for performance, and supported for the long run.
              </p>

              {/* Sneha-style CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setSurveyModalOpen(true)}
                  className="group px-7 xl:px-8 py-3.5 xl:py-4 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:from-[#b8335d] hover:to-[#5044a3] text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-[#863078]/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#863078]/40 active:translate-y-0 cursor-pointer flex items-center gap-2"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Book a Free Site Survey</span>
                  <span className="group-hover:translate-x-1 transition-transform" style={{ color: "#ffffff" }}>→</span>
                </button>
                <Link
                  href="/products"
                  className="px-7 xl:px-8 py-3.5 xl:py-4 rounded-full border-2 border-slate-300/90 hover:border-[#863078] text-slate-800 hover:text-[#863078] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all hover:bg-purple-50/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Compare Our Series
                </Link>
              </div>

              {/* Sneha-style Architectural Feature Badges (Matching Reference Image 5) */}
              <div className="flex flex-wrap gap-2 pt-1 text-[11px] xl:text-xs font-semibold text-slate-700">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-purple-200 transition-colors">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-black">✓</span>
                  Runs on single-phase power
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-purple-200 transition-colors">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-black">✓</span>
                  40% lower energy use
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-purple-200 transition-colors">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-black">✓</span>
                  Quiet performance &lt;48 dB
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-2xs hover:border-purple-200 transition-colors">
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[9px] font-black">✓</span>
                  ARD included
                </span>
              </div>

              {/* 5 Rounded Category Pills at bottom of hero */}
              <div className="pt-2 xl:pt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    Select Your Building Type:
                  </p>
                  <span className="text-[10px] xl:text-[11px] font-bold text-[#863078]">
                    {buildingTypes.find((t) => t.id === selectedBuildingType)?.series}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 xl:gap-2">
                  {buildingTypes.map((type, idx) => {
                    const isSelected = selectedBuildingType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedBuildingType(type.id)}
                        className={`p-2 xl:p-2.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-1 cursor-pointer card-glow ${isSelected
                          ? "border-[#863078] bg-gradient-to-b from-purple-50/90 to-white shadow-sm ring-2 ring-[#863078]/25 scale-[1.02]"
                          : "border-slate-200/90 bg-white hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs"
                          } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                      >
                        <span className={`transition-transform duration-300 ${isSelected ? "scale-110" : ""}`}>
                          {type.renderIcon()}
                        </span>
                        <span className={`text-[10px] xl:text-[11px] font-bold tracking-tight ${isSelected ? "text-[#423887]" : "text-slate-700"}`}>
                          {type.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {/* Dynamic Architectural Specification Pill based on Selected Building */}
                <div className="mt-2 px-3 py-1.5 rounded-xl bg-purple-50/50 border border-purple-100/60 flex items-center justify-between text-[11px] text-slate-600 animate-fade-in">
                  <span className="font-medium truncate max-w-[85%]">
                    {buildingTypes.find((t) => t.id === selectedBuildingType)?.desc}
                  </span>
                  <Link
                    href={buildingTypes.find((t) => t.id === selectedBuildingType)?.link || "/solutions"}
                    className="font-bold text-[#863078] hover:text-[#423887] shrink-0 text-[10px] uppercase tracking-wider ml-2"
                  >
                    View Specs →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Architectural Elevator Showcase (Zero Text Cards, Zero Fog Shadows, 100% Crisp Visual) */}
            <div className="lg:col-span-5 relative w-full h-[440px] sm:h-[500px] lg:h-[540px] xl:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 bg-slate-100 group">
              {/* Luxury Smooth Cross-Fade Image Sequence */}
              {heroCarouselImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === carouselIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                >
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover object-center transform scale-100 group-hover:scale-102 transition-transform duration-1000 ease-out"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP WITH ANIMATED NUMERIC COUNTERS */}
      <section className="bg-white border-b border-slate-100 py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {COMPANY_INFO.stats.map((stat, i) => (
                <div key={i} className="pt-4 md:pt-0 group hover-elevate p-3 rounded-2xl transition-all">
                  <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    <AnimatedCounter value={stat.value} className="text-[#423887] group-hover:text-[#863078] transition-colors" />
                  </div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. PARTNERS INFINITE MARQUEE TICKER */}
      <section className="bg-slate-50/80 py-8 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Trusted by Leading Developers, Institutions & Villa Owners Across South India</span>
          </div>
        </div>
        <Marquee
          speed={32}
          pauseOnHover={true}
          className="py-2"
          items={partners.map((partner, index) => (
            <div
              key={index}
              className="px-5 py-2.5 bg-white rounded-full border border-slate-200 text-xs font-bold text-slate-800 shadow-2xs flex items-center gap-2.5 hover:border-[#863078]/50 hover:shadow-xs transition-all cursor-pointer card-glow"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] animate-pulse" />
              <span>{partner}</span>
            </div>
          ))}
        />
      </section>

      {/* CANVA SECTION: ARCHITECTURAL PHILOSOPHY */}
      <section className="py-10 sm:py-12 bg-white border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#863078] border border-purple-100 text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#863078] animate-pulse" />
                  Precision, made visible.
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Designed to belong. <br />
                  <span className="text-shimmer-brand">Built to perform.</span>
                </h2>
                <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                  A restrained architectural language for Vision Lifts & Solutions. Editorial scale, honest materials, disciplined grids and a single brand-gradient signature.
                </p>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
                  No two buildings move the same way. We plan each configuration around building height, passenger requirements, shaft dimensions, usage and architecture — balancing practical engineering with the character of your space.
                </p>
                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href="/solutions"
                    className="btn-sheen px-6 py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all shadow-md shadow-[#863078]/25 inline-flex items-center gap-2 active:scale-95"
                    style={{ color: "#ffffff" }}
                  >
                    <span className="text-white font-black" style={{ color: "#ffffff" }}>
                      Explore Solutions →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative h-80 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 card-glow group">
                <Image
                  src="/images/cabin-study.png"
                  alt="Architectural Cabin Study"
                  fill
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-md text-[10px] font-bold text-slate-800 border border-slate-200 shadow-xs">
                  Editorial Scale & Disciplined Grids
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. ACTIVE BUILDING SHOWCASE (Clean White & Slate) */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm card-glow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-block px-3 py-1 bg-purple-100 text-[#423887] rounded-full text-xs font-bold uppercase tracking-wider">
                    Recommended: {activeBuilding.series}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {activeBuilding.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {activeBuilding.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {activeBuilding.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSurveyModalOpen(true)}
                      className="btn-sheen px-6 py-2.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all"
                    >
                      Survey This Building
                    </button>
                    <Link
                      href={activeBuilding.link}
                      className="px-6 py-2.5 bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-full hover:bg-slate-100 hover:border-slate-400 transition-all"
                    >
                      View Specifications →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow border border-slate-200 bg-slate-900 group">
                    <Image
                      src={activeBuilding.image}
                      alt={activeBuilding.title}
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 5. CORE SOLUTIONS CARDS (Clean White) */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                  Vertical Mobility
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                  Elevator Solutions for Every Need
                </h2>
                <p className="text-xs text-slate-500 mt-1 max-w-xl">
                  From a private residence to a complex public building, the right elevator starts with the way your space is used.
                </p>
              </div>
              <Link
                href="/solutions"
                className="mt-4 md:mt-0 text-xs font-bold uppercase tracking-wider text-[#423887] hover:text-[#863078] flex items-center gap-1 transition-colors"
              >
                <span>Explore All 4 Categories</span>
                <span>→</span>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOLUTIONS_DATA.map((solution, sIdx) => (
              <ScrollReveal key={solution.id} animation="fadeInUp" delay={sIdx * 0.1}>
                <div
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group card-glow h-full"
                >
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm">
                      {solution.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#423887] transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-xs text-slate-500 mb-4 line-clamp-2">
                        {solution.subtitle}
                      </p>
                      <ul className="space-y-1.5 mb-6">
                        {solution.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                            <span className="text-[#423887] font-bold">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={solution.slug}
                      className="w-full py-2.5 text-center bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-[#423887] border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. B2B PRODUCTION HUB */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="bg-gradient-to-br from-purple-50/50 via-white to-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm card-glow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-bold uppercase tracking-wider">
                    B2B Manufacturing & Raw Materials Hub
                  </span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                    Supplying High-Grade Lift Components Across South India
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Beyond end-user installations, <strong>Vision Lifts & Solutions</strong> operates an active manufacturing and component distribution catalog in Karimnagar. We supply gearless traction machines, VVVF micro-processor controllers, automatic door operators, guide rails, and custom designer cabins to other elevator service businesses and contractors.
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                    <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs card-glow">
                      <div className="font-bold text-slate-900">PMSM Machines</div>
                      <div className="text-slate-500 text-[11px]">320kg to 2000kg Gearless</div>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs card-glow">
                      <div className="font-bold text-slate-900">VVVF Controllers</div>
                      <div className="text-slate-500 text-[11px]">Integrated ARD & CAN-bus</div>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-xs card-glow">
                      <div className="font-bold text-slate-900">Modular SS Cabins</div>
                      <div className="text-slate-500 text-[11px]">SS 304 Titanium & Glass</div>
                    </div>
                  </div>

                  <div className="pt-3">
                    <Link
                      href="/production-hub"
                      className="btn-sheen inline-block px-7 py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm transition-all"
                    >
                      Browse B2B Component Catalog →
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-lg group">
                    <Image
                      src="/images/cabin-study.png"
                      alt="Elevator Manufacturing & Cabin Assembly"
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. TESTIMONIALS (Clean White Cards) */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Verified Feedback
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Trusted by Homeowners, Builders & Healthcare Leaders
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.12}>
                <div
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between card-glow h-full"
                >
                  <div>
                    <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                  <div className="border-t border-slate-100 pt-3">
                    <div className="font-bold text-slate-900 text-xs sm:text-sm">{t.client}</div>
                    <div className="text-[11px] text-slate-500">{t.role}</div>
                    <div className="text-[11px] font-semibold text-[#423887] mt-0.5">
                      Installed: {t.liftType}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FINAL ACTION BANNER */}
      <section className="py-16 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 -top-20 -left-20 bg-purple-200/30 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="scaleUp">
            <div className="bg-gradient-to-br from-[#2e1236] via-[#1c143d] to-[#251333] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl border border-purple-400/25 relative overflow-hidden">
              <div className="ambient-orb w-64 h-64 -top-10 -left-10 bg-[#a22b51]/20 pointer-events-none" />
              <div className="ambient-orb w-64 h-64 -bottom-10 -right-10 bg-[#423887]/25 pointer-events-none" />
              <div className="relative z-10">
                <span className="inline-block px-3.5 py-1 bg-white/10 text-purple-200 border border-white/20 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
                  Ready to Upgrade Your Building?
                </span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3 text-white">
                  Schedule Your Free On-Site Inspection Today
                </h2>
                <p className="text-purple-100/90 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                  Our engineering team based at Kisan Nagar, Karimnagar will visit your site, measure hoistway dimensions, evaluate power availability, and prepare a custom blueprint & quote within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    type="button"
                    onClick={() => setSurveyModalOpen(true)}
                    className="btn-sheen px-7 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer"
                    style={{ color: "#ffffff" }}
                  >
                    <span style={{ color: "#ffffff" }}>Book a Free Site Survey →</span>
                  </button>
                  <a
                    href={`tel:${COMPANY_INFO.phoneRaw}`}
                    className="px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 font-extrabold text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center justify-center gap-2"
                    style={{ color: "#ffffff" }}
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span style={{ color: "#ffffff" }}>Call Helpline</span>
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteSurveyModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
      />
    </div>
  );
}
