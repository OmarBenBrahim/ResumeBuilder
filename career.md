# Career record — Omar Ben Brahim

The single source of truth for every resume and cover letter. Only confirmed facts go here.
Anything not yet confirmed lives in **Unverified** at the bottom and must not be used until Omar confirms it.
Contact details and links live in `profile.yaml`.

**Experience:** 6 years (professional work since Jan 2021).
**Positioning:** Full Stack Developer (React, Next.js, TypeScript, Node.js, React Native) who also builds AI voice agents and workflow automation.

---

## Experience

### Freelance — Full Stack Developer & AI Automation Developer
**Jan 2025 – Present** · Remote, international clients

**Ownership:** Built the AI voice agents and automation workflows. **Contributed to** WorkForce-Connect, linkedin-crm, and Trakil: these are existing products owned by others, so describe them with contribution wording (contributed to, improved, added, enhanced) and never with "created", "built the platform" or "owned".

**AI voice agents & automation (built)**
- AI voice appointment-booking agent: answers inbound calls, collects the required information, answers common questions, creates GoHighLevel appointments, and saves caller details, scheduling info, and a conversation summary in CRM meeting notes. Designed the CRM handoff so qualified leads arrive with call details, appointment context, and next-step notes.
- AI customer-support voice assistant: handles product search, order placement, order-status checks, and support-meeting booking, and links each flow to CRM records so the support team continues from the saved customer context.
- Call routing: sends incoming callers to the right AI assistant or human agent based on intent, availability, and support need, using Twilio, Vapi, ElevenLabs, and queue/IVR logic. Also set up phone numbers.
- GoHighLevel and n8n workflows with API/webhook logic for contact updates, appointment records, call outcomes, follow-up tasks, and support context.
- Automated lead qualification, appointment booking, customer support, and handoff to humans.
- **Confirmed metrics:** client operational workload reduced by 40–60%; 70%+ of routine customer inquiries handled automatically; 100+ AI-handled calls per day; 95% speech-recognition accuracy; 90%+ customer satisfaction with the AI agents; 3x faster lead qualification; n8n workflows with 50+ nodes; integrations across 10+ platforms; workflows processing 100+ automated tasks daily.
- Client testimonial: "Omar's AI automation reduced our support workload by 50%."
- Tech: Twilio, Vapi, ElevenLabs, OpenAI, n8n, GoHighLevel, Ringover, webhooks.

**Full-stack client work (built)**
- Full-stack web apps, client dashboards, CRM screens, and automation tools with React, Next.js, TypeScript, Node.js, and Supabase, deployed on Vercel.
- **Confirmed metrics:** 5+ production Next.js applications delivered on deadline.

**WorkForce-Connect (contributed)** — workforce compliance platform: Strapi CMS, React Admin backoffice, Expo/React Native worker app. Live: https://work-force.be/
- Improved the worker document flows (upload, list, open/download) and the admin review flows (approve, reject, hide/unhide, visibility).
- Added compliance-coverage logic and document-type handling so workers and admins see the correct document states.
- Enhanced push-notification registration for worker devices.
- Supported worksheet signing and document sync with Dropbox Sign and SharePoint.
- Added a GitHub Actions pipeline that builds the CMS and web Docker images, authenticates to AWS, pushes versioned images to AWS ECR, and applies branch-specific CMS URLs.
- Improved error handling around document download, upload, and PDF workflows.
- Tech: React, TypeScript, Vite, React Admin, Material UI, Strapi, SQLite, Expo, Docker, GitHub Actions, AWS ECR, AWS SES, Sentry, Puppeteer.

**linkedin-crm (contributed)** — LinkedIn CRM and outreach automation: Next.js front end, Django REST back end, PostgreSQL, Manifest V3 browser extension. Live: https://www.outreachgenie.ai/
- Improved onboarding and extension setup (skip/mobile handling, setup UI).
- Refactored the campaign-creation UI and improved the campaign and prospect screens.
- Added inline prospect editing, current-company display, active-campaign tracking, and lead-enrichment states.
- Improved authentication redirects and loading states.
- Fixed extension messaging and sidebar race conditions, and guarded tab behavior in automation flows.
- Tech: Next.js, React, TypeScript, Tailwind CSS, Radix UI, TanStack Table, Zod, Django REST Framework, PostgreSQL, Manifest V3, Chrome Extension APIs, esbuild, Playwright, Vitest, pnpm, Docker.

**Trakil (contributed; worked from a cloned repository)** — crypto token security scanner: Next.js app and admin dashboard, Flask scanning API. Live: https://www.ghanemlab.com/en
- Added and refined token analysis views: contract-address scans, token metadata, risk levels, market context, and security alerts.
- Displayed multi-provider security data from GoPlus, CertiK, Honeypot, TokenSniffer, DexScreener, and CoinGecko.
- Improved request/response handling for scan results and bearer-token-protected scanner calls.
- Added multilingual security content.
- Tested with Vitest (Next.js) and pytest (Flask).
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

- **Professional, strong:** React, Next.js, TypeScript, JavaScript, React Native, Expo, Node.js, Tailwind CSS, HTML, CSS, REST APIs, Webhooks, Supabase, Git, Vercel
- **Professional, AI & automation:** AI voice agents, Vapi, ElevenLabs, Twilio, OpenAI, n8n, GoHighLevel, Ringover, IVR/call routing, CRM integration, workflow automation
- **Professional, used on contributed projects:** Django REST Framework, Flask, Python, Strapi, React Admin, PostgreSQL, SQLAlchemy, Redis, Docker, GitHub Actions, AWS (ECR, SES), Manifest V3 / Chrome Extension APIs, Playwright, Vitest, pytest, Sentry, Material UI, Radix UI, TanStack Table, Zod
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
