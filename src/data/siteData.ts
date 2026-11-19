export interface ElevatorProduct {
  id: string;
  name: string;
  category: "Residential" | "Commercial" | "Hospital" | "Industrial" | "Specialty";
  tagline: string;
  description: string;
  image: string;
  capacity: string;
  speed: string;
  floors: string;
  machineRoom: "Machine-Room-Less (MRL)" | "Small Machine Room" | "Hydraulic (No MR)" | "Gearless MRL" | "Self-Contained Shaft";
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
}

export interface SolutionItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  bestFor: string;
  image: string;
  highlights: string[];
  specs: string[];
  slug: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Hospital" | "Industrial";
  location: string;
  floors: string;
  capacity: string;
  type: string;
  image: string;
  description: string;
  completedYear: string;
}

export interface B2BComponent {
  id: string;
  name: string;
  category: "Traction Machines" | "Controllers" | "Door Systems" | "Cabins & Interiors" | "Mechanical & Hardware" | "Fixtures";
  shortDesc: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
}

export const COMPANY_INFO = {
  name: "Vision Lifts & Solutions",
  brandName: "Vision Lifts",
  tagline: "Precision Engineering & Modern Vertical Mobility",
  founder: "Ramesh Vilasagar",
  phone: "9700 123 878",
  phoneRaw: "+919700123878",
  whatsapp: "919700123878",
  whatsappMessage: "Hello Vision Lifts, I need elevator quotation and hoistway information.",
  email: "visionlifitsandsolutions@gmail.com",
  agency: "Triora Labs",
  address: "0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar, Telangana – 505001",
  karimnagarAddress: "0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar, Telangana – 505001",
  hyderabadAddress: "Hyderabad Regional Hub, Telangana",
  operatingSince: "Operating Since 2014",
  regionalPresence: "Karimnagar Central HQ & Workshop · Hyderabad Regional Hub · Warangal · Nizamabad · Jagtial · Ramagundam",
  statesServed: "Telangana & South India",
  stats: [
    { value: "2014", label: "Operating Since" },
    { value: "500+", label: "Completed Installations" },
    { value: "99.8%", label: "Uptime Reliability" },
    { value: "24/7", label: "Emergency Support" },
    { value: "< 30m", label: "Rapid Breakdown SLA" },
  ],
  certifications: ["ISO 9001:2015 Compliant", "IS 14665 (Part 1-5)", "IS 15259 Compliance", "NBC 2016 Certified"],
};

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "residential",
    title: "Residential & Villa Elevators",
    category: "Residential",
    subtitle: "Pitless & MRL Elegance for Duplexes, Villas & Gated Communities",
    description: "Engineered specifically for personal homes, luxury villas and residential apartment buildings in Telangana. Requires minimal pit depth (as low as 150mm) and operates seamlessly on single-phase or 3-phase power with near-silent gearless traction.",
    bestFor: "Villas, Duplexes, Row Houses, 3-5 Storey Apartments & Bungalows",
    image: "/images/residential.png",
    highlights: [
      "Pitless or shallow pit (150mm - 300mm) options",
      "No separate machine room required (Gearless MRL)",
      "Single-phase 230V or three-phase 415V power compatible",
      "Automatic Rescue Device (ARD) included for power cuts",
      "Luxurious cabin customizable in Rose Gold, Titanium & Glass",
    ],
    specs: ["Capacity: 2 to 8 Persons (200 - 544 kg)", "Speed: 0.5 to 1.0 m/s", "Max Travel: Up to 6 Floors (G+5)", "Operation: Microprocessor VVVF Drive"],
    slug: "/solutions#residential",
  },
  {
    id: "commercial",
    title: "Commercial & Office Elevators",
    category: "Commercial",
    subtitle: "High-Traffic Gearless Passenger Mobility for Retail, Showrooms & Corporate Towers",
    description: "Built to handle heavy footfalls during morning rush hours and evening departures. Equipped with intelligent group dispatching, precision floor levelling and whisper-quiet gearless PMSM motors for optimal passenger throughput.",
    bestFor: "Corporate Offices, Shopping Malls, Showrooms, Multiplexes & Colleges",
    image: "/images/commercial.png",
    highlights: [
      "Energy saving PMSM gearless drive (up to 40% energy reduction)",
      "Intelligent collective selective traffic dispatch",
      "Heavy-duty stainless steel hair-line & mirror finishes",
      "Infrared full-height 36-beam curtain door sensors",
      "LCD / TFT display multimedia cabin indicators",
    ],
    specs: ["Capacity: 6 to 26 Persons (408 - 1768 kg)", "Speed: 1.0 to 2.5 m/s", "Max Travel: Up to 20 Floors", "Drive: PMSM Gearless Machine"],
    slug: "/solutions#commercial",
  },
  {
    id: "hospital",
    title: "Hospital & Healthcare Elevators",
    category: "Hospital",
    subtitle: "Stretcher, Bed & Patient Transit with Millimeter Levelling Precision",
    description: "Designed strictly adhering to hospital safety codes. Features ultra-smooth acceleration/deceleration, anti-microbial stainless steel cabins, priority medical emergency override, and deep cabin dimensions to accommodate intensive care beds and equipment.",
    bestFor: "Multi-Speciality Hospitals, Diagnostic Centers, Clinics & Nursing Homes",
    image: "/images/hospital.png",
    highlights: [
      "Deep cabin depth specifically dimensioned for ICU beds & stretchers",
      "Millimeter-level floor flush levelling preventing patient trolley jerks",
      "Priority medical key-switch override for code blue emergencies",
      "Antibacterial SS 304 interior & wide automatic telescoping doors",
      "Automatic evacuation system with dedicated battery backup",
    ],
    specs: ["Capacity: 15 to 26 Passengers / Bed Lift (1020 - 1768 kg)", "Speed: 0.7 to 1.5 m/s", "Door Opening: Center Opening / Two-Panel Telescopic 1100-1300mm", "Standards: Healthcare NBC Compliance"],
    slug: "/solutions#hospital",
  },
  {
    id: "industrial",
    title: "Industrial & Freight Elevators",
    category: "Industrial",
    subtitle: "Heavy-Duty Cargo & Goods Movement for Factories, Warehouses & Plants",
    description: "Engineered for rugged, high-impact industrial operations. Built with reinforced structural steel chassis, chequered non-slip flooring, collision guardrails, and heavy-duty mechanical locking systems to handle forklift and pallet truck loading.",
    bestFor: "Manufacturing Plants, Textile Mills, Automobile Showrooms & Distribution Centers",
    image: "/images/industrial.png",
    highlights: [
      "Heavy structural steel frame designed to absorb forklift impact",
      "Chequered steel plate or non-skid aluminum flooring",
      "Bi-parting or heavy automatic collapsible steel gates",
      "Variable cargo configurations up to 5,000 kg payload",
      "Reinforced heavy-duty T-guide rails and steel wire ropes",
    ],
    specs: ["Capacity: 500 kg to 5,000 kg", "Speed: 0.35 to 0.75 m/s", "Floor Levels: Multi-level warehouse logistics", "Loading: Forklift, Pallet Truck, Hand Cart"],
    slug: "/solutions#industrial",
  },
];

