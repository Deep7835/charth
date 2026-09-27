import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Araçlar",
    home: "Ana sayfa",
    hubMetaTitle: "Ücretsiz Boy Araçları – Çevirici, Hesaplayıcılar ve Veriler",
    hubMetaDescription:
      "Ücretsiz boy araçları: cm'yi feet ve inçe çevirin, boy farkını hesaplayın, boy persentilinizi öğrenin ve ülkelere göre ortalama boyları karşılaştırın.",
    hubH1: "Boy araçları",
    hubIntro: "Boy karşılaştırma grafiğiyle birlikte kullanabileceğiniz pratik hesaplayıcılar ve referans veriler.",
    relatedTitle: "Diğer boy araçları",
    boardCta: "Boy grafiğinde karşılaştırın",
    boardCtaBody: "İnsanları, karakterleri ve nesneleri tek bir görsel ölçekte yan yana dizin.",
    openInBoard: "Boy grafiğinde aç",
    faqTitle: "Sıkça sorulan sorular",
    men: "Erkekler",
    women: "Kadınlar",
    man: "Erkek",
    woman: "Kadın",
    sex: "Cinsiyet",
    country: "Ülke",
    height: "Boy",
    source: "Kaynak",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — 19 yaşındakilerin ortalama boyu, en güncel tahminler. CC BY 4.0 ile lisanslanmıştır.",
  },
  names: {
    "height-converter": {
      name: "Boy çevirici",
      blurb: "cm'yi feet ve inçe (ya da tersine) çevirin; eksiksiz dönüşüm tablosu dahil.",
    },
    "height-difference-calculator": {
      name: "Boy farkı hesaplama",
      blurb: "İki boy arasındaki farkı tam olarak bulun, birinin diğerinde nereye kadar geldiğini görün.",
    },
    "average-height-by-country": {
      name: "Ülkelere göre ortalama boy",
      blurb: "200 ülkede erkek ve kadınların ortalama boyu; sıralı ve aranabilir.",
    },
    "height-percentile-calculator": {
      name: "Boy persentil hesaplama",
      blurb: "Ülkenizde ve dünyada erkeklerin ya da kadınların yüzde kaçından uzun olduğunuzu görün.",
    },
    "hug-simulator": {
      name: "Sarılma simülatörü",
      blurb: "İki boy için önden veya arkadan sarılmayı gerçek ölçekte görün; başların nereye geldiğini öğrenin.",
    },
    "3d-height-comparison": {
      name: "3D boy karşılaştırma",
      blurb: "İnsanları, hayvanları ve nesneleri döndürüp yakınlaştırabileceğiniz 3D modellerle karşılaştırın.",
    },
  },
  converter: {
    metaTitle: "cm'yi Feet'e Çevirme – Boy Çevirici (cm ↔ feet ve inç)",
    metaDescription:
      "Boyunuzu cm'den feet ve inçe ya da ft/in'den cm'ye anında çevirin. 4′6″ ile 7′0″ ve 140 ile 215 cm arasını kapsayan boy dönüşüm tablosu dahil.",
    h1: "Boy çevirici: cm ↔ feet ve inç",
    intro:
      "Herhangi bir kutuya boyunuzu yazın, diğerleri anında güncellensin. Sonuçlar en yakın inçe veya 0.1 cm'ye yuvarlanır.",
    centimeters: "Santimetre",
    meters: "Metre",
    feetInches: "Feet + inç",
    totalInches: "Toplam inç",
    result: "{cm}, {ftin} eder",
    tableCmTitle: "Santimetreden feet ve inçe dönüşüm tablosu",
    tableFtTitle: "Feet ve inçten santimetreye dönüşüm tablosu",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "inç",
    howTitle: "Boy nasıl çevrilir?",
    how: [
      "1 inç tam olarak 2.54 cm, 1 feet ise 12 inçtir (30.48 cm).",
      "cm'den feet ve inçe: Santimetre değerini 2.54'e bölerek toplam inci bulun, ardından 12'ye bölün. Tam sayı kısmı feet, kalan kısım inçtir. Örnek: 175 cm ÷ 2.54 = 68.9 in → 5 ft 8.9 in ≈ 5′9″.",
      "Feet ve inçten cm'ye: Feet değerini 12 ile çarpın, inçleri ekleyin, sonra 2.54 ile çarpın. Örnek: 5′10″ = 70 in × 2.54 = 177.8 cm.",
    ],
    faq: [
      { q: "170 cm kaç feet?", a: "170 cm yaklaşık 5 feet 7 inçtir (5′6.9″)." },
      { q: "6 feet kaç cm?", a: "6 feet tam olarak 182.88 cm'dir; genellikle 183 cm'ye yuvarlanır." },
      { q: "5′5″ kaç cm?", a: "5 feet 5 inç, 165.1 cm'dir." },
      {
        q: "Boy dönüşümleri neden bazen bir santimetre farklı çıkar?",
        a: "Feet cinsinden boylar genellikle en yakın inçe yuvarlanır. 1 inç 2.54 cm olduğundan, yuvarlanmış bir değer yaklaşık 1.3 cm'ye kadar sapabilir.",
      },
    ],
  },
  difference: {
    metaTitle: "Boy Farkı Hesaplama – İki Kişinin Boyunu Karşılaştırın",
    metaDescription:
      "İki kişi arasındaki boy farkını cm ve feet/inç olarak hesaplayın; yüzde farkını ve kısa olanın uzun olanda nereye kadar geldiğini hemen görün.",
    h1: "Boy farkı hesaplama",
    intro: "İki boy girin; cm ve ft/in cinsinden tam farkı, yüzde farkını ve ölçekli bir önizlemeyi görün.",
    personA: "Kişi A",
    personB: "Kişi B",
    name: "İsim",
    difference: "Fark",
    percentTaller: "{a}, {b} ile kıyaslandığında {pct} daha uzun",
    sameHeight: "İkisinin boyu aynı",
    reachTitle: "{b}, {a} ile yan yana durunca başı nereye gelir?",
    reach: {
      eyes: "Göz hizası",
      nose: "Burun veya ağız",
      chin: "Çene",
      shoulders: "Omuzlar",
      chest: "Göğüs",
      waist: "Bel",
      below: "Belin altı",
    },
    reachNote: "Ortalama yetişkin vücut oranlarına dayanır; duruş, ayakkabı ve saç gerçek sonucu değiştirir.",
    categoryTitle: "Fark ne kadar büyük?",
    categories: {
      tiny: "Neredeyse fark edilmez (3 cm / 1 in altı)",
      small: "Küçük (3–7 cm / 1–3 in)",
      medium: "Belirgin (8–14 cm / 3–5.5 in)",
      large: "Büyük (15–24 cm / 6–9.5 in)",
      huge: "Çok büyük (25 cm / 10 in veya daha fazla)",
    },
    contentTitle: "Boy farklarını anlamak",
    content: [
      "Boy farkı, çıplak rakamın düşündürdüğünden daha büyük ya da daha küçük görünebilir. 10 cm'lik (4 in) bir farkta kısa olan kişinin gözleri kabaca uzun olanın ağzı hizasına gelir; bu da fotoğraflarda oldukça belirgindir.",
      "Farklı boyutları karşılaştırırken yüzde farkı işe yarar: 165 ve 185 cm boyundaki iki yetişkin arasındaki 20 cm'lik fark yaklaşık %12 iken, 100 ve 120 cm boyundaki iki çocuk arasındaki aynı 20 cm %20'ye karşılık gelir.",
      "Çiftlerde 12 cm (5 in) civarında bir fark oldukça yaygındır; çünkü dünya genelinde ortalama bir erkek, ortalama bir kadından kabaca bu kadar uzundur.",
    ],
    faq: [
      {
        q: "Boy farkı nasıl hesaplanır?",
        a: "Uzun olan boydan kısa olanı çıkarın. Yüzdeyi bulmak için farkı kısa olan boya bölün ve 100 ile çarpın.",
      },
      {
        q: "15 cm boy farkı çok mu?",
        a: "15 cm (yaklaşık 6 in) açıkça görülen bir farktır: Kısa olan kişinin başının tepesi genellikle uzun olanın burnu hizasına gelir.",
      },
      {
        q: "Kadınlarla erkekler arasındaki ortalama boy farkı ne kadar?",
        a: "Dünya genelinde 19 yaşındaki erkeklerin ortalaması 170.8 cm, kadınlarınki 158.6 cm'dir; aradaki fark yaklaşık 12 cm'dir (4.8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Ülkelere Göre Ortalama Boy 2026 – Erkek ve Kadın (200 Ülke)",
    metaDescription:
      "Ülkelere göre ortalama boy: Türkiye dahil 200 ülkede erkek ve kadınların cm ve feet cinsinden ortalama boyu, 1985'ten bu yana değişimiyle. NCD-RisC verisi.",
    h1: "Ülkelere göre ortalama boy",
    intro:
      "200 ülkede 19 yaşındaki erkek ve kadınların ortalama boyu — çoğu insanın yetişkin boyuna ulaştığı yaş.",
    search: "Ülke ara…",
    sortBy: "Sırala",
    rank: "#",
    change: "1985'ten beri",
    compare: "Karşılaştır",
    world: "Dünya",
    tallestMen: "En uzun erkekler",
    tallestWomen: "En uzun kadınlar",
    shortestMen: "En kısa erkekler",
    shortestWomen: "En kısa kadınlar",
    worldAverage: "Dünya ortalaması",
    contentTitle: "Veriler ne gösteriyor?",
    content: [
      "Dünyanın en uzun genç yetişkinleri Hollanda'da yaşıyor: Erkeklerin ortalaması 183.8 cm (6′0″), kadınlarınki 170.4 cm (5′7″). En kısa ortalamalar erkeklerde Doğu Timor'da (160.1 cm), kadınlarda Guatemala'da (150.9 cm) görülüyor.",
      "Dünya genelinde erkeklerin ortalama boyu 170.8 cm (5′7″), kadınlarınki 158.6 cm (5′2″). En uzun ve en kısa ülkeler arasındaki fark 20 cm'yi aşıyor.",
      "Boyu genetik de belirler, ancak ülkeler arasındaki farklar büyük ölçüde çocukluktaki beslenmeyi, sağlığı ve yaşam koşullarını yansıtır. Bu yüzden birçok ülkede ortalama boy 1985'ten bu yana birkaç santimetre arttı. Türkiye ortalama boyunu ve diğer ülkeleri tabloda arayarak bulabilirsiniz.",
    ],
    methodTitle: "Veriler hakkında",
    method:
      "Rakamlar, mevcut en güncel yıl için 19 yaşındaki ortalama boya ilişkin NCD-RisC tahminleridir ve nüfus temelli ölçüm çalışmalarından derlenmiştir (beyana dayalı boylar değildir). Değerler 0.1 cm'ye yuvarlanmıştır.",
    faq: [
      { q: "En uzun insanlar hangi ülkede?", a: "Hollanda'da; ortalama boy erkeklerde 183.8 cm, kadınlarda 170.4 cm." },
      {
        q: "En kısa insanlar hangi ülkede?",
        a: "Erkeklerde en kısa ortalama Doğu Timor'da (160.1 cm), kadınlarda ise Guatemala'dadır (150.9 cm).",
      },
      { q: "Dünyada ortalama boy ne kadar?", a: "Erkeklerde yaklaşık 170.8 cm (5′7″), kadınlarda 158.6 cm (5′2″)." },
      {
        q: "Neden 19 yaşındakiler esas alınıyor?",
        a: "Çoğu insan 19 yaşına kadar yetişkin boyuna ulaşır; tek bir yaşı esas almak da ülkeleri kuşaklar boyunca doğrudan karşılaştırılabilir kılar.",
      },
    ],
  },
  percentile: {
    metaTitle: "Boy Persentil Hesaplama – Boyunuz Gerçekte Ne Kadar Uzun?",
    metaDescription:
      "Boy persentilinizi hesaplayın: Ülkenizde ve dünyada erkeklerin ya da kadınların yüzde kaçından uzun olduğunuzu NCD-RisC ortalama boy verileriyle görün.",
    h1: "Boy persentil hesaplama",
    intro: "Boyunuzu ve cinsiyetinizi girin; ülkenizdeki ve dünyadaki yetişkinler arasında nerede durduğunuzu görün.",
    yourHeight: "Boyunuz",
    result: "{country} genelindeki {group} arasında sizden kısa olanların oranı: {pct}.",
    groupMen: "erkekler",
    groupWomen: "kadınlar",
    oneIn: "Yaklaşık {n} kişiden 1'i sizden uzun.",
    zScore: "Ortalamadan ({avg}) {sd} standart sapma",
    otherCountries: "Diğer ülkelerdeki persentiliniz",
    percentile: "Persentil",
    average: "Ortalama",
    note:
      "Tahmindir: Boyların her ülkenin NCD-RisC ortalaması etrafında normal dağıldığı varsayılır; tipik yayılım erkeklerde 7.1 cm, kadınlarda 6.6 cm'dir. Gerçek dağılımlar ülkeden ülkeye biraz farklılık gösterir.",
    contentTitle: "Boy persentili ne anlama gelir?",
    content: [
      "Persentil, sizden kısa olan insanların oranını gösterir. 50. persentildeyseniz tam ortalamadasınız; 90. persentildeyseniz aynı cinsiyetten her 10 kişiden 9'undan daha uzunsunuz.",
      "Ortalamalar ülkeden ülkeye değiştiği için aynı boy bir yerde uzun, başka bir yerde ortalama sayılabilir. 175 cm, Hindistan veya Japonya'daki erkekler için ortalamanın üzerindeyken Hollanda'da ortalamanın altında kalır.",
    ],
    faq: [
      {
        q: "180 cm bir erkek için uzun mu?",
        a: "Çoğu ülkede evet. Dünya genelinde 180 cm (5′11″), erkeklerin kabaca %90'ından uzundur; ancak erkeklerin ortalama boyunun 183.8 cm olduğu Hollanda'da ortalamanın altında kalır.",
      },
      {
        q: "170 cm bir kadın için uzun mu?",
        a: "Evet. 170 cm (5′7″), dünya genelinde kadınların yaklaşık %96'sından uzundur ve Hollanda'daki kadın ortalamasına yakındır.",
      },
      {
        q: "Bu hesaplayıcı ne kadar doğru?",
        a: "Ortalamalar ölçüme dayalı ulusal verilerden gelir, ancak yayılım tipik bir standart sapmayla modellenir. Bu yüzden sonuçları kesin bir sıralama değil, iyi bir tahmin olarak değerlendirin.",
      },
    ],
  },
};

export default messages;
