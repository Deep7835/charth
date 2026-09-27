#!/usr/bin/env bash
# Download NCD-RisC (Lancet 2020) child/adolescent height CSVs, one per country.
# The bulk zip on ncdrisc.org is broken (HTTP 421), and the server throttles, so fetch sequentially with retries.
set -euo pipefail
cd "$(dirname "$0")"
mkdir -p raw
[ -f raw/adult_2016.csv ] || curl -sfL -A "Mozilla/5.0" -o raw/adult_2016.csv \
  "https://www.ncdrisc.org/downloads/height/NCD_RisC_eLife_2016_height_age18_countries.csv"
python3 -c "import csv;print('\n'.join(sorted({r['Country'] for r in csv.DictReader(open('raw/adult_2016.csv',encoding='utf-8-sig')) if len(r['Country'])>2})))" > raw/countries.txt
mkdir -p raw/2020
for pass in 1 2 3 4 5 6; do
  missing=0
  while IFS= read -r name; do
    f="raw/2020/$name.csv"
    # 1 header + 2 sexes × 35 years × 15 ages
    [ -f "$f" ] && [ "$(grep -c . "$f")" = "1051" ] && continue
    enc=$(python3 -c 'import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))' "$name")
    curl -s -A "Mozilla/5.0" -o "$f" "https://www.ncdrisc.org/downloads/bmi-height-2020/height/by_country/NCD_RisC_Lancet_2020_height_child_adolescent_$enc.csv" || true
    [ "$(grep -c . "$f" 2>/dev/null || echo 0)" = "1051" ] || missing=$((missing + 1))
    sleep 0.5
  done < raw/countries.txt
  echo "pass $pass: $missing missing"
  [ "$missing" -eq 0 ] && exit 0
done
echo "some countries still missing" >&2
exit 1
