import { LanguageBar } from "@/components/skills/language-bar";

const skillGroups = [
  {
    title: "IT & Cybersecurity",
    accent: "text-blue-600 dark:text-blue-400",
    skills: [
      "ServiceNow & Ticketing Systems",
      "Microsoft 365 & Office 365",
      "Azure Active Directory",
      "Windows Server 2012 / 2016",
      "Networking & Hardware Troubleshooting",
      "Remote Support Tools",
      "CCNA & Cisco Network Security",
    ],
  },
  {
    title: "Digital Marketing & Creative",
    accent: "text-amber-600 dark:text-amber-400",
    skills: [
      "Meta Ads Manager & Business Suite",
      "TikTok Ads Manager",
      "Meta Pixel & Conversion Tracking",
      "Canva Graphic Design",
      "Video Editing — Filmora & CapCut",
      "AI Content Tools (Nano Banana, Veo3)",
      "Sales Funnels & Landing Pages",
    ],
  },
];

const softSkills = [
  "Problem-Solving",
  "Critical Thinking",
  "Adaptability",
  "Leadership",
  "Communication",
  "Time Management",
  "Client Coordination",
  "Decision-Making",
];

const languages = [
  { name: "English", level: 90 },
  { name: "Tamil", level: 99 },
  { name: "Sinhala", level: 85 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Skills & Expertise
        </span>
        <h2 className="font-heading mt-3 max-w-2xl text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
          Two disciplines, one toolkit
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="glass rounded-2xl p-8">
              <h3 className={`text-lg font-semibold ${group.accent}`}>
                {group.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-600"
                    />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Soft Skills
            </h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="glass rounded-full px-4 py-1.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              Languages
            </h3>
            <div className="mt-5 space-y-4">
              {languages.map((lang) => (
                <LanguageBar key={lang.name} name={lang.name} level={lang.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