export const PRODUCTS_CATALOG: ElevatorProduct[] = [
  {
    id: "sl-series",
    name: "SL Series (Villa & Home Lifts)",
    category: "Residential",
    tagline: "Architectural Pitless Home Lift for Villas & Duplexes",
    description: "The signature home elevator for Telangana's finest residences. Zero machine room, requires only 150mm pit or ramp, and connects to standard household electrical supply.",
    image: "/images/residential.png",
    capacity: "3 - 8 Persons (300 - 630 kg)",
    speed: "0.3 - 0.65 m/s",
    floors: "G+1 to G+5",
    machineRoom: "Machine-Room-Less (MRL)",
    features: [
      "Pitless / Shallow pit design (150mm min)",
      "Single phase 230V domestic inverter drive",
      "Panoramic glass or Rose Gold titanium cabin",
      "Silent gearless synchronous motor (sound < 48 dB)",
      "Integrated emergency ARD rescue unit",
    ],
    specs: [
      { label: "Rated Load", value: "300 kg / 450 kg / 630 kg" },
      { label: "Rated Speed", value: "0.3 m/s - 0.65 m/s" },
      { label: "Drive Type", value: "Permanent Magnet Synchronous (PMSM) / Hydraulic" },
      { label: "Power Supply", value: "Single Phase 230V / 3-Phase 415V" },
      { label: "Min. Overhead Height", value: "2750 mm (No penthouse required)" },
      { label: "Min. Pit Depth", value: "150 mm (Pitless ramp option)" },
      { label: "Door Type", value: "Automatic Telescopic Glass / Center Opening SS 304" },
    ],
  },
  {
    id: "vl-series",
    name: "VL Series (Commercial MRL)",
    category: "Commercial",
    tagline: "Eco-Efficient High Speed MRL Elevators for Corporate & Retail Towers",
    description: "Engineered for high duty cycles in commercial complexes, IT parks, and corporate office towers. Compact machine-room-less design frees up valuable rooftop real estate.",
    image: "/images/commercial.png",
    capacity: "8 - 24 Persons (544 - 1600 kg)",
    speed: "1.0 - 2.5 m/s",
    floors: "Up to 30 Floors",
    machineRoom: "Gearless MRL",
    features: [
      "Regenerative drive saves up to 45% electricity",
      "Group supervisory dispatching controls",
      "Smart card / RFID floor access compatibility",
      "Anti-vibration roller guide shoes for smooth ride",
      "Durable SS 304 hairline & etched panels",
    ],
    specs: [
      { label: "Rated Load", value: "544 kg to 1600 kg" },
      { label: "Rated Speed", value: "1.0 m/s to 2.5 m/s" },
      { label: "Drive Type", value: "Gearless PMSM with Regenerative VVVF" },
      { label: "Power Supply", value: "3 Phase 415V, 50Hz" },
      { label: "Min. Overhead Height", value: "4000 mm" },
      { label: "Min. Pit Depth", value: "1200 mm" },
      { label: "Door Type", value: "Automatic Center Opening 2-Panel SS 304" },
    ],
  },
  {
    id: "rmg-series",
    name: "RMG Series (Hospital & Stretcher)",
    category: "Hospital",
    tagline: "Jerk-Free Bed & Patient Vertical Transport",
    description: "Specially calibrated for healthcare operations. Oversized cabin dimensions allow comfortable maneuvering of hospital beds, oxygen cylinders, IV stands, and attending medical personnel.",
    image: "/images/hospital.png",
    capacity: "15 - 30 Persons (1020 - 2040 kg)",
    speed: "0.63 - 1.75 m/s",
    floors: "Up to 15 Floors",
    machineRoom: "Machine-Room-Less (MRL)",
    features: [
      "Direct landing millimeter-precision leveling (±2mm)",
      "Wide two-panel telescopic doors for bed clearance",
      "Anti-microbial copper/stainless steel touch buttons",
      "Code blue medical attendant key priority override",
      "Smooth S-curve acceleration profile prevents dizziness",
    ],
    specs: [
      { label: "Rated Load", value: "1020 kg / 1360 kg / 2040 kg" },
      { label: "Rated Speed", value: "0.63 m/s - 1.75 m/s" },
      { label: "Cabin Size (WxDxH)", value: "1000 x 2400 x 2200 mm (NBC Stretcher Standard)" },
      { label: "Door Opening Size", value: "1100 mm x 2100 mm (Telescopic)" },
      { label: "Emergency Rescue", value: "Heavy-duty Automatic Rescue Device (ARD)" },
      { label: "Power Supply", value: "3 Phase 415V, 50Hz" },
    ],
  },
  {
    id: "vl-freight-industrial",
    name: "VL-Heavy Freight & Cargo Series",
    category: "Industrial",
    tagline: "Rugged Industrial Strength for Materials & Pallet Loading",
    description: "Built for factories, manufacturing facilities, automobile dealers, and logistic hubs. Reinforced steel chassis and anti-skid flooring handle intense daily material handling.",
    image: "/images/industrial.png",
    capacity: "1000 kg - 5000 kg",
    speed: "0.35 - 0.75 m/s",
    floors: "Up to 8 Floors",
    machineRoom: "Small Machine Room",
    features: [
      "Rigid channel iron cage and structural steel sling",
      "Heavy duty checkered floor plates withstand forklifts",
      "Robust bi-parting or shutter gates with safety interlocks",
      "Overload sensors with visual & audible horn alarms",
      "Tough counterweight system with double spring buffers",
    ],
    specs: [
      { label: "Rated Load", value: "1000 kg / 2000 kg / 3000 kg / 5000 kg" },
      { label: "Rated Speed", value: "0.35 m/s to 0.75 m/s" },
      { label: "Floor Surface", value: "4mm Chequered Steel Plate" },
      { label: "Gate Type", value: "Manual Collapsible / Power Bi-Parting" },
      { label: "Safety System", value: "Progressive Safety Clamp & Governor" },
    ],
  },
  {
    id: "vl-panoramic-capsule",
    name: "VL-Panoramic Capsule Series",
    category: "Specialty",
    tagline: "Glass Aesthetic Capsule Elevators for Luxury Facades & Malls",
    description: "Designed to become the architectural highlight of luxury commercial showrooms, boutique hotels, and landmark residential estates. Offers 180° or 360° scenic views.",
    image: "/images/hero-lobby.png",
    capacity: "6 - 13 Persons (408 - 884 kg)",
    speed: "1.0 m/s",
    floors: "Up to 10 Floors",
    machineRoom: "Machine-Room-Less (MRL)",
    features: [
      "Curved or polygonal laminated safety glass panels",
      "Custom dome and under-car LED ambiance lighting",
      "Gold mirror titanium stainless steel accents",
      "Architectural focal point for atriums and exterior facades",
      "Quiet VVVF gearless drive operation",
    ],
    specs: [
      { label: "Rated Load", value: "408 kg / 680 kg / 884 kg" },
      { label: "Glass Specification", value: "10mm + 10mm Laminated Toughened Glass" },
      { label: "Configuration", value: "Semi-Circular / Square / Polygonal Capsule" },
      { label: "Drive Type", value: "Synchronous PMSM Gearless MRL" },
    ],
  },
  {
    id: "vl-service-dumbwaiter",
    name: "VL-Service Dumbwaiters",
    category: "Specialty",
    tagline: "Compact Goods & Food Service Lifts for Restaurants & Hotels",
    description: "Compact service lifts built for kitchens, banquet halls, hospitals, and pharmacies to transfer food trays, documents, medicines, and packages between floors.",
    image: "/images/cabin-study.png",
    capacity: "50 kg - 250 kg",
    speed: "0.4 m/s",
    floors: "2 - 5 Floors",
    machineRoom: "Self-Contained Shaft",
    features: [
      "Stainless steel food-grade SS 304 interior shelf racks",
      "Vertical bi-parting rise-and-fall doors",
      "Compact footprint fitting into small wall recesses",
      "Simple push button call & send stations at each landing",
      "Low power consumption with single-phase operation",
    ],
    specs: [
      { label: "Rated Load", value: "50 kg / 100 kg / 250 kg" },
      { label: "Rated Speed", value: "0.35 - 0.45 m/s" },
      { label: "Power Supply", value: "Single Phase 220V or 3 Phase 415V" },
      { label: "Material", value: "Food Grade SS 304 Finish" },
    ],
  },
];

