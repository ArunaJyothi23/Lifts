"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth, isFirebaseConfigured } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  // Fixed standard administrative credentials as requested
  const [username, setUsername] = useState("admin123@gmail.com");
  const [password, setPassword] = useState("admin123");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const cleanUser = username.trim();
    const cleanPass = password.trim();

    if (!cleanUser || !cleanPass) {
      setErrorMessage("Please enter both administrator email and password.");
      setLoading(false);
      return;
    }

    // STRICT FIREBASE AUTHENTICATION ENFORCED - NO BACKDOORS
    if (!isFirebaseConfigured || !auth) {
      setErrorMessage("Firebase is not initialized. Please ensure your environment is configured.");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, cleanUser, cleanPass);
      const user = userCredential.user;

      if (typeof window !== "undefined") {
        localStorage.setItem(
          "vl_admin_session",
          JSON.stringify({
            adminUser: user.email || cleanUser,
            role: "ADMINISTRATOR",
            uid: user.uid,
            source: "firebase_auth",
            loggedAt: new Date().toISOString(),
          })
        );
      }
      router.push("/admin");
    } catch (fbErr: any) {
      console.error("Firebase Auth failed:", fbErr.code);
      let friendlyError = "Invalid administrator credentials. Access restricted.";
      if (
        fbErr.code === "auth/invalid-credential" ||
        fbErr.code === "auth/user-not-found" ||
        fbErr.code === "auth/wrong-password"
      ) {
        friendlyError = "Access denied: Incorrect email or password. Only registered Firebase administrators can enter.";
      } else if (fbErr.code === "auth/too-many-requests") {
        friendlyError = "Too many failed attempts. Temporary lockout engaged for security. Please try again later.";
      } else if (fbErr.code === "auth/invalid-email") {
        friendlyError = "Please enter a valid administrator email address.";
      }
      setErrorMessage(friendlyError);
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#080c14] text-slate-100 flex flex-col justify-between font-sans antialiased selection:bg-[#a22b51] selection:text-white relative">
      {/* Background Ambient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Login Card - Fixed 100% In-Viewport (Zero Page Scroll) */}
      <main className="flex-1 flex items-center justify-center p-3 sm:p-4 z-10">
        <div className="w-full max-w-[420px]">
          <div className="bg-[#111827]/95 border border-slate-800/90 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-md">
            {/* Top row inside card: Centered Logo with clean Back button */}
            <div className="relative flex items-center justify-center mb-5 pt-1">
              <Link
                href="/"
                className="absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-all active:scale-95 group"
                title="Return to website"
              >
                <span className="text-amber-400 group-hover:-translate-x-0.5 transition-transform text-xs">←</span>
                <span>Back</span>
              </Link>

              {/* Centered White Logo Container */}
              <div className="bg-white rounded-2xl p-2.5 w-26 h-18 sm:w-28 sm:h-20 flex items-center justify-center shadow-lg border border-slate-700/50">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/vision-lifts-logo.png"
                    alt="Vision Lifts"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-5">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Admin Login
              </h1>
              <p className="text-[11px] text-slate-400 mt-1">
                Operations & Compliance Command Centre
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs font-medium text-rose-300 flex items-center gap-2">
                <span>⚠️</span>
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  USERNAME / EMAIL
                </label>
                <input
                  type="text"
                  required
                  placeholder="admin@visionlifts.com"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#0c121d] border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/90 focus:ring-1 focus:ring-amber-400/90 transition-all text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  PASSWORD
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#0c121d] border border-slate-700/80 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-400/90 focus:ring-1 focus:ring-amber-400/90 transition-all text-xs font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors cursor-pointer"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & SSO Protected */}
              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 text-[11px]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 rounded bg-[#0c121d] border-slate-700 text-[#f5c35b] focus:ring-0 cursor-pointer"
                  />
                  <span>Remember session</span>
                </label>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Firebase Auth Only
                </span>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#f5c35b] hover:bg-[#eab348] active:scale-[0.99] text-slate-950 font-black text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 mt-1"
              >
                {loading ? (
                  <>
                    <div className="w-3.5 h-3.5 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                    <span>AUTHENTICATING...</span>
                  </>
                ) : (
                  <>
                    <span>LOGIN</span>
                  </>
                )}
              </button>
            </form>

            {/* Bottom Footer Info */}
            <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
              <span className="flex items-center gap-1">
                <span className="text-emerald-400">●</span>
                <span>VisionCentral Command</span>
              </span>
              <span>256-bit SSL Encrypted</span>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
