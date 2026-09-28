import type { LegalMessages } from "./en";

const messages: LegalMessages = {
  privacy: {
    metaTitle: "Kebijakan Privasi",
    metaDescription: "Cara {site} menangani data Anda: tanpa akun, grafik tetap berada di browser Anda, dan statistik penggunaan anonim dengan Google Analytics.",
    h1: "Kebijakan Privasi",
    intro:
      "{site} adalah alat perbandingan tinggi badan gratis. Kami mengumpulkan data sesedikit mungkin. Kebijakan ini menjelaskan apa yang diproses saat Anda menggunakan situs dan pilihan yang Anda miliki.",
    sections: [
      {
        h: "Data yang Anda masukkan",
        p: [
          "Nama dan tinggi badan yang Anda ketik di alat diproses di browser Anda. Kami tidak menyimpannya di server kami.",
          "Saat Anda menggunakan fitur Bagikan, grafik dikodekan langsung ke dalam tautan. Siapa pun yang memiliki tautan tersebut dapat melihat grafik itu, jadi hindari mencantumkan informasi pribadi dalam nama.",
          "Gambar yang Anda unggah dibaca secara lokal oleh browser Anda dan tidak pernah diunggah atau disertakan dalam tautan berbagi.",
        ],
      },
      {
        h: "Cookie dan penyimpanan lokal",
        p: [
          "Kami menyimpan beberapa preferensi teknis di penyimpanan lokal browser Anda. Preferensi ini diperlukan agar situs berfungsi sesuai harapan Anda.",
          "Kami menggunakan Google Analytics untuk mengukur penggunaan anonim seperti halaman yang dikunjungi, negara, dan jenis perangkat. Google Analytics menetapkan cookie untuk tujuan ini. Anda dapat memblokir atau menghapus cookie melalui pengaturan browser Anda, atau memasang add-on browser penonaktifan dari Google (tools.google.com/dlpage/gaoptout).",
          "Jika di masa mendatang kami menampilkan iklan, cookie iklan yang dipersonalisasi hanya akan digunakan dengan persetujuan Anda, dan kebijakan ini akan diperbarui terlebih dahulu.",
        ],
      },
      {
        h: "Log server",
        p: [
          "Penyedia hosting kami secara otomatis memproses data teknis seperti alamat IP, jenis browser, dan halaman yang diminta untuk menyajikan situs dan melindunginya dari penyalahgunaan. Log ini disimpan untuk waktu yang terbatas dan tidak digunakan untuk mengidentifikasi Anda.",
        ],
      },
      {
        h: "Hak Anda",
        p: [
          "Tergantung tempat tinggal Anda (misalnya berdasarkan GDPR di Uni Eropa atau CCPA di California), Anda mungkin memiliki hak untuk mengakses, memperbaiki, atau menghapus data pribadi serta menolak pemrosesan. Karena kami tidak menyimpan akun atau data grafik, sebagian besar permintaan dapat ditangani dengan menghapus penyimpanan browser Anda. Untuk hal lainnya, hubungi kami di {email}.",
        ],
      },
      {
        h: "Anak-anak",
        p: ["Situs ini cocok untuk khalayak umum dan tidak secara sengaja mengumpulkan data pribadi dari anak-anak."],
      },
      {
        h: "Perubahan",
        p: ["Kami dapat memperbarui kebijakan ini. Tanggal di bagian atas halaman menunjukkan versi terbaru."],
      },
    ],
  },
  terms: {
    metaTitle: "Ketentuan Layanan",
    metaDescription: "Ketentuan penggunaan {site}, alat perbandingan tinggi badan visual gratis, termasuk penggunaan yang diperbolehkan dan penafian.",
    h1: "Ketentuan Layanan",
    intro: "Dengan menggunakan {site}, Anda menyetujui ketentuan ini. Jika Anda tidak setuju, mohon jangan gunakan situs ini.",
    sections: [
      {
        h: "Menggunakan alat",
        p: [
          "Alat-alat ini gratis untuk penggunaan pribadi, pendidikan, dan komersial. Anda boleh membagikan dan memublikasikan grafik yang Anda buat, termasuk gambar yang diunduh.",
          "Jangan menyalahgunakan situs, misalnya dengan mencoba mengganggunya, melakukan scraping dalam volume yang memengaruhi pengguna lain, atau menggunakannya untuk membuat konten yang melanggar hukum atau bersifat melecehkan.",
        ],
      },
      {
        h: "Akurasi",
        p: [
          "Tinggi tokoh publik, karakter, hewan, dan objek merupakan nilai yang umum dilaporkan dan dapat berbeda dari sumber lain. Statistik berasal dari dataset penelitian yang dikutip. Proporsi tubuh dalam gambar dan model 3D merupakan perkiraan.",
          "Situs ini ditujukan untuk informasi dan hiburan. Situs ini bukan saran medis; konsultasikan dengan tenaga profesional untuk pertanyaan tentang pertumbuhan atau kesehatan.",
        ],
      },
      {
        h: "Kekayaan intelektual",
        p: [
          "Desain, kode, dan ilustrasi situs adalah milik {site}. Nama orang, karakter, dan landmark adalah milik pemiliknya masing-masing dan hanya digunakan untuk identifikasi.",
          "Data tinggi badan rata-rata © NCD Risk Factor Collaboration dan digunakan berdasarkan lisensi CC BY 4.0.",
        ],
      },
      {
        h: "Tanggung jawab",
        p: [
          "Situs ini disediakan “sebagaimana adanya” tanpa jaminan. Sejauh diizinkan oleh hukum, kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaannya.",
        ],
      },
      {
        h: "Kontak",
        p: ["Pertanyaan tentang ketentuan ini: {email}."],
      },
    ],
  },
};

export default messages;
