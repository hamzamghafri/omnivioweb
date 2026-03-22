import React, { useState } from "react";
import { Link } from "react-router-dom";
import OmnivioLayout, { useI18n } from "./OmnivioLayout";
import { CheckCircle2, X, ArrowRight, HelpCircle, Building2, Users, Globe } from "lucide-react";

const MODULES_ALL = [
  "Procurement & PO Management", "Supplier Management", "Supply Chain & WMS", "Inventory & Lots",
  "Container Management", "Finance & Budgeting", "Invoice Reconciliation", "Chart of Accounts",
  "FX & Currency Engine", "PMO & Projects", "Gantt & Sprints", "Resource Scheduling",
  "Time Tracking", "Expense Management", "Stakeholder Portal", "CRM & Sales Pipeline",
  "Customer 360", "Quotations", "Sales Execution", "ITSM & Helpdesk",
  "Knowledge Base", "HR & Employee Mgmt", "Talent & Learning", "AI Demand Forecasting",
  "AI Route Optimization", "AI Document OCR", "AI Predictive Maintenance", "Vendor Scorecard",
  "Warehouse Floor Plan", "Fleet Management", "EDI / B2B Integration", "Shopify Integration",
  "Bulk Order Upload", "RMA Management", "OTB Planning", "Retail Planogram",
  "Intranet / Extranet", "Report Builder", "Dashboard Builder", "Barcode / WMS Mobile",
];

const PLANS = [
  {
    name: "Starter",
    tagline: "Perfect for growing teams",
    price_monthly: 299,
    price_annual: 249,
    users: "Up to 10 users",
    company_size: "1–50 employees",
    support: "Email support",
    color: "border-neutral-200",
    cta_color: "bg-neutral-900 hover:bg-neutral-800 text-white",
    highlight: false,
    modules: [
      "Procurement & PO Management", "Supplier Management", "Supply Chain & WMS",
      "Inventory & Lots", "Finance & Budgeting", "Invoice Reconciliation",
      "CRM & Sales Pipeline", "Quotations", "ITSM & Helpdesk",
      "HR & Employee Mgmt", "Report Builder", "Dashboard Builder",
    ],
    limits: { api: "1M calls/mo", storage: "10 GB", integrations: "5" },
  },
  {
    name: "Professional",
    tagline: "For mid-market companies",
    price_monthly: 799,
    price_annual: 649,
    users: "Up to 50 users",
    company_size: "50–500 employees",
    support: "Priority email + chat",
    color: "border-blue-500 shadow-xl shadow-blue-100",
    cta_color: "bg-blue-600 hover:bg-blue-700 text-white",
    highlight: true,
    badge: "Most Popular",
    modules: [
      "Procurement & PO Management", "Supplier Management", "Supply Chain & WMS",
      "Inventory & Lots", "Container Management", "Finance & Budgeting",
      "Invoice Reconciliation", "Chart of Accounts", "FX & Currency Engine",
      "PMO & Projects", "Gantt & Sprints", "Resource Scheduling",
      "Time Tracking", "Expense Management", "CRM & Sales Pipeline",
      "Customer 360", "Quotations", "Sales Execution", "ITSM & Helpdesk",
      "Knowledge Base", "HR & Employee Mgmt", "AI Demand Forecasting",
      "Warehouse Floor Plan", "Shopify Integration", "Bulk Order Upload",
      "RMA Management", "OTB Planning", "Report Builder", "Dashboard Builder",
      "Barcode / WMS Mobile",
    ],
    limits: { api: "10M calls/mo", storage: "100 GB", integrations: "20" },
  },
  {
    name: "Enterprise",
    tagline: "For large organizations",
    price_monthly: null,
    price_annual: null,
    users: "Unlimited users",
    company_size: "500+ employees",
    support: "24/7 dedicated CSM",
    color: "border-neutral-800",
    cta_color: "bg-neutral-900 hover:bg-neutral-800 text-white",
    highlight: false,
    modules: MODULES_ALL,
    limits: { api: "Unlimited", storage: "Unlimited", integrations: "Unlimited" },
  },
];

const ADD_ONS = [
  { name: "AI Package", price: 199, desc: "AI Forecasting, OCR, Route Optimization, Predictive Maintenance" },
  { name: "Retail Module Pack", price: 149, desc: "Planogram, OTB Planning, Retail Analytics, Promotions" },
  { name: "Advanced Compliance", price: 99, desc: "Full audit trail, GRC dashboard, SOC 2 reporting" },
  { name: "Extra Users (10-pack)", price: 89, desc: "Add 10 additional users to any plan" },
  { name: "White Label", price: 399, desc: "Custom domain, logo, colors, login page" },
  { name: "Dedicated Instance", price: 999, desc: "Single-tenant cloud deployment in your preferred region" },
];

const COMPANY_SIZES = [
  { label: "1–50 employees", plan: "Starter", note: "Perfect starting point" },
  { label: "51–200 employees", plan: "Professional", note: "Most common choice" },
  { label: "201–500 employees", plan: "Professional + Add-ons", note: "Full operational suite" },
  { label: "500+ employees", plan: "Enterprise", note: "Custom pricing & SLAs" },
];

const INDUSTRY_PRICING = [
  { industry: "Retail & E-commerce", rec: "Professional + Retail Pack", savings: "Up to 45% vs best-of-breed" },
  { industry: "Manufacturing & Distribution", rec: "Professional + AI Package", savings: "Up to 52% vs ERP vendors" },
  { industry: "Professional Services", rec: "Starter or Professional", savings: "Up to 38% vs point solutions" },
  { industry: "Logistics & 3PL", rec: "Professional + AI Package", savings: "Up to 41% vs legacy TMS" },
];

