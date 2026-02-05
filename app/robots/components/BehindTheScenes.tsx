"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const scenes = [
  {
    title: "Teaching & Mentoring",
    img: "/images/robots/robo-fleet-2.jpg",
    desc: "Guiding younger students through robotics fundamentals, programming, and teamwork.",
  },
  {
    title: "STEM Collaboration",
    img: "/images/robots/robo-fleet-3.jpg",
    desc: "Working alongside mentors, engineers, and educators to build innovative solutions.",
  },
  {
    title: "Community Outreach",
    img: "/images/robots/robo-fleet-4.jpg",
    desc: "Sharing robotics knowledge and inspiring curiosity through public engagement events.",
  },
  {
    title: "Live Demonstration",
    img: "/images/robots/robo-fleet-5.jpg",
    desc: "Showcasing robot capabilities during competitions, exhibitions, and STEM showcases.",
  },
];

export default function BehindScenesNew() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== TITLE ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Behind the Scenes</h2>
          <p className="text-gray-400 mt-4">
            Discover how our team learns, collaborates, and inspires through robotics.
          </p>
        </div>

        {/* ===== GRID LAYOUT ===== */}
        <div className="grid lg:grid-cols-3 gap-6">

          {/* ===== LARGE FEATURE CARD ===== */}
          <motion.div
            whileHover={{ y: -6 }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-white/10 group"
          >
            <Image
              src={scenes[0].img}
              alt={scenes[0].title}
              width={900}
              height={600}
              className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-2xl font-semibold">{scenes[0].title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{scenes[0].desc}</p>
            </div>
          </motion.div>

          {/* ===== SIDE STACKED CARDS ===== */}
          <div className="space-y-6">
            {scenes.slice(1, 3).map((scene) => (
              <motion.div
                key={scene.title}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl overflow-hidden border border-white/10 group"
              >
                <Image
                  src={scene.img}
                  alt={scene.title}
                  width={500}
                  height={400}
                  className="w-full h-[150px] object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-semibold">{scene.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ===== BOTTOM WIDE CARDS ===== */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {scenes.slice(3).map((scene) => (
            <motion.div
              key={scene.title}
              whileHover={{ y: -6 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 group"
            >
              <Image
                src={scene.img}
                alt={scene.title}
                width={800}
                height={500}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <h3 className="text-xl font-semibold">{scene.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">{scene.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
