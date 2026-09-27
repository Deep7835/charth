import type { MoreMessages } from "./en";

const messages: MoreMessages = {
  names: {
    "height-predictor": {
      name: "Dự đoán chiều cao",
      blurb: "Sau này mình sẽ cao bao nhiêu? Dự đoán chiều cao trưởng thành từ chiều cao của bố mẹ hoặc chiều cao hiện tại của trẻ.",
    },
    "growth-chart": {
      name: "Chiều cao trung bình theo độ tuổi",
      blurb: "Biểu đồ tăng trưởng cho bé trai và bé gái 5–19 tuổi tại 200 quốc gia, kèm công cụ kiểm tra chiều cao của trẻ.",
    },
    "bmi-calculator": {
      name: "BMI & cân nặng hợp lý",
      blurb: "Tính BMI và xem khoảng cân nặng khỏe mạnh cho chiều cao của bạn.",
    },
  },
  common: {
    boy: "Bé trai",
    girl: "Bé gái",
    age: "Tuổi",
    years: "{n} tuổi",
    father: "Chiều cao của bố",
    mother: "Chiều cao của mẹ",
    childHeight: "Chiều cao hiện tại của trẻ",
    optional: "không bắt buộc",
    estimateNote: "Chỉ là ước tính — di truyền, dinh dưỡng, sức khỏe và thời điểm dậy thì đều ảnh hưởng đến sự phát triển thực tế.",
  },
  predictor: {
    metaTitle: "Dự đoán chiều cao – Sau này bạn sẽ cao bao nhiêu?",
    metaDescription:
      "Dự đoán chiều cao khi trưởng thành từ chiều cao của bố mẹ (phương pháp mid-parental) và chiều cao hiện tại của trẻ theo tuổi, dựa trên dữ liệu của 200 quốc gia.",
    h1: "Dự đoán chiều cao: sau này bạn sẽ cao bao nhiêu?",
    intro:
      "Ước tính chiều cao khi trưởng thành theo hai cách: từ chiều cao của cả bố và mẹ, và từ chiều cao hiện tại của trẻ so với mức tăng trưởng trung bình ở quốc gia của trẻ.",
    parentsResult: "Dựa trên chiều cao của bố mẹ",
    currentResult: "Dựa trên chiều cao hiện tại theo tuổi",
    range: "Khoảng dự kiến: {low} – {high}",
    currentUnavailable: "Nhập chiều cao của trẻ (5–17 tuổi) để có ước tính thứ hai.",
    howTitle: "Cách dự đoán hoạt động",
    how: [
      "Chiều cao của bố mẹ (phương pháp mid-parental): cộng chiều cao của mẹ và bố, cộng thêm 13 cm nếu là bé trai hoặc trừ đi 13 cm nếu là bé gái, rồi chia cho 2. Đây là chiều cao mục tiêu mà bác sĩ nhi khoa sử dụng; phần lớn trẻ (khoảng 95%) có chiều cao trưởng thành nằm trong phạm vi khoảng 8.5 cm (3.3 in) so với con số này.",
      "Chiều cao hiện tại theo tuổi: chiều cao của trẻ được so với mức trung bình quốc gia theo tuổi và giới tính (dữ liệu NCD-RisC), với giả định trẻ giữ nguyên vị trí tương đối so với mức trung bình cho đến khi trưởng thành. Cách này chính xác nhất trước tuổi dậy thì; dậy thì sớm hoặc muộn có thể làm kết quả thay đổi.",
      "Khi hai ước tính khớp nhau, kết quả dự đoán đáng tin cậy hơn. Hai con số chênh lệch nhiều là chuyện thường gặp trong giai đoạn tăng trưởng vượt bậc, và bản thân điều đó không phải là lý do đáng lo.",
    ],
    faq: [
      {
        q: "Dự đoán chiều cao chính xác đến mức nào?",
        a: "Với phương pháp mid-parental, phần lớn trẻ nằm trong khoảng ±8.5 cm so với chiều cao mục tiêu. Không công cụ nào tính đến được thời điểm dậy thì, dinh dưỡng hay các vấn đề sức khỏe, vì vậy hãy xem kết quả như một con số tham khảo.",
      },
      {
        q: "Tuổi teen có dự đoán được chiều cao không?",
        a: "Có. Hãy nhập tuổi và chiều cao hiện tại của bạn. Sau khoảng 15 tuổi với nữ và 17 tuổi với nam, hầu hết mọi người chỉ cao thêm dưới 1 cm mỗi năm, nên chiều cao hiện tại của bạn đã gần với chiều cao trưởng thành.",
      },
      {
        q: "Chiều cao phụ thuộc vào bố hay mẹ nhiều hơn?",
        a: "Cả bố và mẹ đóng góp gần như ngang nhau, vì vậy công thức lấy trung bình chiều cao của hai người rồi điều chỉnh theo mức chênh lệch thông thường giữa nam và nữ.",
      },
    ],
  },
  growth: {
    metaTitle: "Chiều cao trung bình theo độ tuổi – Biểu đồ trẻ 5–19 tuổi",
    metaDescription:
      "Chiều cao trung bình theo độ tuổi của bé trai và bé gái 5–19 tuổi tại 200 quốc gia, kèm biểu đồ tăng trưởng và so sánh nhanh chiều cao của con với mức trung bình.",
    h1: "Chiều cao trung bình theo độ tuổi: biểu đồ tăng trưởng cho bé trai và bé gái",
    intro: "Xem chiều cao trung bình ở từng độ tuổi từ 5 đến 19 tại bất kỳ quốc gia nào và so sánh với chiều cao của trẻ.",
    tableTitle: "Chiều cao trung bình theo độ tuổi — {country}",
    above: "Cao hơn {diff} so với mức trung bình ở tuổi {age}",
    below: "Thấp hơn {diff} so với mức trung bình ở tuổi {age}",
    atAverage: "Đúng bằng mức trung bình ở tuổi {age}",
    chartBoys: "Bé trai",
    chartGirls: "Bé gái",
    childPoint: "Con bạn",
    contentTitle: "Trẻ phát triển chiều cao như thế nào",
    content: [
      "Từ 5 tuổi đến tuổi dậy thì, trẻ cao thêm khoảng 5–6 cm (2 in) mỗi năm. Tính trên 200 quốc gia, năm tăng trưởng nhanh nhất của bé gái thường rơi vào khoảng 10 đến 11 tuổi, còn của bé trai là 12 đến 13 tuổi.",
      "Đến 14 tuổi, bé gái trung bình đã đạt 98% chiều cao trưởng thành và bé trai khoảng 94%. Bé trai đạt khoảng 98% vào năm 16 tuổi. Sau 17 tuổi, mức tăng trung bình giảm xuống dưới 1 cm (0.4 in) mỗi năm.",
      "Đây là mức trung bình quốc gia, vốn làm mờ đi các đợt tăng trưởng vượt bậc của từng cá nhân. Một đứa trẻ khỏe mạnh vẫn có thể cao hơn hoặc thấp hơn đáng kể so với đường trung bình; điều quan trọng nhất là trẻ tăng trưởng đều đặn theo thời gian.",
    ],
    faq: [
      {
        q: "Chiều cao trung bình của trẻ 12 tuổi là bao nhiêu?",
        a: "Tùy từng quốc gia: ở Mỹ khoảng 155 cm (5′1″) cho cả bé trai và bé gái, ở Nhật Bản khoảng 151 cm (thấp hơn 5 ft một chút) và ở Ấn Độ khoảng 142–144 cm (4′8″–4′9″). Hãy chọn một quốc gia ở trên để xem số liệu chính xác.",
      },
      {
        q: "Bé gái và bé trai ngừng tăng chiều cao ở tuổi nào?",
        a: "Hầu hết bé gái đã gần đạt chiều cao trưởng thành vào khoảng 15–16 tuổi và hầu hết bé trai vào khoảng 17–18 tuổi. Sau đó, mức tăng trung bình dưới 1 cm mỗi năm.",
      },
      {
        q: "Chiều cao của con tôi có bình thường không?",
        a: "Chiều cao của trẻ dao động rất rộng quanh mức trung bình, nên một lần đo cao hơn hay thấp hơn mức này thường là bình thường. Hãy hỏi ý kiến bác sĩ nếu trẻ đột nhiên chậm lớn hoặc theo thời gian bị lệch xa khỏi vị trí thường thấy của mình.",
      },
    ],
  },
  bmi: {
    metaTitle: "Tính BMI – Cân nặng hợp lý theo chiều cao của bạn",
    metaDescription:
      "Tính BMI theo đơn vị mét hoặc đơn vị Anh–Mỹ và xem khoảng cân nặng khỏe mạnh cho chiều cao của bạn, kèm bảng chiều cao–cân nặng theo phân loại BMI của WHO.",
    h1: "Tính BMI và cân nặng khỏe mạnh theo chiều cao",
    intro: "Nhập chiều cao và cân nặng để biết chỉ số khối cơ thể (BMI) và khoảng cân nặng khỏe mạnh cho chiều cao của bạn.",
    weight: "Cân nặng",
    yourBmi: "BMI của bạn",
    categories: {
      underweight: "Thiếu cân",
      normal: "Cân nặng khỏe mạnh",
      overweight: "Thừa cân",
      obese: "Béo phì",
    },
    healthyRange: "Cân nặng khỏe mạnh cho chiều cao {height}: {low} – {high}",
    chartTitle: "Khoảng cân nặng khỏe mạnh theo chiều cao",
    colHeight: "Chiều cao",
    colRange: "Cân nặng khỏe mạnh (BMI 18.5–24.9)",
    note: "Dành cho người trưởng thành từ 18 tuổi trở lên. BMI không phân biệt cơ và mỡ; trẻ em và thanh thiếu niên cần dùng biểu đồ BMI riêng theo tuổi.",
    contentTitle: "BMI cho bạn biết điều gì",
    content: [
      "BMI là cân nặng tính bằng kilôgam chia cho bình phương chiều cao tính bằng mét. Tổ chức Y tế Thế giới (WHO) phân loại BMI ở người trưởng thành như sau: thiếu cân khi dưới 18.5, khỏe mạnh từ 18.5 đến 24.9, thừa cân từ 25 đến 29.9 và béo phì từ 30 trở lên.",
      "Vì chỉ dựa vào chiều cao và cân nặng, BMI là một con số sàng lọc nhanh chứ không phải chẩn đoán. Người có nhiều cơ bắp có thể có BMI cao mà không thừa mỡ, và một số hướng dẫn sức khỏe dùng ngưỡng thấp hơn cho người gốc châu Á.",
    ],
    faq: [
      { q: "BMI bao nhiêu là khỏe mạnh?", a: "Với người trưởng thành, khoảng khỏe mạnh theo WHO là 18.5 đến 24.9." },
      {
        q: "BMI được tính như thế nào?",
        a: "Lấy cân nặng tính bằng kilôgam chia cho bình phương chiều cao tính bằng mét. Ví dụ: nặng 70 kg, cao 1.75 m thì BMI là 70 ÷ 3.06 = 22.9.",
      },
      {
        q: "Cao 170 cm nặng bao nhiêu là hợp lý?",
        a: "Với chiều cao 170 cm (5′7″), BMI 18.5–24.9 tương ứng với cân nặng khoảng 53.5–72.0 kg (118–159 lb).",
      },
    ],
  },
  person: {
    metaTitle: "{name} cao bao nhiêu? ({cm} / {ftin})",
    metaDescription:
      "{name} cao {cm} ({ftin}). So sánh chiều cao của {name} với nam giới và nữ giới trung bình, và xem những ai khác có chiều cao tương tự.",
    h1: "Chiều cao của {name}",
    answer: "{name} cao {cm} ({ftin}).",
    boardTitle: "{name} bên cạnh nam giới và nữ giới trung bình",
    statsTitle: "Như vậy là cao cỡ nào?",
    tallerThan: "Cao hơn {pct} {group} trên toàn thế giới",
    groupMen: "nam giới",
    groupWomen: "nữ giới",
    diffTaller: "Cao hơn {who} trung bình {diff}",
    diffShorter: "Thấp hơn {who} trung bình {diff}",
    whoMan: "nam giới",
    whoWoman: "nữ giới",
    similarTitle: "Chiều cao tương tự",
    compareCta: "So sánh {name} với chính bạn",
    sourceNote: "Chiều cao của {name} theo số liệu thường được công bố; con số có thể chênh lệch đôi chút giữa các nguồn.",
    faqFeet: "{name} cao bao nhiêu feet?",
    faqFeetA: "{name} cao {ftin}, tức là {cm}.",
    faqTall: "{name} có cao không?",
    faqTallAbove: "Có. Với chiều cao {cm}, {name} cao hơn {pct} {group} trên toàn thế giới.",
    faqTallAverage: "{name} có chiều cao gần mức trung bình: với {cm}, cao hơn {pct} {group} trên toàn thế giới.",
    faqTallBelow: "{name} thấp hơn mức trung bình: với {cm}, chỉ cao hơn {pct} {group} trên toàn thế giới.",
    faqVs: "{name} có cao hơn {other} không?",
    faqVsTaller: "Có. {name} ({cm}) cao hơn {other} ({otherCm}) {diff}.",
    faqVsShorter: "Không. {name} ({cm}) thấp hơn {other} ({otherCm}) {diff}.",
    faqVsSame: "Hai người cao bằng nhau: {cm}.",
  },
  people: {
    metaTitle: "Chiều cao người nổi tiếng – Sao và nhân vật cao bao nhiêu?",
    metaDescription:
      "Chiều cao của vận động viên, diễn viên, ca sĩ và nhân vật anime theo cm và feet, mỗi người đều có hình so sánh trực quan với nam giới và nữ giới trung bình.",
    h1: "Chiều cao của người nổi tiếng, vận động viên và nhân vật",
    intro: "Chọn một cái tên để xem chiều cao trên biểu đồ đúng tỷ lệ và so sánh với chiều cao của bạn.",
  },
  guides: {
    metaTitle: "Hướng dẫn về chiều cao – Cách đo, tăng trưởng và chênh lệch",
    metaDescription:
      "Hướng dẫn thực tế về cách đo chiều cao tại nhà, khi nào con người ngừng tăng chiều cao và chênh lệch chiều cao trông như thế nào.",
    h1: "Hướng dẫn về chiều cao",
    intro: "Các bài hướng dẫn ngắn gọn, thực tế, kèm số liệu cụ thể.",
    read: "Đọc bài",
    minutes: "{n} phút đọc",
  },
};

export default messages;
