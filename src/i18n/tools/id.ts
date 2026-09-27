import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Alat",
    home: "Beranda",
    hubMetaTitle: "Alat Tinggi Badan Gratis – Konversi, Kalkulator & Data",
    hubMetaDescription:
      "Alat tinggi badan gratis: konversi cm ke kaki dan inci, hitung selisih tinggi badan, cek persentil tinggi Anda, dan bandingkan rata-rata tinggi per negara.",
    hubH1: "Alat tinggi badan",
    hubIntro: "Kalkulator praktis dan data referensi yang melengkapi grafik perbandingan tinggi badan.",
    relatedTitle: "Alat tinggi badan lainnya",
    boardCta: "Bandingkan di grafik tinggi badan",
    boardCtaBody: "Jajarkan orang, karakter, dan benda berdampingan dalam satu skala visual.",
    openInBoard: "Buka di grafik tinggi badan",
    faqTitle: "Pertanyaan yang sering diajukan",
    men: "Pria",
    women: "Wanita",
    man: "Pria",
    woman: "Wanita",
    sex: "Jenis kelamin",
    country: "Negara",
    height: "Tinggi",
    source: "Sumber",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — rata-rata tinggi badan usia 19 tahun, estimasi terbaru. Berlisensi CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Konversi tinggi badan",
      blurb: "Konversi cm ke kaki dan inci dan sebaliknya, lengkap dengan tabel konversi.",
    },
    "height-difference-calculator": {
      name: "Kalkulator selisih tinggi badan",
      blurb: "Cari selisih pasti antara dua tinggi badan dan lihat sampai mana satu orang mencapai tubuh orang lainnya.",
    },
    "average-height-by-country": {
      name: "Rata-rata tinggi badan per negara",
      blurb: "Rata-rata tinggi badan pria dan wanita di 200 negara, lengkap dengan peringkat dan pencarian.",
    },
    "height-percentile-calculator": {
      name: "Kalkulator persentil tinggi badan",
      blurb: "Lihat berapa persen pria atau wanita yang lebih pendek dari Anda, di negara Anda dan di seluruh dunia.",
    },
    "hug-simulator": {
      name: "Simulator pelukan",
      blurb: "Lihat pelukan dari depan atau belakang sesuai skala untuk dua tinggi badan, dan posisi kepala masing-masing.",
    },
    "3d-height-comparison": {
      name: "Perbandingan tinggi 3D",
      blurb: "Bandingkan orang, hewan, dan benda sebagai model 3D yang bisa diputar dan diperbesar.",
    },
  },
  converter: {
    metaTitle: "Konversi cm ke Kaki & Inci – Kalkulator Tinggi Badan",
    metaDescription:
      "Konversi cm ke kaki dan inci atau dari ft/in ke cm secara instan. Lengkap dengan tabel konversi tinggi badan dari 4′6″ hingga 7′0″ dan 140 hingga 215 cm.",
    h1: "Konversi tinggi badan: cm ↔ kaki dan inci",
    intro: "Ketik tinggi badan di kotak mana saja, kotak lainnya langsung ikut berubah. Hasil dibulatkan ke inci terdekat atau 0.1 cm.",
    centimeters: "Sentimeter",
    meters: "Meter",
    feetInches: "Kaki + inci",
    totalInches: "Total inci",
    result: "{cm} sama dengan {ftin}",
    tableCmTitle: "Tabel konversi sentimeter ke kaki dan inci",
    tableFtTitle: "Tabel konversi kaki dan inci ke sentimeter",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "inci",
    howTitle: "Cara mengonversi tinggi badan",
    how: [
      "Satu inci sama dengan tepat 2.54 cm dan satu kaki sama dengan 12 inci (30.48 cm).",
      "cm ke kaki dan inci: bagi angka sentimeter dengan 2.54 untuk mendapatkan total inci, lalu bagi dengan 12. Bilangan bulatnya adalah kaki dan sisanya adalah inci. Contoh: 175 cm ÷ 2.54 = 68.9 in → 5 ft 8.9 in ≈ 5′9″.",
      "Kaki dan inci ke cm: kalikan kaki dengan 12, tambahkan inci, lalu kalikan dengan 2.54. Contoh: 5′10″ = 70 in × 2.54 = 177.8 cm.",
    ],
    faq: [
      { q: "170 cm berapa kaki?", a: "170 cm kira-kira 5 kaki 7 inci (5′6.9″)." },
      { q: "6 kaki berapa cm?", a: "6 kaki sama dengan tepat 182.88 cm, biasanya dibulatkan menjadi 183 cm." },
      { q: "5′5″ berapa cm?", a: "5 kaki 5 inci sama dengan 165.1 cm." },
      {
        q: "Kenapa hasil konversi tinggi badan kadang beda satu sentimeter?",
        a: "Tinggi dalam kaki biasanya dibulatkan ke inci terdekat, dan satu inci sama dengan 2.54 cm, jadi nilai yang dibulatkan bisa bergeser hingga sekitar 1.3 cm.",
      },
    ],
  },
  difference: {
    metaTitle: "Kalkulator Selisih Tinggi Badan – Bandingkan Dua Orang",
    metaDescription:
      "Hitung selisih tinggi badan dua orang dalam cm dan kaki/inci, lihat selisih persentasenya, dan sampai mana orang yang lebih pendek mencapai yang lebih tinggi.",
    h1: "Kalkulator selisih tinggi badan",
    intro: "Masukkan dua tinggi badan untuk melihat selisih pastinya dalam cm dan ft/in, selisih persentase, serta pratinjau sesuai skala.",
    personA: "Orang A",
    personB: "Orang B",
    name: "Nama",
    difference: "Selisih",
    percentTaller: "{a} {pct} lebih tinggi dari {b}",
    sameHeight: "Tinggi keduanya sama",
    reachTitle: "Sampai mana puncak kepala {b} di tubuh {a}",
    reach: {
      eyes: "Setinggi mata",
      nose: "Hidung atau mulut",
      chin: "Dagu",
      shoulders: "Bahu",
      chest: "Dada",
      waist: "Pinggang",
      below: "Di bawah pinggang",
    },
    reachNote: "Berdasarkan proporsi tubuh rata-rata orang dewasa; postur, alas kaki, dan rambut bisa mengubah hasil sebenarnya.",
    categoryTitle: "Seberapa besar selisihnya?",
    categories: {
      tiny: "Hampir tidak terlihat (di bawah 3 cm / 1 in)",
      small: "Kecil (3–7 cm / 1–3 in)",
      medium: "Cukup terlihat (8–14 cm / 3–5.5 in)",
      large: "Besar (15–24 cm / 6–9.5 in)",
      huge: "Sangat besar (25 cm / 10 in atau lebih)",
    },
    contentTitle: "Memahami selisih tinggi badan",
    content: [
      "Selisih tinggi badan bisa terasa lebih besar atau lebih kecil dari angkanya. Selisih 10 cm (4 in) berarti mata orang yang lebih pendek kira-kira sejajar dengan mulut orang yang lebih tinggi, dan itu sangat terlihat di foto.",
      "Selisih persentase berguna untuk membandingkan ukuran yang berbeda: selisih 20 cm antara orang dewasa setinggi 165 dan 185 cm sekitar 12%, sedangkan selisih 20 cm yang sama antara anak setinggi 100 dan 120 cm adalah 20%.",
      "Pada pasangan, selisih sekitar 12 cm (5 in) itu wajar, karena kira-kira segitulah pria rata-rata lebih tinggi dari wanita rata-rata di seluruh dunia.",
    ],
    faq: [
      {
        q: "Bagaimana cara menghitung selisih tinggi badan?",
        a: "Kurangi tinggi yang lebih besar dengan tinggi yang lebih kecil. Untuk persentasenya, bagi selisih dengan tinggi yang lebih pendek lalu kalikan 100.",
      },
      {
        q: "Apakah selisih tinggi 15 cm itu banyak?",
        a: "15 cm (sekitar 6 in) adalah selisih yang jelas terlihat: puncak kepala orang yang lebih pendek biasanya sampai kira-kira di hidung orang yang lebih tinggi.",
      },
      {
        q: "Berapa rata-rata selisih tinggi badan pria dan wanita?",
        a: "Di seluruh dunia, pria usia 19 tahun rata-rata setinggi 170.8 cm dan wanita 158.6 cm, selisih sekitar 12 cm (4.8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Rata-rata Tinggi Badan per Negara 2026 – Pria & Wanita",
    metaDescription:
      "Rata-rata tinggi badan pria dan wanita di 200 negara, termasuk Indonesia, dalam cm dan kaki, diurutkan dari tertinggi ke terendah, plus perubahan sejak 1985.",
    h1: "Rata-rata tinggi badan per negara",
    intro:
      "Rata-rata tinggi badan pria dan wanita usia 19 tahun di 200 negara — usia saat kebanyakan orang sudah mencapai tinggi dewasanya.",
    search: "Cari negara…",
    sortBy: "Urutkan berdasarkan",
    rank: "#",
    change: "Sejak 1985",
    compare: "Bandingkan",
    world: "Dunia",
    tallestMen: "Pria tertinggi",
    tallestWomen: "Wanita tertinggi",
    shortestMen: "Pria terpendek",
    shortestWomen: "Wanita terpendek",
    worldAverage: "Rata-rata dunia",
    contentTitle: "Apa yang ditunjukkan data ini",
    content: [
      "Belanda memiliki anak muda tertinggi di dunia: pria rata-rata 183.8 cm (6′0″) dan wanita 170.4 cm (5′7″). Rata-rata terendah ada di Timor Leste untuk pria (160.1 cm) dan Guatemala untuk wanita (150.9 cm).",
      "Di seluruh dunia, pria rata-rata setinggi 170.8 cm (5′7″) dan wanita 158.6 cm (5′2″). Selisih antara negara tertinggi dan terpendek lebih dari 20 cm.",
      "Tinggi badan dipengaruhi genetika, tetapi perbedaan antarnegara sebagian besar mencerminkan gizi masa kecil, kesehatan, dan kondisi hidup. Itulah sebabnya rata-rata tinggi badan di banyak negara naik beberapa sentimeter sejak 1985.",
    ],
    methodTitle: "Tentang data ini",
    method:
      "Angka ini adalah estimasi NCD-RisC untuk rata-rata tinggi badan pada usia 19 tahun di tahun terbaru yang tersedia, dihimpun dari studi pengukuran berbasis populasi (bukan tinggi yang dilaporkan sendiri). Nilai dibulatkan ke 0.1 cm.",
    faq: [
      { q: "Negara mana yang penduduknya paling tinggi?", a: "Belanda, dengan rata-rata 183.8 cm untuk pria dan 170.4 cm untuk wanita." },
      { q: "Negara mana yang penduduknya paling pendek?", a: "Timor Leste memiliki rata-rata terendah untuk pria (160.1 cm) dan Guatemala untuk wanita (150.9 cm)." },
      { q: "Berapa rata-rata tinggi badan di dunia?", a: "Sekitar 170.8 cm (5′7″) untuk pria dan 158.6 cm (5′2″) untuk wanita." },
      {
        q: "Kenapa memakai data usia 19 tahun?",
        a: "Kebanyakan orang sudah mencapai tinggi dewasanya di usia 19, dan memakai satu usia yang sama membuat negara bisa dibandingkan langsung lintas generasi.",
      },
    ],
  },
  percentile: {
    metaTitle: "Kalkulator Persentil Tinggi Badan – Seberapa Tinggi Anda?",
    metaDescription:
      "Cek persentil tinggi badan Anda: lihat berapa persen pria atau wanita yang lebih pendek dari Anda di negara Anda dan di dunia, berdasarkan rata-rata NCD-RisC.",
    h1: "Kalkulator persentil tinggi badan",
    intro: "Masukkan tinggi badan dan jenis kelamin Anda untuk melihat peringkat Anda di antara orang dewasa di negara Anda dan di seluruh dunia.",
    yourHeight: "Tinggi badan Anda",
    result: "Anda lebih tinggi dari {pct} {group} di {country}.",
    groupMen: "pria",
    groupWomen: "wanita",
    oneIn: "Sekitar 1 dari {n} orang lebih tinggi dari Anda.",
    zScore: "{sd} simpangan baku dari rata-rata ({avg})",
    otherCountries: "Persentil Anda di negara lain",
    percentile: "Persentil",
    average: "Rata-rata",
    note:
      "Estimasi: diasumsikan tinggi badan mengikuti distribusi normal di sekitar rata-rata NCD-RisC tiap negara, dengan sebaran umum 7.1 cm untuk pria dan 6.6 cm untuk wanita. Distribusi sebenarnya sedikit berbeda di tiap negara.",
    contentTitle: "Apa arti persentil tinggi badan",
    content: [
      "Persentil menunjukkan persentase orang yang lebih pendek dari Anda. Di persentil ke-50 Anda tepat di rata-rata; di persentil ke-90 Anda lebih tinggi dari 9 dari 10 orang berjenis kelamin sama.",
      "Karena rata-rata tiap negara berbeda, tinggi yang sama bisa tergolong tinggi di satu tempat dan biasa saja di tempat lain. 175 cm di atas rata-rata untuk pria di India atau Jepang, tetapi di bawah rata-rata di Belanda.",
    ],
    faq: [
      {
        q: "Apakah 180 cm termasuk tinggi untuk pria?",
        a: "Ya, di kebanyakan negara. Secara global, 180 cm (5′11″) lebih tinggi dari sekitar 90% pria, meskipun di Belanda, tempat rata-rata pria 183.8 cm, angka itu di bawah rata-rata.",
      },
      {
        q: "Apakah 170 cm termasuk tinggi untuk wanita?",
        a: "Ya. 170 cm (5′7″) lebih tinggi dari sekitar 96% wanita di dunia dan kurang lebih setara rata-rata wanita di Belanda.",
      },
      {
        q: "Seberapa akurat kalkulator ini?",
        a: "Rata-ratanya berasal dari data nasional hasil pengukuran, tetapi sebarannya dimodelkan dengan simpangan baku yang umum, jadi anggap hasilnya sebagai perkiraan yang baik, bukan peringkat pasti.",
      },
    ],
  },
};

export default messages;
