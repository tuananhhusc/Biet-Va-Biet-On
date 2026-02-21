import fs from "node:fs/promises";
import path from "node:path";

import { HeroSection } from "@/components/HeroSection";
import { LoveInActionSection } from "@/components/LoveInActionSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { TableOfContentsSidebar } from "@/components/TableOfContentsSidebar";
import { TheologicalContent } from "@/components/TheologicalContent";
import { parseReport } from "@/lib/report-parser";

async function loadReport() {
  const filePath = path.join(process.cwd(), "report.txt");
  const raw = await fs.readFile(filePath, "utf8");
  return parseReport(raw);
}

export default async function Home() {
  const parsed = await loadReport();

  const [rawTitleLine = "", introLine = ""] = parsed.introLines;
  // Loại bỏ phần "Báo Cáo Thần Học Phân Tích:" nếu có
  const titleLine = rawTitleLine.replace(/^Báo Cáo Thần Học Phân Tích:\s*/i, "");

  const tocItems = [
    ...parsed.sections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
    {
      id: "yeu-thuong-bang-hanh-dong",
      label: "Yêu Thương Bằng Hành Động",
    },
    {
      id: "tai-lieu-tham-khao",
      label: "Tài Liệu Tham Khảo",
    },
  ];

  return (
    <div className="bg-background">
      <HeroSection titleLine={titleLine} introLine={introLine} />
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-12 pt-6 sm:gap-8 sm:px-4 sm:pb-16 sm:pt-8 lg:flex-row lg:pt-10">
        <TableOfContentsSidebar items={tocItems} />
        <div className="min-w-0 flex-1">
          <TheologicalContent
            sections={parsed.sections}
            contentLines={parsed.contentLines}
          />
          <LoveInActionSection />
          <ReferencesSection />
        </div>
      </div>
    </div>
  );
}
