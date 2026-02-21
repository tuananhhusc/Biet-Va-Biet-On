"use client";

import { useEffect, useState } from "react";

import type { FC } from "react";

export type TocItem = {
  id: string;
  label: string;
};

type Props = {
  items: TocItem[];
};

export const TableOfContentsSidebar: FC<Props> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [items]);

  const handleClick = (id: string) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!items.length) return null;

  return (
    <>
      {/* Mobile Floating Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed bottom-6 right-4 z-[60] flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-primary/90 active:scale-95 dark:bg-primary/90 lg:hidden"
        aria-label="Mở/đóng mục lục"
        aria-expanded={isMobileOpen}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          {isMobileOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[50] bg-slate-900/40 backdrop-blur-sm lg:hidden transition-opacity"
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed bottom-24 right-4 z-[55] w-64 max-w-[calc(100vw-2rem)] origin-bottom-right rounded-2xl border border-white/20 bg-white/95 p-4 shadow-2xl backdrop-blur-lg transition-transform duration-200 dark:border-slate-700/50 dark:bg-slate-900/95 lg:hidden">
            <h3 className="mb-3 border-b border-primary/10 pb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary dark:border-primary/20 dark:text-primary/90">
              Mục Lục
            </h3>
            <nav aria-label="Mục lục các phần thần học">
              <ul className="max-h-[50vh] space-y-1.5 overflow-y-auto pr-1">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleClick(item.id)}
                      className={`w-full rounded-lg px-3 py-2.5 text-left text-[0.8rem] font-medium transition-[background-color,color,transform] duration-150 active:scale-[0.98] ${activeId === item.id
                          ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/95"
                          : "text-slate-800 active:bg-slate-100 dark:text-slate-300 dark:active:bg-slate-800"
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="sticky top-28 hidden h-[calc(100vh-7rem)] w-full max-w-xs shrink-0 overflow-y-auto border-l-2 border-primary/20 pl-6 pr-4 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300 lg:block">
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Mục lục
        </div>
        <nav aria-label="Mục lục các phần thần học">
          <ul className="space-y-1.5">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id);
                  }}
                  className={`block rounded-md px-3 py-2 text-xs font-medium transition-[background-color,color,box-shadow] duration-150 ${activeId === item.id
                    ? "bg-primary/10 text-primary shadow-sm dark:bg-primary/20 dark:text-primary/95"
                    : "text-slate-700 hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-primary/90"
                    }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};
