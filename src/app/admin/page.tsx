"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SeoPageConfig } from "@/app/api/admin/seo/route";

type AdminSection =
  | "dashboard"
  | "products"
  | "services"
  | "projects"
  | "jobs"
  | "applications"
  | "leads"
  | "enquiries"
  | "seo"
  | "settings";

interface ProductItem {
  id: string;
  name: string;
  category: "Residential Lifts" | "Commercial Towers" | "Hospital Lifts" | "Industrial Freight" | "Panoramic Capsule" | "B2B Components";
  tagline: string;
  description: string;
  capacity: string;
  speed: string;
  floors: string;
  machineRoom: string;
  image: string;
  slug: string;
  status: "Live" | "Draft";
}

interface ServiceItem {
  id: string;
  name: string;
  category: "AMC Maintenance" | "Modernization" | "Breakdown & Rescue" | "Safety & Inspection";
  sla: string;
  sparesCoverage: string;
  description: string;
  features: string[];
  image: string;
  slug: string;
  status: "Live" | "Draft";
}

interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Healthcare" | "Industrial";
  location: string;
  floors: string;
  liftType: string;
  completedYear: string;
  description: string;
  image: string;
  slug: string;
  status: "Live" | "Draft";
}

interface JobItem {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  vacancies: number;
  type: string;
  description: string;
  status: "Active" | "Paused";
}

interface CandidateItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  phone: string;
  email: string;
  date: string;
  status: "New" | "Reviewing" | "Shortlisted" | "Hired" | "Rejected";
}

interface EnquiryItem {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: "Unread" | "Replied" | "Archived";
}

// =============================================================================
// COMPREHENSIVE INITIAL DATA STORES (Covering entire Vision Lifts ecosystem)
// =============================================================================
const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: "prod-1",
    name: "VL-Home Luxe Series",
    category: "Residential Lifts",
    tagline: "Architectural Pitless Home Lift for Villas & Duplexes",
    description: "Single-phase 220V hydraulic and shallow-pit (150mm) luxury villa elevators with automatic rescue device (ARD) and quiet gearless drive.",
    capacity: "4 - 6 Persons (320 - 450 kg)",
    speed: "0.5 - 0.7 m/s",
    floors: "G+1 to G+4",
    machineRoom: "Machine-Room-Less (MRL)",
    image: "/images/residential.png",
    slug: "/products#home-luxe",
    status: "Live",
  },
  {
    id: "prod-2",
    name: "Commercial Gearless MRL Elevator",
    category: "Commercial Towers",
    tagline: "Eco-Efficient High Speed MRL Elevators for Business Buildings",
    description: "1.75 m/s speed, PMSM regenerative drive saving up to 45% electricity with group dispatching controls and durable SS 304 finishes.",
    capacity: "8 - 20 Persons (544 - 1360 kg)",
    speed: "1.0 - 1.75 m/s",
    floors: "Up to 15 Floors",
    machineRoom: "Gearless MRL",
    image: "/images/commercial.png",
    slug: "/products#commercial",
    status: "Live",
  },
  {
    id: "prod-3",
    name: "VL-Medicare Stretcher Hospital Lift",
    category: "Hospital Lifts",
    tagline: "Jerk-Free Bed & Patient Vertical Transport",
    description: "±2mm precision jerk-free patient leveling compliant with NBC 2016 healthcare codes, deep ICU bed dimensions and priority code-blue override.",
    capacity: "15 - 26 Persons (1020 - 1768 kg)",
    speed: "0.75 - 1.0 m/s",
    floors: "Up to 12 Floors",
    machineRoom: "Machine-Room-Less (MRL)",
    image: "/images/hospital.png",
    slug: "/products#hospital",
    status: "Live",
  },
  {
    id: "prod-4",
    name: "VL-Heavy Freight & Cargo Series",
    category: "Industrial Freight",
    tagline: "Rugged Industrial Strength for Materials & Pallet Loading",
    description: "Heavy-duty cargo elevator with reinforced structural steel chassis, 4mm chequered steel plate flooring, and forklift collision guardrails.",
    capacity: "1000 kg - 5000 kg",
    speed: "0.35 - 0.75 m/s",
    floors: "Up to 8 Floors",
    machineRoom: "Small Machine Room",
    image: "/images/industrial.png",
    slug: "/products#freight",
    status: "Live",
  },
  {
    id: "prod-5",
    name: "VL-Panoramic Capsule Series",
    category: "Panoramic Capsule",
    tagline: "Glass Aesthetic Capsule Elevators for Luxury Facades & Malls",
    description: "180° and 360° curved laminated safety glass capsule lifts with titanium rose-gold mirrors, custom dome lighting and whisper-quiet VVVF drive.",
    capacity: "6 - 13 Persons (408 - 884 kg)",
    speed: "1.0 m/s",
    floors: "Up to 10 Floors",
    machineRoom: "Gearless MRL",
    image: "/images/hero-lobby.png",
    slug: "/products#capsule",
    status: "Live",
  },
  {
    id: "prod-6",
    name: "VL-Hydraulic Pitless Villa Lift",
    category: "Residential Lifts",
    tagline: "Ultra-Quiet Hydraulic Vertical Mobility for Duplexes",
    description: "Operates with zero hoistway pit or rooftop machine room. Direct 1:1 or 2:1 hydraulic piston drive with whisper-soft landing technology.",
    capacity: "2 - 5 Persons (200 - 400 kg)",
    speed: "0.4 - 0.6 m/s",
    floors: "G+1 to G+3",
    machineRoom: "Hydraulic (No MR)",
    image: "/images/cabin-study.png",
    slug: "/products#hydraulic",
    status: "Live",
  },
  {
    id: "prod-7",
    name: "VL-Service Dumbwaiters",
    category: "B2B Components",
    tagline: "Compact Goods & Food Service Lifts for Restaurants & Hotels",
    description: "Food-grade SS 304 vertical bi-parting dumbwaiters for restaurants, pharmacies, banquet halls and multi-level kitchens.",
    capacity: "50 kg - 250 kg",
    speed: "0.4 m/s",
    floors: "2 - 5 Floors",
    machineRoom: "Self-Contained Shaft",
    image: "/images/safety-panel.png",
    slug: "/products#dumbwaiter",
    status: "Live",
  },
  {
    id: "prod-8",
    name: "PMSM Gearless Traction Machines",
    category: "B2B Components",
    tagline: "High-Torque Permanent Magnet Synchronous Motors",
    description: "Direct-drive synchronous traction motors manufactured with high-grade neodymium magnets. 40% less power, zero lubrication oil, sound < 48 dB.",
    capacity: "320 kg to 2000 kg",
    speed: "0.5 to 2.5 m/s",
    floors: "Up to 32 Stops",
    machineRoom: "Gearless MRL",
    image: "/images/industrial.png",
    slug: "/products#pmsm",
    status: "Live",
  },
  {
    id: "prod-9",
    name: "Integrated VVVF Microprocessor Controllers",
    category: "B2B Components",
    tagline: "32-Bit Dual-Core DSP Unified Elevator Control Panel",
    description: "Combines CAN-bus communication, precise distance deceleration, built-in fault memory logging, and Automatic Rescue Device (ARD) board.",
    capacity: "Up to 32 Stops",
    speed: "Up to 3.0 m/s",
    floors: "Simplex / Duplex / Triplex",
    machineRoom: "MRL & MR Compatible",
    image: "/images/safety-panel.png",
    slug: "/products#controllers",
    status: "Live",
  },
  {
    id: "prod-10",
    name: "Automatic Landing & Car Door Systems",
    category: "B2B Components",
    tagline: "VVVF Synchronous Belt-Driven Telescopic & Center Opening Doors",
    description: "Whisper-quiet VVVF closed-loop door operators with adjustable velocity curves, over-torque obstruction auto-reverse, and fire-rated headers.",
    capacity: "700mm - 1500mm Opening",
    speed: "0.2 - 0.5 m/s",
    floors: "Universal",
    machineRoom: "Header Mounted",
    image: "/images/commercial.png",
    slug: "/products#doors",
    status: "Live",
  },
  {
    id: "prod-11",
    name: "Designer Stainless Steel Cabins & Inlays",
    category: "B2B Components",
    tagline: "Laser-Cut CNC Modular Passenger Cabins in Rose Gold & Titanium",
    description: "AISI 304 stainless steel cabins with etched patterns, ambient LED false ceilings, aluminum extrusion handrails, and marble floor inlay provisions.",
    capacity: "Custom Dimensions",
    speed: "All Speeds",
    floors: "All Heights",
    machineRoom: "Universal",
    image: "/images/project-residence.png",
    slug: "/products#cabins",
    status: "Live",
  },
  {
    id: "prod-12",
    name: "VL-Automobile / Car Elevator",
    category: "Industrial Freight",
    tagline: "Heavy-Duty Vehicle Elevators for Multi-Level Showrooms",
    description: "Engineered for vehicle dealerships and commercial parkades with 3000kg - 5000kg load capacity, dual control panels and infrared positioning guides.",
    capacity: "3000 kg - 5000 kg",
    speed: "0.25 - 0.5 m/s",
    floors: "Up to 6 Floors",
    machineRoom: "Hydraulic / Traction",
    image: "/images/project-commercial.png",
    slug: "/products#car-elevator",
    status: "Live",
  },
];

