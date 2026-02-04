"use client";

import { FC } from "react";
import Image from "next/image";

const TeamHero: FC = () => {
  return (
    <header role="banner" className="relative w-full overflow-hidden -mt-30">
      <div className="relative h-[32rem] sm:h-[36rem] lg:h-[44rem]">
        <div className="absolute inset-0 flex flex-col-reverse lg:flex-row">
          {/* Content Pane - left on desktop, full width on mobile */}
          <div className="w-full lg:w-1/2 flex items-center justify-center bg-[var(--bg-primary)] px-6 py-12">
            <div className="max-w-xl text-left lg:text-left animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[var(--text-accent)]" />
                <span className="text-sm text-[var(--text-accent)] font-semibold uppercase tracking-widest">
                  ROBO-KNIGHTS
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--text-accent)]" />
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[var(--text-heading)] leading-snug mb-3">
                Meet Our Team
              </h1>

              <div className="mb-5">
                <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[var(--text-accent)] to-transparent rounded-full" />
              </div>

              <p className="text-base sm:text-lg text-[var(--text-base)] mb-6">
                Nine dedicated engineers united by curiosity, craftsmanship, and
                a drive to push the limits of competitive robotics.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#join"
                  className="inline-block px-5 py-3 rounded-lg bg-[var(--text-accent)] text-[var(--bg-primary)] font-bold shadow-lg shadow-[var(--text-accent)]/25 transform transition hover:-translate-y-1"
                >
                  Join Us
                </a>

                <a
                  href="#team"
                  className="inline-block px-5 py-3 rounded-lg border-2 border-[var(--text-accent)] text-[var(--text-accent)] font-bold hover:bg-[var(--text-accent)]/8 transform transition hover:-translate-y-1"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Image Pane - right on desktop, top on mobile */}
          <div className="w-full lg:w-1/2 relative h-56 lg:h-auto">
            {/* Clipped image to create diagonal split */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)",
              }}
            >
              <Image
                src="/images/our-team/hero.jpg"
                alt="Robo-Knights team hero"
                fill
                className="object-cover"
                priority
              />

              {/* Dark gradient to ensure contrast where clip meets content */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />

              {/* Radial accent glow */}
              <div
                className="absolute inset-0 opacity-25"
                style={{
                  background:
                    "radial-gradient(circle at 25% 45%, rgba(255,254,0,0.12) 0%, transparent 60%)",
                }}
              />

              {/* Thin diagonal accent stripe */}
              <div
                aria-hidden
                className="absolute top-0 left-0 h-full w-2 pointer-events-none"
                style={{
                  transform: "skewY(-18deg) translateX(-6px)",
                  background:
                    "linear-gradient(180deg, rgba(255,254,0,0.06), rgba(255,254,0,0.02))",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeInUp 0.75s ease-out;
        }

        /* Mobile: remove clip-path effect so image isn't awkwardly cropped on very small widths */
        @media (max-width: 1023px) {
          div[style*="clipPath"] {
            clip-path: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default TeamHero;
