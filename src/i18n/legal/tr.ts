import type { LegalMessages } from "./en";

const messages: LegalMessages = {
  privacy: {
    metaTitle: "Gizlilik Politikası",
    metaDescription: "{site} verilerinizi nasıl işler: hesap yok, grafikler tarayıcınızda kalır, isteğe bağlı analiz çerezleri yalnızca onayınızla kullanılır.",
    h1: "Gizlilik Politikası",
    intro:
      "{site}, ücretsiz bir boy karşılaştırma aracıdır. Mümkün olduğunca az veri topluyoruz. Bu politika, siteyi kullandığınızda nelerin işlendiğini ve sahip olduğunuz seçenekleri açıklar.",
    sections: [
      {
        h: "Girdiğiniz veriler",
        p: [
          "Araçlara yazdığınız adlar ve boylar tarayıcınızda işlenir. Bunları sunucularımızda saklamayız.",
          "Paylaş özelliğini kullandığınızda grafik, bağlantının kendisine kodlanır. Bağlantıya sahip olan herkes o grafiği görebilir; bu nedenle adlara özel bilgi yazmaktan kaçının.",
          "Yüklediğiniz görseller tarayıcınız tarafından yerel olarak okunur; hiçbir zaman karşıya yüklenmez veya paylaşım bağlantılarına eklenmez.",
        ],
      },
      {
        h: "Çerezler ve yerel depolama",
        p: [
          "Tema tercihinizi ve çerez seçiminizi tarayıcınızın yerel depolama alanında saklarız. Bunlar, sitenin beklediğiniz şekilde çalışması için gereklidir.",
          "Analiz çerezlerini kabul ederseniz, ziyaret edilen sayfalar, ülke ve cihaz türü gibi anonim kullanım verilerini ölçmek için Google Analytics kullanırız. Onayınız olmadan analiz kullanmayız ve seçiminizi alt bilgideki “Çerez ayarları” bağlantısından istediğiniz zaman değiştirebilirsiniz.",
          "Gelecekte reklam gösterirsek, kişiselleştirilmiş reklam çerezleri yalnızca onayınızla kullanılacak ve bu politika önceden güncellenecektir.",
        ],
      },
      {
        h: "Sunucu kayıtları",
        p: [
          "Barındırma sağlayıcımız, siteyi sunmak ve kötüye kullanıma karşı korumak için IP adresi, tarayıcı türü ve istenen sayfalar gibi teknik verileri otomatik olarak işler. Bu kayıtlar sınırlı bir süre saklanır ve kimliğinizi belirlemek için kullanılmaz.",
        ],
      },
      {
        h: "Haklarınız",
        p: [
          "Yaşadığınız yere bağlı olarak (örneğin AB’de GDPR veya Kaliforniya’da CCPA kapsamında), kişisel verilere erişme, bunları düzeltme veya silme ve işlenmelerine itiraz etme hakkına sahip olabilirsiniz. Hesap veya grafik verisi tutmadığımız için çoğu talep, tarayıcı depolamanızı temizleyerek karşılanabilir. Diğer konular için bize şu adresten ulaşabilirsiniz: {email}",
        ],
      },
      {
        h: "Çocuklar",
        p: ["Site genel kitleye uygundur ve bilerek çocuklardan kişisel veri toplamaz."],
      },
      {
        h: "Değişiklikler",
        p: ["Bu politikayı güncelleyebiliriz. Sayfanın üst kısmındaki tarih en son sürümü gösterir."],
      },
    ],
  },
  terms: {
    metaTitle: "Kullanım Koşulları",
    metaDescription: "Ücretsiz bir görsel boy karşılaştırma aracı olan {site} için kullanım koşulları; kabul edilebilir kullanım ve sorumluluk reddi beyanları dahil.",
    h1: "Kullanım Koşulları",
    intro: "{site} sitesini kullanarak bu koşulları kabul etmiş olursunuz. Kabul etmiyorsanız lütfen siteyi kullanmayın.",
    sections: [
      {
        h: "Araçların kullanımı",
        p: [
          "Araçlar kişisel, eğitim ve ticari kullanım için ücretsizdir. İndirilen görseller dahil, oluşturduğunuz grafikleri paylaşabilir ve yayımlayabilirsiniz.",
          "Siteyi kötüye kullanmayın; örneğin siteyi aksatmaya çalışmak, diğer kullanıcıları etkileyecek hacimde veri kazımak (scraping) veya siteyi yasa dışı ya da taciz edici içerik oluşturmak için kullanmak gibi.",
        ],
      },
      {
        h: "Doğruluk",
        p: [
          "Tanınmış kişilerin, karakterlerin, hayvanların ve nesnelerin boyları yaygın olarak bildirilen değerlerdir ve başka kaynaklardan farklı olabilir. İstatistikler, kaynak gösterilen araştırma veri setlerinden alınmıştır. Çizimlerdeki ve 3D modellerdeki vücut oranları yaklaşık değerlerdir.",
          "Site bilgilendirme ve eğlence amaçlıdır. Tıbbi tavsiye değildir; büyüme veya sağlıkla ilgili sorularınız için bir uzmana danışın.",
        ],
      },
      {
        h: "Fikri mülkiyet",
        p: [
          "Sitenin tasarımı, kodu ve çizimleri {site} sitesine aittir. Kişilerin, karakterlerin ve simge yapıların adları ilgili sahiplerine aittir ve yalnızca tanımlama amacıyla kullanılır.",
          "Ortalama boy verileri: © NCD Risk Factor Collaboration. Veriler CC BY 4.0 lisansı kapsamında kullanılmaktadır.",
        ],
      },
      {
        h: "Sorumluluk",
        p: [
          "Site, herhangi bir garanti olmaksızın “olduğu gibi” sunulmaktadır. Yasaların izin verdiği ölçüde, sitenin kullanımından doğan kayıplardan sorumlu değiliz.",
        ],
      },
      {
        h: "İletişim",
        p: ["Bu koşullarla ilgili sorularınız için: {email}"],
      },
    ],
  },
};

export default messages;
