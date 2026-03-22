import React, { useState } from "react";
import { Link } from "react-router-dom";
import OmnivioLayout, { useI18n } from "./OmnivioLayout";
import {
  ArrowRight, CheckCircle2, Star, Shield, Zap,
  TrendingUp, Package, DollarSign, Users, BarChart2, Headphones,
  ShoppingCart, Truck, Building2, ChevronRight
} from "lucide-react";

const COLOR_MAP = {
  blue: "bg-blue-50 text-blue-600",
  emerald: "bg-emerald-50 text-emerald-600",
  amber: "bg-amber-50 text-amber-600",
  purple: "bg-purple-50 text-purple-600",
  rose: "bg-rose-50 text-rose-600",
  indigo: "bg-indigo-50 text-indigo-600",
  cyan: "bg-cyan-50 text-cyan-600",
  orange: "bg-orange-50 text-orange-600",
};

const SOCIAL_PROOF = [
  { name: "Sarah K.", role: "VP Operations, Retail Co.", text: "Omnivio replaced 6 disconnected tools. Our procurement cycle dropped from 14 days to 3.", stars: 5 },
  { name: "Marc D.", role: "CFO, Manufacturing SME", text: "The real-time inventory and FX engine alone saved us $240K last year. Exceptional ROI.", stars: 5 },
  { name: "Leila R.", role: "Supply Chain Director, FMCG", text: "The AI demand forecasting is remarkably accurate. We cut stockouts by 68% in Q1.", stars: 5 },
];

const SCREENSHOTS = [
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
];

const INTEGRATIONS = ["Salesforce", "Adobe Commerce", "PrestaShop", "Shopify", "SAP", "NetSuite", "Stripe", "FedEx", "DocuSign", "Slack", "GitHub", "Google Workspace", "HubSpot", "Notion", "Airtable", "Dropbox", "Microsoft Teams"];

const STATS = [
  { value: "98.9%", labelKey: "stat_uptime" },
  { value: "< 200ms", labelKey: "stat_api" },
  { value: "40+", labelKey: "stat_modules" },
  { value: "6", labelKey: "stat_languages" },
  { value: "8", labelKey: "stat_countries" },
  { value: "SOC 2", labelKey: "stat_cert" },
];

const STAT_LABELS = {
  en: { stat_uptime: "Uptime SLA", stat_api: "API Response", stat_modules: "Modules", stat_languages: "Languages", stat_countries: "Countries", stat_cert: "Certified" },
  fr: { stat_uptime: "SLA de Disponibilité", stat_api: "Réponse API", stat_modules: "Modules", stat_languages: "Langues", stat_countries: "Pays", stat_cert: "Certifié" },
  de: { stat_uptime: "Verfügbarkeits-SLA", stat_api: "API-Antwort", stat_modules: "Module", stat_languages: "Sprachen", stat_countries: "Länder", stat_cert: "Zertifiziert" },
  es: { stat_uptime: "SLA de Disponibilidad", stat_api: "Respuesta API", stat_modules: "Módulos", stat_languages: "Idiomas", stat_countries: "Países", stat_cert: "Certificado" },
  ar: { stat_uptime: "اتفاقية مستوى الخدمة للتوفر", stat_api: "وقت استجابة API", stat_modules: "وحدات", stat_languages: "لغات", stat_countries: "دول", stat_cert: "معتمد" },
  tr: { stat_uptime: "Çalışma Süresi SLA", stat_api: "API Yanıt Süresi", stat_modules: "Modüller", stat_languages: "Diller", stat_countries: "Ülkeler", stat_cert: "Sertifikalı" },
};