export const B2B_COMPONENTS: B2BComponent[] = [
  {
    id: "pmsm-traction-machine",
    name: "Permanent Magnet Synchronous (PMSM) Gearless Machines",
    category: "Traction Machines",
    shortDesc: "High-torque, high-efficiency gearless traction machines for MRL & MR elevators.",
    description: "Direct-drive synchronous traction motors manufactured with high-grade neodymium magnets. Consumes 40% less power compared to geared machines, requires zero lubrication oil, and operates under 48 dB sound levels.",
    features: [
      "High torque low RPM synchronous design",
      "Integrated dual-disc electromagnetic fail-safe brake",
      "Thermal protection thermistors embedded in windings",
      "Zero oil leakage - 100% environmentally clean",
      "Available capacities from 320 kg up to 2000 kg",
    ],
    specs: [
      { label: "Capacity Range", value: "320 kg to 2000 kg" },
      { label: "Speed Range", value: "0.5 m/s to 2.5 m/s" },
      { label: "Roping Ratio", value: "1:1 and 2:1" },
      { label: "Sheave Diameter", value: "320 mm / 400 mm" },
      { label: "Brake Voltage", value: "DC 110V / 220V" },
    ],
    image: "/images/industrial.png",
  },
  {
    id: "integrated-vvvf-controller",
    name: "Integrated VVVF Microprocessor Elevator Controllers",
    category: "Controllers",
    shortDesc: "All-in-one 32-bit CPU control panel with integrated drive inverter and ARD.",
    description: "Cutting-edge unified drive and logic control cabinet. Combines CAN-bus communication, precise distance control deceleration, serial communication with car & landing stations, and built-in fault memory logging.",
    features: [
      "32-bit dual-core DSP microprocessor architecture",
      "Built-in CAN-bus serial communication reducing cable count by 70%",
      "Real-time fault diagnosis and event history storage (up to 100 records)",
      "Integrated Automatic Rescue Device (ARD) control board",
      "Compatible with Simplex, Duplex, and Triplex group controls",
    ],
    specs: [
      { label: "Power Rating", value: "5.5 kW / 7.5 kW / 11 kW / 15 kW / 18.5 kW" },
      { label: "Control Mode", value: "Full Collective Selective (Simplex/Duplex)" },
      { label: "Communication", value: "High-speed CAN-bus 2.0" },
      { label: "Floor Support", value: "Up to 32 Stops" },
    ],
    image: "/images/safety-panel.png",
  },
  {
    id: "auto-door-operators",
    name: "Automatic Landing & Car Door Systems",
    category: "Door Systems",
    shortDesc: "Synchronous belt-driven VVVF automatic door operators and landing door mechanisms.",
    description: "Whisper-quiet VVVF closed-loop door operators providing gentle and rapid door movement. Includes landing door headers with heavy-duty mechanical interlocks and cast iron weight return pulleys.",
    features: [
      "Permanent magnet VVVF drive motor with encoder feedback",
      "Adjustable opening/closing velocity curves",
      "Over-torque obstruction auto-reverse protection",
      "Fire-rated 2-hour landing door options (BS / IS standards)",
      "Available in 2-Panel Center Opening & 2-Panel Telescopic configurations",
    ],
    specs: [
      { label: "Opening Width", value: "700 mm to 1500 mm" },
      { label: "Opening Height", value: "2000 mm / 2100 mm" },
      { label: "Configuration", value: "2-Panel CO / 2-Panel Telescopic" },
      { label: "Drive Control", value: "Microprocessor VVVF Closed Loop" },
    ],
    image: "/images/commercial.png",
  },
  {
    id: "ss-cabins-interiors",
    name: "Stainless Steel Modular Cabins & Finishes",
    category: "Cabins & Interiors",
    shortDesc: "Laser-cut CNC fabricated passenger cabins with custom designer ceilings and walls.",
    description: "Precision-engineered modular elevator cabins manufactured from certified SS 304 sheets. We supply raw cabin frames, finished designer cabins, false ceilings, and heavy-duty car slings to elevator installers across South India.",
    features: [
      "Laser-cut modular interlocking panels for easy shaft assembly",
      "Finishes: Hairline, Mirror, Etched Gold, Rose Gold, Wood Laminate",
      "Energy-efficient LED spot/ambient lighting ceiling panels",
      "Heavy duty aluminum extrusion handrails and kick-plates",
      "Chequered floor plate or provision for 20mm granite / marble inlay",
    ],
    specs: [
      { label: "Material Grade", value: "Stainless Steel AISI 304 (1.5mm thickness)" },
      { label: "Standard Heights", value: "2200 mm / 2400 mm" },
      { label: "Ventilation", value: "Cross Flow Low-Noise Blower Fan" },
      { label: "Sling Type", value: "Cantilever (Back/Side) or Center Sling" },
    ],
    image: "/images/cabin-study.png",
  },
  {
    id: "guide-rails-hardware",
    name: "Machined Elevator Guide Rails & Mechanical Hardware",
    category: "Mechanical & Hardware",
    shortDesc: "Cold-drawn and machined T-guide rails, brackets, counterweight blocks, and wire ropes.",
    description: "High-precision ISO 7465 standard elevator guide rails ensuring vibration-free ride comfort. We maintain bulk stock of guide shoes, brackets, rope attachments, buffer springs, and oil cans in our Karimnagar warehouse.",
    features: [
      "Machined T-profile rails (T70, T75, T89, T114, T127)",
      "Precision fishplates, rail clips, and adjustable shaft brackets",
      "High tensile elevator steel wire ropes (8x19S + FC / IWRC)",
      "Hydraulic and polyurethane energy-dissipating buffers",
      "Instantaneous and progressive safety gear assemblies",
    ],
    specs: [
      { label: "Rail Types", value: "T70/1B, T75-3/B, T89/B, T114/B, T127-1/B" },
      { label: "Standard Length", value: "5000 mm (+/- 2mm)" },
      { label: "Compliance", value: "ISO 7465 / IS 14665" },
    ],
    image: "/images/industrial.png",
  },
  {
    id: "cop-lop-fixtures",
    name: "Car Operating Panels (COP) & Landing Stations (LOP)",
    category: "Fixtures",
    shortDesc: "Touch and braille push button stations with TFT/LCD dot-matrix floor indicators.",
    description: "Modern, stylish COP and LOP fixture panels fabricated in hairline stainless steel or tempered black acrylic glass. Equipped with micro-stroke tactile buttons, braille lettering, emergency alarm buttons, and overload display warnings.",
    features: [
      "Full-height column COP and compact surface mount LOPs",
      "High-brightness TFT color screens / Segment displays / Dot Matrix",
      "Stainless steel push buttons with blue/white LED halo illumination",
      "Integrated emergency phone speaker grill and key switches",
      "Standard CAN-bus interface plug-and-play wiring",
    ],
    specs: [
      { label: "Display Options", value: "4.3\" / 7\" TFT Color LCD or Blue Dot Matrix" },
      { label: "Button Lifetime", value: "3,000,000+ Cycles" },
      { label: "Plate Material", value: "SS 304 (2.0mm) or Toughened Glass" },
      { label: "Features", value: "Braille, Key Switch, Emergency Light" },
    ],
    image: "/images/safety-panel.png",
  },
];

