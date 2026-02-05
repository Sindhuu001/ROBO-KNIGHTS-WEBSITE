"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] pt-[80px] w-full overflow-hidden bg-black">
      
      {/* BACKGROUND IMAGE */}
      <Image
        src="/images/Whole-Team.jpeg"
        alt="Robo-Knights 9930 Team"
        fill
        priority
        className="object-cover object-center"
        style={{ objectPosition: "center 20%" }}
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/20" />

      {/* GOLD RADIAL HIGHLIGHT */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(255,200,0,0.25),transparent_60%)]" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-start h-full pt-24 md:pt-2">
        <div className="max-w-6xl mx-auto px-6  w-full">

          {/* BADGE */}
          <div className="mb-4 inline-block border border-yellow-400 text-yellow-400 px-4 py-1 text-[11px] tracking-widest uppercase">
            Robotics · Team 9930
          </div>

          {/* TITLE */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] text-white max-w-3xl">
            Robots Lead.
            <br />
            <span className="text-yellow-400">Knights Inspire.</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-4 text-gray-300 text-base sm:text-lg max-w-xl">
            Empowering students to become confident STEM leaders through
            innovation, teamwork, and real-world engineering experience.
          </p>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/join-us"
              className="bg-yellow-400 text-black font-semibold px-6 py-3 hover:brightness-110 transition"
            >
              Join the Team
            </Link>

            <Link
              href="/robots"
              className="border border-white text-white px-6 py-3 hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              Explore Robots
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
