import React, { useState } from "react";
import { Link } from "react-router-dom";
import OmnivioLayout, { useI18n } from "./OmnivioLayout";
import { ArrowRight, CheckCircle2, TrendingUp, Package, DollarSign, Users, Building2, Truck } from "lucide-react";

const INDUSTRIES = [
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: "🛍️",
    tagline: "From storefront to warehouse — unified.",
    hero: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    pain_points: ["Siloed inventory and Shopify orders", "Manual OTB planning in spreadsheets", "No supplier scorecards", "Returns are a black hole"],
    solutions: ["Shopify real-time integration (15-min sync)", "AI-powered OTB with finance approval", "Automated vendor scorecard with improvement plans", "Full RMA workflow from submission to restock"],
    kpis: [{ metric: "68%", label: "Reduction in stockouts" }, { metric: "3x", label: "Faster order processing" }, { metric: "45%", label: "Cost savings vs tools" }],
    modules: ["Shopify Integration", "OTB Planning", "Inventory & WMS", "Vendor Scorecard", "RMA Management", "Retail Planogram", "Finance & Budgeting"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Distribution",
    icon: "🏭",
    tagline: "Quality in. Quality out. Full control.",
    hero: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80",
    pain_points: ["Reactive maintenance = costly downtime", "Spreadsheet-based BOM and PO tracking", "No real-time container visibility", "Manual EDI with trading partners"],
    solutions: ["Predictive fleet & equipment maintenance with AI", "Full procurement lifecycle with 3-way matching", "Container tracking from booking to customs", "Native EDI (X12/EDIFACT) B2B module"],
    kpis: [{ metric: "52%", label: "Reduction in ERP costs" }, { metric: "84%", label: "On-time delivery improvement" }, { metric: "$240K", label: "Avg annual savings" }],
    modules: ["Procurement", "Container Management", "Predictive Maintenance", "EDI / B2B", "Quality Assurance", "Supply Chain & WMS", "Finance"],
  },
  {
    id: "logistics",
    name: "Logistics & 3PL",
    icon: "🚚",
    tagline: "Move more. Spend less. Deliver on time.",
    hero: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    pain_points: ["Underloaded vehicles waste fuel", "No real-time fleet visibility", "Manual route planning by dispatchers", "Fragmented freight rate management"],
    solutions: ["AI load consolidation with multi-stop manifest generation", "GPS fleet map with live ETAs", "TSP route optimizer minimizing fuel costs", "Freight rate comparison and carrier management"],
    kpis: [{ metric: "23%", label: "Fuel cost reduction" }, { metric: "91%", label: "Average capacity utilization" }, { metric: "41%", label: "Cost savings vs legacy TMS" }],
    modules: ["Fleet Management", "AI Route Optimization", "Load Consolidation", "Logistics Map", "Freight Rate Management", "Shipment Tracking"],
  },
  {
    id: "professional-services",
    name: "Professional Services",
    icon: "💼",
    tagline: "Deliver projects. Grow accounts. Scale people.",
    hero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    pain_points: ["Project overruns from poor resource planning", "Time tracking in disconnected spreadsheets", "Clients can't see project status", "Expense approvals take weeks"],
    solutions: ["Resource scheduling with skill-based matching", "Integrated time tracking and payroll prep", "Stakeholder portal with milestone budget approvals", "Automated expense workflow with 2-stage approval"],
    kpis: [{ metric: "38%", label: "Cost savings vs point tools" }, { metric: "2.4x", label: "Project delivery improvement" }, { metric: "94%", label: "Client satisfaction rating" }],
    modules: ["PMO & Projects", "Gantt & Sprints", "Resource Scheduling", "Time Tracking", "Expense Management", "Stakeholder Portal", "CRM"],
  },
];

