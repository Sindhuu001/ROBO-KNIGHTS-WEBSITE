"use client";

import { FC } from "react";
import { ProcessStepProps } from "./types";

/**
 * ProcessStep - Card component for displaying a step in the engineering process
 */
const ProcessStep: FC<ProcessStepProps> = ({ step, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Step number circle */}
      <div className="w-12 h-12 rounded-full bg-(--text-accent) text-(--bg-primary) font-bold flex items-center justify-center mb-4 shrink-0 text-lg">
        {step}
      </div>

      <div className="w-full p-5 rounded-lg border border-gray-700 bg-(--bg-secondary) text-center transition-all duration-300 ease-out hover:border-(--text-accent) hover:shadow-[0_0_15px_rgba(255,254,0,0.2)]">
        {/* Title */}
        <h4 className="font-bold text-(--text-heading) mb-2 text-sm sm:text-base">
          {title}
        </h4>

        {/* Description */}
        <p className="text-xs sm:text-sm text-(--text-base) leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProcessStep;
