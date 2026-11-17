# Resume builder

Read `career.md` (facts) and `RULES.md` (rules) before writing any resume or cover letter.

In Claude Code, the `/resume` skill (`~/.claude/skills/resume/SKILL.md`) runs the full workflow: paste a job posting and it produces a tailored PDF. The short version below is for other agents (e.g. Codex).

## Files
- `career.md`: every confirmed fact about Omar's career. Edit this when facts change.
- `profile.yaml`: contact header shared by all resumes.
- `resumes/<slug>.yaml`: the content of one resume. `base.yaml` is the general version; copy its shape.
- `template.typ`: fixed layout. Don't edit it to tailor a resume.
- `jobs/<slug>.md`: job postings. `cover-letters/`: letters.
- `out/<slug>.pdf`: built resumes (kept as a record of what was sent).

## Tailoring workflow
1. Save the posting to `jobs/<slug>.md` (slug = `company-role`).
2. List material skill gaps against `career.md` (RULES.md, rule 4).
3. Write `resumes/<slug>.yaml` from `base.yaml`, choosing and ordering the work most relevant to the job.
4. Run `./build.sh <slug>`. It fails if over the page limit, so cut content and rebuild until it passes.
5. Read `out/<slug>.txt`, then give Omar the PDF path to review.
