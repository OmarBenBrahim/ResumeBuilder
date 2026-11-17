# Career record — Omar Ben Brahim

The single source of truth for every resume and cover letter. Only confirmed facts go here.
Anything not yet confirmed lives in **Unverified** at the bottom and must not be used until Omar confirms it.
Contact details and links live in `profile.yaml`.

**Experience:** 6 years (professional work since Jan 2021).
**Positioning:** Full Stack Developer (React, Next.js, TypeScript, Node.js, React Native) who also builds AI voice agents and workflow automation.

---

## Experience

### Freelance — Full Stack Developer & AI Automation Developer
**Jan 2025 – Present** · Remote
On resumes this role is just **Freelance**. Don't name Lean Orchestr there unless Omar asks.
Context, for interviews only: for part of this period (not all of it), Omar worked with **Lean Orchestr**, an informal (unregistered) group led by one person who brings in clients from several countries. On that work Omar received tasks through the lead and **did not talk to the clients directly**, so never claim client-facing work, requirement gathering with clients, or stakeholder management for it. The lead can act as a reference.

**Ownership:**
- **Built from scratch:** workforce-mcp, workforce-candidate, and the AI voice agents.
- **Took over and extended:** the Fusion180 n8n pipeline. It already existed when Omar joined; he fixed it and added many features (multi-search domain finding, Hunter fallback, provider audit, model benchmarks, status/recovery workflows). Use "took over and extended" or "redesigned", never "built".
- **Main developer since Feb 2026:** WorkForce-Connect. Other developers worked on it before (since Nov 2025 or earlier). Use "main developer", not "created" or "founded".
- **Contributed to:** linkedin-crm and Trakil. These are existing products, so use contribution wording.

**WorkForce (Belgian staffing company, work-force.be) — main developer since Feb 2026**
- WorkForce-Connect: a Strapi API (TypeScript), React Admin backoffice, and Expo/React Native worker app.
- Shipped major features:
  - worker requests (submit, review, approve, decline, notify client)
  - document compliance (upload, approve/reject/hide, expiry and history reports, coverage)
  - weekly client invoicing with Exact Online (scheduled generation, approve/reject/retry)
  - worker self-billing invoices with Peppol e-invoicing
  - absences and contract termination
  - Dropbox Sign e-signatures and SharePoint document sync
  - migration of legacy Spott documents
  - role-based permissions bootstrap
- Owns DevOps and releases end to end: the GitHub Actions pipeline (versioned Docker images pushed to AWS ECR for test/preview, preprod/staging, and production/master), the servers and deployments for every environment, the database and its daily backup/restore, merges between environments, and the mobile app releases to the App Store and Google Play (Expo EAS).
- **workforce-mcp (built):** HTTP MCP server that lets AI clients (e.g. Claude) read and write WorkForce data. OAuth login uses the same dashboard credentials. Each call forwards the user's Strapi JWT, so the user's own role permissions apply. It has delete safeguards, an audit log of every write, temporary file download links with PDF/image/CSV previews, and a unit-test suite. Tech: TypeScript, MCP SDK, Express, Zod, Docker.
- **workforce-candidate (built):** candidate showcase site on work-force.be where prospective clients browse anonymised workers, filter by skill and category, see trust badges ("WorkForce Trusted/Verified"), and request an introduction. Data is synced from Spott. Tech: Next.js 16, React 19, Prisma, next-intl, Zod, Vitest, Playwright, Vercel.
- Tech overall: TypeScript, Strapi, React Admin, Material UI, Expo, React Native, Docker, GitHub Actions, AWS (ECR, SES), Exact Online, Peppol, Dropbox Sign, SharePoint, Sentry, Puppeteer, Exact Online, Peppol, Dropbox Sign, SharePoint, n8n.

**Fusion180 — AI lead-enrichment pipeline (n8n)**
- Processes 173K insurance policy records from BigQuery. It finds each company's official domain (SerpApi + OpenAI judge, an exact-name website check, and Openmart), enriches it with Apollo, routes it by size and industry, sends unclear cases to human review in Google Sheets (Apps Script webhook back to n8n), finds contacts (Apollo, with Hunter as fallback), cleans fields with OpenAI for email personalization, and sends leads to Instantly. Status is tracked in BigQuery so no company is processed twice, and an error workflow sends email alerts.
- Benchmarked OpenAI models (GPT-4.1-mini, GPT-5-mini, GPT-5-nano) for the domain-matching judge, and audited the data providers.
- **Confirmed metrics (measured, Nov 2026 redesign):** per 1,000 leads, contacts sent to Instantly went from 30 to 254 (**8.5×**) and companies with contacts from 21 to 173 (**8.3×**). Domains found **+19%** (536 → 636). Apollo's people-search success went from **21% to 35%**. Contact-run errors went to **0** (from runs stuck in processing).
- Tech: n8n, BigQuery, Python, Google Apps Script, Google Sheets, OpenAI, SerpApi, Apollo, Hunter, Instantly.

