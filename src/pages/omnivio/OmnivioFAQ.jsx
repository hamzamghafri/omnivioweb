import React, { useState } from "react";
import { Link } from "react-router-dom";
import OmnivioLayout, { useI18n } from "./OmnivioLayout";
import { ChevronDown, ChevronUp, Search, ArrowRight } from "lucide-react";

const FAQ_CATEGORIES = [
  {
    category: "Product & Platform",
    icon: "🖥️",
    faqs: [
      { q: "What is Omnivio?", a: "Omnivio is an all-in-one enterprise operating platform that unifies procurement, supply chain, finance, CRM, PMO, HR, and AI analytics into a single cloud application. It replaces 6–10 disconnected tools typically used by mid-market companies." },
      { q: "How many modules does Omnivio include?", a: "Omnivio includes 40+ fully integrated modules covering the complete business lifecycle — from supplier onboarding to customer delivery, financial reporting, and AI-driven analytics." },
      { q: "Is Omnivio a SaaS product?", a: "Yes. Omnivio is a cloud-native multi-tenant SaaS platform hosted on enterprise-grade infrastructure with 99.9% uptime SLA. Enterprise clients can opt for a dedicated single-tenant deployment." },
      { q: "Does Omnivio work on mobile?", a: "Yes. The platform is fully responsive and works on any modern browser. The Mobile WMS module (barcode scanning, pick/pack, receiving) is specifically optimized for tablet and handheld devices used in warehouses." },
      { q: "Can I customize the platform to fit my workflows?", a: "Yes. Omnivio includes a Workflow Builder, custom dashboards, report builder, role permissions, and entity-level customization. Enterprise clients also receive API access for deep integration with legacy systems." },
    ],
  },
  {
    category: "Pricing & Plans",
    icon: "💰",
    faqs: [
      { q: "How does module-based pricing work?", a: "You pay for the plan tier that covers the modules you need. Starter (12 modules), Professional (30 modules), Enterprise (all 40+). You can add individual module packs as add-ons without upgrading your full plan." },
      { q: "Can I start with Starter and upgrade later?", a: "Absolutely. All your data and configurations are preserved when you upgrade. Upgrades take effect immediately with no downtime." },
      { q: "Do you offer annual discounts?", a: "Yes. Annual billing saves 19% compared to monthly. Enterprise contracts with 2+ year terms receive additional negotiated discounts." },
      { q: "What happens if I exceed my user limit?", a: "You can add users in packs of 10 ($89/month per pack on Professional). We never block access — you'll receive a notification and have 30 days to upgrade." },
      { q: "Is there a free trial?", a: "Yes — a 14-day free trial with full access to all Professional features. No credit card required. After the trial, you choose your plan or export your data." },
      { q: "Do you offer non-profit or education pricing?", a: "Yes. Non-profits and accredited educational institutions receive 40% off any plan. Contact us with proof of status." },
    ],
  },
  {
    category: "Security & Compliance",
    icon: "🔒",
    faqs: [
      { q: "Is Omnivio SOC 2 certified?", a: "Yes. Omnivio is SOC 2 Type II certified. Our security controls cover availability, confidentiality, processing integrity, and security. Reports available under NDA for Enterprise clients." },
      { q: "Is Omnivio GDPR compliant?", a: "Yes. Omnivio is GDPR-compliant for EU/UK customers. We offer a Data Processing Agreement (DPA), right-to-erasure workflows, data residency options (EU-West region), and a dedicated DPO." },
      { q: "Is Omnivio PIPEDA compliant for Canadian businesses?", a: "Yes. For Canadian clients, Omnivio complies with PIPEDA. Canadian data is stored in our CA-Central region (AWS Montreal). We are also working toward Quebec Law 25 compliance." },
      { q: "How is data encrypted?", a: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Database-level encryption with customer-managed keys (BYOK) is available on Enterprise plans." },
      { q: "Can we run Omnivio on our own cloud infrastructure?", a: "Enterprise clients can opt for a dedicated single-tenant deployment on AWS, Azure, or GCP in any supported region. Contact our sales team for infrastructure requirements." },
    ],
  },
  {
    category: "Implementation & Support",
    icon: "🚀",
    faqs: [
      { q: "How long does implementation take?", a: "Starter: self-serve in hours. Professional: guided onboarding in 2–4 weeks with our implementation team. Enterprise: 6–12 week structured rollout with a dedicated project manager." },
      { q: "Do you offer data migration from other ERP systems?", a: "Yes. We provide migration tooling and consulting for migrations from SAP, Oracle, Dynamics, QuickBooks, and common CSV exports. Migration complexity and cost vary by data volume and source system." },
      { q: "What support options are available?", a: "Starter: email support (48h SLA). Professional: priority email + live chat (4h SLA). Enterprise: 24/7 phone + dedicated Customer Success Manager + annual business reviews." },
      { q: "Is training included?", a: "Yes. All plans include access to the Omnivio Academy (video courses, documentation, certification). Professional and Enterprise include live onboarding sessions. Enterprise includes custom training workshops." },
      { q: "Do you have a partner / reseller program?", a: "Yes. Omnivio has a certified partner program for implementation partners, VARs, and technology consultants. Partners earn 20–30% recurring commission. Apply at omnivio.com/partners." },
    ],
  },
  {
    category: "Integrations",
    icon: "🔗",
    faqs: [
      { q: "What native integrations does Omnivio support?", a: "Omnivio natively integrates with Shopify, Salesforce, SAP, NetSuite, Stripe, FedEx, DocuSign, Slack, GitHub, Google Workspace, Microsoft 365, and 40+ other services via our Integration Hub." },
      { q: "Does Omnivio support EDI (Electronic Data Interchange)?", a: "Yes. The EDI/B2B module supports X12, EDIFACT, and custom formats for supplier and retailer transactions including 850 (PO), 856 (ASN), 810 (Invoice), and 855 (PO Acknowledgment)." },
      { q: "Is there a public API?", a: "Yes. Omnivio provides a RESTful API and webhook system for all entities. API documentation is available at docs.omnivio.com. Rate limits: 1M calls/month (Starter), 10M (Professional), Unlimited (Enterprise)." },
      { q: "Can Omnivio connect to our data warehouse (Snowflake, BigQuery)?", a: "Yes. The ETL Pipeline Builder supports direct connectors to Snowflake, BigQuery, Redshift, and Databricks for analytics workloads. Real-time CDC (Change Data Capture) is available on Enterprise." },
    ],
  },
  {
    category: "AI & Analytics",
    icon: "🤖",
    faqs: [
      { q: "What AI capabilities are included?", a: "Omnivio AI includes demand forecasting (ML-based, 94% accuracy), document OCR with auto-mapping, route optimization (TSP-based), predictive maintenance for fleet/equipment, and vendor performance AI with improvement plans." },
      { q: "Does AI require additional training data from our company?", a: "No initial training required. Our models work out-of-the-box. They improve over time using your own historical data — typically showing accuracy improvements within 60 days of live usage." },
      { q: "Is the AI explainable / auditable?", a: "Yes. All AI decisions include a confidence score and contributing factors. Finance teams can see exactly why a budget recommendation was made. Full AI audit logs are available on Professional and Enterprise plans." },
    ],
  },
];

export default function OmnivioFAQ() {
  const { lang, setLang, t } = useI18n();
  const [openItem, setOpenItem] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const allFaqs = FAQ_CATEGORIES.flatMap(cat => cat.faqs.map(faq => ({ ...faq, category: cat.category })));
  const filtered = search
    ? allFaqs.filter(f => f.q.toLowerCase().includes(search.toLowerCase()) || f.a.toLowerCase().includes(search.toLowerCase()))
    : null;

  const displayCategories = activeCategory
    ? FAQ_CATEGORIES.filter(c => c.category === activeCategory)
    : FAQ_CATEGORIES;

  return (
    <OmnivioLayout lang={lang} setLang={setLang} t={t}>
      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-20 border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-neutral-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-neutral-500 mb-8">Everything you need to know about Omnivio.</p>
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search questions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Category filter */}
      {!search && (
        <section className="sticky top-16 z-10 bg-white border-b border-neutral-100 py-3">
          <div className="max-w-5xl mx-auto px-4 flex gap-2 overflow-x-auto pb-1">
            <button onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${!activeCategory ? "bg-blue-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}>
              All Topics
            </button>
            {FAQ_CATEGORIES.map(cat => (
              <button key={cat.category} onClick={() => setActiveCategory(activeCategory === cat.category ? null : cat.category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${activeCategory === cat.category ? "bg-blue-600 text-white" : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"}`}>
                <span>{cat.icon}</span>{cat.category}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {search ? (
            filtered.length === 0 ? (
              <div className="text-center py-16 text-neutral-400">
                <p className="text-lg font-semibold">No results for "{search}"</p>
                <p className="text-sm mt-2">Try different keywords or <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link>.</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-sm text-neutral-500 font-medium">{filtered.length} result{filtered.length !== 1 ? "s" : ""} for "{search}"</p>
                {filtered.map((faq, i) => (
                  <FAQItem key={i} faq={faq} isOpen={openItem === `search-${i}`} onToggle={() => setOpenItem(openItem === `search-${i}` ? null : `search-${i}`)} showCategory />
                ))}
              </div>
            )
          ) : (
            displayCategories.map(cat => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 className="text-xl font-black text-neutral-900">{cat.category}</h2>
                  <span className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full font-medium">{cat.faqs.length}</span>
                </div>
                <div className="space-y-2">
                  {cat.faqs.map((faq, i) => {
                    const key = `${cat.category}-${i}`;
                    return <FAQItem key={key} faq={faq} isOpen={openItem === key} onToggle={() => setOpenItem(openItem === key ? null : key)} />;
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-16 bg-blue-50 border-t border-blue-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-neutral-900 mb-3">Still have questions?</h2>
          <p className="text-neutral-500 mb-6">Our team typically responds within 2 hours during business hours.</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </OmnivioLayout>
  );
}

function FAQItem({ faq, isOpen, onToggle, showCategory }) {
  return (
    <div className={`bg-white rounded-xl border transition-all ${isOpen ? "border-blue-200 shadow-sm" : "border-neutral-100"}`}>
      <button onClick={onToggle} className="w-full text-left flex items-start justify-between gap-4 p-5">
        <div className="flex-1">
          {showCategory && <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-1 block">{faq.category}</span>}
          <p className="font-semibold text-neutral-900">{faq.q}</p>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" /> : <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />}
      </button>
      {isOpen && (
        <div className="px-5 pb-5">
          <p className="text-neutral-600 leading-relaxed text-sm">{faq.a}</p>
        </div>
      )}
    </div>
  );
}