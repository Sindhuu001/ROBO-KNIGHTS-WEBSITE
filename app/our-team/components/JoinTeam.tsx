"use client";

import { FC } from "react";

const JoinTeam: FC = () => {
  return (
    <section id="join" className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-[var(--text-heading)] mb-4">
          Join ROBO-KNIGHTS
        </h2>
        <p className="text-[var(--text-base)] mb-6">
          We're recruiting students who are eager to learn and contribute. We
          welcome backgrounds in mechanical, software, electrical, and strategy
          roles.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="/apply"
            className="px-5 py-3 rounded-md bg-[var(--text-accent)] text-[var(--bg-primary)] font-semibold"
          >
            Apply Now
          </a>
          <a
            href="/contact"
            className="px-5 py-3 rounded-md border border-gray-600 text-[var(--text-heading)]"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
