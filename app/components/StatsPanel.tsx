"use client";

import { FC } from "react";
import { StatsItem } from "./types";

/**
 * StatsPanel - Displays team metrics and achievements
 *
 * Features:
 * - Grid layout for stats display
 * - Responsive columns (2-4 depending on screen size)
 * - Professional styling with accent underlines
 * - Prominent numbers with supporting labels
 */

const STATS: StatsItem[] = [
  {
    label: "Seasons",
    value: "10+",
  },
  {
    label: "Events",
    value: "30+",
  },
  {
    label: "Founded",
    value: "2015",
  },
  {
    label: "Team Members",
    value: "14+",
  },
];

const StatsPanel: FC = () => {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
      {STATS.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center py-6 px-4 rounded-lg border border-gray-700 bg-[var(--bg-secondary)] transition-all duration-300 ease-out hover:border-[var(--text-accent)]"
        >
          {/* Value */}
          <div className="text-3xl sm:text-3xl font-bold text-[var(--text-accent)] mb-2">
            {stat.value}
          </div>

          {/* Label */}
          <div className="text-xs sm:text-sm text-[var(--text-base)] text-center font-medium">
            {stat.label}
          </div>

          {/* Accent underline */}
          <div className="mt-3 h-0.5 w-8 bg-[var(--text-accent)] rounded-full opacity-50"></div>
        </div>
      ))}
    </div>
  );
};

export default StatsPanel;
