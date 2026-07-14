"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import type { ProjectCategory, ProjectItem } from "@/components/projects/types";
import { Lightbox } from "@/components/projects/lightbox";

const TABS: { key: ProjectCategory | "all"; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "posters", label: "Poster Designs" },
  { key: "reels", label: "Reels & Videos" },
  { key: "ai-content", label: "AI Content" },
  { key: "campaign-results", label: "Campaign Results" },
];

const PAGE_SIZE = 12;

export function ProjectGrid({ items }: { items: ProjectItem[] }) {
  const [activeTab, setActiveTab] = useState<ProjectCategory | "all">("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeTab === "all"
        ? items
        : items.filter((item) => item.category === activeTab),
    [items, activeTab],
  );

  const visible = filtered.slice(0, visibleCount);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => {
              setActiveTab(tab.key);
              setVisibleCount(PAGE_SIZE);
            }}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                : "glass text-zinc-600 hover:bg-black/[0.03] dark:text-zinc-400 dark:hover:bg-white/[0.08]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className="glass group relative aspect-[4/5] overflow-hidden rounded-xl text-left"
          >
            <Image
              src={item.type === "video" ? item.poster ?? item.src : item.src}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {item.type === "video" && (
              <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5 text-zinc-900">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-3 opacity-0 transition-opacity group-hover:opacity-100">
              <span className="block truncate text-xs font-semibold text-white">
                {item.brand ?? item.title}
              </span>
            </span>
          </button>
        ))}
      </div>

      {visibleCount < filtered.length && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((v) => v + PAGE_SIZE)}
            className="glass rounded-full px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-black/[0.03] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
          >
            Load More
          </button>
        </div>
      )}

      {lightboxIndex !== null && visible[lightboxIndex] && (
        <Lightbox
          item={visible[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((i) => (i === null ? null : (i - 1 + visible.length) % visible.length))
          }
          onNext={() =>
            setLightboxIndex((i) => (i === null ? null : (i + 1) % visible.length))
          }
        />
      )}
    </div>
  );
}
