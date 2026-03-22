import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT || 3001;

const SMTP2GO_API_KEY = process.env.SMTP2GO_API_KEY;
const SMTP2GO_SENDER = process.env.SMTP2GO_SENDER;
const CONTACT_TO = process.env.CONTACT_TO;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*";
const allowedOrigins =
  CORS_ORIGIN === "*"
    ? "*"
    : CORS_ORIGIN.split(",").map((origin) => origin.trim()).filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins === "*") return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("CORS origin not allowed"));
    },
  })
);
app.use(express.json({ limit: "1mb" }));

const requiredEnvMissing = () => {
  return !SMTP2GO_API_KEY || !SMTP2GO_SENDER || !CONTACT_TO;
};

async function smtp2goSend({ to, subject, text_body, html_body }) {
  const response = await fetch("https://api.smtp2go.com/v3/email/send", {
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
  return data;
}

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/contact", async (req, res) => {
  if (requiredEnvMissing()) {
    return res.status(500).json({
      ok: false,
      error: "Server email is not configured",
    });
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

    return res.json({ ok: true });
  } catch (error) {
    return res.status(502).json({ ok: false, error: error.message || "Email send failed" });
  }
});

app.listen(port, () => {
  console.log(`omnivio-contact-api listening on ${port}`);
});
