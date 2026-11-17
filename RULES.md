# Resume rules

1. `career.md` is the only source of facts. Never use anything from its **Unverified** section, and never invent metrics, skills, dates, titles, seniority, language levels, or credentials.
2. Follow the **Ownership** lines in `career.md` exactly. WorkForce-Connect: "main developer", never "created". linkedin-crm and Trakil: "contributed to / improved". Show the role as plain "Freelance". Don't claim client-facing work or stakeholder management (see career.md).
3. Use the job's terminology when it truthfully matches a skill in `career.md` (e.g. "Postgres" → PostgreSQL). Don't copy sentences or phrasing from the posting.
4. Skill gaps: list the job's important requirements that `career.md` doesn't support. Ask Omar only when his answer could change the application; otherwise leave them out. Confirmed new facts go into `career.md` first.
5. Describe freelance work by the system and capability (e.g. "a workforce management platform", "an AI lead-enrichment pipeline"), not by client or product names; product names stay in `career.md`. Bullets: one sentence each. Say what was improved or built, what Omar did, and the result when one is known. Don't write bullets that only list tools.
6. Don't describe the same work twice (e.g. in both Experience and Projects).
7. Length: 1 A4 page by default. Use 2 pages only when the extra content is relevant to this job, or the application asks for more. Use `paper: us-letter` for US/Canada jobs. Cut content rather than shrinking text or margins.
8. Build with `./build.sh <slug>`, then read `out/<slug>.txt` to confirm the headings, order, and contact details extracted correctly. Show Omar the PDF before it's sent.
