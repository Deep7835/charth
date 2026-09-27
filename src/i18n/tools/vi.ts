import type { ToolsMessages } from "./en";

const messages: ToolsMessages = {
  common: {
    tools: "Công cụ",
    home: "Trang chủ",
    hubMetaTitle: "Công cụ chiều cao miễn phí – Đổi đơn vị, tính toán, dữ liệu",
    hubMetaDescription:
      "Công cụ chiều cao miễn phí: đổi cm sang feet và inch, tính chênh lệch chiều cao, xem phân vị chiều cao của bạn và so sánh chiều cao trung bình các nước.",
    hubH1: "Công cụ chiều cao",
    hubIntro: "Máy tính nhanh và dữ liệu tham khảo, dùng kèm với biểu đồ so sánh chiều cao.",
    relatedTitle: "Thêm công cụ chiều cao",
    boardCta: "So sánh trên biểu đồ chiều cao",
    boardCtaBody: "Đặt người, nhân vật và đồ vật cạnh nhau trên cùng một thang đo trực quan.",
    openInBoard: "Mở trong biểu đồ chiều cao",
    faqTitle: "Câu hỏi thường gặp",
    men: "Nam",
    women: "Nữ",
    man: "Nam",
    woman: "Nữ",
    sex: "Giới tính",
    country: "Quốc gia",
    height: "Chiều cao",
    source: "Nguồn",
    sourceNcd:
      "NCD Risk Factor Collaboration (NCD-RisC), Lancet 2020 — chiều cao trung bình ở tuổi 19, ước tính mới nhất. Cấp phép CC BY 4.0.",
  },
  names: {
    "height-converter": {
      name: "Chuyển đổi chiều cao",
      blurb: "Đổi cm sang feet và inch và ngược lại, kèm bảng quy đổi đầy đủ.",
    },
    "height-difference-calculator": {
      name: "Tính chênh lệch chiều cao",
      blurb: "Biết chính xác hai người chênh nhau bao nhiêu và người này cao tới đâu trên người kia.",
    },
    "average-height-by-country": {
      name: "Chiều cao trung bình các nước",
      blurb: "Chiều cao trung bình của nam và nữ tại 200 quốc gia, có xếp hạng và tìm kiếm.",
    },
    "height-percentile-calculator": {
      name: "Tính phân vị chiều cao",
      blurb: "Xem bạn cao hơn bao nhiêu phần trăm nam giới hoặc nữ giới ở nước mình và trên toàn thế giới.",
    },
    "hug-simulator": {
      name: "Mô phỏng ôm",
      blurb: "Xem cái ôm trực diện hoặc từ phía sau đúng tỷ lệ cho hai chiều cao, và vị trí đầu của mỗi người.",
    },
    "3d-height-comparison": {
      name: "So sánh chiều cao 3D",
      blurb: "So sánh người, động vật và đồ vật bằng mô hình 3D có thể xoay và phóng to.",
    },
  },
  converter: {
    metaTitle: "Đổi cm sang feet và inch – Chuyển đổi chiều cao 2 chiều",
    metaDescription:
      "Đổi cm sang feet và inch hoặc từ ft/in sang cm ngay lập tức. Kèm bảng chuyển đổi chiều cao từ 4′6″ đến 7′0″ và từ 140 đến 215 cm, dễ tra cứu.",
    h1: "Chuyển đổi chiều cao: cm ↔ feet và inch",
    intro: "Nhập chiều cao vào ô bất kỳ, các ô còn lại sẽ cập nhật ngay. Kết quả được làm tròn đến inch gần nhất hoặc 0.1 cm.",
    centimeters: "Centimet",
    meters: "Mét",
    feetInches: "Feet + inch",
    totalInches: "Tổng số inch",
    result: "{cm} bằng {ftin}",
    tableCmTitle: "Bảng đổi centimet sang feet và inch",
    tableFtTitle: "Bảng đổi feet và inch sang centimet",
    colCm: "cm",
    colFtIn: "ft / in",
    colInches: "inch",
    howTitle: "Cách đổi đơn vị chiều cao",
    how: [
      "Một inch bằng đúng 2.54 cm và một foot bằng 12 inch (30.48 cm).",
      "Từ cm sang feet và inch: chia số centimet cho 2.54 để ra tổng số inch, rồi chia tiếp cho 12. Phần nguyên là số feet, phần dư là số inch. Ví dụ: 175 cm ÷ 2.54 = 68.9 in → 5 ft 8.9 in ≈ 5′9″.",
      "Từ feet và inch sang cm: nhân số feet với 12, cộng thêm số inch, rồi nhân với 2.54. Ví dụ: 5′10″ = 70 in × 2.54 = 177.8 cm.",
    ],
    faq: [
      { q: "170 cm là bao nhiêu feet?", a: "170 cm xấp xỉ 5 feet 7 inch (5′6.9″)." },
      { q: "6 feet là bao nhiêu cm?", a: "6 feet bằng đúng 182.88 cm, thường được làm tròn thành 183 cm." },
      { q: "5′5″ là bao nhiêu cm?", a: "5 feet 5 inch bằng 165.1 cm." },
      {
        q: "Vì sao kết quả đổi chiều cao đôi khi lệch nhau 1 cm?",
        a: "Chiều cao tính bằng feet thường được làm tròn đến inch gần nhất, mà một inch bằng 2.54 cm, nên giá trị làm tròn có thể lệch tới khoảng 1.3 cm.",
      },
    ],
  },
  difference: {
    metaTitle: "Tính chênh lệch chiều cao – So sánh chiều cao hai người",
    metaDescription:
      "Tính chênh lệch chiều cao giữa hai người theo cm và feet/inch, xem chênh lệch theo phần trăm và người thấp hơn cao tới đâu so với người cao hơn.",
    h1: "Tính chênh lệch chiều cao",
    intro: "Nhập hai chiều cao để biết chênh lệch chính xác theo cm và ft/in, chênh lệch phần trăm và hình minh họa đúng tỷ lệ.",
    personA: "Người A",
    personB: "Người B",
    name: "Tên",
    difference: "Chênh lệch",
    percentTaller: "{a} cao hơn {b} {pct}",
    sameHeight: "Hai người cao bằng nhau",
    reachTitle: "Đỉnh đầu của {b} chạm tới đâu trên người {a}",
    reach: {
      eyes: "Ngang mắt",
      nose: "Mũi hoặc miệng",
      chin: "Cằm",
      shoulders: "Vai",
      chest: "Ngực",
      waist: "Eo",
      below: "Dưới eo",
    },
    reachNote: "Dựa trên tỷ lệ cơ thể trung bình của người trưởng thành; tư thế, giày dép và kiểu tóc có thể làm kết quả thực tế khác đi.",
    categoryTitle: "Chênh lệch lớn đến mức nào?",
    categories: {
      tiny: "Gần như không thấy (dưới 3 cm / 1 in)",
      small: "Nhỏ (3–7 cm / 1–3 in)",
      medium: "Dễ nhận ra (8–14 cm / 3–5.5 in)",
      large: "Lớn (15–24 cm / 6–9.5 in)",
      huge: "Rất lớn (từ 25 cm / 10 in trở lên)",
    },
    contentTitle: "Hiểu về chênh lệch chiều cao",
    content: [
      "Chênh lệch chiều cao có thể trông lớn hơn hoặc nhỏ hơn con số thực tế. Chênh 10 cm (4 in) nghĩa là mắt người thấp hơn gần ngang miệng người cao hơn, điều này thấy rất rõ trong ảnh.",
      "Chênh lệch phần trăm hữu ích khi so sánh các kích thước khác nhau: chênh 20 cm giữa hai người lớn cao 165 và 185 cm là khoảng 12%, trong khi cùng 20 cm đó giữa hai đứa trẻ cao 100 và 120 cm là 20%.",
      "Với các cặp đôi, chênh lệch khoảng 12 cm (5 in) là phổ biến, vì đó gần như là mức nam giới trung bình cao hơn nữ giới trung bình trên toàn thế giới.",
    ],
    faq: [
      {
        q: "Tính chênh lệch chiều cao như thế nào?",
        a: "Lấy chiều cao lớn hơn trừ đi chiều cao nhỏ hơn. Muốn ra phần trăm, chia phần chênh lệch cho chiều cao thấp hơn rồi nhân với 100.",
      },
      {
        q: "Chênh nhau 15 cm có nhiều không?",
        a: "15 cm (khoảng 6 in) là mức chênh thấy rõ: đỉnh đầu người thấp hơn thường chỉ tới khoảng mũi của người cao hơn.",
      },
      {
        q: "Nam và nữ chênh nhau trung bình bao nhiêu?",
        a: "Trên toàn thế giới, nam giới 19 tuổi cao trung bình 170.8 cm và nữ giới 158.6 cm, chênh khoảng 12 cm (4.8 in).",
      },
    ],
  },
  countries: {
    metaTitle: "Chiều cao trung bình các nước 2026 – Nam & nữ (200 nước)",
    metaDescription:
      "Chiều cao trung bình của nam và nữ tại 200 quốc gia, gồm cả Việt Nam, tính bằng cm và feet, xếp hạng từ cao nhất đến thấp nhất, kèm mức thay đổi từ 1985.",
    h1: "Chiều cao trung bình các nước",
    intro:
      "Chiều cao trung bình của nam và nữ 19 tuổi tại 200 quốc gia — độ tuổi mà hầu hết mọi người đã đạt chiều cao trưởng thành.",
    search: "Tìm quốc gia…",
    sortBy: "Sắp xếp theo",
    rank: "#",
    change: "Từ 1985",
    compare: "So sánh",
    world: "Thế giới",
    tallestMen: "Nam cao nhất",
    tallestWomen: "Nữ cao nhất",
    shortestMen: "Nam thấp nhất",
    shortestWomen: "Nữ thấp nhất",
    worldAverage: "Trung bình thế giới",
    contentTitle: "Dữ liệu cho thấy điều gì",
    content: [
      "Hà Lan có thanh niên cao nhất thế giới: nam trung bình 183.8 cm (6′0″) và nữ 170.4 cm (5′7″). Mức trung bình thấp nhất thuộc về Đông Timor ở nam (160.1 cm) và Guatemala ở nữ (150.9 cm).",
      "Trên toàn thế giới, nam cao trung bình 170.8 cm (5′7″) và nữ 158.6 cm (5′2″). Khoảng cách giữa nước cao nhất và thấp nhất là hơn 20 cm.",
      "Chiều cao chịu ảnh hưởng của di truyền, nhưng khác biệt giữa các nước chủ yếu phản ánh dinh dưỡng thời thơ ấu, sức khỏe và điều kiện sống. Đó là lý do chiều cao trung bình ở nhiều nước đã tăng vài centimet kể từ 1985.",
    ],
    methodTitle: "Về dữ liệu",
    method:
      "Số liệu là ước tính của NCD-RisC về chiều cao trung bình ở tuổi 19 cho năm gần nhất hiện có, tổng hợp từ các nghiên cứu đo đạc trên quy mô dân số (không phải chiều cao tự khai). Giá trị được làm tròn đến 0.1 cm.",
    faq: [
      { q: "Nước nào có người cao nhất?", a: "Hà Lan, với chiều cao trung bình 183.8 cm ở nam và 170.4 cm ở nữ." },
      { q: "Nước nào có người thấp nhất?", a: "Đông Timor có mức trung bình thấp nhất ở nam (160.1 cm) và Guatemala ở nữ (150.9 cm)." },
      { q: "Chiều cao trung bình của thế giới là bao nhiêu?", a: "Khoảng 170.8 cm (5′7″) với nam và 158.6 cm (5′2″) với nữ." },
      {
        q: "Vì sao dùng số liệu của người 19 tuổi?",
        a: "Hầu hết mọi người đã đạt chiều cao trưởng thành ở tuổi 19, và dùng cùng một độ tuổi giúp so sánh trực tiếp các nước qua nhiều thế hệ.",
      },
    ],
  },
  percentile: {
    metaTitle: "Tính phân vị chiều cao – Bạn thực sự cao cỡ nào?",
    metaDescription:
      "Tính phân vị chiều cao: xem bạn cao hơn bao nhiêu phần trăm nam giới hoặc nữ giới ở nước bạn và trên thế giới, dựa trên chiều cao trung bình của NCD-RisC.",
    h1: "Tính phân vị chiều cao",
    intro: "Nhập chiều cao và giới tính để xem bạn xếp ở đâu so với người trưởng thành ở nước bạn và trên toàn thế giới.",
    yourHeight: "Chiều cao của bạn",
    result: "Bạn cao hơn {pct} {group} tại {country}.",
    groupMen: "nam giới",
    groupWomen: "nữ giới",
    oneIn: "Cứ khoảng {n} người thì có 1 người cao hơn bạn.",
    zScore: "Cách mức trung bình ({avg}) {sd} độ lệch chuẩn",
    otherCountries: "Phân vị của bạn ở các nước khác",
    percentile: "Phân vị",
    average: "Trung bình",
    note:
      "Ước tính: giả định chiều cao phân phối chuẩn quanh mức trung bình NCD-RisC của từng nước, với độ phân tán điển hình là 7.1 cm ở nam và 6.6 cm ở nữ. Phân phối thực tế có thể hơi khác giữa các nước.",
    contentTitle: "Phân vị chiều cao nghĩa là gì",
    content: [
      "Phân vị cho biết tỷ lệ người thấp hơn bạn. Ở phân vị thứ 50, bạn cao đúng mức trung bình; ở phân vị thứ 90, bạn cao hơn 9 trên 10 người cùng giới tính.",
      "Vì mức trung bình mỗi nước mỗi khác, cùng một chiều cao có thể là cao ở nơi này nhưng chỉ trung bình ở nơi khác. 175 cm là trên trung bình với nam giới ở Ấn Độ hay Nhật Bản, nhưng lại dưới trung bình ở Hà Lan.",
    ],
    faq: [
      {
        q: "Nam cao 180 cm có được coi là cao không?",
        a: "Có, ở hầu hết các nước. Trên toàn thế giới, 180 cm (5′11″) cao hơn khoảng 90% nam giới, dù ở Hà Lan, nơi nam giới cao trung bình 183.8 cm, mức này lại dưới trung bình.",
      },
      {
        q: "Nữ cao 170 cm có được coi là cao không?",
        a: "Có. 170 cm (5′7″) cao hơn khoảng 96% nữ giới trên thế giới và xấp xỉ mức trung bình của nữ giới Hà Lan.",
      },
      {
        q: "Công cụ này chính xác đến mức nào?",
        a: "Mức trung bình lấy từ dữ liệu đo đạc quốc gia, nhưng độ phân tán được mô hình hóa bằng độ lệch chuẩn điển hình, vì vậy hãy xem kết quả là ước tính tốt chứ không phải thứ hạng chính xác.",
      },
    ],
  },
};

export default messages;
