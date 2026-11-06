"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { COMPANY_INFO } from "@/data/siteData";

type TabType = "overview" | "lifts" | "requests" | "amc" | "quotes" | "documents" | "account";

export default function CustomerPortalDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAsset, setSelectedAsset] = useState<string | null>("Lift A");
  const [selectedQuote, setSelectedQuote] = useState<string | null>("Q-DEMO-018");

  // User session state
  const [session, setSession] = useState<{ user: string; account: string } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("vl_portal_session");
      if (stored) {
        try {
          setSession(JSON.parse(stored));
        } catch {
          setSession({ user: "trioralabs@gmail.com", account: "Demo account 01" });
        }
      } else {
        setSession({ user: "trioralabs@gmail.com", account: "Demo account 01" });
      }
    }
  }, []);

  const handleSignOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("vl_portal_session");
    }
    router.push("/portal/login");
  };

  const assets = [
    {
      id: "ASSET-DEMO-A",
      name: "Lift A (Passenger Lift)",
      site: "Demo site A — Commercial Tower",
      application: "Passenger Lift",
      type: "PMS Gearless MRL",
      floors: "G+4 (5 Stops)",
      capacity: "8 Persons (544 kg)",
      plan: "AMC-DEMO-01",
      status: "Active AMC",
      lastVisit: "14 Oct 2026",
      condition: "Operational",
      openTickets: 1,
    },
    {
      id: "ASSET-DEMO-B",
      name: "Lift B (Heavy Goods Lift)",
      site: "Demo site B — Logistics Warehouse",
      application: "Goods / Freight Lift",
      type: "Geared Traction Heavy Duty",
      floors: "G+2 (3 Stops)",
      capacity: "1500 kg",
      plan: "Scope Review Pending",
      status: "Proposal Review",
      lastVisit: "16 Sep 2026",
      condition: "Under Inspection",
      openTickets: 1,
    },
  ];

  const serviceRequests = [
    {
      id: "SR-DEMO-024",
      asset: "Demo site A / Lift A",
      category: "Door operation",
      subject: "Door safety curtain sensitive re-opening",
      status: "Under review",
      statusColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
      reported: "22 Oct 2026",
      engineer: "Assigned (Karimnagar AMC Desk)",
    },
    {
      id: "SR-DEMO-021",
      asset: "Demo site B / Lift B",
      category: "Unusual noise",
      subject: "Traction motor vibration check during descent",
      status: "Visit proposed",
      statusColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      reported: "20 Oct 2026",
      engineer: "Senior Tech visit scheduled",
    },
    {
      id: "SR-DEMO-016",
      asset: "Demo site A / Lift A",
      category: "Lighting query",
      subject: "Cabin ceiling LED panel replacement",
      status: "Closed",
      statusColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
      reported: "15 Oct 2026",
      engineer: "Completed on 16 Oct 2026",
    },
  ];

  const quotations = [
    {
      id: "Q-DEMO-018",
      requirement: "Passenger Lift Installation",
      site: "Demo site A",
      status: "Quote Sent",
      date: "18 Oct 2026",
      items: [
        { item: "VL-Commercial Gearless PMS MRL System", qty: "1 unit", spec: "1.5 m/s, 8 pax, SS 304 cabin" },
        { item: "Erection, Assembly & Commissioning", qty: "Scope", spec: "IS 14665 testing & safety cert" },
        { item: "Automatic Center Opening Doors", qty: "5 stops", spec: "Fire rated telescopic stainless steel" },
        { item: "Automatic Rescue Device (ARD)", qty: "1 set", spec: "Maintenance-free battery reserve" },
      ],
      note: "Technical & commercial proposal pending client decision.",
    },
    {
      id: "Q-DEMO-014",
      requirement: "Modernization & Controller Retrofit",
      site: "Demo site B",
      status: "On Hold",
      date: "05 Oct 2026",
      items: [
        { item: "Integrated VVVF Microprocessor Controller", qty: "1 set", spec: "Regenerative smooth leveling" },
        { item: "Door Operator Upgrade Kit", qty: "1 kit", spec: "High torque brushless DC operator" },
      ],
      note: "Awaiting site shaft dimensional audit.",
    },
  ];

  const documents = [
    {
      title: "Passenger Lift Proposal & Specs",
      ref: "Q-DEMO-018",
      category: "Proposal",
      date: "18 Oct 2026",
      status: "Draft Rev A",
    },
    {
      title: "Comprehensive AMC Scope & Responsibilities",
      ref: "AMC-DEMO-01",
      category: "Contract",
      date: "01 Oct 2026",
      status: "Under Review",
    },
    {
      title: "Technical Safety Visit Report",
      ref: "VISIT-DEMO-010",
      category: "Inspection",
      date: "14 Oct 2026",
      status: "Signed by Engineer",
    },
    {
      title: "BIS Compliance & Handover Dossier",
      ref: "ASSET-DEMO-A",
      category: "Compliance",
      date: "10 Aug 2026",
      status: "Archived",
    },
  ];

  const visits = [
    { id: "VISIT-DEMO-010", date: "14 Oct 2026", scope: "Preventive monthly safety audit & lubrication", status: "Recorded" },
    { id: "VISIT-DEMO-009", date: "16 Sep 2026", scope: "Brake lining clearance & door curtain check", status: "Recorded" },
    { id: "VISIT-DEMO-011", date: "05 Nov 2026 (Upcoming)", scope: "Scheduled quarterly governor & ARD battery test", status: "Proposed" },
  ];

  return (
    <div className="min-h-screen bg-[#071d27] text-white flex flex-col justify-between selection:bg-[#863078] selection:text-white">
      {/* Top Header */}
      <header className="border-b border-[#143e4f] bg-[#0b2834]/90 backdrop-blur-md sticky top-0 z-40 px-4 sm:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
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
          <span className="hidden md:inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
            Customer Portal · {session?.account || "Demo account 01"}
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="hidden sm:block text-slate-300">
            Signed in as: <strong className="text-white">{session?.user || "trioralabs@gmail.com"}</strong>
          </div>
          <Link
            href="/portal/service-requests/new"
            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
          >
            + New Service Request
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="px-3 py-1.5 rounded-lg bg-[#143e4f]/50 hover:bg-[#143e4f] text-slate-300 hover:text-white text-xs transition-all border border-[#143e4f]"
          >
            Sign out
          </button>
        </div>
      </header>

      {/* Workspace Subheader Navigation */}
      <div className="border-b border-[#143e4f] bg-[#0b2834]/50 px-4 sm:px-8 overflow-x-auto">
        <div className="flex items-center gap-1 sm:gap-2 min-w-max py-2 text-xs">
          {[
            { id: "overview", label: "Overview" },
            { id: "lifts", label: "My Lifts (2)" },
            { id: "requests", label: "Service Requests (3)" },
            { id: "amc", label: "Maintenance / AMC" },
            { id: "quotes", label: "Quotations (2)" },
            { id: "documents", label: "Documents (4)" },
            { id: "account", label: "Account / Settings" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as TabType)}
              className={`px-3.5 py-2 rounded-xl font-bold uppercase tracking-wider text-[11px] transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-[#a22b51] to-[#863078] text-white shadow-xs"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-8">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Hero Greeting */}
            <div className="bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-1">
                  CUSTOMER PORTAL / DEMO ACCOUNT 01
                </div>
                <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Good to see you, Ramesh.
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Your building support, brought together. Track lift performance, ongoing AMC maintenance, and engineering proposals.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/portal/service-requests/new"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#a22b51] via-[#863078] to-[#423887] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:opacity-95 transition-all"
                >
                  + Report Routine Concern
                </Link>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20I%20am%20calling%20from%20Demo%20Account%2001.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  WhatsApp AMC Desk
                </a>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div
                onClick={() => setActiveTab("lifts")}
                className="bg-[#0b2834] border border-[#143e4f] hover:border-emerald-500/40 rounded-2xl p-6 transition-all cursor-pointer group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Registered Lift Records
                </div>
                <div className="text-4xl font-black text-white group-hover:text-emerald-400 transition-colors">
                  02
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  2 active elevator assets in Telangana
                </div>
              </div>

              <div
                onClick={() => setActiveTab("requests")}
                className="bg-[#0b2834] border border-[#143e4f] hover:border-emerald-500/40 rounded-2xl p-6 transition-all cursor-pointer group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Open Service Requests
                </div>
                <div className="text-4xl font-black text-amber-400 group-hover:text-amber-300 transition-colors">
                  02
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  1 under review · 1 visit scheduled
                </div>
              </div>

              <div
                onClick={() => setActiveTab("quotes")}
                className="bg-[#0b2834] border border-[#143e4f] hover:border-emerald-500/40 rounded-2xl p-6 transition-all cursor-pointer group"
              >
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Active Proposals & Quotations
                </div>
                <div className="text-4xl font-black text-[#863078] group-hover:text-purple-300 transition-colors">
                  01
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  Q-DEMO-018 awaiting review
                </div>
              </div>
            </div>

            {/* Next Steps Checklist */}
            <div className="bg-[#0b2834] border border-[#143e4f] rounded-2xl p-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">
                Your Operational Next Steps
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-[#071d27] border border-[#143e4f]/80 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-white mb-1">Review Passenger Lift Proposal</div>
                    <div className="text-slate-400 text-[11px]">Q-DEMO-018 · Confirm technical specs and civil shaft readiness.</div>
                  </div>
                  <button
                    onClick={() => setActiveTab("quotes")}
                    className="mt-3 text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] text-left"
                  >
                    View Proposal →
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#071d27] border border-[#143e4f]/80 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-white mb-1">Confirm Site Access Schedule</div>
                    <div className="text-slate-400 text-[11px]">SR-DEMO-021 · Lift B technician visit proposed for Friday.</div>
                  </div>
                  <button
                    onClick={() => setActiveTab("requests")}
                    className="mt-3 text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] text-left"
                  >
                    View Ticket →
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-[#071d27] border border-[#143e4f]/80 flex flex-col justify-between">
                  <div>
                    <div className="font-bold text-white mb-1">Download AMC Agreement</div>
                    <div className="text-slate-400 text-[11px]">AMC-DEMO-01 · Review preventive maintenance terms & coverage.</div>
                  </div>
                  <button
                    onClick={() => setActiveTab("documents")}
                    className="mt-3 text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] text-left"
                  >
                    Access Document →
                  </button>
                </div>
              </div>
            </div>

            {/* Split: My Lifts Preview & Recent Requests */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left: Registered Assets */}
              <div className="bg-[#0b2834] border border-[#143e4f] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                    My Registered Lifts
                  </h2>
                  <button
                    onClick={() => setActiveTab("lifts")}
                    className="text-xs text-emerald-400 hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="space-y-4">
                  {assets.map((asset) => (
                    <div
                      key={asset.id}
                      className="p-4 rounded-xl bg-[#071d27] border border-[#143e4f] flex items-start justify-between gap-4"
                    >
                      <div>
                        <div className="font-bold text-white text-sm">{asset.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{asset.site}</div>
                        <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
                          <span className="px-2 py-0.5 rounded-full bg-[#143e4f] text-slate-300">
                            {asset.capacity}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-[#143e4f] text-slate-300">
                            {asset.floors}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                            {asset.status}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedAsset(asset.name);
                          setActiveTab("lifts");
                        }}
                        className="px-3 py-1.5 rounded-lg bg-[#143e4f]/60 hover:bg-[#143e4f] text-xs text-slate-200 transition-all shrink-0"
                      >
                        Details
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Recent Service Requests */}
              <div className="bg-[#0b2834] border border-[#143e4f] rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-bold text-white uppercase tracking-wider">
                    Recent Service Tickets
                  </h2>
                  <button
                    onClick={() => setActiveTab("requests")}
                    className="text-xs text-emerald-400 hover:underline"
                  >
                    Manage Tickets →
                  </button>
                </div>

                <div className="space-y-3">
                  {serviceRequests.map((sr) => (
                    <div
                      key={sr.id}
                      className="p-3.5 rounded-xl bg-[#071d27] border border-[#143e4f] flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-300">{sr.id}</span>
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${sr.statusColor}`}>
                            {sr.status}
                          </span>
                        </div>
                        <div className="text-slate-300 font-medium mt-1">{sr.subject}</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {sr.asset} · Reported {sr.reported}
                        </div>
                      </div>
                      <button
                        onClick={() => setActiveTab("requests")}
                        className="text-emerald-400 hover:text-emerald-300 text-xs shrink-0"
                      >
                        View →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MY LIFTS */}
        {activeTab === "lifts" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-white tracking-tight">
                  My Lifts with Asset Detail
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Technical specifications, drive records, and maintenance logs for your installed vertical mobility assets.
                </p>
              </div>
              <Link
                href="/site-survey"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-xs font-bold uppercase tracking-wider transition-all self-start"
              >
                + Register New Elevator
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {assets.map((ast) => (
                <div
                  key={ast.id}
                  className="bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-8 space-y-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {ast.id}
                      </span>
                      <h2 className="text-xl font-bold text-white mt-1.5">{ast.name}</h2>
                      <p className="text-xs text-slate-400">{ast.site}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                      {ast.condition}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#143e4f] text-xs">
                    <div className="p-3 rounded-xl bg-[#071d27]">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Drive & Machine</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{ast.type}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#071d27]">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Floors / Stops</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{ast.floors}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#071d27]">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Rated Capacity</div>
                      <div className="text-slate-200 font-semibold mt-0.5">{ast.capacity}</div>
                    </div>
                    <div className="p-3 rounded-xl bg-[#071d27]">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Active Plan</div>
                      <div className="text-emerald-400 font-semibold mt-0.5">{ast.plan}</div>
                    </div>
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <span className="text-[11px] text-slate-400">Last visited: {ast.lastVisit}</span>
                    <Link
                      href="/portal/service-requests/new"
                      className="px-4 py-2 rounded-xl bg-[#143e4f] hover:bg-[#143e4f]/80 text-white text-xs font-bold transition-all"
                    >
                      Book Service Visit
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SERVICE REQUESTS */}
        {activeTab === "requests" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-2xl font-black text-white tracking-tight">
                  Service Requests & Tickets
                </h1>
                <p className="text-xs text-slate-400 mt-1">
                  Track reported concerns and technician assignment across your properties.
                </p>
              </div>
              <Link
                href="/portal/service-requests/new"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#a22b51] to-[#863078] text-white text-xs font-bold uppercase tracking-wider transition-all self-start"
              >
                + Create Routine Service Request
              </Link>
            </div>

            <div className="bg-[#0b2834] border border-[#143e4f] rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-[#143e4f] flex items-center justify-between gap-4">
                <input
                  type="text"
                  placeholder="Search by reference or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="px-4 py-2 bg-[#071d27] border border-[#143e4f] rounded-xl text-xs text-white placeholder-slate-500 w-full max-w-sm focus:outline-none"
                />
                <span className="text-xs text-slate-400 hidden sm:inline">
                  3 illustrative records
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#071d27] text-slate-400 font-bold uppercase text-[10px] tracking-wider border-b border-[#143e4f]">
                    <tr>
                      <th className="p-4">Ticket ID</th>
                      <th className="p-4">Asset & Location</th>
                      <th className="p-4">Category / Subject</th>
                      <th className="p-4">Status</th>
                      <th className="p-4">Reported</th>
                      <th className="p-4">Assigned Desk</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#143e4f]/60">
                    {serviceRequests.map((sr) => (
                      <tr key={sr.id} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-mono font-bold text-emerald-400">{sr.id}</td>
                        <td className="p-4 text-white font-medium">{sr.asset}</td>
                        <td className="p-4">
                          <div className="font-bold text-white">{sr.category}</div>
                          <div className="text-slate-400 text-[11px] mt-0.5">{sr.subject}</div>
                        </td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${sr.statusColor}`}>
                            {sr.status}
                          </span>
                        </td>
                        <td className="p-4 text-slate-300">{sr.reported}</td>
                        <td className="p-4 text-slate-400">{sr.engineer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MAINTENANCE / AMC */}
        {activeTab === "amc" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Maintenance / AMC Plan & Visit History
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Active service contract specifications and completed preventative inspection reports.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Plan Record */}
              <div className="lg:col-span-1 bg-[#0b2834] border border-[#143e4f] rounded-2xl p-6 space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  AMC-DEMO-01
                </span>
                <h2 className="text-lg font-bold text-white">Comprehensive Care Plan</h2>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full coverage for Demo site A / Lift A. Monthly multi-point inspections and priority breakdown coverage.
                </p>

                <div className="space-y-2 text-xs text-slate-300 pt-3 border-t border-[#143e4f]">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Coverage:</span>
                    <span className="font-semibold text-white">IS 14665 Compliant</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Response SLA:</span>
                    <span className="font-semibold text-emerald-400">Rapid 24/7 Dispatch</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Contract Period:</span>
                    <span className="font-semibold text-white">Oct 2026 – Oct 2027</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20enquiring%20about%20AMC-DEMO-01.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center transition-all"
                  >
                    Contact AMC Manager
                  </a>
                </div>
              </div>

              {/* Visit History */}
              <div className="lg:col-span-2 bg-[#0b2834] border border-[#143e4f] rounded-2xl p-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                  Engineer Visit History & Observations
                </h2>
                <div className="space-y-3">
                  {visits.map((v) => (
                    <div
                      key={v.id}
                      className="p-4 rounded-xl bg-[#071d27] border border-[#143e4f] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-emerald-400">{v.id}</span>
                          <span className="text-slate-400">· {v.date}</span>
                        </div>
                        <div className="text-slate-200 mt-1 font-medium">{v.scope}</div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#143e4f] text-slate-300 self-start sm:self-center">
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: QUOTATIONS */}
        {activeTab === "quotes" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Engineering Proposals & Quotations
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Itemized elevator system configuration quotes and modernisation proposals.
              </p>
            </div>

            <div className="space-y-6">
              {quotations.map((q) => (
                <div
                  key={q.id}
                  className="bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-8 space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-mono font-bold text-xs">{q.id}</span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                          {q.status}
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-white mt-1">{q.requirement}</h2>
                      <p className="text-xs text-slate-400">{q.site} · Dated {q.date}</p>
                    </div>

                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi%20Vision%20Lifts%2C%20regarding%20quotation%20${q.id}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#a22b51] to-[#863078] text-white font-bold text-xs uppercase tracking-wider self-start sm:self-auto"
                    >
                      Discuss on WhatsApp
                    </a>
                  </div>

                  <div className="overflow-x-auto border border-[#143e4f] rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-[#071d27] text-slate-400 text-[10px] uppercase font-bold tracking-wider">
                        <tr>
                          <th className="p-3">Scope Item</th>
                          <th className="p-3">Quantity</th>
                          <th className="p-3">Technical Specification</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#143e4f]/60 text-slate-300">
                        {q.items.map((it, i) => (
                          <tr key={i} className="hover:bg-white/5">
                            <td className="p-3 font-semibold text-white">{it.item}</td>
                            <td className="p-3">{it.qty}</td>
                            <td className="p-3 text-slate-400">{it.spec}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#071d27] border border-[#143e4f] text-xs text-slate-400">
                    💡 <strong>Notice:</strong> {q.note} All technical drawings subject to on-site physical shaft inspection.
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: DOCUMENTS */}
        {activeTab === "documents" && (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Authorized Documents & Handover Files
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Inspection certificates, drawings, and maintenance agreements related to your account.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc, i) => (
                <div
                  key={i}
                  className="bg-[#0b2834] border border-[#143e4f] rounded-2xl p-5 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-[#071d27] px-2 py-0.5 rounded border border-[#143e4f]">
                        {doc.category}
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px] font-bold">{doc.ref}</span>
                    </div>
                    <h3 className="font-bold text-white text-sm">{doc.title}</h3>
                    <p className="text-xs text-slate-400">{doc.date} · {doc.status}</p>
                  </div>

                  <button
                    onClick={() => alert(`Document Preview: ${doc.title} (${doc.ref})\nApproved for account review.`)}
                    className="px-3 py-1.5 rounded-lg bg-[#143e4f] hover:bg-[#143e4f]/80 text-xs text-slate-200 transition-all shrink-0"
                  >
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 7: ACCOUNT / SETTINGS */}
        {activeTab === "account" && (
          <div className="max-w-2xl bg-[#0b2834] border border-[#143e4f] rounded-3xl p-6 sm:p-10 space-y-6">
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                Account & Preferences
              </h1>
              <p className="text-xs text-slate-400 mt-1">
                Manage profile information and communication dispatch channels.
              </p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                  Registered Account Identity
                </label>
                <input
                  type="text"
                  disabled
                  value={session?.user || "trioralabs@gmail.com"}
                  className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-slate-300 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                  Account Name
                </label>
                <input
                  type="text"
                  defaultValue="Demo account 01 (Ramesh Reddy)"
                  className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-slate-400 mb-1">
                  Primary Mobile Number
                </label>
                <input
                  type="tel"
                  defaultValue="+91 98484 80868"
                  className="w-full px-4 py-2.5 bg-[#071d27] border border-[#143e4f] rounded-xl text-white focus:outline-none"
                />
              </div>

              <div className="p-4 rounded-xl bg-[#071d27] border border-[#143e4f] space-y-2">
                <div className="font-bold text-white text-[11px] uppercase">
                  Service Notifications
                </div>
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input type="checkbox" defaultChecked className="rounded text-[#863078]" />
                  <span>Receive WhatsApp breakdown alerts & maintenance visit confirmations</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer text-slate-300">
                  <input type="checkbox" defaultChecked className="rounded text-[#863078]" />
                  <span>Email copies of monthly inspection audit reports</span>
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => alert("Preferences updated successfully.")}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#a22b51] to-[#863078] text-white font-bold text-xs uppercase tracking-wider shadow-xs"
                >
                  Save Profile Changes
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#143e4f] bg-[#071d27] py-4 px-4 sm:px-8 text-center text-xs text-slate-500">
        Vision Lifts & Solutions · Dedicated Client Support · Gandhi Road, Karimnagar, Telangana ·{" "}
        <Link href="/privacy-policy" className="hover:text-slate-300">Privacy Policy</Link> ·{" "}
        <Link href="/terms" className="hover:text-slate-300">Terms & Conditions</Link>
      </footer>
    </div>
  );
}
