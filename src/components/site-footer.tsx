export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/5 py-8 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row sm:px-8">
        <span className="text-sm text-zinc-500 dark:text-zinc-500">
          © {year} Mohamed Fahad. All rights reserved.
        </span>
        <a
          href="https://www.techserandib.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          TechSerandib Elite Solutions (PVT) Ltd.
        </a>
      </div>
    </footer>
  );
}
