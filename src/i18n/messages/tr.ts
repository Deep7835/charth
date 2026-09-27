import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "Boy Karşılaştırma Aracı – Boy Farkını Grafikte Görün",
    description:
      "Ücretsiz boy karşılaştırma aracı: kişileri, ünlüleri, anime karakterlerini ve nesneleri cm ya da ft/in cinsinden ölçekli grafikte yan yana görün, paylaşın.",
    ogAlt: "Yan yana duran birkaç kişiyi gösteren boy karşılaştırma grafiği",
  },
  nav: {
    tool: "Boy Karşılaştırma",
    tools: "Araçlar",
    language: "Dil",
    skip: "İçeriğe geç",
  },
  board: {
    title: "Boy karşılaştırma panosu",
    add: "Ekle",
    addMan: "Erkek",
    addWoman: "Kadın",
    addObject: "Nesne",
    addImage: "Görsel",
    library: "Kütüphane",
    searchPlaceholder: "Kişi, karakter veya nesne ara…",
    noResults: "Sonuç bulunamadı. Bunun yerine özel bir kişi ekleyin.",
    categories: {
      generic: "Kişiler",
      athlete: "Sporcular",
      celebrity: "Ünlüler",
      character: "Karakterler",
      record: "Rekorlar",
      object: "Nesneler",
      animal: "Hayvanlar",
    },
    defaultMan: "Erkek",
    defaultWoman: "Kadın",
    defaultObject: "Nesne",
    defaultImage: "Görsel",
    name: "Ad",
    height: "Boy",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Tür",
    kinds: { male: "Erkek", female: "Kadın", object: "Nesne", image: "Görsel" },
    build: "Vücut tipi",
    builds: { slim: "İnce", average: "Orta", broad: "Geniş" },
    shape: "Şekil",
    shapes: { block: "Blok", door: "Kapı", tree: "Ağaç", building: "Bina", tower: "Kule" },
    adultProportions: "Yetişkin oranları",
    color: "Renk",
    remove: "Kaldır",
    duplicate: "Kopyala",
    moveLeft: "Sola taşı",
    moveRight: "Sağa taşı",
    share: "Paylaş",
    linkCopied: "Bağlantı kopyalandı",
    download: "PNG indir",
    reset: "Sıfırla",
    clearAll: "Tümünü temizle",
    subjects: "Karşılaştırılanlar",
    empty: "Karşılaştırmaya başlamak için bir kişi, nesne veya görsel ekleyin.",
    tallerBy: "{a}, {b} ile karşılaştırıldığında {diff} ({pct}) daha uzun",
    sameHeight: "{a} ile {b} aynı boyda",
    imageNote: "Yüklenen görseller cihazınızda kalır ve paylaşım bağlantılarına eklenmez.",
    edit: "Düzenle",
    done: "Tamam",
    fitAll: "Tümünü sığdır",
    focus: "Odakla",
    resize: "Boyu değiştirmek için sürükle",
    loading3d: "3D yükleniyor…",
    orbitHint: "Döndürmek için sürükle · yakınlaştırmak için kaydır veya sıkıştır",
  },
  home: {
    h1: "Boy Karşılaştırma Aracı",
    tagline:
      "İnsanların, ünlülerin, karakterlerin ve nesnelerin boylarını tek bir doğru ölçekli grafikte, santimetre ya da feet ve inç cinsinden yan yana karşılaştırın.",
    howTitle: "Boylar nasıl karşılaştırılır?",
    how: [
      {
        title: "Karşılaştırılacakları ekleyin",
        body: "Bir erkek, kadın, nesne ya da kendi görselinizi ekleyin veya ünlüler, sporcular ve anime karakterlerinden oluşan kütüphaneden seçim yapın.",
      },
      {
        title: "Boyları tam olarak girin",
        body: "Boyları cm veya ft/in olarak yazın. Figürler, yaşa uygun vücut oranlarıyla gerçek ölçekte çizilir.",
      },
      {
        title: "Paylaşın veya indirin",
        body: "Grafiğinizi aynen yeniden oluşturan bir bağlantı kopyalayın ya da sohbetler, sosyal medya paylaşımları ve referans çizimleri için PNG indirin.",
      },
    ],
    featuresTitle: "Neden bu boy karşılaştırma grafiği?",
    features: [
      {
        title: "Gerçek ölçekli çizim",
        body: "Tüm figürler, hem metrik hem imperial birimlerde ızgarası olan tek bir dikey ölçeği paylaşır; böylece boy farkı birebir doğru görünür.",
      },
      {
        title: "Gerçekçi vücut oranları",
        body: "Çocuklar daha büyük baş ve daha kısa bacaklarla çizilir; yetişkinlerde 7,5 baş kuralı kullanılır. İnce, orta veya geniş vücut tipi seçebilirsiniz.",
      },
      {
        title: "İnsanlar, karakterler ve nesneler",
        body: "Kendinizi sporcular, oyuncular, anime kahramanları, kapılar, arabalar, ağaçlar ve Burj Khalifa kadar yüksek simge yapılarla karşılaştırın.",
      },
      {
        title: "Ücretsiz, hızlı, üyelik yok",
        body: "Her şey tarayıcınızda çalışır. Paylaşım bağlantıları grafiğin kendisini içerir, yani hiçbir şey sunucuya yüklenmez.",
      },
    ],
    useCasesTitle: "En çok nasıl kullanılıyor?",
    useCases: [
      { title: "Sevgililer arası boy farkı", body: "Partnerinizle yan yana nasıl durduğunuzu ve aradaki farkın fotoğraflarda ne kadar belirgin olduğunu görün." },
      { title: "Ünlülerle boy karşılaştırma", body: "LeBron James, Taylor Swift veya Tom Cruise'un yanında durun ve gerçek boy farkını görün." },
      { title: "Karakter boyut referansı", body: "Çizerler ve yazarlar, sahneler arasında ölçek tutarlılığını korumak için karakterleri yan yana dizebilir." },
      { title: "Çocukların büyümesi", body: "Bir çocuğun kardeşlerine, ebeveynlerine veya yaşının ortalama boyuna göre nerede olduğunu takip edin." },
    ],
    faqTitle: "Sıkça sorulan sorular",
    faq: [
      {
        q: "Boy karşılaştırması ne kadar doğru?",
        a: "Figürler tek bir doğrusal ölçekte çizilir, bu yüzden görsel fark girdiğiniz değerlerle birebir örtüşür. Kütüphanedeki boylar yaygın olarak bildirilen değerlerdir ve başka kaynaklardan biraz farklı olabilir.",
      },
      {
        q: "Santimetre ile feet arasında geçiş yapabilir miyim?",
        a: "Evet. Grafiğin üstündeki cm / ft/in düğmesini kullanın. Boyları iki birimde de girebilirsiniz; etiketlerde ve ızgarada her iki birim de her zaman gösterilir.",
      },
      {
        q: "Boyumu bir ünlüyle nasıl karşılaştırırım?",
        a: "Kendi boyunuzda bir kişi ekleyin, ardından kütüphaneyi açın, ünlüyü arayın ve yanınıza eklemek için üzerine dokunun.",
      },
      {
        q: "Grafiğimi kaydedebilir veya paylaşabilir miyim?",
        a: "Aynı grafiği açan herkes için yeniden oluşturan bir bağlantıyı kopyalamak için Paylaş'a, görsel olarak kaydetmek için PNG indir'e dokunun.",
      },
      {
        q: "Kısa figürler neden çocuk gibi görünüyor?",
        a: "Vücut oranları yaşla birlikte değişir; bu yüzden yetişkin aralığının altındaki boylara çocuk oranları uygulanır. Kısa boylu yetişkinler için “Yetişkin oranları” kutusunu işaretleyin.",
      },
      {
        q: "Nesneleri ve binaları karşılaştırabilir miyim?",
        a: "Evet. Kapılar, arabalar, ağaçlar veya simge yapılar ekleyin ya da kilometrelerce yüksekliğe kadar istediğiniz boy ve genişlikte özel bir nesne oluşturun.",
      },
    ],
    ctaTitle: "Boyları karşılaştırmaya başlayın",
    ctaBody: "Grafiğiniz sayfanın en üstünde. Siz yazdıkça anında güncellenir.",
    ctaButton: "Grafiğe git",
  },
  footer: {
    about: "İnsanlar, karakterler ve nesneler için ücretsiz, görsel bir boy karşılaştırma aracı.",
    rights: "Tüm hakları saklıdır.",
  },
};

export default messages;
