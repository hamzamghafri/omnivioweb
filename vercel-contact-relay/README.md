# Omnivio Contact Relay (Vercel)

Deploy this folder as a separate Vercel project.

## Files to keep
- `api/contact.js`
- `vercel.json`
- `package.json`
- `.gitignore`

## Vercel Environment Variables
- `SMTP2GO_API_KEY`
- `SMTP2GO_SENDER`
- `CONTACT_TO`
- `CORS_ORIGIN`

Example `CORS_ORIGIN`:
`https://omnivio.ca,https://www.omnivio.ca`

## Frontend setting (Render)
Set:
`VITE_CONTACT_API_URL=https://<your-vercel-project>.vercel.app/api/contact`
