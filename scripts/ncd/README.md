# NCD-RisC height data

Source: NCD Risk Factor Collaboration, *Lancet* 2020 (child & adolescent height, 1985–2019), CC BY 4.0 —
https://www.ncdrisc.org/data-downloads-height.html

Refresh the generated files in `src/data/`:

```bash
bash scripts/ncd/fetch.sh
python3 scripts/ncd/build.py
node scripts/ncd/generate.cjs
```

`raw/` is git-ignored.
