import type { FC } from "react";

type Reference = {
  id: number;
  author?: string;
  year?: string;
  title: string;
  source?: string;
  url?: string;
  accessedDate?: string;
};

const references: Reference[] = [
  {
    id: 1,
    author: "Dòng Tên - Dòng Chúa Giêsu",
    year: "2026",
    title: "Căn bản đời sống Ki-tô hữu: Biết và biết ơn",
    source: "dongten.net",
    url: "https://dongten.net/can-ban-doi-song-ki-to-huu-biet-va-biet-on/",
    accessedDate: "2026-02-20",
  },
  {
    id: 2,
    author: "Đức Giáo Hoàng Phanxicô",
    year: "2013",
    title: "Thông điệp Lumen Fidei (Ánh Sáng Đức Tin)",
    source: "Giáo Phận Đà Lạt",
    url: "https://giaophandalat.com/thong-diep-lumen-fidei-cua-dgh-phanxico-ban-dich-cua-ubgldt-hdgmvn.html",
    accessedDate: "2026-02-20",
  },
  {
    id: 3,
    author: "Giáo Phận Cần Thơ",
    year: "2026",
    title: "Các bài suy niệm Chúa Nhật 21 Thường Niên B",
    source: "gpcantho.com",
    url: "https://gpcantho.com/cac-bai-suy-niem-chua-nhat-21-thuong-nien-b/",
    accessedDate: "2026-02-20",
  },
  {
    id: 4,
    author: "Giáo Phận Vinh",
    year: "2026",
    title: "Chúa nhật I mùa Chay, năm C: Các bài suy niệm & chú giải Lời Chúa",
    source: "giaophanvinh.net",
    url: "https://www.giaophanvinh.net/chua-nhat-i-mua-chay-nam-c-cac-bai-suy-niem-chu-giai-loi-chua-4891",
    accessedDate: "2026-02-20",
  },
  {
    id: 5,
    author: "Tổng Giáo Phận Hà Nội",
    year: "2026",
    title: "Các bài suy niệm Chúa Nhật I Mùa Chay - Năm C",
    source: "tonggiaophanhanoi.org",
    url: "https://www.tonggiaophanhanoi.org/cac-bai-suy-niem-chua-nhat-i-mua-chay-nam-c/",
    accessedDate: "2026-02-20",
  },
  {
    id: 6,
    author: "Giáo Phận Đà Lạt",
    year: "2026",
    title: "Lời Chúa Trong Việc Thánh Hóa Bản Thân",
    source: "giaophandalat.com",
    url: "https://giaophandalat.com/loi-chua-trong-viec-thanh-hoa-ban-than.html",
    accessedDate: "2026-02-20",
  },
  {
    id: 7,
    author: "Petit, J. F.",
    year: "2023",
    title: "Trở nên con người hơn với Thánh Augustinô",
    source: "Oblates de l'Assomption",
    url: "https://oblatesassomption.com/wp-content/uploads/2024/08/13-Tro-nen-con-nguoi-hon-voi-thanh-Augustino-Devenir-plus-humain-JF-Petit-2023-10-20.pdf",
    accessedDate: "2026-02-20",
  },
  {
    id: 8,
    author: "Thánh Tôma Aquinô",
    year: "2026",
    title: "Tổng luận thần học: Thiên Chúa tạo thành và các thiên thần - Phần II",
    source: "Linh mục Mễn",
    url: "https://linhmucmen.com/news/kho-sach-quy/tong-luan-than-hoc-thien-chua-tao-thanh-va-cac-thien-than-thanh-toma-aquino-phan-ii-2957.html",
    accessedDate: "2026-02-20",
  },
  {
    id: 9,
    author: "Giáo Lý Hội Thánh Công Giáo",
    year: "2026",
    title: "Mục 3: Bí tích Thánh Thể (1322-1419)",
    source: "Augustinô.net",
    url: "https://augustino.net/giao-ly-so-1322-1419",
    accessedDate: "2026-02-20",
  },
  {
    id: 10,
    author: "Phúc Hưng Thánh Thể",
    year: "2026",
    title: "Bài 9 – Thánh Lễ là Hy Tế Bí Tích",
    source: "phuchungthanhthe.org",
    url: "https://phuchungthanhthe.org/giaolytl-9/",
    accessedDate: "2026-02-20",
  },
  {
    id: 11,
    author: "Alpha.org",
    year: "2026",
    title: "Thái độ của lòng biết ơn",
    source: "Kinh Thánh trong một năm",
    url: "https://bible.alpha.org/vi/classic/277",
    accessedDate: "2026-02-20",
  },
  {
    id: 12,
    author: "Giáo Phận Đà Lạt",
    year: "2026",
    title: "Bài 6: Dậy men Tin Mừng - Lòng biết ơn",
    source: "giaophandalat.com",
    url: "https://giaophandalat.com/bai-6-day-men-tin-mung-long-biet-on.html",
    accessedDate: "2026-02-20",
  },
  {
    id: 13,
    author: "Dòng Tên",
    year: "2026",
    title: "Phút Hồi Tâm và Lòng Biết Ơn",
    source: "dongten.net",
    url: "https://dongten.net/phut-hoi-tam-va-long-biet-on/",
    accessedDate: "2026-02-20",
  },
  {
    id: 14,
    author: "Đức Giáo Hoàng Phanxicô",
    year: "2023",
    title: "Diễn từ dành cho tham dự viên Đại hội Caritas Quốc tế",
    source: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/dien-tu-duc-giao-hoang-phanxico-danh-cho-tham-du-vien-dai-hoi-caritas-quoc-te-50840",
    accessedDate: "2026-02-20",
  },
  {
    id: 15,
    author: "Đức cha Louis Nguyễn Anh Tuấn",
    year: "2026",
    title: "Hãy thể hiện lòng biết ơn",
    source: "Hội Đồng Giám Mục Việt Nam",
    url: "https://hdgmvietnam.com/chi-tiet/duc-cha-louis-nguyen-anh-tuan-hay-the-hien-long-biet-on--42245",
    accessedDate: "2026-02-20",
  },
  {
    id: 16,
    author: "Đức cha Phêrô Nguyễn Văn Viên",
    year: "2026",
    title: "Đức Giêsu Kitô - Đường Trái Tim",
    source: "Tổng Giáo Phận Sài Gòn",
    url: "https://tgpsaigon.net/bai-viet/duc-cha-phero-nguyen-van-vien-duc-giesu-kito-duong-trai-tim-60413",
    accessedDate: "2026-02-20",
  },
  {
    id: 17,
    author: "Hội Đồng Giám Mục Việt Nam",
    year: "2026",
    title: "Đối diện với những thử thách về đức tin",
    source: "hdgmvietnam.com",
    url: "https://hdgmvietnam.com/chi-tiet/doi-dien-voi-nhung-thu-thach-ve-duc-tin-45917",
    accessedDate: "2026-02-20",
  },
  {
    id: 18,
    author: "Giáo Phận Cần Thơ",
    year: "2020",
    title: "Giáo Lý 5 Phút GPCT 2020",
    source: "gpcantho.com",
    url: "https://gpcantho.com/giao-ly-5-phut-gpct-2020-file-word/",
    accessedDate: "2026-02-20",
  },
  {
    id: 19,
    author: "Giáo Phận Hà Tĩnh",
    year: "2025",
    title: "Đức Cha Louis Gặp Gỡ & Huấn Dụ Các Chủng Sinh Trước Kỳ Thực Tập Mục Vụ Hè 2025",
    source: "giaophanhatinh.com",
    url: "https://giaophanhatinh.com/duc-cha-louis-gap-go-huan-du-cac-chung-sinh-truoc-ky-thuc-tap-muc-vu-he-2025.htdiocese",
    accessedDate: "2026-02-20",
  },
  {
    id: 20,
    author: "Giáo Phận Hà Tĩnh",
    year: "2026",
    title: "Đức Cha Louis Nguyễn Anh Tuấn thăm Mục vụ Chuẩn Giáo xứ Thanh Thủy",
    source: "giaophanhatinh.net",
    url: "https://giaophanhatinh.net/duc-cha-louis-nguyen-anh-tuan-tham-muc-vu-chuan-giao-xu-thanh-thuy.htdiocese",
    accessedDate: "2026-02-20",
  },
];

