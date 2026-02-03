"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* 🧬 Animated HUD Grid */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,254,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,254,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ⚡ Glow vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,254,0,0.15),transparent_70%)]" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-5xl px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-1 text-xs tracking-[0.35em] uppercase border"
          style={{
            color: "#fffe00",
            borderColor: "rgba(255,254,0,0.4)",
          }}
        >
          FIRST ROBOTICS • TEAM 9330
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
        >
          ROBO-KNIGHTS <span className="text-[#fffe00]">9330</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto"
        >
          We design, build, and program competitive robots while inspiring
          innovation, teamwork, and leadership through hands-on STEM learning.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/join-us"
            className="px-8 py-3 font-bold tracking-widest text-black bg-[#fffe00] hover:scale-105 transition"
          >
            JOIN THE TEAM
          </Link>

          <Link
            href="/robot"
            className="px-8 py-3 font-bold tracking-widest text-white border border-white/30 hover:border-[#fffe00] hover:text-[#fffe00] transition"
          >
            SEE OUR ROBOT
          </Link>
        </motion.div>
      </div>

      {/* ⚡ Bottom HUD line */}
      <motion.div
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#fffe00] opacity-30"
      />
    </section>
  );
}
