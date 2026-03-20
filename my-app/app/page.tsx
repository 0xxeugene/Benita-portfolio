"use client";

import Image from "next/image";
import { useState } from "react";

const tools = [
  { label: "MySQL", icon: "🗄️" },
  { label: "Power BI", icon: "📊" },
  { label: "DAX", icon: "🔢" },
  { label: "SQL Views & CTEs", icon: "🔍" },
  { label: "Power Query", icon: "⚙️" },
  { label: "Excel", icon: "📋" },
  { label: "Data Modeling", icon: "🧩" },
  { label: "Dashboard Design", icon: "🎨" },
];

const projects = [
  {
    id: "cafe",
    tag: "SQL  ·  Power BI",
    title: "Taste of the World Café",
    subtitle: "Sales Analysis Dashboard",
    description:
      "An end-to-end data analytics project analyzing restaurant order data to uncover customer purchasing patterns and visualize key business metrics — revenue trends, category performance, and top-selling menu items.",
    overview:
      "The analysis was performed using SQL for data exploration and transformation, and Power BI for an interactive dashboard. The dataset consists of two tables: menu_items (item details, category, price) and order_details (order transactions). These were combined via INNER JOIN to enable revenue and popularity analysis.",
    highlights: [
      "Identified most & least ordered menu items",
      "Surfaced high-value orders driving revenue concentration",
      "Compared average pricing across menu categories",
      "Flagged large orders (12+ items) as group dining opportunities",
    ],
    tools: ["MySQL", "SQL Views & CTEs", "Power BI", "Excel"],
    iframeSrc:
      "https://app.powerbi.com/reportEmbed?reportId=d341061b-0fad-4f49-985d-b9272d6be39f&autoAuth=true&ctid=22724e8d-42f9-4460-8d24-668c54838954",
    iframeTitle: "Taste of the world cafe",
    image: "/taste.png",
  },
  {
    id: "spotify",
    tag: "Power BI  ·  DAX",
    title: "Spotify Listening Analytics",
    subtitle: "Personal Music Habits Dashboard",
    description:
      "An analysis of personal Spotify streaming data to uncover patterns in music listening habits. Raw JSON data was cleaned, transformed, and visualized in Power BI to generate insights about listening behavior over time.",
    overview:
      "The dataset was obtained from a personal Spotify account data export. Key preparation steps included combining multiple streaming history JSON files, converting milliseconds to minutes, enriching timestamps, and building a date table. Custom DAX measures were created to track listening streaks, totals, and averages.",
    highlights: [
      "Top 10 most played artists & top 5 tracks identified",
      "Monthly listening trends visualized over time",
      "Longest listening streak computed with DAX",
      "Custom tooltips displaying time in hours & minutes",
    ],
    tools: ["Power BI", "Power Query", "DAX", "JSON"],
    iframeSrc:
      "https://app.powerbi.com/reportEmbed?reportId=4e141267-5d23-4f46-b74d-e5a2ba63a0fa&autoAuth=true&ctid=22724e8d-42f9-4460-8d24-668c54838954",
    iframeTitle: "My Spotify Data",
    image: "/spotfiy.png",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [liveView, setLiveView] = useState<string | null>(null);

  const toggle = (id: string) =>
    setExpanded((prev) => (prev === id ? null : id));

  const toggleLive = (id: string) =>
    setLiveView((prev) => (prev === id ? null : id));

  return (
    <main
      className="min-h-screen bg-[#fdf8f5] text-[#3d2c2c]"
      style={{ fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif" }}
    >
      {/* ── NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#fdf8f5]/90 backdrop-blur-md border-b border-[#e8d5d5]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span
            className="text-xl tracking-wide text-[#3d2c2c]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Benita.
          </span>

          {/* Desktop Links */}
          <ul className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-[#8c6e6e]">
            {["about", "skills", "projects", "contact"].map((s) => (
              <li key={s}>
                <a
                  href={`#${s}`}
                  className="hover:text-[#c9a0a0] transition-colors duration-200"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-1"
          >
            <span
              className={`block h-px w-6 bg-[#8c6e6e] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#8c6e6e] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-[#8c6e6e] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#e8d5d5] bg-[#fdf8f5] px-6 pb-6 pt-4">
            <ul className="flex flex-col gap-5 text-xs tracking-[0.2em] uppercase text-[#8c6e6e]">
              {["about", "skills", "projects", "contact"].map((s) => (
                <li key={s}>
                  <a
                    href={`#${s}`}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-[#c9a0a0] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-24 right-8 md:right-24 w-48 h-48 md:w-72 md:h-72 rounded-full bg-[#f0dede] opacity-40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-4 md:left-20 w-32 h-32 md:w-56 md:h-56 rounded-full bg-[#e8d5d5] opacity-30 blur-2xl pointer-events-none" />

        <p className="text-xs tracking-[0.35em] uppercase text-[#c9a0a0] mb-5">
          Data Analyst
        </p>
        <h1
          className="text-4xl sm:text-6xl md:text-7xl text-center leading-tight mb-6 text-[#3d2c2c]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Turning Data
          <br className="hidden sm:block" /> into Stories
        </h1>
        <div className="w-16 h-px bg-[#c9a0a0] mb-6" />
        <p className="text-[#8c6e6e] text-center max-w-md leading-relaxed text-sm md:text-base">
          I explore datasets, ask the right questions, and build dashboards that
          make insights impossible to ignore.
        </p>
        <a
          href="#projects"
          className="mt-10 px-8 py-3 border border-[#c9a0a0] text-[#c9a0a0] text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#c9a0a0] hover:text-white transition-all duration-300"
        >
          View Projects
        </a>

        {/* Scroll hint */}
        <div className="absolute bottom-10 flex flex-col items-center gap-2 text-[#c9a0a0] animate-bounce">
          <span className="text-[10px] tracking-widest uppercase opacity-70">
            Scroll
          </span>
          <svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-70"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="22"
              rx="7"
              stroke="#c9a0a0"
              strokeWidth="1.5"
            />
            <rect x="7" y="5" width="2" height="5" rx="1" fill="#c9a0a0">
              <animate
                attributeName="y"
                values="5;11;5"
                dur="1.8s"
                repeatCount="indefinite"
                calcMode="ease-in-out"
              />
              <animate
                attributeName="opacity"
                values="1;0;1"
                dur="1.8s"
                repeatCount="indefinite"
                calcMode="ease-in-out"
              />
            </rect>
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#c9a0a0] mb-4">
              About
            </p>
            <h2
              className="text-3xl md:text-4xl leading-snug mb-6 text-[#3d2c2c]"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Data-driven,
              <br /> detail-obsessed.
            </h2>
            <div className="space-y-4 text-[#8c6e6e] leading-relaxed text-sm md:text-base">
              <p>
                I&apos;m a data analyst with a passion for transforming raw,
                unstructured data into clear, compelling narratives. My work
                sits at the intersection of analytical rigor and visual
                storytelling.
              </p>
              <p>
                From writing complex SQL queries to designing interactive Power
                BI dashboards, I bring a thoughtful, end-to-end approach to
                every project — always asking{" "}
                <em>what does the data actually mean?</em>
              </p>
              <p>
                I believe the best analysis doesn&apos;t just answer questions —
                it surfaces the ones businesses didn&apos;t know they had.
              </p>
            </div>
          </div>

          {/* Decorative card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl border border-[#e8d5d5]" />
              <div className="relative bg-[#f9f0ef] rounded-2xl p-8 space-y-5">
                {[
                  ["Focus", "Business & consumer analytics"],
                  ["Approach", "Question-first, data-second"],
                  ["Output", "Dashboards, reports & insights"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a0a0] mb-1">
                      {k}
                    </p>
                    <p className="text-sm text-[#3d2c2c]">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-20 md:py-28 px-6 bg-[#f9f0ef]">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a0a0] mb-4 text-center">
            Toolkit
          </p>
          <h2
            className="text-3xl md:text-4xl text-center mb-12 text-[#3d2c2c]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Skills & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {tools.map(({ label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-[#fdf8f5] rounded-xl py-6 px-4 border border-[#e8d5d5] hover:border-[#c9a0a0] hover:shadow-sm transition-all duration-200"
              >
                <span className="text-2xl">{icon}</span>
                <span className="text-xs text-center text-[#8c6e6e] tracking-wide">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a0a0] mb-4 text-center">
            Work
          </p>
          <h2
            className="text-3xl md:text-4xl text-center mb-16 text-[#3d2c2c]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Featured Projects
          </h2>

          <div className="space-y-20">
            {projects.map((p, i) => (
              <article
                key={p.id}
                className="grid md:grid-cols-2 gap-10 items-start"
              >
                {/* Text — alternate sides */}
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#c9a0a0] bg-[#f0dede] px-3 py-1 rounded-full">
                    {p.tag}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl mt-4 mb-1 text-[#3d2c2c]"
                    style={{ fontFamily: "var(--font-playfair), serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs tracking-wide text-[#c9a0a0] mb-4 uppercase">
                    {p.subtitle}
                  </p>
                  <p className="text-[#8c6e6e] text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>

                  {/* Key highlights */}
                  <ul className="space-y-2 mb-6">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-sm text-[#8c6e6e]"
                      >
                        <span className="mt-1 w-1 h-1 rounded-full bg-[#c9a0a0] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tool badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-wide uppercase text-[#8c6e6e] border border-[#e8d5d5] px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Expand toggle */}
                  <button
                    onClick={() => toggle(p.id)}
                    className="text-xs tracking-[0.15em] uppercase text-[#c9a0a0] underline underline-offset-4 hover:text-[#3d2c2c] transition-colors"
                  >
                    {expanded === p.id ? "Show less ↑" : "Project details ↓"}
                  </button>

                  {expanded === p.id && (
                    <p className="mt-4 text-sm text-[#8c6e6e] leading-relaxed bg-[#f9f0ef] rounded-xl p-5 border border-[#e8d5d5]">
                      {p.overview}
                    </p>
                  )}
                </div>

                {/* Project Visual */}
                <div
                  className={`flex flex-col gap-3 ${i % 2 === 1 ? "md:order-1" : ""}`}
                >
                  {/* Screenshot preview */}
                  <div className="rounded-2xl overflow-hidden border border-[#e8d5d5] shadow-sm">
                    <div
                      className="relative w-full"
                      style={{ paddingTop: "56.25%" }}
                    >
                      <Image
                        src={p.image}
                        alt={`${p.title} dashboard preview`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Live dashboard toggle */}
                  <button
                    onClick={() => toggleLive(p.id)}
                    className="self-start text-xs tracking-[0.15em] uppercase text-[#c9a0a0] border border-[#c9a0a0] px-4 py-2 rounded-full hover:bg-[#c9a0a0] hover:text-white transition-all duration-300"
                  >
                    {liveView === p.id
                      ? "Hide Dashboard ↑"
                      : "View Live Dashboard ↗"}
                  </button>

                  {/* Embedded iframe */}
                  {liveView === p.id && (
                    <div className="rounded-2xl overflow-hidden border border-[#e8d5d5] shadow-sm">
                      <div
                        className="relative w-full"
                        style={{ paddingTop: "56.25%" }}
                      >
                        <iframe
                          title={p.iframeTitle}
                          src={p.iframeSrc}
                          frameBorder={0}
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-[#f9f0ef]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a0a0] mb-4">
            Get in Touch
          </p>
          <h2
            className="text-3xl md:text-4xl mb-6 text-[#3d2c2c]"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Let&apos;s work together.
          </h2>
          <p className="text-[#8c6e6e] leading-relaxed text-sm md:text-base mb-10">
            Have a dataset that needs a story? A dashboard that needs building?
            I&apos;d love to hear about your project.
          </p>
          <a
            href="mailto:benita@example.com"
            className="inline-block px-10 py-4 bg-[#c9a0a0] text-white text-xs tracking-[0.2em] uppercase rounded-full hover:bg-[#b88a8a] transition-colors duration-300"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-[#e8d5d5] bg-[#fdf8f5]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#c9a0a0] tracking-wide">
          <span style={{ fontFamily: "var(--font-playfair), serif" }}>
            Benita.
          </span>
          <span>© {new Date().getFullYear()} · Data Analyst Portfolio</span>
          <span>Built with Next.js & Tailwind CSS</span>
        </div>
      </footer>
    </main>
  );
}
