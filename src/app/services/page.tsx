"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";

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
      {/* Page Header Banner (White Background with Ambient Glow) */}
      <section className="bg-white border-b border-slate-100 py-10 sm:py-14 relative overflow-hidden animate-fade-in-up">
        <div className="ambient-orb w-96 h-96 -top-20 -left-20 bg-purple-200/35 animate-pulse-slow" />
        <div className="ambient-orb w-80 h-80 top-1/2 -right-16 bg-rose-200/25 animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#423887] font-bold">Services & AMC</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#863078] animate-pulse" />
              Lifecycle Engineering Support
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Elevator services & <span className="text-shimmer-brand">AMC maintenance.</span>
            </h1>

            {/* Dynamic Typewriter text loading */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-2xl w-fit shadow-2xs">
              <span className="text-slate-400 font-medium">Field support capabilities:</span>
              <TypewriterText
                words={[
                  "24/7 Breakdown Response < 30 Minutes",
                  "Comprehensive Spares-Included AMC Contracts",
                  "PMSM Energy-Saving Gearless Modernization",
                  "Turnkey IS 14665 Certified Erection",
                  "Zero-Vibration Laser Plumb Line Alignment",
                ]}
                className="text-[#423887] font-extrabold"
                cursorClassName="bg-[#863078]"
              />
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              From initial architectural shaft planning to certified installation, complete modernization, and 24/7 round-the-clock emergency breakdown response across Telangana.
            </p>
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
