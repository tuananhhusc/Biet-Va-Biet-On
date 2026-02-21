import type { Metadata, Viewport } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/ThemeToggle";

const serif = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-eb-garamond",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Căn bản đời sống Ki-tô hữu: Biết và biết ơn",
  description:
    "Báo cáo thần học phân tích nền tảng đời sống Ki-tô hữu qua chiều kích nhận biết Thiên Chúa, nhận biết bản thân và thực hành lòng biết ơn trong phụng vụ và đời sống hiện sinh.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Căn bản đời sống Ki-tô hữu: Biết và biết ơn",
    description:
      "Phân tích thần học và mục vụ về hai chiều kích cốt lõi: Nhận Biết và Lòng Biết Ơn trong đời sống Ki-tô hữu.",
    type: "article",
    url: "https://example.com",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${serif.variable} ${sans.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/95 backdrop-blur-sm transition-[background-color,border-color] duration-200 dark:border-slate-800/70 dark:bg-background/95">
              <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-4 sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 via-primary/5 to-transparent border border-primary/20 shadow-sm transition-transform duration-300 hover:scale-105 dark:border-primary/30 dark:from-primary/20 dark:via-primary/10 sm:h-10 sm:w-10">
                    <div className="absolute inset-0 rounded-xl bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm" />
                    <svg
                      className="relative h-4 w-4 text-primary dark:text-primary/95 sm:h-5 sm:w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex items-center">
                    <p className="truncate text-sm font-bold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-50 sm:text-base">
                      BIẾT & BIẾT ƠN
                    </p>
                  </div>
                </div>
                <ThemeToggle />
              </div>
            </header>
            <main className="flex-1 bg-background">{children}</main>
            <footer className="border-t border-primary/10 bg-background/90 transition-[background-color,border-color] duration-200 dark:border-slate-800/70 dark:bg-background/95">
              <div className="mx-auto max-w-5xl px-4 py-5 text-center text-[0.7rem] leading-relaxed text-slate-500 dark:text-slate-400 sm:py-6 sm:text-xs">
                <p>
                  &copy; 2026 Căn Bản Đời Sống Ki-tô Hữu Qua Chiều Kích Nhận Biết Và Thực Hành Lòng Biết Ơn
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

