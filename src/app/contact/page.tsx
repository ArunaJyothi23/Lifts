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
  { name: "Karimnagar", zone: "North Telangana", engineer: "Ramesh Vilasagar & Sr. Field Team", responseEta: "< 1 Hour (Central HQ)", phone: "9700 123 878", landmarks: "Gandhi Road, Collectorate, Kothapalli, Mankammathota" },
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

    const formElement = document.getElementById("project-enquiry-section");
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
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      {/* 1. HERO HEADER: Executive Branding & Dynamic Typewriter */}
      <section className="bg-white border-b border-slate-100 py-8 sm:py-10 relative overflow-hidden">
        <div className="ambient-orb w-96 h-96 -top-20 -left-20 bg-purple-200/30 animate-pulse-slow" />
        <div className="ambient-orb w-80 h-80 top-1/2 -right-16 bg-rose-200/20 animate-pulse-slow" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3.5">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#423887] font-bold">Contact</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold text-[#863078] uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#863078] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#863078]"></span>
              </span>
              <span>All <AnimatedCounter value="33" /> Districts of Telangana Covered</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-[1.15]">
              Get in touch with our <span className="text-shimmer-brand">elevator engineers.</span>
            </h1>

            {/* Dynamic Typewriter text loading */}
            <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm font-bold text-slate-700 bg-slate-50/90 border border-slate-200/80 px-4 py-2 rounded-2xl w-fit shadow-2xs">
              <span className="text-slate-400 font-medium">Direct support for:</span>
              <TypewriterText
                words={[
                  "Karimnagar Central HQ & Workshop",
                  "Direct Central Line: 9700 123 878",
                  "Greater Hyderabad Luxury Villa Lifts",
                  "Warangal Commercial & Hospital Towers",
                  "Nizamabad, Jagtial & North Telangana Hubs",
                  "Rapid 2-Hour Breakdown Dispatch",
                  "All 33 Districts Across Telangana",
                ]}
                className="text-[#423887] font-extrabold"
                cursorClassName="bg-[#863078]"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-0.5">
              Have an upcoming construction project, need a free laser hoistway survey, or require urgent 24/7 elevator maintenance? Reach out to Ramesh Vilasagar or our senior engineering desk below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN 2-COLUMN SECTION: Reach Us Directly (Left) + Project Enquiry Form (Right) */}
      <section id="project-enquiry-section" className="py-8 sm:py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT COLUMN: Reach Us Directly */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal animation="fadeInUp">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Reach us directly
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed">
                    Direct access to technical leads, quotation estimators, and emergency dispatch teams.
                  </p>
                </div>
              </ScrollReveal>

              {/* Direct Channel Cards */}
              <div className="space-y-3 pt-1">
                {/* 1. Sales Enquiries */}
                <ScrollReveal animation="fadeInUp" delay={0.05}>
                  <a
                    href="tel:9848480868"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/90 hover:border-purple-200 transition-all flex items-center justify-between group shadow-2xs card-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#423887] flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        📞
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Sales & Principal Engineer
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-[#423887] transition-colors">
                          +91 98484 80868
                        </div>
                        <div className="text-[10px] text-slate-500">Ramesh Vilasagar (Direct)</div>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-[#423887] font-bold text-sm transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </ScrollReveal>

                {/* 2. 24/7 Statewide Helpline */}
                <ScrollReveal animation="fadeInUp" delay={0.1}>
                  <a
                    href="tel:9700123878"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-200 transition-all flex items-center justify-between group shadow-2xs card-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        🕒
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          24/7 Service & Statewide Line
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-emerald-700 transition-colors">
                          9700 123 878
                        </div>
                        <div className="text-[10px] text-emerald-600 font-semibold">Immediate technician dispatch</div>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-emerald-700 font-bold text-sm transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </ScrollReveal>

                {/* 3. WhatsApp Desk */}
                <ScrollReveal animation="fadeInUp" delay={0.15}>
                  <a
                    href={`https://wa.me/919700123878?text=Hi%20Vision%20Lifts%2C%20I%20am%20reaching%20out%20regarding%20an%20elevator%20requirement.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/90 hover:border-emerald-200 transition-all flex items-center justify-between group shadow-2xs card-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        💬
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          WhatsApp Engineering Desk
                        </div>
                        <div className="text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-emerald-700 transition-colors">
                          Chat with our team
                        </div>
                        <div className="text-[10px] text-slate-500">Send CAD drawings & floor plans</div>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-emerald-700 font-bold text-sm transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </ScrollReveal>

                {/* 4. Project Email */}
                <ScrollReveal animation="fadeInUp" delay={0.2}>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/90 hover:border-purple-200 transition-all flex items-center justify-between group shadow-2xs card-glow"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#423887] flex items-center justify-center font-bold text-base shrink-0 group-hover:scale-105 transition-transform">
                        ✉️
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Official Quotation & Tender Email
                        </div>
                        <div className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 group-hover:text-[#423887] transition-colors break-all">
                          {COMPANY_INFO.email}
                        </div>
                        <div className="text-[10px] text-slate-500">Fast 24-hour quotation turnaround</div>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-[#423887] font-bold text-sm transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </ScrollReveal>

                {/* 5. Head Office Address */}
                <ScrollReveal animation="fadeInUp" delay={0.25}>
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs card-glow">
                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-200/80 text-slate-700 flex items-center justify-center font-bold text-base shrink-0 mt-0.5">
                        📍
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          Central Head Office & Manufacturing Workshop
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5 leading-snug">
                          {COMPANY_INFO.address}
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1">
                          Mon - Sat (9:00 AM - 7:30 PM) · 24/7 Breakdown Crew
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* RIGHT COLUMN: Tell Us About Your Project Form */}
            <div className="lg:col-span-7">
              <ScrollReveal animation="fadeInUp" delay={0.1}>
                <div className="bg-slate-50/90 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm card-glow">
                  <div className="mb-5">
                    <span className="px-3 py-1 bg-purple-100 text-[#863078] rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Technical Consultation Request
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                      Tell us about your project
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out the details below. Our senior elevator engineering team will prepare customized blueprints and pricing.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="text-center py-10 space-y-3">
                      <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold animate-pulse-badge">
                        ✓
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Enquiry Successfully Dispatched!</h3>
                      <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>. Ramesh Vilasagar or our regional engineer for <strong>{formData.city}</strong> will contact you within 2 business hours.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="btn-sheen mt-3 px-5 py-2.5 bg-[#423887] text-white text-xs font-bold rounded-xl cursor-pointer"
                      >
                        Submit Another Requirement →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Row 1: Name & Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            YOUR NAME <span className="text-[#a22b51]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Reddy"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            EMAIL <span className="text-[#a22b51]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Row 2: Phone & City */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            PHONE NUMBER <span className="text-[#a22b51]">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98484 80868"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            CITY / DISTRICT <span className="text-[#a22b51]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Karimnagar, Hyderabad, Warangal, etc."
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Row 3: Project Type & Building Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            PROJECT TYPE <span className="text-[#a22b51]">*</span>
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs cursor-pointer"
                          >
                            <option>New Lift Installation</option>
                            <option>Elevator Modernization & Retrofit</option>
                            <option>Annual Maintenance Contract (AMC)</option>
                            <option>B2B Elevator Parts Supply</option>
                            <option>Emergency Breakdown Service</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                            BUILDING TYPE <span className="text-[#a22b51]">*</span>
                          </label>
                          <select
                            value={formData.buildingType}
                            onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs cursor-pointer"
                          >
                            <option>Independent Villa / Bungalow</option>
                            <option>Residential Apartment / Gated Community</option>
                            <option>Commercial Office / Shopping Mall</option>
                            <option>Hospital / Stretcher Lift</option>
                            <option>Industrial Factory / Heavy Goods</option>
                          </select>
                        </div>
                      </div>

                      {/* Row 4: Approximate Units Needed */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          APPROXIMATE UNITS NEEDED
                        </label>
                        <select
                          value={formData.units}
                          onChange={(e) => setFormData({ ...formData, units: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs cursor-pointer"
                        >
                          <option>1 Unit</option>
                          <option>2 - 3 Units</option>
                          <option>4 - 8 Units</option>
                          <option>10+ Units (Builder / Bulk Project)</option>
                        </select>
                      </div>

                      {/* Row 5: Specific Requirements */}
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                          SPECIFIC REQUIREMENTS / HOISTWAY DETAILS
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Tell us about number of floors, pit depth, overhead space, or timeline..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#863078]/40 transition-all shadow-2xs resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-sheen w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 shadow-md shadow-[#863078]/25 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer disabled:opacity-50"
                        >
                          {loading ? "Submitting Enquiry..." : "Submit Project Enquiry →"}
                        </button>
                        <p className="text-center text-[10px] text-slate-400 mt-2">
                          🔒 Zero spam guarantee. Direct response from Ramesh Vilasagar or senior engineer.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VISIT OUR KARIMNAGAR HEADQUARTERS & GOOGLE MAPS */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeInUp">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#863078] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                  Headquarters & Experience Center
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-1.5">
                  Visit our Karimnagar headquarters
                </h2>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5 leading-relaxed">
                  Gandhi Road central office & manufacturing workshop. Walk-ins welcome between 9:00 AM and 7:30 PM on weekdays.
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="https://maps.google.com/?q=Gandhi+Road,+Karimnagar,+Telangana+505001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen py-2 px-4 bg-[#423887] text-white rounded-xl text-xs font-bold text-center flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Interactive Map Card */}
            <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="Vision Lifts & Solutions Karimnagar Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.4984242686127!2d79.128841!3d18.438555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccd9198b1e4f4b%3A0x6b4ef8d4d8ef8c9a!2sGandhi%20Rd%2C%20Karimnagar%2C%20Telangana%20505001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter contrast-[1.02]"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Location Card */}
              <div className="absolute top-4 left-4 max-w-xs sm:max-w-sm bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#863078] flex items-center justify-center font-bold text-sm shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-slate-900">
                      Karimnagar Central Office & Workshop
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                      Gandhi Road Commercial Zone, Karimnagar, Telangana - 505001
                    </p>
                  </div>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-2">
                  <a
                    href="tel:9700123878"
                    className="flex-1 py-1.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[10px] font-bold text-center"
                  >
                    📞 Helpline: 9700 123 878
                  </a>
                  <a
                    href="tel:9848480868"
                    className="py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-[10px] font-bold text-center"
                  >
                    Direct: 98484 80868
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. TELANGANA 33 DISTRICTS INTERACTIVE DIRECTORY */}
      <section className="py-8 sm:py-12 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal animation="fadeInUp">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#863078] bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
                  Statewide Engineering Network
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1.5 tracking-tight">
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
              <span className="absolute left-3.5 top-3 text-slate-400 text-sm">
                🔍
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
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs card-glow transition-all flex flex-col justify-between h-full">
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
                      className="btn-sheen flex-1 py-2 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[11px] font-bold text-center transition-colors"
                    >
                      📞 9700 123 878
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
