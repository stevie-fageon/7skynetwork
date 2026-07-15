# 7skynetwork

Marketing agency website — influencer representation, advertising campaigns, and brand negotiation.

Built with **Next.js 14** (App Router) + **TypeScript** + **Tailwind CSS** + **Framer Motion**, ready to deploy on **Vercel** at **7skynetwork.net**.

---

## 1. Run it locally

> Requirements: **Node.js 18+** (Node 20 or 22 recommended).

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

To enable the contact form locally, copy the example env file and fill it in:

```bash
cp .env.example .env.local
```

Then edit `.env.local` (see [section 4](#4-set-up-the-contact-form-emails)).

---

## 2. Project structure

```
app/
  layout.tsx            Root layout, SEO metadata, fonts
  page.tsx              Single-page composition (Navbar → Hero → … → Footer)
  globals.css           Tailwind + theme (gradients, glass, buttons)
  api/contact/route.ts  POST endpoint that sends the contact email (Resend)
components/
  Navbar, Hero, Services, About, Process, Contact, Footer, Reveal, icons
lib/
  site.ts               ✏️  Site-wide content (name, email, socials, nav)
  schema.ts             Zod validation shared by form + API
```

### Editing content

All text, links, and social profiles live in **`lib/site.ts`** — edit that one file to update the logo, email, and social links everywhere. Section copy is in each `components/*.tsx` file.

---

## 3. Deploy to Vercel

### Step 3.1 — Push to GitHub

Create a new (empty) repository on GitHub, then from this folder:

```bash
git init
git add .
git commit -m "Initial commit — 7skynetwork website"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO>.git
git push -u origin main
```

### Step 3.2 — Import into Vercel

1. Go to **https://vercel.com/new**
2. Import the GitHub repository you just pushed.
3. Vercel auto-detects Next.js — keep the defaults.
4. Click **Deploy**. ✅ (Takes ~1 minute.)

Your site is now live on a `*.vercel.app` URL.

---

## 4. Set up the contact form (emails)

The contact form sends emails through **[Resend](https://resend.com)** (free tier: 100 emails/day).

1. **Create a free Resend account** at https://resend.com
2. Go to **Dashboard → API Keys → Create API Key** → copy the key (starts with `re_`).
3. In your **Vercel project → Settings → Environment Variables**, add:

   | Name | Value | Example |
   |------|-------|---------|
   | `RESEND_API_KEY` | your Resend API key | `re_abc123…` |
   | `CONTACT_EMAIL` | where messages are delivered | `hello@7skynetwork.net` |
   | `RESEND_FROM_EMAIL` | the "from" address | `onboarding@resend.dev` *(see note)* |

4. **Redeploy** for the variables to take effect (Vercel → Deployments → ⋯ → Redeploy).

> **Note on `RESEND_FROM_EMAIL`:** On the free Resend plan, you can only send from a **verified domain**. Until you verify `7skynetwork.net` (step 6), use the test address `onboarding@resend.dev` — it only sends to *your own* Resend account email, which is perfect for testing. Once the domain is verified, switch it to `website@7skynetwork.net`.

---

## 5. Connect the domain `7skynetwork.net`

### Step 5.1 — Add the domain in Vercel

1. In your Vercel project → **Settings → Domains**
2. Enter **`7skynetwork.net`** → click **Add**.
3. Vercel also recommends adding the **`www.7skynetwork.net`** variant — add it too and choose "Redirect to `7skynetwork.net`".

### Step 5.2 — Point DNS at your registrar

Vercel will show you the exact records to add. They look like this:

**Option A — Nameservers (easiest, recommended if you don't host email elsewhere):**
Point your domain's nameservers to Vercel's (Vercel shows the two `ns.vercel-dns.com` addresses). This lets Vercel manage everything automatically.

**Option B — DNS records (recommended if you already use this domain for email):**
Add these at your domain registrar (GoDaddy, Namecheap, OVH, etc.):

| Type | Name / Host | Value |
|------|-------------|-------|
| **A** | `@` | `76.76.21.21` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

Then add the **verification TXT record** Vercel gives you (so Vercel confirms you own the domain):

| Type | Name | Value |
|------|------|-------|
| **TXT** | `_vercel` | `vc-domain-verify=7skynetwork.net,xxxxxx` |

### Step 5.3 — Wait for propagation

DNS changes propagate in **a few minutes to 48 hours** (usually under an hour). Check status at https://www.whatsmydns.net. Vercel issues the **SSL certificate automatically** once DNS resolves — you'll see a green "Valid Configuration" in the Domains tab.

---

## 6. Verify `7skynetwork.net` as a sending domain (Resend)

So the contact form can send from a real address (e.g. `website@7skynetwork.net`):

1. Resend Dashboard → **Domains → Add Domain** → enter `7skynetwork.net`.
2. Resend gives you DNS records (SPF, DKIM, etc.) — add them at your registrar.
3. Once status shows **Verified**, update `RESEND_FROM_EMAIL` to `website@7skynetwork.net` in Vercel and redeploy.

---

## 7. Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

---

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) (form validation)
- [Resend](https://resend.com) (transactional email)
- [Geist](https://vercel.com/font) (typography)