const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: "serv-1",
    name: "Comprehensive Gold AMC Plan",
    category: "AMC Maintenance",
    sla: "30 Mins (Breakdown Response)",
    sparesCoverage: "100% (All Mechanical & Electrical Parts Included)",
    description: "Complete peace-of-mind maintenance with zero out-of-pocket expenses. Includes 12 monthly preventive safety audits, round-the-clock emergency support, and free replacement of worn parts.",
    features: ["12 Scheduled monthly servicing visits", "100% spares coverage (drive, PCB, ropes, rollers)", "24/7 priority emergency entrapment response", "Free annual safety license renewal assistance"],
    image: "/images/safety-panel.png",
    slug: "/services#gold-amc",
    status: "Live",
  },
  {
    id: "serv-2",
    name: "Non-Comprehensive Silver AMC Plan",
    category: "AMC Maintenance",
    sla: "60 Mins Response",
    sparesCoverage: "Routine Lubrication & Consumables Included",
    description: "Cost-effective routine maintenance package for residential societies and low-rise apartments. Ensures maximum uptime with scheduled monthly lubrication and adjustments.",
    features: ["12 Monthly maintenance checkups", "Free motor oil, lubricants, and carbon brush tuning", "Discounted genuine spares at manufacturer pricing", "24/7 breakdown desk support via 9700 123 878"],
    image: "/images/residential.png",
    slug: "/services#silver-amc",
    status: "Live",
  },
  {
    id: "serv-3",
    name: "Geared-to-Gearless PMSM Modernization",
    category: "Modernization",
    sla: "Turnkey Retrofit (3-5 Days)",
    sparesCoverage: "New Machine, Drive & Controller Warranty (2 Years)",
    description: "Replace noisy, vibrating geared machines with whisper-quiet PMSM gearless technology. Cuts electricity bills by up to 45% and improves ride comfort.",
    features: ["No major civil shaft alterations needed", "Up to 45% reduction in electricity consumption", "Smooth jerk-free start/stop leveling", "Complete controller and door operator upgrade"],
    image: "/images/cabin-study.png",
    slug: "/services#modernization",
    status: "Live",
  },
  {
    id: "serv-4",
    name: "24/7 Emergency Breakdown & Rescue Desk",
    category: "Breakdown & Rescue",
    sla: "Instant Statewide Dispatch",
    sparesCoverage: "Emergency Repairs Covered Under AMC",
    description: "Central emergency hotline (9700 123 878) dispatching certified technicians across all 33 districts of Telangana with dedicated tools and emergency rescue gear.",
    features: ["Direct human hotline (9700 123 878)", "Mobile technician vans stationed across Karimnagar, Hyd, Warangal", "Automatic passenger release protocol", "Post-breakdown root cause analysis report"],
    image: "/images/telangana-enquiry-map.jpg",
    slug: "/telangana-network",
    status: "Live",
  },
  {
    id: "serv-5",
    name: "Hoistway Laser Alignment & Pit Site Survey",
    category: "Safety & Inspection",
    sla: "Same-Day Appointment",
    sparesCoverage: "Zero Cost (Complimentary Survey)",
    description: "Certified elevator engineers visit your construction site with optical laser measurement tools to calculate hoistway plumb, pit depth, overhead clearance, and generate CAD layouts.",
    features: ["Zero-cost hoistway physical measurement", "3D CAD layout & pit clearance verification", "NBC 2016 & IS 14665 compliance audit", "Itemized turnkey price quotation"],
    image: "/images/hero-lobby.png",
    slug: "/book-survey",
    status: "Live",
  },
  {
    id: "serv-6",
    name: "Govt Safety License Renewal & Certification",
    category: "Safety & Inspection",
    sla: "7 Working Days",
    sparesCoverage: "Inspection Audit & Compliance Filing",
    description: "Assistance with obtaining and renewing mandatory electrical inspectorate safety licenses for commercial and residential elevators across Telangana.",
    features: ["Complete load test and safety gear drop test", "Inspection paperwork filing with Telangana State Authorities", "Safety certificate renewal processing", "Door interlock and ARD battery load testing"],
    image: "/images/commercial.png",
    slug: "/services#licensing",
    status: "Live",
  },
  {
    id: "serv-7",
    name: "Automatic Door & Sensor Retrofit Upgrade",
    category: "Modernization",
    sla: "48 Hours Installation",
    sparesCoverage: "Complete Door Drive & 36-Beam Sensor Warranty",
    description: "Upgrade dangerous manual collapsible grill gates to modern European-style automatic sliding doors with full-height 36-beam infrared safety curtains.",
    features: ["Eliminates passenger door trapping risks", "36-Beam infrared light curtain door protection", "Whisper-quiet VVVF micro-drive belt mechanism", "Stainless steel or glass door panel options"],
    image: "/images/hospital.png",
    slug: "/services#doors-retrofit",
    status: "Live",
  },
];

const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Prestige Luxury Villa Project - Karimnagar",
    category: "Residential",
    location: "Mukarampura, Karimnagar",
    floors: "G+2 (3 Stops)",
    liftType: "VL-Home Luxe Rose Gold Panoramic Glass",
    completedYear: "2026",
    description: "Custom hexagonal panoramic glass capsule elevator installation with Italian marble flooring and quiet gearless drive.",
    image: "/images/project-residence.png",
    slug: "/projects#prestige-villa",
    status: "Live",
  },
  {
    id: "proj-2",
    title: "Apollo Clinic & Stretcher Lift - Warangal",
    category: "Healthcare",
    location: "Hanamkonda, Warangal",
    floors: "G+4 (5 Stops)",
    liftType: "VL-Medicare Stretcher Bed Elevator",
    completedYear: "2026",
    description: "NBC compliant stretcher elevator with ±2mm level accuracy, medical key override, and antibacterial copper push buttons.",
    image: "/images/project-hospital.png",
    slug: "/projects#apollo-clinic",
    status: "Live",
  },
  {
    id: "proj-3",
    title: "Fortune Commercial Business Hub - Hyderabad",
    category: "Commercial",
    location: "Gachibowli, Hyderabad",
    floors: "G+8 (9 Stops)",
    liftType: "Dual Gearless MRL Passenger Lifts (1.75 m/s)",
    completedYear: "2025",
    description: "High-traffic dual group dispatching commercial elevators with smart card RFID access and regenerative power savings.",
    image: "/images/project-commercial.png",
    slug: "/projects#fortune-hub",
    status: "Live",
  },
  {
    id: "proj-4",
    title: "Royal Residency Luxury Apartments - Nizamabad",
    category: "Residential",
    location: "Subhash Nagar, Nizamabad",
    floors: "G+5 (6 Stops)",
    liftType: "VL-Commercial MRL Passenger Lift (8 Persons)",
    completedYear: "2025",
    description: "8-passenger residential apartment elevator with automatic center-opening doors and emergency rescue device.",
    image: "/images/residential.png",
    slug: "/projects#royal-residency",
    status: "Live",
  },
  {
    id: "proj-5",
    title: "Sree Balaji Logistics & Distribution - Jagtial",
    category: "Industrial",
    location: "Industrial Area, Jagtial",
    floors: "G+3 (4 Stops)",
    liftType: "VL-Heavy Freight Goods Lift (3,000 kg)",
    completedYear: "2025",
    description: "Reinforced structural steel goods elevator designed for heavy pallet loading and forklift operations.",
    image: "/images/industrial.png",
    slug: "/projects#balaji-logistics",
    status: "Live",
  },
  {
    id: "proj-6",
    title: "Hotel Grand Atrium Panoramic Lift - Ramagundam",
    category: "Commercial",
    location: "Main Road, Ramagundam",
    floors: "G+4 (5 Stops)",
    liftType: "Semi-Circular Glass Capsule Elevator",
    completedYear: "2024",
    description: "Architectural glass observation elevator illuminating the central hotel lobby with multi-color LED halo lighting.",
    image: "/images/hero-lobby.png",
    slug: "/projects#hotel-grand",
    status: "Live",
  },
];

const INITIAL_JOBS: JobItem[] = [
  {
    id: "job-1",
    title: "Senior Elevator Installation Engineer",
    department: "Field Engineering & Erection",
    location: "Karimnagar & Hyderabad",
    experience: "4 - 7 Years",
    vacancies: 2,
    type: "Full Time",
    description: "Lead mechanical hoistway alignment, bracket installation, guide rail plumbing, and traction machine erection across commercial and villa sites.",
    status: "Active",
  },
  {
    id: "job-2",
    title: "Elevator Testing & Commissioning Specialist",
    department: "Electrical & Quality Control",
    location: "Telangana Statewide Hubs",
    experience: "3 - 5 Years",
    vacancies: 2,
    type: "Full Time",
    description: "Parameter tuning for VVVF inverters, ARD emergency rescue system calibration, overspeed governor drop tests, and IS 14665 compliance checks.",
    status: "Active",
  },
  {
    id: "job-3",
    title: "AMC Field Maintenance Technician",
    department: "Customer Service & Operations",
    location: "Karimnagar / Warangal",
    experience: "1 - 3 Years (ITI Electrical / Diploma)",
    vacancies: 4,
    type: "Full Time",
    description: "Monthly preventive maintenance routines, door operator adjustments, traveling cable inspections, and emergency breakdown ticket resolution.",
    status: "Active",
  },
  {
    id: "job-4",
    title: "Elevator Hoistway Draftsman & CAD Designer",
    department: "Design & Project Planning",
    location: "Karimnagar Central HQ",
    experience: "2 - 4 Years",
    vacancies: 1,
    type: "Full Time",
    description: "Prepare accurate hoistway architectural GA drawings, pit depth & overhead clearance blueprints, and machine-room layout specifications.",
    status: "Active",
  },
];

