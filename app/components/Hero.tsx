"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[110px]">

      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/hero-background.png"
        alt="Robo-Knights 9330 Team"
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "center 18%" }}
      />

      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/30" />

      {/* CONTENT WRAPPER */}
      <div
        className="relative z-10 flex items-center justify-center px-4"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
        {/* CONTENT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl text-center rounded-lg px-5 py-6"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backdropFilter: "blur(3px)",
          }}
        >
          {/* BADGE */}
          <div className="inline-block mb-4 px-3 py-1 text-[11px] tracking-widest uppercase border border-yellow-400 text-yellow-400">
            FIRST ROBOTICS · TEAM 9330
          </div>

          {/* MAIN TITLE */}
          <h1 className="text-2xl sm:text-4xl font-extrabold leading-snug text-white">
            ROBOTS LEAD,
            <br />
            <span className="text-yellow-400">KNIGHTS INSPIRE</span>
          </h1>

          {/* TAGLINE */}
          <p className="mt-3 text-sm sm:text-lg font-medium text-gray-200">
            Innovate. Lead. Inspire the Future.
          </p>

          {/* DESCRIPTION */}
          <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">
            Robo-Knights empowers students to become confident STEM leaders by
            combining innovation, mentorship, and{" "}
            <span className="text-yellow-400">
              Gracious Professionalism®
            </span>{" "}
            to create meaningful impact within our team and our community.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/join-us"
              className="px-6 py-2.5 text-sm font-bold tracking-widest transition hover:scale-105"
              style={{ backgroundColor: "#fffe00", color: "#000" }}
            >
              JOIN THE TEAM
            </Link>

            <Link
              href="/robot"
              className="px-6 py-2.5 text-sm font-bold tracking-widest border border-white text-white hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              SEE OUR ROBOT
            </Link>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ACCENT */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-yellow-400/40" />
    </section>
  );
}
