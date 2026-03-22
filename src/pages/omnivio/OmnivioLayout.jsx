import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { key: "platform", href: "/", sub: [
    { key: "allModules",    href: "/" },
    { key: "supplyChain",   href: "/" },
    { key: "finance",       href: "/" },
    { key: "procurement",   href: "/" },
    { key: "crm",           href: "/" },
    { key: "pmo",           href: "/" },
    { key: "ai",            href: "/" },
    { key: "itsm",          href: "/" },
    { key: "logistics",     href: "/" },
    { key: "retail",        href: "/" },
    { key: "hr",            href: "/" },
    { key: "compliance",    href: "/" },
  ]},
  { key: "pricing",    href: "/pricing" },
  { key: "industries", href: "/industries" },
  { key: "faq",        href: "/faq" },
  { key: "contact",    href: "/contact" },
];

const LANGUAGES = [
  { code: "en", label: "English",  flag: "🇨🇦" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch",  flag: "🇩🇪" },
  { code: "es", label: "Español",  flag: "🇪🇸" },
  { code: "ar", label: "العربية",  flag: "🇲🇦" },
  { code: "tr", label: "Türkçe",   flag: "🇹🇷" },
];

export const I18N = {
  en: {
    cta: "Start Free Trial",
    login: "Sign In",
    tagline: "The Enterprise Operating System",
    sub: "Unify procurement, finance, supply chain, HR, CRM, and AI into one platform.",
    seePricing: "See Pricing",
    viewPricing: "View Pricing",
    noCreditCard: "No credit card required",
    freeTrial: "14-day free trial",
    cancelAnytime: "Cancel anytime",
    // Hero badge
    heroBadge: "AI-Powered Enterprise Platform · 40+ Modules · Built for Scale",
    // Sections
    completePlatform: "Complete Platform",
    everythingYouNeed: "Everything your business needs",
    everythingDesc: "40+ enterprise modules, fully integrated, AI-powered — from procurement to customer delivery.",
    seeAllModules: "See all 40+ modules and pricing",
    builtInAI: "Built-in AI",
    intelligenceAtEveryLayer: "Intelligence at every layer",
    trustedBy: "Trusted by operations teams worldwide",
    trustedDesc: "Mid-market companies across retail, manufacturing, distribution, and services.",
    integratesWith: "Integrates with your existing stack",
    securityTitle: "Enterprise-grade security & compliance",
    securityDesc: "SOC 2 Type II certified, ISO 27001 ready, GDPR-compliant, PIPEDA-compliant. Your data is encrypted at rest and in transit. Multi-tenant isolation. Full audit trail.",
    readyTitle: "Ready to unify your operations?",
    readyDesc: "Start your 14-day free trial. Full access to all modules. No credit card required.",
    learnMore: "Learn more",
    forecastAccuracyLabel: "Demand Forecast Accuracy",
    forecastAccuracyVs: "vs 71% industry avg.",
    // AI features
    ai1Title: "Predictive Demand Forecasting",
    ai1Desc: "ML models analyze seasonality, velocity, and market signals to auto-generate replenishment suggestions.",
    ai2Title: "Document OCR & Auto-Mapping",
    ai2Desc: "AI extracts data from invoices, BOLs, and customs forms — automatically updating POs and Container records.",
    ai3Title: "Route Optimization",
    ai3Desc: "AI-powered TSP algorithms minimize fuel costs and calculate real-time ETAs for your entire fleet.",
    ai4Title: "Vendor Performance AI",
    ai4Desc: "Automated 90-day improvement plans, root cause analysis, and escalation triggers for underperforming suppliers.",
    // Modules
    modProcurement: "Procurement",
    modProcurementDesc: "PO lifecycle, 3-way matching, budget control, vendor management",
    modSupplyChain: "Supply Chain & WMS",
    modSupplyChainDesc: "Inventory, ASNs, barcodes, warehouse floor plan, lot tracking",
    modFinance: "Finance & FX",
    modFinanceDesc: "Budget tracking, invoice reconciliation, chart of accounts, IFRS/GAAP",
    modPMO: "PMO & Projects",
    modPMODesc: "Gantt, sprints, time tracking, resource scheduling, stakeholder portal",
    modCRM: "CRM & Sales",
    modCRMDesc: "Pipeline, quotations, customer 360, sales execution, AI forecasting. Native Salesforce & HubSpot sync.",
    modAI: "AI & Analytics",
    modAIDesc: "Predictive maintenance, demand forecasting, OCR, route optimization",
    modITSM: "ITSM & Helpdesk",
    modITSMDesc: "Ticket management, SLA tracking, change requests, CMDB",
    modLogistics: "Logistics & Fleet",
    modLogisticsDesc: "Fleet management, load consolidation, multi-stop manifests, fuel optimization",
    // Nav
    navPlatform: "Platform",
    navPricing: "Pricing",
    navIndustries: "Industries",
    navFAQ: "FAQ",
    navContact: "Contact",
    navAllModules: "All Modules",
    navSupplyChain: "Supply Chain & WMS",
    navFinance: "Finance & Accounting",
    navProcurement: "Procurement",
    navCRM: "CRM & Sales",
    navPMO: "PMO & Projects",
    navAI: "AI & Analytics",
    navITSM: "ITSM & Helpdesk",
    navLogistics: "Logistics & Fleet",
    navRetail: "Retail & Planogram",
    navHR: "HR & Talent",
    navCompliance: "Security & Compliance",
    // Footer
    footerDesc: "The enterprise operating platform trusted by mid-market companies across North America, Europe, and MENA.",
    footerPlatform: "Platform",
    footerCompany: "Company",
    footerResources: "Resources",
    footerLegal: "Legal",
    footerCopyright: "© 2026 Omnivio Inc. All rights reserved. Headquarters: Montréal, QC, Canada",
    footerPlatformLinks: ["Supply Chain", "Finance", "Procurement", "CRM", "PMO", "AI Analytics", "ITSM", "Logistics"],
    footerCompanyLinks: ["About", "Careers", "Blog", "Press", "Partners"],
    footerResourcesLinks: ["Documentation", "API Reference", "Status Page", "Security", "Changelog"],
    footerLegalLinks: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "PIPEDA"],
  },

  fr: {
    cta: "Essai Gratuit",
    login: "Connexion",
    tagline: "Le Système d'Exploitation d'Entreprise",
    sub: "Unifiez achats, finances, chaîne d'approvisionnement, RH, CRM et IA en une seule plateforme.",
    seePricing: "Voir les Tarifs",
    viewPricing: "Voir les Tarifs",
    noCreditCard: "Sans carte bancaire",
    freeTrial: "Essai gratuit 14 jours",
    cancelAnytime: "Annulable à tout moment",
    heroBadge: "Plateforme d'Entreprise IA · 40+ Modules · Conçue pour Grandir",
    completePlatform: "Plateforme Complète",
    everythingYouNeed: "Tout ce dont votre entreprise a besoin",
    everythingDesc: "40+ modules d'entreprise, entièrement intégrés, propulsés par l'IA — de l'achat à la livraison client.",
    seeAllModules: "Voir les 40+ modules et les tarifs",
    builtInAI: "IA Intégrée",
    intelligenceAtEveryLayer: "L'intelligence à chaque niveau",
    trustedBy: "La confiance des équipes opérationnelles dans le monde entier",
    trustedDesc: "Entreprises du marché intermédiaire dans le retail, la fabrication, la distribution et les services.",
    integratesWith: "S'intègre à votre infrastructure existante",
    securityTitle: "Sécurité et conformité de niveau entreprise",
    securityDesc: "Certifié SOC 2 Type II, conforme ISO 27001, RGPD et PIPEDA. Vos données sont chiffrées au repos et en transit. Isolation multi-tenant. Piste d'audit complète.",
    readyTitle: "Prêt à unifier vos opérations ?",
    readyDesc: "Commencez votre essai gratuit de 14 jours. Accès complet à tous les modules. Sans carte bancaire.",
    learnMore: "En savoir plus",
    forecastAccuracyLabel: "Précision des Prévisions de Demande",
    forecastAccuracyVs: "vs 71% moyenne du secteur",
    ai1Title: "Prévision de Demande Prédictive",
    ai1Desc: "Les modèles ML analysent la saisonnalité, la vélocité et les signaux marché pour générer des suggestions de réapprovisionnement.",
    ai2Title: "OCR & Cartographie Automatique",
    ai2Desc: "L'IA extrait les données des factures, BL et formulaires douaniers — en mettant à jour automatiquement les BDC et les conteneurs.",
    ai3Title: "Optimisation des Itinéraires",
    ai3Desc: "Les algorithmes TSP propulsés par l'IA minimisent les coûts carburant et calculent les ETA en temps réel pour toute votre flotte.",
    ai4Title: "IA Performance Fournisseurs",
    ai4Desc: "Plans d'amélioration de 90 jours automatisés, analyse des causes racines et déclencheurs d'escalade pour les fournisseurs sous-performants.",
    modProcurement: "Achats",
    modProcurementDesc: "Cycle de vie des BDC, rapprochement tripartite, contrôle budgétaire, gestion des fournisseurs",
    modSupplyChain: "Chaîne d'Approvisionnement & WMS",
    modSupplyChainDesc: "Inventaire, ASN, codes-barres, plan d'étage entrepôt, gestion des lots",
    modFinance: "Finance & Change",
    modFinanceDesc: "Suivi budgétaire, rapprochement des factures, plan comptable, IFRS/PCN",
    modPMO: "PMO & Projets",
    modPMODesc: "Gantt, sprints, suivi du temps, planification des ressources, portail parties prenantes",
    modCRM: "CRM & Ventes",
    modCRMDesc: "Pipeline, devis, vue client 360, exécution des ventes, prévision IA",
    modAI: "IA & Analytique",
    modAIDesc: "Maintenance prédictive, prévision de demande, OCR, optimisation des itinéraires",
    modITSM: "ITSM & Support",
    modITSMDesc: "Gestion des tickets, suivi SLA, demandes de changement, CMDB",
    modLogistics: "Logistique & Flotte",
    modLogisticsDesc: "Gestion de flotte, consolidation de charges, manifestes multi-arrêts, optimisation carburant",
    navPlatform: "Plateforme",
    navPricing: "Tarifs",
    navIndustries: "Secteurs",
    navFAQ: "FAQ",
    navContact: "Contact",
    navAllModules: "Tous les Modules",
    navSupplyChain: "Chaîne d'Approvisionnement & WMS",
    navFinance: "Finance & Comptabilité",
    navProcurement: "Achats",
    navCRM: "CRM & Ventes",
    navPMO: "PMO & Projets",
    navAI: "IA & Analytique",
    navITSM: "ITSM & Support",
    navLogistics: "Logistique & Flotte",
    navRetail: "Retail & Planogramme",
    navHR: "RH & Talents",
    navCompliance: "Sécurité & Conformité",
    footerDesc: "La plateforme d'entreprise opérationnelle de confiance pour les entreprises du marché intermédiaire en Amérique du Nord, en Europe et au MENA.",
    footerPlatform: "Plateforme",
    footerCompany: "Entreprise",
    footerResources: "Ressources",
    footerLegal: "Mentions Légales",
    footerCopyright: "© 2026 Omnivio Inc. Tous droits réservés. Siège : Montréal, QC, Canada",
    footerPlatformLinks: ["Chaîne d'Approvisionnement", "Finance", "Achats", "CRM", "PMO", "IA & Analytique", "ITSM", "Logistique"],
    footerCompanyLinks: ["À Propos", "Carrières", "Blog", "Presse", "Partenaires"],
    footerResourcesLinks: ["Documentation", "Référence API", "Page de Statut", "Sécurité", "Changelog"],
    footerLegalLinks: ["Politique de Confidentialité", "Conditions d'Utilisation", "Politique de Cookies", "RGPD", "PIPEDA"],
  },

  de: {
    cta: "Kostenlos testen",
    login: "Anmelden",
    tagline: "Das Enterprise-Betriebssystem",
    sub: "Vereinen Sie Einkauf, Finanzen, Lieferkette, HR, CRM und KI auf einer Plattform.",
    seePricing: "Preise ansehen",
    viewPricing: "Preise ansehen",
    noCreditCard: "Keine Kreditkarte erforderlich",
    freeTrial: "14 Tage kostenlos testen",
    cancelAnytime: "Jederzeit kündbar",
    heroBadge: "KI-gestützte Enterprise-Plattform · 40+ Module · Skalierbar",
    completePlatform: "Vollständige Plattform",
    everythingYouNeed: "Alles, was Ihr Unternehmen braucht",
    everythingDesc: "40+ Enterprise-Module, vollständig integriert, KI-betrieben — vom Einkauf bis zur Kundenlieferung.",
    seeAllModules: "Alle 40+ Module und Preise ansehen",
    builtInAI: "Integrierte KI",
    intelligenceAtEveryLayer: "Intelligenz auf jeder Ebene",
    trustedBy: "Vertrauen von Betriebsteams weltweit",
    trustedDesc: "Mittelständische Unternehmen aus Einzelhandel, Fertigung, Distribution und Dienstleistungen.",
    integratesWith: "Integriert sich in Ihre bestehende Infrastruktur",
    securityTitle: "Unternehmenssicherheit & Compliance",
    securityDesc: "SOC 2 Type II zertifiziert, ISO 27001-konform, DSGVO- und PIPEDA-konform. Ihre Daten sind im Ruhezustand und bei der Übertragung verschlüsselt. Mandantenisolierung. Vollständiger Prüfpfad.",
    readyTitle: "Bereit, Ihre Abläufe zu vereinheitlichen?",
    readyDesc: "Starten Sie Ihre 14-tägige kostenlose Testversion. Vollzugriff auf alle Module. Keine Kreditkarte erforderlich.",
    learnMore: "Mehr erfahren",
    forecastAccuracyLabel: "Bedarfsprognosegenauigkeit",
    forecastAccuracyVs: "vs. 71% Branchendurchschnitt",
    ai1Title: "Prädiktive Bedarfsprognose",
    ai1Desc: "ML-Modelle analysieren Saisonalität, Geschwindigkeit und Marktsignale, um automatisch Nachschubvorschläge zu generieren.",
    ai2Title: "Dokument-OCR & Auto-Zuordnung",
    ai2Desc: "KI extrahiert Daten aus Rechnungen, Frachtbriefen und Zollformularen und aktualisiert automatisch Bestellungen und Containereinträge.",
    ai3Title: "Routenoptimierung",
    ai3Desc: "KI-gestützte TSP-Algorithmen minimieren Kraftstoffkosten und berechnen Echtzeit-ETAs für Ihre gesamte Flotte.",
    ai4Title: "Lieferanten-Performance-KI",
    ai4Desc: "Automatisierte 90-Tage-Verbesserungspläne, Ursachenanalyse und Eskalationsauslöser für leistungsschwache Lieferanten.",
    modProcurement: "Einkauf",
    modProcurementDesc: "Bestelllebenszyklus, 3-Wege-Abgleich, Budgetkontrolle, Lieferantenverwaltung",
    modSupplyChain: "Lieferkette & WMS",
    modSupplyChainDesc: "Inventar, ASN, Barcodes, Lagergrundrisspläne, Chargenverfolgung",
    modFinance: "Finanzen & Devisen",
    modFinanceDesc: "Budgetverfolgung, Rechnungsabgleich, Kontenplan, IFRS/HGB",
    modPMO: "PMO & Projekte",
    modPMODesc: "Gantt, Sprints, Zeiterfassung, Ressourcenplanung, Stakeholder-Portal",
    modCRM: "CRM & Vertrieb",
    modCRMDesc: "Pipeline, Angebote, 360°-Kundenansicht, Vertriebsabwicklung, KI-Prognosen",
    modAI: "KI & Analytik",
    modAIDesc: "Predictive Maintenance, Bedarfsprognosen, OCR, Routenoptimierung",
    modITSM: "ITSM & Helpdesk",
    modITSMDesc: "Ticketverwaltung, SLA-Überwachung, Änderungsanfragen, CMDB",
    modLogistics: "Logistik & Fuhrpark",
    modLogisticsDesc: "Fuhrparkverwaltung, Ladungskonsolidierung, Mehrstopp-Manifeste, Kraftstoffoptimierung",
    navPlatform: "Plattform",
    navPricing: "Preise",
    navIndustries: "Branchen",
    navFAQ: "FAQ",
    navContact: "Kontakt",
    navAllModules: "Alle Module",
    navSupplyChain: "Lieferkette & WMS",
    navFinance: "Finanzen & Buchhaltung",
    navProcurement: "Einkauf",
    navCRM: "CRM & Vertrieb",
    navPMO: "PMO & Projekte",
    navAI: "KI & Analytik",
    navITSM: "ITSM & Helpdesk",
    navLogistics: "Logistik & Fuhrpark",
    navRetail: "Einzelhandel & Planogramm",
    navHR: "HR & Talente",
    navCompliance: "Sicherheit & Compliance",
    footerDesc: "Die Enterprise-Betriebsplattform für mittelständische Unternehmen in Nordamerika, Europa und MENA.",
    footerPlatform: "Plattform",
    footerCompany: "Unternehmen",
    footerResources: "Ressourcen",
    footerLegal: "Rechtliches",
    footerCopyright: "© 2026 Omnivio Inc. Alle Rechte vorbehalten. Hauptsitz: Montréal, QC, Kanada",
    footerPlatformLinks: ["Lieferkette", "Finanzen", "Einkauf", "CRM", "PMO", "KI & Analytik", "ITSM", "Logistik"],
    footerCompanyLinks: ["Über uns", "Karriere", "Blog", "Presse", "Partner"],
    footerResourcesLinks: ["Dokumentation", "API-Referenz", "Statusseite", "Sicherheit", "Changelog"],
    footerLegalLinks: ["Datenschutzerklärung", "Nutzungsbedingungen", "Cookie-Richtlinie", "DSGVO", "PIPEDA"],
  },

  es: {
    cta: "Prueba Gratuita",
    login: "Iniciar sesión",
    tagline: "El Sistema Operativo Empresarial",
    sub: "Unifica compras, finanzas, cadena de suministro, RRHH, CRM e IA en una sola plataforma.",
    seePricing: "Ver Precios",
    viewPricing: "Ver Precios",
    noCreditCard: "Sin tarjeta de crédito",
    freeTrial: "Prueba gratuita 14 días",
    cancelAnytime: "Cancela cuando quieras",
    heroBadge: "Plataforma Empresarial con IA · 40+ Módulos · Preparada para Escalar",
    completePlatform: "Plataforma Completa",
    everythingYouNeed: "Todo lo que tu empresa necesita",
    everythingDesc: "40+ módulos empresariales, totalmente integrados, potenciados por IA — desde la compra hasta la entrega al cliente.",
    seeAllModules: "Ver todos los módulos y precios",
    builtInAI: "IA Integrada",
    intelligenceAtEveryLayer: "Inteligencia en cada capa",
    trustedBy: "La confianza de los equipos operativos en todo el mundo",
    trustedDesc: "Empresas del mercado medio en retail, manufactura, distribución y servicios.",
    integratesWith: "Se integra con tu infraestructura existente",
    securityTitle: "Seguridad y cumplimiento de nivel empresarial",
    securityDesc: "Certificado SOC 2 Tipo II, listo para ISO 27001, conforme con RGPD y PIPEDA. Sus datos están cifrados en reposo y en tránsito. Aislamiento multi-tenant. Pista de auditoría completa.",
    readyTitle: "¿Listo para unificar tus operaciones?",
    readyDesc: "Comienza tu prueba gratuita de 14 días. Acceso completo a todos los módulos. Sin tarjeta de crédito.",
    learnMore: "Saber más",
    forecastAccuracyLabel: "Precisión de Previsión de Demanda",
    forecastAccuracyVs: "vs 71% promedio del sector",
    ai1Title: "Previsión de Demanda Predictiva",
    ai1Desc: "Los modelos ML analizan la estacionalidad, la velocidad y las señales del mercado para generar automáticamente sugerencias de reabastecimiento.",
    ai2Title: "OCR de Documentos y Auto-Mapeo",
    ai2Desc: "La IA extrae datos de facturas, albaranes y formularios de aduana, actualizando automáticamente los pedidos y los registros de contenedores.",
    ai3Title: "Optimización de Rutas",
    ai3Desc: "Los algoritmos TSP impulsados por IA minimizan los costos de combustible y calculan ETAs en tiempo real para toda tu flota.",
    ai4Title: "IA de Rendimiento de Proveedores",
    ai4Desc: "Planes de mejora automatizados de 90 días, análisis de causa raíz y disparadores de escalada para proveedores con bajo rendimiento.",
    modProcurement: "Compras",
    modProcurementDesc: "Ciclo de vida de OC, cotejo tripartito, control presupuestario, gestión de proveedores",
    modSupplyChain: "Cadena de Suministro & WMS",
    modSupplyChainDesc: "Inventario, ASN, códigos de barras, plano de almacén, seguimiento de lotes",
    modFinance: "Finanzas & Divisas",
    modFinanceDesc: "Seguimiento presupuestario, conciliación de facturas, plan de cuentas, NIIF/GAAP",
    modPMO: "PMO & Proyectos",
    modPMODesc: "Gantt, sprints, seguimiento del tiempo, planificación de recursos, portal de partes interesadas",
    modCRM: "CRM & Ventas",
    modCRMDesc: "Pipeline, presupuestos, vista 360 del cliente, ejecución de ventas, pronóstico IA",
    modAI: "IA & Analítica",
    modAIDesc: "Mantenimiento predictivo, previsión de demanda, OCR, optimización de rutas",
    modITSM: "ITSM & Soporte",
    modITSMDesc: "Gestión de tickets, seguimiento SLA, solicitudes de cambio, CMDB",
    modLogistics: "Logística & Flota",
    modLogisticsDesc: "Gestión de flota, consolidación de carga, manifiestos multiparada, optimización de combustible",
    navPlatform: "Plataforma",
    navPricing: "Precios",
    navIndustries: "Sectores",
    navFAQ: "Preguntas Frecuentes",
    navContact: "Contacto",
    navAllModules: "Todos los Módulos",
    navSupplyChain: "Cadena de Suministro & WMS",
    navFinance: "Finanzas & Contabilidad",
    navProcurement: "Compras",
    navCRM: "CRM & Ventas",
    navPMO: "PMO & Proyectos",
    navAI: "IA & Analítica",
    navITSM: "ITSM & Soporte",
    navLogistics: "Logística & Flota",
    navRetail: "Retail & Planograma",
    navHR: "RRHH & Talento",
    navCompliance: "Seguridad & Cumplimiento",
    footerDesc: "La plataforma operativa empresarial de confianza para empresas del mercado medio en América del Norte, Europa y MENA.",
    footerPlatform: "Plataforma",
    footerCompany: "Empresa",
    footerResources: "Recursos",
    footerLegal: "Legal",
    footerCopyright: "© 2026 Omnivio Inc. Todos los derechos reservados. Sede: Montréal, QC, Canadá",
    footerPlatformLinks: ["Cadena de Suministro", "Finanzas", "Compras", "CRM", "PMO", "IA & Analítica", "ITSM", "Logística"],
    footerCompanyLinks: ["Sobre Nosotros", "Carreras", "Blog", "Prensa", "Socios"],
    footerResourcesLinks: ["Documentación", "Referencia API", "Estado del Servicio", "Seguridad", "Changelog"],
    footerLegalLinks: ["Política de Privacidad", "Términos de Servicio", "Política de Cookies", "RGPD", "PIPEDA"],
  },

  ar: {
    cta: "ابدأ التجربة المجانية",
    login: "تسجيل الدخول",
    tagline: "نظام تشغيل المؤسسات",
    sub: "وحّد المشتريات والمالية وسلسلة التوريد والموارد البشرية وإدارة علاقات العملاء والذكاء الاصطناعي في منصة واحدة.",
    seePricing: "عرض الأسعار",
    viewPricing: "عرض الأسعار",
    noCreditCard: "لا تحتاج لبطاقة ائتمانية",
    freeTrial: "تجربة مجانية لمدة 14 يومًا",
    cancelAnytime: "إلغاء في أي وقت",
    heroBadge: "منصة مؤسسية مدعومة بالذكاء الاصطناعي · 40+ وحدة · مصممة للتوسع",
    completePlatform: "منصة متكاملة",
    everythingYouNeed: "كل ما تحتاجه أعمالك",
    everythingDesc: "أكثر من 40 وحدة مؤسسية، متكاملة بالكامل، مدعومة بالذكاء الاصطناعي — من المشتريات إلى تسليم العميل.",
    seeAllModules: "عرض جميع الوحدات 40+ والأسعار",
    builtInAI: "ذكاء اصطناعي مدمج",
    intelligenceAtEveryLayer: "الذكاء في كل طبقة",
    trustedBy: "موثوق به من قِبَل فرق العمليات في جميع أنحاء العالم",
    trustedDesc: "شركات السوق المتوسطة في قطاع التجزئة والتصنيع والتوزيع والخدمات.",
    integratesWith: "يتكامل مع بنيتك التحتية الحالية",
    securityTitle: "أمان وامتثال على مستوى المؤسسات",
    securityDesc: "معتمد وفق SOC 2 النوع الثاني، جاهز لمعيار ISO 27001، متوافق مع اللائحة الأوروبية لحماية البيانات GDPR وقانون PIPEDA الكندي. بياناتك مشفرة أثناء التخزين والنقل. عزل متعدد المستأجرين. مسار تدقيق كامل.",
    readyTitle: "هل أنت مستعد لتوحيد عملياتك؟",
    readyDesc: "ابدأ تجربتك المجانية لمدة 14 يومًا. وصول كامل إلى جميع الوحدات. لا تحتاج لبطاقة ائتمانية.",
    learnMore: "اعرف المزيد",
    forecastAccuracyLabel: "دقة توقعات الطلب",
    forecastAccuracyVs: "مقابل 71% متوسط الصناعة",
    ai1Title: "توقعات الطلب التنبؤية",
    ai1Desc: "تحلل نماذج التعلم الآلي الموسمية والسرعة وإشارات السوق لتوليد اقتراحات إعادة التخزين تلقائيًا.",
    ai2Title: "التعرف الضوئي على الحروف والتخطيط التلقائي",
    ai2Desc: "يستخرج الذكاء الاصطناعي البيانات من الفواتير وبوالص الشحن والنماذج الجمركية — مع تحديث أوامر الشراء وسجلات الحاويات تلقائيًا.",
    ai3Title: "تحسين المسارات",
    ai3Desc: "تقلل خوارزميات TSP المدعومة بالذكاء الاصطناعي تكاليف الوقود وتحسب أوقات الوصول المتوقعة في الوقت الفعلي لأسطولك بالكامل.",
    ai4Title: "ذكاء اصطناعي لأداء الموردين",
    ai4Desc: "خطط تحسين آلية لمدة 90 يومًا وتحليل السبب الجذري ومحفزات التصعيد للموردين ذوي الأداء المنخفض.",
    modProcurement: "المشتريات",
    modProcurementDesc: "دورة حياة أوامر الشراء، المطابقة الثلاثية، ضبط الميزانية، إدارة الموردين",
    modSupplyChain: "سلسلة التوريد ونظام إدارة المستودعات",
    modSupplyChainDesc: "المخزون، إشعارات الشحن المسبقة، الباركود، مخطط أرضية المستودع، تتبع الدُفعات",
    modFinance: "المالية وصرف العملات",
    modFinanceDesc: "تتبع الميزانية، مطابقة الفواتير، دليل الحسابات، المعايير الدولية للتقارير المالية",
    modPMO: "مكتب إدارة المشاريع",
    modPMODesc: "مخطط غانت، سبرينت، تتبع الوقت، جدولة الموارد، بوابة أصحاب المصلحة",
    modCRM: "إدارة علاقات العملاء والمبيعات",
    modCRMDesc: "خط أنابيب المبيعات، عروض الأسعار، رؤية العميل 360، تنفيذ المبيعات، التوقع بالذكاء الاصطناعي",
    modAI: "الذكاء الاصطناعي والتحليلات",
    modAIDesc: "الصيانة التنبؤية، توقعات الطلب، التعرف الضوئي على الحروف، تحسين المسارات",
    modITSM: "إدارة خدمات تكنولوجيا المعلومات",
    modITSMDesc: "إدارة التذاكر، تتبع اتفاقيات مستوى الخدمة، طلبات التغيير، قاعدة بيانات إدارة التكوين",
    modLogistics: "اللوجستيات والأسطول",
    modLogisticsDesc: "إدارة الأسطول، توحيد الأحمال، البيانات متعددة المحطات، تحسين استهلاك الوقود",
    navPlatform: "المنصة",
    navPricing: "الأسعار",
    navIndustries: "القطاعات",
    navFAQ: "الأسئلة الشائعة",
    navContact: "اتصل بنا",
    navAllModules: "جميع الوحدات",
    navSupplyChain: "سلسلة التوريد ونظام إدارة المستودعات",
    navFinance: "المالية والمحاسبة",
    navProcurement: "المشتريات",
    navCRM: "إدارة علاقات العملاء والمبيعات",
    navPMO: "مكتب إدارة المشاريع",
    navAI: "الذكاء الاصطناعي والتحليلات",
    navITSM: "إدارة خدمات تكنولوجيا المعلومات",
    navLogistics: "اللوجستيات والأسطول",
    navRetail: "التجزئة والبلانوغرام",
    navHR: "الموارد البشرية والمواهب",
    navCompliance: "الأمان والامتثال",
    footerDesc: "منصة التشغيل المؤسسية الموثوق بها من قِبَل شركات السوق المتوسطة في أمريكا الشمالية وأوروبا والشرق الأوسط وشمال أفريقيا.",
    footerPlatform: "المنصة",
    footerCompany: "الشركة",
    footerResources: "الموارد",
    footerLegal: "القانوني",
    footerCopyright: "© 2026 Omnivio Inc. جميع الحقوق محفوظة. المقر الرئيسي: مونتريال، كيبيك، كندا",
    footerPlatformLinks: ["سلسلة التوريد", "المالية", "المشتريات", "إدارة علاقات العملاء", "مكتب إدارة المشاريع", "الذكاء الاصطناعي والتحليلات", "إدارة خدمات تكنولوجيا المعلومات", "اللوجستيات"],
    footerCompanyLinks: ["من نحن", "الوظائف", "المدونة", "الصحافة", "الشركاء"],
    footerResourcesLinks: ["الوثائق", "مرجع API", "صفحة الحالة", "الأمان", "سجل التغييرات"],
    footerLegalLinks: ["سياسة الخصوصية", "شروط الخدمة", "سياسة ملفات تعريف الارتباط", "اللائحة الأوروبية لحماية البيانات", "PIPEDA"],
  },

  tr: {
    cta: "Ücretsiz Dene",
    login: "Giriş Yap",
    tagline: "Kurumsal İşletim Sistemi",
    sub: "Satın alma, finans, tedarik zinciri, İK, CRM ve yapay zekayı tek platformda birleştirin.",
    seePricing: "Fiyatları Gör",
    viewPricing: "Fiyatları Gör",
    noCreditCard: "Kredi kartı gerekmez",
    freeTrial: "14 gün ücretsiz deneme",
    cancelAnytime: "İstediğiniz zaman iptal edin",
    heroBadge: "Yapay Zeka Destekli Kurumsal Platform · 40+ Modül · Ölçeklenebilir",
    completePlatform: "Tam Platform",
    everythingYouNeed: "İşletmenizin ihtiyaç duyduğu her şey",
    everythingDesc: "40'tan fazla kurumsal modül, tamamen entegre, yapay zeka destekli — satın almadan müşteri teslimatına kadar.",
    seeAllModules: "Tüm 40+ modülü ve fiyatlandırmayı gör",
    builtInAI: "Yerleşik Yapay Zeka",
    intelligenceAtEveryLayer: "Her katmanda zeka",
    trustedBy: "Dünya genelinde operasyon ekipleri tarafından güvenilen",
    trustedDesc: "Perakende, üretim, dağıtım ve hizmetler alanındaki orta ölçekli şirketler.",
    integratesWith: "Mevcut altyapınızla entegre olur",
    securityTitle: "Kurumsal düzeyde güvenlik ve uyumluluk",
    securityDesc: "SOC 2 Tip II sertifikalı, ISO 27001 uyumlu, GDPR ve PIPEDA uyumlu. Verileriniz dinlenme ve iletim sırasında şifrelenir. Çok kiracılı izolasyon. Tam denetim izi.",
    readyTitle: "Operasyonlarınızı birleştirmeye hazır mısınız?",
    readyDesc: "14 günlük ücretsiz denemenizi başlatın. Tüm modüllere tam erişim. Kredi kartı gerekmez.",
    learnMore: "Daha fazla öğren",
    forecastAccuracyLabel: "Talep Tahmin Doğruluğu",
    forecastAccuracyVs: "Sektör ortalamasının 71%'ine karşı",
    ai1Title: "Tahmine Dayalı Talep Tahmini",
    ai1Desc: "ML modelleri mevsimselliği, hızı ve piyasa sinyallerini analiz ederek otomatik olarak ikmal önerileri üretir.",
    ai2Title: "Belge OCR ve Otomatik Eşleme",
    ai2Desc: "Yapay zeka, faturalardan, konşimentolardan ve gümrük formlarından verileri çıkarır — Satın Alma Siparişleri ve Konteyner kayıtlarını otomatik olarak günceller.",
    ai3Title: "Rota Optimizasyonu",
    ai3Desc: "Yapay zeka destekli TSP algoritmaları yakıt maliyetlerini en aza indirir ve tüm filonuz için gerçek zamanlı tahmini varış sürelerini hesaplar.",
    ai4Title: "Tedarikçi Performansı Yapay Zekası",
    ai4Desc: "Düşük performanslı tedarikçiler için otomatik 90 günlük iyileştirme planları, kök neden analizi ve yükseltme tetikleyicileri.",
    modProcurement: "Satın Alma",
    modProcurementDesc: "Satın alma siparişi yaşam döngüsü, 3 yönlü eşleşme, bütçe kontrolü, tedarikçi yönetimi",
    modSupplyChain: "Tedarik Zinciri & WMS",
    modSupplyChainDesc: "Envanter, ASN, barkodlar, depo kat planı, lot takibi",
    modFinance: "Finans & Döviz",
    modFinanceDesc: "Bütçe takibi, fatura mutabakatı, hesap planı, UFRS/GAAP",
    modPMO: "PMO & Projeler",
    modPMODesc: "Gantt, sprint, zaman takibi, kaynak planlaması, paydaş portalı",
    modCRM: "CRM & Satış",
    modCRMDesc: "Pipeline, teklifler, 360° müşteri görünümü, satış yürütme, yapay zeka tahmini",
    modAI: "Yapay Zeka & Analitik",
    modAIDesc: "Tahmine dayalı bakım, talep tahmini, OCR, rota optimizasyonu",
    modITSM: "ITSM & Yardım Masası",
    modITSMDesc: "Bilet yönetimi, SLA takibi, değişiklik talepleri, CMDB",
    modLogistics: "Lojistik & Filo",
    modLogisticsDesc: "Filo yönetimi, yük konsolidasyonu, çok duraklı manifestolar, yakıt optimizasyonu",
    navPlatform: "Platform",
    navPricing: "Fiyatlar",
    navIndustries: "Sektörler",
    navFAQ: "SSS",
    navContact: "İletişim",
    navAllModules: "Tüm Modüller",
    navSupplyChain: "Tedarik Zinciri & WMS",
    navFinance: "Finans & Muhasebe",
    navProcurement: "Satın Alma",
    navCRM: "CRM & Satış",
    navPMO: "PMO & Projeler",
    navAI: "Yapay Zeka & Analitik",
    navITSM: "ITSM & Yardım Masası",
    navLogistics: "Lojistik & Filo",
    navRetail: "Perakende & Planogram",
    navHR: "İK & Yetenek",
    navCompliance: "Güvenlik & Uyumluluk",
    footerDesc: "Kuzey Amerika, Avrupa ve MENA genelinde orta ölçekli şirketler tarafından güvenilen kurumsal işletim platformu.",
    footerPlatform: "Platform",
    footerCompany: "Şirket",
    footerResources: "Kaynaklar",
    footerLegal: "Yasal",
    footerCopyright: "© 2026 Omnivio Inc. Tüm hakları saklıdır. Merkez: Montréal, QC, Kanada",
    footerPlatformLinks: ["Tedarik Zinciri", "Finans", "Satın Alma", "CRM", "PMO", "Yapay Zeka & Analitik", "ITSM", "Lojistik"],
    footerCompanyLinks: ["Hakkımızda", "Kariyer", "Blog", "Basın", "Ortaklar"],
    footerResourcesLinks: ["Dokümantasyon", "API Referansı", "Durum Sayfası", "Güvenlik", "Değişiklik Günlüğü"],
    footerLegalLinks: ["Gizlilik Politikası", "Hizmet Şartları", "Çerez Politikası", "GDPR", "PIPEDA"],
  },
};