**AI voice agents & automation (built)**
- AI voice appointment-booking agent: answers inbound calls, collects the required information, answers common questions, creates GoHighLevel appointments, and saves caller details, scheduling info, and a conversation summary in CRM meeting notes.
- AI customer-support voice assistant: handles product search, order placement, order-status checks, and support-meeting booking, linked to CRM records.
- Call routing to the right AI assistant or human agent based on intent and availability (Twilio, Vapi, ElevenLabs, queue/IVR logic). GoHighLevel and n8n workflows with webhook logic.
- **Confirmed metrics:** client operational workload reduced by 40–60%; 70%+ of routine customer inquiries handled automatically; 100+ AI-handled calls per day; 95% speech-recognition accuracy; 90%+ customer satisfaction with the AI agents; 3x faster lead qualification; n8n workflows with 50+ nodes; integrations across 10+ platforms; workflows processing 100+ automated tasks daily.
- Client testimonial: "Omar's AI automation reduced our support workload by 50%."
- Tech: Twilio, Vapi, ElevenLabs, OpenAI, n8n, GoHighLevel, Ringover, webhooks.

**Other full-stack work (built)**
- Full-stack web apps, dashboards, CRM screens, and automation tools with React, Next.js, TypeScript, Node.js, and Supabase, deployed on Vercel.
- **Confirmed metrics:** 5+ production Next.js applications delivered on deadline.

**linkedin-crm (contributed)** — LinkedIn CRM and outreach automation: Next.js front end, Django REST back end, PostgreSQL, Manifest V3 browser extension. Live: https://www.outreachgenie.ai/
- Improved onboarding and extension setup, and refactored the campaign-creation UI.
- Added inline prospect editing, current-company display, active-campaign tracking, and lead-enrichment states.
- Improved authentication redirects and loading states.
- Fixed extension messaging and sidebar race conditions.
- Tech: Next.js, React, TypeScript, Tailwind CSS, Radix UI, TanStack Table, Zod, Django REST Framework, PostgreSQL, Manifest V3, Chrome Extension APIs, esbuild, Playwright, Vitest, pnpm, Docker.

**Trakil (contributed; worked from a cloned repository)** — crypto token security scanner: Next.js app and admin dashboard, Flask scanning API. Live: https://www.ghanemlab.com/en
- Added and refined token analysis views and multi-provider security data (GoPlus, CertiK, Honeypot, TokenSniffer, DexScreener, CoinGecko), with multilingual security content.
- Improved Flask scanner API request/response handling. Tested with Vitest and pytest.
- Tech: Next.js, TypeScript, Tailwind CSS, next-intl, Python, Flask, Supabase, PostgreSQL, SQLAlchemy, Redis, Docker, Sentry.

### NNA Resources — Front-End Developer & React Native Developer
**Apr 2023 – Nov 2024**
- Turned Figma designs into interactive websites and mobile apps with Next.js, React, Astro, WordPress, and React Native.
- Built reusable components, custom hooks, REST API integrations, native integrations, and real-time chat with WebSockets.
- Worked on troubleshooting and performance with the team, **improving load times by 15%** (confirmed metric).
- Built and deployed mobile apps with React Native.
- Built SEO-optimized, multilingual websites with Next.js and Astro (English, Arabic, French).
- **Confirmed metrics:** 3+ apps published to the App Store and Google Play, rated 4.5+ stars; app startup time 30% faster (lazy loading); bundle size 25% smaller (code splitting); memory use 20% lower; 90+ Lighthouse scores.
- Tech: React Native, Expo, Next.js, Astro, React, WordPress, JavaScript, TypeScript, Tailwind CSS.

**KidCare (built at NNA Resources)** — Google Play: https://play.google.com/store/apps/details?id=com.kidcare · Website: https://kidcare-app.com/
- React Native mobile app for parents to monitor and manage their children's activities, with Konnect, Stripe, and Solid Tel App Link payments.
- Responsive, SEO-optimized website built with Astro and Framer Motion, with multilingual content (i18n).
- **Confirmed metrics:** page load time improved by 30%; 1000+ payments processed without issues; supports 3 languages.

