# BIẾT & BIẾT ƠN

**Căn Bản Đời Sống Ki-tô Hữu Qua Chiều Kích Nhận Biết Và Thực Hành Lòng Biết Ơn**

Một ứng dụng web (Web Application) trình bày Báo cáo Thần học dưới dạng bài viết học thuật tương tác chất lượng cao, mang lại trải nghiệm đọc (reading experience) tối ưu nhất trên mọi loại thiết bị từ di động (mobile) đến máy tính để bàn (desktop).

## 🌟 Tính Năng Nổi Bật

- **Typography Chuẩn Học Thuật**: Sử dụng font chữ có chân (serif - EB Garamond) kết hợp không chân (sans-serif - Inter), tối ưu hóa khoảng cách dòng (line-height), căn chữ hai lề (justify) giúp người đọc chống mỏi mắt với các văn bản dài.
- **Chế Độ Tối (Dark Mode) Hoàn Hảo**: Hoạt động mượt mà với Tailwind CSS v4 và `next-themes`, cho phép người dùng chuyển đổi tự do giữa Light/Dark mode. Chữ và nền được tính toán độ tương phản (contrast) một cách tỉ mỉ.
- **Mục Lục Tương Tác (Table of Contents)**:
  - Trên **Desktop**: Sidebar ghim bên trái màn hình, theo dõi vị trí cuộn trang hiện tại (Scroll Spy).
  - Trên **Mobile**: Nút Nổi (Floating Action Button) tinh tế mở ra thư mục dưới dạng Modal trong suốt (backdrop-blur) ở cạnh dưới, luôn sẵn sàng khi bạn cần lướt tìm chương mục.
- **Phân Tích Báo Cáo Tự Động**: Dự án có cơ chế đọc và phân tích tự động từ tệp văn bản thô nâng cao để dàn trang (rendering) thành các `<section>`, `<h3>`, bảng biểu và danh sách tài liệu tham khảo theo đúng chuẩn APA.

## 🚀 Công Nghệ Sử Dụng

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography & Icons**: Next/Font, Heroicons SVG
- **Theme Builder**: `next-themes`
- **Ngôn ngữ**: TypeScript

## ⚙️ Hướng Dẫn Cài Đặt và Chạy Chế Độ Phát Triển (Local Development)

Đảm bảo bạn đã cài đặt [Node.js](https://nodejs.org/) (phiên bản 20 trở lên) trên máy tính của mình.

**Bước 1:** Cài đặt các thư viện cần thiết
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

**Bước 2:** Chạy Development Server
```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

**Bước 3:** Xem kết quả
Mở trình duyệt web của bạn và truy cập địa chỉ: [http://localhost:3000](http://localhost:3000)

## 📁 Cấu Trúc Dự Án

- `report.txt`: File chứa nội dung văn bản nguồn của báo cáo. Server sẽ tự động đọc và phân giải nội dung file này.
- `src/app/page.tsx`: Cấu trúc trang chủ (Home), ghép nối nội dung từ Markdown và các blocks.
- `src/app/layout.tsx`: Layout gốc của ứng dụng, chứa cấu hình Fonts, Header, ThemeProvider và Footer.
- `src/app/globals.css`: Thiết lập CSS hệ thống toàn cục, các biến màu sắc cốt lõi và Custom Variant của Tailwind CSS v4 hỗ trợ cho Dark Mode.
- `src/components/`: Thư mục chứa các mảnh ghép giao diện độc lập (Components):
  - `HeroSection.tsx`: Banner nội dung ở đầu báo cáo.
  - `TheologicalContent.tsx`: Trình tự dàn trang tự động cho báo cáo, bảng biểu.
  - `TableOfContentsSidebar.tsx`: Nút tính năng điều hướng thư mục trên Desktop/Mobile.
  - `ReferencesSection.tsx`: Xử lý mảng tài liệu tham khảo theo định dạng quốc tế APA 7th.
  - `LoveInActionSection.tsx`: Chương phân tích chuyên biệt.
- `src/lib/report-parser.ts`: Tiện ích tự động xử lý nội dung từ nguồn text và thiết lập dàn bài (sections mapping).

## 📄 Bản Quyền
&copy; 2026 Căn Bản Đời Sống Ki-tô Hữu Qua Chiều Kích Nhận Biết Và Thực Hành Lòng Biết Ơn.
