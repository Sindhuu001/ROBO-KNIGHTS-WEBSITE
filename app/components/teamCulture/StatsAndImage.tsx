"use client";

import { FC } from "react";
import Image from "next/image";
import StatsPanel from "./StatsPanel";

interface StatsAndImageProps {
  imageUrl?: string;
}

/**
 * StatsAndImage - Right column with team metrics and team photo
 */
const StatsAndImage: FC<StatsAndImageProps> = ({
  imageUrl = "/images/team-workshop.png",
}) => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold text-(--text-heading) mb-6">
          By The Numbers
        </h3>
        <div className="w-full max-w-md">
          <StatsPanel />
        </div>

        <div className="relative w-full max-w-md h-56 sm:h-72 mt-6 rounded-lg overflow-hidden border border-gray-700">
          <Image
            src={imageUrl}
            alt="Team workshop and collaboration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default StatsAndImage;
