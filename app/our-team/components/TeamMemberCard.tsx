"use client";

import { FC } from "react";
import Image from "next/image";

export interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  tags?: string[];
}

const TeamMemberCard: FC<TeamMemberProps> = ({
  image,
  name,
  role,
  bio,
  tags = [],
}) => {
  return (
    <article className="bg-[var(--bg-secondary)] rounded-lg border border-gray-700 overflow-hidden shadow-sm hover:shadow-lg transition">
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="p-4">
        <h4 className="text-lg font-semibold text-[var(--text-heading)]">
          {name}
        </h4>
        <div className="text-sm text-[var(--text-accent)] font-medium mb-2">
          {role}
        </div>
        <p className="text-sm text-[var(--text-base)] mb-3">{bio}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-xs bg-black/20 px-2 py-1 rounded-md text-[var(--text-base)]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;
