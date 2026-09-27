import type { Messages } from "./en";

const messages: Messages = {
  meta: {
    title: "So Sánh Chiều Cao – Công Cụ Trực Quan, Chính Xác",
    description:
      "Công cụ so sánh chiều cao miễn phí: đặt bạn cạnh người nổi tiếng, nhân vật anime, đồ vật trên biểu đồ chính xác (cm hoặc feet-inch). Chia sẻ, tải ảnh dễ dàng.",
    ogAlt: "Biểu đồ so sánh chiều cao với nhiều người đứng cạnh nhau",
  },
  nav: {
    tool: "So sánh chiều cao",
    tools: "Công cụ",
    language: "Ngôn ngữ",
    skip: "Chuyển đến nội dung",
  },
  board: {
    title: "Bảng so sánh chiều cao",
    add: "Thêm",
    addMan: "Nam",
    addWoman: "Nữ",
    addObject: "Đồ vật",
    addImage: "Hình ảnh",
    library: "Thư viện",
    searchPlaceholder: "Tìm người, nhân vật, đồ vật…",
    noResults: "Không tìm thấy. Hãy thêm người tùy chỉnh.",
    categories: {
      generic: "Mọi người",
      athlete: "Vận động viên",
      celebrity: "Người nổi tiếng",
      character: "Nhân vật",
      record: "Kỷ lục",
      object: "Đồ vật",
      animal: "Động vật",
    },
    defaultMan: "Nam",
    defaultWoman: "Nữ",
    defaultObject: "Đồ vật",
    defaultImage: "Hình ảnh",
    name: "Tên",
    height: "Chiều cao",
    feet: "ft",
    inches: "in",
    unitMetric: "cm",
    unitImperial: "ft/in",
    type: "Loại",
    kinds: { male: "Nam", female: "Nữ", object: "Đồ vật", image: "Hình ảnh" },
    build: "Vóc dáng",
    builds: { slim: "Mảnh khảnh", average: "Trung bình", broad: "Vạm vỡ" },
    shape: "Hình dạng",
    shapes: { block: "Khối", door: "Cửa", tree: "Cây", building: "Tòa nhà", tower: "Tháp" },
    adultProportions: "Tỷ lệ người lớn",
    color: "Màu sắc",
    remove: "Xóa",
    duplicate: "Nhân bản",
    moveLeft: "Sang trái",
    moveRight: "Sang phải",
    share: "Chia sẻ",
    linkCopied: "Đã sao chép liên kết",
    download: "Tải PNG",
    reset: "Đặt lại",
    clearAll: "Xóa tất cả",
    subjects: "Đối tượng",
    empty: "Thêm người, đồ vật hoặc hình ảnh để bắt đầu so sánh.",
    tallerBy: "{a} cao hơn {b} {diff} ({pct})",
    sameHeight: "{a} và {b} cao bằng nhau",
    imageNote: "Ảnh tải lên chỉ lưu trên thiết bị của bạn và không nằm trong liên kết chia sẻ.",
    edit: "Sửa",
    done: "Xong",
    fitAll: "Xem tất cả",
    focus: "Phóng to",
    resize: "Kéo để đổi chiều cao",
    loading3d: "Đang tải 3D…",
    orbitHint: "Kéo để xoay · cuộn hoặc chụm để thu phóng",
  },
  home: {
    h1: "Công Cụ So Sánh Chiều Cao",
    tagline:
      "So sánh chiều cao của người thật, người nổi tiếng, nhân vật và đồ vật cạnh nhau trên cùng một biểu đồ chính xác, theo centimet hoặc feet và inch.",
    howTitle: "Cách so sánh chiều cao",
    how: [
      {
        title: "Thêm đối tượng",
        body: "Thêm nam, nữ, đồ vật hoặc ảnh của riêng bạn, hoặc chọn từ thư viện người nổi tiếng, vận động viên và nhân vật anime.",
      },
      {
        title: "Nhập chiều cao chính xác",
        body: "Nhập chiều cao theo cm hoặc ft/in. Hình người được vẽ đúng tỷ lệ, với tỷ lệ cơ thể phù hợp theo độ tuổi.",
      },
      {
        title: "Chia sẻ hoặc tải về",
        body: "Sao chép liên kết để mở lại đúng biểu đồ của bạn, hoặc tải PNG để gửi tin nhắn, đăng mạng xã hội và làm tài liệu tham khảo.",
      },
    ],
    featuresTitle: "Vì sao nên dùng biểu đồ so sánh chiều cao này",
    features: [
      {
        title: "Vẽ đúng tỷ lệ thực",
        body: "Mọi hình đều dùng chung một thang đo dọc, có lưới theo cả hệ mét lẫn hệ Anh, nên chênh lệch luôn chính xác.",
      },
      {
        title: "Tỷ lệ cơ thể chân thực",
        body: "Trẻ em được vẽ đầu to hơn, chân ngắn hơn; người lớn theo tỷ lệ 7,5 đầu. Chọn vóc dáng mảnh khảnh, trung bình hoặc vạm vỡ.",
      },
      {
        title: "Người, nhân vật và đồ vật",
        body: "So sánh bản thân với vận động viên, diễn viên, anh hùng anime, cánh cửa, ô tô, cây cối và công trình cao như Burj Khalifa.",
      },
      {
        title: "Miễn phí, nhanh, không cần đăng ký",
        body: "Mọi thứ chạy ngay trên trình duyệt. Liên kết chia sẻ chứa sẵn biểu đồ, nên không có gì bị tải lên.",
      },
    ],
    useCasesTitle: "Những cách dùng phổ biến",
    useCases: [
      { title: "Chênh lệch chiều cao cặp đôi", body: "Xem bạn và người ấy đứng cạnh nhau trông thế nào, và khoảng cách lộ rõ bao nhiêu trong ảnh." },
      { title: "Kiểm tra chiều cao người nổi tiếng", body: "Đứng cạnh Cristiano Ronaldo, Lionel Messi hay Taylor Swift để thấy chênh lệch thật." },
      { title: "Tham chiếu kích thước nhân vật", body: "Họa sĩ và người viết có thể xếp các nhân vật cạnh nhau để giữ tỷ lệ nhất quán qua từng cảnh." },
      { title: "Theo dõi chiều cao của trẻ", body: "Xem bé cao thế nào so với anh chị em, bố mẹ hoặc chiều cao trung bình ở độ tuổi của bé." },
    ],
    faqTitle: "Câu hỏi thường gặp",
    faq: [
      {
        q: "Công cụ so sánh chiều cao này chính xác đến đâu?",
        a: "Mọi hình được vẽ trên cùng một thang đo tuyến tính, nên chênh lệch nhìn thấy khớp chính xác với số liệu bạn nhập. Chiều cao trong thư viện là số liệu thường được công bố và có thể hơi khác so với nguồn khác.",
      },
      {
        q: "Tôi có thể chuyển giữa centimet và feet không?",
        a: "Có. Dùng nút chuyển cm / ft-in phía trên biểu đồ. Bạn có thể nhập chiều cao theo đơn vị nào cũng được, và cả hai luôn hiển thị trên nhãn và lưới.",
      },
      {
        q: "Làm sao để so sánh chiều cao của tôi với người nổi tiếng?",
        a: "Thêm một người với chiều cao của bạn, sau đó mở thư viện, tìm tên người nổi tiếng và chạm để thêm họ đứng cạnh bạn.",
      },
      {
        q: "Tôi có thể lưu hoặc chia sẻ biểu đồ không?",
        a: "Chạm Chia sẻ để sao chép liên kết dựng lại đúng biểu đồ cho bất kỳ ai mở nó, hoặc Tải PNG để lưu thành ảnh.",
      },
      {
        q: "Vì sao hình người thấp trông giống trẻ em?",
        a: "Tỷ lệ cơ thể thay đổi theo tuổi, nên chiều cao dưới mức người lớn sẽ dùng tỷ lệ của trẻ em. Hãy đánh dấu “Tỷ lệ người lớn” cho người trưởng thành có vóc dáng thấp.",
      },
      {
        q: "Tôi có thể so sánh đồ vật và tòa nhà không?",
        a: "Có. Thêm cửa, ô tô, cây hoặc công trình nổi tiếng, hoặc tạo đồ vật tùy chỉnh với chiều cao và chiều rộng bất kỳ, cao tới hàng kilômét.",
      },
    ],
    ctaTitle: "Bắt đầu so sánh chiều cao",
    ctaBody: "Biểu đồ của bạn nằm ở đầu trang và cập nhật ngay khi bạn gõ.",
    ctaButton: "Đến biểu đồ",
  },
  footer: {
    about: "Công cụ so sánh chiều cao trực quan miễn phí cho người, nhân vật và đồ vật.",
    rights: "Bảo lưu mọi quyền.",
  },
};

export default messages;
