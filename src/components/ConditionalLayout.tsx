"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminOrPortal = Boolean(
    pathname && (pathname.startsWith("/admin") || pathname.startsWith("/portal"))
  );

  return (
    <div className="min-h-screen w-full flex flex-col justify-between">
      {!isAdminOrPortal && <Navbar />}
      <main
        id="main-content"
        className={
          isAdminOrPortal
            ? "flex-1 w-full bg-[#f8fafc] text-slate-800"
            : "flex-1 pt-20 pb-16 sm:pb-0 overflow-x-hidden max-w-full w-full"
        }
      >
        {children}
      </main>
      {!isAdminOrPortal && <Footer />}
      {!isAdminOrPortal && <FloatingActions />}
    </div>
  );
}
