"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "Senior Elevator Installation Engineer",
    experience: "3-5 years",
    city: "Karimnagar",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const openings = [
    {
      title: "Senior Elevator Installation Engineer",
      location: "Karimnagar & Hyderabad, Telangana",
      type: "Full-Time",
      experience: "3+ Years in Traction / MRL Elevators",
      desc: "Lead hoistway mechanical alignment, guide rail erection, machine room placement, and testing under IS 14665 standards.",
    },
    {
      title: "Elevator Service & Maintenance Technician",
      location: "Karimnagar / Warangal / Nizamabad",
      type: "Full-Time",
      experience: "2+ Years in AMC / Preventive Maintenance",
      desc: "Perform 24-point routine elevator inspections, lubrication, safety brake testing, and swift breakdown resolution.",
    },
    {
      title: "AutoCAD Hoistway Drafter & Civil Coordinator",
      location: "Karimnagar Head Office",
      type: "Full-Time",
      experience: "1+ Years in Building CAD / GA Drawings",
      desc: "Create 2D and 3D GA drawings, pit depth and overhead clearance layouts, collaborating with architects and structural engineers.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfcfe] text-slate-800 pt-6 sm:pt-8 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-[#423887] transition-colors">Home</Link>
          <span className="text-slate-300">/</span>
          <span className="text-[#863078] font-semibold">Careers</span>
        </nav>

        {/* Hero Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold uppercase tracking-wider text-[#863078] mb-3">
            JOIN VISION LIFTS & SOLUTIONS
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Build the Future of Vertical Mobility
          </h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            We are expanding our engineering team across Telangana. Join a company dedicated to uncompromising elevator safety, precision engineering, and customer trust.
          </p>
        </div>

        {/* Open Positions List */}
        <div className="mb-14 space-y-4">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Open Engineering Positions</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {openings.map((job, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:border-[#863078]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#863078] text-[10px] font-bold uppercase tracking-wider">
                      {job.type}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-medium">{job.location}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{job.desc}</p>
                  <div className="text-[11px] text-slate-500 font-semibold pt-1">
                    Requirement: {job.experience}
                  </div>
                </div>

                <a
                  href={`mailto:${COMPANY_INFO.email}?subject=Job Application: ${encodeURIComponent(job.title)}`}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider rounded-xl text-center shrink-0 shadow-xs transition-opacity"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Application Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-slate-900">Application Received</h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you for applying, {formData.name}. Our recruitment team will review your profile and reach out at {formData.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Direct Application</h3>
                <p className="text-xs text-slate-500">
                  Submit your details directly to our engineering management.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98484 80868"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Position Applied For *
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  >
                    <option>Senior Elevator Installation Engineer</option>
                    <option>Elevator Service & Maintenance Technician</option>
                    <option>AutoCAD Hoistway Drafter & Civil Coordinator</option>
                    <option>Electrical Panel & Commissioning Specialist</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Total Experience *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                  >
                    <option>Fresher / Diploma in Electrical/Mechanical</option>
                    <option>1 - 2 Years</option>
                    <option>3 - 5 Years</option>
                    <option>5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Summary of Past Projects / Qualifications
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention previous elevator brands worked on (e.g. Otis, Schindler, Johnson, local MRL), elevator types, certifications..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs hover:opacity-95 transition-opacity cursor-pointer"
              >
                Submit Application →
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}

