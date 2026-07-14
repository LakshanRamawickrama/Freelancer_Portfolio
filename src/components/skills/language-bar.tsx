"use client";

import { useEffect, useRef, useState } from "react";

export function LanguageBar({ name, level }: { name: string; level: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWidth(level);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-baseline justify-between text-sm">
        <span className="font-medium text-zinc-800 dark:text-zinc-200">
          {name}
        </span>
        <span className="text-zinc-500 dark:text-zinc-400">{level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-[width] duration-1000 ease-out dark:bg-blue-400"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
