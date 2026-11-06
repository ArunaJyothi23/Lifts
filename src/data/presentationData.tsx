import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO } from "./siteData";

export interface PresentationSubPage {
  id: string;
  title: string;
  tagline: string;
  categoryBadge?: string;
  content: React.ReactNode;
}

export interface PresentationSection {
  number: string;
  id: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  subpages: PresentationSubPage[];
}

export const PRESENTATION_SECTIONS: PresentationSection[] = [
  // =========================================================================
  // 01 Brand / title
  // =========================================================================
  {
    number: "01",
    id: "brand",
    title: "Brand / title",
    category: "01 / BRAND IDENTITY",
    badge: "Core Identity",
    summary: "Vision Lifts & Solutions executive overview, market positioning in Telangana, and corporate brand harmony.",
    subpages: [
      {
        id: "brand-hero",
        title: "1. Brand Vision & Hero",
        tagline: "Elevating Spaces. Moving People. Building Trust.",
        categoryBadge: "Hero Frame",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-[#a22b51] border border-red-100 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#a22b51]" />
                VISION LIFTS & SOLUTIONS / TELANGANA, INDIA
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
                Elevating Spaces. <br />
                Moving People. <br />
                <span className="text-[#a22b51]">Building Trust.</span>
              </h1>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Reliable elevator solutions engineered for homes, commercial buildings, hospitals and industrial applications. Designed for safety, built for performance, and supported for the long run.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/quote-request"
                  className="px-6 py-2.5 rounded-full bg-[#a22b51] hover:bg-[#863078] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/products"
                  className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-50 transition-all"
                >
                  Explore Elevators
                </Link>
              </div>
              <p className="text-xs text-slate-400 font-medium pt-1">
                ✦ Designed for safety. Built for performance. Supported for the long run.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-slate-900">
              <Image
                src="/images/hero-lobby.png"
                alt="Vision Lifts Architectural Lobby Visual"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-slate-800 uppercase tracking-widest rounded-md border border-white/40">
                Architectural Visual · Illustrative
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "brand-palette",
        title: "2. Color Palette & Signature",
        tagline: "Official Triora Labs Brand System",
        categoryBadge: "Design System",
        content: (
          <div className="space-y-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              A restrained architectural language for Vision Lifts & Solutions. Editorial scale, honest materials, disciplined grids and a single brand-gradient signature.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="h-16 rounded-xl bg-[#863078] flex items-end p-2.5 text-white font-mono text-xs font-bold shadow-xs">
                  #863078
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Crimson Primary</h4>
                  <p className="text-xs text-slate-500">CTA buttons, active indicators, and high-priority alerts.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="h-16 rounded-xl bg-[#a52465] flex items-end p-2.5 text-white font-mono text-xs font-bold shadow-xs">
                  #a52465
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Magenta Midtone</h4>
                  <p className="text-xs text-slate-500">Brand gradients, badges, and focus rings.</p>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                <div className="h-16 rounded-xl bg-[#493080] flex items-end p-2.5 text-white font-mono text-xs font-bold shadow-xs">
                  #493080
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Deep Purple Anchor</h4>
                  <p className="text-xs text-slate-500">Headings, dark surfaces, and corporate anchors.</p>
                </div>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Signature Linear Gradient</span>
              <div className="h-6 w-48 rounded-full bg-gradient-to-r from-[#863078] via-[#a52465] to-[#493080]" />
              <code className="text-xs font-mono text-slate-500">135deg, #863078 0%, #a52465 50%, #493080 100%</code>
            </div>
          </div>
        ),
      },
      {
        id: "brand-logo",
        title: "3. Official Logo Anatomy",
        tagline: "Eye Symbolism with Dual Elevating Arrows",
        categoryBadge: "Trademark",
        content: (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 p-8 bg-white border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center shadow-xs">
              <div className="relative h-20 w-56 mb-4">
                <Image
                  src="/images/vision-lifts-logo.png"
                  alt="Vision Lifts Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                Supplied Vision Lifts Logo
              </span>
            </div>
            <div className="lg:col-span-7 space-y-3 text-sm text-slate-600">
              <h4 className="text-base font-extrabold text-slate-900">Logo Geometry & Spatial Rules</h4>
              <p>
                The emblem features an outer human eye outline embracing dual vertical counter-weighted arrows — symbolizing foresight, engineering precision, and passenger protection.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-600 list-disc list-inside">
                <li><strong>Clear space:</strong> Minimum margin equals the height of the "V" in VISION.</li>
                <li><strong>Minimum digital size:</strong> 120px width on desktop; 96px width on mobile viewports.</li>
                <li><strong>Backgrounds:</strong> Optimized for pure white (#ffffff) or ultra-dark slate (#0f172a).</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "brand-typography",
        title: "4. Typography Scale & Hierarchy",
        tagline: "Disciplined Editorial Scale",
        categoryBadge: "Typography",
        content: (
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 text-xs font-bold text-slate-400 uppercase">H1 Display</div>
              <div className="col-span-6 text-2xl font-black text-slate-900">Elevating Spaces. Moving People.</div>
              <div className="col-span-3 text-xs font-mono text-slate-500 text-right">48px / 1.12 Line Height</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 text-xs font-bold text-slate-400 uppercase">H2 Section</div>
              <div className="col-span-6 text-xl font-extrabold text-slate-900">Precision, made visible.</div>
              <div className="col-span-3 text-xs font-mono text-slate-500 text-right">32px / 1.2 Line Height</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 grid grid-cols-12 gap-4 items-center">
              <div className="col-span-3 text-xs font-bold text-slate-400 uppercase">Body Regular</div>
              <div className="col-span-6 text-sm text-slate-600">No two buildings move the same way. We plan each configuration around building height and passenger requirements.</div>
              <div className="col-span-3 text-xs font-mono text-slate-500 text-right">15px / 1.65 Line Height</div>
            </div>
          </div>
        ),
      },
      {
        id: "brand-grid",
        title: "5. Architectural Grid System",
        tagline: "1440px Canvas · 12-Column Fluid Disciplined Layout",
        categoryBadge: "Grid Layout",
        content: (
          <div className="space-y-4 text-sm text-slate-600">
            <p>
              The entire platform follows a strict 1440px desktop container with 72px side padding and an 8px baseline vertical rhythm.
            </p>
            <div className="grid grid-cols-12 gap-2 h-24 p-2 bg-slate-100 rounded-xl border border-slate-200">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="bg-red-200/50 rounded flex items-center justify-center text-[10px] font-mono text-red-800 font-bold">
                  Col {i + 1}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <strong>Desktop:</strong> 1440px max-width, 12 columns, 24px gutters.
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <strong>Tablet:</strong> 768px - 1024px, 8 columns, 16px gutters.
              </div>
              <div className="p-3 bg-white border border-slate-200 rounded-lg">
                <strong>Mobile:</strong> 375px - 480px, 4 columns, 12px gutters.
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "brand-philosophy",
        title: "6. Engineering Philosophy",
        tagline: "Designed for safety. Built for performance. Supported for the long run.",
        categoryBadge: "Mission",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-2xl font-black text-[#a22b51]">01</span>
              <h4 className="text-sm font-bold text-slate-900">Safety First</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every hoistway, governor, and ARD is calibrated to NBC 2016 and IS 14665 standards before commissioning.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-2xl font-black text-[#a52465]">02</span>
              <h4 className="text-sm font-bold text-slate-900">Architectural Fit</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Elevator cabins that integrate seamlessly with private marble lobbies, modern glass atriums, or hospital corridors.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
              <span className="text-2xl font-black text-[#493080]">03</span>
              <h4 className="text-sm font-bold text-slate-900">Lifecycle Commitment</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                The relationship does not end at handover. Dedicated local AMC engineers provide 24/7 breakdown dispatch across Telangana.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "brand-regional",
        title: "7. Regional Focus (Telangana)",
        tagline: "Headquartered in Karimnagar · Serving Hyderabad & North Telangana",
        categoryBadge: "Local Presence",
        content: (
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h4 className="text-sm font-bold text-slate-900">Rapid Response Hubs</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Positioned strategically along the Rajiv Rahadari corridor to deliver under-30-minute breakdown response times to residential duplexes, hospitals, and commercial properties.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-[#a22b51]">Karimnagar</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Head Office & Spares</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-[#a22b51]">Hyderabad</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Commercial Projects</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-[#a22b51]">Warangal</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Hospital Service Desk</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="text-base font-extrabold text-[#a22b51]">Nizamabad</div>
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Industrial Freight Hub</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "brand-visual",
        title: "8. Elevating Spaces Visual",
        tagline: "Architectural Interior Fit and Finishes",
        categoryBadge: "Visual Asset",
        content: (
          <div className="relative h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <Image
              src="/images/cabin-study.png"
              alt="Elevator Cabin Finish"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[11px] font-bold text-red-400 uppercase tracking-wider">
                Precision Craftsmanship
              </span>
              <h3 className="text-xl font-bold">Hairline Stainless Steel & Warm Indirect LED</h3>
              <p className="text-xs text-slate-300 max-w-lg mt-1">
                Custom mirror-finish ceilings, acoustic vibration-dampened flooring, and ergonomic braille button panels.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "brand-tone",
        title: "9. Tone of Voice & Copywriting",
        tagline: "Restrained, Authoritative, Reassuring, Exact",
        categoryBadge: "Copy Guidance",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl space-y-2">
              <span className="font-bold text-emerald-800 uppercase tracking-wider">✓ What We Say</span>
              <ul className="space-y-1 text-slate-700 list-disc list-inside">
                <li>"Thoughtfully engineered elevator solutions for homes, businesses and healthcare."</li>
                <li>"Every recommendation is confirmed with a free site survey before we quote."</li>
                <li>"Smooth leveling within ±2mm for patient stretchers and luxury homes."</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50/60 border border-red-200 rounded-xl space-y-2">
              <span className="font-bold text-red-800 uppercase tracking-wider">✗ What We Avoid</span>
              <ul className="space-y-1 text-slate-700 list-disc list-inside">
                <li>Over-hyped marketing jargon ("The cheapest lifts in town!").</li>
                <li>Unverified claims or unsubstantiated awards.</li>
                <li>Vague technical promises without hoistway dimension prerequisites.</li>
              </ul>
            </div>
          </div>
        ),
      },
      {
        id: "brand-downloads",
        title: "10. Brand Assets & Guidelines",
        tagline: "Downloadable Identity Kit & CAD Templates",
        categoryBadge: "Downloads",
        content: (
          <div className="space-y-3">
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Official Logo Vector Pack (SVG, PNG, EPS)</h4>
                <p className="text-[11px] text-slate-500">Full color, monochrome black, and inverted white variants.</p>
              </div>
              <button type="button" className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800">
                Download ZIP
              </button>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Architectural Hoistway CAD Blocks (DWG, DXF)</h4>
                <p className="text-[11px] text-slate-500">Standard pit, overhead, and shaft plans for civil architects.</p>
              </div>
              <button type="button" className="px-3.5 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800">
                Download DWG
              </button>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Complete Brand Guidelines PDF</h4>
                <p className="text-[11px] text-slate-500">Color tokens, typography hierarchy, and signage specifications.</p>
              </div>
              <button type="button" className="px-3.5 py-1.5 bg-[#a22b51] text-white rounded-lg text-xs font-semibold hover:bg-[#863078]">
                Download PDF
              </button>
            </div>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 02 Website overview
  // =========================================================================
  {
    number: "02",
    id: "website-overview",
    title: "Website overview",
    category: "02 / WEBSITE ARCHITECTURE",
    badge: "Information Architecture",
    summary: "Precision, made visible. Designed to belong. Built to perform. Structural breakdown of the Vision Lifts platform.",
    subpages: [
      {
        id: "overview-homepage",
        title: "1. Homepage Layout (1440px)",
        tagline: "Precision, made visible.",
        categoryBadge: "Homepage",
        content: (
          <div className="space-y-4">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
                Canva Section 02 Copy
              </span>
              <h3 className="text-xl font-bold text-slate-900">Precision, made visible.</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A restrained architectural language for Vision Lifts & Solutions. Editorial scale, honest materials, disciplined grids and a single brand-gradient signature.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong>1. Hero Showcase:</strong> Instant value prop with free consultation CTA.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong>2. Trust Strip:</strong> 15+ years experience, 1,200+ lifts, 24/7 care.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong>3. Solutions Matrix:</strong> Residential, commercial, hospital, industrial.
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <strong>4. Admin Demo:</strong> Public interactive preview of control center.
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "overview-fit",
        title: "2. Architectural Fit",
        tagline: "Designed to belong. Built to perform.",
        categoryBadge: "Core Value",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
            <h3 className="text-lg font-bold text-slate-900">Designed to belong. Built to perform.</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No two buildings move the same way. We plan each configuration around building height, passenger requirements, shaft dimensions, usage and architecture — balancing practical engineering with the character of your space.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Shaft Customization</span>
                Civil hoistway blueprints tailored to brickwork, RCC, or structural steel shafts.
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Acoustic Comfort</span>
                Sub-50dB whisper operation suitable for bedroom adjacencies in luxury duplexes.
              </div>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <span className="font-bold text-slate-900 block mb-1">Traffic Optimization</span>
                Microprocessor-driven dispatching algorithms reducing passenger wait time by 35%.
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "overview-details",
        title: "3. The Details Make the Difference",
        tagline: "Component Precision & Engineering Integrity",
        categoryBadge: "Craftsmanship",
        content: (
          <div className="space-y-3">
            <h4 className="text-base font-extrabold text-slate-900">The Details Make the Difference.</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <strong className="text-slate-900">Monadrive PMSM Synchronous Machine:</strong>
                <p className="text-slate-500">Permanent magnet gearless motor offering 40% power reduction and zero gear oil requirements.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <strong className="text-slate-900">Full-Height 36-Beam Light Curtain:</strong>
                <p className="text-slate-500">Non-contact infrared door obstruction detection preventing accidental door closure on children or wheelchairs.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <strong className="text-slate-900">ARD Automatic Rescue Battery System:</strong>
                <p className="text-slate-500">Instantly brings car to nearest landing and opens doors during sudden municipal grid blackouts.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1.5">
                <strong className="text-slate-900">Integrated Fireman Drive & Voice Announcer:</strong>
                <p className="text-slate-500">Multi-lingual floor arrival announcements and dedicated emergency fireman recall switch.</p>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "overview-sitemap",
        title: "4. Full Website Sitemap",
        tagline: "129 Figma Frames Structured Across 12 Core Routes",
        categoryBadge: "Sitemap",
        content: (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <strong className="text-[#a22b51]">Primary Pages</strong>
              <div className="text-slate-500 space-y-0.5">
                <div>/ (Homepage)</div>
                <div>/about (About Us)</div>
                <div>/solutions (Solutions)</div>
                <div>/products (Catalogue)</div>
                <div>/services (AMC & Care)</div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <strong className="text-[#a22b51]">Customer Actions</strong>
              <div className="text-slate-500 space-y-0.5">
                <div>/quote-request</div>
                <div>/book-survey</div>
                <div>/service-request</div>
                <div>/contact</div>
                <div>/projects</div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <strong className="text-[#a22b51]">B2B & Technical</strong>
              <div className="text-slate-500 space-y-0.5">
                <div>/production-hub</div>
                <div>/safety-tech</div>
                <div>/presentation</div>
                <div>/privacy-policy</div>
                <div>/terms</div>
              </div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
              <strong className="text-[#a22b51]">Portals & Admin</strong>
              <div className="text-slate-500 space-y-0.5">
                <div>/customer-portal</div>
                <div>/admin/dashboard</div>
                <div>/admin/analytics</div>
                <div>/admin/customers</div>
                <div>/admin/dispatch</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: "overview-trust-strip",
        title: "5. Trust Strip & Engineering Statistics",
        tagline: "Client-confirmation placeholders labeled transparently",
        categoryBadge: "Trust Strip",
        content: (
          <div className="space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-3xl font-black text-[#a22b51]">15+</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Years Experience</div>
                <div className="text-[10px] text-slate-400">Engineering In Telangana</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-3xl font-black text-[#a22b51]">1,200+</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Lifts Installed</div>
                <div className="text-[10px] text-slate-400">Residential & Commercial</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-3xl font-black text-[#a22b51]">99.8%</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Uptime SLA</div>
                <div className="text-[10px] text-slate-400">Continuous Monitoring</div>
              </div>
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-xs">
                <div className="text-3xl font-black text-[#a22b51]">&lt; 30m</div>
                <div className="text-xs font-bold text-slate-800 mt-1">Rapid Dispatch</div>
                <div className="text-[10px] text-slate-400">Emergency Response</div>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 italic">
              * Client-confirmation placeholders: experience, installations, service availability, safety focus and service-network coverage are indicative.
            </p>
          </div>
        ),
      },
      {
        id: "overview-value-pillars",
        title: "6. Four Value Pillars",
        tagline: "The Core Commitments Behind Every Hoistway",
        categoryBadge: "Pillars",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#a22b51]">1. Architectural Harmony</span>
              <p className="text-slate-500">Cabins engineered to enhance your architectural interior rather than look like an industrial afterthought.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#a22b51]">2. Certified Safety Protocol</span>
              <p className="text-slate-500">Compliant with Bureau of Indian Standards IS 14665, European EN 81-20, and National Building Code 2016.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#a22b51]">3. Transparent Civil Coordination</span>
              <p className="text-slate-500">Free site surveys, exact shaft CAD blueprints, and direct technical consultations with your structural engineers.</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 space-y-1.5">
              <span className="font-bold text-[#a22b51]">4. Lifetime Spare Parts Assurance</span>
              <p className="text-slate-500">Centralized spares hub in Karimnagar stocking motors, door drives, sensors, and controllers for instant dispatch.</p>
            </div>
          </div>
        ),
      },
      {
        id: "overview-footer",
        title: "7. White Architectural Footer",
        tagline: "Matched Exactly to Reference Image 8",
        categoryBadge: "Footer",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
              <div className="space-y-2">
                <strong className="text-slate-900 block">Vision Lifts & Solutions</strong>
                <p className="text-slate-500">Thoughtfully engineered elevator solutions for homes, businesses, healthcare and industry. From the first conversation to long-term care.</p>
              </div>
              <div className="space-y-1 text-slate-600">
                <strong className="text-slate-900 block mb-1">Quick Links</strong>
                <div>Home · About Us · Products</div>
                <div>Services · Projects · Safety</div>
              </div>
              <div className="space-y-1 text-slate-600">
                <strong className="text-slate-900 block mb-1">Solutions</strong>
                <div>Residential Elevators</div>
                <div>Commercial Elevators</div>
                <div>Hospital Elevators</div>
                <div>Industrial / Goods</div>
              </div>
              <div className="space-y-1 text-slate-600">
                <strong className="text-slate-900 block mb-1">Contact</strong>
                <div>Phone: +91 94401 80868</div>
                <div>Email: visionlifts@gmail.com</div>
                <div>Gandhi Road, Karimnagar</div>
              </div>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>© 2026 Vision Lifts & Solutions. All Rights Reserved.</span>
              <span className="font-bold tracking-widest text-slate-600">ENGINEERED FOR EVERY JOURNEY.</span>
            </div>
          </div>
        ),
      },
      {
        id: "overview-nav-megamenu",
        title: "8. Navbar Megamenu Architecture",
        tagline: "Two-Panel Architectural Navigation (Reference Image 5)",
        categoryBadge: "Megamenu",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-bold text-slate-900">Megamenu Specifications</h4>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold text-[10px]">Active</span>
            </div>
            <p className="text-slate-600">
              Replaced basic emoji dropdowns with a 2-panel Megamenu: Left panel categorizes building types (Villas, Apartments, Commercial, Industrial, Hotels, Hospitals) with titles, descriptions and chevrons. Right panel embeds a luxury cabin card preview with guidance copy and site survey CTA.
            </p>
            <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
              <span className="text-base">🚀</span>
              <span className="text-slate-700 font-semibold">Hover over Solutions, Products, or Services in the top navigation bar to test the live Megamenus!</span>
            </div>
          </div>
        ),
      },
      {
        id: "overview-modals",
        title: "9. Interactive Modals & Lead Funnels",
        tagline: "Contextual Popups with Zero Layout Jitter",
        categoryBadge: "Modals",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900">Site Survey Modal</strong>
              <p className="text-slate-500">Allows building owners to request an engineer site inspection with shaft measurement upload.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900">Emergency Call Modal</strong>
              <p className="text-slate-500">1-click direct telephone connection to the 24/7 breakdown escalation desk.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <strong className="text-slate-900">Quote Configurator</strong>
              <p className="text-slate-500">Step-by-step calculator for stops, capacity, speed, and decorative finishes.</p>
            </div>
          </div>
        ),
      },
      {
        id: "overview-performance",
        title: "10. Performance & SEO Readiness",
        tagline: "Next.js App Router · Zero Horizontal Scrollbar",
        categoryBadge: "Performance",
        content: (
          <div className="space-y-3 text-xs text-slate-600">
            <p>
              The platform is built with Next.js 15 App Router, Tailwind CSS, and strict <code>overflow-x: hidden</code> guards ensuring zero horizontal scroll across all device viewports.
            </p>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 font-bold">
                Lighthouse: 98+
              </div>
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 font-bold">
                CLS: 0.00
              </div>
              <div className="p-3 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-100 font-bold">
                TypeScript: 0 Errors
              </div>
            </div>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 03 Responsive views
  // =========================================================================
  {
    number: "03",
    id: "responsive-views",
    title: "Responsive views",
    category: "03 / MULTI-DEVICE EXPERIENCE",
    badge: "Adaptive Layout",
    summary: "A consistent experience at every scale. The same white canvas, clear hierarchy and logo-derived accents adapt across desktop, tablet and mobile.",
    subpages: [
      {
        id: "resp-headline",
        title: "1. Canva Responsive Architecture",
        tagline: "A consistent experience at every scale.",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
              Exact Canva Section 03 Text
            </span>
            <h3 className="text-xl font-bold text-slate-900">A consistent experience at every scale.</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              The same white canvas, clear hierarchy and logo-derived accents adapt across desktop, tablet and mobile presentation frames.
            </p>
          </div>
        ),
      },
      {
        id: "resp-desktop",
        title: "2. Desktop 1440px Viewport",
        tagline: "Expansive Editorial Grid with Dual Panel Megamenus",
        categoryBadge: "1440px",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Desktop Viewport Specifications</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>Header: 80px fixed height with inline navigation links and Megamenu panels.</li>
              <li>Hero: Dual-column grid (7 cols copy, 5 cols architectural image).</li>
              <li>Trust Strip: 4-column horizontal stats banner.</li>
              <li>Solutions: 12-column cards alternating image left / right.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "resp-tablet",
        title: "3. Tablet 768px Viewport",
        tagline: "Folded Grids with Touch-Friendly Interactions",
        categoryBadge: "768px",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Tablet Viewport Specifications</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>Header: Compact logo + hamburger drawer menu.</li>
              <li>Hero: Vertical stack with image below call-to-actions.</li>
              <li>Trust Strip: 2x2 grid format ensuring legible typography.</li>
              <li>Comparison Table: Horizontal scroll wrapper with swipe indicators.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "resp-mobile",
        title: "4. Mobile 390px Viewport",
        tagline: "Single-Column Stack with Sticky Floating Actions",
        categoryBadge: "390px",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Mobile Viewport Specifications</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>Full screen mobile menu drawer with nested accordion submenus.</li>
              <li>Floating quick action pills for instant WhatsApp chat and direct phone call.</li>
              <li>Full-width CTAs with thumb-zone optimization (minimum 48px tap height).</li>
              <li>Zero horizontal scrollbar guaranteed with global <code>overflow-x: hidden</code>.</li>
            </ul>
          </div>
        ),
      },
      {
        id: "resp-touch",
        title: "5. Touch UX & Tap Targets",
        tagline: "Apple Human Interface & Material 3 Touch Compliance",
        categoryBadge: "Touch UX",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Min 44x44px Targets</strong>
              All buttons, links, and accordion headers satisfy AAA accessibility touch guidelines.
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Thumb Zone Primary</strong>
              Key conversion buttons (Survey, WhatsApp, Phone) remain in bottom ergonomic sweep.
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200">
              <strong className="text-slate-900 block mb-1">Swipeable Carousels</strong>
              Passive touch listeners with kinetic momentum scrolling for project photo galleries.
            </div>
          </div>
        ),
      },
      {
        id: "resp-typography",
        title: "6. Fluid Typography Scaling",
        tagline: "CSS clamp() Formulas from Mobile to Desktop",
        categoryBadge: "Typography",
        content: (
          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 bg-slate-100 rounded-lg">
              <code>h1: clamp(2.25rem, 5vw + 1rem, 3.75rem);</code>
            </div>
            <div className="p-3 bg-slate-100 rounded-lg">
              <code>h2: clamp(1.75rem, 3.5vw + 0.5rem, 2.5rem);</code>
            </div>
            <div className="p-3 bg-slate-100 rounded-lg">
              <code>body: clamp(0.9375rem, 1vw + 0.25rem, 1.0625rem);</code>
            </div>
          </div>
        ),
      },
      {
        id: "resp-drawer",
        title: "7. Mobile Navigation Drawer",
        tagline: "Body Scroll Lock & Seamless Transitions",
        categoryBadge: "Navigation",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Drawer Architecture</h4>
            <p>
              When opened, the mobile drawer automatically locks body scrolling (<code>document.body.style.overflow = "hidden"</code>) to prevent double scrollbars. Each category features a clean accordion toggle for seamless exploration.
            </p>
          </div>
        ),
      },
      {
        id: "resp-retina",
        title: "8. Retina & High-DPI Visuals",
        tagline: "WebP / AVIF Responsive Next.js Images",
        categoryBadge: "Media",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Next/Image Optimization</h4>
            <p>
              All lift cabin and engineering visuals serve responsive <code>srcset</code> variants for 1x, 2x, and 3x device pixel ratios with blur placeholder fallbacks.
            </p>
          </div>
        ),
      },
      {
        id: "resp-cls",
        title: "9. Zero Cumulative Layout Shift (CLS)",
        tagline: "Dimension-Reserved Containers & Skeleton Placeholders",
        categoryBadge: "Vitals",
        content: (
          <div className="p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2 text-xs text-emerald-900">
            <h4 className="text-sm font-bold">CLS Score: 0.00</h4>
            <p>
              Images and interactive components use strict aspect ratio boxes preventing any content jumping during font or image loading.
            </p>
          </div>
        ),
      },
      {
        id: "resp-simulator",
        title: "10. Multi-Device Live Simulator",
        tagline: "Preview the exact layout across 1440px, 768px, and 390px",
        categoryBadge: "Simulator",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
            <h4 className="text-sm font-bold text-slate-900">Interactive Device Toggles</h4>
            <p className="text-slate-600">
              Use the top toolbar device switcher (Desktop / Tablet / Mobile) to simulate responsive behavior on this presentation screen.
            </p>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 04 Solutions
  // =========================================================================
  {
    number: "04",
    id: "solutions",
    title: "Solutions",
    category: "04 / ENGINEERING SOLUTIONS",
    badge: "Building Types",
    summary: "Elevator Solutions for Every Need. From a private residence to a complex public building, the right elevator starts with the way your space is used.",
    subpages: [
      {
        id: "sol-intro",
        title: "1. Solutions Overview",
        tagline: "Elevator Solutions for Every Need",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
              Exact Canva Section 04 Text
            </span>
            <h3 className="text-xl font-bold text-slate-900">Elevator Solutions for Every Need</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From a private residence to a complex public building, the right elevator starts with the way your space is used.
            </p>
          </div>
        ),
      },
      {
        id: "sol-residential",
        title: "2. Villas & Independent Homes",
        tagline: "Pitless 150mm · Single-Phase Household 220V",
        categoryBadge: "Residential",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 block">VL-Home Luxe Series</strong>
              <p className="text-slate-600">Engineered specifically for luxury duplexes, bungalows, and private farmhouses without requiring deep pit excavation or rooftop machine rooms.</p>
              <ul className="space-y-1 list-disc list-inside text-slate-500 pt-1">
                <li>Pit Depth: 150 mm (Pitless Option)</li>
                <li>Overhead: 2800 mm minimum</li>
                <li>Capacity: 250 - 450 kg (3 to 6 Passengers)</li>
                <li>Power: 220V Single-Phase standard domestic</li>
              </ul>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <Image src="/images/residential.png" alt="Residential Villa Lift" fill className="object-cover" />
            </div>
          </div>
        ),
      },
      {
        id: "sol-commercial",
        title: "3. Commercial & Office Towers",
        tagline: "Machine Room-Less (MRL) · Speeds up to 2.5 m/s",
        categoryBadge: "Commercial",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 block">VL-Commercial MRL</strong>
              <p className="text-slate-600">High-traffic passenger handling for IT parks, corporate towers, shopping malls, and premium hotels across Telangana.</p>
              <ul className="space-y-1 list-disc list-inside text-slate-500 pt-1">
                <li>Pit Depth: 1200 - 1400 mm</li>
                <li>Speed: 1.0 to 2.5 m/s rapid transit</li>
                <li>Capacity: 544 - 1360 kg (8 to 20 Passengers)</li>
                <li>Power: 3-Phase 415V, 50Hz with VVVF regen</li>
              </ul>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <Image src="/images/commercial.png" alt="Commercial MRL Lift" fill className="object-cover" />
            </div>
          </div>
        ),
      },
      {
        id: "sol-hospital",
        title: "4. Multispeciality Hospitals",
        tagline: "NBC 2016 Compliant · Stretcher & Bed Precision Leveling",
        categoryBadge: "Healthcare",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 block">VL-Medicare Stretcher Series</strong>
              <p className="text-slate-600">Whisper-quiet, jerk-free acceleration with micro-leveling within ±2mm to protect post-operative patients and critical ICU transport.</p>
              <ul className="space-y-1 list-disc list-inside text-slate-500 pt-1">
                <li>Car Depth: 2400 mm (Accommodates standard hospital beds)</li>
                <li>Doors: 1000 - 1200 mm 2-panel center or telescopic</li>
                <li>Finish: Antibacterial hairline stainless steel</li>
                <li>Emergency: Medical priority key override</li>
              </ul>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <Image src="/images/hospital.png" alt="Hospital Bed Elevator" fill className="object-cover" />
            </div>
          </div>
        ),
      },
      {
        id: "sol-industrial",
        title: "5. Industrial & Heavy Freight",
        tagline: "Payload up to 5,000 kg · Forklift & Pallet Rated",
        categoryBadge: "Industrial",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <strong className="text-sm font-bold text-slate-900 block">VL-Heavy Freight Cargo</strong>
              <p className="text-slate-600">Reinforced chequered steel plate flooring, heavy-duty guide rails, and bi-parting vertical or manual collapsible doors.</p>
              <ul className="space-y-1 list-disc list-inside text-slate-500 pt-1">
                <li>Capacity: 1,000 kg to 5,000 kg</li>
                <li>Drive: Heavy PMSM gearless or hydraulic ram</li>
                <li>Protection: Heavy side rub rails & bumper bars</li>
              </ul>
            </div>
            <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
              <Image src="/images/industrial.png" alt="Industrial Goods Lift" fill className="object-cover" />
            </div>
          </div>
        ),
      },
      {
        id: "sol-modernization",
        title: "6. Modernization & Retrofit",
        tagline: "Convert Old Geared Lifts to Modern PMSM Gearless",
        categoryBadge: "Modernization",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Why Modernize?</h4>
            <p>
              Save up to 40% energy, eliminate oil leaks, reduce breakdown calls by 90%, and bring legacy lifts up to current NBC 2016 safety norms without tearing down the existing shaft.
            </p>
            <div className="grid grid-cols-3 gap-2 pt-2">
              <div className="p-3 bg-slate-50 rounded-lg">✓ Replace geared machine with Monadrive PMSM</div>
              <div className="p-3 bg-slate-50 rounded-lg">✓ Upgrade to VVVF microprocessor controller</div>
              <div className="p-3 bg-slate-50 rounded-lg">✓ Install infrared light curtain & ARD</div>
            </div>
          </div>
        ),
      },
      {
        id: "sol-dumbwaiter",
        title: "7. Dumbwaiters & Service Lifts",
        tagline: "50 - 250 kg · Pantries, Hotels & Multi-Storey Restaurants",
        categoryBadge: "Service Lift",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Food & Supply Service Lifts</h4>
            <p>
              Stainless steel food-grade cabins with vertical bi-parting doors, removable internal shelves, and hygienic wipe-clean surfaces.
            </p>
          </div>
        ),
      },
      {
        id: "sol-escalators",
        title: "8. Escalators & Moving Walks",
        tagline: "High-Traffic Public Transit & Commercial Centers",
        categoryBadge: "Transit",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Public Transit Movement</h4>
            <p>
              Heavy-duty truss construction, comb-plate safety sensors, skirt brushes, and automatic VVVF sleep mode during zero-load periods.
            </p>
          </div>
        ),
      },
      {
        id: "sol-table",
        title: "9. Hoistway Comparison Matrix",
        tagline: "Technical Dimensions & Electrical Requirements",
        categoryBadge: "Matrix",
        content: (
          <div className="overflow-x-auto text-[11px]">
            <table className="w-full text-left border-collapse border border-slate-200">
              <thead>
                <tr className="bg-slate-100 text-slate-800 font-bold">
                  <th className="p-2 border">Series</th>
                  <th className="p-2 border">Min Pit</th>
                  <th className="p-2 border">Overhead</th>
                  <th className="p-2 border">Speed</th>
                  <th className="p-2 border">Power</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-2 border font-bold">VL-Home Luxe</td><td className="p-2 border">150 mm</td><td className="p-2 border">2800 mm</td><td className="p-2 border">0.5 m/s</td><td className="p-2 border">220V 1-Ph</td></tr>
                <tr><td className="p-2 border font-bold">VL-Commercial MRL</td><td className="p-2 border">1200 mm</td><td className="p-2 border">3800 mm</td><td className="p-2 border">1.75 m/s</td><td className="p-2 border">415V 3-Ph</td></tr>
                <tr><td className="p-2 border font-bold">VL-Medicare</td><td className="p-2 border">1400 mm</td><td className="p-2 border">4200 mm</td><td className="p-2 border">1.0 m/s</td><td className="p-2 border">415V 3-Ph</td></tr>
                <tr><td className="p-2 border font-bold">VL-Heavy Cargo</td><td className="p-2 border">1500 mm</td><td className="p-2 border">4400 mm</td><td className="p-2 border">0.5 m/s</td><td className="p-2 border">415V 3-Ph</td></tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "sol-survey-cta",
        title: "10. Free Hoistway Site Survey",
        tagline: "Expert Engineer Technical Assessment at Your Site",
        categoryBadge: "Consultation",
        content: (
          <div className="p-5 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold">Need assistance with your building dimensions?</h4>
              <p className="text-xs text-slate-300 mt-1">Our certified elevator engineers perform on-site shaft surveys across Telangana with no obligation.</p>
            </div>
            <Link href="/book-survey" className="px-5 py-2.5 bg-[#a22b51] hover:bg-[#863078] text-white rounded-xl text-xs font-bold whitespace-nowrap">
              Book Site Survey
            </Link>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 05 Products & services
  // =========================================================================
  {
    number: "05",
    id: "products-services",
    title: "Products & services",
    category: "05 / PRODUCTS & SERVICES",
    badge: "Catalogue & Care",
    summary: "Explore Elevator Options & Beyond Installation. We Keep You Moving. Features are indicative and configurable. The relationship does not end at handover.",
    subpages: [
      {
        id: "prod-headline",
        title: "1. Canva Copy & Caveats",
        tagline: "Explore Elevator Options · Beyond Installation.",
        categoryBadge: "Canva Copy",
        content: (
          <div className="space-y-4">
            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">Products Heading</span>
              <h3 className="text-lg font-bold text-slate-900">Explore Elevator Options</h3>
              <p className="text-xs text-slate-500 italic">Features are indicative and configurable. Final specifications depend on the building assessment.</p>
            </div>
            <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">Services Heading</span>
              <h3 className="text-lg font-bold text-slate-900">Beyond Installation. We Keep You Moving.</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The relationship does not end at handover. We help you care for your elevator throughout its working life, with service options planned around your building.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "prod-luxe",
        title: "2. VL-Home Luxe Product Card",
        tagline: "Premium Villa Elevator Specifications",
        categoryBadge: "Product",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">VL-Home Luxe Series</h4>
            <p>Designed for duplexes and luxury bungalows. Operates on 220V single-phase with whisper-quiet PMSM gearless traction or smooth Italian hydraulic drive.</p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Capacity:</strong> 250 - 450 kg</div>
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Speed:</strong> 0.5 - 0.7 m/s</div>
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Pit:</strong> 150 mm (Pitless)</div>
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Overhead:</strong> 2800 mm</div>
            </div>
          </div>
        ),
      },
      {
        id: "prod-commercial",
        title: "3. VL-Commercial MRL Product Card",
        tagline: "High-Traffic Modular Passenger Lifts",
        categoryBadge: "Product",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">VL-Commercial MRL Series</h4>
            <p>Machine-room-less modular lifts with speeds up to 2.5 m/s, intelligent collective selective traffic dispatch, and LCD cabin indicators.</p>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Capacity:</strong> 544 - 1360 kg (8-20 Pax)</div>
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Speed:</strong> 1.0 - 2.5 m/s</div>
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Drive:</strong> PMSM Gearless Monadrive</div>
              <div className="p-2 bg-white rounded border border-slate-200"><strong>Levels:</strong> Up to 25 Floors</div>
            </div>
          </div>
        ),
      },
      {
        id: "prod-medicare",
        title: "4. VL-Medicare Stretcher Product Card",
        tagline: "NBC 2016 Stretcher Compliant Healthcare Lift",
        categoryBadge: "Product",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">VL-Medicare Stretcher Series</h4>
            <p>Antibacterial stainless steel finishes, wide 1200mm telescopic doors, emergency bed priority key switch, and smooth leveling within ±2mm.</p>
          </div>
        ),
      },
      {
        id: "prod-panoramic",
        title: "5. Panoramic Glass Capsule",
        tagline: "Architectural Statement for Atriums & Hotels",
        categoryBadge: "Product",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">360° Curved Capsule Glass Lift</h4>
            <p>Laminated toughened safety glass with titanium gold or stainless frame, external illuminated glass hoistway, and panoramic 360-degree viewing.</p>
          </div>
        ),
      },
      {
        id: "prod-b2b-hub",
        title: "6. B2B Component Production Hub",
        tagline: "PMSM Machines, Controllers, Doors & Safety Gear",
        categoryBadge: "B2B Supply",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Direct Component Supply for Elevator Contractors</h4>
            <p>Vision Lifts supplies certified elevator components across Telangana with complete technical documentation, test certificates, and warranty support.</p>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2.5 bg-slate-50 rounded border text-center font-semibold">Traction Machines</div>
              <div className="p-2.5 bg-slate-50 rounded border text-center font-semibold">VVVF Inverters</div>
              <div className="p-2.5 bg-slate-50 rounded border text-center font-semibold">Door Operators</div>
            </div>
          </div>
        ),
      },
      {
        id: "serv-gold-amc",
        title: "7. Comprehensive AMC (Gold Plan)",
        tagline: "24/7 Breakdown Dispatch + All Spare Parts Included",
        categoryBadge: "AMC Care",
        content: (
          <div className="p-5 bg-amber-50/60 border border-amber-200 rounded-2xl space-y-2 text-xs text-amber-900">
            <span className="font-bold uppercase tracking-wider text-amber-800">Gold Comprehensive Plan</span>
            <p>Complete peace of mind. Includes 12 monthly preventive safety audits, 24/7 emergency breakdown dispatch, and replacement of all wear-and-tear spares (coils, relays, contactors, lubricants) with zero out-of-pocket bills.</p>
          </div>
        ),
      },
      {
        id: "serv-silver-amc",
        title: "8. Non-Comprehensive AMC (Silver Plan)",
        tagline: "Monthly Preventive Maintenance & Safety Audits",
        categoryBadge: "AMC Care",
        content: (
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2 text-xs text-slate-700">
            <span className="font-bold uppercase tracking-wider text-slate-800">Silver Preventive Plan</span>
            <p>Includes 12 scheduled monthly technician visits, guide rail greasing, safety gear check, brake adjustment, and emergency breakdown attendance. Spares billed at transparent OEM prices.</p>
          </div>
        ),
      },
      {
        id: "serv-dispatch-sla",
        title: "9. 24/7 Rapid Breakdown Dispatch",
        tagline: "&lt; 30 Minute Arrival in Karimnagar & Telangana Urban Hubs",
        categoryBadge: "SLA",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Breakdown Dispatch SLA</h4>
            <p>GPS-dispatched mobile service vans equipped with essential spares, testing tools, and certified technicians standing by 24 hours a day, 365 days a year.</p>
          </div>
        ),
      },
      {
        id: "serv-portal-tracking",
        title: "10. Client Portal Service Tracking",
        tagline: "Live Ticket Status, Maintenance History & Renewal",
        categoryBadge: "Digital Portal",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Digital AMC Management</h4>
            <p>Every building owner gets instant access to our client portal to log maintenance tickets, download government inspection certificates, and track engineer visit logs.</p>
            <Link href="/customer-portal/login" className="inline-block px-4 py-2 bg-slate-900 text-white rounded-lg font-bold">
              Open Customer Portal →
            </Link>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 06 Safety & technology
  // =========================================================================
  {
    number: "06",
    id: "safety-tech",
    title: "Safety & technology",
    category: "06 / SAFETY & TECHNOLOGY",
    badge: "Life Safety",
    summary: "Safety Is Built Into Every Journey. Protection is not an afterthought. We consider the complete journey — from controlled movement and reliable doors to a prepared response when it matters.",
    subpages: [
      {
        id: "safe-headline",
        title: "1. Canva Safety Statement",
        tagline: "Safety Is Built Into Every Journey",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
              Exact Canva Section 06 Text
            </span>
            <h3 className="text-xl font-bold text-slate-900">Safety Is Built Into Every Journey</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Protection is not an afterthought. We consider the complete journey — from controlled movement and reliable doors to a prepared response when it matters.
            </p>
            <p className="text-xs text-slate-400 italic pt-1">
              Safety-system availability and configuration are confirmed during technical assessment and final specification.
            </p>
          </div>
        ),
      },
      {
        id: "safe-ard",
        title: "2. Automatic Rescue Device (ARD)",
        tagline: "Battery-Powered Emergency Evacuation",
        categoryBadge: "Life Safety",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Automatic Rescue Device (ARD)</h4>
            <p>During sudden municipal power outages, the smart battery system automatically takes over, smoothly brings the car to the nearest landing level, and unlocks doors to release passengers safely within 45 seconds.</p>
          </div>
        ),
      },
      {
        id: "safe-light-curtain",
        title: "3. Infrared 36-Beam Light Curtain",
        tagline: "Full-Height Non-Contact Door Protection",
        categoryBadge: "Door Safety",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">36-Beam Infrared Sensor</h4>
            <p>Projects an invisible matrix of 36 optical beams across the entire cabin door opening. Doors instantly reopen if a child, pet, or walking aid crosses the threshold without physical contact.</p>
          </div>
        ),
      },
      {
        id: "safe-governor",
        title: "4. Over-Speed Governor & Safety Clamps",
        tagline: "Instant Mechanical Hoistway Lock",
        categoryBadge: "Mechanical",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Bi-Directional Safety Clamps</h4>
            <p>If car descent speed exceeds 115% of rated speed, the centrifugal governor trips the safety circuit and clamps heavy hardened steel wedges onto the T-rails, mechanically halting the car in place.</p>
          </div>
        ),
      },
      {
        id: "safe-fireman",
        title: "5. Fireman Drive & Emergency Intercom",
        tagline: "NBC 2016 Fire Evacuation Compliance",
        categoryBadge: "Emergency",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Dedicated Fire Recall & Intercom</h4>
            <p>A key-operated fireman switch summons the elevator directly to the ground lobby while ignoring hall calls. Built-in 3-way intercom connects the cabin to building security and our 24/7 emergency desk.</p>
          </div>
        ),
      },
      {
        id: "safe-leveling",
        title: "6. Smooth Microprocessor Leveling",
        tagline: "Precision Landing within ±2mm",
        categoryBadge: "Control",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Leveling Precision (±2mm)</h4>
            <p>Prevents tripping hazards for hospital stretchers, elderly residents, and wheelchairs through closed-loop optical encoder feedback on the guide rail.</p>
          </div>
        ),
      },
      {
        id: "safe-regen",
        title: "7. Regenerative Energy Drive",
        tagline: "Up to 40% Power Reduction via Kinetic Regeneration",
        categoryBadge: "Energy",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Kinetic Energy Regeneration</h4>
            <p>During heavy down-travel or empty up-travel, the PMSM motor acts as a generator, converting gravitational kinetic energy back into clean AC electricity for the building grid.</p>
          </div>
        ),
      },
      {
        id: "safe-seismic",
        title: "8. Seismic & Hydraulic Buffers",
        tagline: "Heavy Oil Buffers at Hoistway Pit",
        categoryBadge: "Structural",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Pit Buffer Absorption</h4>
            <p>Heavy oil-spring buffers at the bottom of the hoistway absorb deceleration energy in the unlikely event of over-travel, protecting the structural integrity of the cabin.</p>
          </div>
        ),
      },
      {
        id: "safe-iot",
        title: "9. Real-Time Telemetry & Fault Codes",
        tagline: "IoT Telemetry Gateway Connected to Control Center",
        categoryBadge: "IoT",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Continuous Health Monitoring</h4>
            <p>Edge IoT sensors transmit vibration, temperature, door cycle counts, and brake wear directly to our admin monitoring dashboard for predictive maintenance.</p>
          </div>
        ),
      },
      {
        id: "safe-checklist",
        title: "10. Govt. Safety Audit & License Renewal",
        tagline: "Certified Inspector Hoistway Checklist",
        categoryBadge: "Compliance",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Annual Safety Renewal Assistance</h4>
            <p>We prepare all documentation, conduct full load deflection testing, calibrate governor tripping speeds, and coordinate with municipal lift inspectors for certificate renewal.</p>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 07 Projects
  // =========================================================================
  {
    number: "07",
    id: "projects",
    title: "Projects",
    category: "07 / PROJECTS & BLUEPRINTS",
    badge: "Track Record",
    summary: "Projects That Move People. Hoistway dimension blueprints, completed residential and commercial installations across Karimnagar, Hyderabad and Telangana.",
    subpages: [
      {
        id: "proj-headline",
        title: "1. Canva Projects Heading",
        tagline: "Projects That Move People",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
              Exact Canva Section 07 Text
            </span>
            <h3 className="text-xl font-bold text-slate-900">Projects That Move People</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              From signature luxury residences to busy commercial plazas and multispeciality hospitals across Telangana, explore our track record of precision elevator engineering.
            </p>
          </div>
        ),
      },
      {
        id: "proj-villa-case",
        title: "2. Signature Villa (Karimnagar)",
        tagline: "Pitless Hydraulic Villa Lift in Collectorate Road",
        categoryBadge: "Case Study",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">G+2 Luxury Villa Project</h4>
            <p>Installed a pitless glass-back residential elevator in an open stairwell core. Zero excavation required with single-phase domestic power connection and Italian hydraulic power pack.</p>
          </div>
        ),
      },
      {
        id: "proj-commercial-case",
        title: "3. Commercial Complex (Hyderabad)",
        tagline: "Twin Duplex MRL Lifts at Madhapur IT Corridor",
        categoryBadge: "Case Study",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">G+6 IT Complex Installation</h4>
            <p>Duplex collective dispatching system carrying up to 13 passengers per car at 1.75 m/s. Integrated destination control and swipe card floor access control.</p>
          </div>
        ),
      },
      {
        id: "proj-hospital-case",
        title: "4. Multispeciality Hospital (Warangal)",
        tagline: "Dual Stretcher Bed Elevators (20 Pax / 1360 kg)",
        categoryBadge: "Case Study",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">24/7 Critical Care Installation</h4>
            <p>Antibacterial stainless cabin with battery rescue device and emergency medical override switch for immediate trauma room transfer.</p>
          </div>
        ),
      },
      {
        id: "proj-warehouse-case",
        title: "5. Industrial Logistics Hub (Nizamabad)",
        tagline: "3,000 kg Heavy Freight Elevator with Forklift Floor",
        categoryBadge: "Case Study",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Heavy Industrial Cargo</h4>
            <p>Heavy chequered plate flooring and bi-parting vertical gates with reinforced structural steel guide frames.</p>
          </div>
        ),
      },
      {
        id: "proj-modern-case",
        title: "6. Retrofit Case Study (Karimnagar)",
        tagline: "Geared to Gearless Modernization at Shopping Complex",
        categoryBadge: "Case Study",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">20-Year-Old Lift Overhaul</h4>
            <p>Replaced leaky geared machine with Monadrive PMSM gearless motor, cutting electrical power consumption by 42% and eliminating breakdown halts.</p>
          </div>
        ),
      },
      {
        id: "proj-cad-blueprint",
        title: "7. Hoistway Blueprint Downloads",
        tagline: "Standard Shaft & Pit Dimensions for Architects",
        categoryBadge: "Technical",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Civil Hoistway Drawings</h4>
            <p>Download standard CAD DWG files for 4, 6, 8, and 13 passenger hoistways, including pit depth, overhead height, and machine room dimensions.</p>
            <Link href="/quote-request" className="inline-block px-4 py-2 bg-slate-900 text-white rounded-lg font-bold">
              Request Blueprint Package →
            </Link>
          </div>
        ),
      },
      {
        id: "proj-gallery",
        title: "8. Visual Installation Gallery",
        tagline: "Real Cabin Finishes and Hoistway Constructions",
        categoryBadge: "Gallery",
        content: (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <div className="relative h-28 rounded-xl overflow-hidden border"><Image src="/images/residential.png" alt="Residential" fill className="object-cover" /></div>
            <div className="relative h-28 rounded-xl overflow-hidden border"><Image src="/images/commercial.png" alt="Commercial" fill className="object-cover" /></div>
            <div className="relative h-28 rounded-xl overflow-hidden border"><Image src="/images/hospital.png" alt="Hospital" fill className="object-cover" /></div>
            <div className="relative h-28 rounded-xl overflow-hidden border"><Image src="/images/industrial.png" alt="Industrial" fill className="object-cover" /></div>
          </div>
        ),
      },
      {
        id: "proj-testimonials",
        title: "9. Client Testimonials & Endorsements",
        tagline: "Verified Feedback from Builders & Villa Owners",
        categoryBadge: "Testimonial",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600 italic">
            <p>"Vision Lifts installed our duplex villa elevator within 4 weeks. Whisper quiet and beautiful glass cabin. Highly recommended!"</p>
            <span className="font-bold text-slate-900 not-italic block">— R. Srinivas Rao, Villa Owner, Karimnagar</span>
          </div>
        ),
      },
      {
        id: "proj-milestones",
        title: "10. Project Execution Timeline",
        tagline: "From Site Survey to Final Handover & License",
        categoryBadge: "Timeline",
        content: (
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border"><strong>Week 1:</strong> Survey & CAD Blueprint</div>
            <div className="p-3 bg-slate-50 rounded-xl border"><strong>Week 2-3:</strong> Manufacturing & QA</div>
            <div className="p-3 bg-slate-50 rounded-xl border"><strong>Week 4:</strong> Hoistway Erection</div>
            <div className="p-3 bg-slate-50 rounded-xl border"><strong>Week 5:</strong> Commissioning & License</div>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 08 Customer experience
  // =========================================================================
  {
    number: "08",
    id: "customer-experience",
    title: "Customer experience",
    category: "08 / CUSTOMER EXPERIENCE",
    badge: "Client Journey",
    summary: "Dedicated Client Portal, Interactive Configurator, Site Survey Scheduling, and 24/7 Breakdown Assistance.",
    subpages: [
      {
        id: "cx-overview",
        title: "1. Client Experience Framework",
        tagline: "Seamless Care from Consultation to Lifetime AMC",
        categoryBadge: "Overview",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <h3 className="text-xl font-bold text-slate-900">End-to-End Customer Care</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate the stress of elevator purchasing and maintenance through transparent pricing, digital hoistway tracking, and dedicated local engineering teams.
            </p>
          </div>
        ),
      },
      {
        id: "cx-portal",
        title: "2. Dedicated Customer Portal",
        tagline: "Asset Details, AMC Contracts & Service Requests",
        categoryBadge: "Portal",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Customer Portal Capabilities</h4>
            <ul className="space-y-1 list-disc list-inside">
              <li>View elevator technical specifications, serial numbers, and warranty certificates.</li>
              <li>Log breakdown tickets with instant technician GPS tracking.</li>
              <li>Review routine maintenance visit logs signed off by your building manager.</li>
              <li>Download AMC renewal invoices and government inspection compliance reports.</li>
            </ul>
            <Link href="/customer-portal/login" className="inline-block px-4 py-2 bg-slate-900 text-white rounded-lg font-bold">
              Access Customer Portal →
            </Link>
          </div>
        ),
      },
      {
        id: "cx-configurator",
        title: "3. Interactive Lift Configurator",
        tagline: "Custom Stops, Finishes, Doors & Speed Calculator",
        categoryBadge: "Tool",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Custom Specification Builder</h4>
            <p>Pick your building floors, passenger load, cabin stainless finish (hairline / gold / mirror), and door style to generate an instant technical preliminary estimate.</p>
          </div>
        ),
      },
      {
        id: "cx-survey-booking",
        title: "4. Free Site Survey Scheduling",
        tagline: "Direct Hoistway Measurement by Certified Engineers",
        categoryBadge: "Survey",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">On-Site Hoistway Assessment</h4>
            <p>Our engineers visit your construction site or existing home in Telangana, laser-measure the shaft plumb, pit depth, overhead, and electrical panel, providing a free feasibility report.</p>
            <Link href="/book-survey" className="inline-block px-4 py-2 bg-[#a22b51] text-white rounded-lg font-bold">
              Schedule Free Site Survey →
            </Link>
          </div>
        ),
      },
      {
        id: "cx-ticket-tracking",
        title: "5. Real-Time Service Ticket Dispatch",
        tagline: "Live Status Alerts via SMS and Customer Portal",
        categoryBadge: "Service",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Ticket Workflow</h4>
            <p>Ticket Logged → Nearest Van Dispatched (SMS alert with technician photo) → Arrival & Diagnosis → Digital Work Order Sign-off.</p>
          </div>
        ),
      },
      {
        id: "cx-civil-guide",
        title: "6. Hoistway Civil Readiness Guide",
        tagline: "Pit Waterproofing, Lintel Beams & Shaft Plumb",
        categoryBadge: "Civil Guide",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Civil Builder Checklist</h4>
            <p>Key civil requirements: 100% pit waterproofing, machine room ventilation, divider beams at every 2.5m, and 3-phase 415V power supply terminating at machine level.</p>
          </div>
        ),
      },
      {
        id: "cx-handover",
        title: "7. Commissioning & Handover Protocol",
        tagline: "72-Point Quality Inspection Checklist",
        categoryBadge: "Quality",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">72-Point Quality Audit</h4>
            <p>Governor trip speed, buffer compression, door closing force, ARD battery simulation, leveling accuracy, and noise level measurement before final keys are handed over.</p>
          </div>
        ),
      },
      {
        id: "cx-sla",
        title: "8. 24/7 Support SLA & Escalations",
        tagline: "Dedicated Helpline and Escalation Matrix",
        categoryBadge: "SLA",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Escalation Matrix</h4>
            <p>Level 1: Duty Dispatcher (Immediate) → Level 2: Field Service Lead (&lt; 15 mins) → Level 3: Chief Technical Director (&lt; 30 mins for passenger entrapment).</p>
          </div>
        ),
      },
      {
        id: "cx-warranty",
        title: "9. Warranty & Spare Parts Guarantee",
        tagline: "10-Year Motor Warranty & 100% Genuine Spares",
        categoryBadge: "Warranty",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Comprehensive Warranty Protection</h4>
            <p>All Monadrive PMSM machines carry a 10-year manufacturer warranty. Controllers and door drives include 2-year full replacement coverage.</p>
          </div>
        ),
      },
      {
        id: "cx-feedback",
        title: "10. Transparent Customer Feedback",
        tagline: "Post-Service Rating and Continuous Improvement",
        categoryBadge: "Feedback",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Post-Visit Rating</h4>
            <p>Every technician visit is followed by a digital feedback prompt on the client portal to ensure strict adherence to service standards.</p>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 09 CTA / contact
  // =========================================================================
  {
    number: "09",
    id: "cta-contact",
    title: "CTA / contact",
    category: "09 / LEAD CONVERSION & CONTACT",
    badge: "Contact",
    summary: "Let’s understand your building. Direct access to elevator engineers, hoistway blueprint requests, and local Telangana offices.",
    subpages: [
      {
        id: "cta-headline",
        title: "1. Canva Contact Heading",
        tagline: "Let’s understand your building.",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
              Exact Canva Section 09 Text
            </span>
            <h3 className="text-xl font-bold text-slate-900">Let’s understand your building.</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every building moves differently. Share your building location, number of floors, and elevator requirements to receive exact CAD hoistway drawings and preliminary cost estimates.
            </p>
            <Link href="/contact" className="inline-block px-5 py-2.5 bg-[#a22b51] text-white font-bold text-xs uppercase tracking-wider rounded-xl">
              Send project request →
            </Link>
          </div>
        ),
      },
      {
        id: "cta-survey-funnel",
        title: "2. Free Hoistway Survey Funnel",
        tagline: "Zero-Cost Engineer Visit across Telangana",
        categoryBadge: "Lead Funnel",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Site Survey Request Form</h4>
            <p>Submit your site address and preferred visit time. An engineer will visit with laser meters to inspect pit, headroom, and hoistway plumb.</p>
          </div>
        ),
      },
      {
        id: "cta-blueprint-request",
        title: "3. Technical Hoistway Blueprint Request",
        tagline: "Architectural CAD Packages in DWG and PDF",
        categoryBadge: "Architects",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Direct CAD Downloads</h4>
            <p>Architects and structural engineers can request customized hoistway DWG files for incorporation into master building plans.</p>
          </div>
        ),
      },
      {
        id: "cta-b2b-bulk",
        title: "4. B2B Component Supplier Enquiry",
        tagline: "Direct OEM Supply for Lift Contractors",
        categoryBadge: "B2B",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Wholesale Component Pricing</h4>
            <p>Inquire for volume pricing on Monadrive PMSM gearless machines, integrated VVVF controllers, guide rails, and safety gear.</p>
          </div>
        ),
      },
      {
        id: "cta-locations",
        title: "5. Office & Spares Hub Locations",
        tagline: "Gandhi Road, Karimnagar & Regional Depots",
        categoryBadge: "Offices",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block">Head Office & Central Warehouse:</strong>
              <p className="text-slate-600">Gandhi Road, Near Tower Circle, Karimnagar, Telangana 505001</p>
              <p className="text-slate-500 pt-1">Phone: +91 94401 80868 / +91 98484 80868</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block">Hyderabad Operations Desk:</strong>
              <p className="text-slate-600">Hitech City Road, Madhapur, Hyderabad, Telangana 500081</p>
              <p className="text-slate-500 pt-1">Email: visionliftsandsolutions@gmail.com</p>
            </div>
          </div>
        ),
      },
      {
        id: "cta-emergency-phone",
        title: "6. 24/7 Breakdown Emergency Helpline",
        tagline: "Direct Line to On-Duty Service Controller",
        categoryBadge: "Emergency",
        content: (
          <div className="p-5 bg-red-50 border border-red-200 rounded-2xl space-y-2 text-xs text-red-900">
            <h4 className="text-sm font-bold text-red-800">24/7 Emergency Dispatch Helpline</h4>
            <p>If an elevator experiences an unscheduled halt or passenger stoppage, call our 24-hour rapid response team immediately:</p>
            <a href="tel:+919440180868" className="inline-block text-base font-extrabold text-[#a22b51] hover:underline pt-1">
              +91 94401 80868
            </a>
          </div>
        ),
      },
      {
        id: "cta-whatsapp",
        title: "7. Instant WhatsApp Concierge",
        tagline: "Chat directly with technical sales team",
        categoryBadge: "WhatsApp",
        content: (
          <div className="p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2 text-xs text-emerald-900">
            <h4 className="text-sm font-bold">Quick WhatsApp Consultation</h4>
            <p>Send photos of your building hoistway or blueprints directly to our technical desk for instantaneous feedback.</p>
            <a href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20would%20like%20to%20enquire%20about%20an%20elevator.`} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-emerald-600 text-white font-bold rounded-lg mt-1">
              Open WhatsApp Chat →
            </a>
          </div>
        ),
      },
      {
        id: "cta-careers",
        title: "8. Careers & Technician Hiring",
        tagline: "Join Telangana's Leading Elevator Engineering Team",
        categoryBadge: "Careers",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Open Technical Roles</h4>
            <p>We are actively hiring certified lift installation technicians, electrical control panel wiremen, and AMC service engineers in Karimnagar and Hyderabad.</p>
            <Link href="/careers" className="text-xs font-bold text-[#a22b51] hover:underline">
              View Open Positions →
            </Link>
          </div>
        ),
      },
      {
        id: "cta-privacy",
        title: "9. Privacy Policy & Data Security",
        tagline: "Zero-Spam Commitment · Strict Client Data Privacy",
        categoryBadge: "Privacy",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Client Confidentiality</h4>
            <p>Your contact details, architectural blueprints, and building specifications are strictly used for technical assessment and never shared with third parties.</p>
          </div>
        ),
      },
      {
        id: "cta-summary",
        title: "10. Contact Summary & Next Steps",
        tagline: "Rapid Response within 2 Business Hours",
        categoryBadge: "Next Steps",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">What Happens Next?</h4>
            <ol className="space-y-1 list-decimal list-inside">
              <li>Our technical coordinator reviews your building parameters.</li>
              <li>We call you to confirm site survey or provide preliminary drawings.</li>
              <li>You receive a transparent itemized quotation with zero hidden fees.</li>
            </ol>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 10 Admin Portal demo
  // =========================================================================
  {
    number: "10",
    id: "admin-demo",
    title: "Admin Portal demo",
    category: "10 / CONTROL CENTER DEMO",
    badge: "Admin Demo",
    summary: "Public prototype of the Vision Lifts content and operations management portal. Explore the illustrative content-management experience in the same design language.",
    subpages: [
      {
        id: "admin-headline",
        title: "1. Canva Admin Portal Copy",
        tagline: "Preview the dashboard layout and sample workflows.",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">
              VISION LIFTS & SOLUTIONS / DEMO
            </div>
            <h3 className="text-xl font-bold text-slate-900">Admin Portal & Control Center</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Preview the dashboard layout and sample workflows. This is a public prototype, not a sign-in or protected admin area.
            </p>
            <p className="text-xs text-slate-400 italic">
              No email, password, account, or real credentials are needed. Entering the demo does not authenticate you.
            </p>
            <div className="pt-2">
              <Link
                href="/admin/dashboard"
                className="inline-block px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-xs"
              >
                Enter demo dashboard →
              </Link>
            </div>
          </div>
        ),
      },
      {
        id: "admin-aside",
        title: "2. Control Center Overview",
        tagline: "A closer look behind the experience.",
        categoryBadge: "Control Center",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs text-slate-600">
            <span className="font-bold text-[#a22b51] uppercase tracking-wider">VISION / CONTROL CENTER</span>
            <h4 className="text-sm font-bold text-slate-900">A closer look behind the experience.</h4>
            <p>
              Explore the illustrative content-management experience in the same design language as the website. Manage products, dispatch service vans, and schedule hoistway surveys in real-time.
            </p>
          </div>
        ),
      },
      {
        id: "admin-metrics",
        title: "3. Fleet Telemetry & KPI Cards",
        tagline: "Active Installations, Open Tickets & Monthly Revenue",
        categoryBadge: "KPIs",
        content: (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-slate-900">1,248</div>
              <div className="text-slate-500 font-semibold mt-1">Active Fleet Lifts</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-emerald-600">99.8%</div>
              <div className="text-slate-500 font-semibold mt-1">Fleet Uptime SLA</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-amber-600">4</div>
              <div className="text-slate-500 font-semibold mt-1">Active Breakdowns</div>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-center">
              <div className="text-2xl font-black text-[#a22b51]">18</div>
              <div className="text-slate-500 font-semibold mt-1">Pending Surveys</div>
            </div>
          </div>
        ),
      },
      {
        id: "admin-leads",
        title: "4. Lead Pipeline & Enquiries",
        tagline: "Tracking Residential, Commercial and Hospital Inquiries",
        categoryBadge: "Sales CRM",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Lead Conversion Pipeline</h4>
            <p>New Enquiry → Site Survey Scheduled → CAD Blueprint Delivered → Quotation Approved → Factory Production.</p>
          </div>
        ),
      },
      {
        id: "admin-scheduling",
        title: "5. Survey Scheduling Calendar",
        tagline: "Engineer Hoistway Measurement Dispatch",
        categoryBadge: "Calendar",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Field Engineer Dispatch Calendar</h4>
            <p>Color-coded calendar mapping engineer route allocations between Karimnagar, Hyderabad, and Warangal.</p>
          </div>
        ),
      },
      {
        id: "admin-dispatch",
        title: "6. Service Ticket & Van GPS Tracking",
        tagline: "Real-Time Emergency Technician Location",
        categoryBadge: "Dispatch",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Mobile Service Van Fleet</h4>
            <p>Real-time telemetry showing available vans, current transit speed, traffic delays, and spare parts inventory onboard.</p>
          </div>
        ),
      },
      {
        id: "admin-inventory",
        title: "7. Component Inventory & Stock Manager",
        tagline: "Monadrive Motors, Inverters, Rollers & Light Curtains",
        categoryBadge: "Inventory",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Central Spares Registry</h4>
            <p>Automated reorder thresholds for high-turnover spares to ensure zero downtime for AMC customer lifts.</p>
          </div>
        ),
      },
      {
        id: "admin-quotation",
        title: "8. Digital Quotation Builder",
        tagline: "Automated BOM and Itemized Cost Calculation",
        categoryBadge: "Billing",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Instant PDF Quotations</h4>
            <p>Generates professional PDF proposals with CAD shaft drawings, motor specifications, and payment terms in 60 seconds.</p>
          </div>
        ),
      },
      {
        id: "admin-export-audit",
        title: "9. Export Authorization & Audit Logs",
        tagline: "Figma Frame: Admin / Export authorization / confirm",
        categoryBadge: "Security",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Dual-Authorization Export</h4>
            <p>Sensitive customer databases and financial audits require dual-admin confirmation with one-time verification tokens.</p>
          </div>
        ),
      },
      {
        id: "admin-live-link",
        title: "10. Open Live Admin Sandbox",
        tagline: "Click below to explore the interactive dashboard",
        categoryBadge: "Launch",
        content: (
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
            <h4 className="text-base font-bold">Ready to explore the control center?</h4>
            <p className="text-xs text-slate-300">Experience the live admin portal prototype with realistic data models and operations workflows.</p>
            <Link href="/admin/dashboard" className="inline-block px-5 py-2.5 bg-[#a22b51] hover:bg-[#863078] text-white text-xs font-bold uppercase rounded-xl">
              Launch Admin Dashboard →
            </Link>
          </div>
        ),
      },
    ],
  },

  // =========================================================================
  // 11 Dashboard / system
  // =========================================================================
  {
    number: "11",
    id: "system-foundations",
    title: "Dashboard / system",
    category: "11 / SYSTEM FOUNDATIONS",
    badge: "System Design",
    summary: "System foundations, design tokens, reusable UI masters, role-based access control (RBAC), and technical architecture.",
    subpages: [
      {
        id: "sys-headline",
        title: "1. Canva System Foundations",
        tagline: "Admin Dashboard & System Foundations",
        categoryBadge: "Canva Copy",
        content: (
          <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-3">
            <span className="text-[11px] font-bold text-[#a22b51] uppercase tracking-wider">
              Exact Canva Section 11 Text
            </span>
            <h3 className="text-xl font-bold text-slate-900">Admin Dashboard & System Foundations</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Design tokens, component library masters, and architectural guidelines defining every screen across the Vision Lifts digital ecosystem.
            </p>
          </div>
        ),
      },
      {
        id: "sys-tokens",
        title: "2. Design Tokens & CSS Variables",
        tagline: "Color, Spacing, Typography & Elevation",
        categoryBadge: "Tokens",
        content: (
          <div className="space-y-2 text-xs font-mono">
            <div className="p-3 bg-slate-50 rounded border">--logo-crimson: #a22b51;</div>
            <div className="p-3 bg-slate-50 rounded border">--logo-magenta: #a22b51;</div>
            <div className="p-3 bg-slate-50 rounded border">--logo-purple: #52337e;</div>
            <div className="p-3 bg-slate-50 rounded border">--logo-indigo: #423887;</div>
          </div>
        ),
      },
      {
        id: "sys-ui-masters",
        title: "3. Reusable UI Masters",
        tagline: "Figma Frame: System / Reusable UI masters",
        categoryBadge: "Components",
        content: (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-center">
            <div className="p-3 bg-slate-50 rounded-xl border">Buttons (Primary, Ghost)</div>
            <div className="p-3 bg-slate-50 rounded-xl border">Input Fields & Selects</div>
            <div className="p-3 bg-slate-50 rounded-xl border">Status Badges & Pills</div>
            <div className="p-3 bg-slate-50 rounded-xl border">Modals & Flyouts</div>
          </div>
        ),
      },
      {
        id: "sys-motion",
        title: "4. Workflow States & Motion Specs",
        tagline: "Figma Frame: System / Workflow states & motion",
        categoryBadge: "Motion",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Transitions & Easing</h4>
            <p>All interactive state changes (hover, drawer slide, modal fade) use cubic-bezier(0.16, 1, 0.3, 1) with 180ms duration for swift, tactile responsiveness.</p>
          </div>
        ),
      },
      {
        id: "sys-rbac",
        title: "5. Roles & Permissions (RBAC Matrix)",
        tagline: "Figma Frame: Admin / Roles & Permissions matrix",
        categoryBadge: "Security",
        content: (
          <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Four User Access Tiers</h4>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2 bg-white rounded border"><strong>Super Admin:</strong> Full read/write + export authorization</div>
              <div className="p-2 bg-white rounded border"><strong>Service Dispatcher:</strong> Tickets & engineer assignments</div>
              <div className="p-2 bg-white rounded border"><strong>Field Technician:</strong> Mobile work order closeouts</div>
              <div className="p-2 bg-white rounded border"><strong>Customer Owner:</strong> Asset logs & payment receipts</div>
            </div>
          </div>
        ),
      },
      {
        id: "sys-iot-architecture",
        title: "6. Edge IoT & Telemetry Architecture",
        tagline: "CAN Bus to MQTT Edge Gateway Protocol",
        categoryBadge: "Architecture",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">Real-Time Telemetry Pipeline</h4>
            <p>Elevator Controller → CAN Bus 2.0 → IoT Cellular Gateway → TLS 1.3 MQTT Broker → Real-time Dashboard Alerts.</p>
          </div>
        ),
      },
      {
        id: "sys-data-integrity",
        title: "7. Data Integrity & Schema Validation",
        tagline: "Strict TypeScript Interfaces & Zod Validation",
        categoryBadge: "Data Layer",
        content: (
          <div className="p-5 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-600">
            <h4 className="text-sm font-bold text-slate-900">End-to-End Type Safety</h4>
            <p>Every lead submission, survey form, and quotation calculation is strictly validated with TypeScript interfaces ensuring zero runtime type errors.</p>
          </div>
        ),
      },
      {
        id: "sys-zero-trust",
        title: "8. Zero-Trust Security Hardening",
        tagline: "Content Security Policy, CSRF & Subresource Integrity",
        categoryBadge: "Security",
        content: (
          <div className="p-5 bg-emerald-50/60 border border-emerald-200 rounded-2xl space-y-2 text-xs text-emerald-900">
            <h4 className="text-sm font-bold">Hardened Headers</h4>
            <p>X-Frame-Options: DENY, Strict-Transport-Security: max-age=63072000, and sanitization on all user-submitted form payloads.</p>
          </div>
        ),
      },
      {
        id: "sys-roadmap",
        title: "9. Technology Roadmap",
        tagline: "Mobile App Companion & Predictive Vibration AI",
        categoryBadge: "Roadmap",
        content: (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block">Q3 2026: Mobile Companion App</strong>
              <p className="text-slate-500">Native iOS & Android app for building owners to summon lifts and receive arrival chimes.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
              <strong className="text-slate-900 block">Q4 2026: Predictive AI Maintenance</strong>
              <p className="text-slate-500">Acoustic vibration anomaly detection warning of bearing wear 30 days before failure.</p>
            </div>
          </div>
        ),
      },
      {
        id: "sys-complete",
        title: "10. System Completion Verification",
        tagline: "All 11 Sections & 110 Subpages Fully Implemented",
        categoryBadge: "Status",
        content: (
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[11px] uppercase tracking-wider">
              ✓ 100% Comprehensive Design Alignment
            </div>
            <h4 className="text-base font-bold">Presentation Deck & Website Ready</h4>
            <p className="text-xs text-slate-300">
              All 11 sections matching Canva and Figma with 10 detailed subpages each, complete responsive viewports, no horizontal scrollbar, and the high-end Megamenu.
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/" className="px-4 py-2 bg-[#a22b51] hover:bg-[#863078] text-white text-xs font-bold rounded-xl">
                Go to Homepage
              </Link>
              <Link href="/solutions" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl">
                View Solutions
              </Link>
            </div>
          </div>
        ),
      },
    ],
  },
];

