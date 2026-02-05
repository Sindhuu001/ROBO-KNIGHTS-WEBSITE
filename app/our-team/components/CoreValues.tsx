"use client";

import { FC } from "react";
import Image from "next/image";

const VALUES = [
  {
    title: "Innovation",
    text: "We embrace new ideas and push the boundaries of what’s possible in robotics.",
    icon: "/icons/core-values/innovation_ (1).svg",
  },
  {
    title: "Collaboration",
    text: "Teamwork makes the dream work. We support each other every step of the way.",
    icon: "/icons/core-values/collaboration.svg",
  },
  {
    title: "Excellence",
    text: "We strive for the highest standards in design, engineering, and execution.",
    icon: "/icons/core-values/excellence.svg",
  },
  {
    title: "Community",
    text: "We give back to our community and inspire others to pursue STEM.",
    icon: "/icons/core-values/community.svg",
  },
];

const CoreValues: FC = () => {
  return (
    <section className="py-16 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span
              aria-hidden
              className="inline-block w-1 h-8 bg-[var(--text-accent)] rounded"
            />
            <h2 className="text-3xl font-bold text-[var(--text-heading)]">
              Our Core Values
            </h2>
          </div>
          <p className="text-[var(--text-base)] mt-2 ml-4">
            Principles that guide our work and community engagement.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, index) => (
            <div
              key={v.title}
              className="group relative p-6 rounded-lg border border-black/30 bg-black/40 backdrop-blur-sm hover:border-[var(--text-accent)]/30 transition-all duration-300 ease-out animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 h-1 bg-[var(--text-accent)] rounded-t-lg w-0 group-hover:w-full transition-all duration-300" />

              {/* Icon (SVG) */}
              <div className="mb-4 w-12 h-12 relative transform group-hover:scale-110 transition-transform duration-300">
                <Image
                  src={encodeURI(v.icon)}
                  alt={`${v.title} icon`}
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-[var(--text-heading)] mb-3 group-hover:text-[var(--text-accent)] transition-colors duration-300">
                {v.title}
              </h3>

              {/* Text */}
              <p className="text-sm leading-relaxed text-[var(--text-base)]">
                {v.text}
              </p>
            </div>
          ))}
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
          animation: fadeUp 0.5s ease-out both;
        }
      `}</style>
    </section>
  );
};

export default CoreValues;
