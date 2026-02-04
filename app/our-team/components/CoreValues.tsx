"use client";

import { FC } from "react";

const VALUES = [
  {
    title: "Innovation",
    text: "We embrace new ideas and push the boundaries of what’s possible in robotics.",
  },
  {
    title: "Collaboration",
    text: "Teamwork makes the dream work. We support each other every step of the way.",
  },
  {
    title: "Excellence",
    text: "We strive for the highest standards in design, engineering, and execution.",
  },
  {
    title: "Community",
    text: "We give back to our community and inspire others to pursue STEM.",
  },
];

const CoreValues: FC = () => {
  return (
    <section className="py-12 bg-[var(--bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-heading)]">
            Our Core Values
          </h2>
          <p className="text-[var(--text-base)] mt-2">
            Principles that guide our work and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="p-4 rounded-lg border border-gray-700 bg-[var(--bg-secondary)]"
            >
              <h4 className="font-semibold text-[var(--text-heading)] mb-2">
                {v.title}
              </h4>
              <p className="text-[var(--text-base)] text-sm">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
