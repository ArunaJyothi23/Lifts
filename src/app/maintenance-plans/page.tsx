"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function MaintenancePlansPage() {
  const plans = [
    {
      id: "preventive",
      title: "Preventive Care Scope",
      tagline: "Routine Inspection & Upkeep",
      badge: "Standard AMC",
      desc: "Designed for villas, low-rise residences, and independent apartments where regular scheduled lubrication and preventive care maintain peak safety.",
      features: [
        "Monthly comprehensive multi-point safety inspection",
        "Traction machine & governor lubrication",
        "Guide rail alignment & roller guide checks",
        "Door interlock & safety circuit testing",
        "Landing door leveling adjustment",
        "Written visit observation report",
      ],
      action: "Request Tailored Scope",
      link: "/service-request",
    },
    {
      id: "comprehensive",
      title: "Comprehensive Care Scope",
      tagline: "Parts & 24/7 Rapid Response",
      badge: "Most Popular",
      desc: "Zero-surprise maintenance coverage including critical consumable parts and round-the-clock emergency technician dispatch across Telangana.",
      features: [
        "Everything in Preventive Care Scope included",
        "24/7 Rapid Breakdown Rescue & Dispatch",
        "All electrical contacts, relays, and coils covered",
        "Door drive belts and roller replacements included",
        "Emergency light & ARD battery testing",
        "Annual technical safety audit & BIS compliance certificate",
      ],
      action: "Request Comprehensive AMC",
      link: "/quote-request",
      featured: true,
    },
    {
      id: "lifecycle",
      title: "Modernization & Lifecycle",
      tagline: "Upgrading Aging Elevators",
      badge: "Commercial & High Traffic",
      desc: "Engineered for lifts older than 10-15 years needing microprocessor controller retrofits, PMS gearless motors, or modern car door assemblies.",
      features: [
        "Full mechanical & electrical health audit",
        "Microprocessor VVVF controller upgrade",
        "Regenerative drive installation (saves up to 40% energy)",
        "Cabin interior refresh (TFT screen, hairline SS, LED)",
        "Automatic rescue device (ARD) integration",
        "Minimal downtime phased replacement",
      ],
      action: "Request Modernization Audit",
      link: "/site-survey",
    },
  ];

  const faqs = [
    {
      q: "Is there a fixed plan price published online?",
      a: "No. Because each elevator has a different age, drive type, number of stops, and passenger capacity, pricing is tailored specifically to your equipment to ensure fair, transparent AMC terms.",
    },
    {
      q: "What is your typical emergency breakdown response time in Telangana?",
      a: "Our central Karimnagar dispatch desk and mobile technicians across Warangal, Nizamabad, and Hyderabad provide rapid on-site assistance with direct 24/7 phone access.",
    },
    {
      q: "Does Vision Lifts maintain third-party or older elevators?",
      a: "Yes. Our senior engineers have decades of multi-brand engineering expertise and can service, repair, and modernize virtually any make or model of elevator.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] pt-6 sm:pt-8 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#863078] font-semibold">Maintenance Plans</span>
        </div>

        <div className="mb-12">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#863078] mb-2">
            VISION LIFTS & SOLUTIONS / AMC & SUPPORT
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Elevator Maintenance & AMC Plans
          </h1>
          <p className="mt-3 text-base text-slate-600 max-w-3xl leading-relaxed">
            Care matched to your equipment. Discuss a tailored maintenance scope with clear responsibilities, preventative visits, and transparent exclusions.
          </p>
        </div>

        {/* Plan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all ${
                p.featured
                  ? "bg-gradient-to-b from-white to-purple-50/40 border-2 border-[#863078] shadow-lg shadow-[#863078]/10 relative"
                  : "bg-white border border-slate-200/80 shadow-xs"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
                  {p.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#863078]">
                    {p.tagline}
                  </span>
                  {!p.featured && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {p.badge}
                    </span>
                  )}
                </div>

                <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                  {p.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {p.desc}
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    What is covered
                  </div>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {p.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-emerald-600 font-bold">✓</span>
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={p.link}
                  className={`w-full py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center transition-all ${
                    p.featured
                      ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white hover:opacity-95 shadow-md shadow-[#863078]/25"
                      : "bg-slate-900 text-white hover:bg-slate-800"
                  }`}
                >
                  {p.action} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6">
            Frequently Asked Questions about Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-8 bg-[#071d27] text-white border border-[#143e4f] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight">
              Have an urgent breakdown or question?
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Speak directly with our technical support engineers in Karimnagar.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Call {COMPANY_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20would%20like%20to%20discuss%20an%20AMC%20plan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