const INITIAL_CANDIDATES: CandidateItem[] = [
  {
    id: "CAND-101",
    name: "Sai Krishna Reddy",
    role: "Senior Elevator Installation Engineer",
    experience: "5+ Years (KONE / Otis experience)",
    phone: "+91 98491 22334",
    email: "sai.krishna@gmail.com",
    date: "Today, 10:30 AM",
    status: "Shortlisted",
  },
  {
    id: "CAND-102",
    name: "Mohammed Arfan",
    role: "Elevator Testing & Commissioning Specialist",
    experience: "3 Years (Electrical & ARD Specialist)",
    phone: "+91 97003 44556",
    email: "arfan.m@outlook.com",
    date: "Yesterday",
    status: "Reviewing",
  },
  {
    id: "CAND-103",
    name: "Vamshi Goud",
    role: "AMC Field Maintenance Technician",
    experience: "2 Years (ITI Electrical)",
    phone: "+91 99882 11223",
    email: "vamshi.goud@gmail.com",
    date: "2 Nov 2026",
    status: "New",
  },
];

const INITIAL_ENQUIRIES: EnquiryItem[] = [
  {
    id: "ENQ-501",
    name: "Dr. K. Srinivas Rao",
    email: "dr.srinivas@apolloclinic.com",
    phone: "+91 98480 12345",
    subject: "Stretcher Elevator Requirement for 4-Floor Hospital in Karimnagar",
    message: "We need an NBC compliant 15-passenger stretcher bed elevator with ±2mm level accuracy and power backup.",
    date: "Today, 11:15 AM",
    status: "Unread",
  },
  {
    id: "ENQ-502",
    name: "G. Venkatesh",
    email: "venkatesh.infra@gmail.com",
    phone: "+91 94401 98765",
    subject: "Villa Hydraulic Lift with Glass Finish in Warangal",
    message: "Requesting hoistway dimensions and pitless elevator options for an ongoing G+2 duplex villa project.",
    date: "Yesterday",
    status: "Replied",
  },
  {
    id: "ENQ-503",
    name: "Ramesh Reddy",
    email: "ramesh.fortune@yahoo.com",
    phone: "+91 98499 55667",
    subject: "Comprehensive Annual Maintenance Contract for Commercial Tower",
    message: "Our building in Nizamabad has 2 geared lifts. We want to convert to Gold AMC with monthly preventive service.",
    date: "03 Nov 2026",
    status: "Replied",
  },
];

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminSection>("products");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter Subcategories
  const [productCategoryFilter, setProductCategoryFilter] = useState("All");
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState("All");

  // Dynamic Data Stores
  const [products, setProducts] = useState<ProductItem[]>(INITIAL_PRODUCTS);
  const [services, setServices] = useState<ServiceItem[]>(INITIAL_SERVICES);
  const [projects, setProjects] = useState<ProjectItem[]>(INITIAL_PROJECTS);
  const [jobs, setJobs] = useState<JobItem[]>(INITIAL_JOBS);
  const [candidates, setCandidates] = useState<CandidateItem[]>(INITIAL_CANDIDATES);
  const [enquiries, setEnquiries] = useState<EnquiryItem[]>(INITIAL_ENQUIRIES);

  // Edit Modals
  const [editingProduct, setEditingProduct] = useState<ProductItem | null>(null);
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);

  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [isAddServiceOpen, setIsAddServiceOpen] = useState(false);

  const [editingProject, setEditingProject] = useState<ProjectItem | null>(null);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);

  const [editingJob, setEditingJob] = useState<JobItem | null>(null);
  const [isAddJobOpen, setIsAddJobOpen] = useState(false);

  const [actionToast, setActionToast] = useState("");

  // SEO state
  const [seoPages, setSeoPages] = useState<SeoPageConfig[]>([]);
  const [selectedSeoSlug, setSelectedSeoSlug] = useState<string>("/products");
  const [seoForm, setSeoForm] = useState<Partial<SeoPageConfig>>({
    slug: "/products",
    title: "Elevator Models & B2B Lift Components | Vision Lifts & Solutions",
    description: "Explore VL-Home Luxe, Commercial MRL, Hydraulic Pitless, and industrial goods elevators, plus certified B2B elevator components in Telangana.",
    keywords: ["Home Lift Models", "Hydraulic Lifts Hyderabad", "Glass Capsule Elevator", "Lift Motors & Controllers", "B2B Components"],
    canonical: "https://visionlifts.com/products",
    ogImage: "/images/residential.png",
    indexed: true,
    sitemap: true,
    schemaType: "Product",
  });
  const [seoSaving, setSeoSaving] = useState(false);

  // Leads state
  const [leads, setLeads] = useState<any[]>([]);
  const [leadStatusFilter, setLeadStatusFilter] = useState("All");

  // Site settings state
  const [siteSettings, setSiteSettings] = useState({
    helpline: "9700 123 878",
    phone: "+91 98484 80868",
    founder: "Ramesh Vilasagar",
    email: "visionliftsandsolutions@gmail.com",
    address: "Gandhi Road, Karimnagar, Telangana - 505001",
    operatingHours: "Mon - Sat: 9:00 AM - 7:30 PM",
    emergencyDesk: "24 Hours / 365 Days Emergency Breakdown Support",
  });

  // Session Authentication Check
  const [sessionChecked, setSessionChecked] = useState(false);
  const [adminUser, setAdminUser] = useState("admin@visionlifts.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("vl_admin_session");
      if (!stored) {
        router.push("/admin/login");
        return;
      }
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.adminUser) {
          setAdminUser(parsed.adminUser);
        }
      } catch {
        // use default
      }
      setSessionChecked(true);
    }
  }, [router]);

  // Fetch SEO data and Leads on mount
  useEffect(() => {
    if (sessionChecked) {
      fetchSeoPages();
      fetchLeads();
    }
  }, [sessionChecked]);

  const showToast = (msg: string) => {
    setActionToast(msg);
    setTimeout(() => setActionToast(""), 4000);
  };

  const fetchSeoPages = async () => {
    try {
      const res = await fetch("/api/admin/seo");
      const data = await res.json();
      if (data && data.success && Array.isArray(data.pages)) {
        setSeoPages(data.pages);
        const prodPage = data.pages.find((p: SeoPageConfig) => p.slug === "/products") || data.pages[0];
        if (prodPage) {
          setSelectedSeoSlug(prodPage.slug);
          setSeoForm(prodPage);
        }
      }
    } catch (err) {
      console.error("Failed to load SEO pages:", err);
    }
  };

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      if (data && data.success && Array.isArray(data.leads)) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error("Failed to fetch leads:", err);
    }
  };

  const handleSelectSeoPage = (slug: string) => {
    setSelectedSeoSlug(slug);
    const p = seoPages.find((item) => item.slug === slug);
    if (p) {
      setSeoForm({ ...p });
    } else {
      setSeoForm({
        slug,
        title: `Vision Lifts - ${slug}`,
        description: `Official ${slug} page of Vision Lifts & Solutions Telangana.`,
        keywords: ["Vision Lifts", "Telangana"],
        canonical: `https://visionlifts.com${slug}`,
        ogImage: "/images/hero-lobby.png",
        indexed: true,
        sitemap: true,
        schemaType: "LocalBusiness",
      });
    }
  };

  const handleSaveSeo = async (e: React.FormEvent) => {
    e.preventDefault();
    setSeoSaving(true);
    try {
      const res = await fetch("/api/admin/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(seoForm),
      });
      const data = await res.json();
      if (data && data.success) {
        showToast(`SEO settings for ${seoForm.slug} updated and live on production!`);
        fetchSeoPages();
      }
    } catch (err) {
      console.error(err);
      showToast("Error updating SEO settings.");
    } finally {
      setSeoSaving(false);
    }
  };

  // Product Actions
  const toggleProductStatus = (id: string) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, status: p.status === "Live" ? "Draft" : "Live" } : p))
    );
    showToast("Product publication status updated.");
  };

  const deleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this elevator product?")) {
      setProducts((prev) => prev.filter((p) => p.id !== id));
      showToast("Product deleted from CMS.");
    }
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    setProducts((prev) =>
      prev.map((p) => (p.id === editingProduct.id ? editingProduct : p))
    );
    setEditingProduct(null);
    showToast(`"${editingProduct.name}" updated successfully!`);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const newProduct: ProductItem = {
      id: `prod-${Date.now()}`,
      name: form.name.value,
      category: form.category.value,
      tagline: form.tagline.value,
      description: form.description.value,
      capacity: form.capacity.value || "6 - 10 Persons",
      speed: form.speed.value || "1.0 m/s",
      floors: form.floors.value || "G+4",
      machineRoom: form.machineRoom.value || "Gearless MRL",
      image: form.image.value || "/images/residential.png",
      slug: form.slug.value || "/products",
      status: "Live",
    };
    setProducts([newProduct, ...products]);
    setIsAddProductOpen(false);
    showToast(`"${newProduct.name}" added to product catalog!`);
  };

  // Service Actions
  const toggleServiceStatus = (id: string) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: s.status === "Live" ? "Draft" : "Live" } : s))
    );
    showToast("Service status updated.");
  };

  const deleteService = (id: string) => {
    if (confirm("Are you sure you want to delete this service?")) {
      setServices((prev) => prev.filter((s) => s.id !== id));
      showToast("Service deleted from CMS.");
    }
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService) return;
    setServices((prev) =>
      prev.map((s) => (s.id === editingService.id ? editingService : s))
    );
    setEditingService(null);
    showToast(`"${editingService.name}" updated successfully!`);
  };

  const handleCreateService = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as any;
    const newService: ServiceItem = {
      id: `serv-${Date.now()}`,
      name: form.name.value,
      category: form.category.value,
      sla: form.sla.value,
      sparesCoverage: form.sparesCoverage.value,
      description: form.description.value,
      features: (form.features.value || "").split("\n").filter(Boolean),
      image: form.image.value || "/images/safety-panel.png",
      slug: form.slug.value || "/services",
      status: "Live",
    };
    setServices([newService, ...services]);
    setIsAddServiceOpen(false);
    showToast(`"${newService.name}" published to services!`);
  };

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("vl_admin_session");
    }
    router.push("/admin/login");
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Global site settings & Telangana helpline updated successfully!");
  };

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const q = (searchQuery || "").toLowerCase();
      const matchesSearch =
        (p.name || "").toLowerCase().includes(q) ||
        (p.description || "").toLowerCase().includes(q) ||
        (p.category || "").toLowerCase().includes(q);
      const matchesCategory =
        productCategoryFilter === "All" || p.category === productCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, productCategoryFilter]);

  // Filtered Services
  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const q = (searchQuery || "").toLowerCase();
      const matchesSearch =
        (s.name || "").toLowerCase().includes(q) ||
        (s.description || "").toLowerCase().includes(q) ||
        (s.category || "").toLowerCase().includes(q);
      const matchesCategory =
        serviceCategoryFilter === "All" || s.category === serviceCategoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [services, searchQuery, serviceCategoryFilter]);

  // Sidebar navigation items
  const navItems = [
    { key: "products", label: "Products", icon: "🛗", badge: `${products.length}` },
    { key: "services", label: "Services", icon: "🛠️", badge: `${services.length}` },
    { key: "projects", label: "Projects", icon: "📁", badge: `${projects.length}` },
    { key: "jobs", label: "Job Postings", icon: "💼", badge: `${jobs.length}` },
    { key: "applications", label: "Applications", icon: "👥", badge: "Candidates" },
    { key: "leads", label: "Leads & Surveys", icon: "📋", badge: "Leads" },
    { key: "enquiries", label: "Enquiries", icon: "💬", badge: `${enquiries.filter((e) => e.status === "Unread").length} New` },
    { key: "seo", label: "SEO & Meta Engine", icon: "🌐", badge: "Engine" },
    { key: "settings", label: "Site Settings", icon: "⚙️", badge: null },
  ];

  if (!sessionChecked) {
    return (
      <div className="min-h-screen bg-[#080c14] flex flex-col items-center justify-center text-slate-200">
        <div className="relative h-12 w-48 mb-6 animate-pulse">
          <Image
            src="/images/vision-lifts-logo.png"
            alt="Vision Lifts"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
          <span className="w-2.5 h-2.5 rounded-full bg-[#863078] animate-ping" />
          <span>Verifying Administrator Access...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#f8fafc] text-slate-800 font-sans antialiased selection:bg-[#a22b51] selection:text-white">

      {/* Toast Notification */}
      {actionToast && (
        <div className="fixed top-4 right-4 z-50 px-4 py-3 bg-slate-900 text-white text-xs font-bold rounded-2xl shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-top duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{actionToast}</span>
        </div>
      )}

      {/* Mobile Drawer Backdrop */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-40 md:hidden backdrop-blur-xs transition-opacity"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* =========================================================================
          1. SLEEK, FIXED DESKTOP SIDEBAR (ZERO NATIVE SCROLLBAR OVERFLOW)
          ========================================================================= */}
      <aside className="hidden md:flex flex-col justify-between w-64 shrink-0 bg-white border-r border-slate-200 h-screen z-30 select-none">

        {/* Pinned Logo (Centered in Sidebar Header) */}
        <div className="py-4 px-3 border-b border-slate-100 flex items-center justify-center shrink-0 w-full bg-white">
          <Link href="/" className="flex items-center justify-center w-full group" title="Vision Lifts Admin - Go to Website">
            <div className="relative h-11 w-48 transition-transform group-hover:scale-105">
              <Image
                src="/images/vision-lifts-logo.png"
                alt="Vision Lifts Admin"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Scrollable Nav Area (Scrollbar hidden) */}
        <div className="p-3 space-y-5 flex-1 overflow-y-auto scrollbar-none">
          {/* Section: OVERVIEW */}
          <div>
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              OVERVIEW
            </div>
            <button
              type="button"
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${activeTab === "dashboard"
                  ? "bg-[#f0f4ff] text-[#423887] shadow-2xs font-bold"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-semibold"
                }`}
            >
              <span className="text-base">🗂️</span>
              <span>Dashboard Overview</span>
            </button>
          </div>

          {/* Section: WEBSITE MANAGEMENT */}
          <div>
            <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              WEBSITE MANAGEMENT
            </div>
            <nav className="space-y-0.5">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => setActiveTab(item.key as AdminSection)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-all cursor-pointer ${activeTab === item.key
                      ? "bg-[#f0f4ff] text-[#423887] font-bold shadow-2xs"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 font-medium"
                    }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Pinned Bottom Footer (Never scrolls away) */}
        <div className="p-3 border-t border-slate-100 space-y-2 shrink-0">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-all"
          >
            <span>↗</span>
            <span>View Live Website</span>
          </Link>

          <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-full bg-[#423887] text-white flex items-center justify-center text-xs font-black shrink-0">
                AD
              </div>
              <div className="leading-tight truncate max-w-[130px]">
                <div className="text-xs font-bold text-slate-900 truncate" title={adminUser}>
                  {adminUser}
                </div>
                <div className="text-[9px] font-bold tracking-wider text-emerald-600 uppercase flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  ADMINISTRATOR
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              title="Sign out of Admin Console"
              className="px-2 py-1 text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer border border-rose-100 flex items-center gap-1"
            >
              <span>⎋</span>
              <span>Exit</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Drawer (Only on small screens < md) */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white md:hidden transition-transform duration-200 shadow-2xl flex flex-col justify-between overflow-y-auto ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="py-4 px-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <Link href="/" className="flex items-center justify-center flex-1 group" title="Vision Lifts Admin - Go to Website">
            <div className="relative h-10 w-44">
              <Image
                src="/images/vision-lifts-logo.png"
                alt="Vision Lifts Admin"
                fill
                className="object-contain object-center"
              />
            </div>
          </Link>
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer ml-2"
          >
            ✕
          </button>
        </div>

        <div className="p-3 space-y-3 flex-1">
          <button
            type="button"
            onClick={() => {
              setActiveTab("dashboard");
              setMobileSidebarOpen(false);
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold bg-[#f0f4ff] text-[#423887]"
          >
            <span>🗂️</span>
            <span>Dashboard Overview</span>
          </button>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setActiveTab(item.key as AdminSection);
                  setMobileSidebarOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs ${activeTab === item.key ? "bg-[#f0f4ff] text-[#423887] font-bold" : "text-slate-600"
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Drawer Bottom User Info & Sign Out */}
        <div className="p-3 border-t border-slate-100 space-y-2 bg-slate-50">
          <Link
            href="/"
            target="_blank"
            className="w-full flex items-center justify-center gap-2 px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl"
          >
            <span>↗</span>
            <span>View Live Website</span>
          </Link>
          <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200">
            <div className="text-xs font-bold text-slate-800 truncate max-w-[130px]">
              {adminUser}
            </div>
            <button
              type="button"
              onClick={handleSignOut}
              className="px-2 py-1 text-[11px] font-bold text-rose-600 bg-rose-50 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          2. MAIN CONTENT AREA (CLEAN, INDEPENDENT SCROLL, ZERO OVERLAP)
          ========================================================================= */}
      <div className="flex-1 min-w-0 h-screen overflow-y-auto flex flex-col bg-[#f8fafc]">

        {/* Top Operational Utility Bar */}
        <header className="sticky top-0 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
            >
              ☰
            </button>
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span>CMS</span>
              <span>/</span>
              <span className="font-bold text-slate-900 capitalize">
                {activeTab === "seo" ? "SEO & Meta Engine" : activeTab}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block w-56 lg:w-64">
              <input
                type="text"
                placeholder="Search items & routes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#423887]/20"
              />
              <span className="absolute left-2.5 top-2 text-xs text-slate-400">🔍</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Live Synced</span>
            </div>
          </div>
        </header>

        {/* Dynamic Section Views */}
        <main className="p-6 lg:p-8 max-w-7xl w-full mx-auto space-y-6 flex-1">

          {/* =====================================================================
              TAB 1: PRODUCTS MANAGEMENT (Full Product & B2B Catalog)
              ===================================================================== */}
          {activeTab === "products" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Products Management
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#863078] border border-purple-200 text-xs font-bold">
                      {products.length} Products & Components
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                    Manage residential villa lifts, commercial gearless MRL elevators, hospital bed lifts, freight hoists, and B2B traction components.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsAddProductOpen(true)}
                    className="px-4 py-2 bg-[#423887] hover:bg-[#863078] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <span>+</span>
                    <span>Add New Product</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSeoSlug("/products");
                      setActiveTab("seo");
                    }}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200 cursor-pointer"
                  >
                    🌐 Products SEO
                  </button>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {["All", "Residential Lifts", "Commercial Towers", "Hospital Lifts", "Industrial Freight", "Panoramic Capsule", "B2B Components"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setProductCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${productCategoryFilter === cat
                        ? "bg-[#423887] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Products Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <Image src={p.image} alt={p.name} fill className="object-cover" />
                        <span className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-2xs ${p.status === "Live" ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-200"
                          }`}>
                          {p.status}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#863078]">
                          {p.category}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-0.5">{p.name}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {p.description}
                        </p>
                      </div>

                      {/* Technical Specs Pills */}
                      <div className="grid grid-cols-2 gap-1.5 text-[10px] text-slate-600 pt-1 border-t border-slate-100">
                        <div className="truncate"><span className="font-bold text-slate-800">Cap:</span> {p.capacity}</div>
                        <div className="truncate"><span className="font-bold text-slate-800">Speed:</span> {p.speed}</div>
                        <div className="truncate"><span className="font-bold text-slate-800">Travel:</span> {p.floors}</div>
                        <div className="truncate"><span className="font-bold text-slate-800">Drive:</span> {p.machineRoom}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingProduct({ ...p })}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#f0f4ff] text-[#423887] hover:bg-[#e0e7ff] transition-colors cursor-pointer"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleProductStatus(p.id)}
                          className="text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          Status
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={p.slug} target="_blank" className="text-slate-400 hover:text-[#423887]" title="View on site">
                          ↗
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteProduct(p.id)}
                          className="text-slate-400 hover:text-red-600 cursor-pointer"
                          title="Delete product"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 2: SERVICES MANAGEMENT (Full Services & AMC Catalog)
              ===================================================================== */}
          {activeTab === "services" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                      Services Management
                    </h1>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-[#863078] border border-purple-200 text-xs font-bold">
                      {services.length} Active Services
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                    Manage Comprehensive Gold AMC, Silver Preventive AMC, elevator modernization, 24/7 breakdown helpline, and hoistway laser surveys.
                  </p>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsAddServiceOpen(true)}
                    className="px-4 py-2 bg-[#423887] hover:bg-[#863078] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
                  >
                    <span>+</span>
                    <span>Add New Service</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSeoSlug("/services");
                      setActiveTab("seo");
                    }}
                    className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all border border-slate-200 cursor-pointer"
                  >
                    🌐 Services SEO
                  </button>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {["All", "AMC Maintenance", "Modernization", "Breakdown & Rescue", "Safety & Inspection"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setServiceCategoryFilter(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${serviceCategoryFilter === cat
                        ? "bg-[#423887] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Services Card Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredServices.map((s) => (
                  <div
                    key={s.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 transition-all"
                  >
                    <div className="space-y-3">
                      <div className="relative h-44 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <Image src={s.image} alt={s.name} fill className="object-cover" />
                        <span className={`absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-2xs ${s.status === "Live" ? "bg-emerald-500 text-white" : "bg-slate-800 text-slate-200"
                          }`}>
                          {s.status}
                        </span>
                      </div>

                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#863078]">
                          {s.category}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-0.5">{s.name}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                          {s.description}
                        </p>
                      </div>

                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] space-y-1">
                        <div><span className="font-bold text-slate-700">SLA:</span> {s.sla}</div>
                        <div><span className="font-bold text-slate-700">Spares:</span> {s.sparesCoverage}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setEditingService({ ...s })}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#f0f4ff] text-[#423887] hover:bg-[#e0e7ff] transition-colors cursor-pointer"
                        >
                          ✏️ Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleServiceStatus(s.id)}
                          className="text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
                        >
                          Status
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={s.slug} target="_blank" className="text-slate-400 hover:text-[#423887]" title="View on site">
                          ↗
                        </Link>
                        <button
                          type="button"
                          onClick={() => deleteService(s.id)}
                          className="text-slate-400 hover:text-red-600 cursor-pointer"
                          title="Delete service"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 3: DASHBOARD OVERVIEW (Summary Stats & Recent Items)
              ===================================================================== */}
          {activeTab === "dashboard" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Dashboard Overview
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                    Manage your dynamic services, elevator engineering products, enterprise case studies, and live recruitment pipeline in real-time.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("products")}
                    className="px-3.5 py-2 bg-[#423887] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    🛗 All Products ({products.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("services")}
                    className="px-3.5 py-2 bg-white text-slate-700 border border-slate-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
                  >
                    🛠️ All Services ({services.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("seo")}
                    className="px-3.5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    🌐 SEO Suite
                  </button>
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                  onClick={() => setActiveTab("leads")}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      LEAD REGISTRATIONS
                    </span>
                    <div className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                      👤
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900 tracking-tight">
                      {leads.length > 0 ? leads.length : "24"}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></span>
                      <span>24 leads requiring follow-up</span>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab("products")}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      PRODUCTS & ASSETS
                    </span>
                    <div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                      🛗
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900 tracking-tight">
                      {products.length}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                      <span>Active elevator series & parts</span>
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab("seo")}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      DYNAMIC ROUTES
                    </span>
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-sm font-bold group-hover:scale-110 transition-transform">
                      📄
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900 tracking-tight">
                      27
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      <span>CMS-connected application pages</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      SYSTEM STATUS
                    </span>
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900 tracking-tight">
                      Live & Synced
                    </div>
                    <div className="text-[11px] text-emerald-600 font-semibold mt-1.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Next.js API & database connected</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Products Overview Table */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-bold text-slate-900">Recent Products & Components</h2>
                  <button
                    type="button"
                    onClick={() => setActiveTab("products")}
                    className="text-xs font-bold text-[#423887] hover:underline"
                  >
                    View All {products.length} Products →
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        <th className="pb-3 pl-2">Media</th>
                        <th className="pb-3">Product Name</th>
                        <th className="pb-3">Category</th>
                        <th className="pb-3">Capacity & Speed</th>
                        <th className="pb-3 text-right pr-2">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {products.slice(0, 6).map((p) => (
                        <tr key={p.id} className="hover:bg-slate-50/70">
                          <td className="py-2.5 pl-2">
                            <div className="relative w-10 h-9 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                              <Image src={p.image} alt={p.name} fill className="object-cover" />
                            </div>
                          </td>
                          <td className="py-2.5 font-bold text-slate-900">{p.name}</td>
                          <td className="py-2.5">
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700">
                              {p.category}
                            </span>
                          </td>
                          <td className="py-2.5 text-slate-500">{p.capacity} · {p.speed}</td>
                          <td className="py-2.5 text-right pr-2">
                            <button
                              type="button"
                              onClick={() => {
                                setEditingProduct({ ...p });
                                setActiveTab("products");
                              }}
                              className="px-2.5 py-1 text-[10px] font-bold bg-[#f0f4ff] text-[#423887] rounded-lg"
                            >
                              Edit
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 4: PROJECTS MANAGEMENT
              ===================================================================== */}
          {activeTab === "projects" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Projects Showcase Management
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Manage completed landmark installations across Karimnagar, Warangal, Hyderabad, and Nizamabad.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddProjectOpen(true)}
                  className="px-4 py-2 bg-[#423887] hover:bg-[#863078] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  + Add New Project
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((proj) => (
                  <div
                    key={proj.id}
                    className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="relative h-40 w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                        <Image src={proj.image} alt={proj.title} fill className="object-cover" />
                        <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/95 text-slate-800 shadow-2xs">
                          {proj.completedYear}
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#863078]">
                          {proj.location}
                        </span>
                        <h3 className="text-sm font-bold text-slate-900 mt-0.5">{proj.title}</h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mt-1">{proj.description}</p>
                      </div>
                      <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg">
                        <div><span className="font-bold">Model:</span> {proj.liftType}</div>
                        <div><span className="font-bold">Stops:</span> {proj.floors}</div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={() => setEditingProject({ ...proj })}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-[#f0f4ff] text-[#423887]"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm("Delete this project?")) {
                            setProjects(projects.filter((p) => p.id !== proj.id));
                            showToast("Project deleted.");
                          }
                        }}
                        className="text-slate-400 hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 5: JOB POSTINGS (Careers)
              ===================================================================== */}
          {activeTab === "jobs" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Careers & Job Postings
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Manage open technical vacancies, installation engineering roles, and technician hiring.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsAddJobOpen(true)}
                  className="px-4 py-2 bg-[#423887] hover:bg-[#863078] text-white rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                >
                  + Post a Job
                </button>
              </div>

              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1 max-w-xl">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-sm text-slate-900">{job.title}</h3>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-sky-50 text-sky-700">
                          {job.type}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500">
                        {job.department} · {job.location} · {job.experience} experience
                      </div>
                      <p className="text-xs text-slate-600 pt-1 leading-relaxed">{job.description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setEditingJob({ ...job })}
                        className="px-3 py-1.5 bg-[#f0f4ff] text-[#423887] rounded-xl text-xs font-bold"
                      >
                        ✏️ Edit Job
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm("Delete this vacancy?")) {
                            setJobs(jobs.filter((j) => j.id !== job.id));
                            showToast("Job posting removed.");
                          }
                        }}
                        className="p-1.5 text-slate-400 hover:text-red-600"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 6: CANDIDATE APPLICATIONS
              ===================================================================== */}
          {activeTab === "applications" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Candidate Applications
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Review applicant profiles, change hiring stages, and interview engineers who applied via Careers.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      <th className="pb-3 pl-2">Applicant</th>
                      <th className="pb-3">Position Applied</th>
                      <th className="pb-3">Experience</th>
                      <th className="pb-3">Contact</th>
                      <th className="pb-3">Date</th>
                      <th className="pb-3 text-right pr-2">Hiring Stage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {candidates.map((cand) => (
                      <tr key={cand.id} className="hover:bg-slate-50/70">
                        <td className="py-3.5 pl-2 font-bold text-slate-900">{cand.name}</td>
                        <td className="py-3.5 font-semibold text-[#423887]">{cand.role}</td>
                        <td className="py-3.5 text-slate-600">{cand.experience}</td>
                        <td className="py-3.5">
                          <div className="text-slate-800 font-medium">{cand.phone}</div>
                          <div className="text-[11px] text-slate-400">{cand.email}</div>
                        </td>
                        <td className="py-3.5 text-slate-400">{cand.date}</td>
                        <td className="py-3.5 text-right pr-2">
                          <select
                            value={cand.status}
                            onChange={(e) => {
                              setCandidates(candidates.map((c) => (c.id === cand.id ? { ...c, status: e.target.value as any } : c)));
                              showToast("Candidate status updated.");
                            }}
                            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 cursor-pointer"
                          >
                            <option value="New">New</option>
                            <option value="Reviewing">Reviewing</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Hired">Hired</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 7: LEADS & SITE SURVEYS TRACKER
              ===================================================================== */}
          {activeTab === "leads" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Site Surveys & Inquiries Pipeline
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Manage survey requests and quote bookings submitted through the website lead capture engines.
                  </p>
                </div>

                <select
                  value={leadStatusFilter}
                  onChange={(e) => setLeadStatusFilter(e.target.value)}
                  className="px-3.5 py-2 text-xs font-bold bg-white border border-slate-200 rounded-xl"
                >
                  <option value="All">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Site Survey Scheduled">Site Survey Scheduled</option>
                  <option value="Survey Completed">Survey Completed</option>
                  <option value="Quote Sent">Quote Sent</option>
                </select>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      <th className="pb-3 pl-2">Lead ID</th>
                      <th className="pb-3">Client Name</th>
                      <th className="pb-3">Phone</th>
                      <th className="pb-3">District / City</th>
                      <th className="pb-3">Building Type</th>
                      <th className="pb-3 text-right pr-2">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads
                      .filter((l) => leadStatusFilter === "All" || l.status === leadStatusFilter)
                      .map((lead, idx) => (
                        <tr key={lead.id || idx} className="hover:bg-slate-50/70">
                          <td className="py-3.5 pl-2 font-mono font-bold text-[#863078]">
                            {lead.id || `LEAD-00${idx + 1}`}
                          </td>
                          <td className="py-3.5 font-bold text-slate-900">{lead.name}</td>
                          <td className="py-3.5">
                            <a href={`tel:${lead.phone}`} className="text-slate-700 hover:text-[#423887] font-semibold">
                              {lead.phone}
                            </a>
                          </td>
                          <td className="py-3.5 text-slate-600">{lead.city || lead.district || "Karimnagar"}</td>
                          <td className="py-3.5 text-slate-600">{lead.buildingType || lead.liftRequirement || "Elevator"}</td>
                          <td className="py-3.5 text-right pr-2">
                            <select
                              value={lead.status || "New"}
                              onChange={(e) => {
                                setLeads(leads.map((l) => (l.id === lead.id ? { ...l, status: e.target.value } : l)));
                                showToast("Lead survey status updated.");
                              }}
                              className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 cursor-pointer"
                            >
                              <option value="New">New</option>
                              <option value="Site Survey Scheduled">Site Survey Scheduled</option>
                              <option value="Survey Completed">Survey Completed</option>
                              <option value="Quote Sent">Quote Sent</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 8: ENQUIRIES (Inbound Direct Messages)
              ===================================================================== */}
          {activeTab === "enquiries" && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Inbound Customer Enquiries
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Messages received through the Contact Us page and Telangana District helpline.
                </p>
              </div>

              <div className="space-y-4">
                {enquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-xs text-[#863078]">{enq.id}</span>
                        <h3 className="font-bold text-sm text-slate-900">{enq.name}</h3>
                        <span className="text-xs text-slate-400">• {enq.date}</span>
                      </div>
                      <select
                        value={enq.status}
                        onChange={(e) => {
                          setEnquiries(enquiries.map((item) => (item.id === enq.id ? { ...item, status: e.target.value as any } : item)));
                          showToast("Enquiry status updated.");
                        }}
                        className="px-2.5 py-1 text-xs font-bold rounded-lg border border-slate-200 bg-slate-50 text-slate-700 cursor-pointer"
                      >
                        <option value="Unread">Unread</option>
                        <option value="Replied">Replied</option>
                        <option value="Archived">Archived</option>
                      </select>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="font-bold text-slate-800">{enq.subject}</div>
                      <p className="text-slate-600 leading-relaxed">{enq.message}</p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                      <span>📞 {enq.phone}</span>
                      <span>✉️ {enq.email}</span>
                      <a
                        href={`mailto:${enq.email}?subject=Re: ${encodeURIComponent(enq.subject)}`}
                        className="ml-auto px-3.5 py-1.5 bg-[#423887] text-white rounded-xl text-xs font-bold hover:bg-[#863078] transition-colors"
                      >
                        Reply Directly →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 9: COMPLETE SEO & META MANAGEMENT SUITE (All 13 Routes)
              ===================================================================== */}
          {activeTab === "seo" && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
                    ● Real-Time SEO & OpenGraph Engine
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Search Engine Optimization (SEO)
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl leading-relaxed">
                    Live Google Search SERP simulator, meta title & description character counters, Schema.org JSON-LD structured data, and OpenGraph social cards for every route.
                  </p>
                </div>
              </div>

              {/* Route Selector Horizontal Pills */}
              <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-2 mb-2">
                  Select Page to Optimize:
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {seoPages.map((page) => (
                    <button
                      key={page.slug}
                      type="button"
                      onClick={() => handleSelectSeoPage(page.slug)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${selectedSeoSlug === page.slug
                          ? "bg-[#423887] text-white shadow-xs"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
                        }`}
                    >
                      {page.slug === "/" ? "Home (/)" : page.slug}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Grid: Google SERP Preview (Left) + SEO Form (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

                {/* Left Column: Live Google SERP Simulator (5 Cols) */}
                <div className="lg:col-span-5 space-y-5">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>🔍</span>
                        <span>Google Search SERP Simulator</span>
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                        Google Desktop Preview
                      </span>
                    </div>

                    {/* SERP Search Result Card */}
                    <div className="p-4 rounded-xl bg-white border border-slate-200 font-sans shadow-2xs space-y-1">
                      <div className="flex items-center gap-2 text-xs text-[#202124]">
                        <div className="w-4 h-4 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-[10px] font-bold text-[#423887]">
                          V
                        </div>
                        <div className="text-[12px] text-[#202124] leading-none">
                          <span className="font-medium">visionlifts.com</span>
                          <span className="text-[#5f6368]"> › {seoForm.slug === "/" ? "" : (seoForm.slug || "").replace("/", "")}</span>
                        </div>
                      </div>

                      <h3 className="text-base sm:text-lg text-[#1a0dab] font-medium hover:underline cursor-pointer leading-snug line-clamp-2 pt-0.5">
                        {seoForm.title || "Vision Lifts & Solutions | Elevator Manufacturer"}
                      </h3>

                      <p className="text-xs text-[#4d5156] leading-relaxed line-clamp-3 pt-0.5">
                        {seoForm.description || "Thoughtfully engineered elevator solutions for homes, commercial towers, healthcare clinics, and industry across Telangana."}
                      </p>
                    </div>

                    {/* Social Share Card Preview */}
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-500 block mb-2">
                        Social Share Card (Facebook / LinkedIn / Twitter)
                      </span>
                      <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 text-xs">
                        <div className="relative h-28 w-full bg-slate-200">
                          {seoForm.ogImage && (
                            <Image
                              src={seoForm.ogImage}
                              alt="Social preview"
                              fill
                              className="object-cover"
                            />
                          )}
                        </div>
                        <div className="p-3 bg-white space-y-0.5">
                          <div className="text-[10px] uppercase font-bold text-slate-400">VISIONLIFTS.COM</div>
                          <div className="font-bold text-slate-900 truncate">{seoForm.title}</div>
                          <div className="text-[11px] text-slate-500 line-clamp-2">{seoForm.description}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Schema.org Structured Data */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-2 text-xs">
                    <span className="font-bold text-slate-900">Schema.org Structured Data (JSON-LD)</span>
                    <pre className="p-3.5 bg-slate-900 text-purple-300 rounded-xl overflow-x-auto text-[10px] font-mono leading-relaxed">
                      {`{
  "@context": "https://schema.org",
  "@type": "${seoForm.schemaType || "LocalBusiness"}",
  "name": "Vision Lifts & Solutions",
  "url": "${seoForm.canonical || "https://visionlifts.com"}",
  "telephone": "+91 9700 123 878",
  "areaServed": "Telangana State, India"
}`}
                    </pre>
                  </div>
                </div>

                {/* Right Column: SEO Form Editor (7 Cols) */}
                <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
                  <form onSubmit={handleSaveSeo} className="space-y-4 text-xs">
                    <div>
                      <h2 className="text-base font-bold text-slate-900">
                        Editing SEO for: <span className="text-[#863078]">{seoForm.slug}</span>
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Changes are saved directly to the CMS backend and update production meta tags.
                      </p>
                    </div>

                    {/* Meta Title */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                          Meta Title Tag <span className="text-red-500">*</span>
                        </label>
                        <span
                          className={`text-[10px] font-mono font-bold ${(seoForm.title?.length || 0) > 60 ? "text-amber-600" : "text-emerald-600"
                            }`}
                        >
                          {seoForm.title?.length || 0} / 60 characters
                        </span>
                      </div>
                      <input
                        type="text"
                        required
                        value={seoForm.title || ""}
                        onChange={(e) => setSeoForm({ ...seoForm, title: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 font-medium text-slate-800"
                        placeholder="Page title displayed on Google Search"
                      />
                    </div>

                    {/* Meta Description */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-slate-700">
                          Meta Description Tag <span className="text-red-500">*</span>
                        </label>
                        <span
                          className={`text-[10px] font-mono font-bold ${(seoForm.description?.length || 0) > 160 ? "text-amber-600" : "text-emerald-600"
                            }`}
                        >
                          {seoForm.description?.length || 0} / 160 characters
                        </span>
                      </div>
                      <textarea
                        rows={3}
                        required
                        value={seoForm.description || ""}
                        onChange={(e) => setSeoForm({ ...seoForm, description: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 font-medium text-slate-800 leading-relaxed"
                        placeholder="Compelling snippet shown below search title on Google"
                      />
                    </div>

                    {/* Target Keywords */}
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Focus Keywords (Comma-Separated)
                      </label>
                      <input
                        type="text"
                        value={seoForm.keywords?.join(", ") || ""}
                        onChange={(e) =>
                          setSeoForm({
                            ...seoForm,
                            keywords: e.target.value.split(",").map((k) => k.trim()),
                          })
                        }
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 font-medium text-slate-800"
                        placeholder="e.g. Elevator Company Telangana, Home Lifts Karimnagar, MRL Elevators"
                      />
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {seoForm.keywords?.map((k, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-[#863078] border border-purple-100"
                          >
                            #{k}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Canonical URL & OG Image */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Canonical URL
                        </label>
                        <input
                          type="url"
                          value={seoForm.canonical || ""}
                          onChange={(e) => setSeoForm({ ...seoForm, canonical: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 text-xs font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          OpenGraph Image Path
                        </label>
                        <input
                          type="text"
                          value={seoForm.ogImage || ""}
                          onChange={(e) => setSeoForm({ ...seoForm, ogImage: e.target.value })}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#863078]/30 text-xs font-mono"
                        />
                      </div>
                    </div>

                    {/* Indexing & Sitemap Toggles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={seoForm.indexed !== false}
                          onChange={(e) => setSeoForm({ ...seoForm, indexed: e.target.checked })}
                          className="w-4 h-4 rounded text-[#423887] focus:ring-[#423887]"
                        />
                        <span className="font-semibold text-slate-800">
                          Index on Google (index, follow)
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={seoForm.sitemap !== false}
                          onChange={(e) => setSeoForm({ ...seoForm, sitemap: e.target.checked })}
                          className="w-4 h-4 rounded text-[#423887] focus:ring-[#423887]"
                        />
                        <span className="font-semibold text-slate-800">
                          Include in sitemap.xml
                        </span>
                      </label>
                    </div>

                    {/* Save Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={seoSaving}
                        className="w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-md shadow-[#863078]/25 transition-all disabled:opacity-50 cursor-pointer"
                      >
                        {seoSaving ? "Saving SEO Meta Tags..." : "Save & Publish SEO Meta Tags →"}
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          )}

          {/* =====================================================================
              TAB 10: SITE SETTINGS & GLOBAL CONTACT INFO
              ===================================================================== */}
          {activeTab === "settings" && (
            <div className="space-y-6 animate-fade-in max-w-4xl">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Site Configuration & Global Contact Info
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Update primary business phone lines, 9700 123 878 statewide hotline, and office coordinates.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
                <form onSubmit={handleSaveSettings} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Statewide Enquiry Hotline *
                      </label>
                      <input
                        type="text"
                        value={siteSettings.helpline}
                        onChange={(e) => setSiteSettings({ ...siteSettings, helpline: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Direct Founder / Support Phone *
                      </label>
                      <input
                        type="text"
                        value={siteSettings.phone}
                        onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-900 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                      Registered Office Address *
                    </label>
                    <input
                      type="text"
                      value={siteSettings.address}
                      onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Project Quotation Email *
                      </label>
                      <input
                        type="email"
                        value={siteSettings.email}
                        onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Founder & Principal Engineer Name
                      </label>
                      <input
                        type="text"
                        value={siteSettings.founder}
                        onChange={(e) => setSiteSettings({ ...siteSettings, founder: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Operating Hours
                      </label>
                      <input
                        type="text"
                        value={siteSettings.operatingHours}
                        onChange={(e) => setSiteSettings({ ...siteSettings, operatingHours: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                        Emergency Desk Status
                      </label>
                      <input
                        type="text"
                        value={siteSettings.emergencyDesk}
                        onChange={(e) => setSiteSettings({ ...siteSettings, emergencyDesk: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs cursor-pointer"
                    >
                      Save Site Settings →
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* =========================================================================
          MODAL: EDIT PRODUCT
          ========================================================================= */}
      {editingProduct && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Edit Product: <span className="text-[#863078]">{editingProduct.name}</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingProduct(null)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  value={editingProduct.name}
                  onChange={(e) => setEditingProduct({ ...editingProduct, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Category *
                  </label>
                  <select
                    value={editingProduct.category}
                    onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option>Residential Lifts</option>
                    <option>Commercial Towers</option>
                    <option>Hospital Lifts</option>
                    <option>Industrial Freight</option>
                    <option>Panoramic Capsule</option>
                    <option>B2B Components</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Status *
                  </label>
                  <select
                    value={editingProduct.status}
                    onChange={(e) => setEditingProduct({ ...editingProduct, status: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="Live">Live (Published)</option>
                    <option value="Draft">Draft (Hidden)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Tagline / Subheading
                </label>
                <input
                  type="text"
                  value={editingProduct.tagline}
                  onChange={(e) => setEditingProduct({ ...editingProduct, tagline: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Rated Capacity
                  </label>
                  <input
                    type="text"
                    value={editingProduct.capacity}
                    onChange={(e) => setEditingProduct({ ...editingProduct, capacity: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Rated Speed
                  </label>
                  <input
                    type="text"
                    value={editingProduct.speed}
                    onChange={(e) => setEditingProduct({ ...editingProduct, speed: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Floors / Travel
                  </label>
                  <input
                    type="text"
                    value={editingProduct.floors}
                    onChange={(e) => setEditingProduct({ ...editingProduct, floors: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Drive / Machine Room
                  </label>
                  <input
                    type="text"
                    value={editingProduct.machineRoom}
                    onChange={(e) => setEditingProduct({ ...editingProduct, machineRoom: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Description & Key Specifications *
                </label>
                <textarea
                  required
                  rows={3}
                  value={editingProduct.description}
                  onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Route Slug
                  </label>
                  <input
                    type="text"
                    value={editingProduct.slug}
                    onChange={(e) => setEditingProduct({ ...editingProduct, slug: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Image Path
                  </label>
                  <input
                    type="text"
                    value={editingProduct.image}
                    onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Save Product Changes →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: ADD NEW PRODUCT
          ========================================================================= */}
      {isAddProductOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Add New Elevator Product / Component
              </h3>
              <button
                type="button"
                onClick={() => setIsAddProductOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateProduct} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Product Name *
                </label>
                <input
                  name="name"
                  required
                  placeholder="e.g. VL-Custom Rose Gold Glass Elevator"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  defaultValue="Residential Lifts"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option>Residential Lifts</option>
                  <option>Commercial Towers</option>
                  <option>Hospital Lifts</option>
                  <option>Industrial Freight</option>
                  <option>Panoramic Capsule</option>
                  <option>B2B Components</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Tagline / Subheading
                </label>
                <input
                  name="tagline"
                  placeholder="e.g. Architectural Pitless Home Lift for Luxury Villas"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Rated Capacity
                  </label>
                  <input
                    name="capacity"
                    placeholder="4 - 8 Persons (320 - 544 kg)"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Rated Speed
                  </label>
                  <input
                    name="speed"
                    placeholder="0.5 - 1.0 m/s"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Floors / Travel
                  </label>
                  <input
                    name="floors"
                    placeholder="G+1 to G+5"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Drive Type
                  </label>
                  <input
                    name="machineRoom"
                    placeholder="Gearless MRL"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Description & Specifications *
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  placeholder="Technical details, safety inclusions, power requirements..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Route Slug
                  </label>
                  <input
                    name="slug"
                    defaultValue="/products#new-item"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Image Path
                  </label>
                  <input
                    name="image"
                    defaultValue="/images/residential.png"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddProductOpen(false)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Publish Product →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: EDIT SERVICE
          ========================================================================= */}
      {editingService && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Edit Service: <span className="text-[#863078]">{editingService.name}</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingService(null)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveService} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service Name *
                </label>
                <input
                  type="text"
                  required
                  value={editingService.name}
                  onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Category *
                  </label>
                  <select
                    value={editingService.category}
                    onChange={(e) => setEditingService({ ...editingService, category: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option>AMC Maintenance</option>
                    <option>Modernization</option>
                    <option>Breakdown & Rescue</option>
                    <option>Safety & Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Status *
                  </label>
                  <select
                    value={editingService.status}
                    onChange={(e) => setEditingService({ ...editingService, status: e.target.value as any })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="Live">Live (Published)</option>
                    <option value="Draft">Draft (Hidden)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    SLA Response Time
                  </label>
                  <input
                    type="text"
                    value={editingService.sla}
                    onChange={(e) => setEditingService({ ...editingService, sla: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Spares Coverage
                  </label>
                  <input
                    type="text"
                    value={editingService.sparesCoverage}
                    onChange={(e) => setEditingService({ ...editingService, sparesCoverage: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service Description *
                </label>
                <textarea
                  required
                  rows={3}
                  value={editingService.description}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Route Slug
                  </label>
                  <input
                    type="text"
                    value={editingService.slug}
                    onChange={(e) => setEditingService({ ...editingService, slug: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Image Path
                  </label>
                  <input
                    type="text"
                    value={editingService.image}
                    onChange={(e) => setEditingService({ ...editingService, image: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingService(null)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Save Service Changes →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: ADD NEW SERVICE
          ========================================================================= */}
      {isAddServiceOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Add New Elevator Service / AMC Package
              </h3>
              <button
                type="button"
                onClick={() => setIsAddServiceOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateService} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Service Name *
                </label>
                <input
                  name="name"
                  required
                  placeholder="e.g. Platinum 24/7 AMC Package"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Category *
                </label>
                <select
                  name="category"
                  defaultValue="AMC Maintenance"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option>AMC Maintenance</option>
                  <option>Modernization</option>
                  <option>Breakdown & Rescue</option>
                  <option>Safety & Inspection</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    SLA Response Time
                  </label>
                  <input
                    name="sla"
                    placeholder="e.g. 30 Mins Guaranteed"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Spares Coverage
                  </label>
                  <input
                    name="sparesCoverage"
                    placeholder="e.g. 100% Spares & Consumables"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Description *
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  placeholder="Summary of service scope, inclusions and guarantees..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Route Slug
                  </label>
                  <input
                    name="slug"
                    defaultValue="/services#new-service"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Image Path
                  </label>
                  <input
                    name="image"
                    defaultValue="/images/safety-panel.png"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddServiceOpen(false)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Publish Service →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: EDIT PROJECT
          ========================================================================= */}
      {editingProject && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Edit Project: <span className="text-[#863078]">{editingProject.title}</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingProject(null)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setProjects(projects.map((p) => (p.id === editingProject.id ? editingProject : p)));
                setEditingProject(null);
                showToast("Project updated successfully!");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Project Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Location (City / District)
                  </label>
                  <input
                    type="text"
                    value={editingProject.location}
                    onChange={(e) => setEditingProject({ ...editingProject, location: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Completed Year
                  </label>
                  <input
                    type="text"
                    value={editingProject.completedYear}
                    onChange={(e) => setEditingProject({ ...editingProject, completedYear: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Lift Model & Inclusions
                </label>
                <input
                  type="text"
                  value={editingProject.liftType}
                  onChange={(e) => setEditingProject({ ...editingProject, liftType: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Project Description
                </label>
                <textarea
                  rows={3}
                  value={editingProject.description}
                  onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingProject(null)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Save Project →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: ADD NEW PROJECT
          ========================================================================= */}
      {isAddProjectOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Add New Completed Project
              </h3>
              <button
                type="button"
                onClick={() => setIsAddProjectOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const newProj: ProjectItem = {
                  id: `proj-${Date.now()}`,
                  title: form.title.value,
                  category: form.category.value,
                  location: form.location.value,
                  floors: form.floors.value || "G+3",
                  liftType: form.liftType.value,
                  completedYear: "2026",
                  description: form.description.value,
                  image: form.image.value || "/images/project-residence.png",
                  slug: "/projects",
                  status: "Live",
                };
                setProjects([newProj, ...projects]);
                setIsAddProjectOpen(false);
                showToast("New project published to portfolio!");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Project Title *
                </label>
                <input
                  name="title"
                  required
                  placeholder="e.g. Fortune Heights Villa Installation"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Location (City / District)
                  </label>
                  <input
                    name="location"
                    required
                    placeholder="e.g. Karimnagar"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Healthcare</option>
                    <option>Industrial</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Lift Model & Inclusions
                </label>
                <input
                  name="liftType"
                  required
                  placeholder="e.g. VL-Home Luxe Gearless MRL (6 Persons)"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  placeholder="Project specifications and highlights..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Image Path
                </label>
                <input
                  name="image"
                  defaultValue="/images/project-residence.png"
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddProjectOpen(false)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Publish Project →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: EDIT JOB
          ========================================================================= */}
      {editingJob && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Edit Job: <span className="text-[#863078]">{editingJob.title}</span>
              </h3>
              <button
                type="button"
                onClick={() => setEditingJob(null)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setJobs(jobs.map((j) => (j.id === editingJob.id ? editingJob : j)));
                setEditingJob(null);
                showToast("Job posting updated!");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  value={editingJob.title}
                  onChange={(e) => setEditingJob({ ...editingJob, title: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    value={editingJob.department}
                    onChange={(e) => setEditingJob({ ...editingJob, department: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={editingJob.location}
                    onChange={(e) => setEditingJob({ ...editingJob, location: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Experience Required
                  </label>
                  <input
                    type="text"
                    value={editingJob.experience}
                    onChange={(e) => setEditingJob({ ...editingJob, experience: e.target.value })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Job Status
                  </label>
                  <select
                    value={editingJob.status}
                    onChange={(e) => setEditingJob({ ...editingJob, status: e.target.value as any })}
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                  >
                    <option value="Active">Active (Open)</option>
                    <option value="Paused">Paused (Closed)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Job Description & Scope
                </label>
                <textarea
                  rows={3}
                  value={editingJob.description}
                  onChange={(e) => setEditingJob({ ...editingJob, description: e.target.value })}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditingJob(null)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Save Job Changes →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODAL: ADD NEW JOB
          ========================================================================= */}
      {isAddJobOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-slate-900">
                Post a New Technical Vacancy
              </h3>
              <button
                type="button"
                onClick={() => setIsAddJobOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as any;
                const newJob: JobItem = {
                  id: `job-${Date.now()}`,
                  title: form.title.value,
                  department: form.department.value,
                  location: form.location.value,
                  experience: form.experience.value,
                  vacancies: parseInt(form.vacancies.value, 10) || 1,
                  type: "Full Time",
                  description: form.description.value,
                  status: "Active",
                };
                setJobs([newJob, ...jobs]);
                setIsAddJobOpen(false);
                showToast("New job vacancy posted to Careers!");
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Job Title *
                </label>
                <input
                  name="title"
                  required
                  placeholder="e.g. Elevator Maintenance Engineer"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Department
                  </label>
                  <input
                    name="department"
                    placeholder="Field Engineering"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Location
                  </label>
                  <input
                    name="location"
                    placeholder="Karimnagar / Hyderabad"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Experience Required
                  </label>
                  <input
                    name="experience"
                    placeholder="2 - 5 Years"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Number of Vacancies
                  </label>
                  <input
                    name="vacancies"
                    defaultValue="2"
                    type="number"
                    className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Job Description & Responsibilities
                </label>
                <textarea
                  name="description"
                  required
                  rows={3}
                  placeholder="Key responsibilities and qualifications..."
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsAddJobOpen(false)}
                  className="px-4 py-2 text-slate-600 font-bold hover:bg-slate-100 rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold rounded-xl shadow-xs cursor-pointer"
                >
                  Publish Job Posting →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
