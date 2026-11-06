"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CustomerPortalLoginPage() {
  const router = useRouter();
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    setTimeout(() => {
      // Check credentials (accept user's provided credentials or demo accounts)
      const validEmails = [
        "trioralabs@gmail.com",
        "demo@visionlifts.com",
        "demo account 01",
        "admin@visionlifts.com",
      ];
      const validPass = ["Triora_labs@5642", "demo123", "password"];

      const isAccountMatch = validEmails.some(
        (em) => em.toLowerCase() === accountId.trim().toLowerCase()
      );
      const isPassMatch = validPass.includes(password.trim()) || password.length >= 6;

      if (isAccountMatch || password === "Triora_labs@5642") {
        // Successful login: persist session state & redirect to portal dashboard
        if (typeof window !== "undefined") {
          localStorage.setItem("vl_portal_session", JSON.stringify({
            user: accountId || "trioralabs@gmail.com",
            account: "Demo account 01",
            role: "Customer",
            loginTime: new Date().toISOString(),
          }));
        }
        router.push("/portal");
      } else {
        setErrorMessage(
          "We couldn’t verify those credentials. Check your details and try again. No account existence is disclosed."
        );
        setLoading(false);
      }
    }, 600);
  };

  const autofillDemo = () => {
    setAccountId("trioralabs@gmail.com");
    setPassword("Triora_labs@5642");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#071d27] text-white flex flex-col justify-between selection:bg-[#863078] selection:text-white">
      {/* Top Header / Portal Navigation */}
      <header className="border-b border-[#143e4f] bg-[#0b2834]/80 backdrop-blur-md px-4 sm:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
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
            Customer Portal · Demo Workspace
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">
            ← Back to Website
          </Link>
          <span className="text-slate-600">|</span>
          <Link href="/admin/login" className="text-slate-400 hover:text-emerald-400 transition-colors">
            Operations Admin
          </Link>
        </div>
      </header>

      {/* Main Login Card - Figma Node 19:1371 */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl">
          {/* Card Module */}
          <div className="bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            <div className="mb-6">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-2">
                CLIENT SUPPORT DESK
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Sign in
              </h1>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Your building support, brought together. Access your lift records, service requests and documents.
              </p>
            </div>

            {/* Illustrative demo note */}
            <div className="p-3.5 rounded-xl bg-[#071d27]/80 border border-[#143e4f] text-[11px] text-slate-400 leading-relaxed mb-6">
              <strong className="text-slate-200">Demonstration workspace:</strong> All names, records, dates and figures are illustrative demo data.
            </div>

            {/* Error Message banner */}
            {errorMessage && (
              <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 leading-relaxed flex items-start gap-3">
                <span className="text-base text-red-400">⚠️</span>
                <div>
                  <div className="font-bold text-red-200">Sign-in error</div>
                  <div className="mt-0.5">{errorMessage}</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSignIn} className="space-y-5">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Email or account ID <span className="text-emerald-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your approved account identity (e.g. trioralabs@gmail.com)"
                  value={accountId}
                  onChange={(e) => setAccountId(e.target.value)}
                  className="w-full px-4 py-3 text-xs bg-[#071d27] border border-[#143e4f] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#863078]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                    Password <span className="text-emerald-400">*</span>
                  </label>
                  <Link
                    href="/portal/reset-password"
                    className="text-[11px] text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 text-xs bg-[#071d27] border border-[#143e4f] rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#863078]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">
                  Keep credentials private.
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberDevice}
                    onChange={(e) => setRememberDevice(e.target.checked)}
                    className="rounded border-[#143e4f] bg-[#071d27] text-[#863078] focus:ring-[#863078]"
                  />
                  <span>Remember this device · Use only on a trusted device</span>
                </label>
              </div>

              <div className="pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#863078]/25 disabled:opacity-50"
                >
                  {loading ? "Authenticating..." : "Sign in →"}
                </button>

                <button
                  type="button"
                  onClick={autofillDemo}
                  className="w-full py-2.5 bg-[#143e4f]/40 hover:bg-[#143e4f] text-slate-300 font-semibold text-xs rounded-xl border border-[#143e4f] transition-all"
                >
                  Fill Demo Credentials (trioralabs@gmail.com)
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-[#143e4f] text-center text-xs text-slate-400">
              Need account access? Contact Ramesh Vilasagar or our central desk.{" "}
              <Link href="/contact" className="text-emerald-400 hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#143e4f] bg-[#071d27] py-4 px-4 sm:px-8 text-center text-xs text-slate-500">
        Vision Lifts & Solutions · Static demo workspace ·{" "}
        <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link> ·{" "}
        <Link href="/terms" className="hover:text-slate-300">Terms & Conditions</Link>
      </footer>
    </div>
  );
}
