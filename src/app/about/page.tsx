"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);

  const stats = [
    { value: "15+", label: "Years Experience", sub: "Since inception in Telangana" },
    { value: "500+", label: "Landmark Sites", sub: "Villas, towers & hospitals" },
    { value: "33", label: "Districts Covered", sub: "Statewide technical presence" },
    { value: "<30m", label: "Emergency SLA", sub: "Direct mobile technician dispatch" },
  ];

  const leadershipPillars = [
    {
      title: "Direct Technical Access",
      desc: "Speak directly with senior elevator engineers who designed and installed your hoistway — never an untrained third-party call center agent.",
      icon: "⚙️",
      tag: "Direct Engineering",
    },
    {
      title: "Zero Subcontracting Policy",
      desc: "Every mechanical guide rail, traction bracket, motor, and controller is aligned and installed by our certified full-time engineering brigade.",
      icon: "🛡️",
      tag: "Certified Crew",
    },
    {
      title: "German & Italian Component Standards",
      desc: "PMSM gearless permanent magnet traction machines and imported VVVF drives ensuring whisper-quiet <48dB operation and 40% power savings.",
      icon: "⚡",
      tag: "Tier-1 Hardware",
    },
    {
      title: "Karimnagar Stocked Spares Depot",
      desc: "Our central workshop on Gandhi Road maintains complete inventory of genuine OEM boards, belts, door operators, and ARD battery systems.",
      icon: "📦",
      tag: "Zero Delay",
    },
  ];

  const milestones = [
    {
      year: "2014",
      badge: "Founding Era",
      title: "Foundation in Karimnagar",
      desc: "Ramesh Vilasagar founded Vision Lifts & Solutions on Gandhi Road to provide precision vertical mobility engineering across North Telangana.",
      highlight: "First 25 residential and clinic elevators commissioned.",
    },
    {
      year: "2017",
      badge: "Commercial Expansion",
      title: "Commercial Towers & Hospital Lifts",
      desc: "Expanded into high-speed gearless passenger elevators and NBC-compliant stretcher bed elevators for private hospitals and commercial plazas.",
      highlight: "Speeds up to 1.75 m/s with ±2mm leveling accuracy.",
    },
    {
      year: "2020",
      badge: "B2B Production",
      title: "B2B Component Distribution Hub",
      desc: "Inaugurated dedicated component supply division, distributing PMSM gearless traction motors, controllers, and car operating panels to regional lift contractors.",
      highlight: "Became preferred OEM supplier for North Telangana.",
    },
    {
      year: "2023",
      badge: "Architectural Luxe",
      title: "Pitless & Single-Phase Innovation",
      desc: "Engineered ultra-shallow 150mm pit and single-phase 220V residential elevators tailored for luxury duplexes, villas, and existing buildings.",
      highlight: "Zero rooftop machine rooms required.",
    },
    {
      year: "2026",
      badge: "Statewide Network",
      title: "500+ Active Sites & 24/7 AMC Command",
      desc: "Celebrating 500+ operational elevator installations across all 33 districts of Telangana, backed by mobile emergency vans and automated health monitoring.",
      highlight: "99.4% documented statewide operational uptime.",
    },
  ];

  const regionalHubs = [
    {
      city: "Karimnagar Central HQ & Workshop",
      address: "Gandhi Road Commercial Zone, Karimnagar - 505001",
      role: "Central Engineering Design Studio, B2B Components Warehouse & Testing Tower",
      status: "Command Center",
      badge: "Headquarters",
      contact: "+91 98484 80868",
    },
    {
      city: "Warangal & Hanamkonda Depot",
      address: "Subedari & Kazipet Commercial Corridor",
      role: "High-Traffic Commercial Lift Installation & Rapid AMC Service Wing",
      status: "Active Fleet",
      badge: "North-East Hub",
      contact: "+91 98484 80868",
    },
    {
      city: "Nizamabad & Jagtial Field Depot",
      address: "North Telangana Field Engineering Center",
      role: "Residential Villa Installations, Heritage Building Retrofits & Preventive AMC",
      status: "Active Fleet",
      badge: "North Hub",
      contact: "+91 98484 80868",
    },
    {
      city: "Hyderabad Capital Regional Wing",
      address: "Kondapur & Gachibowli Coordination Desk",
      role: "Architectural Panoramic Glass Capsules & High-Rise MRL Commercial Coordination",
      status: "Active Fleet",
      badge: "Capital Wing",
      contact: "+91 98484 80868",
    },
  ];

  const complianceStandards = [
    {
      code: "IS 14665 (Part 1-5)",
      title: "Indian Standards Electric Traction Lifts",
      desc: "Certified hoistway dimensions, car frame structural factors of safety (min 8x), and overspeed governor calibrations.",
      icon: "🇮🇳",
    },
    {
      code: "NBC 2016 Compliant",
      title: "National Building Code Safety Mandate",
      desc: "Hospital stretcher clearance, fire emergency recall operation, and disabled-friendly low-height COP buttons.",
      icon: "🏛️",
    },
    {
      code: "Automatic Rescue Device",
      title: "ARD Emergency Battery Power Backup",
      desc: "Standard on all passenger elevators. In case of grid failure, automatically moves cabin to nearest floor and opens doors safely.",
      icon: "🔋",
    },
    {
      code: "Infrared Light Curtain",
      title: "36-Beam Full Height Door Protection",
      desc: "Invisible optical barrier preventing doors from closing on children, pets, stretchers, or entering passengers.",
      icon: "🚪",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden font-sans text-slate-800 selection:bg-[#a22b51] selection:text-white">
      
      {/* =========================================================================
          1. HERO SECTION: BALANCED 2-COLUMN LUXURY ARCHITECTURAL SHOWCASE
          ========================================================================= */}
      <section className="bg-white border-b border-slate-100 pt-6 pb-12 sm:pt-8 sm:pb-16 relative overflow-hidden">
        {/* Subtle Ambient Glowing Background Orbs */}
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-100/50 animate-pulse-slow" />
        <div className="ambient-orb w-96 h-96 top-1/3 -right-20 bg-rose-100/40 animate-pulse-slow" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Brand Story & Executive Intro */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4.5 animate-fade-in-up">
              
              {/* Breadcrumb Navigation */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">About Vision Lifts</span>
              </div>

              {/* Verified Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#423887] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Karimnagar Central HQ & Statewide Engineering Network</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Engineering vertical trust across{" "}
                <span className="text-shimmer-brand font-black">Telangana.</span>
              </h1>

              {/* Dynamic Typewriter Text Loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Core Commitments:</span>
                <TypewriterText
                  words={[
                    "Founded by Ramesh Vilasagar (15+ Years Mechanical Mastery)",
                    "Over 500+ Landmark Sites Commissioned Across South India",
                    "Direct Field Engineer Access — Zero Call Center Delays",
                    "NBC 2016 & IS 14665 Rigorous Life-Safety Compliance",
                    "All 33 Districts of Telangana Covered with 24/7 Response",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Executive Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Founded by <strong>Ramesh Vilasagar</strong>, Vision Lifts & Solutions blends rigorous mechanical engineering with local service responsiveness. We engineer safer, quieter, and smarter vertical mobility systems for luxury villas, commercial towers, healthcare clinics, and factories across all 33 districts of Telangana.
              </p>

              {/* Hero Call-To-Action Cluster (High Contrast, Guaranteed Visible Text) */}
              <div className="pt-1.5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-white font-black" style={{ color: "#ffffff" }}>
                    Book Free Hoistway Survey →
                  </span>
                </button>

                <a
                  href="tel:9700123878"
                  className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-black text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center gap-2 shadow-sm active:scale-95 border border-slate-800"
                  style={{ color: "#ffffff" }}
                >
                  <span className="text-emerald-400 text-sm">📞</span>
                  <span className="text-white font-black tracking-wide" style={{ color: "#ffffff" }}>
                    Call 9700 123 878 Direct
                  </span>
                </a>
              </div>

              {/* Trust Badges Row */}
              <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>100% In-House Engineers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>IS 14665 Safety Certified</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Stocked OEM Spares Depot</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Light Showcase Card (Matches Light Website Theme) */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative bg-white/95 rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden card-glow group backdrop-blur-sm">
                
                {/* Elevated Elevator Image Frame */}
                <div className="relative h-64 sm:h-72 xl:h-80 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/hero-lobby.png"
                    alt="Vision Lifts Engineering & Experience Center"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Top Floating Glass Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#423887] border border-purple-100 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>15+ Years Mechanical Mastery</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 border border-slate-700 shadow-xs">
                    ★ 99.4% Uptime Record
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Karimnagar Central HQ & Workshop
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 flex items-center justify-between">
                      <span>Gandhi Road Commercial Zone</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded">24/7 Hotline</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Stat Bar (Light, Architectural, Brand Colored Numbers) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  {stats.map((s, idx) => (
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

      {/* =========================================================================
          2. EXECUTIVE FOUNDER & STORY: DIRECT ACCOUNTABILITY & 4 PILLARS
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
              
              {/* Left Column: Founder Visual Card */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group card-glow">
                  <div className="relative h-80 sm:h-96 w-full">
                    <Image
                      src="/images/safety-panel.png"
                      alt="Ramesh Vilasagar Precision Engineering Setup"
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-3.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[#423887] text-[10px] font-black uppercase tracking-wider border border-purple-100 shadow-xs">
                      Engineering Leadership
                    </div>

                    {/* Founder Overlay Info */}
                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="text-[10px] uppercase tracking-widest text-[#863078] font-black bg-white px-2.5 py-0.5 rounded w-fit mb-1.5">
                        FOUNDER & PRINCIPAL ENGINEER
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        Ramesh Vilasagar
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        15+ years hands-on mastery in traction mechanics, VVVF controls, hydraulic systems, and certified hoistway structural erection.
                      </p>
                      
                      <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Direct Engineer Line:</span>
                        <a href="tel:9848480868" className="font-bold text-amber-300 hover:underline">
                          +91 98484 80868
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quality Accreditation Micro Strip */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200/90 text-xs text-slate-700 flex items-center gap-3 shadow-xs">
                  <span className="text-2xl">🏆</span>
                  <div className="leading-snug">
                    <strong className="block text-slate-900 font-bold">100% Engineer-Supervised Installations</strong>
                    Zero third-party handoffs. Every lift is physically calibrated by our senior engineers before handover.
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Vision & Philosophy */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#863078] border border-purple-100 text-xs font-bold uppercase tracking-wider">
                  <span>Founder&apos;s Engineering Creed</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Built on Mechanical Precision, Direct Transparency, and Zero Compromise.
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Elevators are the most safety-critical mechanical equipment in any building. When a lift breaks down or jerks, daily life and business stall immediately. <strong>Vision Lifts & Solutions</strong> was founded on a simple conviction: building owners in Telangana deserve <strong>direct personal access to qualified elevator engineers</strong>, transparent itemized pricing, and guaranteed rapid breakdown support — without waiting on corporate call centers.
                </p>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Over the past decade and a half, <strong>Ramesh Vilasagar</strong> has personally guided the hoistway alignment, bracket placement, and traction testing for over 500 projects across Karimnagar, Hyderabad, Warangal, and North Telangana. We don&apos;t just sell equipment; we take long-term ownership of passenger safety.
                </p>

                {/* Signed Founder Quote Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 border-l-4 border-l-[#863078] shadow-xs relative card-glow">
                  <span className="text-4xl text-[#863078]/20 font-serif absolute top-3 right-4 select-none">“</span>
                  <p className="italic text-slate-800 text-sm sm:text-base leading-relaxed relative z-10 font-medium">
                    &ldquo;Every lift we commission carries our personal reputation. We treat every single passenger cab as if our own family travels in it every day.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-purple-50">
                    <div>
                      <strong className="text-slate-900 block font-bold">Ramesh Vilasagar</strong>
                      <span className="text-slate-500">Founder & Principal Elevator Engineer</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                      Karimnagar, TS
                    </span>
                  </div>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {leadershipPillars.map((p, i) => (
                    <div key={i} className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#863078]/40 transition-all card-glow shadow-xs">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-lg">{p.icon}</span>
                        <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#863078] bg-purple-50 px-2 py-0.5 rounded">
                          {p.tag}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{p.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          3. REGIONAL STRENGTH: STATEWIDE 33-DISTRICT INFRASTRUCTURE
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Statewide Presence
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                Our Telangana Service & Installation Footprint
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Strategically stationed technical squads ensuring maximum uptime, emergency response within 30 minutes, and complete spare parts readiness across all 33 districts.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Regional Hub Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {regionalHubs.map((hub, i) => (
              <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.08}>
                <div className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between card-glow h-full hover:bg-white hover:border-[#863078]/50 transition-all">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xl">📍</span>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#423887] bg-white border border-purple-100 px-2 py-0.5 rounded-full shadow-xs">
                        {hub.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                      {hub.city}
                    </h3>

                    <div className="text-xs text-[#863078] font-semibold mb-2.5">
                      {hub.address}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {hub.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-500">Direct Line:</span>
                    <a
                      href="tel:9848480868"
                      className="text-[#423887] hover:text-[#863078] transition-colors"
                    >
                      {hub.contact}
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Statewide Emergency Hotline Strip */}
          <div className="mt-8 p-6 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold shrink-0 border border-emerald-500/30">
                📞
              </div>
              <div>
                <div className="text-xs text-slate-300 font-bold uppercase tracking-wider">
                  24/7 All-Telangana Emergency Breakdown Helpline
                </div>
                <div className="text-lg sm:text-2xl font-black text-white tracking-tight">
                  9700 123 878 / +91 98484 80868
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href="tel:9700123878"
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-black uppercase tracking-wider rounded-xl transition-all shadow-md"
                style={{ color: "#ffffff" }}
              >
                Call Hotline Now
              </a>
              <Link
                href="/telangana-network"
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl border border-slate-700 transition-all"
              >
                View 33 Districts Directory →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. SAFETY & COMPLIANCE WALL: IS 14665, NBC 2016 & RIGOROUS TESTING
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5">
              <ScrollReveal animation="fadeIn">
                <div className="relative h-96 sm:h-[420px] rounded-3xl overflow-hidden border border-slate-200 shadow-xl group card-glow bg-slate-900">
                  <Image
                    src="/images/cabin-study.png"
                    alt="Precision Elevator Cabin Structural Study"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider mb-1">
                      125% Load Tested
                    </div>
                    <div className="text-base font-bold">
                      Certified Precision Leveling within ±2mm
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Ensuring smooth, jerk-free transit for hospital stretchers, elderly residents, and high-frequency commercial passengers.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Compliance Specs */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal animation="fadeInUp">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                  Safety Governance & Quality Standards
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mt-2.5">
                  Engineered to Exceed National Safety Codes
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Every elevator manufactured or installed by Vision Lifts undergoes a 3-stage mechanical and electrical inspection before commissioning. We never compromise on passenger life safety:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
                  {complianceStandards.map((std, i) => (
                    <div key={i} className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs card-glow">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-lg">{std.icon}</span>
                        <span className="text-xs font-black text-[#423887]">{std.code}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900">{std.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{std.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Testing Protocol Box */}
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-start gap-3 mt-4">
                  <span className="text-xl text-[#863078]">🔍</span>
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong className="text-slate-900 font-bold block mb-0.5">Mandatory Pre-Commissioning Trial Protocol:</strong>
                    Includes 100 consecutive cycles of emergency power-cut ARD rescue simulation, progressive safety gear freefall test, and laser hoistway plumb verification.
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          5. 10+ YEARS TIMELINE & MILESTONES (2014 TO 2026)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Our Journey
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                10+ Years of Vertical Mobility Growth
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                From a dedicated workshop in Karimnagar to North Telangana&apos;s most trusted elevator enterprise.
              </p>
            </div>
          </ScrollReveal>

          {/* Modern Milestone Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.08}>
                <div className="bg-slate-50/70 p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between card-glow h-full hover:bg-white hover:border-[#863078]/60 transition-all group">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xl font-black text-[#423887] group-hover:text-[#863078] transition-colors">
                        {m.year}
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-wider text-[#863078] bg-purple-50 px-2 py-0.5 rounded">
                        {m.badge}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                      {m.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {m.desc}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-slate-200/80 text-[10px] font-semibold text-[#423887] bg-white p-2 rounded-lg shadow-2xs">
                    ✨ {m.highlight}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. EXECUTIVE CLOSING CTA BANNER
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
            
            {/* Background Decorative Graphic */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="space-y-2 max-w-2xl relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-white border border-white/20">
                Direct Engineering Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to engineer your building&apos;s elevator?
              </h2>
              <p className="text-slate-100 text-xs sm:text-sm leading-relaxed max-w-xl">
                Get a free hoistway laser site survey, detailed CAD shaft drawings, and itemized quotation directly from Ramesh Vilasagar and our senior technical team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSurveyOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                Book Free Site Survey →
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-black/30 hover:bg-black/40 text-white font-bold text-xs uppercase tracking-wider rounded-full border border-white/30 transition-all text-center"
              >
                Visit Karimnagar HQ
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Free Site Survey Modal */}
      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />

    </div>
  );
}
