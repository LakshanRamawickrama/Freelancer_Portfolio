import Image from "next/image";
import { RoleRotator } from "@/components/hero/role-rotator";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid min-h-[92vh] max-w-6xl grid-cols-1 items-center gap-8 px-6 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-4 lg:pt-24">
        {/* Left: text content */}
        <div className="relative z-10 order-2 flex flex-col items-start gap-6 lg:order-1">
          <span className="glass rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            CEO, TechSerandib Elite Solutions
          </span>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl dark:text-white">
            Mohamed Fahad
          </h1>

          <p className="min-h-[2.5em] text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">
            <RoleRotator
              roles={[
                "CEO & IT Executive",
                "Social Media Marketing Specialist",
              ]}
            />
          </p>

          <p className="max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            I run TechSerandib Elite Solutions, combining hands-on IT
            leadership and cybersecurity with data-driven social media
            marketing — helping businesses build secure systems and grow
            their digital presence.
          </p>

          <div className="mt-2 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-zinc-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="glass rounded-full px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-black/[0.03] dark:text-zinc-200 dark:hover:bg-white/[0.08]"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right: cutout portrait, contained in a glass frame */}
        <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="glass relative h-[420px] w-full max-w-[360px] overflow-hidden rounded-[2rem] lg:h-[600px] lg:max-w-[440px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/3 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{ background: "var(--accent-glow)" }}
            />
            <Image
              src="/images/fahad-suit-black.png"
              alt="Mohamed Fahad"
              width={750}
              height={1000}
              priority
              className="absolute bottom-0 left-1/2 h-[95%] w-auto -translate-x-1/2 object-contain object-bottom dark:hidden"
            />
            <Image
              src="/images/fahad-suit-white.png"
              alt="Mohamed Fahad"
              width={750}
              height={1000}
              priority
              className="absolute bottom-0 left-1/2 hidden h-[95%] w-auto -translate-x-1/2 object-contain object-bottom dark:block"
            />
          </div>

          {/* Floating role badges — only once the portrait shifts right on lg+, so there's clear space for these on the left */}
          <a
            href="https://www.techserandib.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass absolute -left-4 top-10 z-10 hidden rounded-xl px-4 py-3 transition-colors hover:bg-black/[0.03] lg:flex lg:flex-col dark:hover:bg-white/[0.08]"
          >
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Own Business
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              TechSerandib Elite Solutions
            </span>
          </a>
          <div className="glass absolute -left-4 bottom-10 z-10 hidden rounded-xl px-4 py-3 lg:flex lg:flex-col">
            <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
              Freelance
            </span>
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Meta & TikTok Ads Manager
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
