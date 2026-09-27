import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Prediksi tinggi badan",
      blurb: "Nanti tinggi saya berapa? Prediksi tinggi badan dewasa dari tinggi orang tua atau tinggi anak saat ini.",
    },
    "growth-chart": {
      name: "Rata-rata tinggi badan sesuai umur",
      blurb: "Grafik pertumbuhan anak laki-laki dan perempuan usia 5–19 tahun di 200 negara, lengkap dengan cek tinggi badan anak.",
    },
    "bmi-calculator": {
      name: "BMI & berat badan ideal",
      blurb: "Hitung BMI dan lihat rentang berat badan sehat untuk tinggi badan Anda.",
    },
  },
  common: {
    boy: "Laki-laki",
    girl: "Perempuan",
    age: "Usia",
    years: "{n} tahun",
    father: "Tinggi ayah",
    mother: "Tinggi ibu",
    childHeight: "Tinggi anak saat ini",
    optional: "opsional",
    estimateNote: "Hanya perkiraan — genetika, gizi, kesehatan, dan waktu pubertas semuanya memengaruhi pertumbuhan yang sebenarnya.",
  },
  predictor: {
    metaTitle: "Kalkulator Tinggi Badan Anak – Prediksi Tinggi Badan Dewasa",
    metaDescription:
      "Kalkulator tinggi badan anak untuk prediksi tinggi badan dewasa dari tinggi orang tua (metode mid-parental) dan tinggi anak saat ini sesuai umur, data 200 negara.",
    h1: "Prediksi tinggi badan: nanti tinggi saya berapa?",
    intro:
      "Perkirakan tinggi badan dewasa dengan dua cara: dari tinggi kedua orang tua, dan dari tinggi anak saat ini dibandingkan dengan rata-rata pertumbuhan di negaranya.",
    parentsResult: "Berdasarkan tinggi orang tua",
    currentResult: "Berdasarkan tinggi saat ini sesuai umur",
    range: "Rentang kemungkinan: {low} – {high}",
    currentUnavailable: "Masukkan tinggi anak (usia 5–17 tahun) untuk perkiraan kedua.",
    howTitle: "Cara kerja prediksi",
    how: [
      "Tinggi orang tua (metode mid-parental): jumlahkan tinggi ibu dan ayah, tambahkan 13 cm untuk anak laki-laki atau kurangi 13 cm untuk anak perempuan, lalu bagi 2. Inilah tinggi target yang dipakai dokter anak; sebagian besar anak (sekitar 95%) tingginya kelak berada dalam kisaran sekitar 8.5 cm (3.3 in) dari angka ini.",
      "Tinggi saat ini sesuai umur: tinggi anak dibandingkan dengan rata-rata nasional untuk usia dan jenis kelaminnya (data NCD-RisC), dengan asumsi posisinya terhadap rata-rata tetap sama hingga dewasa. Cara ini paling tepat sebelum pubertas; pubertas yang datang lebih awal atau lebih lambat bisa menggeser hasilnya.",
      "Jika kedua perkiraan sejalan, prediksinya lebih bisa diandalkan. Selisih besar di antara keduanya umum terjadi saat masa lonjakan pertumbuhan dan itu sendiri bukan alasan untuk khawatir.",
    ],
    faq: [
      {
        q: "Seberapa akurat prediksi tinggi badan?",
        a: "Metode mid-parental menempatkan sebagian besar anak dalam kisaran sekitar ±8.5 cm dari tinggi target. Tidak ada kalkulator yang bisa memperhitungkan waktu pubertas, gizi, atau kondisi medis, jadi anggaplah hasilnya sebagai panduan.",
      },
      {
        q: "Apakah saya bisa memprediksi tinggi badan saat sudah remaja?",
        a: "Bisa. Masukkan usia dan tinggi badan Anda saat ini. Setelah sekitar usia 15 pada perempuan dan 17 pada laki-laki, kebanyakan orang hanya bertambah tinggi kurang dari 1 cm per tahun, jadi tinggi Anda saat ini sudah mendekati tinggi dewasa.",
      },
      {
        q: "Tinggi badan lebih banyak ditentukan oleh ayah atau ibu?",
        a: "Kedua orang tua berkontribusi kurang lebih sama besar. Karena itu, rumusnya merata-ratakan tinggi keduanya, lalu menyesuaikannya dengan selisih umum antara pria dan wanita.",
      },
    ],
  },
  growth: {
    metaTitle: "Tinggi Badan Ideal Anak Sesuai Umur: Rata-rata 5–19 Tahun",
    metaDescription:
      "Tinggi badan ideal anak sesuai umur: rata-rata tinggi anak laki-laki dan perempuan usia 5–19 tahun di 200 negara, grafik pertumbuhan, dan cek cepat tinggi anak Anda.",
    h1: "Rata-rata tinggi badan sesuai umur: grafik pertumbuhan anak laki-laki dan perempuan",
    intro: "Lihat rata-rata tinggi badan di setiap usia dari 5 hingga 19 tahun di negara mana pun, dan bandingkan dengan tinggi anak.",
    tableTitle: "Rata-rata tinggi badan sesuai umur — {country}",
    above: "{diff} di atas rata-rata usia {age} tahun",
    below: "{diff} di bawah rata-rata usia {age} tahun",
    atAverage: "Tepat di rata-rata usia {age} tahun",
    chartBoys: "Laki-laki",
    chartGirls: "Perempuan",
    childPoint: "Anak Anda",
    contentTitle: "Bagaimana anak bertumbuh",
    content: [
      "Dari usia 5 tahun hingga pubertas, anak bertambah tinggi sekitar 5–6 cm (2 in) per tahun. Di 200 negara, tahun pertumbuhan tercepat anak perempuan biasanya antara usia 10 dan 11, sedangkan anak laki-laki antara 12 dan 13.",
      "Pada usia 14, anak perempuan rata-rata sudah mencapai 98% tinggi dewasanya dan anak laki-laki sekitar 94%. Anak laki-laki mencapai sekitar 98% pada usia 16. Setelah usia 17, pertumbuhan rata-rata turun di bawah 1 cm (0.4 in) per tahun.",
      "Ini adalah rata-rata nasional, yang menyamarkan lonjakan pertumbuhan tiap individu. Anak yang sehat bisa jauh di atas atau di bawah garis rata-rata; yang paling penting adalah pertumbuhan yang stabil dari waktu ke waktu.",
    ],
    faq: [
      {
        q: "Berapa rata-rata tinggi badan anak usia 12 tahun?",
        a: "Tergantung negaranya: di Amerika Serikat sekitar 155 cm (5′1″) untuk anak laki-laki maupun perempuan, di Jepang sekitar 151 cm (sedikit di bawah 5 ft), dan di India sekitar 142–144 cm (4′8″–4′9″). Pilih negara di atas untuk melihat angka pastinya.",
      },
      {
        q: "Pada usia berapa anak perempuan dan laki-laki berhenti tumbuh tinggi?",
        a: "Kebanyakan anak perempuan sudah mendekati tinggi dewasanya pada usia 15–16 dan kebanyakan anak laki-laki pada usia 17–18. Setelah itu, pertumbuhan rata-rata kurang dari 1 cm per tahun.",
      },
      {
        q: "Apakah tinggi badan anak saya normal?",
        a: "Tinggi anak sangat bervariasi di sekitar rata-rata, jadi satu kali pengukuran yang di atas atau di bawah rata-rata biasanya normal. Konsultasikan dengan dokter jika pertumbuhan tiba-tiba melambat atau posisi anak bergeser jauh dari biasanya seiring waktu.",
      },
    ],
  },
  bmi: {
    metaTitle: "Kalkulator BMI & Berat Badan Ideal Sesuai Tinggi Badan",
    metaDescription:
      "Kalkulator BMI: hitung BMI dalam satuan metrik atau imperial dan lihat berat badan sehat untuk tinggi Anda, dengan tabel tinggi–berat sesuai kategori BMI WHO.",
    h1: "Kalkulator BMI dan berat badan sehat untuk tinggi Anda",
    intro: "Masukkan tinggi dan berat badan Anda untuk mengetahui indeks massa tubuh (BMI) dan rentang berat badan sehat untuk tinggi Anda.",
    weight: "Berat badan",
    yourBmi: "BMI Anda",
    categories: {
      underweight: "Berat badan kurang",
      normal: "Berat badan sehat",
      overweight: "Kelebihan berat badan",
      obese: "Obesitas",
    },
    healthyRange: "Berat badan sehat untuk {height}: {low} – {high}",
    chartTitle: "Rentang berat badan sehat menurut tinggi",
    colHeight: "Tinggi",
    colRange: "Berat badan sehat (BMI 18.5–24.9)",
    note: "Untuk orang dewasa usia 18 tahun ke atas. BMI tidak membedakan otot dan lemak; anak-anak dan remaja memerlukan grafik BMI khusus sesuai usia.",
    contentTitle: "Apa yang ditunjukkan BMI",
    content: [
      "BMI adalah berat badan dalam kilogram dibagi kuadrat tinggi badan dalam meter. Organisasi Kesehatan Dunia (WHO) mengelompokkan BMI orang dewasa sebagai berat badan kurang jika di bawah 18.5, sehat dari 18.5 hingga 24.9, kelebihan berat badan dari 25 hingga 29.9, dan obesitas mulai dari 30.",
      "Karena hanya menggunakan tinggi dan berat badan, BMI adalah angka skrining cepat, bukan diagnosis. Orang yang sangat berotot bisa memiliki BMI tinggi tanpa kelebihan lemak, dan beberapa pedoman kesehatan memakai ambang batas yang lebih rendah untuk orang keturunan Asia.",
    ],
    faq: [
      { q: "Berapa BMI yang sehat?", a: "Untuk orang dewasa, rentang sehat menurut WHO adalah 18.5 hingga 24.9." },
      {
        q: "Bagaimana cara menghitung BMI?",
        a: "Bagi berat badan dalam kilogram dengan kuadrat tinggi badan dalam meter. Contoh: 70 kg dengan tinggi 1.75 m adalah 70 ÷ 3.06 = 22.9.",
      },
      {
        q: "Berapa berat badan ideal untuk tinggi 170 cm?",
        a: "Untuk tinggi 170 cm (5′7″), BMI 18.5–24.9 setara dengan berat sekitar 53.5–72.0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "Tinggi badan {name}: berapa cm? ({cm} / {ftin})",
    metaDescription:
      "Tinggi badan {name} adalah {cm} ({ftin}). Bandingkan tinggi {name} dengan rata-rata pria dan wanita, dan lihat siapa lagi yang tingginya hampir sama.",
    h1: "Tinggi badan {name}",
    answer: "Tinggi badan {name} adalah {cm} ({ftin}).",
    boardTitle: "{name} di samping pria dan wanita rata-rata",
    statsTitle: "Seberapa tinggi itu?",
    tallerThan: "Lebih tinggi dari {pct} {group} di seluruh dunia",
    groupMen: "pria",
    groupWomen: "wanita",
    diffTaller: "{diff} lebih tinggi dari rata-rata {who}",
    diffShorter: "{diff} lebih pendek dari rata-rata {who}",
    whoMan: "pria",
    whoWoman: "wanita",
    similarTitle: "Tinggi badan hampir sama",
    compareCta: "Bandingkan {name} dengan tinggi Anda",
    sourceNote: "Tinggi badan {name} sesuai yang umum dilaporkan; angkanya bisa sedikit berbeda antarsumber.",
    faqFeet: "Berapa tinggi {name} dalam kaki?",
    faqFeetA: "Tinggi {name} adalah {ftin}, atau {cm}.",
    faqTall: "Apakah {name} tinggi?",
    faqTallAbove: "Ya. Dengan tinggi {cm}, {name} lebih tinggi dari {pct} {group} di seluruh dunia.",
    faqTallAverage: "Tinggi {name} mendekati rata-rata: dengan {cm}, lebih tinggi dari {pct} {group} di seluruh dunia.",
    faqTallBelow: "{name} lebih pendek dari rata-rata: dengan {cm}, hanya lebih tinggi dari {pct} {group} di seluruh dunia.",
    faqVs: "Apakah {name} lebih tinggi dari {other}?",
    faqVsTaller: "Ya. {name} ({cm}) {diff} lebih tinggi dari {other} ({otherCm}).",
    faqVsShorter: "Tidak. {name} ({cm}) {diff} lebih pendek dari {other} ({otherCm}).",
    faqVsSame: "Tinggi mereka sama: {cm}.",
  },
  people: {
    metaTitle: "Tinggi Badan Artis – Berapa Tinggi Selebriti & Karakter?",
    metaDescription:
      "Tinggi badan atlet, aktor, musisi, dan karakter anime dalam cm dan kaki, masing-masing dengan perbandingan visual terhadap rata-rata pria dan wanita.",
    h1: "Tinggi badan selebriti, atlet, dan karakter",
    intro: "Pilih nama untuk melihat tingginya di grafik berskala dan membandingkannya dengan tinggi Anda.",
  },
  guides: {
    metaTitle: "Panduan Tinggi Badan – Cara Mengukur, Pertumbuhan & Selisih",
    metaDescription:
      "Panduan praktis tentang cara mengukur tinggi badan di rumah, kapan orang berhenti tumbuh tinggi, dan seperti apa selisih tinggi badan terlihat.",
    h1: "Panduan tinggi badan",
    intro: "Panduan singkat dan praktis, lengkap dengan angka-angkanya.",
    read: "Baca panduan",
    minutes: "{n} menit baca",
  },
};

export default messages;
