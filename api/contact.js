const SMTP2GO_API_URL = process.env.SMTP2GO_API_URL || "https://api.smtp2go.com/v3/email/send";
const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY || "";
const SMTP2GO_SENDER = process.env.SMTP2GO_SENDER || "";
const CONTACT_TO = process.env.CONTACT_TO || "";
const CORS_ORIGIN = process.env.CORS_ORIGIN || "https://omnivio.ca,https://www.omnivio.ca";

const normalizeOrigin = (origin) => String(origin || "").trim().replace(/\/+$/, "");
const allowedOrigins = CORS_ORIGIN === "*"
  ? "*"
  : CORS_ORIGIN.split(",").map(normalizeOrigin).filter(Boolean);

function applyCors(req, res) {
  const origin = normalizeOrigin(req.headers.origin || "");
  const allow = allowedOrigins === "*" || (origin && allowedOrigins.includes(origin));

  if (allow) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader("Vary", "Origin");
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  return allow;
}

async function smtp2goSend({ to, subject, text_body, html_body }) {
  const response = await fetch(SMTP2GO_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Smtp2go-Api-Key": SMTP2GO_API_KEY,
    },
    body: JSON.stringify({
      sender: SMTP2GO_SENDER,
      to: Array.isArray(to) ? to : [to],
      subject,
      text_body,
      html_body,
    }),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok || data?.data?.succeeded === 0) {
    const reason = data?.data?.error || data?.error || `SMTP2GO failed (${response.status})`;
    throw new Error(reason);
  }
}

export default async function handler(req, res) {
  const corsAllowed = applyCors(req, res);

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (!corsAllowed) {
    return res.status(403).json({ ok: false, error: "Origin not allowed" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!SMTP2GO_API_KEY || !SMTP2GO_SENDER || !CONTACT_TO) {
    return res.status(500).json({ ok: false, error: "Server email is not configured" });
  }

  const payload = req.body || {};
  const firstName = String(payload.first_name || "").trim();
  const lastName = String(payload.last_name || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const inquiryType = String(payload.inquiry_type || "general").trim();

  if (!firstName || !lastName || !email || !company) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const modules = Array.isArray(payload.modules) ? payload.modules.join(", ") : "";

  const textBody = [
    "New Omnivio contact form submission",
    "",
    `Inquiry Type: ${inquiryType}`,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Job Title: ${payload.job_title || ""}`,
    `Company Size: ${payload.company_size || ""}`,
    `Industry: ${payload.industry || ""}`,
    `Location: ${payload.location || ""}`,
    `Modules: ${modules}`,
    "",
    "Message:",
    `${payload.message || ""}`,
  ].join("\n");

  const htmlBody = `
    <h2>New Omnivio contact form submission</h2>
    <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Job Title:</strong> ${payload.job_title || ""}</p>
    <p><strong>Company Size:</strong> ${payload.company_size || ""}</p>
    <p><strong>Industry:</strong> ${payload.industry || ""}</p>
    <p><strong>Location:</strong> ${payload.location || ""}</p>
    <p><strong>Modules:</strong> ${modules}</p>
    <p><strong>Message:</strong></p>
    <p>${String(payload.message || "").replace(/\n/g, "<br/>")}</p>
  `;

  try {
    await smtp2goSend({
      to: CONTACT_TO,
      subject: `New contact request (${inquiryType}) - ${company}`,
      text_body: textBody,
      html_body: htmlBody,
    });

    await smtp2goSend({
      to: email,
      subject: "Thanks for contacting Omnivio",
      text_body: `Hi ${firstName},\n\nThanks for reaching out to Omnivio. We received your request and will respond within 2 business hours.\n\n- Omnivio Team`,
      html_body: `<p>Hi ${firstName},</p><p>Thanks for reaching out to Omnivio. We received your request and will respond within <strong>2 business hours</strong>.</p><p>- Omnivio Team</p>`,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(502).json({ ok: false, error: error.message || "Email send failed" });
  }
}
