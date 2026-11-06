"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] pt-6 sm:pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#863078] font-semibold">Terms & Conditions</span>
        </div>

        <div className="mb-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#863078] mb-2">
            VISION LIFTS & SOLUTIONS / LEGAL
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Engineering standards, site survey conditions, and service agreements.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">1. Engineering & Compliance Standards</h2>
            <p>
              All elevator equipment manufactured, supplied, and installed by Vision Lifts & Solutions is engineered in strict accordance with Bureau of Indian Standards (BIS) IS 14665 (Parts 1 through 5) and National Building Code of India (NBC 2016) elevator safety guidelines.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">2. Site Feasibility & Civil Responsibilities</h2>
            <p>
              Free site surveys provide preliminary dimensional advice and technical feasibility. The client or project builder is responsible for the civil shaft, pit depth, overhead headroom, three-phase power supply, and machine room ventilation per agreed dimensional layouts prior to elevator erection.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">3. Annual Maintenance Contracts (AMC)</h2>
            <p>
              Routine AMC service terms, visit intervals, breakdown response hours, and covered replacement parts are defined specifically in the executed service agreement. Breakdown dispatch operates 24/7 across Telangana.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">4. Applicable Jurisdiction</h2>
            <p>
              All commercial agreements and warranty stipulations are governed by the laws of India and subject to the exclusive jurisdiction of the competent courts in Karimnagar, Telangana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
