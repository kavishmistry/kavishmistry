import React, { useState } from "react";

/*
Kavish's Engineering Portfolio (React + Tailwind)
Cleaned, validated, fully working version for Vite + Cloudflare Pages
*/

// ---------- DATA ----------

const projectsData = [
  {
    title: "WRF Wind–Rainfall Lead/Lag Analysis",
    tags: ["Python", "xarray", "WRF", "HPC", "Signal Processing"],
    blurb:
      "Cross-correlation and time-offset quantification between windspeed and precipitation during the Mumbai 2005 EHRE using WRF d04.",
    links: [
      { label: "Code", href: "#" },
      { label: "Tech Note", href: "#" },
    ],
  },
  {
    title: "Robot Hand v2 — Adaptive Grip",
    tags: ["CAD", "Control", "Servo", "PID", "Manufacturing"],
    blurb:
      "Upgraded end-effector with compliant finger pads, feed-forward torque, and parameterized Fusion 360 design for rapid iteration.",
    links: [
      { label: "Demo", href: "#" },
      { label: "CAD", href: "#" },
    ],
  },
  {
    title: "Crank Arm Fatigue Life Model",
    tags: ["MATLAB", "FEA", "Materials", "S-N Curves"],
    blurb:
      "Stress amplitude extraction and life prediction under cyclic loads; compares Goodman vs. Gerber corrections with safety factors.",
    links: [
      { label: "Report", href: "#" },
      { label: "Figures", href: "#" },
    ],
  },
];

const skills = {
  Core: ["SolidWorks", "MATLAB", "Python", "Git", "Linux (shell)", "LaTeX"],
  "Data/Modeling": ["xarray", "NumPy", "SciPy", "pandas", "Matplotlib", "wrf-python"],
  Simulation: ["WRF", "SLURM", "FEA basics", "CAD→CAM"],
  Hardware: ["3-axis CNC", "3D printing", "Soldering", "Oscilloscope"],
};

// ---------- REUSABLE COMPONENTS ----------

const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-14 md:py-20">
    <div className="max-w-6xl mx-auto px-5">
      {title && (
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 md:mb-8">
          {title}
        </h2>
      )}
      {children}
    </div>
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center text-xs md:text-sm border rounded-full px-3 py-1 mr-2 mb-2">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="group border rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/60 dark:bg-zinc-900/60 backdrop-blur">
    {children}
  </div>
);

// ---------- NAV ----------

const Nav = () => (
  <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-zinc-900/70 border-b">
    <div className="max-w-6xl mx-auto px-5 py-3 flex items-center justify-between">
      <a href="#home" className="font-bold tracking-tight">
        Kavish Mistry
      </a>
      <nav className="hidden md:flex gap-6 text-sm">
        {[
          ["Projects", "#projects"],
          ["Skills", "#skills"],
          ["Experience", "#experience"],
          ["Writing", "#writing"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={label} href={href} className="opacity-80 hover:opacity-100">
            {label}
          </a>
        ))}
      </nav>
      <a href="#resume" className="text-sm border rounded-full px-3 py-1 hover:shadow">
        Résumé
      </a>
    </div>
  </header>
);

// ---------- HERO ----------

const Hero = () => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-300 via-transparent to-transparent opacity-40 dark:from-blue-800" />
    <Section id="home" title="">
      <div className="grid md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-7">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Building reliable systems—
            <span className="text-blue-600"> from simulations to hardware</span>
          </h1>

          <p className="mt-5 text-base md:text-lg opacity-90 max-w-2xl">
            Mechanical Engineering @ UIUC • climate-energy research (WRF + ERA5) • robotics & manufacturing.
            Turning messy signals into crisp decisions and CAD into parts that fit first try.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="border rounded-full px-4 py-2 text-sm hover:shadow">
              See projects
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-sm bg-blue-600 text-white hover:opacity-90"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-6 flex flex-wrap">
            {["WRF", "SLURM", "xarray", "SolidWorks", "MATLAB", "Python"].map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>

        <div className="md:col-span-5">
          <Card>
            <h3 className="font-semibold text-lg mb-2">Latest Build</h3>
            <p className="text-sm opacity-90">
              Mumbai 2005 EHRE: wind–rainfall lead/lag mapping at 100 m hub height (19.11°N, 72.85°E).  
              Extracted with <code className="mx-1">xarray</code> and visualized in{" "}
              <code className="mx-1">matplotlib</code>.
            </p>

            <div className="mt-4 h-40 w-full rounded-xl bg-gradient-to-br from-zinc-200 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 grid place-items-center text-xs opacity-80">
              Placeholder: hero graphic or plot
            </div>
          </Card>
        </div>
      </div>
    </Section>
  </div>
);

// ---------- PROJECTS ----------

