# Publish AC Advisory on Wix

Wix does not open this React project the way Netlify does. Upload the **built site**, not the source folder.

## 1. Build the Wix package

From this branch:

```bash
npm install
npm run build:wix
```

That writes `wix-upload/ac-advisory-wix.zip` (under Wix’s 20 MB / 3 MB-per-file limits). Hash routes are on so Manufacturers, Retailers, and the other pages still open after refresh.

## 2. Drop it on Wix

1. Open [https://www.wix.com/headless/drop](https://www.wix.com/headless/drop).
2. Drag `wix-upload/ac-advisory-wix.zip` onto the page (or choose the zip).
3. Wait for the live `*.wix-site-host.com` URL and open it.
4. Sign in / claim the project with the customer’s Wix account so it stays up.
5. In the Wix dashboard, connect their domain (Settings → Domains).

Do **not** upload `src/`, `package.json`, or the GitHub repo. Wix will not build those.

## Inquiries

The three lead forms (Manufacturers, Retailers, Contact) email the inbox in `brand.notifyEmail` (override with `VITE_NOTIFY_EMAIL`). The first live submission sends a confirmation link from FormSubmit — click it once so future notes arrive automatically.

## What this is not

Rebuilding the pages inside the classic Wix Editor is a full redesign, not a file move. Use Headless Drop if they want this site as-is.
