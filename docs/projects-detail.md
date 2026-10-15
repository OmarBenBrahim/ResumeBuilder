# Project Details

Extended descriptions of all projects for resume customization.

---

## KidCare

### Overview

A comprehensive mobile application and website for parents to monitor and manage their children's activities, with integrated payment processing.

### Mobile App Features

- Activity monitoring and scheduling for children
- Real-time notifications for parents
- In-app payment processing (Konnect, Stripe, Solid Tel App Link)
- Secure authentication and family account management
- Push notifications for reminders and updates
- Offline mode with data sync

### Website Features

- SEO-optimized landing pages
- Multilingual support (i18n) for Arabic, English, French
- Animated UI with Framer Motion
- Fast page loads using Astro's partial hydration
- Contact forms with email integration
- Blog section for parenting tips

### Technical Stack

- **Mobile:** React Native, Expo
- **Web:** Astro, React, Framer Motion
- **Payments:** Stripe, Konnect, Solid Tel App Link
- **Backend:** Node.js, Supabase
- **i18n:** i18next, Astro i18n integration

### Results

- 30% improvement in page load time
- 4.5+ star rating on app stores
- Successfully processed 1000+ payments
- Supported 3 languages

---

## CodeKids

### Overview

An educational website designed to teach children programming through interactive Blockly games.

### Features

- Interactive programming lessons using Google Blockly
- Role-based access control for different user types (public, students, teachers, administrators)
- Multilingual support for diverse user base
- Firebase integration for real-time data and authentication
- Responsive design with Tailwind CSS

### Technical Stack

- **Frontend:** JavaScript, HTML, Tailwind CSS, Google Blockly
- **Backend:** Firebase
- **Database:** Firebase

### Results

- Successfully launched educational platform
- Supported multiple languages
- Implemented secure access controls

---

### Overview

A real-time web application for instant messaging with photo sharing capabilities and admin controls.

### Features

- Real-time message delivery using SignalR
- Photo upload and sharing with Cloudinary
- Admin panel for photo approval workflow
- User authentication and authorization
- Message history and search
- Online/offline status indicators
- Typing indicators
- Read receipts

### Technical Stack

- **Backend:** ASP.NET Core, SignalR, SQL Server
- **Frontend:** Angular 14, TypeScript, RxJS
- **Media:** Cloudinary for image storage and optimization
- **Auth:** JWT tokens, role-based access control

### Results

- Sub-100ms message delivery
- Handled 500+ concurrent users
- 99.9% uptime

---

## AI Customer Support Agents

### Overview

Intelligent AI agents that handle customer inquiries, scheduling, and task execution automatically.

### Features

- Natural language understanding for customer queries
- Context-aware responses based on conversation history
- Integration with CRM and ticketing systems
- Escalation to human agents when needed
- Appointment scheduling with calendar integration
- Automated task execution (data entry, updates)

### Technical Stack

- **Workflow:** n8n for orchestration
- **Voice:** Vapi for voice calls
- **TTS:** ElevenLabs for natural speech
- **AI:** OpenAI GPT-4, Claude
- **Integration:** REST APIs, Webhooks

### Results

- 70% of inquiries handled automatically
- 40-60% reduction in operational workload
- 24/7 availability
- 90%+ customer satisfaction

---

## Voice AI Assistants

### Overview

Voice-enabled AI assistants for handling phone calls with real-time conversation and data capture.

### Features

- Inbound and outbound call handling
- Real-time speech recognition
- Natural text-to-speech responses
- Conversation flow management
- Data extraction from calls
- CRM integration for lead capture
- Call recording and transcription
- Workflow handoff to humans

### Technical Stack

- **Voice Platform:** Vapi
- **TTS:** ElevenLabs
- **AI:** OpenAI, Claude
- **Backend:** Node.js, Express
- **Database:** PostgreSQL, Supabase

### Results

- Handled 100+ calls per day
- 95% speech recognition accuracy
- 3x faster lead qualification

---

## Additional Projects (Available for Resume)

## WorkForce-Connect

### Overview

Collaborative workforce management platform with a Strapi CMS backend, React Admin web backoffice, and Expo/React Native mobile app. Contributions focused on feature development and improvements in an existing production system rather than full project ownership.

**Live:** https://work-force.be/

### Contribution Scope

- Contributed features across the web backoffice, CMS backend, and mobile worker app
- Enhanced document compliance workflows for worker documents and admin review
- Supported Dockerized development and deployment configuration for the multi-app system

### Features Contributed

