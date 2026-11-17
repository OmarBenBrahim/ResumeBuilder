#!/usr/bin/env bash
# Usage: ./build.sh <slug>   → builds resumes/<slug>.yaml into out/<slug>.pdf and out/<slug>.txt
set -euo pipefail
cd "$(dirname "$0")"

slug="${1:-base}"
src="resumes/$slug.yaml"
[[ -f "$src" ]] || { echo "No such file: $src" >&2; exit 1; }
max=$(sed -n 's/^max_pages:[[:space:]]*\([0-9]\+\).*/\1/p' "$src")
max="${max:-1}"

mkdir -p out
typst compile --root . --font-path fonts --ignore-system-fonts \
  --input resume="$src" template.typ "out/$slug.pdf"
pdftotext -layout "out/$slug.pdf" "out/$slug.txt"

pages=$(pdfinfo "out/$slug.pdf" | awk '/^Pages:/ {print $2}')
echo "out/$slug.pdf: $pages page(s), limit $max. Extracted text: out/$slug.txt"
if (( pages > max )); then
  echo "FAIL: over the page limit. Cut content and rebuild." >&2
  exit 1
fi
