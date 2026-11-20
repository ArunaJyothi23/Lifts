"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function AboutPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);

  const stats = [
    { value: "2014", label: "Operating Since", sub: "Founded in Telangana" },
    { value: "500+", label: "Landmark Sites", sub: "Villas, towers & healthcare" },
    { value: "33", label: "Districts Covered", sub: "Statewide technical presence" },
    { value: "<30m", label: "Emergency SLA", sub: "Direct mobile technician dispatch" },
  ];

  // The 8-step customer guidance journey as requested in the requirements document
  const customerJourneySteps = [
    {
      step: "01",
      title: "First Enquiry & Consultation",
      desc: "We discuss your architectural vision, floor heights, passenger volume, and building constraints to understand exact project requirements.",
    },
    {
      step: "02",
      title: "Precision Hoistway Laser Survey",
      desc: "Our senior field engineers visit your site to record laser measurements of pit depth, overhead clearance, and plumb line accuracy.",
    },
    {
      step: "03",
      title: "Elevator Selection & Civil Layout",
      desc: "We recommend the ideal configuration—from ultra-shallow 150mm pitless villa lifts to high-speed commercial MRL or bed lifts.",
    },
    {
      step: "04",
      title: "Engineering Planning & Blueprint",
      desc: "Custom CAD shaft drawings and civil load distribution data are shared directly with your architect and structural contractor.",
    },
    {
      step: "05",
      title: "Precision Installation by In-House Crew",
      desc: "Certified full-time engineers erect guide rails, counterweight frames, PMSM gearless machines, and landing door headers with zero subcontracting.",
    },
    {
      step: "06",
      title: "Safety Testing & Statutory Audit",
      desc: "Every system undergoes 125% load drop testing, ARD power-loss evacuation trials, and statutory electrical inspectorate verification.",
    },
    {
      step: "07",
      title: "Handover & Passenger Familiarization",
      desc: "Formal demonstration of cabin controls, emergency intercom, door light curtain sensors, and safe operation for residents or facility staff.",
    },
    {
      step: "08",
      title: "Lifecycle After-Sales Support & AMC",
      desc: "Continuous preventive maintenance, rapid 24/7 breakdown helpline, and genuine spare parts stocked at our Karimnagar central workshop.",
    },
  ];

  // Company Milestones
  const milestones = [
    {
      year: "2014",
      badge: "Founding Era",
      title: "Foundation in Karimnagar",
      desc: "Vision Lifts & Solutions was established to provide direct, engineer-led vertical mobility solutions across Telangana.",
      highlight: "First 25 residential and clinic elevators successfully commissioned.",
    },
    {
      year: "2017",
      badge: "Commercial Expansion",
      title: "Commercial Towers & Hospital Lifts",
      desc: "Expanded into high-speed gearless passenger elevators and NBC-compliant stretcher bed elevators for medical plazas.",
      highlight: "High-speed MRL configurations with ±2mm leveling accuracy.",
    },
    {
      year: "2020",
      badge: "B2B Production",
      title: "Component Hub & Spares Warehouse",
      desc: "Inaugurated dedicated component supply division with bulk inventory of PMSM gearless traction motors, controllers, and door systems.",
      highlight: "Stocked central depot ensuring rapid spares replacement.",
    },
    {
      year: "2023",
      badge: "Architectural Luxe",
      title: "Pitless & Single-Phase Innovation",
      desc: "Engineered ultra-shallow 150mm pit and single-phase 220V residential elevators tailored for luxury duplexes and retrofit homes.",
      highlight: "Zero rooftop machine rooms required.",
    },
    {
      year: "2026",
      badge: "Statewide Network",
      title: "500+ Operational Sites & 24/7 Command",
      desc: "Supporting over 500 active elevator installations across all 33 districts of Telangana with automated health monitoring and mobile vans.",
      highlight: "99.4% documented statewide operational uptime.",
    },
  ];

  // Two verified branches
  const branchLocations = [
    {
      city: "Karimnagar Central HQ & Workshop",
      address: "0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar, Telangana – 505001",
      role: "Central Engineering Design Studio, Manufacturing Workshop, B2B Components Warehouse & Testing Tower",
      status: "Central Headquarters",
      badge: "Central HQ",
      phone: "9700 123 878",
      mapQuery: "0-5-240,+Kisan+Nagar,+Near+Surya+Paper,+Karimnagar,+Telangana+505001",
    },
    {
      city: "Hyderabad Regional Hub",
      address: "Hyderabad Regional Hub, Telangana",
      role: "Regional Engineering Consultation, Luxury Villa Lifts Coordination & High-Rise Commercial Desk",
      status: "Regional Operations Hub",
      badge: "Regional Hub",
      phone: "9700 123 878",
      mapQuery: "Hyderabad,+Telangana",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden font-sans text-slate-800 selection:bg-[#a22b51] selection:text-white">
      
      {/* =========================================================================
          1. HERO SECTION: CLEAN, ELEGANT ARCHITECTURAL SHOWCASE
          Simple heading "About Vision Lifts & Solutions" (No breadcrumb as requested)
          ========================================================================= */}
      <section className="bg-white border-b border-slate-100 pt-8 pb-12 sm:pt-12 sm:pb-16 relative overflow-hidden">
        {/* Ambient Glow Orbs */}
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-100/50 animate-pulse-slow pointer-events-none" />
        <div className="ambient-orb w-96 h-96 top-1/3 -right-20 bg-rose-100/40 animate-pulse-slow pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-center">
            
            {/* Left Column: Brand Story & Executive Intro */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 animate-fade-in-up">
              
              {/* Verified Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/90 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#423887] uppercase tracking-wider shadow-2xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Operating Since 2014 · Telangana, India</span>
              </div>

              {/* Simple Main Heading as Requested */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                About Vision Lifts & <span className="text-shimmer-brand font-black">Solutions</span>
              </h1>

              {/* Dynamic Typewriter Text Loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Core Values:</span>
                <TypewriterText
                  words={[
                    "Operating Since 2014 with Uncompromising Engineering Integrity",
                    "Direct Field Engineer Accountability — Zero Third-Party Subcontracting",
                    "Over 500+ Landmark Sites Operational Across Telangana",
                    "IS 14665 & NBC 2016 Certified Life-Safety Standards",
                    "Karimnagar Central HQ & Hyderabad Regional Hub",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Company Concept & Background */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                Founded with a mission to bring engineering rigor and direct accountability to vertical transportation, <strong>Vision Lifts & Solutions</strong> has been designing, manufacturing, and installing precision elevators across Telangana since 2014. We bridge the gap between imported tier-1 component standards and local, rapid service responsiveness.
              </p>

              {/* Hero Call-To-Action Cluster */}
              <div className="pt-1.5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>
                    Book Free Hoistway Survey →
                  </span>
                </button>

                <a
                  href="tel:9700123878"
                  className="px-6 py-3.5 bg-gradient-to-r from-[#2e1236] to-[#1c143d] hover:opacity-95 text-white font-black text-xs uppercase tracking-wider rounded-full transition-all inline-flex items-center gap-2 shadow-sm active:scale-95 border border-purple-800/40"
                  style={{ color: "#ffffff" }}
                >
                  <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ color: "#ffffff" }}>
                    Call 9700 123 878 Direct
                  </span>
                </a>
              </div>

              {/* Trust Badges Row */}
              <div className="pt-3 pb-2 sm:pb-0 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
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

            {/* Right Column: Architectural Light Showcase Card */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative bg-white/95 rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden card-glow group backdrop-blur-sm">
                
                {/* Image Frame */}
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
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none z-10">
                    <div className="px-2.5 sm:px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#423887] border border-purple-100 shadow-xs flex items-center gap-1.5 shrink min-w-0">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                      <span className="truncate">Since 2014</span>
                    </div>

                    <div className="shrink-0 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 border border-slate-700 shadow-xs">
                      ★ 99.4% Uptime
                    </div>
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Karimnagar Central HQ & Workshop
                    </div>
                    <div className="text-xs sm:text-sm font-extrabold text-white mt-0.5 flex items-center justify-between">
                      <span className="truncate pr-2">Kisan Nagar, Near Surya Paper</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded shrink-0">24/7 Support</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Trust Stat Bar */}
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
          2. COMPANY CONCEPT & BACKGROUND: WHY WE STARTED
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full">
                Background & Origin
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                Why Vision Lifts was founded
              </h2>
              <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
                Elevators are among the most critical mechanical assets in any residential or commercial structure. When a lift falters, mobility ceases. We recognized three major customer pain points in the regional elevator market:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#863078] flex items-center justify-center mb-4 border border-purple-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">The Call Center Frustration</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Building owners were tired of bureaucratic call centers and delayed technician dispatches during emergencies. Vision Lifts offers direct access to the actual elevator engineers who built the system.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-[#a22b51] flex items-center justify-center mb-4 border border-rose-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Space & Pit Constraints</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Conventional lifts required massive concrete pits and unsightly rooftop machine rooms. We engineered near-pitless (150mm) and single-phase solutions tailored for duplexes and existing buildings.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs hover:border-purple-300 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#423887] flex items-center justify-center mb-4 border border-indigo-100">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">Zero Subcontracting Safety</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Many operators outsource installation to daily-wage mechanics. Vision Lifts maintains a strict in-house policy: every rail, motor, and controller is aligned and tested by our own certified engineering staff.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          3. SINGLE CONCISE LEADERSHIP PROFILE (Founder Mentioned ONCE Here)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
              
              {/* Founder Image Card */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group card-glow">
                  <div className="relative h-80 sm:h-96 w-full">
                    <Image
                      src="/images/safety-panel.png"
                      alt="Engineering Leadership Profile"
                      fill
                      className="object-cover group-hover:scale-104 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4 px-3.5 py-1 bg-white/95 backdrop-blur-md rounded-full text-[#423887] text-[10px] font-black uppercase tracking-wider border border-purple-100 shadow-xs">
                      Engineering Leadership
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <div className="text-[10px] uppercase tracking-widest text-[#863078] font-black bg-white px-2.5 py-0.5 rounded w-fit mb-1.5">
                        FOUNDER & PRINCIPAL ENGINEER
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        Ramesh Vilasagar
                      </h3>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        Operating Since 2014 with extensive hands-on expertise in traction mechanics, VVVF microprocessor controls, hydraulic systems, and certified hoistway structural erection.
                      </p>
                      
                      <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Direct Engineer Consultation:</span>
                        <a href="tel:9848480868" className="font-bold text-amber-300 hover:underline">
                          +91 98484 80868
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Creed & Company Engineering Culture */}
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-[#863078] border border-purple-100 text-xs font-bold uppercase tracking-wider">
                  <span>Leadership & Engineering Creed</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Mechanical Precision, Direct Transparency, and Uncompromising Safety.
                </h2>

                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  When founding the company in 2014, the driving philosophy was straightforward: treat every elevator hoistway as if our own families would step into that cabin daily. We take full ownership of the lifecycle—from blueprint planning to round-the-clock maintenance.
                </p>

                {/* Signed Quote Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-purple-100 border-l-4 border-l-[#863078] shadow-xs relative card-glow">
                  <span className="text-4xl text-[#863078]/20 font-serif absolute top-3 right-4 select-none">“</span>
                  <p className="italic text-slate-800 text-sm sm:text-base leading-relaxed relative z-10 font-medium">
                    &ldquo;Every lift we commission carries our collective reputation. We measure success not just in floors climbed, but in the trust earned from families and businesses across Telangana.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-purple-50">
                    <div>
                      <strong className="text-slate-900 block font-bold">Ramesh Vilasagar</strong>
                      <span className="text-slate-500">Founder & Principal Elevator Engineer</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                      Karimnagar & Hyderabad
                    </span>
                  </div>
                </div>

                {/* Core Commitments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#863078]/40 transition-all card-glow shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-purple-50 text-[#863078] flex items-center justify-center mb-1.5 border border-purple-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Direct Engineering Access</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Speak directly with senior engineers who understand your shaft mechanics.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-[#863078]/40 transition-all card-glow shadow-xs">
                    <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#423887] flex items-center justify-center mb-1.5 border border-indigo-100">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Certified In-House Crew</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Zero third-party handoffs. All bracket erection and alignment is performed in-house.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          4. CUSTOMER GUIDANCE JOURNEY: 8-STEP LIFECYCLE (As Mandated in Docx)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full">
                Customer Guidance Steps
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
                How we guide your elevator project from concept to handover
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Planning a lift can feel complex. Our structured 8-step roadmap gives architects, builders, and homeowners clear direction at every milestone.
              </p>
            </div>
          </ScrollReveal>

          {/* 8 Step Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {customerJourneySteps.map((j, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.06}>
                <div className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:border-purple-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="w-8 h-8 rounded-xl bg-purple-50 text-[#863078] flex items-center justify-center font-black text-xs border border-purple-100 group-hover:bg-[#863078] group-hover:text-white transition-all duration-300">
                        {j.step}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#863078] transition-colors">
                        Milestone {j.step}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 group-hover:text-[#423887] transition-colors leading-snug">
                      {j.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {j.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                    <span className="text-[#863078]">Step {j.step}</span>
                    <span className="text-slate-400 font-semibold">Standard Process</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. VISION, MISSION, VALUES & LONG-TERM GOALS
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Guiding Principles
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                Our Vision, Mission & Goals
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                The foundational pillars driving our engineering team each day.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Vision */}
            <div className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:bg-white hover:border-[#863078]/50 hover:shadow-lg transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#863078] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="text-[11px] font-black uppercase tracking-wider text-[#863078] mb-1">
                  Our Vision
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  The Benchmark in Vertical Mobility
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To set the benchmark for elevator safety, architectural elegance, and customer responsiveness throughout South India, making reliable vertical transit accessible to every home and enterprise.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:bg-white hover:border-[#423887]/50 hover:shadow-lg transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-[#423887] flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-[11px] font-black uppercase tracking-wider text-[#423887] mb-1">
                  Our Mission
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Engineered for Every Journey
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  To deliver precision-engineered, whisper-quiet, and energy-efficient elevators backed by dedicated in-house technical brigades, transparent pricing, and zero tolerance for mechanical compromise.
                </p>
              </div>
            </div>

            {/* Long-Term Goals */}
            <div className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/90 shadow-xs flex flex-col justify-between hover:bg-white hover:border-emerald-500/50 hover:shadow-lg transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-[11px] font-black uppercase tracking-wider text-emerald-700 mb-1">
                  Long-Term Goals
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">
                  Sustainable & Smart Transit
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pioneering single-phase pitless regenerative drives for zero-footprint homes, expanding real-time IoT condition monitoring, and extending rapid mobile support across all 33 districts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. COMPANY JOURNEY TIMELINE (Operating Since 2014)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Company Journey
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Operating Since 2014
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm mt-1.5">
                A concise chronicle of consistent vertical engineering growth and landmark installations.
              </p>
            </div>
          </ScrollReveal>

          {/* Milestone Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, i) => (
              <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.08}>
                <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between card-glow h-full hover:border-[#863078]/60 transition-all duration-500 group">
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

                  <div className="pt-2.5 border-t border-slate-100 text-[10px] font-semibold text-[#423887] bg-slate-50 p-2 rounded-lg">
                    ✨ {m.highlight}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TWO BRANCH LOCATIONS: KARIMNAGAR CENTRAL HQ & HYDERABAD REGIONAL HUB
          (Matches Document Requirements 4.2 & 6 Exactly)
          ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-black uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3.5 py-1.5 rounded-full">
                Headquarters & Regional Presence
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2.5 tracking-tight">
                Our Two Branch Locations
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed">
                Operating with direct engineering control from our Central Headquarters in Karimnagar and regional support in Hyderabad.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {branchLocations.map((branch, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.1}>
                <div className="bg-slate-50/70 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm flex flex-col justify-between h-full hover:bg-white hover:border-[#863078]/50 hover:shadow-xl transition-all duration-500 group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#863078] flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-[#423887] bg-white border border-purple-200 px-3 py-1 rounded-full shadow-2xs">
                        {branch.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-2">
                      {branch.city}
                    </h3>

                    <div className="text-xs sm:text-sm font-bold text-[#863078] mb-3 flex items-start gap-1.5">
                      <svg className="w-4 h-4 shrink-0 mt-0.5 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{branch.address}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {branch.role}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px] uppercase font-bold">Helpline</span>
                      <a href={`tel:${branch.phone}`} className="font-extrabold text-[#423887] text-sm hover:underline inline-flex items-center gap-1.5 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>{branch.phone}</span>
                      </a>
                    </div>

                    <a
                      href={`https://maps.google.com/?q=${branch.mapQuery}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white hover:bg-purple-50 text-[#863078] border border-purple-200 rounded-xl font-bold text-xs shadow-2xs transition-all flex items-center gap-1"
                    >
                      <span>Directions in Maps ↗</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. EXECUTIVE CLOSING CTA BANNER (Rich Brand Velvet Gradient, No Pitch Black)
          ========================================================================= */}
      <section className="py-14 sm:py-16 bg-white relative">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#2e1236] via-[#1c143d] to-[#251333] text-white shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 border border-purple-400/20">
            
            {/* Subtle Glow Orbs */}
            <div className="ambient-orb w-80 h-80 -right-20 -bottom-20 bg-[#a22b51]/25 pointer-events-none" />
            <div className="ambient-orb w-80 h-80 -left-20 -top-20 bg-[#423887]/30 pointer-events-none" />

            <div className="space-y-2 max-w-2xl relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-extrabold uppercase tracking-wider text-purple-200 border border-white/20">
                Direct Engineering Consultation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                Ready to engineer your building&apos;s elevator?
              </h2>
              <p className="text-purple-100 text-xs sm:text-sm leading-relaxed max-w-xl">
                Get a free hoistway laser site survey, detailed CAD shaft drawings, and itemized quotation directly from our senior technical team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 relative z-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => setSurveyOpen(true)}
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white hover:opacity-95 font-extrabold text-xs uppercase tracking-wider rounded-full shadow-lg transition-all active:scale-95 cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                <span style={{ color: "#ffffff" }}>Book Free Site Survey →</span>
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-bold text-xs uppercase tracking-wider rounded-full border border-white/30 transition-all text-center"
                style={{ color: "#ffffff" }}
              >
                <span style={{ color: "#ffffff" }}>Contact Branches</span>
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
