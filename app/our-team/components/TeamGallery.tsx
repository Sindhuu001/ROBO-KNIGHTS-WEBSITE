"use client";

import { FC } from "react";
import Image from "next/image";

const IMAGES = [
  {
    src: "/images/our-team/Stem Celebrations.jpg",
    caption: "Stem Celebrations",
  },
  {
    src: "/images/our-team/Proud moment.jpg",
    caption: "Proud Moment",
  },
  {
    src: "/images/our-team/Collaborative Learning.jpg",
    caption: "Collaborative Learning",
  },
  {
    src: "/images/our-team/Celebrating Together.jpg",
    caption: "Celebrating Together",
  },
];

const TeamGallery: FC = () => {
  return (
    <section className="pb-12 pt-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span
              aria-hidden
              className="inline-block w-1 h-8 bg-[var(--text-accent)] rounded"
            />
            <h2 className="text-3xl font-bold text-[var(--text-heading)]">
              Team Gallery
            </h2>
          </div>
          <p className="text-[var(--text-base)] mt-2 ml-4">
              A glimpse into our journey—capturing the spirit, camaraderie, and
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
