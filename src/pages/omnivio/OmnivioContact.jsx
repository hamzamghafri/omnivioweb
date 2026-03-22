import React, { useState } from "react";
import { Link } from "react-router-dom";
import OmnivioLayout, { useI18n } from "./OmnivioLayout";
import {
  CheckCircle2, Mail, Phone, MapPin, Clock, Send, RefreshCw,
  Building2, Users, Globe, MessageSquare, Calendar, ArrowRight
} from "lucide-react";

const COMPANY_SIZES = ["1–10", "11–50", "51–200", "201–500", "500–1000", "1000+"];
const INDUSTRIES = ["Retail & E-commerce", "Manufacturing", "Distribution & Logistics", "Professional Services", "Technology", "Healthcare", "Financial Services", "Construction", "Food & Beverage", "Other"];
const MODULES_INTEREST = ["Procurement", "Supply Chain & WMS", "Finance & Accounting", "CRM & Sales", "PMO & Projects", "AI & Analytics", "ITSM", "HR & Talent", "Retail Planogram", "Not sure — show me everything"];
const LOCATIONS = ["Canada", "United States", "France", "Germany", "Spain", "Italy", "Morocco", "Turkey", "United Kingdom", "Other"];
const INQUIRY_TYPES = [
  { value: "demo", label: "🎯 Request a Demo", desc: "Live walkthrough with a product expert" },
  { value: "pricing", label: "💰 Pricing Inquiry", desc: "Get a custom quote for your team size" },
  { value: "trial", label: "🚀 Start Free Trial", desc: "Get instant access to all features" },
  { value: "partner", label: "🤝 Become a Partner", desc: "Reseller or implementation partner" },
  { value: "support", label: "🛠️ Technical Support", desc: "Current customer with a support need" },
  { value: "other", label: "💬 Other", desc: "Something else entirely" },
];

const OFFICES = [
  { city: "Montréal", country: "Canada 🇨🇦", address: "1000 De La Gauchetière O, Suite 2400, QC H3B 4W5", phone: "+1 (514) 555-0100", hours: "Mon–Fri 9am–6pm ET", primary: true },
  { city: "Paris", country: "France 🇫🇷", address: "25 Rue de la Paix, 75002 Paris", phone: "+33 1 55 55 01 00", hours: "Mon–Fri 9am–6pm CET" },
  { city: "Casablanca", country: "Morocco 🇲🇦", address: "Tour Zénith, Boulevard Sidi Mohamed, 20030", phone: "+212 522 555 010", hours: "Mon–Fri 9am–6pm WET" },
];

