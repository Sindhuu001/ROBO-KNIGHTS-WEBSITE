"use client";

import Image from "next/image";

/* ==============================
   Data
================================ */
const awardsData = [
  {
    year: "2025",
    title: "DECODE Season",
    highlight:
      "Focused on strategic problem-solving and engineering documentation, earning recognition for thoughtful design and analysis.",
    awards: ["Think Award – Orlando Robotics League Tournament"],
    image: "/images/our-team/hero.jpg",
  },
  {
    year: "2023",
    title: "CENTERSTAGE Season",
    highlight:
      "Strong all-around performance with consistent robot control, design excellence, and alliance leadership.",
    awards: [
      "Compass Award – 2nd Place",
      "Control Award – 3rd Place",
      "Design Award – 3rd Place",
      "Finalist Alliance – Captain (Orlando Robotics League Tournament)",
    ],
    image: "/images/our-team/Proud moment.jpg",
  },
  {
    year: "2022",
    title: "POWERPLAY Season",
    highlight:
      "Breakout season marked by innovation, competitive dominance, and top-tier alliance play.",
    awards: [
      "Innovate Award (Raytheon Technologies)",
      "Inspire Award – 2nd Place",
      "Winning Alliance – Captain (Orlando Robotics League Tournament)",
    ],
    image: "/images/our-team/Stem Celebrations.jpg",
  },
  {
    year: "2021",
    title: "FREIGHT FRENZY Season",
    highlight:
      "Demonstrated versatility and resilience, advancing to the Florida Championship as alliance captain.",
    awards: [
      "Compass Award – FL Tesla League Tournament",
      "Control Award (Arm, Inc.) – 3rd Place",
      "Design Award",
      "Finalist Alliance – Captain – Florida Championship (Scott Division)",
    ],
    image: "/images/robots/robo-fleet-1.png",
  },
  {
    year: "2020",
    title: "ULTIMATE GOAL Season",
    highlight:
      "Adapted successfully to a remote competition format while excelling in robot performance and outreach.",
    awards: [
      "Innovate Award (Collins Aerospace) – 2nd Place",
      "Control Award (Arm, Inc.) – 3rd Place",
      "Design Award",
      "Motivate Award – 3rd Place",
      "Promote Award",
      "Top Ranked – 3rd Place (FL FTC Tesla League Tournament – Remote)",
    ],
    image: "/images/robots/robo-fleet-5.jpg",
  },
];

