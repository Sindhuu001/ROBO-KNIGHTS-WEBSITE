"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RobotShowcaseSection() {
  return (
    <section className="bg-black text-white py-14 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl sm:text-6xl font-bold mb-6">
          Current Competition Robot
        </h2>
        <p className="text-xl sm:text-xl font-semibold mb-10">
          ROBO-KNIGHTS Alpha - 2024-2025 Season
        </p>

        {/* ===== ROBOT IMAGE (WIDE CINEMATIC) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <Image
            src="/images/robots/Robo-Detail-Section.jpg" // replace
            alt="ROBO-KNIGHTS Alpha Robot"
            width={1400}
            height={800}
            className="w-full h-[600px] object-cover"
          />

          {/* subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </motion.div>

        {/* ===== TITLE + DESCRIPTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            Advanced Engineering
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            ROBO-KNIGHTS Alpha represents the culmination of extensive research,
            prototyping, and refinement. Our 6-axis arm system delivers
            exceptional precision and versatility for high-level FTC gameplay.
          </p>
        </motion.div>

        {/* ===== SPECS GRID (COMPLETELY DIFFERENT FROM SCREENSHOT) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <Spec title="Drive System" value="Mecanum Wheels + Odometry" />
          <Spec title="Arm Length" value="42 inches extended" />
          <Spec title="Gripper" value="Servo precision gripper" />
          <Spec title="Weight" value="48 lbs competition ready" />
          <Spec title="Programming" value="FTC SDK + custom libraries" />
          <Spec title="Season" value="2024–2025 Alpha Robot" />
        </motion.div>
      </div>
    </section>
  );
}

/* ===== SMALL CARD ===== */
function Spec({ title, value }: { title: string; value: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition">
      <p className="text-gray-400 text-sm mb-2">{title}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
