// Resume layout. Content: resumes/<slug>.yaml (passed as --input resume=...),
// contact header: profile.yaml. Build with ./build.sh <slug>.

#let r = yaml(sys.inputs.resume)
#let p = yaml("profile.yaml")
#let title = r.at("title", default: "Full Stack Developer")

#let ink = rgb("#0f0f0f")
#let body = rgb("#2e2e2e")
#let muted = rgb("#5a5a5a")
#let link-color = rgb("#1d4ed8")

#set document(title: p.name + " — " + title, author: p.name)
#set page(
  paper: r.at("paper", default: "a4"),
  margin: (x: 1.6cm, y: 1.35cm),
  header: context if here().page() > 1 {
    set text(size: 8pt, fill: muted)
    grid(columns: (1fr, auto), [#text(fill: ink, weight: 600, p.name) · #title], [#p.email · #here().page()])
  },
)
// Hyphenation off: split words hurt ATS keyword parsing.
#set text(font: "Inter", size: 9.9pt, fill: body, lang: "en", hyphenate: false)
#set par(leading: 0.78em, spacing: 0.78em)
#show link: set text(fill: link-color)

#let bullet(t) = block(above: 5.5pt, below: 0pt, breakable: false, grid(
  columns: (0.85em, 1fr),
  text(fill: muted)[•], t,
))

// Light tracking only: wide letter-spacing makes text extractors split words ("E D U C AT I O N").
#let section(t) = block(
  sticky: true, above: 14pt, below: 6pt, width: 100%,
  stroke: (bottom: 0.6pt + ink), inset: (bottom: 2.5pt),
  text(size: 9.8pt, weight: 700, fill: ink, tracking: 0.3pt, upper(t)),
)

#let entry(left, right, bullets, note: none) = block(above: 9pt, below: 0pt, {
  block(sticky: true, below: 1.5pt, grid(columns: (1fr, auto), column-gutter: 8pt,
    text(size: 1.04em, left), text(fill: muted, right)))
  if note != none { block(sticky: true, above: 6pt, below: 0pt, text(fill: muted, style: "italic", note)) }
  for b in bullets { bullet(b) }
})

// ---------- header ----------
#align(center, {
  text(font: "Bricolage Grotesque 96pt", weight: 700, size: 24pt, fill: ink, tracking: 0.5pt, upper(p.name))
  set par(spacing: 0.5em)
  par(text(size: 10.5pt, weight: 600, fill: ink, title))
  par(text(size: 9pt)[#p.location | #link("mailto:" + p.email, p.email) | #p.phone])
  par(text(size: 9pt, p.links.map(l => link(l.url, l.label)).join([ | ])))
})

// ---------- sections ----------
#if "summary" in r {
  section("Professional Summary")
  par(justify: true, r.summary)
}

#if "skills" in r {
  section("Technical Skills")
  for g in r.skills {
    block(above: 6.5pt, below: 0pt)[#text(fill: ink, weight: 700)[#g.label:] #g.items.join(", ")]
  }
}

#if "experience" in r {
  section("Experience")
  for e in r.experience {
    entry([#text(fill: ink, weight: 700, e.company) | #e.role], e.dates, e.bullets, note: e.at("note", default: none))
  }
}

#if "projects" in r {
  section("Projects")
  for pr in r.projects {
    let name = text(fill: ink, weight: 700, pr.name)
    let head = if "link" in pr { [#name | #link(pr.link.url, pr.link.label)] } else { name }
    entry(head, [], pr.bullets)
  }
}

#if "education" in r {
  section("Education")
  for ed in r.education {
    block(above: 6pt, below: 0pt, grid(columns: (1fr, auto),
      [#text(fill: ink, weight: 600, ed.degree) | #ed.school], text(fill: muted, str(ed.year))))
  }
  if "languages" in r { block(above: 4pt, below: 0pt)[Languages: #r.languages.join(", ")] }
}

#if "certifications" in r {
  section("Certifications")
  for c in r.certifications { bullet(c) }
}
