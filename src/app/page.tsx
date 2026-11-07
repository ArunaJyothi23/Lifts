"use client";

import React, { useState } from "react";
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
      icon: "🏡",
      series: "VL-Home Luxe Series",
      desc: "Zero machine room, minimal 150mm pit or ramp, runs on single-phase 220V household electricity. Perfect for luxury duplexes and existing homes.",
      highlights: ["Pitless / Shallow 150mm Pit", "Whisper Silent <48 dB", "Glass / Rose Gold Cabin", "ARD Auto-Rescue Included"],
      link: "/solutions#residential",
      image: "/images/residential.png",
    },
    {
      id: "apartment",
      title: "Apartments",
      icon: "🏢",
      series: "VL-Commercial Gearless MRL",
      desc: "Fast, energy-efficient passenger movement designed for multi-family buildings and gated societies. Regenerative drive saves 40% energy.",
      highlights: ["MRL Space Saving", "Up to 1.75 m/s Speed", "Durable SS 304 Finish", "Full Collective Dispatch"],
      link: "/solutions#residential",
      image: "/images/hero-lobby.png",
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: "🏬",
      series: "VL-Commercial Gearless Series",
      desc: "Engineered for intense passenger flow during rush hours. Smart group supervisory controls, RFID access, and luxury glass/stainless cabins.",
      highlights: ["Heavy Duty 16-20 Pax", "TFT Screen Indicators", "Regenerative Power", "Infrared Light Curtain"],
      link: "/solutions#commercial",
      image: "/images/commercial.png",
    },
    {
      id: "hospital",
      title: "Hospitals",
      icon: "🏥",
      series: "VL-Medicare Stretcher Lift",
      desc: "Deep car dimensions accommodating intensive care stretchers and beds. S-curve smooth leveling prevents jerks for critical patients.",
      highlights: ["Stretcher / ICU Bed Depth", "Millimeter Leveling Precision", "Priority Medical Override", "Anti-microbial SS Finish"],
      link: "/solutions#hospital",
      image: "/images/hospital.png",
    },
    {
      id: "industrial",
      title: "Industrial",
      icon: "🏭",
      series: "VL-Heavy Freight Series",
      desc: "Built to withstand forklift loading and pallet trucks. Reinforced structural steel sling and checkered steel flooring up to 5,000 kg.",
      highlights: ["500 kg to 5,000 kg Payload", "Chequered Steel Flooring", "Bi-Parting Steel Gates", "Impact Absorbing Buffers"],
      link: "/solutions#industrial",
      image: "/images/industrial.png",
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

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 xl:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-center">
            {/* Left Column: Canva & Figma Official Branding */}
            <div className="lg:col-span-7 space-y-3 xl:space-y-4 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#423887] border border-purple-100 text-[11px] xl:text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                VISION LIFTS & SOLUTIONS / TELANGANA, INDIA
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[46px] font-black tracking-tight text-slate-900 leading-[1.12]">
                Elevating Spaces. <br />
                Moving People. <br />
                <span className="text-shimmer-brand font-black">Building Trust.</span>
              </h1>

              {/* Dynamic Modern Text Loading Animation */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50/90 border border-slate-200/80 px-3 py-1.5 rounded-2xl w-fit shadow-2xs hover-elevate">
                <span className="text-slate-400 font-medium">Engineered for:</span>
                <TypewriterText
                  words={[
                    "Luxury Residential Villas",
                    "Gearless Commercial Towers",
                    "ICU Hospital Stretcher Lifts",
                    "Heavy-Duty Industrial Freight",
                    "All 33 Districts of Telangana",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              <p className="text-xs sm:text-sm xl:text-base text-slate-600 max-w-xl leading-relaxed">
                Reliable elevator solutions engineered for homes, commercial buildings, hospitals and industrial applications. Designed for safety, built for performance, and supported for the long run.
              </p>

              {/* Canva Frame 01 Call to Actions */}
              <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                <Link
                  href="/quote-request"
                  className="btn-sheen px-4 xl:px-5 py-2.5 xl:py-3 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-[11px] xl:text-xs uppercase tracking-wider shadow-md shadow-[#863078]/20 transition-all active:scale-98"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/products"
                  className="px-4 xl:px-5 py-2.5 xl:py-3 rounded-full border-2 border-slate-300 hover:border-slate-800 text-slate-800 font-bold text-[11px] xl:text-xs uppercase tracking-wider transition-all hover:bg-slate-50"
                >
                  Explore Elevators
                </Link>
              </div>

              <div className="text-[10px] xl:text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✦</span>
                <span>Designed for safety. Built for performance. Supported for the long run.</span>
              </div>

              {/* 5 Rounded Category Pills at bottom of hero */}
              <div className="pt-1 xl:pt-2">
                <p className="text-[10px] xl:text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  Select Your Building Type:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 xl:gap-2">
                  {buildingTypes.map((type, idx) => {
                    const isSelected = selectedBuildingType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedBuildingType(type.id)}
                        className={`p-2 xl:p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 xl:gap-1 cursor-pointer card-glow ${
                          isSelected
                            ? "border-[#863078] bg-purple-50/70 shadow-xs ring-1 ring-[#863078]/40"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
                      >
                        <span className="text-base xl:text-lg transform group-hover:scale-110 transition-transform">{type.icon}</span>
                        <span className={`text-[10px] xl:text-[11px] font-bold ${isSelected ? "text-[#423887]" : "text-slate-700"}`}>
                          {type.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Column: Elevator Visual Showcase & Free Site Survey Card */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="luxury-glass rounded-3xl p-4 sm:p-5 xl:p-6 shadow-2xl relative card-glow">
                
                {/* Dynamic Elevator Preview Image (High-Resolution Photorealistic Render) */}
                <div className="relative h-36 sm:h-40 xl:h-48 w-full rounded-2xl overflow-hidden mb-3 xl:mb-4 border border-slate-200/80 shadow-xs group bg-slate-900">
                  <Image
                    src={activeBuilding.image}
                    alt={activeBuilding.title}
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9px] xl:text-[10px] font-black text-[#423887] border border-purple-100 uppercase tracking-wider shadow-xs">
                    {activeBuilding.series}
                  </div>
                  <div className="absolute bottom-2.5 left-3 right-3 text-white flex items-end justify-between">
                    <div>
                      <div className="text-xs xl:text-sm font-black tracking-tight">{activeBuilding.title}</div>
                      <div className="text-[9px] xl:text-[10px] text-slate-300 font-medium">Whisper-Quiet · Single Phase 220V</div>
                    </div>
                    <span className="text-[9px] xl:text-[10px] font-bold text-emerald-400 bg-slate-900/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-slate-700">Live Preview</span>
                  </div>
                </div>

                <div className="mb-2.5 xl:mb-3">
                  <h3 className="text-base xl:text-lg font-extrabold text-slate-900 tracking-tight">
                    Get Free Site Survey & Quote
                  </h3>
                  <p className="text-[10px] xl:text-[11px] text-slate-500 mt-0.5">
                    Share your details — Ramesh Vilasagar or our senior elevator engineer will call you back.
                  </p>
                </div>

                {leadSubmitted ? (
                  <div className="text-center py-6 space-y-2.5">
                    <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold animate-pulse-badge">
                      ✓
                    </div>
                    <div className="inline-block px-3 py-0.5 bg-purple-50 text-[#423887] text-[10px] font-bold uppercase tracking-wider rounded-full border border-purple-100">
                      Ref: {heroLeadId || "LEAD-NEW"}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">Survey Request Received!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you, <strong>{leadForm.name}</strong>. We will coordinate your free site survey in <strong>{leadForm.city}</strong> shortly.
                    </p>
                    <div className="pt-2 flex flex-col gap-2">
                      <a
                        href={`https://wa.me/919440180868?text=Hi%20Vision%20Lifts%2C%20I%20just%20submitted%20a%20survey%20request%20(Ref%3A%20${heroLeadId || 'LEAD-NEW'})%20for%20${encodeURIComponent(leadForm.buildingType)}%20in%20${encodeURIComponent(leadForm.city)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sheen px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow flex items-center justify-center gap-1.5"
                      >
                        <span>Chat on WhatsApp Directly</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setLeadSubmitted(false)}
                        className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-semibold"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-2.5 xl:space-y-3">
                    <div>
                      <label className="block text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                        YOUR NAME <span className="text-[#423887]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Reddy"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                        className="w-full px-3 py-1.5 xl:py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40 text-slate-800 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                        BUILDING / PROJECT TYPE
                      </label>
                      <select
                        value={leadForm.buildingType}
                        onChange={(e) => setLeadForm({ ...leadForm, buildingType: e.target.value })}
                        className="w-full px-3 py-1.5 xl:py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40 text-slate-800 transition-all"
                      >
                        <option>Villas & Independent Homes</option>
                        <option>Residential Apartments</option>
                        <option>Commercial Complex / Offices</option>
                        <option>Hospitals & Healthcare</option>
                        <option>Industrial Plant / Warehouses</option>
                        <option>Modernization of Old Lift</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          LOCATION <span className="text-[#423887]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Karimnagar, Warangal"
                          value={leadForm.city}
                          onChange={(e) => setLeadForm({ ...leadForm, city: e.target.value })}
                          className="w-full px-3 py-1.5 xl:py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40 text-slate-800 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] xl:text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                          MOBILE NUMBER <span className="text-[#423887]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98484 80868"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full px-3 py-1.5 xl:py-2 text-xs bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#863078]/40 text-slate-800 transition-all"
                        />
                      </div>
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="btn-sheen w-full py-2.5 xl:py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-extrabold text-xs uppercase tracking-wider rounded-full transition-all cursor-pointer active:scale-98"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>Request a Call Back →</span>
                      </button>
                      <p className="text-center text-[10px] xl:text-[11px] text-slate-400 mt-2 font-medium">
                        🔒 Zero spam guarantee. Direct technical consultation from Ramesh Vilasagar.
                      </p>
                    </div>
                  </form>
                )}
              </div>
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

      {/* CANVA SECTION: RESPONSIVE VIEWS */}
      <section className="py-10 sm:py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                Responsive Experience
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                A consistent experience at every scale.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                The same white canvas, clear hierarchy and logo-derived accents adapt across desktop, tablet and mobile presentation frames.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal animation="fadeInUp" delay={0.1}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 card-glow h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">🖥️ Desktop Frame</span>
                  <span className="text-[10px] font-bold text-slate-400">1440 × 900</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Generous editorial layout, full horizontal navigation, two-column quote configurator, and floating hotline docks.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={0.2}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 card-glow h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">📱 Tablet View</span>
                  <span className="text-[10px] font-bold text-slate-400">768 × 1024</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Adaptive two-column grids, collapsible feature cards, and finger-friendly tap targets across touch screens.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fadeInUp" delay={0.3}>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 card-glow h-full">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">📱 Mobile Handset</span>
                  <span className="text-[10px] font-bold text-slate-400">375 × 812</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Full-screen architectural drawer with 3-line toggle, sticky WhatsApp/Call bar, and single-column form flow.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CANVA SECTION: ADMIN PORTAL PROTOTYPE DEMO */}
      <section className="py-10 sm:py-12 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 -bottom-10 -right-20 bg-purple-900/40 animate-pulse-slow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal animation="fadeInUp">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-block px-3 py-1 bg-white/10 text-purple-300 rounded-full text-xs font-bold uppercase tracking-wider">
                  VISION LIFTS & SOLUTIONS / DEMO
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Admin Portal
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                  Preview the dashboard layout and sample workflows. This is a public prototype, not a sign-in or protected admin area.
                </p>
                <p className="text-xs text-slate-400 italic">
                  ✦ No email, password, account, or real credentials are needed. Entering the demo does not authenticate you.
                </p>
                <div className="pt-2">
                  <Link
                    href="/admin"
                    className="btn-sheen inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:opacity-95 transition-all"
                  >
                    <span>Enter demo dashboard →</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-[#0b2834] border border-[#143e4f] space-y-2 card-glow">
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  VISION / CONTROL CENTER
                </div>
                <h3 className="text-base font-bold text-white">
                  A closer look behind the experience.
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Explore the illustrative content-management experience in the same design language as the website.
                </p>
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
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl card-glow border border-slate-800">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]/20 text-rose-300 border border-rose-500/30 rounded-full text-xs font-bold uppercase tracking-wider mb-3 animate-pulse-badge">
                Ready to Upgrade Your Building?
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
                Schedule Your Free On-Site Inspection Today
              </h2>
              <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6 leading-relaxed">
                Our engineering team based on Gandhi Road, Karimnagar will visit your site, measure hoistway dimensions, evaluate power availability, and prepare a custom blueprint & quote within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={() => setSurveyModalOpen(true)}
                  className="btn-sheen px-7 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all cursor-pointer"
                >
                  Book a Free Site Survey
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="px-7 py-3.5 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold text-xs uppercase tracking-wider rounded-full transition-all"
                >
                  Call +91 98484 80868
                </a>
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