export default function Awards() {
  return (
    <section className="relative px-4 py-20 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-accent) 1px, transparent 1px), linear-gradient(90deg, var(--text-accent) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative text-center mb-24">
        <div className="inline-block relative">
          <h1 className="text-5xl md:text-7xl font-black text-[var(--text-heading)] relative z-10 glitch-text">
            AWARDS & ACHIEVEMENTS
          </h1>

          <span
            aria-hidden
            className="text-5xl md:text-7xl font-black absolute top-0 left-0 w-full opacity-70 glitch-layer-1"
          >
            AWARDS & ACHIEVEMENTS
          </span>

          <span
            aria-hidden
            className="text-5xl md:text-7xl font-black absolute top-0 left-0 w-full opacity-70 glitch-layer-2"
          >
            AWARDS & ACHIEVEMENTS
          </span>
        </div>

        <div className="mt-8 max-w-3xl mx-auto relative">
          <div className="absolute -left-4 top-0 w-1 h-full bg-[var(--text-accent)]" />
          <p className="text-lg md:text-xl text-[var(--text-subheading)] pl-8 leading-relaxed">
            Five years of competitive robotics. From innovation breakthroughs to
            championship victories, documenting our journey of technical mastery
            and strategic excellence.
          </p>
        </div>
      </div>

      {/* Seasons */}
      <div className="space-y-32 relative">
        {awardsData.map((season, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={season.year}
              className="relative awards-season-card"
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Grid Container */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                {/* Content */}
                <div
                  className={`flex flex-col justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-6">
                    {/* Year Badge - Inline with Title */}
                    <div className="flex items-start gap-4 flex-wrap">
                      <div
                        className="year-badge-inline flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, var(--text-accent)22, var(--text-accent)44)`,
                          border: `2px solid var(--text-accent)`,
                        }}
                      >
                        <span className="text-2xl md:text-3xl font-black text-[var(--text-accent)]">
                          {season.year}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--text-heading)] mb-3 title-hover">
                          {season.title}
                        </h3>
                        <div
                          className="h-1 w-24 rounded-full"
                          style={{
                            background: `linear-gradient(90deg, var(--text-accent) 0%, transparent 100%)`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Highlight */}
                    <div
                      className="relative p-6 rounded-lg highlight-box"
                      style={{
                        background: `linear-gradient(135deg, var(--text-accent)11 0%, transparent 100%)`,
                        borderLeft: `3px solid var(--text-accent)`,
                      }}
                    >
                      <div className="absolute top-2 left-2 text-6xl font-black opacity-5 pointer-events-none">
                        "
                      </div>
                      <p className="text-[var(--text-subheading)] leading-relaxed italic relative z-10">
                        {season.highlight}
                      </p>
                    </div>

                    {/* Awards */}
                    <div className="space-y-3">
                      {season.awards.map((award, i) => (
                        <div
                          key={i}
                          className="award-item group flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-[var(--bg-secondary)]"
                          style={{
                            animationDelay: `${(index * 0.15) + (i * 0.1)}s`,
                          }}
                        >
                          <div
                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"
                            style={{
                              background: "var(--text-accent)",
                              boxShadow: `0 0 10px var(--text-accent)88`,
                            }}
                          />
                          <span className="text-[var(--text-base)] leading-relaxed group-hover:text-[var(--text-heading)] transition-colors duration-300">
                            {award}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Award Count */}
                    <div className="flex items-center gap-3 pt-4">
                      <div
                        className="px-4 py-2 rounded-full font-bold text-sm"
                        style={{
                          background: `var(--text-accent)22`,
                          color: "var(--text-accent)",
                          border: `1px solid var(--text-accent)44`,
                        }}
                      >
                        {season.awards.length} AWARD
                        {season.awards.length > 1 ? "S" : ""}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative group ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] image-container">
                    <Image
                      src={season.image}
                      alt={`${season.year} ${season.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0 opacity-60 mix-blend-multiply"
                      style={{
                        background: `linear-gradient(135deg, var(--text-accent)44 0%, transparent 50%, var(--bg-primary) 100%)`,
                      }}
                    />

                    {/* Scanlines */}
                    <div className="absolute inset-0 opacity-20 scanlines pointer-events-none" />

                    {/* Corner Brackets */}
                    <div
                      className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 corner-bracket"
                      style={{ borderColor: "var(--text-accent)" }}
                    />
                    <div
                      className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 corner-bracket"
                      style={{ borderColor: "var(--text-accent)" }}
                    />
                    <div
                      className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 corner-bracket"
                      style={{ borderColor: "var(--text-accent)" }}
                    />
                    <div
                      className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 corner-bracket"
                      style={{ borderColor: "var(--text-accent)" }}
                    />
                  </div>
                </div>
              </div>

              {/* Timeline Connector */}
              {index < awardsData.length - 1 && (
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--text-accent)] to-transparent opacity-30" />
              )}
            </div>
          );
        })}
      </div>

      {/* Stats Summary */}
      <div className="mt-32 pt-20 border-t border-[var(--text-accent)]/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Seasons Competed", value: "5" },
            { label: "Total Awards", value: "24" },
            { label: "Alliance Captain", value: "4x" },
            { label: "Championships", value: "1" },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center stat-card p-6 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: `linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)`,
                border: "1px solid rgba(255, 254, 0, 0.1)",
              }}
            >
              <div className="text-5xl md:text-6xl font-black text-[var(--text-accent)] mb-2 counter-animation">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[var(--text-subheading)] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        .glitch-text {
          animation: glitch-anim 3s infinite;
        }

        .glitch-layer-1 {
          color: var(--text-accent);
          animation: glitch-anim-1 3s infinite;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }

        .glitch-layer-2 {
          color: var(--text-accent);
          animation: glitch-anim-2 3s infinite;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
          opacity: 0.5;
        }

        @keyframes glitch-anim {
          0%,
          90%,
          100% {
            transform: translate(0);
          }
          92% {
            transform: translate(-2px, 2px);
          }
          94% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-anim-1 {
          0%,
          90%,
          100% {
            transform: translate(0);
          }
          92% {
            transform: translate(2px, -2px);
          }
        }

        @keyframes glitch-anim-2 {
          0%,
          90%,
          100% {
            transform: translate(0);
          }
          94% {
            transform: translate(-2px, 2px);
          }
        }

        .awards-season-card {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .year-badge-inline {
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          backdrop-filter: blur(10px);
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .scanlines {
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          animation: scan 8s linear infinite;
        }

        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        .corner-bracket {
          transition: all 0.3s ease;
        }

        .image-container:hover .corner-bracket {
          width: 60px;
          height: 60px;
        }

        .title-hover {
          transition: all 0.3s ease;
        }

        .title-hover:hover {
          transform: translateX(8px);
        }

        .award-item {
          animation: slideInLeft 0.5s ease-out forwards;
          opacity: 0;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .stat-card:hover {
          box-shadow: 0 0 30px rgba(255, 254, 0, 0.2);
        }

        .counter-animation {
          animation: countPulse 2s ease-in-out infinite;
        }

        @keyframes countPulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .highlight-box {
          position: relative;
          overflow: hidden;
        }

        .highlight-box::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 254, 0, 0.05),
            transparent
          );
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }
      `}</style>
    </section>
  );
}