# Omar Ben Brahim - Resume Builder

This project contains an HTML version of my resume that can be dynamically updated and customized for specific job applications.

## 🚀 Quick Start

1. Open `index.html` in a browser to view the resume
2. Click "Download PDF" to print/save as PDF
3. For job-specific tailoring, provide job description to AI agent

## 📁 Project Structure

```
ResumeBuilder/
├── index.html              # Main resume (Tailwind CSS)
├── styles.css              # Print & responsive styles
├── script.js               # Download functionality
├── .ai-rules.md            # ⚠️ AI MUST READ THIS FIRST
├── README.md               # This file
│
├── resources/              # Structured JSON data
│   ├── profile.json        # Personal info & summary
│   ├── skills.json         # Technical skills by category
│   ├── experience.json     # Work experience details
│   ├── projects.json       # Project descriptions
│   └── additional-skills.json
│
├── docs/                   # Extended content for AI
│   ├── full-experience.md  # Detailed work history
│   ├── projects-detail.md  # Extended project info
│   ├── achievements.md     # Metrics & achievements
│   └── cover-letters/      # Cover letter templates
│
└── jobs/                   # Save job descriptions here
    └── README.md           # Instructions for saving jobs
```

## 🤖 For AI Agents

### Before Making Changes:
1. **READ `.ai-rules.md`** - Contains all formatting and ATS rules
2. Check `docs/` folder for additional content to include
3. Check `jobs/` folder for target job description

### Key Rules:
- Resume MUST fit on single page
- Use Tailwind CSS classes as specified in rules
- Follow ATS optimization guidelines
- Keep consistent formatting (see `.ai-rules.md`)

## 🎨 Styling

Uses **Tailwind CSS** via CDN with custom configuration for:
- Resume-specific font sizes (10pt body, 11pt sections, 24pt name)
- Consistent colors (primary, secondary, muted, link)
- Print-optimized output

## 📄 Customization Workflow

1. Save job description to `jobs/company-role.md`
2. Ask AI: "Tailor my resume for the job in jobs/company-role.md"
3. AI reads rules, job description, and available content
4. AI modifies `index.html` to match job requirements
5. Download PDF and apply!

## 🖨️ Printing

- Click "Download PDF" button
- Or use Ctrl/Cmd + P
- Select "Save as PDF"
- Ensure "Print backgrounds" is enabled for colors
