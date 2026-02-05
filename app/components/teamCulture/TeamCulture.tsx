"use client";

import { FC } from "react";
import EngineeringProcess from "./EngineeringProcess";
import CultureValues from "./CultureValues";
import StatsAndImage from "./StatsAndImage";
import { TeamCultureProps } from "../types";

/**
 * TeamCulture - Main section orchestrating culture, process, and stats
 * Delegates to focused sub-components
 */
const TeamCulture: FC<TeamCultureProps> = ({
  imageUrl = "/images/team-workshop.png",
  culture_title = "Our Approach & Team Culture",
  culture_description = "Robo-Knights actively applies the Engineering Design Process to drive innovation, guiding students through brainstorming, prototyping, testing, and iteration. Through strong teamwork and peer mentorship, we cultivate a collaborative environment where learning is shared and achievements are collective.",
}) => {
  return (
    <section className="w-full bg-(--bg-primary) py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-(--text-heading) mb-4">
            {culture_title}
          </h2>
          <p className="text-lg text-(--text-base) max-w-3xl">
            {culture_description}
          </p>
        </div>

        {/* Process + Stats (two-column) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          {/* Left Column: Engineering Process */}
          <div className="px-2 sm:px-6 lg:px-8">
            <EngineeringProcess />
          </div>

          {/* Right Column: Stats + Image */}
          <StatsAndImage imageUrl={imageUrl} />
        </div>

        {/* Culture Values - full width */}
        <CultureValues />

        {/* Bottom CTA */}
        <div className="border-t border-gray-700 pt-12 mt-12">
          <p className="text-center text-(--text-base) max-w-2xl mx-auto">
            {`Join us in building the future of robotics. Whether you're a student
            with big ideas, a mentor ready to guide, or a sponsor who shares our
            vision-we'd love to work with you.`}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamCulture;
