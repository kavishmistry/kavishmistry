import React, { useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="scroll-mt-24 max-w-5xl mx-auto px-4 py-16 lg:py-20"
  >
    <h2 className="text-3xl font-semibold tracking-tight mb-6">{title}</h2>
    {children}
  </section>
);

const Tag = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-600 px-3 py-1 text-xs font-medium">
    {children}
  </span>
);

const Card = ({ children }) => (
  <div className="rounded-2xl border border-slate-200/70 dark:border-slate-700/70 p-5 md:p-6 shadow-sm bg-white/70 dark:bg-slate-900/70 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    {children}
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={darkMode ? "dark scroll-smooth" : "scroll-smooth"}>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* NAVBAR */}
        <header className="sticky top-0 z-30 border-b border-slate-200/70 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/80 backdrop-blur">
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
            <button
              onClick={() => scrollToSection("top")}
              className="font-semibold tracking-tight text-sm md:text-base hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              Kavish <span className="text-sky-600 dark:text-sky-400">Mistry</span>
            </button>

            <div className="hidden md:flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}

              {/* Dark mode toggle */}
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="ml-4 inline-flex items-center rounded-full border border-slate-300 dark:border-slate-600 px-3 py-1.5 text-xs font-medium hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "☾ Dark" : "☀ Light"}
              </button>
            </div>

            {/* Mobile toggle only */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="md:hidden inline-flex items-center rounded-full border border-slate-300 dark:border-slate-600 px-3 py-1 text-xs font-medium hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 transition-all"
            >
              {darkMode ? "☾" : "☀"}
            </button>
          </nav>
        </header>

        <main id="top">
          {/* HERO */}
          <section className="max-w-5xl mx-auto px-4 pt-12 pb-8 lg:pt-20 lg:pb-12">
            <div className="grid gap-10 md:grid-cols-[2fr,1.2fr] items-center">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
                  Mechanical Engineering @ UIUC
                </p>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  I design, simulate, and{" "}
                  <span className="text-sky-600 dark:text-sky-400">
                    build engineering systems.
                  </span>
                </h1>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 max-w-xl">
                  I&apos;m a Mechanical Engineering student at the University of
                  Illinois Urbana–Champaign (GPA 3.74), combining{" "}
                  <span className="font-medium">simulation, data analysis</span> and{" "}
                  <span className="font-medium">hands-on mechanical design</span>.
                  My experience spans WRF-based climate research, robotics, and
                  manufacturing-focused projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Tag>WRF &amp; climate modelling</Tag>
                  <Tag>Mechanical design</Tag>
                  <Tag>Python &amp; MATLAB</Tag>
                  <Tag>Thermal / fluids</Tag>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center rounded-full bg-sky-600 dark:bg-sky-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-sky-500 dark:hover:bg-sky-400 transition-colors"
                  >
                    View projects
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="inline-flex items-center rounded-full border border-slate-300 dark:border-slate-600 px-5 py-2.5 text-sm font-medium hover:border-sky-500 dark:hover:border-sky-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                  >
                    Get in touch
                  </button>
                </div>
              </div>

              {/* Sidebar summary */}
              <div className="space-y-4">
                <Card>
                  <h3 className="text-sm font-semibold mb-2">Snapshot</h3>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <li>
                      🎓 B.S. Mechanical Engineering,{" "}
                      <span className="font-medium">
                        University of Illinois Urbana–Champaign
                      </span>{" "}
                      (2024–2028)
                    </li>
                    <li>📍 Based in USA · originally from Mumbai, India</li>
                    <li>
                      🌧️ Research Intern at IIT Bombay, analysing extreme rainfall &
                      renewable energy
                    </li>
                    <li>🚀 Involved in robotics and space settlement design</li>
                  </ul>
                </Card>
                <Card>
                  <h3 className="text-sm font-semibold mb-2">Currently</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    Working on WRF-based climate and renewable energy research at
                    IIT Bombay, developing mechanical and data-driven intuition for
                    extreme weather, while building experience in robotics, CAD, and
                    design for manufacturing.
                  </p>
                </Card>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <Section id="about" title="About">
            <div className="space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-200">
              <p>
                I&apos;m Kavish, a Mechanical Engineering student interested in how{" "}
                <span className="font-medium">mechanical systems</span> behave in the
                real world—under load, under uncertainty, and under extreme
                environmental conditions. I enjoy connecting{" "}
                <span className="font-medium">first-principles physics</span> with{" "}
                <span className="font-medium">computational tools</span> like WRF,
                Python, and MATLAB.
              </p>
              <p>
                My recent work as a Research Intern at{" "}
                <span className="font-medium">IIT Bombay</span> focuses on the impact
                of extreme rainfall on renewable energy generation using ERA5
                reanalysis data, xarray, and WRF modelling on HPC clusters.
              </p>
              <p>
                Outside of research, I&apos;ve worked with combustion engines at a
                bike workshop, contributed to an international space settlement
                competition, and helped design rover drivetrain components for a
                Lunabotics team.
              </p>
            </div>
          </Section>

          {/* EXPERIENCE */}
          <Section id="experience" title="Experience">
            <div className="grid gap-4 md:gap-5">
              {/* IIT Bombay */}
              <Card>
                <div className="flex justify-between gap-2 mb-1">
                  <h3 className="text-sm md:text-base font-semibold">
                    Research Intern · Indian Institute of Technology Bombay
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    June 2025 – Present · Mumbai, India
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Extreme rainfall &amp; renewable energy · Python · xarray · WRF · HPC
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5">
                  <li>
                    • Analysed the impact of extreme rainfall on renewable energy
                    generation using ERA5 reanalysis datasets.
                  </li>
                  <li>
                    • Processed and visualised NetCDF climate data with Python,
                    focusing on wind speed patterns during monsoon events.
                  </li>
                  <li>
                    • Processed 35+ years of ERA5 NetCDF datasets using xarray and
                    wrf-python and executed parallel WRF simulations on HPC clusters
                    with SLURM.
                  </li>
                  <li>
                    • Applied analytical modelling to study wind loading and mechanical
                    performance under extreme weather.
                  </li>
                </ul>
              </Card>

              {/* Zero2One */}
              <Card>
                <div className="flex justify-between gap-2 mb-1">
                  <h3 className="text-sm md:text-base font-semibold">
                    Fall Cohort Member · Zero2One
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Sept 2024 – Dec 2024 · Urbana, IL
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Startup models · Investment strategy · Presentation skills
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5">
                  <li>
                    • Analysed startup business models and investment strategies as part
                    of a 10-week cohort.
                  </li>
                  <li>
                    • Developed presentation, evaluation, and discussion skills through
                    peer-led sessions.
                  </li>
                </ul>
              </Card>

              {/* Biker's Pad */}
              <Card>
                <div className="flex justify-between gap-2 mb-1">
                  <h3 className="text-sm md:text-base font-semibold">
                    Trainee · Biker&apos;s Pad
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    July 2023 · Mumbai, India
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Drivetrain &amp; engine mechanics · Hands-on diagnostics
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5">
                  <li>
                    • Collaborated with engineers to repair and analyse bike engines,
                    including drive chains, fuel, and exhaust systems.
                  </li>
                  <li>
                    • Assisted in diagnosing inefficiencies using mechanical disassembly
                    and component inspection.
                  </li>
                  <li>
                    • Gained exposure to drivetrain mechanics, combustion performance,
                    fuel–air optimisation, and gear ratio selection.
                  </li>
                </ul>
              </Card>

              {/* ENSO */}
              <Card>
                <div className="flex justify-between gap-2 mb-1">
                  <h3 className="text-sm md:text-base font-semibold">
                    Intern · ENSO Wealth Tech
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    May 2022 – June 2022 · Mumbai, India
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Front-end layouts · Market research · Product design
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5">
                  <li>
                    • Developed front-end layouts with HTML/CSS to support product
                    development.
                  </li>
                  <li>
                    • Conducted market research and contributed to marketing efforts to
                    streamline product design decisions.
                  </li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* PROJECTS & ACTIVITIES */}
          <Section id="projects" title="Projects & Activities">
            <div className="grid gap-5 md:grid-cols-2">
              {/* Space Settlement */}
              <Card>
                <h3 className="text-sm md:text-base font-semibold mb-1">
                  Space Settlement Design Competition · Team Ignite
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Interim Head – Operations · Dec 2022 – Apr 2024
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-200 mb-3">
                  Member and Interim Head of Operations for Team Ignite in the
                  International Space Settlement Design Competition, simulating the
                  operations of an aerospace company to design a space settlement for
                  future human habitation.
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5 mb-3">
                  <li>
                    • Contributed to jigs, fixtures, energy production, docking
                    mechanisms, fire prevention, and internal transport design.
                  </li>
                  <li>
                    • Integrated structural design, life support, automation, power
                    generation, and human factors into a unified proposal.
                  </li>
                  <li>
                    • Collaborated under tight deadlines to deliver and present a
                    detailed proposal to industry professionals.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 text-[0.7rem]">
                  <Tag>Systems thinking</Tag>
                  <Tag>Operations</Tag>
                  <Tag>Team leadership</Tag>
                </div>
              </Card>

              {/* Lunabotics */}
              <Card>
                <h3 className="text-sm md:text-base font-semibold mb-1">
                  Illinois Robotics In Space (Lunabotics)
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">
                  Mechanical Member – Drivetrain · Sept 2025 – Present
                </p>
                <p className="text-xs text-slate-700 dark:text-slate-200 mb-3">
                  Mechanical team member focusing on rover drivetrain design and
                  mechanical integration for a Lunabotics-style rover project.
                </p>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5 mb-3">
                  <li>
                    • Designed and developed mechanical components to support rover
                    mobility and load-bearing requirements.
                  </li>
                  <li>
                    • Created and refined CAD models to support fabrication and
                    assembly workflows.
                  </li>
                  <li>
                    • Collaborated in design reviews and integration with other
                    subsystems.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 text-[0.7rem]">
                  <Tag>Drivetrain</Tag>
                  <Tag>CAD</Tag>
                  <Tag>Robotics</Tag>
                </div>
              </Card>
            </div>
          </Section>

          {/* SKILLS */}
          <Section id="skills" title="Skills & Coursework">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <h3 className="text-sm font-semibold mb-3">Technical Skills</h3>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5">
                  <li>
                    <span className="font-medium">CAD:</span> Fusion 360, SolidWorks
                    (in progress), basic PTC Creo (in progress), engineering drawings,
                    GD&amp;T.
                  </li>
                  <li>
                    <span className="font-medium">Mechanical Engineering:</span>{" "}
                    Mechanical design, prototyping &amp; assembly, tolerance/fit
                    analysis, manufacturing processes.
                  </li>
                  <li>
                    <span className="font-medium">Computation:</span> Python, MATLAB,
                    HPC (SLURM), WRF modelling, data analysis, NetCDF/xarray.
                  </li>
                  <li>
                    <span className="font-medium">Languages:</span> English, Hindi,
                    Gujarati.
                  </li>
                </ul>
              </Card>
              <Card>
                <h3 className="text-sm font-semibold mb-3">Relevant Coursework</h3>
                <ul className="text-xs text-slate-700 dark:text-slate-200 space-y-1.5">
                  <li>• CAD &amp; Design for Manufacturing</li>
                  <li>• Thermodynamics</li>
                  <li>• Statics &amp; Dynamics</li>
                  <li>• Solid Mechanics</li>
                  <li>• Differential Equations</li>
                  <li>• Linear Algebra</li>
                </ul>
              </Card>
            </div>
          </Section>

          {/* CONTACT */}
          <Section id="contact" title="Contact">
            <div className="max-w-xl space-y-4 text-sm md:text-base text-slate-700 dark:text-slate-200">
              <p>
                I&apos;m actively building my portfolio and preparing for{" "}
                <span className="font-medium">
                  future mechanical / hardware internships
                </span>{" "}
                in areas like thermal &amp; fluid systems, energy, simulation, and
                robotics.
              </p>
              <p>
                If you&apos;d like to chat about internships, projects, or research:
              </p>
              <ul className="space-y-1.5 text-sm">
                <li>
                  ✉️ Email:{" "}
                  <a
                    href="mailto:kavishm2@illinois.edu"
                    className="text-sky-500 dark:text-sky-400 hover:underline"
                  >
                    kavishm2@illinois.edu
                  </a>
                </li>
                <li>
                  💼 LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/kavishjmistry"
                    className="text-sky-500 dark:text-sky-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/kavishjmistry
                  </a>
                </li>
              </ul>
            </div>
          </Section>

          <footer className="border-t border-slate-200/70 dark:border-slate-800/80 mt-10">
            <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-500 dark:text-slate-400 flex justify-between">
              <span>© {new Date().getFullYear()} Kavish Mistry</span>
              <span>Built with React &amp; Tailwind CSS</span>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
