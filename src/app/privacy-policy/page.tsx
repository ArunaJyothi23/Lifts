"use client";

import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] pt-6 sm:pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#863078] font-semibold">Privacy Policy</span>
        </div>

        <div className="mb-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#863078] mb-2">
            VISION LIFTS & SOLUTIONS / LEGAL
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Last Updated: October 2026 · Demonstrating commitment to client data integrity.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you submit an enquiry through our Quote Request, Book a Site Survey, Service Ticket, or B2B Bulk Enquiry forms, we collect information including your name, contact phone number, email address, building location, and technical lift requirements.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              Your information is exclusively utilized for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600">
              <li>Preparing accurate engineering proposals, civil shaft recommendations, and commercial estimates.</li>
              <li>Scheduling on-site physical inspections by our elevator specialists.</li>
              <li>Coordinating preventative maintenance visits and 24/7 breakdown dispatch.</li>
              <li>Communicating via phone, WhatsApp, or email per your indicated preference.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">3. Zero-Spam & Non-Disclosure Commitment</h2>
            <p>
              Vision Lifts & Solutions does not sell, rent, lease, or distribute customer details to third-party marketing companies. Data is restricted to engineering, installation, and maintenance operations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base font-bold text-slate-900">4. Contact & Inquiries</h2>
            <p>
              For data privacy inquiries or to update your registered contact details:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs">
              <div className="font-bold text-slate-900">{COMPANY_INFO.name}</div>
              <div>Gandhi Road, Karimnagar, Telangana - 505001</div>
              <div>Email: {COMPANY_INFO.email} · Phone: {COMPANY_INFO.phone}</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
