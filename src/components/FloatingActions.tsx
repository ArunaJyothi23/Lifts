"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_INFO } from "@/data/siteData";

export default function FloatingActions() {
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 260);
      setScrolledPastHero(window.scrollY > 380);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // On Admin and Portal console routes, do not render floating actions
  if (pathname && (pathname.startsWith("/admin") || pathname.startsWith("/portal"))) {
    return null;
  }

  return (
    <>
      {/* =========================================================================
          1. Mobile Sticky Bottom Dock (< sm / 640px)
          Native mobile dock with high-contrast text and unmissable 9700 123 878
          ========================================================================= */}
      <nav
        aria-label="Mobile quick actions"
        className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800 px-3 py-2 flex items-center justify-between gap-2 shadow-[0_-4px_24px_rgba(0,0,0,0.4)] pb-[max(0.6rem,env(safe-area-inset-bottom))]"
      >
        {/* Direct Phone Call Button (High Contrast White Text, No Truncation) */}
        <a
          href="tel:9700123878"
          className="flex-1 py-2 px-2 bg-slate-900 border border-slate-700/80 active:bg-slate-800 text-white rounded-xl text-[11px] font-black text-center flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs"
          title="Call 9700 123 878 Direct"
        >
          <span className="text-emerald-400 text-xs">📞</span>
          <span className="whitespace-nowrap tracking-tight text-white font-black">9700 123 878</span>
        </a>

        {/* WhatsApp Quick Chat Button */}
        <a
          href={`https://wa.me/919700123878?text=${encodeURIComponent("Hi Vision Lifts, I would like to enquire about an elevator.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-3 bg-emerald-600 active:bg-emerald-700 text-white rounded-xl text-[11px] font-black flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow-xs shrink-0"
          title="WhatsApp Support"
        >
          <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.884 2.796.885h.005c3.179 0 5.766-2.587 5.767-5.766 0-3.18-2.588-5.772-5.772zm3.397 8.192c-.145.408-.847.785-1.177.834-.33.049-.757.068-2.457-.638-1.7-.706-2.776-2.441-2.86-2.553-.085-.112-.693-.923-.693-1.761s.437-1.25.592-1.423c.155-.172.338-.216.45-.216.113 0 .226.002.324.007.104.005.244-.04.381.29.145.352.497 1.214.54 1.302.043.088.072.19.014.305-.058.115-.088.187-.175.29-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.103.178.461.761 1.054 1.291.764.681 1.408.892 1.609.992.201.1.32.083.438-.052.119-.136.508-.591.644-.793.136-.203.272-.17.458-.102.186.068 1.182.557 1.385.659.203.102.339.153.39.237.051.085.051.493-.094.901z" />
          </svg>
          <span className="font-black text-white">WhatsApp</span>
        </a>

        {/* Book Site Survey CTA */}
        <Link
          href="/book-survey"
          className="flex-1 py-2 px-2 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white rounded-xl text-[11px] font-black text-center flex items-center justify-center gap-1 active:scale-95 transition-all shadow-xs whitespace-nowrap"
        >
          <span>Survey →</span>
        </Link>
      </nav>

      {/* =========================================================================
          2. Floating Scroll-To-Top Button
          Positioned distinctly ABOVE the bottom quick-action docks (never hidden or overlapping)
          ========================================================================= */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-16 sm:bottom-20 right-4 sm:right-6 z-50 w-11 h-11 rounded-full bg-slate-900/95 hover:bg-[#863078] text-white border border-slate-700/80 backdrop-blur-md flex items-center justify-center transition-all hover:scale-110 shadow-2xl active:scale-95 cursor-pointer animate-in fade-in group"
          title="Scroll back to top"
        >
          <svg className="w-4 h-4 text-white group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* =========================================================================
          3. Desktop Floating Pill (>= sm / 640px)
          Renders on desktop smoothly once scrolled, avoiding overlapping the hero form
          ========================================================================= */}
      <aside
        aria-label="Quick contact and navigation"
        className={`hidden sm:flex fixed bottom-5 right-5 z-40 items-center bg-slate-950/90 backdrop-blur-md border border-slate-700/80 shadow-2xl rounded-full p-1.5 gap-2 transition-all duration-300 ${
          scrolledPastHero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent("Hi Vision Lifts, I would like to enquire about an elevator.")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-all hover:scale-[1.02] text-xs font-black"
          title="Chat on WhatsApp"
        >
          <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.584 1.761.884 2.796.885h.005c3.179 0 5.766-2.587 5.767-5.766 0-3.18-2.588-5.772-5.772zm3.397 8.192c-.145.408-.847.785-1.177.834-.33.049-.757.068-2.457-.638-1.7-.706-2.776-2.441-2.86-2.553-.085-.112-.693-.923-.693-1.761s.437-1.25.592-1.423c.155-.172.338-.216.45-.216.113 0 .226.002.324.007.104.005.244-.04.381.29.145.352.497 1.214.54 1.302.043.088.072.19.014.305-.058.115-.088.187-.175.29-.087.102-.183.228-.261.306-.089.088-.182.184-.078.362.103.178.461.761 1.054 1.291.764.681 1.408.892 1.609.992.201.1.32.083.438-.052.119-.136.508-.591.644-.793.136-.203.272-.17.458-.102.186.068 1.182.557 1.385.659.203.102.339.153.39.237.051.085.051.493-.094.901z" />
          </svg>
          <span className="text-white">WhatsApp</span>
        </a>

        {/* Direct Phone Call Button */}
        <a
          href="tel:9700123878"
          aria-label="Call Vision Lifts Directly"
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#863078] to-[#423887] hover:opacity-95 text-white shadow-xs transition-all hover:scale-[1.02] text-xs font-black"
          title="Call 9700 123 878"
        >
          <span className="text-emerald-400 text-xs">📞</span>
          <span className="tracking-tight text-white font-black whitespace-nowrap">9700 123 878</span>
        </a>
      </aside>
    </>
  );
}
