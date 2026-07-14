import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
      <div className="glass flex w-full max-w-3xl items-center justify-between gap-4 rounded-full px-5 py-2.5">
        <span className="font-heading text-lg font-semibold tracking-tight text-zinc-950 dark:text-white">
          Fahad<span className="text-blue-600 dark:text-blue-400">.</span>
        </span>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
