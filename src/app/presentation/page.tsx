"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PRESENTATION_SECTIONS, PresentationSection, PresentationSubPage } from "@/data/presentationData";

export default function PresentationPage() {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [activeSubPageIndex, setActiveSubPageIndex] = useState(0);
  const [isPresenting, setIsPresenting] = useState(false);
  const [devicePreview, setDevicePreview] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [sidebarOpenMobile, setSidebarOpenMobile] = useState(false);

  const currentSection: PresentationSection =
    PRESENTATION_SECTIONS[activeSectionIndex] || PRESENTATION_SECTIONS[0];
  const currentSubPage: PresentationSubPage =
    currentSection.subpages[activeSubPageIndex] || currentSection.subpages[0];

  // Reset subpage index when switching sections
  const handleSectionSelect = (index: number) => {
    setActiveSectionIndex(index);
    setActiveSubPageIndex(0);
    setSidebarOpenMobile(false);
  };

  const handleNext = () => {
    if (activeSubPageIndex < currentSection.subpages.length - 1) {
      setActiveSubPageIndex(activeSubPageIndex + 1);
    } else if (activeSectionIndex < PRESENTATION_SECTIONS.length - 1) {
      setActiveSectionIndex(activeSectionIndex + 1);
      setActiveSubPageIndex(0);
    }
  };

  const handlePrev = () => {
    if (activeSubPageIndex > 0) {
      setActiveSubPageIndex(activeSubPageIndex - 1);
    } else if (activeSectionIndex > 0) {
      setActiveSectionIndex(activeSectionIndex - 1);
      setActiveSubPageIndex(PRESENTATION_SECTIONS[activeSectionIndex - 1].subpages.length - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setIsPresenting(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSectionIndex, activeSubPageIndex]);

  return (
    <div className={`min-h-screen bg-slate-100 flex flex-col overflow-x-hidden max-w-full w-full ${isPresenting ? "fixed inset-0 z-50 bg-slate-950" : ""}`}>
      {/* Top Presentation Bar */}
      <header className="bg-white border-b border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between shadow-2xs z-30">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpenMobile(!sidebarOpenMobile)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle section sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" className="text-xs font-bold text-slate-500 hover:text-slate-900 flex items-center gap-1">
            <span>← Exit to Website</span>
          </Link>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#a22b51]">Canva Interactive Showcase</span>
            <span className="hidden sm:inline-block text-[11px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
              DAHZjS6Rmao
            </span>
          </div>
        </div>

        {/* Viewport Toggles & Mode */}
        <div className="flex items-center gap-2">
          {/* Device Preview Switcher */}
          <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-xl text-xs font-semibold text-slate-600 border border-slate-200">
            <button
              type="button"
              onClick={() => setDevicePreview("desktop")}
              className={`px-3 py-1 rounded-lg transition-all ${
                devicePreview === "desktop" ? "bg-white text-slate-900 shadow-2xs font-bold" : "hover:text-slate-900"
              }`}
            >
              Desktop
            </button>
            <button
              type="button"
              onClick={() => setDevicePreview("tablet")}
              className={`px-3 py-1 rounded-lg transition-all ${
                devicePreview === "tablet" ? "bg-white text-slate-900 shadow-2xs font-bold" : "hover:text-slate-900"
              }`}
            >
              Tablet
            </button>
            <button
              type="button"
              onClick={() => setDevicePreview("mobile")}
              className={`px-3 py-1 rounded-lg transition-all ${
                devicePreview === "mobile" ? "bg-white text-slate-900 shadow-2xs font-bold" : "hover:text-slate-900"
              }`}
            >
              Mobile
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsPresenting(!isPresenting)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              isPresenting
                ? "bg-[#a22b51] text-white shadow-sm"
                : "bg-slate-900 text-white hover:bg-slate-800"
            }`}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{isPresenting ? "Exit Present" : "Present"}</span>
          </button>
        </div>
      </header>

      {/* Main Presentation Body */}
      <div className="flex-1 flex overflow-hidden relative">
        {/* Mobile Backdrop */}
        {sidebarOpenMobile && (
          <div
            className="lg:hidden fixed inset-0 bg-black/40 z-20 backdrop-blur-xs"
            onClick={() => setSidebarOpenMobile(false)}
          />
        )}

        {/* Canva Left Sidebar (Exact Image 7 & Image 9 Layout) */}
        <aside
          className={`w-72 bg-white border-r border-slate-200 flex flex-col shrink-0 z-30 transition-all ${
            sidebarOpenMobile ? "fixed inset-y-0 left-0 top-14 shadow-2xl" : "hidden lg:flex"
          }`}
        >
          {/* Rail Heading */}
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">
              PRESENTATION / FRAMES
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500 font-bold">
                11 Sections
              </span>
              <button
                type="button"
                onClick={() => setSidebarOpenMobile(false)}
                className="lg:hidden p-1 text-slate-400 hover:text-slate-800 text-xs font-bold"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Section Items List */}
          <nav className="flex-1 overflow-y-auto py-2">
            {PRESENTATION_SECTIONS.map((section, idx) => {
              const isSelected = idx === activeSectionIndex;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionSelect(idx)}
                  className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-colors ${
                    isSelected
                      ? "bg-rose-50/70 border-l-4 border-[#863078] text-slate-900 font-bold"
                      : "border-l-4 border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? "text-[#863078]" : "text-slate-400"
                    }`}
                  >
                    {section.number}
                  </span>
                  <span className="text-xs tracking-tight truncate">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Sidebar Bottom Status */}
          <div className="p-3 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-[11px] text-slate-400">
            <div className="flex items-center gap-3">
              <span className="hover:text-slate-600 cursor-pointer">Notes</span>
              <span className="hover:text-slate-600 cursor-pointer">Timer</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span>90%</span>
              <span>•</span>
              <span className="font-bold text-slate-700">
                Pages {activeSectionIndex + 1}/11
              </span>
            </div>
          </div>
        </aside>

        {/* Presentation Canvas Area */}
        <main className="flex-1 flex flex-col overflow-y-auto p-4 sm:p-6 lg:p-8 items-center justify-between">
          {/* Subpages Tabs Bar (10 Subpages per section) */}
          <div className="w-full max-w-5xl mb-4 overflow-x-auto pb-1 scrollbar-none">
            <div className="flex items-center gap-1.5 min-w-max">
              {currentSection.subpages.map((sub, sIdx) => {
                const isSubActive = sIdx === activeSubPageIndex;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setActiveSubPageIndex(sIdx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                      isSubActive
                        ? "bg-[#863078] text-white shadow-xs"
                        : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {sub.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Device Container */}
          <div
            className={`w-full transition-all duration-300 flex-1 flex flex-col justify-center ${
              devicePreview === "mobile"
                ? "max-w-[420px]"
                : devicePreview === "tablet"
                ? "max-w-[820px]"
                : "max-w-5xl"
            }`}
          >
            {/* The Slide Canvas Card */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden flex flex-col min-h-[540px]">
              {/* Slide Header */}
              <div className="px-6 sm:px-8 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono font-bold text-[#863078] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-full">
                    {currentSection.number} · {currentSubPage.categoryBadge || currentSection.badge}
                  </span>
                  <span className="text-xs font-bold text-slate-800 truncate">
                    {currentSubPage.tagline}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="font-bold text-slate-900">
                    {String(activeSubPageIndex + 1).padStart(2, "0")}
                  </span>
                  <span>/</span>
                  <span>{String(currentSection.subpages.length).padStart(2, "0")}</span>
                </div>
              </div>

              {/* Slide Body Content */}
              <div className="flex-1 p-6 sm:p-10 flex flex-col justify-center">
                {currentSubPage.content}
              </div>

              {/* Slide Footer Navigation */}
              <div className="px-6 sm:px-8 py-4 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-xs">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={activeSectionIndex === 0 && activeSubPageIndex === 0}
                  className="px-4 py-2 rounded-xl border border-slate-200 bg-white font-bold text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5"
                >
                  <span>← Previous</span>
                </button>

                <div className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  Use ← and → arrow keys to flip slides
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={
                    activeSectionIndex === PRESENTATION_SECTIONS.length - 1 &&
                    activeSubPageIndex === currentSection.subpages.length - 1
                  }
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <span>Next →</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar Controls */}
          <div className="w-full max-w-5xl mt-4 flex items-center justify-between text-xs text-slate-500 px-2">
            <div>
              Section {currentSection.number}: <strong className="text-slate-800">{currentSection.title}</strong>
            </div>
            <div>
              Vision Lifts & Solutions · Triora Labs Design System
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