### 3W WIT Web Agency — Full Stack Developer
**Oct 2022 – Jan 2023**
- Added features and fixed bugs in existing client applications built with Symfony/PHP.
- Built dynamic interfaces with AJAX and jQuery, and worked with SQL.
- Diagnosed and resolved production bugs.
- Took part in team code reviews.
- Tech: Symfony, PHP, SQL, AJAX, jQuery, CSS.

### Cloud Monsters — Full Stack Developer
**Jan 2021 – Aug 2022**
- Built CodeKids, an educational website that teaches children programming through Google Blockly games. Live: https://code-kids-mu.vercel.app/
- Added multilingual support and role-based access for public users, students, teachers, and administrators.
- Tech: JavaScript, HTML, Tailwind CSS, Firebase, Google Blockly.

### Omitted from resumes
- **Distinct Lab** (Jun 2022 – Oct 2022): Angular 14 migration, Material UI, Firebase. It was a short role that overlapped others. Omar decided to leave it off resumes; mention it only if a form asks for full employment history.

---

## Projects

KidCare is listed under NNA Resources. Don't repeat it here on a resume that already shows it under NNA.

### Messaging App — Code: https://github.com/OmarBenBrahim/Messenger · API: https://github.com/OmarBenBrahim/Messenger_API
- Personal project. Real-time messaging web app with Angular 14, ASP.NET, SQL, and Cloudinary: live messages, photo uploads, and admin approval of photos.
- **Confirmed metrics:** 500+ concurrent users; sub-100ms message delivery; 99.9% uptime.

### Career-wide metrics (confirmed)
- 8+ production applications deployed; applications serving 10K+ users.
- Component reuse cut development time by 30%; CI/CD pipelines save 10+ hours per week.

### Resume Builder (this repo) — https://github.com/OmarBenBrahim/ResumeBuilder
- AI-assisted resume pipeline: a career record plus rules plus a Typst template, producing a tailored PDF for each job.

---

## Skills

Proficiency reflects real use. **Professional** means used in paid work, **Projects only** means personal or student projects.

- **Professional, strong:** React, Next.js, TypeScript, Strapi, React Admin, Prisma, MCP servers, JavaScript, React Native, Expo, Node.js, Tailwind CSS, HTML, CSS, REST APIs, Webhooks, Supabase, Git, Vercel
- **Professional, AI & automation:** n8n lead-enrichment pipelines, BigQuery, Apollo, SerpApi, Hunter, Instantly, Google Apps Script, AI voice agents, Vapi, ElevenLabs, Twilio, OpenAI, n8n, GoHighLevel, Ringover, IVR/call routing, CRM integration, workflow automation
- **Professional, used on contributed projects:** Django REST Framework, Flask, Python, PostgreSQL, SQLAlchemy, Redis, Docker, GitHub Actions, AWS (ECR, SES), Exact Online, Peppol, Dropbox Sign, SharePoint, Manifest V3 / Chrome Extension APIs, Playwright, Vitest, pytest, Sentry, Material UI, Radix UI, TanStack Table, Zod
- **Professional, earlier roles:** Astro, WordPress, WebSockets, Symfony, PHP, SQL, jQuery, AJAX, Firebase, Google Blockly, Angular, Figma
- **Projects only (no work experience):** .NET / ASP.NET Core, Java (student project), Cloudinary
- **Unconfirmed, ask before using:** Express.js, Hono, MongoDB, MySQL, Google Cloud, Cassandra, Linux, Jira, Agile/Scrum

**Do not claim** (add skills here as Omar rules them out):
- Professional .NET or Java experience: projects only.

---

## Education
- Higher Institute of Technological Studies of Nabeul (ISET Nabeul): Bachelor's Degree in Computer Science, 2021
- Baccalauréat in Computer Science, 2018

## Languages
English, Arabic, French. Levels are not confirmed yet, so don't state them.

## Certifications
- JavaScript Essential Training, LinkedIn Learning, 2022
- Complete Guide to Angular, Udemy, 2022
- Build an App with ASP.NET Core and Angular, Udemy, 2023

---

## Unverified — do NOT use until Omar confirms

Omar confirmed all the metrics on 2026-11-17, and they now sit under their roles above. These non-numeric claims from older notes are still unconfirmed:
- NNA: offline-first sync, Redux Toolkit/Zustand/React Query, Jest, Fastlane.
- Messaging App: SignalR, JWT.
- Freelance: Supabase row-level security and Realtime, shadcn/ui, Railway, Anthropic/Claude API, outbound calls.
- KidCare: whether Omar "led front-end architecture" (confirmed only that he built it at NNA).
- Portfolio site: "100 Lighthouse score".
