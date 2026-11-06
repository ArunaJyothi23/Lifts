"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { COMPANY_INFO } from "@/data/siteData";

export default function NewCustomerServiceRequestPage() {
  const router = useRouter();
  const [asset, setAsset] = useState("Demo site A / Lift A");
  const [issueCategory, setIssueCategory] = useState("Door operation");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [accessNotes, setAccessNotes] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Please confirm this is a routine enquiry and consent to follow-up.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      const generatedId = `SR-DEMO-0${Math.floor(25 + Math.random() * 70)}`;
      setTicketId(generatedId);
      setSubmitted(true);
      setLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-[#071d27] text-white flex flex-col justify-between selection:bg-[#863078] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-[#143e4f] bg-[#0b2834]/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-block bg-white p-1.5 rounded-lg">
            <div className="relative h-6 w-32">
              <Image
                src="/images/vision-lifts-logo.png"
                alt="Vision Lifts"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            Customer Portal · New Ticket
          </span>
        </div>

        <Link href="/portal" className="text-xs text-slate-400 hover:text-white transition-colors">
          ← Back to Portal Dashboard
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-3xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="mb-6">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">
              MAINTENANCE & REPAIR DISPATCH
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              New Service Request
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              Tell us about a routine concern with an asset in your account.
            </p>
          </div>

          {/* Safety Warning */}
          <div className="mb-6 p-4 rounded-2xl bg-red-500/10 border border-red-500/40 text-xs text-red-200 leading-relaxed">
            <div className="font-bold text-red-100 flex items-center gap-2 mb-1">
              <span>🚨</span>
              <span>Not an emergency channel</span>
            </div>
            If someone is trapped or in immediate danger, use installed emergency in-cabin communication or call our 24/7 Rapid AMC Breakdown desk:{" "}
            <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="font-bold underline text-white">
              {COMPANY_INFO.phone}
            </a>
            . Do not attempt self-rescue or force doors.
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-3xl font-bold border border-emerald-500/30">
                ✓
              </div>
              <h2 className="text-2xl font-black text-white">Service Request Logged!</h2>
              <div className="inline-block bg-[#071d27] text-emerald-400 px-4 py-1.5 rounded-full text-xs font-mono font-bold border border-[#143e4f]">
                Ticket #{ticketId}
              </div>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Your report for <strong>{asset}</strong> regarding <strong>{issueCategory}</strong> has been assigned to our maintenance division.
              </p>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20just%20logged%20ticket%20${ticketId}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider"
                >
                  WhatsApp Ticket #{ticketId}
                </a>
                <Link
                  href="/portal"
                  className="px-6 py-3 rounded-full bg-[#143e4f] hover:bg-[#143e4f]/80 text-white font-bold text-xs uppercase tracking-wider"
                >
                  Return to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Asset <span className="text-emerald-400">*</span>
                </label>
                <select
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#863078]"
                >
                  <option>Demo site A / Lift A (Passenger Lift)</option>
                  <option>Demo site B / Lift B (Heavy Goods Lift)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Issue Category <span className="text-emerald-400">*</span>
                  </label>
                  <select
                    value={issueCategory}
                    onChange={(e) => setIssueCategory(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#863078]"
                  >
                    <option>Door operation</option>
                    <option>Unusual noise</option>
                    <option>Floor leveling</option>
                    <option>Display / Button lighting</option>
                    <option>Ride comfort / Jerk</option>
                    <option>General periodic check</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Subject Brief <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Door reopening repeatedly at 2nd floor"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#863078]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Detailed Description <span className="text-emerald-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe what you observed without attempting internal repairs or mechanical adjustments..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#863078]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Site Access Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Gate pass instructions, security desk contact, or preferred visit timings..."
                  value={accessNotes}
                  onChange={(e) => setAccessNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#863078]"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 rounded border-[#143e4f] bg-[#071d27] text-[#863078] focus:ring-[#863078]"
                  />
                  <span>
                    I confirm this is a routine service enquiry and consent to follow-up by Vision Lifts maintenance desk. <span className="text-emerald-400">*</span>
                  </span>
                </label>
              </div>

              <div className="pt-3 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#863078]/25 disabled:opacity-50"
                >
                  {loading ? "Submitting Request..." : "Submit Routine Ticket →"}
                </button>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="px-6 py-3.5 bg-[#143e4f]/40 hover:bg-[#143e4f] text-slate-300 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#143e4f] bg-[#071d27] py-4 px-4 text-center text-xs text-slate-500">
        Vision Lifts & Solutions · Static demo workspace · Privacy Policy · Terms & Conditions
      </footer>
    </div>
  );
}
