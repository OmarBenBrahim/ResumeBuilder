#!/usr/bin/env bash
# Usage: ./build.sh <slug>
# Builds resumes/<slug>.yaml into out/<slug>.pdf (+ out/<slug>.txt), auto-fits spacing so the
# last page ends near the bottom margin, and reports how full the last page is.
set -euo pipefail
cd "$(dirname "$0")"

slug="${1:-base}"
src="resumes/$slug.yaml"
[[ -f "$src" ]] || { echo "No such file: $src" >&2; exit 1; }
max=$(sed -n 's/^max_pages:[[:space:]]*\([0-9]\+\).*/\1/p' "$src")
max="${max:-1}"
pdf="out/$slug.pdf"
mkdir -p out

typst_args=(--root . --font-path fonts --ignore-system-fonts --input resume="$src")
compile() { typst compile "${typst_args[@]}" --input fit="$1" template.typ "$pdf"; }
pages()   { pdfinfo "$pdf" | awk '/^Pages:/ {print $2}'; }
fill()    { # percent of the last page's text area that is used
  typst eval "${typst_args[@]}" --input fit="$1" --in template.typ 'query(<end>).first().value' |
    python3 -c 'import json,sys; d=json.load(sys.stdin); print(round(100*(d["y"]-d["m"])/(d["h"]-2*d["m"])))'
}

compile 0
n=$(pages)
if (( n > max )); then
  echo "FAIL: $n pages, limit $max. Cut content and rebuild." >&2
  exit 1
fi
natural=$(fill 0)

# Binary-search the largest fit (0..1) that keeps the same page count.
best=0
read -r lo hi <<< "0 1"
for _ in 1 2 3 4 5 6; do
  mid=$(python3 -c "print(round(($lo+$hi)/2, 4))")
  compile "$mid"
  if (( $(pages) == n )); then best=$mid; lo=$mid; else hi=$mid; fi
done
compile "$best"
final=$(fill "$best")
pdftotext -layout "$pdf" "out/$slug.txt"

echo "$pdf: $n page(s), limit $max. Last page ${final}% full (${natural}% before auto-fit, fit=$best)."
if (( natural < 88 )); then
  echo "WARN: under 88% full before auto-fit. Add relevant content from career.md (see the /resume skill)."
fi
