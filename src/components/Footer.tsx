"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_INFO } from "@/data/siteData";

export default function Footer() {
  const pathname = usePathname();

  // On Admin and Portal console routes, do not render marketing website footer
  if (pathname && (pathname.startsWith("/admin") || pathname.startsWith("/portal"))) {
    return null;
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-200 text-slate-700 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12">
          {/* Column 1: Brand & Executive Summary */}
          <div className="lg:col-span-4 space-y-3">
            <Link href="/" className="inline-block">
              <div className="relative h-12 w-44">
                <Image
                  src="/images/vision-lifts-logo.png"
                  alt="Vision Lifts & Solutions"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <h3 className="text-sm font-bold text-slate-900 pt-1">
              Vision Lifts & Solutions
            </h3>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Thoughtfully engineered elevator solutions for homes, businesses, healthcare and industry. From the first conversation to long-term care.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-slate-900 mb-4 tracking-tight">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/" className="hover:text-[#423887] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#423887] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#423887] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#423887] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#423887] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/safety-technology" className="hover:text-[#423887] transition-colors">
                  Safety & Technology
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#423887] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-slate-900 mb-4 tracking-tight">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li>
                <Link href="/solutions#residential" className="hover:text-[#423887] transition-colors">
                  Residential Elevators
                </Link>
              </li>
              <li>
                <Link href="/solutions#commercial" className="hover:text-[#423887] transition-colors">
                  Commercial Elevators
                </Link>
              </li>
              <li>
                <Link href="/solutions#hospital" className="hover:text-[#423887] transition-colors">
                  Hospital Elevators
                </Link>
              </li>
              <li>
                <Link href="/solutions#industrial" className="hover:text-[#423887] transition-colors">
                  Industrial / Goods Elevators
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#423887] transition-colors">
                  Service & AMC
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-100 flex items-center gap-3">
                <Link href="/book-survey" className="text-[#863078] hover:text-[#423887] font-semibold text-[11px]">
                  Site Survey
                </Link>
                <span className="text-slate-300">•</span>
                <Link href="/quote-request" className="text-[#863078] hover:text-[#423887] font-semibold text-[11px]">
                  Quote
                </Link>
                <span className="text-slate-300">•</span>
                <Link href="/portal/login" className="text-[#863078] hover:text-[#423887] font-semibold text-[11px]">
                  Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-slate-900 mb-4 tracking-tight">
              Contact
            </h4>

            {/* Phone */}
            <div className="flex items-start gap-3 text-xs">
              <span className="text-[#863078] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-slate-800">Phone</div>
                <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-slate-500 hover:text-[#423887]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 text-xs">
              <span className="text-[#863078] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-slate-800">Email</div>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-500 hover:text-[#423887] break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3 text-xs">
              <span className="text-[#863078] mt-0.5 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <div>
                <div className="font-semibold text-slate-800">Address</div>
                <div className="text-slate-500 leading-relaxed">
                  {COMPANY_INFO.address}
                </div>
              </div>
            </div>

            <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100 text-xs space-y-1">
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#863078]">Enquiry Helpline (All Districts)</div>
              <div className="font-extrabold text-slate-900 text-sm">
                <a href="tel:9700123878" className="hover:text-[#423887]">9700 123 878</a>
              </div>
              <Link href="/telangana-network" className="text-[11px] text-[#863078] hover:text-[#423887] font-bold inline-block">
                Telangana Network Directory →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Links, Back to top & Engineered For Every Journey */}
        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Vision Lifts & Solutions. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/privacy-policy" className="hover:text-[#423887] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-[#423887] transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/portal" className="hover:text-[#423887] transition-colors">
              Client Portal
            </Link>
            <span>•</span>
            <Link href="/admin/dashboard" className="hover:text-[#423887] transition-colors font-medium">
              Admin Console
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              ENGINEERED FOR EVERY JOURNEY.
            </div>

            {/* Up arrow to move to top page directly (Modern Websites Standard) */}
            <button
              type="button"
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#423887] text-slate-600 hover:text-white text-xs font-semibold transition-all group shadow-2xs"
              aria-label="Scroll to top of page"
              title="Back to top"
            >
              <span>Back to top</span>
              <svg
                className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
