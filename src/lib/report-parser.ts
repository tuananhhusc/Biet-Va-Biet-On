export type SectionMeta = {
  id: string;
  title: string;
  startIndex: number;
};

export type ParsedReport = {
  introLines: string[];
  contentLines: string[];
  sections: SectionMeta[];
};

const MAIN_SECTION_TITLES = [
  "Chiều Kích Nhận Thức Lịch Sử",
  "Chiều Kích Khám Phá Hữu Thể",
  "Chiều Kích Tương Quan Vượt Qua",
  "Thực Hành Hiện Sinh: Lòng Biết Ơn Trong Nhịp Sống Đương Đại",
  "Những Thách Đố Của Thời Đại Trọng Điểm Đối Với Tấm Lòng Tri Ân",
  "Hướng Tới Sự Trưởng Thành Tâm Linh: Định Hướng Mục Vụ Và Phân Định",
];

export function slugifyId(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function parseReport(raw: string): ParsedReport {
  const allLines = raw.split(/\r?\n/);
  const introLines = allLines.slice(0, 2);
  const contentLines = allLines.slice(2);

  const sections: SectionMeta[] = [];

  contentLines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) return;

    const matchTitle = MAIN_SECTION_TITLES.find((title) =>
      trimmed.startsWith(title),
    );

    if (matchTitle) {
      sections.push({
        id: slugifyId(trimmed),
        title: trimmed,
        startIndex: index,
      });
    }
  });

  // Nếu vì lý do nào đó không tìm được mục lớn nào, coi toàn bộ phần thân là một section.
  if (sections.length === 0) {
    sections.push({
      id: "noi-dung-chinh",
      title: "Nội dung chính",
      startIndex: 0,
    });
  }

  return {
    introLines,
    contentLines,
    sections,
  };
}

