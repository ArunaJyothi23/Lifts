"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    setTimeout(() => {
      if (
        email.toLowerCase().includes("admin") ||
        email.toLowerCase().includes("triora") ||
        password === "Triora_labs@5642"
      ) {
        if (typeof window !== "undefined") {
          localStorage.setItem(
            "vl_admin_session",
            JSON.stringify({
              adminUser: email || "admin@visionlifts.com",
              role: "ADMINISTRATOR",
              loggedAt: new Date().toISOString(),
            })
          );
        }
        router.push("/admin/dashboard");
      } else {
        setErrorMessage("Invalid administrator credentials. Access restricted.");
        setLoading(false);
      }
    }, 500);
  };

  const autofillAdmin = () => {
    setEmail("admin@visionlifts.com");
    setPassword("Triora_labs@5642");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex flex-col justify-between font-sans antialiased selection:bg-[#a22b51] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="inline-block">
            <div className="relative h-9 w-40">
              <Image
                src="/images/vision-lifts-logo.png"
                alt="Vision Lifts Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#423887] bg-[#f0f4ff] px-2.5 py-1 rounded-full border border-[#423887]/15">
            CMS Admin Console
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-semibold">
          <Link
            href="/portal"
            className="text-slate-600 hover:text-[#423887] transition-colors flex items-center gap-1"
          >
            <span>Customer Portal</span>
          </Link>
          <Link
            href="/"
            className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
          >
            ← View Live Website
          </Link>
        </div>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 shadow-xl shadow-slate-200/50">
            {/* Header Badge & Title */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#f0f4ff] text-[#423887] text-[11px] font-bold tracking-wider uppercase mb-2 border border-[#423887]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#423887] animate-pulse"></span>
                Operations Security Gateway
              </div>
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">
                Administrator Sign In
              </h1>
              <p className="mt-1.5 text-xs text-slate-500 leading-relaxed">
                Enter your administrative credentials to manage dynamic services, products, leads, site settings, and live SEO metadata engine.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-5 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs font-medium text-rose-700 flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Administrator Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="admin@visionlifts.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#423887] focus:ring-2 focus:ring-[#423887]/15 transition-all text-xs"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-700">
                    Security Passphrase
                  </label>
                  <span className="text-[10px] text-slate-400">Telangana HQ Encrypted</span>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#423887] focus:ring-2 focus:ring-[#423887]/15 transition-all text-xs"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#423887]/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Authenticating Session...</span>
                    </>
                  ) : (
                    <span>Enter Admin Dashboard →</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={autofillAdmin}
                  className="w-full py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl border border-slate-200 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>⚡</span>
                  <span>Quick Fill Admin Demo Credentials</span>
                </button>
              </div>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
              <span>Default: admin@visionlifts.com</span>
              <span className="font-mono">Triora_labs@5642</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-3.5 px-6 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>Vision Lifts & Solutions · Operations CMS Engine</span>
        <span className="text-[11px] text-slate-400">Headquarters: Gandhi Road, Karimnagar, Telangana - 505001</span>
      </footer>
    </div>
  );
}
