"use client";

import { FC } from "react";

/**
 * CultureValues - Full-width culture description with highlighted phrases
 */
const CultureValues: FC = () => {
  return (
    <div className="mb-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-[var(--text-heading)] mb-4">
          Culture & Values
        </h3>

        <div className="space-y-4 text-[var(--text-base)] leading-relaxed">
          <p>
            <span className="font-semibold text-[var(--text-subheading)]">
              Robo-Knights actively applies the Engineering Design Process to
              drive innovation.
            </span>{" "}
            Guiding students through brainstorming, prototyping, testing, and
            iteration, we foster a hands-on engineering practice.
          </p>

          <p>
            <span className="font-semibold">
              Our team culture prioritizes Gracious Professionalism®.
            </span>{" "}
            We emphasize respect, encouragement, ethical behavior, and
            cooperation—both on and off the competition field. Learning is
            engaging and enjoyable; we prioritize having fun while working
            toward ambitious goals.
          </p>

          <p>
            Through outreach, mentorship, and technical excellence,{" "}
            <span className="text-[var(--text-accent)] font-semibold">
              Robo-Knights creates lasting impact
            </span>{" "}
            by inspiring future STEM leaders and strengthening our school and
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CultureValues;
