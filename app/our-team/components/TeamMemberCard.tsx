"use client";

import { FC, useState } from "react";
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
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <article
      className="group relative bg-black/40 rounded-md border border-black/30 shadow-sm hover:shadow-2xl hover:border-[var(--text-accent)]/40 transition-all duration-300 animate-fade-up h-full cursor-pointer"
      style={{ perspective: "1000px", aspectRatio: "3/4" }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* 3D Flip Container */}
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT: Image Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-md overflow-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <div className="relative w-full h-full bg-black/20">
            <Image
              src={image}
              alt={name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-500"
              style={{
                transform: isFlipped ? "scale(1)" : "scale(1.05)",
              }}
              priority={false}
            />

            {/* Multi-layer gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Accent glow */}
            {/* <div
              className="absolute inset-0 transition-opacity duration-300"
              style={{
                opacity: isFlipped ? 0 : 0.05,
                backgroundColor: "var(--text-accent)",
              }}
            /> */}
          </div>
        </div>

        {/* BACK: Details Side */}
        <div
          className="absolute inset-0 w-full h-full rounded-md border border-black/30 p-5 flex flex-col justify-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(135deg, rgba(10, 10, 10, 0.95) 0%, rgba(38, 38, 38, 0.5) 100%)",
          }}
        >
          <div className="flex flex-col h-full justify-center">
            {/* Role Accent */}
            <div className="flex items-start gap-2 mb-4">
              <span
                aria-hidden
                className="inline-block w-0.5 h-7 bg-(--text-accent) rounded shrink-0"
              />
              <h3 className="text-sm font-semibold text-(--text-accent) leading-tight">
                {role}
              </h3>
            </div>

            {/* Name */}
            <div className="mb-4">
              <h4 className="text-lg font-bold text-(--text-heading) line-clamp-2 mb-3">
                {name}
              </h4>
              <p className="text-sm leading-relaxed text-(--text-base) line-clamp-3">
                {bio}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-sm bg-(--text-accent)/5 text-(--text-accent)/60 font-medium border border-[var(--text-accent)]/15"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
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
    </article>
  );
};

export default TeamMemberCard;