export function useI18n() {
  const [lang, setLang] = useState("en");
  return { lang, setLang, t: I18N[lang] || I18N.en };
}

export default function OmnivioLayout({ children, lang, setLang, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSub, setActiveSub] = useState(null);
  const [langOpen, setLangOpen] = useState(false);
  const currentLang = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];
  const isRTL = lang === "ar";

  const NAV_KEY_MAP = {
    platform:    t.navPlatform,
    pricing:     t.navPricing,
    industries:  t.navIndustries,
    faq:         t.navFAQ,
    contact:     t.navContact,
    allModules:  t.navAllModules,
    supplyChain: t.navSupplyChain,
    finance:     t.navFinance,
    procurement: t.navProcurement,
    crm:         t.navCRM,
    pmo:         t.navPMO,
    ai:          t.navAI,
    itsm:        t.navITSM,
    logistics:   t.navLogistics,
    retail:      t.navRetail,
    hr:          t.navHR,
    compliance:  t.navCompliance,
  };

  return (
    <div className={`min-h-screen bg-white font-inter ${isRTL ? "rtl" : "ltr"}`} dir={isRTL ? "rtl" : "ltr"}>
      {/* ── Topbar ── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-neutral-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center">
                <span className="text-white font-black text-sm">O</span>
              </div>
              <span className="font-black text-xl tracking-tight text-neutral-900">Omnivio</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map(link => (
                <div key={link.key} className="relative group"
                  onMouseEnter={() => link.sub && setActiveSub(link.key)}
                  onMouseLeave={() => setActiveSub(null)}>
                  <Link to={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors">
                    {NAV_KEY_MAP[link.key]}
                    {link.sub && <ChevronDown className="w-3.5 h-3.5" />}
                  </Link>
                  {link.sub && activeSub === link.key && (
                    <div className={`absolute top-full mt-1 w-64 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50 ${isRTL ? "right-0" : "left-0"}`}>
                      {link.sub.map(s => (
                        <Link key={s.key} to={s.href}
                          className="block px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-blue-50 transition-colors">
                          {NAV_KEY_MAP[s.key]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Language switcher */}
              <div className="relative">
                <button onClick={() => setLangOpen(o => !o)}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-neutral-600 border border-neutral-200 rounded-lg hover:bg-neutral-50">
                  <span>{currentLang.flag}</span>
                  <span className="hidden sm:inline">{currentLang.label}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                {langOpen && (
                  <div className={`absolute top-full mt-1 w-40 bg-white rounded-xl shadow-xl border border-neutral-100 py-2 z-50 ${isRTL ? "left-0" : "right-0"}`}>
                    {LANGUAGES.map(l => (
                      <button key={l.code} onClick={() => { setLang(l.code); setLangOpen(false); }}
                        className={`w-full text-left flex items-center gap-2 px-4 py-2 text-sm hover:bg-blue-50 transition-colors ${lang === l.code ? "text-blue-600 font-semibold" : "text-neutral-600"}`}>
                        <span>{l.flag}</span>{l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <a href="https://app.omnivio.com/Dashboard" className="hidden sm:inline-flex text-sm font-medium text-neutral-600 hover:text-neutral-900 px-3 py-2">{t.login}</a>
              <Link to="/contact"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors">
                {t.cta}
              </Link>
              <button className="lg:hidden p-2" onClick={() => setMobileOpen(o => !o)}>
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-neutral-100 bg-white max-h-[80vh] overflow-y-auto">
            {NAV_LINKS.map(link => (
              <div key={link.key}>
                <Link to={link.href} onClick={() => setMobileOpen(false)}
                  className="block px-6 py-3 text-sm font-semibold text-neutral-700 hover:bg-blue-50">
                  {NAV_KEY_MAP[link.key]}
                </Link>
                {link.sub && link.sub.map(s => (
                  <Link key={s.key} to={s.href} onClick={() => setMobileOpen(false)}
                    className="block px-10 py-2 text-xs text-neutral-500 hover:bg-blue-50">
                    {NAV_KEY_MAP[s.key]}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Page content */}
      {children}

      {/* ── Footer ── */}
      <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-black text-sm">O</span>
                </div>
                <span className="font-black text-xl text-white">Omnivio</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">{t.footerDesc}</p>
              <div className="flex gap-2 flex-wrap">
                {["SOC 2 Type II", "ISO 27001", "GDPR", "PIPEDA"].map(cert => (
                  <span key={cert} className="text-[10px] font-semibold px-2 py-1 bg-neutral-800 text-neutral-300 rounded border border-neutral-700">{cert}</span>
                ))}
              </div>
            </div>
            {[
              { titleKey: "footerPlatform", linksKey: "footerPlatformLinks" },
              { titleKey: "footerCompany",  linksKey: "footerCompanyLinks" },
              { titleKey: "footerResources",linksKey: "footerResourcesLinks" },
              { titleKey: "footerLegal",    linksKey: "footerLegalLinks" },
            ].map(col => (
              <div key={col.titleKey}>
                <p className="text-sm font-semibold text-white mb-3">{t[col.titleKey]}</p>
                <ul className="space-y-2">
                  {(t[col.linksKey] || []).map(l => (
                    <li key={l}><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-neutral-500">{t.footerCopyright}</p>
            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span>🇨🇦 Canada</span><span>🇺🇸 USA</span><span>🇫🇷 France</span><span>🇩🇪 Germany</span><span>🇲🇦 Morocco</span><span>🇹🇷 Turkey</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
