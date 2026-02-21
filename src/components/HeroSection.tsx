import type { FC } from "react";

type HeroSectionProps = {
  titleLine: string;
  introLine: string;
};

export const HeroSection: FC<HeroSectionProps> = ({ titleLine, introLine }) => {
  return (
    <section className="relative border-b border-slate-200/60 bg-gradient-to-b from-white via-white to-slate-50/40 pb-12 pt-8 transition-[background-color,border-color] duration-200 dark:border-slate-800/80 dark:from-background dark:via-background dark:to-slate-900 sm:pb-16 sm:pt-12 sm:from-background sm:via-background md:pb-20 md:pt-16 lg:pb-24 lg:pt-20">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent dark:via-primary/50 sm:h-[3px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Category Badge */}
            <div className="inline-flex w-full items-center gap-2 sm:gap-3">
              <span className="hidden h-[1px] w-8 bg-gradient-to-r from-transparent to-primary/40 dark:to-primary/50 sm:block sm:w-12" />
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-primary/80 dark:text-primary/70 sm:text-[0.7rem] sm:tracking-[0.35em]">
                Căn Bản Đời Sống Ki-tô Hữu
              </p>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/40 dark:to-primary/50" />
            </div>

            {/* Main Title */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-serif text-2xl font-semibold leading-[1.2] tracking-[-0.01em] text-slate-900 dark:text-slate-50 sm:text-3xl sm:leading-[1.15] sm:tracking-[-0.02em] md:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
                <span className="block leading-tight text-slate-900 dark:text-slate-50">
                  {titleLine}
                </span>
              </h1>
            </div>

            {/* Introduction Paragraph - Academic Style */}
            <div className="mt-6 max-w-3xl sm:mt-8 md:mt-10">
              <div className="relative">
                {/* Decorative left border for academic feel - hidden on mobile */}
                <div className="absolute -left-3 top-0 bottom-0 hidden w-[2px] bg-gradient-to-b from-primary/20 via-primary/40 to-transparent dark:from-primary/30 dark:via-primary/50 sm:block sm:-left-4" />
                <p className="text-[0.9rem] leading-[1.95] text-slate-900 dark:text-slate-200 sm:text-[0.98rem] sm:leading-[2.1] sm:text-slate-700 sm:dark:text-slate-200 md:text-[1.05rem] md:leading-[2.15] lg:text-[1.08rem] lg:leading-[2.2]">
                  {introLine}
                </p>
              </div>
            </div>

            {/* Academic Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200/60 pt-4 text-[0.7rem] text-slate-500 dark:border-slate-800/60 dark:text-slate-400 sm:mt-8 sm:gap-6 sm:pt-6 md:mt-10 md:text-xs">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded border border-slate-300/60 dark:border-slate-700/60 sm:h-5 sm:w-5">
                  <svg
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Tháng 2, 2026</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded border border-slate-300/60 dark:border-slate-700/60 sm:h-5 sm:w-5">
                  <svg
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <span className="font-medium">Báo cáo thần học</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="flex h-4 w-4 items-center justify-center rounded border border-slate-300/60 dark:border-slate-700/60 sm:h-5 sm:w-5">
                  <svg
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <span className="font-medium">Nghiên cứu thần học</span>
              </div>
            </div>
          </div>

          {/* Callout Box - Enhanced Academic Style */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative overflow-hidden rounded-xl border border-primary/15 bg-gradient-to-br from-white via-slate-50/90 to-white p-5 shadow-[0_4px_20px_rgba(0,51,160,0.08)] transition-[background-color,border-color,box-shadow] duration-200 hover:shadow-[0_6px_30px_rgba(0,51,160,0.12)] dark:border-primary/25 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 dark:shadow-[0_4px_20px_rgba(0,51,160,0.15)] dark:hover:shadow-[0_6px_30px_rgba(0,51,160,0.2)] sm:rounded-2xl sm:p-6 lg:p-7">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-primary/8 via-transparent to-transparent dark:from-primary/15 sm:h-32 sm:w-32" />

              {/* Icon - Cross symbol */}
              <div className="relative mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-primary/25 bg-white/90 shadow-sm dark:border-primary/35 dark:bg-slate-800 dark:shadow-slate-900/50 sm:h-14 sm:w-14 sm:rounded-xl lg:h-16 lg:w-16">
                  <div className="relative h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8">
                    <span className="absolute inset-x-0 top-0 h-[2px] bg-primary dark:bg-primary/90" />
                    <span className="absolute inset-y-0 left-0 w-[2px] bg-primary dark:bg-primary/90" />
                    <span className="absolute inset-x-0 bottom-0 h-[2px] bg-primary dark:bg-primary/90" />
                    <span className="absolute inset-y-0 right-0 w-[2px] bg-primary dark:bg-primary/90" />
                  </div>
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent dark:from-primary/40 dark:via-primary/30" />
              </div>

              {/* Content */}
              <div className="relative space-y-3 sm:space-y-4">
                <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary dark:text-primary/95 sm:text-xs sm:tracking-[0.25em]">
                  Biết &amp; Biết Ơn
                </h3>
                <p className="text-[0.8rem] leading-[1.7] text-slate-900 dark:text-slate-200 sm:text-[0.875rem] sm:leading-[1.75] sm:text-slate-700 sm:dark:text-slate-200">
                  Nền tảng đời sống Ki-tô hữu được khai triển qua chiều kích nhận biết Thiên Chúa, nhận biết chính mình và sống lòng biết ơn trong phụng vụ và đời sống thường nhật.
                </p>

                {/* Academic divider */}
                <div className="pt-3 sm:pt-4">
                  <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent dark:via-primary/30" />
                </div>

                {/* Key points - Academic bullet style */}
                <div className="space-y-2.5 text-[0.7rem] leading-relaxed text-slate-800 dark:text-slate-300 sm:space-y-3 sm:text-xs sm:text-slate-600 sm:dark:text-slate-300">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/70 dark:bg-primary/80 sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                    <span className="font-medium">Nhận biết Thiên Chúa</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/70 dark:bg-primary/80 sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                    <span className="font-medium">Nhận biết bản thân</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-primary/70 dark:bg-primary/80 sm:mt-1.5 sm:h-1.5 sm:w-1.5" />
                    <span className="font-medium">Thực hành lòng biết ơn</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
