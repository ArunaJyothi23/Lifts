"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA, COMPANY_INFO } from "@/data/siteData";
import SiteSurveyModal from "@/components/SiteSurveyModal";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ProjectsPage() {
  const [surveyOpen, setSurveyOpen] = useState(false);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Residential", "Commercial", "Hospital", "Industrial"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  const clientList = [
    { name: "Vasavi Group", city: "Hyderabad & Karimnagar", segment: "Gated Communities" },
    { name: "Trends Retail Plazas", city: "Karimnagar Main Road", segment: "Commercial Shopping" },
    { name: "Vamsiram Builders", city: "Commercial Projects", segment: "Office Towers" },
    { name: "My Home Group", city: "South India", segment: "Luxury Residences" },
    { name: "UrbanX Spaces", city: "Hyderabad & Warangal", segment: "Modern Workspaces" },
    { name: "Croma Electronics", city: "Telangana Outlets", segment: "Commercial Showrooms" },
    { name: "Rajapushpa Properties", city: "Telangana Corridor", segment: "High-Rise Residential" },
    { name: "Zudio Stores", city: "Karimnagar & Jagtial", segment: "Retail Movement" },
    { name: "RV Nirmaan", city: "Warangal & Karimnagar", segment: "Institutional Infrastructure" },
    { name: "Prathima Healthcare", city: "Karimnagar Healthcare Zone", segment: "Bed & Stretcher Lifts" },
    { name: "Apex Commercial", city: "Gandhi Road", segment: "Corporate Hubs" },
    { name: "Telangana Industrial Logistics", city: "Karimnagar IDA", segment: "Heavy Cargo" },
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
              <span className="text-[#423887] font-bold">Projects Gallery</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-[#423887] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#863078] animate-pulse" />
              <span><AnimatedCounter value="500+" /> Landmark Sites Across Telangana</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
              Completed installation <span className="text-shimmer-brand">sites gallery.</span>
            </h1>

            {/* Dynamic Typewriter text loading */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/80 px-4 py-2.5 rounded-2xl w-fit shadow-2xs">
              <span className="text-slate-400 font-medium">Executed across:</span>
              <TypewriterText
                words={[
                  "Karimnagar Central Commercial Towers & Duplexes",
                  "Greater Hyderabad Luxury Penthouse Villa Lifts",
                  "Warangal Multi-Speciality Hospital Bed Lifts",
                  "Nizamabad & Jagtial Retail Showroom MRL Elevators",
                  "Heavy-Duty Industrial Freight Facilities",
                ]}
                className="text-[#423887] font-extrabold"
                cursorClassName="bg-[#863078]"
              />
            </div>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed pt-1">
              Explore our landmark installations across Karimnagar, Hyderabad, Warangal, and throughout Telangana—spanning luxury villas, corporate towers, hospitals, and heavy industrial facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Rounded-Full) */}
      <section className="py-6 bg-slate-50 border-b border-slate-100 sticky top-20 z-30 shadow-xs backdrop-blur-md bg-slate-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`btn-sheen px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    filter === cat
                      ? "bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white shadow-xs"
                      : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                  }`}
                >
                  {cat === "All" ? "All Projects" : `${cat} Lifts`}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setSurveyOpen(true)}
              className="btn-sheen px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer"
            >
              Survey My Site
            </button>
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid with ScrollReveal & Card Glow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal key={project.id} animation="fadeInUp" delay={idx * 0.08}>
                <div
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xs card-glow transition-all flex flex-col group h-full"
                >
                  <div className="relative h-60 bg-slate-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-slate-900 px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-xs">
                      {project.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase">
                      {project.completedYear}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs text-[#423887] font-semibold mb-1 flex items-center gap-1">
                        <span>📍</span>
                        <span>{project.location}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#423887] transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-600 mb-4">
                        <span className="bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                          🏢 {project.floors}
                        </span>
                        <span className="bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                          👥 {project.capacity}
                        </span>
                      </div>

                      <div className="text-xs font-semibold text-slate-700 mb-2">
                        Series: {project.type}
                      </div>

                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        {project.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSurveyOpen(true)}
                      className="btn-sheen w-full py-2.5 text-center bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-[#423887] border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Request Similar Installation
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client List */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#863078] bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                Esteemed Partnerships
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Prominent Clients & Commercial Portfolios
              </h2>
              <p className="text-slate-600 mt-2 text-sm">
                We take pride in powering smooth daily vertical passenger movement for leading builders, hospitals, and retail brands across South India.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clientList.map((client, i) => (
              <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.05}>
                <div
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between card-glow h-full"
                >
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#863078] mb-1">
                      {client.segment}
                    </div>
                    <h4 className="text-base font-bold text-slate-900">{client.name}</h4>
                  </div>
                  <div className="text-xs text-slate-400 mt-3 pt-3 border-t border-slate-100 flex items-center gap-1">
                    <span>📍</span>
                    <span>{client.city}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteSurveyModal isOpen={surveyOpen} onClose={() => setSurveyOpen(false)} />
    </div>
  );
}
