# Resume builder

Read `career.md` (facts) and `RULES.md` (rules) before writing any resume or cover letter.

## Files
- `career.md`: every confirmed fact about Omar's career. Edit this when facts change.
- `profile.yaml`: contact header shared by all resumes.
- `resumes/<slug>.yaml`: the content of one resume. `base.yaml` is the general version; copy its shape.
- `template.typ`: fixed layout. Don't edit it to tailor a resume.
- `jobs/<slug>.md`: job postings. `cover-letters/`: letters.
- `out/<slug>.pdf`: built resumes (kept as a record of what was sent).

## Tailoring workflow
1. Read the posting in `jobs/<slug>.md`.
2. List material skill gaps against `career.md` (RULES.md, rule 4).
3. Write `resumes/<slug>.yaml`: choose and order the relevant experience, bullets, and skills; write a 2–3 sentence summary for this role.
4. Run `./build.sh <slug>`. It fails if the page limit is exceeded, so cut content and rebuild until it passes.
5. Read `out/<slug>.txt`, then give Omar the PDF path to review.
