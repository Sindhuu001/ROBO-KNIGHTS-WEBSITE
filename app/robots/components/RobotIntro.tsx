"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RobotIntro() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            Welcome to Our <br />
            <span className="text-yellow-400">Robot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-yellow-400 text-sm sm:text-base font-semibold"
          >
            Built by students · Powered by curiosity · FTC Team 9930
          </motion.p>

          <div className="mt-6 w-12 h-0.5 bg-yellow-400" />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-6 text-gray-300 text-sm sm:text-lg leading-relaxed max-w-xl"
          >
            This page is all about the robots we design, build, test, and improve
            as a team. From early sketches to competition-ready machines, our
            robots represent teamwork, creativity, and a lot of learning along
            the way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-400 text-sm sm:text-base max-w-xl"
          >
            Every bolt, line of code, and redesign tells a story — and this is
            where we share ours.
          </motion.p>
        </div>

        
        {/* ================= RIGHT IMAGE (Diagonal Split) ================= */}
<motion.div
  whileHover={{
    rotateX: 5,
    rotateY: -5,
    scale: 1.03,
  }}
  transition={{ type: "spring", stiffness: 120, damping: 12 }}
  style={{
    transformStyle: "preserve-3d",
    clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0% 100%)",
  }}
  className="
    relative
    w-full
    h-[420px]
    sm:h-[500px]
    overflow-hidden
    border-l border-white/10
  "
>
  {/* Image */}
  <Image
    src="/images/robot-intro.png"
    alt="Robo-Knights robot workshop"
    fill
    priority
    className="object-cover"
  />

  {/* Caption Overlay */}
  <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
    <p className="text-xs sm:text-sm text-gray-200 tracking-wide">
      Workshop · Build Season
    </p>
  </div>
</motion.div>

      </div>
    </section>
  );
}