export const SAFETY_FEATURES_DATA = [
  {
    title: "Automatic Rescue Device (ARD)",
    tag: "Power Loss Protection",
    description: "In the event of a power outage or phase failure, the micro-controller battery rescue unit immediately powers up the motor at reduced speed to bring the elevator car gently to the nearest landing floor, open the doors, and allow passengers to walk out safely.",
    badge: "100% Anti-Trap",
  },
  {
    title: "Infrared Multi-Beam Light Curtain",
    tag: "Door Obstruction Safety",
    description: "A continuous invisible grid of 36 to 94 criss-cross infrared light beams guards the entire door entrance from top to bottom. If any person, hand, pet, or object interrupts a beam, the doors reverse softly without making physical contact.",
    badge: "Full Height Protection",
  },
  {
    title: "Over-Speed Governor & Safety Clamps",
    tag: "Mechanical Fail-Safe",
    description: "A mechanical centrifugal governor monitors rope speed continuously. If the elevator car exceeds rated speed by 15%, the governor locks the cable, instantly triggering hardened steel wedge clamps onto the guide rails to halt the car safely.",
    badge: "Zero Free-Fall Guarantee",
  },
  {
    title: "Overload Sensing & Audio Warning",
    tag: "Capacity Control",
    description: "Electronic strain-gauge load cells beneath the cabin floor measure payload in real time. If weight exceeds the rated capacity, a buzzer sounds, the overload indicator lights up, and the doors remain open until safe weight is restored.",
    badge: "Electronic Precision",
  },
  {
    title: "Fireman Drive & Emergency Operation",
    tag: "Disaster Preparedness",
    description: "When the designated fire service switch is engaged or building smoke sensors trigger, the lift cancels all intermediate calls, rushes directly to the primary ground evacuation floor, opens the doors, and shifts into manual firefighter control mode.",
    badge: "NBC 2016 Compliant",
  },
  {
    title: "Two-Way Intercom & Emergency Alarm",
    tag: "Emergency Communication",
    description: "Connects passengers inside the cabin directly with the building security room, building supervisor, and Vision Lifts' 24/7 emergency dispatch helpline in Karimnagar at the push of a single glowing distress button.",
    badge: "24/7 Direct Line",
  },
  {
    title: "Phase Failure & Reverse Phase Protection",
    tag: "Electrical Safety",
    description: "Prevents motor damage and dangerous reversal of direction during voltage fluctuations or phase reversals common in regional power grids. Power is safely cut before components can experience stress.",
    badge: "Grid Voltage Shield",
  },
  {
    title: "Heavy-Duty Oil / Spring Buffers",
    tag: "Shaft Pit Safety",
    description: "Located at the base of the elevator hoistway shaft underneath the cabin and counterweight. Specially engineered to decelerate and cushion kinetic energy in extreme terminal limit scenarios.",
    badge: "Terminal Protection",
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Sri Lakshmi Grand Residency",
    category: "Residential",
    location: "Collectorate Road, Karimnagar",
    floors: "G+5 Floors",
    capacity: "6 Passengers (408 kg)",
    type: "Gearless MRL Passenger Elevator",
    image: "/images/project-residence.png",
    description: "Custom-designed residential elevator with Rose Gold titanium mirror cabin, automatic center opening doors, and whisper-quiet gearless drive.",
    completedYear: "2025",
  },
  {
    id: "proj-2",
    title: "Apex Commercial Complex",
    category: "Commercial",
    location: "0-5-240, Kisan Nagar, Near Surya Paper, Karimnagar - 505001",
    floors: "G+6 Floors",
    capacity: "10 Passengers (680 kg)",
    type: "High-Traffic Commercial MRL Elevator",
    image: "/images/project-commercial.png",
    description: "Installed two synchronized passenger lifts with full-height COP panels, energy-saving PMSM traction motors, and smart collective control.",
    completedYear: "2024",
  },
  {
    id: "proj-3",
    title: "Prathima Healthcare & Research Institute",
    category: "Hospital",
    location: "Nagunur Road, Karimnagar",
    floors: "B+G+7 Floors",
    capacity: "20 Passengers / Bed Lift (1360 kg)",
    type: "Healthcare Stretcher Elevator",
    image: "/images/project-hospital.png",
    description: "Stretcher bed lift with anti-bacterial stainless steel interior, jerk-free precision leveling, and priority medical key-switch.",
    completedYear: "2024",
  },
  {
    id: "proj-4",
    title: "Telangana Agro-Industries Warehouse",
    category: "Industrial",
    location: "Industrial Development Area (IDA), Karimnagar",
    floors: "G+3 Floors",
    capacity: "3,000 kg Heavy Freight",
    type: "Industrial Freight Cargo Elevator",
    image: "/images/project-industrial.png",
    description: "Heavy duty goods lift with checkered steel flooring and bi-parting steel gates designed for pallet trucks and heavy industrial materials.",
    completedYear: "2023",
  },
  {
    id: "proj-5",
    title: "Surya Heights Luxury Villa",
    category: "Residential",
    location: "Kaman Chowrasta, Karimnagar",
    floors: "G+2 Floors",
    capacity: "4 Passengers (300 kg)",
    type: "Pitless Panoramic Glass Villa Lift",
    image: "/images/hero-lobby.png",
    description: "Architectural glass-capsule lift installed in an existing duplex home with zero civil excavation and shallow 150mm ramp.",
    completedYear: "2025",
  },
  {
    id: "proj-6",
    title: "Warangal City Centre Showroom",
    category: "Commercial",
    location: "Hanamkonda, Warangal",
    floors: "G+4 Floors",
    capacity: "8 Passengers (544 kg)",
    type: "Commercial MRL Passenger Lift",
    image: "/images/commercial.png",
    description: "Fast, sleek retail elevator with full-glass landing doors and digital TFT floor display for premium customer movement.",
    completedYear: "2024",
  },
];

export const TESTIMONIALS_DATA = [
  {
    quote: "Vision Lifts solved our villa's vertical access without damaging our marble flooring. The Vision Lifts engineering team completed the installation on time, and their AMC response in Karimnagar is always prompt.",
    client: "Dr. K. Srinivas Rao",
    role: "Villa Owner, Karimnagar",
    liftType: "VL-Home Luxe Series",
  },
  {
    quote: "We installed two commercial elevators in our office complex. The ride quality is ultra-smooth, energy bills have decreased noticeably, and their 24/7 technical breakdown team is truly local and reliable.",
    client: "B. Mahendra Reddy",
    role: "Managing Director, Apex Properties",
    liftType: "VL-Commercial Gearless MRL",
  },
  {
    quote: "In a hospital, elevator downtime can be a matter of life. Vision Lifts delivered immaculate bed lifts with flawless leveling. Their periodic preventive maintenance checks keep our lifts running non-stop.",
    client: "Medical Superintendent",
    role: "Multi-Speciality Hospital, Telangana",
    liftType: "VL-Medicare Bed Lift",
  },
];