function formatAPA(reference: Reference): string {
  const parts: string[] = [];

  if (reference.author) {
    parts.push(reference.author);
  }

  if (reference.year) {
    parts.push(`(${reference.year})`);
  }

  parts.push(reference.title);

  if (reference.source) {
    parts.push(`Trong ${reference.source}`);
  }

  if (reference.url) {
    const accessedDate = reference.accessedDate
      ? new Date(reference.accessedDate).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "n.d.";
    parts.push(`Truy cập ngày ${accessedDate}, từ ${reference.url}`);
  }

  return parts.join(". ");
}

export const ReferencesSection: FC = () => {
  return (
    <section
      id="tai-lieu-tham-khao"
      className="scroll-mt-24 border-t-2 border-primary/20 bg-slate-50/50 px-4 py-8 transition-[background-color,border-color,color] duration-200 dark:border-primary/30 dark:bg-slate-900 dark:text-slate-200 sm:scroll-mt-28 sm:px-6 sm:py-10 md:scroll-mt-32"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 font-serif text-xl font-semibold text-primary dark:text-primary/95 sm:mb-5 sm:text-2xl md:mb-6">
          Tài Liệu Tham Khảo
        </h2>
        <p className="mb-5 text-xs italic text-slate-600 dark:text-slate-400 sm:mb-6 sm:text-sm">
          Danh mục tài liệu tham khảo được trình bày theo chuẩn APA (American
          Psychological Association) 7th Edition.
        </p>
        <ol className="space-y-3 text-xs leading-relaxed text-slate-900 dark:text-slate-200 sm:space-y-4 sm:text-sm sm:text-slate-800 sm:dark:text-slate-200">
          {references.map((ref) => (
            <li
              key={ref.id}
              className="ml-4 pl-3 text-justify sm:ml-6 sm:pl-4"
              style={{ listStyle: "decimal" }}
            >
              <span className="font-medium">{formatAPA(ref)}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
