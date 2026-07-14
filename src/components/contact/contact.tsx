const contactLinks = [
  {
    label: "Email",
    value: "mamfahadmx@gmail.com",
    href: "mailto:mamfahadmx@gmail.com",
  },
  {
    label: "Phone",
    value: "+94 77 58 18 631",
    href: "tel:+94775818631",
  },
  {
    label: "WhatsApp",
    value: "+94 77 58 18 631",
    href: "https://wa.me/94775818631",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/fahadmax",
    href: "https://linkedin.com/fahadmax",
  },
  {
    label: "Upwork",
    value: "View Freelancer Profile",
    href: "https://www.upwork.com/freelancers/~01b01bf3b5a892fbd2",
  },
];

const resumes = [
  {
    label: "CEO & IT Executive CV",
    href: "/cv/Mohamed-Fahad-IT-Executive-CV.pdf",
  },
  {
    label: "Social Media Marketing CV",
    href: "/cv/Mohamed-Fahad-Social-Media-Marketing-CV.pdf",
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-black/5 py-24 dark:border-white/5"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Get In Touch
        </span>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Let&apos;s work together
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Based in Colombo, Sri Lanka — open to IT consulting, cybersecurity
          support, and social media / ad management projects.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-black/10 bg-zinc-50 p-6 transition-colors hover:border-blue-600/40 dark:border-white/10 dark:bg-zinc-900/50 dark:hover:border-blue-400/40"
            >
              <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {item.label}
              </div>
              <div className="mt-1 truncate text-base font-semibold text-zinc-950 dark:text-white">
                {item.value}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          {resumes.map((resume) => (
            <a
              key={resume.label}
              href={resume.href}
              download
              className="flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-zinc-800 transition-colors hover:border-black/20 hover:bg-black/5 dark:border-white/15 dark:text-zinc-200 dark:hover:border-white/25 dark:hover:bg-white/5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M12 3a.75.75 0 0 1 .75.75v10.19l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.75A.75.75 0 0 1 12 3ZM4.5 16.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 0 .75.75h12a.75.75 0 0 0 .75-.75v-2.25a.75.75 0 0 1 1.5 0v2.25a2.25 2.25 0 0 1-2.25 2.25h-12a2.25 2.25 0 0 1-2.25-2.25v-2.25a.75.75 0 0 1 .75-.75Z" />
              </svg>
              Download {resume.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