export default function OmnivioPricing() {
  const { lang, setLang, t } = useI18n();
  const [annual, setAnnual] = useState(true);
  const [expandModule, setExpandModule] = useState(null);

  return (
    <OmnivioLayout lang={lang} setLang={setLang} t={t}>
      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Transparent Pricing</span>
          <h1 className="text-5xl font-black text-neutral-900 mt-2 mb-4">Pay for what you use</h1>
          <p className="text-xl text-neutral-500 mb-8">Module-based pricing. Scale up or down. No hidden fees. Cancel anytime.</p>
          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-neutral-100 p-1 rounded-xl">
            <button onClick={() => setAnnual(false)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-white shadow text-neutral-900" : "text-neutral-500"}`}>Monthly</button>
            <button onClick={() => setAnnual(true)} className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${annual ? "bg-white shadow text-neutral-900" : "text-neutral-500"}`}>
              Annual
              <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded font-bold">SAVE 19%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {PLANS.map(plan => (
              <div key={plan.name} className={`relative rounded-2xl border-2 p-8 ${plan.color} ${plan.highlight ? "scale-105" : ""}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow">{plan.badge}</div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-black text-neutral-900">{plan.name}</h3>
                  <p className="text-sm text-neutral-500 mt-0.5">{plan.tagline}</p>
                </div>
                <div className="mb-6">
                  {plan.price_monthly ? (
                    <div>
                      <span className="text-5xl font-black text-neutral-900">${annual ? plan.price_annual : plan.price_monthly}</span>
                      <span className="text-neutral-500 text-sm">/month</span>
                      {annual && <p className="text-xs text-emerald-600 font-semibold mt-1">Billed annually · Save ${(plan.price_monthly - plan.price_annual) * 12}/yr</p>}
                    </div>
                  ) : (
                    <div>
                      <span className="text-4xl font-black text-neutral-900">Custom</span>
                      <p className="text-sm text-neutral-500 mt-1">Contact us for volume pricing</p>
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-sm mb-6">
                  {[
                    [Users, plan.users], [Building2, plan.company_size], [Globe, plan.support],
                    [null, `${plan.limits.api} API calls`], [null, `${plan.limits.storage} storage`], [null, `${plan.limits.integrations} integrations`],
                  ].map(([Icon, text], i) => (
                    <div key={i} className="flex items-center gap-2 text-neutral-600">
                      {Icon ? <Icon className="w-4 h-4 text-neutral-400 flex-shrink-0" /> : <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                      {text}
                    </div>
                  ))}
                </div>

                <Link to="/contact" className={`block text-center py-3 px-6 rounded-xl font-bold transition-colors mb-6 ${plan.cta_color}`}>
                  {plan.price_monthly ? t.cta : "Talk to Sales"} <ArrowRight className="inline w-4 h-4 ml-1" />
                </Link>

                {/* Modules list */}
                <div>
                  <button onClick={() => setExpandModule(expandModule === plan.name ? null : plan.name)}
                    className="text-xs text-neutral-500 hover:text-neutral-700 font-semibold flex items-center gap-1 mb-3">
                    <HelpCircle className="w-3.5 h-3.5" />
                    {plan.modules.length} modules included {expandModule === plan.name ? "▲" : "▼"}
                  </button>
                  {expandModule === plan.name && (
                    <div className="space-y-1.5 max-h-60 overflow-y-auto pr-1">
                      {plan.modules.map(m => (
                        <div key={m} className="flex items-center gap-2 text-xs text-neutral-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />{m}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-2 text-center">Add-ons & Extensions</h2>
          <p className="text-neutral-500 text-center mb-10">Enhance any plan with targeted capabilities</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ADD_ONS.map(a => (
              <div key={a.name} className="bg-white rounded-xl p-5 border border-neutral-100 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-bold text-neutral-900">{a.name}</p>
                  <span className="text-lg font-black text-blue-600">+${a.price}<span className="text-xs text-neutral-400">/mo</span></span>
                </div>
                <p className="text-sm text-neutral-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By company size */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-2 text-center">Pricing by company size</h2>
          <p className="text-neutral-500 text-center mb-10">We grow with you — from startup to enterprise</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMPANY_SIZES.map(cs => (
              <div key={cs.label} className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 text-center">
                <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <p className="font-bold text-neutral-900 text-sm mb-1">{cs.label}</p>
                <p className="text-blue-600 font-semibold text-sm">{cs.plan}</p>
                <p className="text-xs text-neutral-500 mt-1">{cs.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By industry */}
      <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-2 text-center">Industry recommendations</h2>
          <p className="text-neutral-500 text-center mb-10">Tailored bundles for your vertical</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {INDUSTRY_PRICING.map(ip => (
              <div key={ip.industry} className="bg-white rounded-xl p-5 border border-neutral-100 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-neutral-900">{ip.industry}</p>
                  <p className="text-sm text-blue-600 font-semibold">{ip.rec}</p>
                  <p className="text-xs text-emerald-600 font-semibold mt-1">{ip.savings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-16 bg-white border-t border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-neutral-900 mb-4">Have questions about pricing?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/faq" className="px-6 py-3 border border-neutral-200 rounded-xl font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors">Browse FAQ</Link>
            <Link to="/contact" className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">Talk to Sales</Link>
          </div>
        </div>
      </section>
    </OmnivioLayout>
  );
}