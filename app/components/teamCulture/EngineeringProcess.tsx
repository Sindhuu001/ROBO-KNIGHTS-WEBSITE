"use client";

import { FC } from "react";
import { PROCESS_STEPS } from "../constants";

/**
 * EngineeringProcess - Vertical timeline of the engineering design process
 */
const EngineeringProcess: FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-(--text-heading) mb-8">
        Our Engineering Process
      </h3>

      <div className="space-y-6 max-w-xl">
        {PROCESS_STEPS.map((s, i) => (
          <div key={s.step} className="flex items-start gap-6">
            {/* Step number + vertical connector */}
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full bg-(--text-accent) text-(--bg-primary) font-bold flex items-center justify-center">
                {s.step}
              </div>
              {i < PROCESS_STEPS.length - 1 && (
                <div
                  className="w-px h-full bg-linear-to-b from-(--text-accent) to-transparent mt-2"
                  style={{ height: "3.5rem" }}
                />
              )}
            </div>

            {/* Step content */}
            <div className="flex-1">
              <div className="p-4 rounded-md border border-gray-700 bg-(--bg-secondary)">
                <h4 className="font-semibold text-(--text-heading) mb-1">
                  {s.title}
                </h4>
                <p className="text-sm text-(--text-base)">
                  {s.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineeringProcess;
