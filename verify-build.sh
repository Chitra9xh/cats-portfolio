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