export default function OmnivioContact() {
  const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL || "";
  const { lang, setLang, t } = useI18n();
  const [inquiryType, setInquiryType] = useState("demo");
  const [form, setForm] = useState({
    first_name: "", last_name: "", email: "", company: "", job_title: "",
    company_size: "", industry: "", location: "", modules: [], message: "",
    preferred_contact: "email",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const toggleModule = (m) => {
    setForm(prev => ({
      ...prev,
      modules: prev.modules.includes(m) ? prev.modules.filter(x => x !== m) : [...prev.modules, m],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);
    try {
      if (!CONTACT_API_URL) {
        throw new Error("Missing VITE_CONTACT_API_URL");
      }

      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          inquiry_type: inquiryType,
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Failed to submit contact form");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error.message || "Unable to send your message right now.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <OmnivioLayout lang={lang} setLang={setLang} t={t}>
      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-16 border-b border-neutral-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-black text-neutral-900 mb-4">Let's talk</h1>
          <p className="text-xl text-neutral-500">Tell us about your business and we'll match you with the right solution — in your language, for your region.</p>
        </div>
      </section>

      {/* Inquiry type selector */}
      <section className="py-10 bg-white border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm font-semibold text-neutral-500 uppercase tracking-widest mb-4 text-center">What can we help you with?</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {INQUIRY_TYPES.map(type => (
              <button key={type.value} onClick={() => setInquiryType(type.value)}
                className={`p-3 rounded-xl border-2 text-left transition-all ${inquiryType === type.value ? "border-blue-500 bg-blue-50" : "border-neutral-100 hover:border-neutral-200 bg-white"}`}>
                <p className="text-sm font-semibold text-neutral-900">{type.label}</p>
                <p className="text-[10px] text-neutral-500 mt-0.5">{type.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-12 text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl font-black text-neutral-900 mb-3">Message received!</h2>
                  <p className="text-neutral-500 mb-2">A confirmation has been sent to <strong>{form.email}</strong>.</p>
                  <p className="text-neutral-500 mb-8">Our team will be in touch within <strong>2 business hours</strong>.</p>
                  <div className="flex gap-3 justify-center">
                    <Link to="/" className="px-5 py-2.5 border border-neutral-200 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-50">Back to Home</Link>
                    <Link to="/pricing" className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700">View Pricing</Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-8 space-y-6">
                  <h2 className="text-xl font-black text-neutral-900">
                    {INQUIRY_TYPES.find(t => t.value === inquiryType)?.label}
                  </h2>

                  {/* Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[["first_name", "First Name *", "John"], ["last_name", "Last Name *", "Smith"]].map(([name, label, ph]) => (
                      <div key={name}>
                        <label className="text-xs font-semibold text-neutral-600 block mb-1.5">{label}</label>
                        <input required placeholder={ph} value={form[name]} onChange={e => setForm(p => ({ ...p, [name]: e.target.value }))}
                          className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    ))}
                  </div>

                  {/* Contact */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Work Email *</label>
                      <input required type="email" placeholder="john@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Company Name *</label>
                      <input required placeholder="Acme Corp" value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                  </div>

                  {/* Job title */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Job Title</label>
                    <input placeholder="VP Operations" value={form.job_title} onChange={e => setForm(p => ({ ...p, job_title: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>

                  {/* Company size + industry */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Company Size *</label>
                      <select required value={form.company_size} onChange={e => setForm(p => ({ ...p, company_size: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select employees</option>
                        {COMPANY_SIZES.map(s => <option key={s} value={s}>{s} employees</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Industry *</label>
                      <select required value={form.industry} onChange={e => setForm(p => ({ ...p, industry: e.target.value }))}
                        className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Select industry</option>
                        {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Country / Region *</label>
                    <select required value={form.location} onChange={e => setForm(p => ({ ...p, location: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select location</option>
                      {LOCATIONS.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>
                  </div>

                  {/* Modules interest */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-2">Which modules interest you? (select all that apply)</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {MODULES_INTEREST.map(m => (
                        <button key={m} type="button" onClick={() => toggleModule(m)}
                          className={`px-3 py-2 text-xs font-medium rounded-lg border transition-all text-left ${form.modules.includes(m) ? "border-blue-500 bg-blue-50 text-blue-700" : "border-neutral-200 text-neutral-600 hover:border-neutral-300"}`}>
                          {m}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-semibold text-neutral-600 block mb-1.5">Tell us about your project (optional)</label>
                    <textarea placeholder="Current tools, main pain points, timeline, specific requirements…"
                      value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className="w-full px-4 py-2.5 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-24 resize-none" />
                  </div>

                  <button type="submit" disabled={submitting}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center justify-center gap-2">
                    {submitting ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {submitting ? "Sending…" : inquiryType === "demo" ? "Request Demo" : inquiryType === "trial" ? "Start Free Trial" : "Send Message"}
                  </button>
                  {submitError && (
                    <p className="text-sm text-red-600 text-center">{submitError}</p>
                  )}

                  <p className="text-xs text-neutral-400 text-center">By submitting, you agree to our Privacy Policy and Terms of Service. We never share your data with third parties.</p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Why Omnivio */}
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
                <h3 className="font-black text-neutral-900 mb-4">Why teams choose Omnivio</h3>
                <ul className="space-y-3">
                  {[
                    "14-day free trial, full access",
                    "Onboarding in days, not months",
                    "Replace 6–10 disconnected tools",
                    "Up to 52% cost savings vs. ERP",
                    "Multilingual in 6 languages",
                    "Data stays in your region",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-neutral-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response time */}
              <div className="bg-blue-50 rounded-2xl border border-blue-100 p-5">
                <Clock className="w-5 h-5 text-blue-600 mb-2" />
                <p className="font-semibold text-neutral-900 text-sm">Typical response time</p>
                <p className="text-2xl font-black text-blue-600 mt-0.5">&lt; 2 hours</p>
                <p className="text-xs text-neutral-500 mt-1">During business hours (ET / CET / WET)</p>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 space-y-4">
                <h3 className="font-black text-neutral-900 text-sm">Our offices</h3>
                {OFFICES.map(office => (
                  <div key={office.city} className={`p-3 rounded-xl ${office.primary ? "bg-blue-50 border border-blue-100" : "bg-neutral-50"}`}>
                    <p className="font-semibold text-sm text-neutral-900">{office.city} · {office.country}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">{office.address}</p>
                    <p className="text-xs text-blue-600 mt-0.5">{office.phone}</p>
                    <p className="text-xs text-neutral-400">{office.hours}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </OmnivioLayout>
  );
}