const Projects = () => (
  <Section id="projects" title="Featured Projects">
    <div className="grid md:grid-cols-3 gap-6">
      {projectsData.map((p) => (
        <Card key={p.title}>
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <p className="mt-2 text-sm opacity-90">{p.blurb}</p>

          <div className="mt-3 flex flex-wrap">
            {p.tags.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>

          <div className="mt-4 flex gap-3 text-sm">
            {p.links.map((l) => (
              <a key={l.label} href={l.href} className="underline underline-offset-4">
                {l.label}
              </a>
            ))}
          </div>
        </Card>
      ))}
    </div>
  </Section>
);

// ---------- SKILLS ----------

const Skills = () => (
  <Section id="skills" title="Skills & Tools">
    <div className="grid md:grid-cols-2 gap-6">
      {Object.entries(skills).map(([cat, items]) => (
        <Card key={cat}>
          <h3 className="font-semibold mb-2">{cat}</h3>
          <div className="flex flex-wrap">
            {items.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </Card>
      ))}

      <Card>
        <h3 className="font-semibold mb-2">Interests</h3>
        <p className="text-sm opacity-90">
          Renewable-energy complementarity • controls • mechatronics • design for manufacturability • HPC for environmental modeling.
        </p>
      </Card>

      <Card>
        <h3 className="font-semibold mb-2">What I’m Learning Next</h3>
        <ul className="list-disc pl-5 text-sm opacity-90 space-y-1">
          <li>Advanced SolidWorks surfacing & design tables</li>
          <li>MATLAB/Simulink control design</li>
          <li>CFD basics for rotating machinery</li>
        </ul>
      </Card>
    </div>
  </Section>
);

// ---------- EXPERIENCE ----------

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-4">
      {[
        {
          role: "Research Intern — Monsoon Lab (IIT Bombay)",
          time: "Summer–Fall 2025",
          bullets: [
            "Ran 4-domain WRF simulations; automated post-processing with xarray and wrf-python.",
            "Computed wind energy metrics at 100 m; built lead/lag analyses vs rainfall.",
            "Used SLURM on HPC; profiled jobs and optimized IO.",
          ],
        },
        {
          role: "Student Teams — IRS / EMS / MakerWorks",
          time: "Ongoing",
          bullets: [
            "Drivetrain & manufacturing tasks; CAD→CAM; tolerancing; fast iteration.",
            "Electromechanical prototyping; documentation, testing, iteration.",
          ],
        },
      ].map((e) => (
        <Card key={e.role}>
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <span className="text-sm opacity-70">{e.time}</span>
          </div>

          <ul className="mt-3 list-disc pl-5 text-sm opacity-90 space-y-1">
            {e.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

// ---------- WRITING ----------

const Writing = () => (
  <Section id="writing" title="Writing & Notes">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h3 className="font-semibold">Crank Arm: Fatigue Life Study</h3>
        <p className="text-sm opacity-90 mt-2">
          15–18 page analysis of cyclic fatigue, S-N vs ε-N models, and design tradeoffs.
        </p>
        <a href="#" className="text-sm underline underline-offset-4 mt-3 inline-block">
          Read summary
        </a>
      </Card>

      <Card>
        <h3 className="font-semibold">WRF Post-Processing Cookbook</h3>
        <p className="text-sm opacity-90 mt-2">
          A reference for extracting wind & rainfall at (19.11°N, 72.85°E), computing hub-height wind, and generating lead/lag maps.
        </p>
        <a href="#" className="text-sm underline underline-offset-4 mt-3 inline-block">
          Read notes
        </a>
      </Card>
    </div>
  </Section>
);

// ---------- FOOTER ----------

const Footer = () => (
  <footer className="border-t py-10">
    <div className="max-w-6xl mx-auto px-5 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
      <span>© {new Date().getFullYear()} Kavish Mistry</span>
      <div className="flex gap-4">
        <a href="#" className="underline underline-offset-4">GitHub</a>
        <a href="#" className="underline underline-offset-4">LinkedIn</a>
        <a href="mailto:kavish@example.com" className="underline underline-offset-4">Email</a>
      </div>
    </div>
  </footer>
);

// ---------- MAIN APP ----------

export default function App() {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen text-zinc-900 dark:text-zinc-100 bg-zinc-50 dark:bg-zinc-950">

        <Nav />

        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Writing />

          <Section id="resume" title="Résumé">
            <Card>
              <p className="text-sm opacity-90">
                Drop a PDF in <code>public/</code> and link it here. Example:
                <a className="underline ml-1" href="/Kavish_Mistry_Resume.pdf">
                  /Kavish_Mistry_Resume.pdf
                </a>
              </p>
            </Card>
          </Section>

          <Section id="contact" title="Contact">
            <Card>
              <p className="text-sm opacity-90">
                Email: kavish@example.com • Open to research and internship opportunities in robotics,
                manufacturing, and climate-energy modeling.
              </p>
            </Card>
          </Section>
        </main>

        <Footer />

        <button
          onClick={toggle}
          className="fixed bottom-5 right-5 rounded-full px-4 py-2 border shadow bg-white/70 dark:bg-zinc-900/70 backdrop-blur"
          aria-label="Toggle theme"
        >
          Toggle {theme === "light" ? "Dark" : "Light"}
        </button>

      </div>
    </div>
  );
}

