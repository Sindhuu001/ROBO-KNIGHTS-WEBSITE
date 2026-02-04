"use client";

import { FC } from "react";

const VisionMission: FC = () => {
  return (
    <section
      className="w-full py-12 bg-[var(--bg-secondary)]"
      aria-labelledby="vision-mission-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 id="vision-mission-heading" className="sr-only">
          Vision and Mission
        </h2>

        {/* Diagonal accent behind cards (desktop only) */}
        <div
          aria-hidden
          className="hidden lg:block absolute top-8 left-1/2 -translate-x-1/2 w-[72%] h-[calc(100%-4rem)] pointer-events-none"
          style={{
            clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
            background:
              "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.22) 30%, rgba(0,0,0,0.42) 70%, transparent 100%)",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <article className="p-6 sm:p-8 rounded-md bg-black/40 backdrop-blur-sm border border-black/30 shadow-sm animate-fade-up">
            <h3 className="flex items-center text-xl font-semibold text-[var(--text-heading)] mb-3">
              <span
                aria-hidden
                className="inline-block w-1 h-6 bg-[var(--text-accent)] rounded mr-3"
              />
              Our Mission
            </h3>

            <p className="text-[var(--text-base)]">
              We inspire innovation, teamwork, and leadership through hands-on
              robotics. By designing, programming, and competing with purpose,
              students develop real-world STEM skills—creativity,
              problem-solving, and resilience—while making measurable
              contributions to our community.
            </p>
          </article>

          <article className="p-6 sm:p-8 rounded-md bg-black/40 backdrop-blur-sm border border-black/30 shadow-sm animate-fade-up delay-100">
            <h3 className="flex items-center text-xl font-semibold text-[var(--text-heading)] mb-3">
              <span
                aria-hidden
                className="inline-block w-1 h-6 bg-[var(--text-accent)] rounded mr-3"
              />
              Our Vision
            </h3>

            <p className="text-[var(--text-base)]">
              We strive to grow as a team of future innovators who lead with
              curiosity, integrity, and a passion for technology. We create an
              inclusive environment where every member is empowered to learn,
              contribute, and push the boundaries of what’s possible in FTC.
            </p>
          </article>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fadeUp 0.6s ease-out both;
        }
        .delay-100 {
          animation-delay: 0.12s;
        }
      `}</style>
    </section>
  );
};

export default VisionMission;
