"use client";

import { FC } from "react";
import Image from "next/image";
import { PrincipleCardProps } from "./types";

/**
 * PrincipleCard - Card component for displaying core principles
 * Supports featured styling and split description (lead||support text)
 */
const PrincipleCard: FC<PrincipleCardProps> = ({
  index,
  title,
  description,
  icon,
  featured = false,
}) => {
  // Allow description split: "Lead line||Supporting sentence"
  const [lead, support] = description.split("||").map((s) => s && s.trim());

  return (
    <div className="relative h-full group">
      {/* Large faded index number behind content */}
      <div className="absolute -top-6 right-4 select-none pointer-events-none text-[5.5rem] sm:text-[6.5rem] lg:text-[8rem] font-extrabold text-[var(--text-heading)] opacity-[0.07] leading-none">
        {String(index).padStart(2, "0")}
      </div>

      <article
        className={`relative overflow-hidden h-full rounded-lg border border-gray-700 bg-[linear-gradient(145deg,var(--bg-secondary),var(--bg-primary))] transition-transform duration-200 ease-out transform hover:-translate-y-2 hover:scale-[1.01] ${
          featured
            ? "ring-4 ring-[var(--text-accent)] shadow-[0_10px_30px_rgba(255,254,0,0.12)]"
            : "hover:ring-4 hover:ring-[var(--text-accent)]"
        }`}
      >
        {/* Top image (full width) */}
        {icon ? (
          <div className="relative w-full h-40 sm:h-48 lg:h-56">
            <Image src={icon} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          </div>
        ) : null}

        <div className="p-6">
          {/* Title */}
          <h3 className="text-lg sm:text-xl font-semibold text-[var(--text-heading)] mb-2">
            {title}
          </h3>

          {/* Lead + Support for scannability */}
          {lead && (
            <p className="text-[var(--text-subheading)] font-semibold mb-1">
              {lead}
            </p>
          )}

          {support && (
            <p className="text-sm text-[var(--text-base)] leading-relaxed">
              {support}
            </p>
          )}

          {/* Subtle bottom accent */}
          <div className="mt-6">
            <div className="h-0.5 w-12 bg-[var(--text-accent)] rounded-full opacity-60" />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PrincipleCard;
