import type { Metadata } from "next";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://visionlifts.in"),
  title: {
    default: "Vision Lifts & Solutions | Premium Elevators in Karimnagar & Telangana",
    template: "%s | Vision Lifts & Solutions",
  },
  description:
    "Vision Lifts & Solutions manufactures, installs and services residential, commercial, hospital, and industrial elevators across Karimnagar, Hyderabad, and all 33 districts of Telangana. B2B Lift Components Supplier & 24/7 AMC.",
  keywords: [
    "Vision Lifts and Solutions",
    "Elevator Company Karimnagar",
    "Lift Installation Telangana",
    "Home Lifts Hyderabad",
    "Commercial Elevators Telangana",
    "Hospital Bed Lifts",
    "Industrial Goods Elevators",
    "Elevator Parts Supplier",
    "Ramesh Vilasagar Vision Lifts",
    "Elevator AMC Karimnagar",
    "9700 123 878 Lift Helpline",
  ],
  authors: [{ name: "Vision Lifts & Solutions" }, { name: "Ramesh Vilasagar" }],
  creator: "Vision Lifts & Solutions",
  publisher: "Vision Lifts & Solutions",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Vision Lifts & Solutions | Premium Elevators in Karimnagar & Telangana",
    description:
      "Engineered for luxury residential villas, commercial towers, hospitals, and factories across all 33 districts of Telangana. Direct founder engineering by Ramesh Vilasagar.",
    url: "https://visionlifts.in",
    siteName: "Vision Lifts & Solutions",
    images: [
      {
        url: "/images/vision-lifts-logo.png",
        width: 1200,
        height: 630,
        alt: "Vision Lifts & Solutions Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Lifts & Solutions | Premium Elevators in Karimnagar & Telangana",
    description:
      "Engineered for luxury residential villas, commercial towers, and hospitals. 24/7 statewide elevator support in Telangana.",
    images: ["/images/vision-lifts-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://visionlifts.in/#business",
  name: "Vision Lifts & Solutions",
  image: "https://visionlifts.in/images/vision-lifts-logo.png",
  founder: {
    "@type": "Person",
    name: "Ramesh Vilasagar",
    jobTitle: "Founder & Principal Elevator Engineer",
  },
  telephone: "+91 9700 123 878",
  alternateTelephone: "+91 98484 80868",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gandhi Road Commercial Zone",
    addressLocality: "Karimnagar",
    addressRegion: "Telangana",
    postalCode: "505001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.4386,
    longitude: 79.1288,
  },
  url: "https://visionlifts.in",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:30",
      closes: "20:30",
    },
  ],
  areaServed: {
    "@type": "State",
    name: "Telangana",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9700123878",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "te", "hi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-9848480868",
      contactType: "technical support",
      areaServed: "IN",
      availableLanguage: ["en", "te", "hi"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden max-w-full w-full" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="antialiased font-sans text-slate-800 bg-white overflow-x-hidden max-w-full w-full min-h-screen relative"
        suppressHydrationWarning
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
