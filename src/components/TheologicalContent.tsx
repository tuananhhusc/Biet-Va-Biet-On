import type { FC, ReactElement } from "react";

import type { SectionMeta } from "@/lib/report-parser";

type Props = {
  sections: SectionMeta[];
  contentLines: string[];
};

const ANALYSIS_TITLE = "Đặc Tính Phân Tích";
const CONTRAST_TITLE =
  "Sự Tương Phản Nhận Thức Lời Chúa (Qua Lăng Kính Khải Huyền & Tu Đức)";
const REFERENCES_TITLE = "Nguồn trích dẫn";

export const TheologicalContent: FC<Props> = ({ sections, contentLines }) => {
  const resolveSectionRange = (index: number) => {
    const current = sections[index];
    const next = sections[index + 1];

    const start = current.startIndex;
    const end = next ? next.startIndex : contentLines.length;

    return { start, end };
  };

  return (
    <article className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-serif prose-headings:text-primary prose-p:text-slate-800 prose-p:dark:text-slate-100 prose-p:leading-relaxed prose-p:text-justify prose-strong:text-slate-900 prose-strong:dark:text-slate-50">
      <div className="space-y-10 sm:space-y-12 md:space-y-14 lg:space-y-16">
        {sections.map((section, index) => {
          const { start, end } = resolveSectionRange(index);
          const lines = contentLines.slice(start, end);

          return (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 border-b border-slate-200/60 pb-8 transition-[border-color] duration-200 dark:border-slate-800/70 sm:scroll-mt-28 sm:pb-10 md:scroll-mt-32 md:pb-12 last:border-b-0"
            >
              <h2 className="mb-4 font-serif text-2xl font-semibold leading-tight text-primary dark:text-primary/95 sm:mb-5 sm:text-2xl md:mb-6 md:text-3xl lg:text-4xl">
                {section.title}
              </h2>
              <div className="mt-4 space-y-3 text-[0.9rem] leading-[1.8] text-slate-900 dark:text-slate-200 sm:mt-5 sm:space-y-4 sm:text-[0.95rem] sm:leading-[1.85] sm:text-slate-800 md:mt-6 md:text-base md:leading-[1.9]">
                {renderSectionLines(lines)}
              </div>
            </section>
          );
        })}
      </div>
    </article>
  );
};

function renderSectionLines(lines: string[]): ReactElement[] {
  const blocks: ReactElement[] = [];
  let inTable = false;
  let tableLines: string[] = [];
  let tableTitle = "";

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    if (!line) {
      if (inTable) {
        blocks.push(renderTable(tableTitle, tableLines));
        inTable = false;
        tableLines = [];
        tableTitle = "";
      }
      blocks.push(
        <div key={`gap-${i}`} className="h-3 sm:h-4" aria-hidden="true" />,
      );
      continue;
    }

    if (line === ANALYSIS_TITLE || line === CONTRAST_TITLE) {
      if (inTable) {
        blocks.push(renderTable(tableTitle, tableLines));
      }
      tableTitle = raw;
      tableLines = [raw];
      inTable = true;
      continue;
    }

    if (inTable) {
      tableLines.push(raw);
      continue;
    }

    if (line === REFERENCES_TITLE) {
      break;
    }

    // Detect subheadings (lines that are shorter and don't end with punctuation)
    const isSubheading =
      line.length < 80 &&
      !line.endsWith(".") &&
      !line.endsWith(",") &&
      !line.endsWith(":") &&
      line.length > 10 &&
      /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]/.test(
        line.charAt(0),
      );

    if (isSubheading) {
      blocks.push(
        <h3
          key={`subheading-${i}`}
          className="mt-6 mb-3 font-serif text-lg font-semibold text-primary dark:text-primary/95 sm:mt-8 sm:mb-4 sm:text-xl"
        >
          {raw}
        </h3>,
      );
      continue;
    }

    // Regular paragraph
    blocks.push(
      <p key={`line-${i}`} className="text-justify leading-relaxed text-slate-900 dark:text-slate-200 sm:text-slate-800 sm:dark:text-slate-200">
        {raw}
      </p>,
    );
  }

  if (inTable) {
    blocks.push(renderTable(tableTitle, tableLines));
  }

  return blocks;
}

function renderTable(title: string, lines: string[]): ReactElement {
  if (lines.length === 0) return <></>;

  const isAnalysis = title === ANALYSIS_TITLE;
  const headerRow = lines[1]?.trim() || "";
  const hasTwoColumns = headerRow.includes("Trong Lịch Sử") || headerRow.includes("Ảo Tưởng");

  return (
    <div
      key={`table-${title}`}
      className="my-6 overflow-hidden rounded-lg border border-primary/20 bg-gradient-to-br from-slate-50/90 to-white shadow-sm transition-[background-color,border-color,box-shadow] duration-200 dark:border-primary/30 dark:from-slate-900 dark:to-slate-900 sm:my-8 sm:rounded-xl"
    >
      <div className="border-b border-primary/15 bg-primary/5 px-4 py-3 dark:border-primary/25 dark:bg-primary/15 sm:px-6 sm:py-4">
        <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-primary dark:text-primary/95 sm:text-sm sm:tracking-[0.15em]">
          {title}
        </h3>
      </div>
      <div className="px-4 py-3 sm:px-6 sm:py-4">
        {hasTwoColumns ? (
          <div className="grid gap-x-4 gap-y-2.5 text-[0.7rem] leading-relaxed sm:gap-x-8 sm:gap-y-3 sm:text-xs md:grid-cols-2">
            {lines.slice(1).map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;

              const isHeader = idx === 0 || trimmed.endsWith(":");
              return (
                <div
                  key={idx}
                  className={`${
                    isHeader
                      ? "col-span-2 mt-3 mb-1 font-semibold text-slate-900 first:mt-0 dark:text-slate-200 sm:mt-4 sm:text-slate-700 sm:dark:text-slate-200"
                      : "text-slate-800 dark:text-slate-300 sm:text-slate-600 sm:dark:text-slate-300"
                  }`}
                >
                  {trimmed}
                </div>
              );
            })}
          </div>
        ) : (
          <div className="space-y-2 text-[0.7rem] leading-relaxed text-slate-900 dark:text-slate-300 sm:space-y-2.5 sm:text-xs sm:text-slate-700">
            {lines.slice(1).map((line, idx) => {
              const trimmed = line.trim();
              if (!trimmed) return null;
              return (
                <p key={idx} className="text-justify text-slate-900 dark:text-slate-300 sm:text-slate-700 sm:dark:text-slate-300">
                  {trimmed}
                </p>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
