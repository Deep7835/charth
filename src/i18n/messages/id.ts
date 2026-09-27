import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Perbandingan Tinggi Badan – Bandingkan di Grafik Visual",
    description:
      "Alat perbandingan tinggi badan gratis: bandingkan orang, selebritas, karakter anime, dan benda di grafik akurat (cm atau kaki-inci). Bagikan/unduh sekali klik.",
    ogAlt: "Grafik perbandingan tinggi badan dengan beberapa orang berdiri berdampingan",
  },
  nav: {
    tool: "Perbandingan Tinggi",
    tools: "Alat",
    language: "Bahasa",
    skip: "Langsung ke konten",
  },
  board: {
    title: "Papan perbandingan tinggi badan",
    add: "Tambah",
    addMan: "Pria",
    addWoman: "Wanita",
    addObject: "Benda",
    addImage: "Gambar",
    library: "Pustaka",
    searchPlaceholder: "Cari orang, karakter, benda…",
    noResults: "Tidak ada hasil. Tambahkan orang kustom saja.",
    categories: {
      generic: "Orang",
      athlete: "Atlet",
      celebrity: "Selebritas",
      character: "Karakter",
      record: "Rekor",
      object: "Benda",
      animal: "Hewan",
    },
    defaultMan: "Pria",
    defaultWoman: "Wanita",
    defaultObject: "Benda",
    defaultImage: "Gambar",
    name: "Nama",
    height: "Tinggi",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Jenis",
    kinds: { male: "Pria", female: "Wanita", object: "Benda", image: "Gambar" },
    build: "Postur",
    builds: { slim: "Ramping", average: "Sedang", broad: "Kekar" },
    shape: "Bentuk",
    shapes: { block: "Balok", door: "Pintu", tree: "Pohon", building: "Gedung", tower: "Menara" },
    adultProportions: "Proporsi dewasa",
    color: "Warna",
    remove: "Hapus",
    duplicate: "Duplikat",
    moveLeft: "Geser ke kiri",
    moveRight: "Geser ke kanan",
    share: "Bagikan",
    linkCopied: "Tautan disalin",
    download: "Unduh PNG",
    reset: "Atur ulang",
    clearAll: "Hapus semua",
    subjects: "Subjek",
    empty: "Tambahkan orang, benda, atau gambar untuk mulai membandingkan.",
    tallerBy: "{a} lebih tinggi {diff} ({pct}) dari {b}",
    sameHeight: "{a} dan {b} sama tinggi",
    imageNote: "Gambar yang diunggah tetap di perangkat Anda dan tidak ikut dalam tautan berbagi.",
    edit: "Ubah",
    done: "Selesai",
    fitAll: "Tampilkan semua",
    focus: "Fokus",
    resize: "Seret untuk mengubah tinggi",
    loading3d: "Memuat 3D…",
    orbitHint: "Seret untuk memutar · gulir atau cubit untuk zoom",
  },
  home: {
    h1: "Alat Perbandingan Tinggi Badan",
    tagline:
      "Bandingkan tinggi badan orang, selebritas, karakter, dan benda secara berdampingan dalam satu grafik akurat, dalam sentimeter atau kaki dan inci.",
    howTitle: "Cara membandingkan tinggi badan",
    how: [
      {
        title: "Tambahkan subjek",
        body: "Tambahkan pria, wanita, benda, atau gambar Anda sendiri, atau pilih dari pustaka selebritas, atlet, dan karakter anime.",
      },
      {
        title: "Masukkan tinggi yang tepat",
        body: "Ketik tinggi dalam cm atau ft/in. Setiap figur digambar sesuai skala dengan proporsi tubuh yang menyesuaikan usia.",
      },
      {
        title: "Bagikan atau unduh",
        body: "Salin tautan yang membuka ulang grafik Anda, atau unduh PNG untuk chat, unggahan media sosial, dan lembar referensi.",
      },
    ],
    featuresTitle: "Kenapa pakai grafik perbandingan tinggi ini",
    features: [
      {
        title: "Gambar sesuai skala asli",
        body: "Semua figur memakai satu skala vertikal dengan grid dalam satuan metrik dan imperial, jadi selisihnya selalu tepat.",
      },
      {
        title: "Proporsi realistis",
        body: "Anak-anak digambar dengan kepala lebih besar dan kaki lebih pendek; orang dewasa memakai proporsi 7,5 kepala. Pilih postur ramping, sedang, atau kekar.",
      },
      {
        title: "Orang, karakter, dan benda",
        body: "Bandingkan diri Anda dengan atlet, aktor, pahlawan anime, pintu, mobil, pohon, hingga bangunan setinggi Burj Khalifa.",
      },
      {
        title: "Gratis, cepat, tanpa daftar",
        body: "Semuanya berjalan di browser Anda. Tautan berbagi menyimpan grafik itu sendiri, jadi tidak ada yang diunggah.",
      },
    ],
    useCasesTitle: "Cara populer memakainya",
    useCases: [
      { title: "Selisih tinggi pasangan", body: "Lihat bagaimana Anda dan pasangan saat berdiri berdampingan, dan seberapa jelas perbedaannya di foto." },
      { title: "Cek tinggi selebritas", body: "Berdiri di samping Cristiano Ronaldo, Lionel Messi, atau Taylor Swift dan lihat perbedaan aslinya." },
      { title: "Referensi ukuran karakter", body: "Ilustrator dan penulis bisa menjajarkan karakter agar skalanya konsisten di setiap adegan." },
      { title: "Pertumbuhan anak", body: "Pantau tinggi anak dibandingkan saudara, orang tua, atau rata-rata tinggi anak seusianya." },
    ],
    faqTitle: "Pertanyaan yang sering diajukan",
    faq: [
      {
        q: "Seberapa akurat perbandingan tinggi badan ini?",
        a: "Semua figur digambar pada satu skala linear, jadi perbedaan yang terlihat sama persis dengan angka yang Anda masukkan. Tinggi di pustaka adalah angka yang umum dilaporkan dan bisa sedikit berbeda dari sumber lain.",
      },
      {
        q: "Bisakah saya beralih antara sentimeter dan kaki?",
        a: "Bisa. Gunakan tombol cm / ft-in di atas grafik. Anda bisa mengetik tinggi dalam satuan mana pun, dan keduanya selalu ditampilkan di label dan grid.",
      },
      {
        q: "Bagaimana cara membandingkan tinggi saya dengan selebritas?",
        a: "Tambahkan orang dengan tinggi badan Anda, lalu buka pustaka, cari nama selebritasnya, dan ketuk untuk menambahkannya di samping Anda.",
      },
      {
        q: "Bisakah saya menyimpan atau membagikan grafik?",
        a: "Ketuk Bagikan untuk menyalin tautan yang membuka grafik yang sama bagi siapa pun, atau Unduh PNG untuk menyimpan gambarnya.",
      },
      {
        q: "Kenapa figur yang pendek terlihat seperti anak-anak?",
        a: "Proporsi tubuh berubah seiring usia, jadi tinggi di bawah rentang dewasa memakai proporsi anak. Centang “Proporsi dewasa” untuk orang dewasa yang pendek.",
      },
      {
        q: "Bisakah saya membandingkan benda dan bangunan?",
        a: "Bisa. Tambahkan pintu, mobil, pohon, atau bangunan terkenal, atau buat benda kustom dengan tinggi dan lebar berapa pun, hingga berkilo-kilometer.",
      },
    ],
    ctaTitle: "Mulai bandingkan tinggi badan",
    ctaBody: "Grafik Anda ada di bagian atas halaman dan langsung diperbarui saat Anda mengetik.",
    ctaButton: "Ke grafik",
  },
  footer: {
    about: "Alat perbandingan tinggi badan visual gratis untuk orang, karakter, dan benda.",
    rights: "Hak cipta dilindungi undang-undang.",
  },
};

export default messages;
