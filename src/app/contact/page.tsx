"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/siteData";
import TypewriterText from "@/components/TypewriterText";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

interface DistrictInfo {
  name: string;
  zone: "North Telangana" | "Central Telangana" | "Greater Hyderabad" | "South Telangana" | "East Telangana";
  engineer: string;
  responseEta: string;
  phone: string;
  landmarks: string;
}

const TELANGANA_DISTRICTS: DistrictInfo[] = [
  { name: "Karimnagar", zone: "North Telangana", engineer: "Central HQ Senior Field Team", responseEta: "< 1 Hour (Central HQ)", phone: "9700 123 878", landmarks: "Kisan Nagar, Collectorate, Kothapalli, Mankammathota" },
  { name: "Hyderabad", zone: "Greater Hyderabad", engineer: "Ramesh Reddy & Metro Mobile Crew", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Banjara Hills, Jubilee Hills, Gachibowli, Kukatpally, Madhapur, Kondapur" },
  { name: "Warangal", zone: "East Telangana", engineer: "Srinivas Rao & Tri-City Team", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Kazipet, Hanamkonda, Hunter Road, Narsampet" },
  { name: "Hanamkonda", zone: "East Telangana", engineer: "Srinivas Rao & Tri-City Team", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Subedari, Nakkalagutta, Kakatiya University Road" },
  { name: "Nizamabad", zone: "North Telangana", engineer: "M. Naveen & North Hub Squad", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Khaleelwadi, Subhashnagar, Armoor, Bodhan" },
  { name: "Jagtial", zone: "North Telangana", engineer: "K. Satish & Rural Dispatch Unit", responseEta: "< 1.5 Hours", phone: "9700 123 878", landmarks: "Tower Circle, Korutla, Metpally, Dharmapuri" },
  { name: "Peddapalli", zone: "North Telangana", engineer: "Rajesh K. & Industrial Service Van", responseEta: "< 1.5 Hours", phone: "9700 123 878", landmarks: "Ramagundam, Godavarikhani, NTPC Township, Sultanabad" },
  { name: "Siddipet", zone: "Central Telangana", engineer: "B. Mahender & Central Team", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Collectorate Area, Gajwel, Dubbak, Husnabad" },
  { name: "Khammam", zone: "East Telangana", engineer: "V. Krishna & East District Crew", responseEta: "< 3 Hours", phone: "9700 123 878", landmarks: "Wyra Road, Kothagudem border, Sattupalli, Madhira" },
  { name: "Nalgonda", zone: "South Telangana", engineer: "P. Venkat & South Mobile Unit", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Clock Tower, Miryalaguda, Devarakonda, Nakrekal" },
  { name: "Suryapet", zone: "South Telangana", engineer: "K. Murali & Highway Flying Squad", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "NH-65 Corridor, Kodad, Huzurnagar, Juntpally" },
  { name: "Mancherial", zone: "North Telangana", engineer: "S. Anand & Mining Zone Engineer", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Bellampalli, Mandamarri, Chennur, Luxettipet" },
  { name: "Adilabad", zone: "North Telangana", engineer: "T. Ravi & North Border Team", responseEta: "< 3.5 Hours", phone: "9700 123 878", landmarks: "Mavala, Dasnapur, Bela, Utnoor" },
  { name: "Nirmal", zone: "North Telangana", engineer: "V. Praveen & Kadem Division", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Mancherial Road, Bhainsa, Khanapur, Soan" },
  { name: "Kamareddy", zone: "North Telangana", engineer: "B. Suresh & NH-44 Fast Response", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Banswada, Yellareddy, Domakonda, Biknoor" },
  { name: "Rajanna Sircilla", zone: "North Telangana", engineer: "G. Shekhar & Textile Zone Hub", responseEta: "< 1.5 Hours", phone: "9700 123 878", landmarks: "Vemulawada Temple Zone, Sircilla Town, Yellareddypet" },
  { name: "Medchal-Malkajgiri", zone: "Greater Hyderabad", engineer: "A. Srinivas & North Metro Wing", responseEta: "< 1.5 Hours", phone: "9700 123 878", landmarks: "Kompally, Alwal, Ghatkesar, Medchal City" },
  { name: "Rangareddy", zone: "Greater Hyderabad", engineer: "D. Prashanth & IT Corridor Team", responseEta: "< 1.5 Hours", phone: "9700 123 878", landmarks: "Shamshabad, Rajendranagar, LB Nagar, Ibrahimpatnam" },
  { name: "Sangareddy", zone: "Central Telangana", engineer: "K. Naresh & Industrial Corridor", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Patancheru, Zaheerabad, Kandi, Ameenpur" },
  { name: "Medak", zone: "Central Telangana", engineer: "L. Ramesh & Northern Central", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Medak Town, Toopran, Narsapur, Ramayampet" },
  { name: "Jangaon", zone: "Central Telangana", engineer: "C. Balu & Highway Dispatch", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Station Ghanpur, Palakurthi, Bachannapet" },
  { name: "Yadadri Bhuvanagiri", zone: "Central Telangana", engineer: "M. Ashok & Temple Belt Crew", responseEta: "< 2 Hours", phone: "9700 123 878", landmarks: "Bhongir Fort, Alair, Choutuppal, Motakondur" },
  { name: "Mahabubnagar", zone: "South Telangana", engineer: "N. Srinivas & South Highway Squad", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Jadcherla, Boothpur, Devarkadra, Badepally" },
  { name: "Vikarabad", zone: "Greater Hyderabad", engineer: "J. Kiran & Hills Division", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Tandur, Parigi, Kodangal, Nawabpet" },
  { name: "Bhadradri Kothagudem", zone: "East Telangana", engineer: "E. Sai & Agency Area Support", responseEta: "< 3.5 Hours", phone: "9700 123 878", landmarks: "Bhadrachalam, Palwancha, Yellandu, Manuguru" },
  { name: "Jayashankar Bhupalpally", zone: "East Telangana", engineer: "H. Kumar & Mining Wing", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Bhupalpally Town, Chelpur, Chityal, Mogullapally" },
  { name: "Mulugu", zone: "East Telangana", engineer: "T. Shiva & Agency Team", responseEta: "< 3 Hours", phone: "9700 123 878", landmarks: "Mulugu Center, Eturnagaram, Govindaraopet" },
  { name: "Mahabubabad", zone: "East Telangana", engineer: "D. Raju & Rail Corridor", responseEta: "< 2.5 Hours", phone: "9700 123 878", landmarks: "Kesamudram, Thorrur, Maripeda, Dornakal" },
  { name: "Nagarkurnool", zone: "South Telangana", engineer: "B. Venkatesh & Srisailam Belt", responseEta: "< 3 Hours", phone: "9700 123 878", landmarks: "Achampet, Kalwakurthy, Kollapur, Telkapally" },
  { name: "Wanaparthy", zone: "South Telangana", engineer: "G. Gopal & Palace Town Hub", responseEta: "< 3 Hours", phone: "9700 123 878", landmarks: "Pebbair, Kothakota, Gopalpeta, Pangal" },
  { name: "Jogulamba Gadwal", zone: "South Telangana", engineer: "M. Chandu & Border Wing", responseEta: "< 3.5 Hours", phone: "9700 123 878", landmarks: "Gadwal Town, Alampur, Ieeja, Maldakal" },
  { name: "Narayanpet", zone: "South Telangana", engineer: "K. Sunil & Border Hub", responseEta: "< 3 Hours", phone: "9700 123 878", landmarks: "Makthal, Kosgi, Damaragidda, Maganoor" },
  { name: "Kumurambheem Asifabad", zone: "North Telangana", engineer: "R. Mohan & Hilly Division", responseEta: "< 4 Hours", phone: "9700 123 878", landmarks: "Asifabad Town, Kagaznagar, Sirpur, Rebbena" },
];

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "Karimnagar",
    projectType: "New Lift Installation",
    buildingType: "Independent Villa / Bungalow",
    units: "1 Unit",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const zones = ["All", "North Telangana", "Central Telangana", "Greater Hyderabad", "South Telangana", "East Telangana"];

  const filteredDistricts = useMemo(() => {
    return TELANGANA_DISTRICTS.filter((d) => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        d.name.toLowerCase().includes(query) ||
        d.landmarks.toLowerCase().includes(query);
      const matchesZone = selectedZone === "All" || d.zone === selectedZone;
      return matchesSearch && matchesZone;
    });
  }, [searchQuery, selectedZone]);

  const handleSelectDistrictForQuote = (districtName: string) => {
    setFormData((prev) => ({
      ...prev,
      city: districtName,
      message: prev.message || `Need elevator survey and quotation for ${districtName}.`,
    }));

    const formElement = document.getElementById("project-enquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact-executive",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          projectType: formData.projectType,
          buildingType: formData.buildingType,
          units: formData.units,
          message: formData.message,
        }),
      });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden font-sans text-slate-800 selection:bg-[#a22b51] selection:text-white">
      
      {/* =========================================================================
          1. EXECUTIVE 2-COLUMN HERO: DIRECT DESKS (LEFT) + LIVE ENQUIRY FORM (RIGHT)
          Eliminates all dead space and delivers instant engagement
          ========================================================================= */}
      <section className="bg-white border-b border-slate-100 pt-6 pb-12 sm:pt-8 sm:pb-16 relative overflow-hidden">
        {/* Subtle Ambient Glowing Background Orbs */}
        <div className="ambient-orb w-96 h-96 -top-24 -left-24 bg-purple-100/50 animate-pulse-slow" />
        <div className="ambient-orb w-96 h-96 top-1/3 -right-20 bg-rose-100/40 animate-pulse-slow" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            
            {/* LEFT COLUMN: Executive Headline, Typewriter, & 4 Direct Channels */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-5 animate-fade-in-up">
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50/80 border border-purple-100 text-[11px] sm:text-xs font-bold text-[#863078] uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887]"></span>
                </span>
                <span>All <AnimatedCounter value="33" /> Districts of Telangana Covered</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[48px] font-black tracking-tight text-slate-900 leading-[1.14]">
                Get in touch with our{" "}
                <span className="text-shimmer-brand font-black">elevator engineers.</span>
              </h1>

              {/* Dynamic Typewriter Text Loading */}
              <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200/90 px-4 py-2 rounded-2xl w-fit shadow-2xs">
                <span className="text-slate-400 font-medium">Direct Support For:</span>
                <TypewriterText
                  words={[
                    "Karimnagar Central HQ & Workshop (Kisan Nagar)",
                    "Hyderabad Regional Hub Desk",
                    "Direct Central Line: 9700 123 878",
                    "Engineering Desk: +91 98484 80868",
                    "Greater Hyderabad Luxury Villa Lifts & Capsules",
                    "Warangal Commercial & Hospital Stretcher Elevators",
                    "Nizamabad, Jagtial & North Telangana Rapid AMC",
                    "Rapid <30 Min Breakdown Van Dispatch",
                  ]}
                  className="text-[#423887] font-extrabold"
                  cursorClassName="bg-[#863078]"
                />
              </div>

              {/* Executive Subtitle */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Have an upcoming construction project, need a free laser hoistway survey, or require urgent 24/7 elevator maintenance? Reach out directly to our central engineering command desk or certified field engineering team.
              </p>

              {/* 4 Direct Channels: 2x2 Clean Architectural Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* 1. Engineering Consultation Direct */}
                <a
                  href="tel:9848480868"
                  className="p-3.5 rounded-2xl bg-white hover:bg-purple-50/70 border border-slate-200/90 hover:border-purple-200 transition-all flex items-center justify-between group shadow-sm card-glow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#423887] flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-[#863078]">
                        Chief Engineering Desk
                      </div>
                      <div className="text-sm font-black text-slate-900 group-hover:text-[#423887] transition-colors">
                        +91 98484 80868
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">Technical Consultation</div>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-[#423887] font-bold text-sm transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* 2. 24/7 Statewide Hotline */}
                <a
                  href="tel:9700123878"
                  className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-200 transition-all flex items-center justify-between group shadow-sm card-glow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                        24/7 Statewide Line
                      </div>
                      <div className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                        9700 123 878
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">Emergency Dispatch</div>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-700 font-bold text-sm transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* 3. WhatsApp Desk */}
                <a
                  href="https://wa.me/919700123878?text=Hello%20Vision%20Lifts%2C%20I%20need%20elevator%20quotation%20and%20hoistway%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-white hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-200 transition-all flex items-center justify-between group shadow-sm card-glow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                      <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-wider text-emerald-700">
                        WhatsApp Desk
                      </div>
                      <div className="text-sm font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                        Chat with Team
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">Send CAD & Plans</div>
                    </div>
                  </div>
                  <span className="text-slate-400 group-hover:text-emerald-700 font-bold text-sm transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* 4. Karimnagar Central HQ */}
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm card-glow flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#423887] flex items-center justify-center font-bold text-base shrink-0">
                    <svg className="w-5 h-5 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-wider text-[#863078]">
                      Central HQ & Workshop
                    </div>
                    <div className="text-xs font-black text-slate-900 truncate max-w-[170px]" title="Kisan Nagar, Near Surya Paper">
                      Kisan Nagar, Karimnagar
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Near Surya Paper · 505001</div>
                  </div>
                </div>
              </div>

              {/* Trust Badges Row */}
              <div className="pt-2 pb-2 sm:pb-0 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>100% In-House Engineers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>Free Laser Hoistway Survey</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span>IS 14665 Safety Certified</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Project Enquiry & Survey Form Card */}
            <div id="project-enquiry-form" className="lg:col-span-6 animate-fade-in-up stagger-2">
              <div className="bg-white/95 rounded-3xl p-5 sm:p-7 shadow-xl border border-slate-200/90 relative backdrop-blur-sm card-glow">
                
                {/* Header inside Form Card */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-3 py-1 bg-purple-100 text-[#863078] rounded-full text-[10px] font-black uppercase tracking-wider">
                      Technical Consultation & Free Survey
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                      ● Active Dispatch
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Tell us about your project
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our senior elevator engineering team will prepare customized blueprints, shaft layouts & itemized pricing.
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-8 space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold animate-pulse-badge">
                      ✓
                    </div>
                    <h3 className="text-xl font-black text-slate-900">Enquiry Successfully Dispatched!</h3>
                    <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Our regional elevator engineering team for <strong>{formData.city}</strong> will contact you within 2 business hours.
                    </p>
                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <a
                        href={`https://wa.me/919700123878?text=Hello%2C%20I%20just%20submitted%20an%20enquiry%20for%20${encodeURIComponent(formData.city)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all inline-flex items-center gap-2"
                        style={{ color: "#ffffff" }}
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.884 2.796.885h.005c3.179 0 5.766-2.587 5.767-5.766 0-3.18-2.588-5.772-5.772zm3.397 8.192c-.145.408-.847.785-1.177.834-.33.049-.757.068-2.457-.638-1.7-.706-2.776-2.441-2.86-2.553-.085-.112-.693-.923-.693-1.761s.437-1.25.592-1.423c.155-.172.338-.216.45-.216.113 0 .226.002.324.007.104.005.244-.04.381.29.145.352.497 1.214.54 1.302.043.088.072.19.014.305-.058.115-.088.187-.175.29-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.103.178.461.761 1.054 1.291.764.681 1.408.892 1.609.992.201.1.32.083.438-.052.119-.136.508-.591.644-.793.136-.203.272-.17.458-.102.186.068 1.182.557 1.385.659.203.102.339.153.39.237.051.085.051.493-.094.901z" />
                        </svg>
                        <span style={{ color: "#ffffff" }}>Connect on WhatsApp Instantly</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl cursor-pointer"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Row 1: Building Type Quick Selector */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                        BUILDING / PROJECT TYPE <span className="text-[#a22b51]">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                        {[
                          "Villas & Independent Homes",
                          "Apartments & Gated",
                          "Commercial Towers",
                          "Hospitals & Clinics",
                          "Industrial & Factories",
                          "Modernization / Retrofit",
                        ].map((bType) => {
                          const isSelected = formData.buildingType === bType;
                          return (
                            <button
                              key={bType}
                              type="button"
                              onClick={() => setFormData({ ...formData, buildingType: bType })}
                              className={`p-2 rounded-xl text-[11px] font-bold text-left transition-all cursor-pointer border ${
                                isSelected
                                  ? "bg-purple-50 border-[#863078] text-[#423887] shadow-2xs"
                                  : "bg-slate-50 border-slate-200/80 text-slate-600 hover:bg-slate-100"
                              }`}
                            >
                              {bType}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Row 2: Name & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          YOUR NAME <span className="text-[#a22b51]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Suresh Reddy"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          MOBILE NUMBER <span className="text-[#a22b51]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98484 80868"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 3: Email & City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          EMAIL ADDRESS <span className="text-[#a22b51]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          DISTRICT / TOWN IN TELANGANA <span className="text-[#a22b51]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Karimnagar, Hyderabad, Warangal, etc."
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                        />
                      </div>
                    </div>

                    {/* Row 4: Units Needed & Project Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          PROJECT TYPE
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs cursor-pointer"
                        >
                          <option>New Lift Installation</option>
                          <option>Elevator Modernization & Retrofit</option>
                          <option>Annual Maintenance Contract (AMC)</option>
                          <option>B2B Elevator Parts Supply</option>
                          <option>Emergency Breakdown Service</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          APPROXIMATE UNITS
                        </label>
                        <select
                          value={formData.units}
                          onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs cursor-pointer"
                        >
                          <option>1 Unit</option>
                          <option>2 - 3 Units</option>
                          <option>4 - 8 Units</option>
                          <option>10+ Units (Bulk / Builder)</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Specific Requirements */}
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        SPECIFIC REQUIREMENTS / HOISTWAY DETAILS
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Tell us about number of floors, pit depth, glass capsule preference, or timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs resize-none"
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-sheen w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer disabled:opacity-50 active:scale-98"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>
                          {loading ? "Submitting Enquiry..." : "Submit Project Enquiry & Free Survey →"}
                        </span>
                      </button>
                      <p className="text-center text-[10px] text-slate-400 mt-2 font-medium flex items-center justify-center gap-1.5">
                        <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span>Zero spam guarantee. Direct technical response from our certified engineering team within 2 hours.</span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          2. TWO BRANCH LOCATIONS: KARIMNAGAR CENTRAL HQ & HYDERABAD REGIONAL HUB
          (Matches Document Requirements Section 6 Exactly)
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Branch Locations & Engineering Depots
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                  Visit our branches in Telangana
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                  Headquartered in Karimnagar with central manufacturing and testing, and a dedicated regional hub in Hyderabad.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="tel:9700123878"
                  className="btn-sheen py-2.5 px-4 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white rounded-xl text-xs font-bold text-center flex items-center gap-2 shadow-sm"
                  style={{ color: "#ffffff" }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span style={{ color: "#ffffff" }}>Central Line: 9700 123 878</span>
                </a>
              </div>
            </div>

            {/* Two Distinct Location Cards (Karimnagar and Hyderabad) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Branch 1: Karimnagar Central HQ & Workshop */}
              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:bg-white hover:border-[#863078]/50 hover:shadow-xl transition-all duration-500 group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#863078] flex items-center justify-center font-bold text-base">
                        <svg className="w-5 h-5 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-2 py-0.5 rounded border border-purple-100">
                          Central Headquarters & Workshop
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                          Karimnagar Central HQ
                        </h3>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 shrink-0">
                      Walk-ins Welcome
                    </span>
                  </div>

                  {/* Verified Address */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 mb-4 space-y-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Verified Address</div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar, Telangana – 505001
                    </p>
                    <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Mon – Sat: 9:00 AM – 7:30 PM</span>
                      <span>•</span>
                      <span>Sunday: Emergency Support</span>
                    </div>
                  </div>

                  {/* Map Embed for Karimnagar */}
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 mb-4">
                    <iframe
                      title="Vision Lifts Karimnagar HQ"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4984242686127!2d79.128841!3d18.438555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd9198b1e4f4b%3A0x6b4ef8d4d8ef8c9a!2sKarimnagar%2C%20Telangana%20505001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 filter contrast-[1.02]"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:9700123878"
                      className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold text-center inline-flex items-center gap-1.5"
                      style={{ color: "#ffffff" }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span style={{ color: "#ffffff" }}>Helpline: 9700 123 878</span>
                    </a>
                    <a
                      href="tel:9848480868"
                      className="py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 rounded-xl text-xs font-bold"
                    >
                      Engineering: 98484 80868
                    </a>
                  </div>

                  <a
                    href="https://maps.google.com/?q=0-5-240,+Kisan+Nagar,+Near+Surya+Paper,+Karimnagar,+Telangana+505001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-white hover:bg-purple-50 text-[#863078] border border-purple-200 rounded-xl text-xs font-bold flex items-center gap-1 shadow-2xs"
                  >
                    <span>Get Directions ↗</span>
                  </a>
                </div>
              </div>

              {/* Branch 2: Hyderabad Regional Hub */}
              <div className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between hover:bg-white hover:border-[#423887]/50 hover:shadow-xl transition-all duration-500 group">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-[#423887] flex items-center justify-center font-bold text-base">
                        <svg className="w-5 h-5 text-[#423887]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#423887] bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">
                          Regional Operations Hub
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-slate-900 mt-0.5">
                          Hyderabad Regional Hub
                        </h3>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-[#423887] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200 shrink-0">
                      Consultation Hub
                    </span>
                  </div>

                  {/* Verified Address */}
                  <div className="p-3.5 rounded-2xl bg-white border border-slate-200/80 mb-4 space-y-1">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Regional Address</div>
                    <p className="text-xs sm:text-sm font-bold text-slate-800 leading-snug">
                      Hyderabad Regional Hub, Telangana
                    </p>
                    <div className="text-[11px] text-slate-500 pt-1 flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Mon – Sat: 9:30 AM – 6:30 PM</span>
                      <span>•</span>
                      <span>By Technical Appointment</span>
                    </div>
                  </div>

                  {/* Map Embed for Hyderabad */}
                  <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100 mb-4">
                    <iframe
                      title="Vision Lifts Hyderabad Regional Hub"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121808.64817457912!2d78.384698!3d17.443649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 filter contrast-[1.02]"
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:9700123878"
                      className="py-2 px-3 bg-[#423887] hover:bg-[#342c6e] text-white rounded-xl text-xs font-bold text-center inline-flex items-center gap-1.5"
                      style={{ color: "#ffffff" }}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span style={{ color: "#ffffff" }}>Hub Line: 9700 123 878</span>
                    </a>
                    <a
                      href="https://wa.me/919700123878?text=Hello%20Vision%20Lifts%2C%20I%20need%20elevator%20quotation%20and%20hoistway%20information."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
                      style={{ color: "#ffffff" }}
                    >
                      <span style={{ color: "#ffffff" }}>WhatsApp Desk</span>
                    </a>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Hyderabad,+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-3 bg-white hover:bg-indigo-50 text-[#423887] border border-indigo-200 rounded-xl text-xs font-bold flex items-center gap-1 shadow-2xs"
                  >
                    <span>Get Directions ↗</span>
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================================================
          3. TELANGANA 33 DISTRICTS INTERACTIVE DIRECTORY & SEARCH
          ========================================================================= */}
      <section className="py-12 sm:py-16 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fadeInUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#863078] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  Statewide Engineering Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2 tracking-tight">
                  All 33 Districts Elevator Engineering Units
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">
                  Select your district to auto-fill the enquiry form or contact your designated field engineer.
                </p>
              </div>

              <div className="text-xs font-bold text-slate-600 bg-white border border-slate-200 px-3.5 py-2 rounded-xl shrink-0 shadow-2xs">
                Showing <span className="text-[#863078] font-extrabold">{filteredDistricts.length}</span> of {TELANGANA_DISTRICTS.length} Districts
              </div>
            </div>
          </ScrollReveal>

          {/* Search & Zone Filter Bar */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 mb-6 space-y-3 shadow-2xs">
            <div className="relative">
              <input
                type="text"
                placeholder="Search district or town (e.g. Karimnagar, Hyderabad, Warangal, Jagtial, Nizamabad, Siddipet)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all"
              />
              <span className="absolute left-3.5 top-3 text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>

            {/* Zone Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {zones.map((zone) => {
                const isActive = selectedZone === zone;
                return (
                  <button
                    key={zone}
                    type="button"
                    onClick={() => setSelectedZone(zone)}
                    className={`btn-sheen px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#423887] text-white shadow-2xs ring-1 ring-[#423887]/50"
                        : "bg-slate-50 text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900"
                    }`}
                    style={isActive ? { color: "#ffffff" } : {}}
                  >
                    {zone}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Districts Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {filteredDistricts.map((district, dIdx) => (
              <ScrollReveal key={district.name} animation="fadeInUp" delay={Math.min((dIdx % 6) * 0.05, 0.3)}>
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs card-glow transition-all flex flex-col justify-between h-full hover:border-purple-200">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-extrabold text-slate-900 tracking-tight">
                        {district.name}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-50 text-[#863078] border border-purple-100 whitespace-nowrap">
                        {district.zone}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-slate-600 mt-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Response ETA:</span>
                        <span className="font-bold text-emerald-700">{district.responseEta}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Assigned Lead:</span>
                        <span className="font-semibold text-slate-800 text-right">{district.engineer}</span>
                      </div>
                      <div className="pt-1 text-[11px] text-slate-400">
                        <strong className="text-slate-500">Key towns:</strong> {district.landmarks}
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-3 flex items-center gap-2">
                    <a
                      href="tel:9700123878"
                      className="btn-sheen flex-1 py-2 px-3 bg-gradient-to-r from-[#2e1236] to-[#1c143d] hover:opacity-95 text-white rounded-xl text-[11px] font-bold text-center transition-all inline-flex items-center justify-center gap-1.5 shadow-2xs border border-purple-900/40"
                      style={{ color: "#ffffff" }}
                    >
                      <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span style={{ color: "#ffffff" }}>9700 123 878</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => handleSelectDistrictForQuote(district.name)}
                      className="flex-1 py-2 px-3 bg-purple-50 hover:bg-purple-100 text-[#423887] border border-purple-200 rounded-xl text-[11px] font-bold text-center transition-colors cursor-pointer"
                    >
                      Enquire District →
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {filteredDistricts.length === 0 && (
            <div className="text-center py-10 bg-white rounded-2xl border border-slate-200">
              <p className="text-sm font-bold text-slate-700">No districts match your search query &ldquo;{searchQuery}&rdquo;</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedZone("All");
                }}
                className="btn-sheen mt-3 px-4 py-2 bg-[#423887] text-white text-xs font-bold rounded-xl cursor-pointer"
                style={{ color: "#ffffff" }}
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
