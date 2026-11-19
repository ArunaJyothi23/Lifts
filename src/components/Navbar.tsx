"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SiteSurveyModal from "./SiteSurveyModal";

interface MegamenuItem {
  id: string;
  title: string;
  desc: string;
  href: string;
  image: string;
  badge: string;
  cardTitle: string;
  cardDesc: string;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const [surveyModalOpen, setSurveyModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Dynamic preview states for megamenus on hover
  const [hoveredSolutionId, setHoveredSolutionId] = useState<string>("villas");
  const [hoveredProductId, setHoveredProductId] = useState<string>("home-luxe");
  const [hoveredServiceId, setHoveredServiceId] = useState<string>("gold-amc");

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // On Admin and Portal console routes, do not render marketing website header
  if (pathname && (pathname.startsWith("/admin") || pathname.startsWith("/portal"))) {
    return null;
  }

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
  }, [pathname]);

  // Lock body scroll and set class when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("mobile-menu-active");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-active");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("mobile-menu-active");
    };
  }, [mobileMenuOpen]);

  // Solutions data with dynamic cards
  const solutionsBuildingType: MegamenuItem[] = [
    {
      id: "villas",
      title: "Villas & Independent Homes",
      desc: "Villas, duplexes & bungalows",
      href: "/solutions#residential",
      image: "/images/residential.png",
      badge: "Pitless 150mm · Single Phase 220V",
      cardTitle: "Villas & Independent Homes",
      cardDesc: "Whisper-quiet villa elevators running on standard 220V single-phase domestic power without requiring deep pit excavation or rooftop machine rooms.",
    },
    {
      id: "apartments",
      title: "Residential Apartments",
      desc: "Flats, gated communities & housing societies",
      href: "/solutions#residential",
      image: "/images/cabin-study.png",
      badge: "High Traffic · 6 to 13 Passengers",
      cardTitle: "Residential Apartments",
      cardDesc: "Energy-efficient passenger elevators engineered for gated communities, multi-storey societies, and high-frequency residential traffic across Telangana.",
    },
    {
      id: "commercial",
      title: "Commercial & Offices",
      desc: "Office towers, malls & showrooms",
      href: "/solutions#commercial",
      image: "/images/commercial.png",
      badge: "Speeds up to 2.5 m/s · MRL",
      cardTitle: "Commercial & Office Towers",
      cardDesc: "Machine Room-Less (MRL) modular elevators with intelligent collective dispatching, destination management, and LCD cabin displays.",
    },
    {
      id: "industrial",
      title: "Industrial & Warehouses",
      desc: "Factories, plants & goods movement",
      href: "/solutions#industrial",
      image: "/images/industrial.png",
      badge: "Heavy Freight up to 5,000 kg",
      cardTitle: "Industrial Goods Elevators",
      cardDesc: "Reinforced chequered steel flooring, heavy-duty guide rails, and bi-parting doors engineered for factories, warehouses, and forklifts.",
    },
    {
      id: "hotels",
      title: "Hotels",
      desc: "Guest & service lifts for hospitality",
      href: "/solutions#commercial",
      image: "/images/hero-lobby.png",
      badge: "Hospitality Grade · Silent Drive",
      cardTitle: "Hotels & Hospitality Lifts",
      cardDesc: "Elegant guest elevators and discrete service lifts with custom aesthetic interior finishes, indirect lighting, and whisper leveling.",
    },
    {
      id: "hospitals",
      title: "Hospitals",
      desc: "Patient, stretcher & bed lifts",
      href: "/solutions#hospital",
      image: "/images/hospital.png",
      badge: "NBC 2016 Compliant · ±2mm Leveling",
      cardTitle: "Hospital & Stretcher Lifts",
      cardDesc: "Jerk-free precision leveling within ±2mm to protect patient beds, antibacterial stainless steel finishes, and emergency medical priority keys.",
    },
  ];

  const solutionsLiftType: MegamenuItem[] = [
    {
      id: "dumbwaiters",
      title: "Dumbwaiters",
      desc: "Compact service lifts for pantries, hotels & restaurants",
      href: "/products#dumbwaiters",
      image: "/images/safety-panel.png",
      badge: "50 - 250 kg · Food Grade SS",
      cardTitle: "Dumbwaiters & Service Lifts",
      cardDesc: "Compact stainless steel vertical dumbwaiters with bi-parting shutters for restaurants, pantries, hotels, and multi-storey residences.",
    },
    {
      id: "escalators",
      title: "Escalators & Moving Walks",
      desc: "High traffic commercial & public transit hubs",
      href: "/solutions#commercial",
      image: "/images/commercial.png",
      badge: "Public Transit Grade",
      cardTitle: "Escalators & Moving Walks",
      cardDesc: "Heavy-duty commercial escalators with energy-saving VVVF sleep mode, comb-plate sensors, and skirt illumination brushes.",
    },
  ];

  const allSolutions = [...solutionsBuildingType, ...solutionsLiftType];
  const activeSolution =
    allSolutions.find((s) => s.id === hoveredSolutionId) || solutionsBuildingType[0];

  // Products data with dynamic cards matching official series
  const productsSeries: MegamenuItem[] = [
    {
      id: "home-luxe",
      title: "SL Series (Villa & Home Lifts)",
      desc: "Pitless 150mm & headroomless villa lifts with single-phase power",
      href: "/sl-series",
      image: "/images/residential.png",
      badge: "Pitless 150mm · Single-Phase",
      cardTitle: "SL Series (Villa & Home Lifts)",
      cardDesc: "Ultra-quiet villa lifts with PMSM gearless drive or hydraulic power pack. Ideal for luxury duplexes, farmhouses, and retrofit homes.",
    },
    {
      id: "commercial-mrl",
      title: "VL Series (Commercial MRL)",
      desc: "Machine-room-less modular lifts with speeds up to 2.5 m/s",
      href: "/vl-series",
      image: "/images/commercial.png",
      badge: "MRL Modular · 2.5 m/s",
      cardTitle: "VL Series (Commercial MRL)",
      cardDesc: "No rooftop penthouse machine room required. Gearless Monadrive machine delivering 40% energy reduction and intelligent dispatch.",
    },
    {
      id: "medicare",
      title: "RMG Series (Hospital & Stretcher)",
      desc: "Antibacterial finishes, bed & stretcher dimensions with Code-Blue",
      href: "/rmg-series",
      image: "/images/hospital.png",
      badge: "NBC 2016 Stretcher Compliant",
      cardTitle: "RMG Series (Hospital & Stretcher)",
      cardDesc: "Antibacterial finishes, wide 1200mm telescopic doors, medical key recall, and battery automatic rescue device (ARD).",
    },
    {
      id: "heavy-freight",
      title: "VL-Heavy Freight & Cargo",
      desc: "Industrial grade reinforced floors & bi-parting doors up to 5,000 kg",
      href: "/products#vl-heavy-freight",
      image: "/images/industrial.png",
      badge: "Payloads up to 5,000 kg",
      cardTitle: "VL-Heavy Freight & Cargo Series",
      cardDesc: "Industrial grade reinforced steel cabin and bi-parting gates engineered for factories, warehouses, and heavy auto workshops.",
    },
    {
      id: "panoramic",
      title: "Panoramic Glass Capsule",
      desc: "Curved 360° architectural glass lifts for luxury spaces",
      href: "/products#panoramic-capsule",
      image: "/images/hero-lobby.png",
      badge: "360° Architectural Glass",
      cardTitle: "Panoramic Glass Capsule 360°",
      cardDesc: "Curved laminated safety glass with titanium gold or stainless frame, offering panoramic viewing for luxury villas and atriums.",
    },
    {
      id: "cabins-finishes-nav",
      title: "Cabins & Designer Finishes",
      desc: "Rose Gold Titanium, Hairline SS 304 & custom LED ceilings",
      href: "/cabins-finishes",
      image: "/images/cabin-study.png",
      badge: "Titanium PVD Finishes",
      cardTitle: "Cabins & Designer Finishes",
      cardDesc: "Architectural car interiors with custom titanium PVD coatings, etched mirror panels, granite flooring, and ambient LED lighting.",
    },
  ];

  const productsComponents: MegamenuItem[] = [
    {
      id: "pmsm-machines",
      title: "PMSM Gearless Traction Machines",
      desc: "Monadrive energy-saving machines (up to 40% reduction)",
      href: "/production-hub",
      image: "/images/safety-panel.png",
      badge: "Monadrive OEM Partner",
      cardTitle: "PMSM Traction Machines",
      cardDesc: "Permanent magnet synchronous motors with zero oil maintenance, 40% energy savings, and whisper-quiet operation.",
    },
    {
      id: "vvvf-controllers",
      title: "VVVF Microprocessor Controllers",
      desc: "Integrated ARD, emergency recall & duplex dispatching",
      href: "/production-hub",
      image: "/images/safety-panel.png",
      badge: "Integrated ARD · Duplex",
      cardTitle: "VVVF Smart Controllers",
      cardDesc: "Microprocessor-based control panel with integrated ARD battery backup, emergency recall, and smooth landing within ±2mm.",
    },
    {
      id: "door-operators",
      title: "Door Operators & Cabin Fixtures",
      desc: "Center-opening & telescopic doors with full light curtains",
      href: "/production-hub",
      image: "/images/cabin-study.png",
      badge: "VVVF Synchronized Doors",
      cardTitle: "Door Operators & Fixtures",
      cardDesc: "Smooth center-opening and telescopic automatic doors equipped with full-height 36-beam infrared light curtains.",
    },
  ];

  const allProducts = [...productsSeries, ...productsComponents];
  const activeProduct =
    allProducts.find((p) => p.id === hoveredProductId) || productsSeries[0];

  // Services data with dynamic cards
  const servicesLifecycle: MegamenuItem[] = [
    {
      id: "gold-amc",
      title: "Comprehensive AMC (Gold Plan)",
      desc: "24/7 breakdown support, routine audits & all spare parts included",
      href: "/services#comprehensive",
      image: "/images/safety-panel.png",
      badge: "All Spare Parts Included",
      cardTitle: "Comprehensive Gold AMC",
      cardDesc: "100% complete coverage: 12 monthly safety audits, 24/7 breakdown dispatch, and all replacement parts at zero out-of-pocket cost.",
    },
    {
      id: "silver-amc",
      title: "Non-Comprehensive AMC (Silver Plan)",
      desc: "Regular monthly preventive maintenance, lubrication & safety checks",
      href: "/services#routine",
      image: "/images/safety-panel.png",
      badge: "Preventive Care",
      cardTitle: "Non-Comprehensive Silver AMC",
      cardDesc: "Regular monthly preventive maintenance, lubrication, brake adjustments, and emergency breakdown attendance.",
    },
    {
      id: "modernization",
      title: "Lift Modernization & Retrofit",
      desc: "Upgrade legacy geared lifts to modern silent PMSM drive & VVVF safety",
      href: "/services#modernization",
      image: "/images/commercial.png",
      badge: "Geared to Gearless Overhaul",
      cardTitle: "Modernization & Retrofit",
      cardDesc: "Upgrade legacy geared elevators to silent PMSM gearless drive, cutting power bills by 40% and eliminating oil leaks.",
    },
    {
      id: "licensing",
      title: "Govt. Safety Inspection & Licensing",
      desc: "Certified hoistway testing, safety certificates & renewal support",
      href: "/services#inspection",
      image: "/images/hospital.png",
      badge: "Certified Testing & Renewal",
      cardTitle: "Safety Inspection & Licensing",
      cardDesc: "Official load deflection tests, governor trip speed calibration, and complete municipal license renewal assistance.",
    },
    {
      id: "breakdown",
      title: "24/7 Rapid Breakdown Dispatch",
      desc: "Emergency technician response across Karimnagar & Telangana",
      href: "/services#breakdown",
      image: "/images/safety-panel.png",
      badge: "< 30 Min Response",
      cardTitle: "24/7 Rapid Breakdown Dispatch",
      cardDesc: "GPS-dispatched mobile service vans across Karimnagar and Telangana equipped with essential spares for fast arrival.",
    },
  ];

  const activeService =
    servicesLifecycle.find((s) => s.id === hoveredServiceId) || servicesLifecycle[0];

  // Contact dropdown data with dynamic card preview
  const [hoveredContactId, setHoveredContactId] = useState<string>("telangana-network");

  const contactOptions: MegamenuItem[] = [
    {
      id: "telangana-network",
      title: "Telangana State Network & Enquiry",
      desc: "For any enquiry: 9700 123 878 — All 33 districts covered",
      href: "/telangana-network",
      image: "/images/telangana-enquiry-map.jpg",
      badge: "Direct Line: 9700 123 878",
      cardTitle: "Telangana State Network",
      cardDesc: "Dedicated local elevator engineering support across all 33 districts of Telangana. Direct 24/7 technical line: 9700 123 878.",
    },
    {
      id: "karimnagar-hq",
      title: "Karimnagar Central Office & Workshop",
      desc: "Kisan Nagar, Near Surya Paper — 505001",
      href: "/contact",
      image: "/images/hero-lobby.png",
      badge: "Headquarters & Experience Center",
      cardTitle: "Karimnagar Central Office",
      cardDesc: "Visit our central engineering headquarters and workshop at Kisan Nagar, Karimnagar for direct consultation.",
    },
    {
      id: "book-survey-nav",
      title: "Book Free Hoistway Site Survey",
      desc: "Zero-cost laser measurement of shaft, pit & headroom",
      href: "/book-survey",
      image: "/images/cabin-study.png",
      badge: "Free Engineer Visit",
      cardTitle: "Free Hoistway Survey",
      cardDesc: "Our senior engineer visits your building with laser meters to inspect pit, headroom, and civil shaft dimensions.",
    },
    {
      id: "quote-request-nav",
      title: "Request Instant Elevator Quotation",
      desc: "Detailed pricing, specifications & civil drawings",
      href: "/quote-request",
      image: "/images/commercial.png",
      badge: "Itemized Pricing & CAD",
      cardTitle: "Quotation & Blueprint",
      cardDesc: "Receive an itemized quote tailored to your architectural plans with zero hidden costs.",
    },
    {
      id: "b2b-nav",
      title: "B2B & Architect Partnership Desk",
      desc: "Civil blueprints, tenders & bulk project pricing",
      href: "/b2b-enquiry",
      image: "/images/project-commercial.png",
      badge: "Builders & Architects",
      cardTitle: "B2B Civil Coordination",
      cardDesc: "Dedicated civil coordination, CAD hoistway drawings, and special project pricing for builders and architects.",
    },
    {
      id: "breakdown-nav",
      title: "24/7 Breakdown & Emergency Helpline",
      desc: "Rapid technician dispatch for trapped passengers or repairs",
      href: "/service-request",
      image: "/images/safety-panel.png",
      badge: "24/7 Emergency Dispatch",
      cardTitle: "24/7 Emergency Response",
      cardDesc: "Immediate on-call technician dispatch across Telangana with guaranteed response time.",
    },
  ];

  const activeContact =
    contactOptions.find((c) => c.id === hoveredContactId) || contactOptions[0];

  const isActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* 100% Permanently Fixed / Sticky Navbar on Top with Official Logo Palette Theme */}
      <header
        className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-slate-100 shadow-2xs"
        suppressHydrationWarning
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-5 xl:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Standalone Official Logo */}
            <Link
              href="/"
              className="flex items-center shrink-0 py-2 group"
              aria-label="Vision Lifts & Solutions Home"
            >
              <div className="relative h-10 sm:h-12 w-36 sm:w-48 xl:w-52 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/images/vision-lifts-logo.png"
                  alt="Vision Lifts & Solutions"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-0.5 xl:gap-1.5"
              aria-label="Main Navigation"
            >
              {/* Home */}
              <Link
                href="/"
                className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap inline-flex items-center ${
                  isActive("/")
                    ? "text-[#423887] font-bold"
                    : "text-slate-700 hover:text-[#423887]"
                }`}
              >
                <span className="relative inline-block pb-1">
                  Home
                  {isActive("/") && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                  )}
                </span>
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap inline-flex items-center ${
                  isActive("/about")
                    ? "text-[#423887] font-bold"
                    : "text-slate-700 hover:text-[#423887]"
                }`}
              >
                <span className="relative inline-block pb-1">
                  About
                  {isActive("/about") && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                  )}
                </span>
              </Link>

              {/* Solutions Megamenu with DYNAMIC Hover Image (Logo Palette) */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/solutions"
                  className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive("/solutions")
                      ? "text-[#423887] font-bold"
                      : "text-slate-700 hover:text-[#423887]"
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    Solutions
                    {isActive("/solutions") && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                    )}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "solutions" ? "rotate-180 text-[#423887]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Solutions Megamenu Card */}
                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-1/2 -translate-x-1/3 mt-2 w-[790px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl shadow-purple-950/10 border border-slate-100 p-6 sm:p-7 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="grid grid-cols-12 gap-6">
                      {/* Left Column: Categorized Lists */}
                      <div className="col-span-7 space-y-4 pr-1">
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#863078] mb-2">
                            By building type
                          </p>
                          <div className="space-y-1">
                            {solutionsBuildingType.map((item) => {
                              const isHovered = hoveredSolutionId === item.id;
                              return (
                                <Link
                                  key={item.id}
                                  href={item.href}
                                  onMouseEnter={() => setHoveredSolutionId(item.id)}
                                  className={`group flex items-center justify-between p-2 rounded-xl transition-all ${
                                    isHovered ? "bg-purple-50/70" : "hover:bg-slate-50"
                                  }`}
                                >
                                  <div>
                                    <div
                                      className={`text-[13px] font-bold transition-colors leading-snug ${
                                        isHovered
                                          ? "text-[#423887]"
                                          : "text-slate-900 group-hover:text-[#423887]"
                                      }`}
                                    >
                                      {item.title}
                                    </div>
                                    <div className="text-[11px] text-slate-400 group-hover:text-slate-500 transition-colors">
                                      {item.desc}
                                    </div>
                                  </div>
                                  <span
                                    className={`text-xs font-semibold pl-2 transition-all ${
                                      isHovered
                                        ? "text-[#423887] translate-x-1"
                                        : "text-slate-300 group-hover:text-[#423887] group-hover:translate-x-0.5"
                                    }`}
                                  >
                                    ›
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>

                        <div className="pt-2 border-t border-slate-100">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[#863078] mb-2">
                            Type of lifts
                          </p>
                          <div className="space-y-1">
                            {solutionsLiftType.map((item) => {
                              const isHovered = hoveredSolutionId === item.id;
                              return (
                                <Link
                                  key={item.id}
                                  href={item.href}
                                  onMouseEnter={() => setHoveredSolutionId(item.id)}
                                  className={`group flex items-center justify-between p-2 rounded-xl transition-all ${
                                    isHovered ? "bg-purple-50/70" : "hover:bg-slate-50"
                                  }`}
                                >
                                  <div>
                                    <div
                                      className={`text-[13px] font-bold transition-colors leading-snug ${
                                        isHovered
                                          ? "text-[#423887]"
                                          : "text-slate-900 group-hover:text-[#423887]"
                                      }`}
                                    >
                                      {item.title}
                                    </div>
                                    <div className="text-[11px] text-slate-400 group-hover:text-slate-500 transition-colors">
                                      {item.desc}
                                    </div>
                                  </div>
                                  <span
                                    className={`text-xs font-semibold pl-2 transition-all ${
                                      isHovered
                                        ? "text-[#423887] translate-x-1"
                                        : "text-slate-300 group-hover:text-[#423887] group-hover:translate-x-0.5"
                                    }`}
                                  >
                                    ›
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Right Column: DYNAMIC Cabin Card on Hover */}
                      <div className="col-span-5 border-l border-slate-100 pl-6 flex flex-col justify-between">
                        <div>
                          <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900 transition-all">
                            <Image
                              key={activeSolution.image}
                              src={activeSolution.image}
                              alt={activeSolution.cardTitle}
                              fill
                              className="object-cover transition-opacity duration-300 animate-in fade-in"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute bottom-2.5 left-3 right-3 text-white text-[10px] font-semibold tracking-wider uppercase opacity-95">
                              {activeSolution.badge}
                            </div>
                          </div>

                          <h4 className="text-[15px] font-extrabold text-slate-900 mt-4 tracking-tight transition-all">
                            {activeSolution.cardTitle}
                          </h4>
                          <p className="text-[12px] text-slate-500 leading-relaxed mt-1 line-clamp-3">
                            {activeSolution.cardDesc}
                          </p>

                          <Link
                            href={activeSolution.href}
                            className="inline-flex items-center gap-1 text-[12px] font-bold text-[#423887] underline underline-offset-4 hover:text-[#863078] transition-colors mt-3"
                          >
                            Explore {activeSolution.title.split("&")[0]} specs →
                          </Link>
                        </div>

                        <div className="pt-4 border-t border-slate-100 mt-4">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveDropdown(null);
                              setSurveyModalOpen(true);
                            }}
                            className="w-full py-2.5 px-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white rounded-xl text-xs font-bold text-center transition-all shadow-xs"
                          >
                            Book a Free Site Survey
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Products Megamenu with DYNAMIC Hover Image */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("products")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/products"
                  className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive("/products")
                      ? "text-[#423887] font-bold"
                      : "text-slate-700 hover:text-[#423887]"
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    Products
                    {isActive("/products") && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                    )}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "products" ? "rotate-180 text-[#423887]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Products Dropdown - Clean & Compact matching Sneha style (Image 2) */}
                {activeDropdown === "products" && (
                  <div className="absolute top-full left-0 mt-2 w-60 bg-white rounded-2xl shadow-2xl shadow-purple-950/15 border border-slate-100 p-2.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="space-y-0.5">
                      <Link
                        href="/sl-series"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold text-slate-800 hover:text-[#423887] hover:bg-purple-50/70 transition-all"
                      >
                        SL Series
                      </Link>
                      <Link
                        href="/vl-series"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold text-slate-800 hover:text-[#423887] hover:bg-purple-50/70 transition-all"
                      >
                        VL Series
                      </Link>
                      <Link
                        href="/rmg-series"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold text-slate-800 hover:text-[#423887] hover:bg-purple-50/70 transition-all"
                      >
                        RMG Series
                      </Link>
                      <Link
                        href="/cabins-finishes"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3.5 py-2.5 rounded-xl text-[13.5px] font-bold text-slate-800 hover:text-[#423887] hover:bg-purple-50/70 transition-all"
                      >
                        Cabins & Finishes
                      </Link>
                    </div>

                    <div className="pt-2 mt-1.5 border-t border-slate-100">
                      <Link
                        href="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="btn-sheen block w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-black text-xs text-center transition-all shadow-sm active:scale-98"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>Compare All →</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Services Megamenu with DYNAMIC Hover Image */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/services"
                  className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive("/services")
                      ? "text-[#423887] font-bold"
                      : "text-slate-700 hover:text-[#423887]"
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    Services
                    {isActive("/services") && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                    )}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "services" ? "rotate-180 text-[#423887]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Services Megamenu Card */}
                {activeDropdown === "services" && (
                  <div className="absolute top-full left-1/2 -translate-x-2/3 mt-2 w-[770px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl shadow-purple-950/10 border border-slate-100 p-6 sm:p-7 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-7 space-y-3 pr-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-[#863078] mb-1">
                          Lifecycle Care & Maintenance
                        </p>
                        <div className="space-y-1">
                          {servicesLifecycle.map((item) => {
                            const isHovered = hoveredServiceId === item.id;
                            return (
                              <Link
                                key={item.id}
                                href={item.href}
                                onMouseEnter={() => setHoveredServiceId(item.id)}
                                className={`group flex items-center justify-between p-2 rounded-xl transition-all ${
                                  isHovered ? "bg-purple-50/70" : "hover:bg-slate-50"
                                }`}
                              >
                                <div>
                                  <div
                                    className={`text-[13px] font-bold transition-colors leading-snug ${
                                      isHovered
                                        ? "text-[#423887]"
                                        : "text-slate-900 group-hover:text-[#423887]"
                                    }`}
                                  >
                                    {item.title}
                                  </div>
                                  <div className="text-[11px] text-slate-400 group-hover:text-slate-500 transition-colors">
                                    {item.desc}
                                  </div>
                                </div>
                                <span
                                  className={`text-xs font-semibold pl-2 transition-all ${
                                    isHovered
                                      ? "text-[#423887] translate-x-1"
                                      : "text-slate-300 group-hover:text-[#423887] group-hover:translate-x-0.5"
                                  }`}
                                >
                                  ›
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Column: Dynamic Service Card */}
                      <div className="col-span-5 border-l border-slate-100 pl-6 flex flex-col justify-between">
                        <div>
                          <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100 bg-slate-900 transition-all">
                            <Image
                              key={activeService.image}
                              src={activeService.image}
                              alt={activeService.cardTitle}
                              fill
                              className="object-cover transition-opacity duration-300 animate-in fade-in"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            <div className="absolute bottom-2.5 left-3 right-3 text-white text-[10px] font-semibold tracking-wider uppercase opacity-95">
                              {activeService.badge}
                            </div>
                          </div>

                          <h4 className="text-[15px] font-extrabold text-slate-900 mt-4 tracking-tight">
                            {activeService.cardTitle}
                          </h4>
                          <p className="text-[12px] text-slate-500 leading-relaxed mt-1 line-clamp-3">
                            {activeService.cardDesc}
                          </p>

                          <Link
                            href={activeService.href}
                            className="inline-flex items-center gap-1 text-[12px] font-bold text-[#423887] underline underline-offset-4 hover:text-[#863078] transition-colors mt-3"
                          >
                            Compare AMC plans →
                          </Link>
                        </div>

                        <div className="pt-4 border-t border-slate-100 mt-4">
                          <Link
                            href="/book-survey"
                            className="block w-full py-2.5 px-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white rounded-xl text-xs font-bold text-center transition-all shadow-xs"
                          >
                            Book Free Safety Audit
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Projects */}
              <Link
                href="/projects"
                className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap inline-flex items-center ${
                  isActive("/projects")
                    ? "text-[#423887] font-bold"
                    : "text-slate-700 hover:text-[#423887]"
                }`}
              >
                <span className="relative inline-block pb-1">
                  Projects
                  {isActive("/projects") && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                  )}
                </span>
              </Link>

              {/* Safety & Tech */}
              <Link
                href="/safety-tech"
                className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap inline-flex items-center ${
                  isActive("/safety-tech") || isActive("/safety-technology")
                    ? "text-[#423887] font-bold"
                    : "text-slate-700 hover:text-[#423887]"
                }`}
              >
                <span className="relative inline-block pb-1">
                  Safety & Tech
                  {(isActive("/safety-tech") || isActive("/safety-technology")) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                  )}
                </span>
              </Link>

              {/* Contact Dropdown with Telangana Network & 9700 123 878 */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/contact"
                  className={`px-2 xl:px-2.5 py-1.5 text-[13px] xl:text-[13.5px] font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
                    isActive("/contact") || isActive("/telangana-network")
                      ? "text-[#423887] font-bold"
                      : "text-slate-700 hover:text-[#423887]"
                  }`}
                >
                  <span className="relative inline-block pb-1">
                    Contact
                    {(isActive("/contact") || isActive("/telangana-network")) && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] rounded-full" />
                    )}
                  </span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      activeDropdown === "contact" ? "rotate-180 text-[#423887]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>

                {/* Contact Dropdown - Focused Telangana State Network & Direct Hotline Card */}
                {activeDropdown === "contact" && (
                  <div className="absolute top-full right-0 mt-2 w-[390px] max-w-[calc(100vw-2rem)] bg-white rounded-3xl shadow-2xl shadow-purple-950/15 border border-slate-100 p-5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                    {/* Header Strip */}
                    <div className="flex items-center justify-between mb-3.5 px-0.5">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-black uppercase tracking-wider text-[#863078]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#863078] animate-pulse"></span>
                        <span>Telangana State Network</span>
                      </div>
                      <span className="text-[11px] font-bold text-slate-400">
                        33 Districts
                      </span>
                    </div>

                    {/* Visual Preview: Telangana Map & Central Line */}
                    <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-xs border border-slate-200/80 bg-slate-100 group">
                      <Image
                        src="/images/telangana-enquiry-map.jpg"
                        alt="Telangana State Network Coverage"
                        fill
                        className="object-contain p-2 group-hover:scale-103 transition-transform duration-500"
                      />
                    </div>

                    {/* Quick Access Two-Box Grid */}
                    <div className="grid grid-cols-2 gap-2 mt-3.5">
                      <a
                        href="tel:9700123878"
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/80 hover:border-emerald-200 transition-all text-left group"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-emerald-700">
                            Statewide Hotline
                          </span>
                        </div>
                        <div className="text-xs font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                          9700 123 878
                        </div>
                      </a>

                      <a
                        href="https://wa.me/919700123878?text=Hello%20Vision%20Lifts%2C%20I%20need%20elevator%20information."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/80 hover:border-purple-200 transition-all text-left group"
                      >
                        <div className="flex items-center gap-1.5 mb-0.5">
                          <svg className="w-3.5 h-3.5 text-[#863078]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#423887]">
                            WhatsApp Desk
                          </span>
                        </div>
                        <div className="text-xs font-black text-slate-900 group-hover:text-[#423887] transition-colors">
                          Chat with Team
                        </div>
                      </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-3.5 space-y-2">
                      <a
                        href="tel:9700123878"
                        className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black text-center flex items-center justify-center gap-2 transition-all shadow-xs active:scale-98"
                        style={{ color: "#ffffff" }}
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span style={{ color: "#ffffff" }}>Call 9700 123 878 Direct</span>
                      </a>

                      <Link
                        href="/contact"
                        onClick={() => setActiveDropdown(null)}
                        className="btn-sheen block w-full py-2.5 px-4 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white rounded-xl text-xs font-black text-center transition-all shadow-md active:scale-98"
                        style={{ color: "#ffffff" }}
                      >
                        <span style={{ color: "#ffffff" }}>Open Complete Contact & Estimate Page →</span>
                      </Link>
                    </div>

                    {/* Footer Address */}
                    <div className="mt-3 pt-2.5 border-t border-slate-100 text-center flex items-center justify-center gap-1.5">
                      <svg className="w-3 h-3 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-[10px] font-semibold text-slate-500">
                        Central HQ: Kisan Nagar, Karimnagar · Regional Hub: Hyderabad
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Action Cluster (Logo Color Theme - No Red) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              {/* Admin Console Link */}
              <Link
                href="/admin"
                className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 text-[11px] xl:text-xs font-semibold text-slate-700 hover:text-[#423887] border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-2xs whitespace-nowrap"
                title="Admin Console Access"
              >
                <svg
                  className="w-3.5 h-3.5 text-[#863078]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Admin</span>
              </Link>

              {/* Book Site Survey CTA Button - Signature Logo Brand Gradient */}
              <Link
                href="/book-survey"
                className="px-3.5 xl:px-4 py-1.5 xl:py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white text-[11px] xl:text-xs font-bold uppercase tracking-wider rounded-full transition-all shadow-sm shadow-purple-950/15 whitespace-nowrap inline-flex items-center justify-center active:scale-95"
              >
                Book Survey
              </Link>
            </div>

            {/* Mobile Actions: Clean Standalone Hamburger Button (NO Cramped Book Survey) */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-2xl text-slate-700 hover:bg-slate-100/90 active:bg-slate-200 transition-all cursor-pointer focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Drawer (Clean, Architectural, Zero Emoji Clutter, Elevated z-[100]) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-[100] bg-white w-full h-[calc(100dvh-4rem)] sm:h-[calc(100dvh-5rem)] overflow-y-auto px-5 py-4 border-t border-slate-100 shadow-2xl">
          <div className="flex flex-col space-y-4 pb-36">
            
            {/* 1. Executive Quick Contact Strip - Clean Architectural Style, No Emojis */}
            <div className="p-3.5 bg-slate-50 border border-slate-200/90 rounded-2xl flex items-center justify-between gap-3">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  Telangana Engineering Helpline
                </div>
                <a
                  href="tel:9700123878"
                  className="text-base font-extrabold text-slate-900 hover:text-[#423887] transition-colors tracking-tight block mt-0.5"
                >
                  +91 9700 123 878
                </a>
              </div>

              <a
                href="tel:9700123878"
                className="px-4 py-2 bg-[#423887] hover:bg-[#342c6e] text-white rounded-xl text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-xs transition-colors shrink-0"
                style={{ color: "#ffffff" }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span style={{ color: "#ffffff" }}>Call Desk</span>
              </a>
            </div>

            {/* 2. Navigation Items: Pure Typography, Refined Tracking, Zero Toy Emojis */}
            <nav className="divide-y divide-slate-100 text-sm font-semibold text-slate-900">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 hover:text-[#423887] transition-colors"
              >
                <span>Home</span>
                <span className="text-slate-300 text-xs">→</span>
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 hover:text-[#423887] transition-colors"
              >
                <span>About Us</span>
                <span className="text-[10px] font-bold text-[#863078] bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-100 uppercase tracking-wider">
                  Since 2014
                </span>
              </Link>

              {/* Products Submenu */}
              <div className="py-2.5">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "products" ? null : "products")
                  }
                  className="w-full flex items-center justify-between py-1 font-semibold text-slate-900 hover:text-[#423887] transition-colors"
                >
                  <span>Products & Series</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileSubmenu === "products" ? "rotate-180 text-[#863078]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileSubmenu === "products" && (
                  <div className="mt-2.5 space-y-1.5 pl-3 border-l-2 border-[#863078]/30 py-1">
                    <Link
                      href="/sl-series"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 transition-all"
                    >
                      <div className="text-xs font-bold text-slate-900">SL Series (Villa & Home Lifts)</div>
                      <div className="text-[11px] text-slate-500 font-normal">Near-pitless 150mm · Single Phase 220V</div>
                    </Link>

                    <Link
                      href="/vl-series"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 transition-all"
                    >
                      <div className="text-xs font-bold text-slate-900">VL Series (Commercial MRL)</div>
                      <div className="text-[11px] text-slate-500 font-normal">High Speed up to 2.5 m/s · Gearless PMSM</div>
                    </Link>

                    <Link
                      href="/rmg-series"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 transition-all"
                    >
                      <div className="text-xs font-bold text-slate-900">RMG Series (Hospital & Stretcher)</div>
                      <div className="text-[11px] text-slate-500 font-normal">±2mm S-Curve Leveling · NBC Compliant</div>
                    </Link>

                    <Link
                      href="/cabins-finishes"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block p-2 rounded-xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200/80 transition-all"
                    >
                      <div className="text-xs font-bold text-slate-900">Cabins & Architectural Finishes</div>
                      <div className="text-[11px] text-slate-500 font-normal">Rose Gold Titanium, Mirror SS & Panoramic Glass</div>
                    </Link>

                    <Link
                      href="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="inline-block pt-1 text-xs font-bold text-[#863078] hover:text-[#423887]"
                    >
                      Compare All Product Models & Specifications →
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Submenu */}
              <div className="py-2.5">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "solutions" ? null : "solutions")
                  }
                  className="w-full flex items-center justify-between py-1 font-semibold text-slate-900 hover:text-[#423887] transition-colors"
                >
                  <span>Solutions</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileSubmenu === "solutions" ? "rotate-180 text-[#863078]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileSubmenu === "solutions" && (
                  <div className="mt-2 pl-3 border-l-2 border-slate-200 space-y-1.5 py-1 text-xs">
                    {solutionsBuildingType.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-medium text-slate-600 hover:text-[#423887] py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Services Submenu */}
              <div className="py-2.5">
                <button
                  type="button"
                  onClick={() =>
                    setMobileSubmenu(mobileSubmenu === "services" ? null : "services")
                  }
                  className="w-full flex items-center justify-between py-1 font-semibold text-slate-900 hover:text-[#423887] transition-colors"
                >
                  <span>Services & AMC</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileSubmenu === "services" ? "rotate-180 text-[#863078]" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {mobileSubmenu === "services" && (
                  <div className="mt-2 pl-3 border-l-2 border-slate-200 space-y-1.5 py-1 text-xs">
                    {servicesLifecycle.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block font-medium text-slate-600 hover:text-[#423887] py-1"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 hover:text-[#423887] transition-colors"
              >
                <span>Projects</span>
                <span className="text-slate-300 text-xs">→</span>
              </Link>

              <Link
                href="/safety-technology"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 hover:text-[#423887] transition-colors"
              >
                <span>Safety & Technology</span>
                <span className="text-xs font-semibold text-emerald-600">8-Tier Shield</span>
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 hover:text-[#423887] transition-colors"
              >
                <span>Contact & Branches</span>
                <span className="text-xs font-semibold text-[#863078]">Karimnagar & Hyderabad</span>
              </Link>
            </nav>

            {/* 3. Bottom Action Cluster: Big Primary CTA & Secondary Options */}
            <div className="pt-3 space-y-3 border-t border-slate-100">
              <Link
                href="/book-survey"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-sheen block w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white text-xs font-extrabold uppercase tracking-wider rounded-xl text-center shadow-md shadow-[#863078]/25 transition-all active:scale-98"
                style={{ color: "#ffffff" }}
              >
                <span style={{ color: "#ffffff" }}>Book Free Hoistway Site Survey →</span>
              </Link>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://wa.me/919700123878?text=Hello%20Vision%20Lifts%2C%20I%20need%20elevator%20quotation%20and%20hoistway%20information."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1.5 shadow-2xs active:scale-95 transition-all"
                  style={{ color: "#ffffff" }}
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.884 2.796.885h.005c3.179 0 5.766-2.587 5.767-5.766 0-3.18-2.588-5.772-5.772zm3.397 8.192c-.145.408-.847.785-1.177.834-.33.049-.757.068-2.457-.638-1.7-.706-2.776-2.441-2.86-2.553-.085-.112-.693-.923-.693-1.761s.437-1.25.592-1.423c.155-.172.338-.216.45-.216.113 0 .226.002.324.007.104.005.244-.04.381.29.145.352.497 1.214.54 1.302.043.088.072.19.014.305-.058.115-.088.187-.175.29-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.103.178.461.761 1.054 1.291.764.681 1.408.892 1.609.992.201.1.32.083.438-.052.119-.136.508-.591.644-.793.136-.203.272-.17.458-.102.186.068 1.182.557 1.385.659.203.102.339.153.39.237.051.085.051.493-.094.901z" />
                  </svg>
                  <span style={{ color: "#ffffff" }}>WhatsApp</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 bg-purple-50 hover:bg-purple-100 text-[#423887] border border-purple-200 text-xs font-bold rounded-xl text-center flex items-center justify-center gap-1 active:scale-95 transition-all"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Branch Hubs</span>
                </Link>
              </div>

              {/* Verified Karimnagar HQ Address */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-center space-y-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Karimnagar Central HQ & Workshop
                </div>
                <div className="text-[11px] font-bold text-slate-700 leading-tight">
                  0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar – 505001
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      <SiteSurveyModal
        isOpen={surveyModalOpen}
        onClose={() => setSurveyModalOpen(false)}
      />
    </>
  );
}