export default function OmnivioHome() {
  const { lang, setLang, t } = useI18n();
  const [activeScreen, setActiveScreen] = useState(0);
  const statLabels = STAT_LABELS[lang] || STAT_LABELS.en;

  const MODULES = [
    { icon: ShoppingCart, color: "blue",    nameKey: "modProcurement", descKey: "modProcurementDesc" },
    { icon: Package,      color: "emerald", nameKey: "modSupplyChain", descKey: "modSupplyChainDesc" },
    { icon: DollarSign,   color: "amber",   nameKey: "modFinance",     descKey: "modFinanceDesc" },
    { icon: TrendingUp,   color: "purple",  nameKey: "modPMO",         descKey: "modPMODesc" },
    { icon: Users,        color: "rose",    nameKey: "modCRM",         descKey: "modCRMDesc" },
    { icon: BarChart2,    color: "indigo",  nameKey: "modAI",          descKey: "modAIDesc" },
    { icon: Headphones,   color: "cyan",    nameKey: "modITSM",        descKey: "modITSMDesc" },
    { icon: Truck,        color: "orange",  nameKey: "modLogistics",   descKey: "modLogisticsDesc" },
  ];

  const AI_FEATURES = [
    { titleKey: "ai1Title", descKey: "ai1Desc" },
    { titleKey: "ai2Title", descKey: "ai2Desc" },
    { titleKey: "ai3Title", descKey: "ai3Desc" },
    { titleKey: "ai4Title", descKey: "ai4Desc" },
  ];

  return (
    <OmnivioLayout lang={lang} setLang={setLang} t={t}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-200 mb-8">
              <Zap className="w-4 h-4 text-blue-400" />
              <span>{t.heroBadge}</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-6">
              {t.tagline}
            </h1>
            <p className="text-xl text-blue-100/80 leading-relaxed max-w-2xl mx-auto mb-10">{t.sub}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transition-all hover:scale-105">
                {t.cta} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all">
                {t.seePricing}
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-10 text-sm text-blue-200/70">
              {[t.noCreditCard, t.freeTrial, t.cancelAnytime].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-blue-400" />{item}</span>
              ))}
            </div>
          </div>

          {/* Dashboard screenshot */}
          <div className="relative mt-16 mx-auto max-w-5xl">
            <div className="bg-gradient-to-b from-transparent to-slate-900/20 absolute inset-0 rounded-2xl z-10 pointer-events-none" />
            <div className="bg-neutral-800 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden border border-white/10">
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-900 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex-1 bg-neutral-800 rounded-md h-6 mx-4 flex items-center px-3">
                  <span className="text-neutral-400 text-xs">app.omnivio.com/Dashboard</span>
                </div>
              </div>
              <img src={SCREENSHOTS[activeScreen]} alt="Omnivio Dashboard" className="w-full object-cover h-80 sm:h-96" />
              <div className="flex justify-center gap-2 p-3 bg-neutral-900">
                {SCREENSHOTS.map((_, i) => (
                  <button key={i} onClick={() => setActiveScreen(i)}
                    className={`w-2 h-2 rounded-full transition-all ${activeScreen === i ? "bg-blue-400 w-6" : "bg-neutral-600"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-white border-b border-neutral-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.labelKey}>
                <p className="text-2xl font-black text-neutral-900">{s.value}</p>
                <p className="text-xs text-neutral-500 mt-0.5">{statLabels[s.labelKey]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES GRID ── */}
      <section className="py-24 bg-neutral-50" id="modules">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{t.completePlatform}</span>
            <h2 className="text-4xl font-black text-neutral-900 mt-2 mb-4">{t.everythingYouNeed}</h2>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto">{t.everythingDesc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {MODULES.map(mod => {
              const Icon = mod.icon;
              return (
                <div key={mod.nameKey} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${COLOR_MAP[mod.color]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors">{t[mod.nameKey]}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{t[mod.descKey]}</p>
                  <div className="flex items-center gap-1 mt-4 text-xs text-blue-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {t.learnMore} <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/pricing" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              {t.seeAllModules} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── AI HIGHLIGHT ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">{t.builtInAI}</span>
              <h2 className="text-4xl font-black text-neutral-900 mt-2 mb-6">{t.intelligenceAtEveryLayer}</h2>
              <div className="space-y-5">
                {AI_FEATURES.map(f => (
                  <div key={f.titleKey} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900">{t[f.titleKey]}</p>
                      <p className="text-sm text-neutral-500 mt-0.5">{t[f.descKey]}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-neutral-100">
                <img src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80" alt="AI Analytics Dashboard" className="w-full h-80 object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-neutral-100">
                <p className="text-xs text-neutral-500">{t.forecastAccuracyLabel}</p>
                <p className="text-2xl font-black text-emerald-600">94.2%</p>
                <p className="text-xs text-neutral-400">{t.forecastAccuracyVs}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-neutral-900 mb-4">{t.trustedBy}</h2>
            <p className="text-lg text-neutral-500">{t.trustedDesc}</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {SOCIAL_PROOF.map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(r.stars)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-neutral-700 leading-relaxed mb-4">"{r.text}"</p>
                <div>
                  <p className="font-semibold text-neutral-900 text-sm">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-sm text-neutral-400 mb-6 uppercase tracking-widest font-semibold">{t.integratesWith}</p>
            <div className="flex flex-wrap justify-center gap-3">
              {INTEGRATIONS.map(i => (
                <span key={i} className="px-4 py-2 bg-neutral-100 text-neutral-600 text-sm font-medium rounded-lg">{i}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECURITY ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-12 text-white text-center">
            <Shield className="w-12 h-12 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black mb-4">{t.securityTitle}</h2>
            <p className="text-blue-100/70 max-w-2xl mx-auto mb-10">{t.securityDesc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[["SOC 2", "Type II"], ["ISO 27001", ""], ["GDPR", ""], ["PIPEDA", ""]].map(([cert, sub]) => (
                <div key={cert} className="bg-white/10 rounded-xl p-4">
                  <p className="font-black text-white">{cert}</p>
                  {sub && <p className="text-xs text-blue-200/70 mt-0.5">{sub}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-black mb-4">{t.readyTitle}</h2>
          <p className="text-blue-100 text-lg mb-8">{t.readyDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-xl shadow hover:bg-blue-50 transition-colors">
              {t.cta} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-colors border border-blue-400">
              {t.viewPricing}
            </Link>
          </div>
        </div>
      </section>
    </OmnivioLayout>
  );
}