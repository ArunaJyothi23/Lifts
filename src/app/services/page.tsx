"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ServicesPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);

  const servicesList = [
    {
      id: "design-planning",
      title: "Design & Civil Engineering Consultation",
      subtitle: "Zero-error shaft blueprinting, pit optimization and structural guidance.",
      desc: "Before any construction or civil cutting begins, our Karimnagar engineering team provides CAD drawings, beam loading calculations, pit depth recommendations, and single/three-phase electrical load specifications.",
      features: [
        "Free on-site shaft dimension measurement",
        "Pitless and low-overhead structural solutions",
        "Load-bearing wall and counterweight clearance analysis",
        "Electrical panel and single/3-phase cabling coordination",
      ],
      icon: "📐",
    },
    {
      id: "installation",
      title: "Turnkey Installation & Commissioning",
      subtitle: "Laser-aligned guide rails, certified technicians, and zero-compromise assembly.",
      desc: "Our installation teams strictly follow IS 14665 standards. From mechanical hoisting of the motor and counterweight to multi-point plumb line alignment and safety brake calibration, every step undergoes three tiers of internal quality audits.",
      features: [
        "Laser-guided plumb rail alignment for zero vibration",
        "Strict compliance with Bureau of Indian Standards (IS 14665)",
        "Pre-commissioning 125% overload testing and brake burnishing",
        "Complete government lift inspector certification documentation",
      ],
      icon: "⚙️",
    },
    {
      id: "modernization",
      title: "Elevator Modernization & Retrofitting",
      subtitle: "Transform ageing, jerky, high-power lifts into smooth, modern gearless elevators.",
      desc: "Is your 10+ year old elevator consuming excessive power, breaking down frequently, or failing to level flush with the floor? We replace obsolete geared motors and relay control panels with whisper-quiet PMSM gearless machines and smart micro-processor VVVF controllers without altering the existing civil shaft.",
      features: [
        "Up to 45% reduction in electricity consumption",
        "Elimination of floor levelling jerks and tripping hazards",
        "Addition of modern Automatic Rescue Device (ARD) for power cuts",
        "Aesthetic cabin redesign (Rose Gold / Titanium / LED false ceiling)",
      ],
      icon: "🔄",
    },
    {
      id: "24-7-emergency",
      title: "24/7 Breakdown & Emergency Rescue",
      subtitle: "Direct Karimnagar-based technical vans with average 30-minute response time.",
      desc: "Lift stoppages demand immediate attention. While national brands route your emergency calls through distant customer centers, Vision Lifts dispatches local, certified technicians stationed right in Karimnagar, Warangal, and Nizamabad.",
      features: [
        "Guaranteed 30-minute rapid emergency response in Karimnagar",
        "Fully stocked service vans with common contactors, relays & sensors",
        "Two-way intercom integration with our 24/7 helpline",
        "Direct founder escalation to Ramesh Vilasagar (+91 9848480868)",
      ],
      icon: "🚨",
      isEmergency: true,
    },
  ];

  const amcPlans = [
    {
      name: "Preventive Non-Comprehensive AMC",
      badge: "Standard Care",
      desc: "Designed for residential villas and independent duplexes seeking periodic preventive maintenance, lubrication, and safety audits.",
      features: [
        "Monthly 24-point comprehensive safety checkup",
        "Precision motor & guide rail lubrication",
        "Door sensor & interlock adjustment",
        "24/7 priority emergency breakdown support",
        "Lubricants & cleaning consumables included",
        "Spare parts billed at transparent factory rates",
      ],
      idealFor: "Villas, Duplexes, Low-Traffic Residential Buildings",
    },
    {
      name: "Comprehensive All-Inclusive AMC",
      badge: "Zero-Downtime Guarantee",
      desc: "Complete coverage for commercial office complexes, shopping centers, apartments, and multi-speciality hospitals.",
      features: [
        "Bi-weekly / Monthly scheduled preventive maintenance",
        "100% parts replacement included (contactor, relays, guide shoes, ropes)",
        "Motor & drive inverter coverage under warranty",
        "Free Automatic Rescue Device (ARD) battery testing & upkeep",
        "Zero charge for emergency breakdown visits",
        "Dedicated senior technician assigned to your property",
      ],
      idealFor: "Commercial Towers, Hospitals, High-Rise Apartments, Factories",
    },
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
            
            {/* Left Column: Service Capabilities & Actions */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-4.5">
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-[#423887] font-bold">Services & AMC</span>
              </div>

              {/* Verified Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#863078] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>Lifecycle Engineering & AMC Support</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[50px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Elevator services &{" "}
                <span className="text-shimmer-brand font-black">AMC maintenance.</span>
              </h1>

              {/* Dynamic Typewriter text loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Field Support Capabilities:</span>
                <TypewriterText
                  words={[
                    "24/7 Rapid Breakdown Response (<30 Min SLA)",
                    "Comprehensive Spares-Included AMC Contracts",
                    "PMSM Energy-Saving Gearless Modernization",
                    "Turnkey IS 14665 Certified Hoistway Erection",
                    "Zero-Vibration Laser Guide Rail Plumb Alignment",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Executive Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                From initial architectural shaft planning to certified installation, complete modernization, and 24/7 round-the-clock emergency breakdown response across all 33 districts of Telangana.
              </p>

              {/* Action Buttons Cluster (Guaranteed High-Contrast White Text) */}
              <div className="pt-1.5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSurveyOpen(true)}
                  className="btn-sheen px-6 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider rounded-full shadow-md shadow-[#863078]/25 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
                  style={{ color: "#ffffff" }}
                >
                  <span style={{ color: "#ffffff" }}>Book AMC / Site Inspection →</span>
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
                  <span>&lt;30m Emergency SLA</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>100% In-House Technicians</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Stocked OEM Spares Depot</span>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Rapid Service Showcase Card */}
            <div className="lg:col-span-5 animate-fade-in-up stagger-2">
              <div className="relative bg-white/95 rounded-3xl p-4 sm:p-5 shadow-xl border border-slate-200/90 overflow-hidden card-glow group backdrop-blur-sm">
                
                {/* Elevated Image Frame */}
                <div className="relative h-64 sm:h-72 xl:h-80 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-100 bg-slate-900">
                  <Image
                    src="/images/safety-panel.png"
                    alt="Vision Lifts Rapid Service Dispatch Fleet"
                    fill
                    className="object-cover group-hover:scale-104 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Floating Badges */}
                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-[10px] font-black text-[#423887] border border-purple-100 shadow-xs flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>24/7 Rapid Emergency Dispatch</span>
                  </div>

                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-bold text-amber-300 border border-slate-700 shadow-xs">
                    &lt; 30m Response SLA
                  </div>

                  {/* Bottom Image Overlay Strip */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                      Preventive & Corrective Engineering
                    </div>
                    <div className="text-sm sm:text-base font-extrabold text-white mt-0.5 flex items-center justify-between">
                      <span>Full Comprehensive & Non-Comp AMC</span>
                      <span className="text-[10px] font-bold text-emerald-400 bg-black/60 px-2 py-0.5 rounded">All 33 Districts</span>
                    </div>
                  </div>
                </div>

                {/* 4-Stat Architectural Spec Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3">
                  {[
                    { value: "<30m", label: "Karimnagar SLA" },
                    { value: "24/7", label: "Hotline Support" },
                    { value: "500+", label: "Active AMC Lifts" },
                    { value: "100%", label: "Genuine Spares" },
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

      {/* Core Services Breakdown with Staggered ScrollReveal */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((srv, idx) => (
              <ScrollReveal key={srv.id} animation="fadeInUp" delay={idx * 0.1}>
                <div
                  className={`p-8 rounded-3xl border shadow-xs card-glow transition-all flex flex-col justify-between h-full ${
                    srv.isEmergency
                      ? "bg-gradient-to-br from-rose-50/40 via-white to-purple-50/40 border-rose-200"
                      : "bg-slate-50/70 border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-white text-2xl flex items-center justify-center shadow-xs border border-slate-200">
                        {srv.icon}
                      </div>
                      {srv.isEmergency && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-[10px] font-extrabold uppercase tracking-wider">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-600"></span>
                          </span>
                          Live 24/7 Active
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {srv.title}
                    </h3>
                    <div className="text-xs text-[#423887] font-semibold mb-3">
                      {srv.subtitle}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="bg-white p-4 rounded-2xl border border-slate-200 mb-6 shadow-2xs">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Key Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {srv.features.map((feat, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSurveyOpen(true)}
                      className="btn-sheen w-full py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-sm cursor-pointer"
                    >
                      Enquire for {srv.title} →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* AMC Maintenance Contract Tiers */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Annual Maintenance Contracts (AMC)
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Guaranteed Uptime for Your Elevators
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                We service and maintain all makes and models of elevators across Karimnagar and Telangana, regardless of original manufacturer.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {amcPlans.map((plan, idx) => (
              <ScrollReveal key={idx} animation="fadeInUp" delay={idx * 0.15}>
                <div
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between card-glow h-full"
                >
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-purple-50 text-[#423887] border border-purple-100">
                      {plan.badge}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <p className="text-xs text-slate-500 mb-6">
                      {plan.desc}
                    </p>

                    <div className="space-y-3 mb-8">
                      {plan.features.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="p-3 rounded-2xl text-xs font-semibold mb-4 bg-slate-50 text-slate-700 border border-slate-200">
                      Ideal for: {plan.idealFor}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSurveyOpen(true)}
                      className="btn-sheen w-full py-3 rounded-full font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white shadow-sm transition-all cursor-pointer"
                    >
                      Get AMC Quote for Your Building
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Emergency 24/7 Hotline Strip */}
          <ScrollReveal animation="scaleUp" delay={0.2}>
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-5 max-w-5xl mx-auto shadow-xl card-glow border border-slate-800">
              <div className="flex items-center gap-4">
                <span className="text-3xl p-3 bg-white/10 rounded-2xl">🚨</span>
                <div>
                  <div className="font-extrabold text-base sm:text-lg">Elevator Breakdown Emergency?</div>
                  <div className="text-xs text-slate-300">Our Karimnagar technical response van is on call 24 hours a day, 365 days a year.</div>
                </div>
              </div>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="btn-sheen px-7 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow transition-all whitespace-nowrap"
              >
                Emergency Call: {COMPANY_INFO.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
