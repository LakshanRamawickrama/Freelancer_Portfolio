const jobs = [
  {
    period: "2025 — Present",
    title: "Social Media Manager | Meta & TikTok Ads Manager",
    place: "Upwork · Freelance",
    points: [
      "Managed complete social accounts for international clients, including a Canadian clothing brand and an AI-focused company",
      "Planned Meta & TikTok ad campaigns and advised European-region businesses on content strategy",
    ],
  },
  {
    period: "2024 — Present",
    title: "CEO & IT Executive / Social Media Marketing Specialist",
    place: "TechSerandib Elite Solutions (PVT) Ltd.",
    placeHref: "https://www.techserandib.com/",
    points: [
      "Set business goals, brand strategy, and IT security for the company he founded",
      "Plans and runs content, paid ads, and conversion-focused campaigns for clients across industries",
    ],
  },
  {
    period: "2023 — 2024",
    title: "IT Executive (L1 Support)",
    place: "HCL Technologies (PVT) Ltd.",
    points: [
      "Provided first-level support for hardware, software, and network issues",
      "Supported Global Account Management (GAM) with account setups and access permissions",
    ],
  },
  {
    period: "2022 — 2023",
    title: "Senior IT Associate Engineer",
    place: "FBC Asia Pacific Inc.",
    points: [
      "Supported call center agents on workstations, headsets, and telephony systems",
      "Coordinated setup and configuration of workstations for new hires",
    ],
  },
];

const education = [
  {
    period: "2025",
    title: "Diploma in Business Management",
    place: "LPEC Campus, Colombo",
  },
  {
    period: "2021 — 2022",
    title: "Diploma in Networking With Security",
    place: "NextGen Campus, Colombo",
  },
  {
    period: "2020",
    title: "G.C.E Advanced Level",
    place: "Kekunagolla National School",
  },
  {
    period: "2017",
    title: "G.C.E Ordinary Level",
    place: "An-Noor Central College",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Experience
        </span>
        <h2 className="font-heading mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Where the work happened
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-6">
          <ol className="flex flex-col gap-4 lg:col-span-3">
            {jobs.map((job) => (
              <li key={job.title} className="glass rounded-2xl p-6">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {job.period}
                </span>
                <h3 className="mt-1 text-lg font-semibold text-zinc-950 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  {job.placeHref ? (
                    <a
                      href={job.placeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-zinc-400/50 underline-offset-2 hover:text-zinc-900 hover:decoration-zinc-900 dark:hover:text-zinc-200 dark:hover:decoration-zinc-200"
                    >
                      {job.place}
                    </a>
                  ) : (
                    job.place
                  )}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Education
            </h3>
            <ol className="mt-5 flex flex-col gap-3">
              {education.map((item) => (
                <li key={item.title} className="glass rounded-2xl p-5">
                  <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                    {item.period}
                  </span>
                  <h4 className="mt-1 text-base font-semibold text-zinc-950 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {item.place}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