- Improved worker document upload, list, open/download, approval, rejection, hide/unhide, and visibility workflows
- Added compliance coverage logic and document type handling so workers and admins see the right document states
- Enhanced push notification registration for worker mobile devices
- Supported worksheet signing and document sync workflows using Dropbox Sign and SharePoint
- Added GitHub Actions automation that builds CMS and web Docker images, authenticates to AWS, pushes versioned images to AWS ECR, and applies branch-specific CMS URLs
- Improved error handling around document downloads, uploads, and PDF-related workflows

### Technical Stack

- **Web Backoffice:** React, TypeScript, Vite, React Admin, Material UI
- **CMS Backend:** Strapi, SQLite, AWS SES, Sentry, Puppeteer
- **Mobile:** React Native, Expo, Expo Notifications, Expo Document Picker
- **Integrations:** Dropbox Sign, SharePoint, document sync callbacks
- **Deployment:** Docker, Docker Compose, GitHub Actions, AWS, AWS ECR

### Collaboration Wording

Use contribution-scoped wording for this project: contributed to, enhanced, implemented features for, added support for, improved reliability of. Do not describe the platform as created or owned end-to-end.

---

## linkedin-crm

### Overview

Collaborative LinkedIn CRM and outreach automation platform with a Next.js frontend, Django REST backend, PostgreSQL database, and Manifest V3 browser extension. Contributions focused on product features, onboarding, prospect workflows, campaign UI, authentication stability, and browser-extension runtime reliability.

**Live:** https://www.outreachgenie.ai/

### Contribution Scope

- Contributed frontend, backend, and browser extension improvements in an existing product
- Enhanced CRM workflows for campaigns, prospects, prospect lists, onboarding, and extension setup
- Improved authentication and extension runtime behavior for a more reliable LinkedIn automation flow

### Features Contributed

- Improved onboarding and extension setup flows, including skip/mobile handling and setup UI updates
- Refactored campaign creation UI and improved campaign/prospect workflow screens
- Enhanced prospects and prospect lists with inline editing, current company display, active campaign tracking, and lead enrichment states
- Improved authentication redirect handling and loading states
- Fixed extension messaging and sidebar race conditions and guarded tab behavior for automation flows

### Technical Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Radix UI, TanStack Table, Zod
- **Backend:** Django, Django REST Framework, SimpleJWT, django-allauth, PostgreSQL
- **Extension:** Manifest V3, TypeScript, Chrome Extension APIs, esbuild
- **Testing:** Playwright, Vitest, pytest
- **Tooling & Deployment:** pnpm, Docker, Gunicorn

### Collaboration Wording

Use contribution-scoped wording for this project: contributed to, improved, implemented features for, enhanced existing workflows, fixed runtime reliability issues. Do not describe the product as created or owned end-to-end.

---

## Trakil

### Overview

Crypto/blockchain project worked from a cloned GitHub repository with three applications: a Next.js customer-facing crypto landing app, a Next.js admin dashboard, and a Flask API for token analysis and security scanning. Contributions should be described as work on a cloned project and feature improvements, not original full project ownership.

**Live:** https://www.ghanemlab.com/en

### Contribution Scope

- Worked on crypto token scanning UI/API flows in an existing cloned repository
- Enhanced customer-facing token analysis pages and multilingual security result displays
- Supported API-backed token scan handling and provider-based risk analysis views

### Features Contributed

- Added and refined token analysis views for contract address scans, token metadata, risk levels, market context, and security alerts
- Integrated and displayed multi-provider security data from sources such as GoPlus, CertiK, Honeypot, TokenSniffer, DexScreener, and CoinGecko
- Improved API request/response handling for token scan results and bearer-token protected scanner calls
- Supported testing and reliability through Vitest for the Next.js app and pytest for the Flask scanner service

### Technical Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, Radix UI, React Hook Form, Zod, next-intl
- **Backend/API:** Python, Flask, Flask-CORS, Gunicorn, requests
- **Data:** Supabase, PostgreSQL, SQLAlchemy, Alembic, Redis
- **Crypto/Security:** Token security scanning, risk scoring, GoPlus, CertiK, Honeypot, TokenSniffer, DexScreener, CoinGecko
- **Testing & Ops:** Vitest, pytest, Docker, Sentry

### Collaboration Wording

Use contribution-scoped wording for this project: worked from a cloned repository, contributed to, enhanced, integrated, improved, supported. Do not describe Trakil as created or owned end-to-end.

### E-commerce Dashboard

- Admin dashboard for managing products and orders
- Real-time analytics and reporting
- Built with Next.js and Tailwind CSS
- Integrated with Stripe for payment management

### Portfolio Website

- Personal portfolio at omar-ben-brahim.vercel.app
- Showcases projects and skills
- Built with Next.js and Tailwind CSS
- 100 Lighthouse performance score

### Internal Tools

- Built various internal tools for clients
- Data processing scripts in Python
- Automation scripts for repetitive tasks
- API clients for third-party integrations
