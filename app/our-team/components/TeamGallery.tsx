"use client";

import { FC } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/images/our-team/gallery/competition-1.jpg",
    caption: "Regional Finalists",
  },
  {
    src: "/images/our-team/gallery/workshop-1.jpg",
    caption: "Community Workshop",
  },
  {
    src: "/images/our-team/gallery/build-1.jpg",
    caption: "Design & Fabrication",
  },
  {
    src: "/images/our-team/gallery/outreach-1.jpg",
    caption: "School Outreach",
  },
];

const TeamGallery: FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-heading)]">
            Team Moments
          </h2>
          <p className="text-[var(--text-base)] mt-2">
            Celebrating achievements and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {IMAGES.map((img) => (
            <figure
              key={img.src}
              className="relative rounded-md overflow-hidden border border-gray-700"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
              <figcaption className="p-3 text-sm text-[var(--text-base)]">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGallery;
