import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Boy uzama hesaplama",
      blurb: "Ne kadar uzayacağım? Yetişkin boyunu anne-baba boyundan ya da çocuğun şu anki boyundan tahmin edin.",
    },
    "growth-chart": {
      name: "Yaşa göre ortalama boy",
      blurb: "200 ülkede 5–19 yaş arası kız ve erkek çocuklar için büyüme tablosu ve çocuk boyu kontrolü.",
    },
    "bmi-calculator": {
      name: "VKİ ve sağlıklı kilo",
      blurb: "Vücut kitle indeksinizi hesaplayın ve boyunuza göre sağlıklı kilo aralığını görün.",
    },
  },
  common: {
    boy: "Erkek çocuk",
    girl: "Kız çocuk",
    age: "Yaş",
    years: "{n} yaş",
    father: "Babanın boyu",
    mother: "Annenin boyu",
    childHeight: "Çocuğun şu anki boyu",
    optional: "isteğe bağlı",
    estimateNote: "Yalnızca tahmindir; genetik, beslenme, sağlık ve ergenliğin zamanlaması gerçek büyümeyi etkiler.",
  },
  predictor: {
    metaTitle: "Ne Kadar Uzayacağım? Boy Uzama Hesaplama ve Boy Tahmini",
    metaDescription:
      "Ne kadar uzayacağım? Boy uzama hesaplama aracıyla yetişkin boyunu anne-baba boyundan ve yaşa göre şu anki boydan, 200 ülkenin verileriyle tahmin edin.",
    h1: "Boy uzama hesaplama: Ne kadar uzayacağım?",
    intro:
      "Yetişkin boyunu iki yolla tahmin edin: anne ve babanın boyundan ve çocuğun şu anki boyunu ülkesindeki ortalama büyümeyle karşılaştırarak.",
    parentsResult: "Anne-baba boyuna göre",
    currentResult: "Yaşa göre şu anki boya göre",
    range: "Olası aralık: {low} – {high}",
    currentUnavailable: "İkinci bir tahmin için çocuğun boyunu girin (5–17 yaş).",
    howTitle: "Tahmin nasıl yapılır?",
    how: [
      "Anne-baba boyu (anne-baba ortalaması yöntemi): Annenin ve babanın boyunu toplayın, erkek çocuk için 13 cm ekleyin ya da kız çocuk için 13 cm çıkarın, sonra 2'ye bölün. Bu, çocuk doktorlarının kullandığı hedef boydur; çocukların çoğu (yaklaşık %95) sonunda bu değerin yaklaşık 8.5 cm (3.3 in) yakınında bir boya ulaşır.",
      "Yaşa göre şu anki boy: Çocuğun boyu, kendi yaşı ve cinsiyeti için ulusal ortalamayla karşılaştırılır (NCD-RisC verileri) ve yetişkinliğe kadar aynı göreli konumda kalacağı varsayılır. En iyi sonucu ergenlikten önce verir; erken ya da geç ergenlik sonucu değiştirebilir.",
      "İki tahmin birbirini tutuyorsa öngörü daha güvenilirdir. Büyüme atakları sırasında aralarında büyük bir fark olması yaygındır ve tek başına endişe nedeni değildir.",
    ],
    faq: [
      {
        q: "Boy tahmini ne kadar doğru?",
        a: "Anne-baba ortalaması yönteminde çocukların çoğu hedef boyun yaklaşık ±8.5 cm yakınında kalır. Hiçbir hesaplayıcı ergenliğin zamanlamasını, beslenmeyi veya hastalıkları hesaba katamaz; bu yüzden sonuçları bir yol gösterici olarak değerlendirin.",
      },
      {
        q: "Ergenlik çağındaysam boyumu tahmin edebilir miyim?",
        a: "Evet. Yaşınızı ve şu anki boyunuzu girin. Kızlarda yaklaşık 15, erkeklerde 17 yaşından sonra çoğu kişi yılda 1 cm'den az uzar; yani şu anki boyunuz yetişkin boyunuza zaten yakındır.",
      },
      {
        q: "Boyu daha çok baba mı belirler, anne mi?",
        a: "Her iki ebeveynin katkısı kabaca eşittir. Formülün boylarının ortalamasını alıp ardından kadınlarla erkekler arasındaki tipik farka göre düzeltme yapmasının nedeni de budur.",
      },
    ],
  },
  growth: {
    metaTitle: "Yaşa Göre Ortalama Boy – Kız ve Erkek Büyüme Tablosu (5–19)",
    metaDescription:
      "Yaşa göre ortalama boy: 200 ülkede 5–19 yaş arası kız ve erkek çocukların her yaştaki ortalama boyu, büyüme tablosu ve çocuğunuzun boyu için hızlı kontrol.",
    h1: "Yaşa göre ortalama boy: kız ve erkek çocuklar için büyüme tablosu",
    intro: "Herhangi bir ülkede 5 ile 19 yaş arasındaki her yaş için ortalama boyu görün ve çocuğunuzun boyunu bununla karşılaştırın.",
    tableTitle: "Yaşa göre ortalama boy — {country}",
    above: "{age} yaş ortalamasının {diff} üzerinde",
    below: "{age} yaş ortalamasının {diff} altında",
    atAverage: "Tam olarak {age} yaş ortalamasında",
    chartBoys: "Erkekler",
    chartGirls: "Kızlar",
    childPoint: "Çocuğunuz",
    contentTitle: "Çocuklar nasıl büyür?",
    content: [
      "5 yaşından ergenliğe kadar çocuklar yılda yaklaşık 5–6 cm (2 in) uzar. 200 ülke genelinde kızların en hızlı büyüdüğü yıl genellikle 10 ile 11 yaş arası, erkeklerinki ise 12 ile 13 yaş arasıdır.",
      "14 yaşına gelindiğinde kızlar ortalama olarak yetişkin boylarının %98'ine, erkekler ise yaklaşık %94'üne ulaşmıştır. Erkekler 16 yaşında kabaca %98'e ulaşır. 17 yaşından sonra ortalama büyüme yılda 1 cm'nin (0.4 in) altına düşer.",
      "Bunlar, bireysel büyüme ataklarını yumuşatan ulusal ortalamalardır. Sağlıklı bir çocuk ortalama çizgisinin epey üzerinde ya da altında olabilir; asıl önemli olan zaman içinde düzenli bir büyümedir.",
    ],
    faq: [
      {
        q: "12 yaşındaki bir çocuğun ortalama boyu ne kadar?",
        a: "Ülkeye göre değişir: ABD'de kız ve erkeklerde yaklaşık 155 cm (5′1″), Japonya'da yaklaşık 151 cm (5 ft'in biraz altı), Hindistan'da ise yaklaşık 142–144 cm'dir (4′8″–4′9″). Kesin rakamları görmek için yukarıdan bir ülke seçin.",
      },
      {
        q: "Kızlar ve erkekler kaç yaşında uzamayı bırakır?",
        a: "Kızların çoğu 15–16, erkeklerin çoğu 17–18 yaşında yetişkin boyuna yaklaşır. Bundan sonra ortalama büyüme yılda 1 cm'nin altındadır.",
      },
      {
        q: "Çocuğumun boyu normal mi?",
        a: "Çocuklar ortalamanın etrafında geniş bir aralıkta dağılır; bu yüzden ortalamanın üzerinde ya da altında tek bir ölçüm genellikle normaldir. Büyüme aniden yavaşlarsa ya da çocuk zamanla alışılmış konumundan çok uzaklaşırsa bir doktora danışın.",
      },
    ],
  },
  bmi: {
    metaTitle: "Vücut Kitle İndeksi Hesaplama – Boyunuza Göre Sağlıklı Kilo",
    metaDescription:
      "Vücut kitle indeksi hesaplama: VKİ'nizi metrik ya da imperial birimlerle bulun, boyunuza göre sağlıklı kilo aralığını DSÖ kategorilerine dayalı tabloyla görün.",
    h1: "Vücut kitle indeksi hesaplama ve boyunuza göre sağlıklı kilo",
    intro: "Vücut kitle indeksinizi (VKİ) ve boyunuza göre sağlıklı kilo aralığını öğrenmek için boyunuzu ve kilonuzu girin.",
    weight: "Kilo",
    yourBmi: "VKİ'niz",
    categories: {
      underweight: "Zayıf",
      normal: "Sağlıklı kilo",
      overweight: "Fazla kilolu",
      obese: "Obezite",
    },
    healthyRange: "{height} boy için sağlıklı kilo: {low} – {high}",
    chartTitle: "Boya göre sağlıklı kilo aralığı",
    colHeight: "Boy",
    colRange: "Sağlıklı kilo (VKİ 18.5–24.9)",
    note: "18 yaş ve üzeri yetişkinler içindir. VKİ kası yağdan ayırt etmez; çocuklar ve ergenler için yaşa özel VKİ tabloları gerekir.",
    contentTitle: "VKİ size ne söyler?",
    content: [
      "VKİ, kilogram cinsinden ağırlığın metre cinsinden boyun karesine bölünmesiyle bulunur. Dünya Sağlık Örgütü (DSÖ), yetişkinlerde 18.5'in altındaki VKİ'yi zayıf, 18.5 ile 24.9 arasını sağlıklı, 25 ile 29.9 arasını fazla kilolu, 30 ve üzerini ise obezite olarak sınıflandırır.",
      "Yalnızca boy ve kiloyu kullandığı için VKİ bir tanı değil, hızlı bir tarama ölçütüdür. Çok kaslı kişilerin fazla yağları olmadan da VKİ'leri yüksek olabilir; bazı sağlık kılavuzları ise Asya kökenli kişiler için daha düşük eşik değerler kullanır.",
    ],
    faq: [
      { q: "Sağlıklı VKİ kaç olmalı?", a: "Yetişkinler için DSÖ'nün sağlıklı aralığı 18.5 ile 24.9 arasıdır." },
      {
        q: "VKİ nasıl hesaplanır?",
        a: "Kilogram cinsinden ağırlığı metre cinsinden boyun karesine bölün. Örneğin 1.75 m boyda 70 kg için: 70 ÷ 3.06 = 22.9.",
      },
      {
        q: "170 cm için sağlıklı kilo ne kadar?",
        a: "170 cm (5′7″) boyda 18.5–24.9 arası bir VKİ, yaklaşık 53.5–72.0 kg'a (118–159 lb) karşılık gelir.",
      },
    ],
  },
  person: {
    metaTitle: "{name} boyu kaç? ({cm} / {ftin})",
    metaDescription:
      "{name} boyu: {cm} ({ftin}). Bu boyu ortalama bir erkek ve kadınla karşılaştırın, kimlerin yaklaşık aynı boyda olduğunu görün.",
    h1: "{name} boyu",
    answer: "{name} boyu: {cm} ({ftin}).",
    boardTitle: "Ortalama bir erkek ve kadının yanında: {name}",
    statsTitle: "Bu ne kadar uzun?",
    tallerThan: "Dünyadaki {group} arasında bu boydan kısa olanlar: {pct}",
    groupMen: "erkekler",
    groupWomen: "kadınlar",
    diffTaller: "Ortalama {who} boyundan {diff} daha uzun",
    diffShorter: "Ortalama {who} boyundan {diff} daha kısa",
    whoMan: "erkek",
    whoWoman: "kadın",
    similarTitle: "Yaklaşık aynı boyda olanlar",
    compareCta: "Kendinizi {name} ile karşılaştırın",
    sourceNote: "{name} için yaygın olarak belirtilen boy; rakamlar kaynaklara göre biraz farklılık gösterebilir.",
    faqFeet: "{name} boyu kaç feet?",
    faqFeetA: "{name} boyu {ftin}, yani {cm}.",
    faqTall: "{name} uzun mu?",
    faqTallAbove: "Evet. {name} boyu {cm}; dünya genelindeki {group} arasında bu boydan kısa olanların oranı {pct}.",
    faqTallAverage: "{name} ortalamaya yakın: {cm} boyla, dünya genelindeki {group} arasında bu boydan kısa olanların oranı {pct}.",
    faqTallBelow: "{name} ortalamanın altında: {cm} boyla, dünya genelindeki {group} arasında bu boydan kısa olanların oranı yalnızca {pct}.",
    faqVs: "{name}, {other} ile kıyaslandığında daha mı uzun?",
    faqVsTaller: "Evet. {name} ({cm}), {other} ({otherCm}) ile kıyaslandığında {diff} daha uzun.",
    faqVsShorter: "Hayır. {name} ({cm}), {other} ({otherCm}) ile kıyaslandığında {diff} daha kısa.",
    faqVsSame: "İkisinin boyu aynı: {cm}.",
  },
  people: {
    metaTitle: "Ünlülerin Boyları – Ünlüler ve Karakterler Ne Kadar Uzun?",
    metaDescription:
      "Sporcuların, oyuncuların, müzisyenlerin ve anime karakterlerinin cm ve feet cinsinden boyları; her biri ortalama erkek ve kadınla görsel olarak karşılaştırmalı.",
    h1: "Ünlülerin, sporcuların ve karakterlerin boyları",
    intro: "Ölçekli bir grafikte boyunu görmek ve kendi boyunuzla karşılaştırmak için bir isim seçin.",
  },
  guides: {
    metaTitle: "Boy Rehberleri – Boy Ölçme, Büyüme ve Boy Farkları",
    metaDescription:
      "Evde boy ölçme, insanların ne zaman uzamayı bıraktığı ve boy farklarının gerçekte nasıl göründüğü üzerine pratik rehberler.",
    h1: "Boy rehberleri",
    intro: "Arkasındaki rakamlarla birlikte kısa ve pratik rehberler.",
    read: "Rehberi oku",
    minutes: "{n} dk okuma",
  },
};

export default messages;
