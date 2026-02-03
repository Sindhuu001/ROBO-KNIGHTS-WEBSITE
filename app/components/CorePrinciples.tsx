"use client";

import { FC } from "react";
import PrincipleCard from "./PrincipleCard";
import { PRINCIPLES } from "./constants";

const CorePrinciples: FC = () => {
  return (
    <section className="w-full bg-[var(--bg-primary)] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-3 h-3 rounded-sm bg-[var(--text-accent)] rotate-45" />
            <h2 className="text-4xl sm:text-5xl font-bold text-[var(--text-heading)]">
              Core Principles
            </h2>
            <div className="w-3 h-3 rounded-sm bg-[var(--text-accent)] rotate-45" />
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="h-0.5 w-40 bg-gradient-to-r from-[var(--text-accent)] to-transparent mx-auto mb-4 rounded-full" />
            <p className="text-lg text-[var(--text-base)] max-w-2xl mx-auto">
              Our values guide every decision we make—from design and
              engineering to how we treat our teammates and competitors.
            </p>
          </div>
        </div>

        {/* Principles Grid: 3 cards top row, 2 cards bottom row (one wider) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
          {/* Cards 1-2: Regular */}
          {PRINCIPLES.slice(0, 2).map((principle) => (
            <div key={principle.index}>
              <PrincipleCard
                index={principle.index}
                title={principle.title}
                description={principle.description}
                icon={principle.icon}
                featured={false}
              />
            </div>
          ))}

          {/* Card 3: Innovation - Featured, spans 2 cols on desktop (pushed to row 2) */}
          <div className="lg:col-span-2 lg:row-start-2">
            <PrincipleCard
              index={PRINCIPLES[2].index}
              title={PRINCIPLES[2].title}
              description={PRINCIPLES[2].description}
              icon={PRINCIPLES[2].icon}
              featured={true}
            />
          </div>

          {/* Card 4: Collaboration - Regular, row 2 right */}
          <div className="lg:row-start-2">
            <PrincipleCard
              index={PRINCIPLES[3].index}
              title={PRINCIPLES[3].title}
              description={PRINCIPLES[3].description}
              icon={PRINCIPLES[3].icon}
              featured={false}
            />
          </div>

          {/* Card 5: Outreach - Row 3 */}
          <div>
            <PrincipleCard
              index={PRINCIPLES[4].index}
              title={PRINCIPLES[4].title}
              description={PRINCIPLES[4].description}
              icon={PRINCIPLES[4].icon}
              featured={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorePrinciples;
