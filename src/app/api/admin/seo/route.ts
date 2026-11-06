import { NextResponse } from "next/server";

export interface SeoPageConfig {
  slug: string;
  name: string;
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  indexed: boolean;
  sitemap: boolean;
  schemaType: "LocalBusiness" | "Product" | "Service" | "Organization";
  lastUpdated: string;
}

// In-memory persistent SEO configuration store
let SEO_STORE: Record<string, SeoPageConfig> = {
  "/": {
    slug: "/",
    name: "Homepage (Hero & Trust Strip)",
    title: "Vision Lifts & Solutions | Premium Elevators in Karimnagar & Telangana",
    description: "Top elevator manufacturer in Telangana. Specialized in residential home lifts, commercial gearless MRL elevators, hospital bed lifts & 24/7 AMC service.",
    keywords: ["Elevator Company Karimnagar", "Lift Manufacturer Telangana", "Home Lifts Hyderabad", "MRL Elevators", "Vision Lifts", "Ramesh Vilasagar"],
    canonical: "https://visionlifts.com/",
    ogImage: "/images/hero-lobby.png",
    indexed: true,
    sitemap: true,
    schemaType: "LocalBusiness",
    lastUpdated: new Date().toISOString(),
  },
  "/telangana-network": {
    slug: "/telangana-network",
    name: "Telangana State Network (33 Districts)",
    title: "Telangana State Elevator Network | 33 Districts Helpline 9700 123 878",
    description: "Direct elevator engineer dispatch across all 33 districts of Telangana. 24/7 central helpline 9700 123 878 for Karimnagar, Hyderabad, Warangal & beyond.",
    keywords: ["Telangana Elevator Helpline", "Lift Service Warangal", "Elevators Nizamabad", "Karimnagar Lifts 9700123878", "District Dispatch Hubs"],
    canonical: "https://visionlifts.com/telangana-network",
    ogImage: "/images/telangana-enquiry-map.jpg",
    indexed: true,
    sitemap: true,
    schemaType: "LocalBusiness",
    lastUpdated: new Date().toISOString(),
  },
  "/book-survey": {
    slug: "/book-survey",
    name: "Book a Free Site Survey",
    title: "Book a Free Hoistway Site Survey | Vision Lifts & Solutions",
    description: "Zero-cost physical hoistway laser measurement by certified elevator engineers across Telangana. Receive free CAD drawings and itemized quotation.",
    keywords: ["Free Lift Site Survey", "Hoistway Measurement Telangana", "Elevator Pit Clearance CAD", "Laser Alignment IS 14665"],
    canonical: "https://visionlifts.com/book-survey",
    ogImage: "/images/cabin-study.png",
    indexed: true,
    sitemap: true,
    schemaType: "Service",
    lastUpdated: new Date().toISOString(),
  },
  "/quote-request": {
    slug: "/quote-request",
    name: "Instant Elevator Quotation",
    title: "Instant Elevator Price Quotation & CAD Estimates | Vision Lifts",
    description: "Get an accurate itemized quotation for passenger, glass panoramic, hydraulic or hospital elevators with zero hidden fees.",
    keywords: ["Elevator Cost Calculator", "Lift Price Telangana", "MRL Elevator Cost", "Karimnagar Elevator Estimates"],
    canonical: "https://visionlifts.com/quote-request",
    ogImage: "/images/commercial.png",
    indexed: true,
    sitemap: true,
    schemaType: "Product",
    lastUpdated: new Date().toISOString(),
  },
  "/services": {
    slug: "/services",
    name: "Services & Comprehensive AMC",
    title: "Elevator AMC Plans & Modernization | 24/7 Breakdown Support",
    description: "Gold Comprehensive and Silver AMC elevator maintenance packages, geared-to-gearless modernization, and certified safety inspections.",
    keywords: ["Elevator AMC Telangana", "Lift Modernization Karimnagar", "24/7 Lift Breakdown Service", "Safety License Renewal"],
    canonical: "https://visionlifts.com/services",
    ogImage: "/images/safety-panel.png",
    indexed: true,
    sitemap: true,
    schemaType: "Service",
    lastUpdated: new Date().toISOString(),
  },
  "/products": {
    slug: "/products",
    name: "Products & Elevator Series",
    title: "Elevator Models & B2B Lift Components | Vision Lifts & Solutions",
    description: "Explore VL-Home Luxe, Commercial MRL, Hydraulic Pitless, and industrial goods elevators, plus certified B2B elevator components.",
    keywords: ["Home Lift Models", "Hydraulic Lifts Hyderabad", "Glass Capsule Elevator", "Lift Motors & Controllers", "B2B Components"],
    canonical: "https://visionlifts.com/products",
    ogImage: "/images/residential.png",
    indexed: true,
    sitemap: true,
    schemaType: "Product",
    lastUpdated: new Date().toISOString(),
  },
  "/projects": {
    slug: "/projects",
    name: "Projects & Showcase Gallery",
    title: "Elevator Project Case Studies & Client Gallery | Vision Lifts",
    description: "Browse completed elevator installations across residential luxury villas, commercial towers, healthcare clinics, and factories in Telangana.",
    keywords: ["Elevator Installations Telangana", "Villa Lifts Karimnagar", "Hospital Lift Projects", "Commercial Elevator Portfolio"],
    canonical: "https://visionlifts.com/projects",
    ogImage: "/images/project-commercial.png",
    indexed: true,
    sitemap: true,
    schemaType: "Organization",
    lastUpdated: new Date().toISOString(),
  },
  "/safety-tech": {
    slug: "/safety-tech",
    name: "Safety & Technology Standards",
    title: "Safety Standards, ARD Systems & German Components | Vision Lifts",
    description: "Automatic Rescue Device (ARD), bidirectional governor, 36-beam infrared door curtains, and IS 14665 elevator compliance engineering.",
    keywords: ["Elevator Safety Telangana", "ARD Automatic Rescue Device", "Lift Safety Codes India", "Overspeed Governor IS 14665"],
    canonical: "https://visionlifts.com/safety-tech",
    ogImage: "/images/safety-panel.png",
    indexed: true,
    sitemap: true,
    schemaType: "Service",
    lastUpdated: new Date().toISOString(),
  },
  "/showcase": {
    slug: "/showcase",
    name: "Cabin Finishes & Fixture Showcase",
    title: "Elevator Cabin Finishes & Custom Interiors | Vision Lifts",
    description: "Explore luxury stainless steel finishes, rose-gold mirrors, glass capsules, TFT multimedia COP displays, and ceiling styles.",
    keywords: ["Elevator Interior Design", "Glass Capsule Finishes", "Rose Gold Elevator Cabins", "Touch COP Displays"],
    canonical: "https://visionlifts.com/showcase",
    ogImage: "/images/cabin-study.png",
    indexed: true,
    sitemap: true,
    schemaType: "Product",
    lastUpdated: new Date().toISOString(),
  },
  "/contact": {
    slug: "/contact",
    name: "Contact & Head Office",
    title: "Contact Vision Lifts & Solutions | Karimnagar Central HQ",
    description: "Connect with founder Ramesh Vilasagar and our senior engineering team on Gandhi Road, Karimnagar or call direct helpline 9700 123 878.",
    keywords: ["Vision Lifts Contact", "Gandhi Road Karimnagar Office", "Elevator Engineers Telangana", "9700 123 878 Hotline"],
    canonical: "https://visionlifts.com/contact",
    ogImage: "/images/hero-lobby.png",
    indexed: true,
    sitemap: true,
    schemaType: "LocalBusiness",
    lastUpdated: new Date().toISOString(),
  },
  "/careers": {
    slug: "/careers",
    name: "Careers & Engineering Openings",
    title: "Careers at Vision Lifts & Solutions | Elevator Engineering Jobs",
    description: "Join our expanding elevator installation, testing, and maintenance team across Telangana. Explore open positions for engineers and technicians.",
    keywords: ["Elevator Jobs Telangana", "Lift Technician Vacancy Karimnagar", "Elevator Drafter Jobs", "Field Engineer Careers"],
    canonical: "https://visionlifts.com/careers",
    ogImage: "/images/vision-lifts-logo.png",
    indexed: true,
    sitemap: true,
    schemaType: "Organization",
    lastUpdated: new Date().toISOString(),
  },
  "/privacy-policy": {
    slug: "/privacy-policy",
    name: "Privacy Policy",
    title: "Privacy Policy | Vision Lifts & Solutions",
    description: "How Vision Lifts & Solutions protects customer personal information, hoistway technical documents, and inquiry data.",
    keywords: ["Privacy Policy", "Vision Lifts Data Protection", "Customer Data Security"],
    canonical: "https://visionlifts.com/privacy-policy",
    ogImage: "/images/vision-lifts-logo.png",
    indexed: true,
    sitemap: true,
    schemaType: "Organization",
    lastUpdated: new Date().toISOString(),
  },
  "/terms": {
    slug: "/terms",
    name: "Terms of Service",
    title: "Terms & Conditions of Service | Vision Lifts & Solutions",
    description: "Terms and conditions governing elevator manufacturing contracts, AMC warranties, hoistway readiness, and payment schedules.",
    keywords: ["Terms of Service", "Elevator AMC Warranty Terms", "Contract Terms Telangana"],
    canonical: "https://visionlifts.com/terms",
    ogImage: "/images/vision-lifts-logo.png",
    indexed: true,
    sitemap: true,
    schemaType: "Organization",
    lastUpdated: new Date().toISOString(),
  },
};

export async function GET() {
  return NextResponse.json({
    success: true,
    pages: Object.values(SEO_STORE),
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body || !body.slug) {
      return NextResponse.json({ success: false, error: "Missing page slug" }, { status: 400 });
    }

    const current = SEO_STORE[body.slug] || {
      slug: body.slug,
      name: body.name || body.slug,
      title: "",
      description: "",
      keywords: [],
      canonical: `https://visionlifts.com${body.slug}`,
      ogImage: "/images/hero-lobby.png",
      indexed: true,
      sitemap: true,
      schemaType: "LocalBusiness",
      lastUpdated: new Date().toISOString(),
    };

    SEO_STORE[body.slug] = {
      ...current,
      ...body,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      message: `SEO settings for ${body.slug} saved successfully.`,
      config: SEO_STORE[body.slug],
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
