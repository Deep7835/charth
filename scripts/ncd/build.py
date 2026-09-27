"""Compact raw NCD-RisC CSVs into raw/compact.json (latest year, ages 5–19, plus 1985 at age 19)."""
import csv, glob, json, os

here = os.path.dirname(os.path.abspath(__file__))
os.chdir(here)
iso = {r["Country"]: r["ISO"] for r in csv.DictReader(open("raw/adult_2016.csv", encoding="utf-8-sig"))}
out = []
for f in sorted(glob.glob("raw/2020/*.csv")):
    rows = list(csv.DictReader(open(f, encoding="utf-8-sig")))
    name = rows[0]["Country"]
    year = str(max(int(r["Year"]) for r in rows))
    d = {"name": name, "iso3": iso[name], "year": int(year), "m": {}, "f": {}}
    for r in rows:
        k = "m" if r["Sex"] == "Boys" else "f"
        if r["Year"] == year:
            d[k][int(r["Age group"])] = round(float(r["Mean height"]), 1)
        if r["Year"] == "1985" and r["Age group"] == "19":
            d[k + "1985"] = round(float(r["Mean height"]), 1)
    assert len(d["m"]) == 15 and len(d["f"]) == 15 and "m1985" in d and "f1985" in d, name
    out.append(d)
json.dump(out, open("raw/compact.json", "w"))
print(len(out), "countries")
