#!/usr/bin/env bash
# Smoke check for the static export. Run after `npm run build`.
# Fails (non-zero exit) if any check doesn't hold.
set -e
OUT=out

test -f "$OUT/index.html" || { echo "FAIL: no index.html in $OUT"; exit 1; }
test -f "$OUT/CNAME" || { echo "FAIL: CNAME missing from export"; exit 1; }
test -f "$OUT/fonts/GeistPixel-Square.woff2" || { echo "FAIL: pixel font missing from export"; exit 1; }
grep -q "still being built" "$OUT/index.html" || { echo "FAIL: headline missing"; exit 1; }
grep -rlq "GeistPixel" "$OUT"/_next/static/chunks/*.css >/dev/null 2>&1 || { echo "FAIL: font-face not compiled into CSS"; exit 1; }
grep -qi "lorem ipsum" "$OUT/index.html" && { echo "FAIL: lorem ipsum text found"; exit 1; }

echo "OK: static export looks correct"


#!/usr/bin/env bash
# ─────────────────────────────────────────────────────────────
# APPEND THIS to the end of your existing verify-build.sh
# (run after `npm run build`, same as the rest of that script)
# ─────────────────────────────────────────────────────────────

echo "Checking Phase 2 pages..."

OUT_DIR="out"
PAGES=("index" "about" "projects" "contact")

for page in "${PAGES[@]}"; do
  if [ "$page" = "index" ]; then
    FILE="$OUT_DIR/index.html"
  else
    FILE="$OUT_DIR/$page/index.html" # falls back to $OUT_DIR/$page.html below if not found
  fi

  if [ ! -f "$FILE" ] && [ -f "$OUT_DIR/$page.html" ]; then
    FILE="$OUT_DIR/$page.html"
  fi

  if [ ! -f "$FILE" ]; then
    echo "FAIL: $page page not found in build output ($FILE)"
    exit 1
  fi
  echo "  OK: $page page built ($FILE)"
done

echo "Checking nav links resolve to real pages..."
for page in "${PAGES[@]}"; do
  SRC="$OUT_DIR/index.html"
  [ "$page" != "index" ] && SRC="$OUT_DIR/$page/index.html"
  [ -f "$SRC" ] || SRC="$OUT_DIR/$page.html"

  for target in "/" "/about" "/projects" "/contact"; do
    if ! grep -q "href=\"$target\"" "$SRC" 2>/dev/null && ! grep -q "href=\"${target}/\"" "$SRC" 2>/dev/null; then
      echo "FAIL: $page.html is missing a nav link to $target"
      exit 1
    fi
  done
done
echo "  OK: nav present and links resolve on every page"

echo "Checking for placeholder/lorem-ipsum content..."
if grep -riE "lorem ipsum|placeholder|TODO: replace|your ?name here" "$OUT_DIR" --include="*.html" -q; then
  echo "FAIL: placeholder or lorem-ipsum content found in build output"
  grep -riEl "lorem ipsum|placeholder|TODO: replace|your ?name here" "$OUT_DIR" --include="*.html"
  exit 1
fi
echo "  OK: no placeholder content found"

echo "Phase 2 checks passed."
