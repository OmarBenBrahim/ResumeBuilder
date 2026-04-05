# Omar Ben Brahim - Resume Builder

An HTML resume builder with AI-powered job tailoring, Puppeteer PDF generation, and automated page validation.

## Quick Start

```bash
# Preview in browser
open index.html

# Generate PDF
node generate-pdf.js

# Start server (enables Download button PDF generation)
node server.js

# Validate page fits on one page
node validate-page.js
```

## Project Structure

```
ResumeBuilder/
├── index.html              # Main resume (Tailwind CSS)
├── styles.css              # Screen + print styles
├── script.js               # Download button + page fit check
├── generate-pdf.js         # Puppeteer PDF generator
├── validate-page.js        # Page height validator
├── server.js               # Local server with PDF endpoint
├── .ai-rules.md            # AI agent rules (MUST READ)
├── package.json            # Dependencies (puppeteer-core)
│
├── resources/              # Source of truth for resume content
│   ├── profile.json        # Personal info & contact
│   ├── skills.json         # Skills by category (with variants)
│   ├── experience.json     # Work experience details
│   ├── projects.json       # Project descriptions
│   └── additional-skills.json  # Extended skills & certifications
│
├── docs/                   # Extended content for AI to draw from
│   ├── full-experience.md  # Detailed work history
│   ├── projects-detail.md  # Extended project descriptions
│   ├── achievements.md     # Metrics & quantified results
│   └── cover-letters/      # Cover letter templates
│
└── jobs/                   # Job descriptions to tailor for
    └── README.md           # Instructions for saving jobs
```

## PDF Generation

**Recommended:** Use `node generate-pdf.js` for pixel-perfect output.

| Method | Command | How it works |
|--------|---------|--------------|
| CLI script | `node generate-pdf.js` | Generates `resume.pdf` using Puppeteer with print styles |
| CLI script | `node generate-pdf.js my-resume.pdf` | Custom output filename |
| Server | `node server.js` then click Download | Serves HTML at `localhost:3000`, Download button generates PDF via Puppeteer |
| Browser print | `Ctrl+P` > Save as PDF | Fallback, uses browser's `@media print` styles |

The PDF generator applies `@media print` styles via `emulateMediaType("print")` so the output matches what `Ctrl+P` would produce, but with precise control over margins and page size.

## Page Validation

```bash
node validate-page.js
```

Measures the actual rendered height of the resume using Puppeteer and reports:

```
[PASS] Resume fits on one page (10.54in / 11.00in)

Section breakdown:
  - OMAR BEN BRAHIM: 0.82in
  - PROFESSIONAL SUMMARY: 1.22in
  - TECHNICAL SKILLS: 1.35in
  - EXPERIENCE: 4.05in (8 bullets)
  - PROJECTS: 1.49in (2 bullets)
  - EDUCATION: 0.72in
```

You can also check from the browser console: `checkPageFit()`

## Styling

- **Screen styles:** Larger, more readable sizes for browser preview
- **Print styles:** `@media print` applies slightly tighter spacing to guarantee single-page fit
- **Tailwind CSS** via CDN with custom colors and fonts (Bricolage Grotesque, Inter)
- **Debug mode:** Add class `debug-overflow` to `.resume-page` to see a red line at the 11-inch page boundary

## Job Tailoring Workflow

1. Save job description to `jobs/company-role.md`
2. Ask AI: "Tailor my resume for the job in `jobs/company-role.md`"
3. AI reads `.ai-rules.md`, checks your skills files, and asks about any missing skills
4. AI edits `index.html` using content from your resource files
5. AI runs `node validate-page.js` to verify single-page fit
6. AI runs `node generate-pdf.js` to produce the final PDF

## For AI Agents

**Before making any changes, READ `.ai-rules.md`.** Key rules:

- **Skills:** ONLY use skills from `resources/skills.json` and `resources/additional-skills.json`. ASK the user before adding any skill not in those files.
- **Content:** Source all experience bullets from `resources/experience.json` and `docs/full-experience.md`. Never copy language from job descriptions.
- **Page limit:** Resume MUST fit on one page. Run `node validate-page.js` after every edit.
- **PDF:** Generate with `node generate-pdf.js`, not `window.print()`.

## Dependencies

- **puppeteer-core** - PDF generation and page validation
- **Google Chrome/Chromium** - Required on the system (auto-detected)
