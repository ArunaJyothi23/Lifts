import { NextResponse } from "next/server";

export interface LeadSubmission {
  id: string;
  createdAt: string;
  formType: "quote-request" | "site-survey" | "service-request" | "contact" | "b2b-enquiry" | "hero-lead" | "modal-survey";
  name: string;
  phone: string;
  email?: string;
  city?: string;
  buildingType?: string;
  liftRequirement?: string;
  enquiryType?: string;
  whatsapp?: string;
  floors?: string;
  expectedLoad?: string;
  doorPreference?: string;
  preferredContact?: string;
  message?: string;
  companyName?: string;
  componentCategory?: string;
  quantity?: string;
  deliveryCity?: string;
  issueCategory?: string;
  preferredDate?: string;
  status: "New" | "Contacted" | "Site Survey Scheduled" | "Survey Completed" | "Quote Sent";
}

// In-memory lead storage for demonstration & admin retrieval
const LEADS_STORE: LeadSubmission[] = [
  {
    id: "LEAD-DEMO-024",
    createdAt: new Date().toISOString(),
    formType: "site-survey",
    name: "Ramesh Reddy",
    phone: "+91 98484 80868",
    email: "ramesh.reddy@example.com",
    city: "Karimnagar",
    buildingType: "Residential Apartment",
    liftRequirement: "Passenger Lift",
    enquiryType: "New installation",
    status: "Site Survey Scheduled",
    preferredDate: "2026-11-05",
    message: "Requirement for 6-passenger automatic door elevator for 5 floors.",
  },
  {
    id: "LEAD-DEMO-023",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    formType: "quote-request",
    name: "Dr. Suresh Varma",
    phone: "+91 94401 22334",
    email: "suresh.varma@healthcare.org",
    city: "Warangal",
    buildingType: "Hospital & Healthcare",
    liftRequirement: "Hospital Bed Lift",
    enquiryType: "New installation",
    status: "New",
    floors: "G+4",
    message: "Stretcher-compatible elevator with precision floor leveling.",
  },
  {
    id: "LEAD-DEMO-022",
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
    formType: "contact",
    name: "Anand Rao",
    phone: "+91 98490 55667",
    city: "Hyderabad",
    buildingType: "Commercial Complex",
    liftRequirement: "Passenger Lift",
    enquiryType: "Modernization",
    status: "Contacted",
    message: "Looking to modernize 2 existing passenger lifts with gearless machines.",
  },
  {
    id: "LEAD-DEMO-021",
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
    formType: "b2b-enquiry",
    name: "Vikas Elevators Ltd",
    phone: "+91 99887 76655",
    companyName: "Vikas Elevators Ltd",
    componentCategory: "Traction Machines & Controllers",
    quantity: "10 units",
    deliveryCity: "Nizamabad",
    status: "New",
    message: "Need PMS gearless machines and integrated VVVF control panels.",
  },
];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.name || !body.phone) {
      return NextResponse.json(
        { success: false, error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const newLead: LeadSubmission = {
      id: `LEAD-DEMO-${String(Math.floor(100 + Math.random() * 900))}`,
      createdAt: new Date().toISOString(),
      formType: body.formType || "quote-request",
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email?.trim() || "",
      city: body.city?.trim() || "Karimnagar",
      buildingType: body.buildingType || "Residential",
      liftRequirement: body.liftRequirement || "Passenger",
      enquiryType: body.enquiryType || "New installation",
      whatsapp: body.whatsapp?.trim() || body.phone.trim(),
      floors: body.floors?.trim() || "",
      expectedLoad: body.expectedLoad?.trim() || "",
      doorPreference: body.doorPreference || "Automatic",
      preferredContact: body.preferredContact || "Phone",
      message: body.message?.trim() || "",
      companyName: body.companyName?.trim() || "",
      componentCategory: body.componentCategory || "",
      quantity: body.quantity?.trim() || "",
      deliveryCity: body.deliveryCity?.trim() || "",
      issueCategory: body.issueCategory || "",
      preferredDate: body.preferredDate || "",
      status: "New",
    };

    LEADS_STORE.unshift(newLead);

    // Build prefilled WhatsApp direct URL
    const whatsappText = encodeURIComponent(
      `Hi Vision Lifts,\nMy Name: ${newLead.name}\nPhone: ${newLead.phone}\nRequirement: ${newLead.liftRequirement} (${newLead.buildingType})\nCity: ${newLead.city}\nEnquiry Type: ${newLead.enquiryType}\n${newLead.message ? `Details: ${newLead.message}\n` : ""}Ref: ${newLead.id}`
    );
    const whatsappLink = `https://wa.me/919848480868?text=${whatsappText}`;

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully. Our team will review your requirements and contact you.",
      leadId: newLead.id,
      whatsappLink,
    });
  } catch (error) {
    console.error("Failed to submit lead:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    leads: LEADS_STORE,
    total: LEADS_STORE.length,
  });
}
