const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "15+", label: "Certifications" },
  { value: "2", label: "Roles, 1 Business" },
  { value: "3", label: "Languages Spoken" },
];

export function About() {
  return (
    <section id="about" className="relative border-t border-black/5 py-24 dark:border-white/5">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 sm:px-8 lg:grid-cols-5 lg:gap-12">
        <div className="lg:col-span-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            About Me
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            IT leadership and digital marketing, under one roof
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a highly motivated and adaptable professional running{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                TechSerandib Elite Solutions
              </span>
              , where I wear two hats: as{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                CEO & IT Executive
              </span>
              , I manage the company&apos;s brand, IT security, and business
              strategy; as a{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                Social Media Marketing Specialist
              </span>
              , I plan and run content, ads, and growth campaigns for clients
              across industries.
            </p>
            <p>
              My background spans hands-on IT support and cybersecurity
              (HCL Technologies, FBC Asia Pacific) alongside freelance social
              media and Meta/TikTok ad management for international clients
              on Upwork. I thrive in dynamic environments and quickly adapt
              to new tools, systems, and workflows — with a proactive mindset
              focused on continuous improvement and measurable results.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-zinc-900/50"
            >
              <div className="text-3xl font-bold text-zinc-950 dark:text-white">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
