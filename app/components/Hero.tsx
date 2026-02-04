"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll inside hero
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Animate content moving up + fading
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <>
      {/* STICKY HERO WRAPPER */}
      <section ref={ref} className="relative h-[200vh] -mt-30">
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* BACKGROUND IMAGE */}
          <Image
            src="/images/hero-background.png"
            alt="Robo-Knights 9330 Team"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 18%" }}
          />

          {/* DARK OVERLAY (fades slightly) */}
          <motion.div
            className="absolute inset-0 bg-black"
            style={{
              opacity: useTransform(scrollYProgress, [0, 1], [0.4, 0.1]),
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 flex items-center justify-center h-full px-4 mt-16">
            <motion.div
              className="max-w-2xl text-center rounded-lg px-5 py-6"
              style={{
                y,
                opacity,
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                backdropFilter: "blur(3px)",
              }}
            >
              {/* BADGE */}
              <div className="inline-block mb-4 px-3 py-1 text-[11px] tracking-widest uppercase border border-yellow-400 text-yellow-400">
                 ROBOTICS · TEAM 9330
              </div>

              {/* TITLE */}
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white leading-snug">
                ROBOTS LEAD,
                <br />
                <span className="text-yellow-400">KNIGHTS INSPIRE</span>
              </h1>

              {/* TAGLINE */}
              <p className="mt-3 text-sm sm:text-lg text-gray-200">
                Innovate. Lead. Inspire the Future.
              </p>

              {/* DESCRIPTION */}
              <p className="mt-4 text-sm sm:text-base text-gray-300">
                Robo-Knights empowers students to become confident STEM leaders
                through innovation, mentorship, and{" "}
                <span className="text-yellow-400">
                  Gracious Professionalism®
                </span>
                .
              </p>

              {/* BUTTONS */}
              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/join-us"
                  className="px-6 py-2.5 text-sm font-bold tracking-widest bg-yellow-400 text-black hover:scale-105 transition"
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
        </div>
      </section>

      {/* NEXT PAGE CONTENT */}
    </>
  );
}