const REGIONS = [
  { flag: "🇨🇦", country: "Canada", note: "PIPEDA · CA-Central data residency · Bilingual EN/FR" },
  { flag: "🇺🇸", country: "United States", note: "SOC 2 · US-East/West data residency · CCPA ready" },
  { flag: "🇫🇷", country: "France", note: "RGPD · EU-West data residency · PCN / IFRS accounting" },
  { flag: "🇩🇪", country: "Germany", note: "DSGVO · EU-West data residency · German CoA (DATEV)" },
  { flag: "🇪🇸", country: "Spain", note: "RGPD · EU-West data residency · Spanish localization" },
  { flag: "🇮🇹", country: "Italy", note: "GDPR · EU-West data residency · Italian CoA (PCIT)" },
  { flag: "🇲🇦", country: "Morocco", note: "CNDP compliant · Africa-North data residency · Arabic/FR" },
  { flag: "🇹🇷", country: "Turkey", note: "KVKK compliant · TR data residency · Turkish CoA" },
];

export default function OmnivioIndustries() {
  const { lang, setLang, t } = useI18n();
  const [active, setActive] = useState("retail");
  const industry = INDUSTRIES.find(i => i.id === active) || INDUSTRIES[0];

  return (
    <OmnivioLayout lang={lang} setLang={setLang} t={t}>
      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-neutral-900 mb-4">Built for your industry</h1>
          <p className="text-xl text-neutral-500">Omnivio is configured for the operational realities of your vertical — out of the box, not after months of customization.</p>
        </div>
      </section>

      {/* Industry tabs */}
      <section className="sticky top-16 z-10 bg-white border-b border-neutral-100 py-3">
        <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
          {INDUSTRIES.map(ind => (
            <button key={ind.id} onClick={() => setActive(ind.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${active === ind.id ? "bg-blue-600 text-white shadow" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}>
              <span>{ind.icon}</span>{ind.name}
            </button>
          ))}
        </div>
      </section>

      {/* Industry detail */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{industry.icon} {industry.name}</span>
              <h2 className="text-4xl font-black text-neutral-900 mt-2 mb-4">{industry.tagline}</h2>
              {/* Pain points → Solutions */}
              <div className="space-y-4">
                {industry.pain_points.map((pain, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-6">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5">
                        <span className="text-red-600 text-[10px] font-bold">✗</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-neutral-400 line-through">{pain}</p>
                      <div className="flex items-start gap-2 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm font-medium text-neutral-700">{industry.solutions[i]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={industry.hero} alt={industry.name} className="w-full h-72 object-cover" />
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            {industry.kpis.map(kpi => (
              <div key={kpi.label} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                <p className="text-4xl font-black text-blue-700">{kpi.metric}</p>
                <p className="text-sm text-neutral-600 mt-1">{kpi.label}</p>
              </div>
            ))}
          </div>

          {/* Recommended modules */}
          <div className="bg-neutral-50 rounded-2xl p-6">
            <h3 className="font-black text-neutral-900 mb-4">Recommended modules for {industry.name}</h3>
            <div className="flex flex-wrap gap-2">
              {industry.modules.map(m => (
                <span key={m} className="px-4 py-2 bg-white border border-neutral-200 text-sm font-medium text-neutral-700 rounded-xl shadow-sm">{m}</span>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Link to="/pricing" className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl text-sm hover:bg-blue-700 transition-colors flex items-center gap-2">
                See Pricing <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="px-5 py-2.5 border border-neutral-200 text-neutral-700 font-semibold rounded-xl text-sm hover:bg-neutral-50 transition-colors">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* GEO / Regional availability */}
      <section className="py-16 bg-neutral-50 border-t border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-neutral-900 mb-3">Available in 8 countries</h2>
            <p className="text-neutral-500">Localized compliance, data residency, accounting standards, and language support for every market we serve.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REGIONS.map(r => (
              <div key={r.country} className="bg-white rounded-xl p-4 border border-neutral-100 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{r.flag}</span>
                  <p className="font-bold text-neutral-900">{r.country}</p>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">{r.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-black mb-4">See Omnivio in action for {industry.name}</h2>
          <p className="text-blue-100 mb-8">Our solutions engineers will walk you through a customized demo tailored to your industry's specific workflows.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors">
            Schedule a Demo <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </OmnivioLayout>
  );
}