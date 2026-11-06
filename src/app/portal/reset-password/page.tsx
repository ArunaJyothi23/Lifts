"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CustomerPortalResetPasswordPage() {
  const [identity, setIdentity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#071d27] text-white flex flex-col justify-between">
      {/* Header */}
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
            Customer Portal · Password Reset
          </span>
        </div>

        <Link href="/portal/login" className="text-xs text-slate-400 hover:text-white transition-colors">
          ← Back to Sign in
        </Link>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl">
          <div className="bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                ACCOUNT RECOVERY
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Password Reset
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Regain access without revealing account information. Enter your registered email or account ID.
              </p>
            </div>

            {submitted ? (
              <div className="space-y-6">
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs leading-relaxed">
                  <div className="font-bold text-sm text-white mb-1">Reset Instructions Dispatched</div>
                  If an eligible account matches <strong>{identity}</strong>, reset instructions will be delivered to its registered email channel.
                </div>

                <div className="space-y-2.5 text-xs text-slate-400 border-t border-[#143e4f] pt-4">
                  <div className="text-[11px] font-bold uppercase text-slate-300 mb-2">
                    Security Protocols
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Use only the reset link delivered to your authorized address.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Reset links expire automatically in 60 minutes and are single-use.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>Never disclose your credentials or temporary passcodes to anyone.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/portal/login"
                    className="w-full py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center transition-all"
                  >
                    Return to Sign in →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleReset} className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email or account ID <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your account email (e.g. trioralabs@gmail.com)"
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-[#071d27] border border-[#143e4f] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#863078]"
                  />
                </div>

                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#863078]/25 disabled:opacity-50"
                  >
                    {loading ? "Processing..." : "Request Reset Link →"}
                  </button>

                  <Link
                    href="/portal/login"
                    className="w-full py-2.5 bg-[#143e4f]/40 hover:bg-[#143e4f] text-slate-300 font-semibold text-xs rounded-xl border border-[#143e4f] flex items-center justify-center transition-all"
                  >
                    Back to Sign in
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#143e4f] bg-[#071d27] py-4 px-4 text-center text-xs text-slate-500">
        Vision Lifts & Solutions · Static demo workspace · Privacy Policy · Terms & Conditions
      </footer>
    </div>
  );
}
