# Resume Builder

An AI-assisted resume pipeline. The facts are kept in one file, an AI writes a tailored resume for each job, and a fixed Typst template turns it into a PDF.

| File | Purpose |
|---|---|
| `career.md` | Every confirmed fact about my career: the single source of truth |
| `RULES.md` | The short list of rules the AI must follow |
| `AGENTS.md` / `CLAUDE.md` | The workflow for AI agents (Codex, Claude Code) |
| `profile.yaml` | Contact header |
| `resumes/<slug>.yaml` | The content of one resume (`base.yaml` = general) |
| `template.typ` | Layout (A4 by default, `paper: us-letter` per resume) |
| `jobs/`, `cover-letters/` | Job postings and letters |

## Build

Requires [Typst](https://github.com/typst/typst) (0.15+) and poppler (`pdfinfo`, `pdftotext`). The fonts are in `fonts/`.

```bash
./build.sh base            # → out/base.pdf + out/base.txt (fails if over max_pages)
```

## Tailor for a job

Save the posting as `jobs/<slug>.md`, then ask the agent: *"Tailor my resume for jobs/<slug>.md."*
