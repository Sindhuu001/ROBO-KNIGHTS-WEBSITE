"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const robots = [
  {
    title: "ROBO-KNIGHTS Alpha",
    year: "2024–2025 Season",
    img: "/images/robots/Robo-Detail-Section.jpg",
    desc: "Our current competition robot featuring a 6-axis arm system, precision control, and advanced autonomous scoring capabilities built through months of design, testing, and teamwork.",
    features: ["6-Axis Arm Design", "Precision Gripper", "Advanced Odometry"],
  },
  {
    title: "ROBO-KNIGHTS Prototype",
    year: "Development",
    img: "/images/robots/robo-fleet-1.png",
    desc: "A next-generation experimental robot focused on rapid prototyping, subsystem innovation, and exploring new mechanical strategies for future competitions.",
    features: ["Experimental Arm", "Novel Intake System", "Modular Design"],
  },
  {
    title: "ROBO-KNIGHTS Beta",
    year: "2023–2024 Season",
    img: "/images/robots/robo-fleet-2.jpg",
    desc: "Our previous competition robot that marked a major improvement in drivetrain stability, scoring efficiency, and match consistency throughout the season.",
    features: ["Dual Motor Drive", "Arm Mechanism", "Intake System"],
  },
  {
    title: "ROBO-KNIGHTS Training Bot",
    year: "Educational",
    img: "/images/robots/robo-fleet-3.jpg",
    desc: "Designed to introduce new members to programming, electronics, and mechanical assembly while building confidence through hands-on learning.",
    features: ["Simple Drive System", "Programming Platform", "Learning Tool"],
  },
  {
    title: "ROBO-KNIGHTS Innovation Lab",
    year: "R&D",
    img: "/images/robots/robo-fleet-4.jpg",
    desc: "A dedicated research platform where new mechanisms, sensors, and control strategies are tested before reaching competition robots.",
    features: ["Experimental Systems", "Technology Testing", "Mechanism Development"],
  },
  {
    title: "ROBO-KNIGHTS Archive",
    year: "Historical",
    img: "/images/robots/robo-fleet-5.jpg",
    desc: "A collection of our past robots that represent the journey, learning, and technical growth of the Robo-Knights team across seasons.",
    features: ["Competition History", "Design Evolution", "Technical Progress"],
  },
];

export default function RobotFleetTimeline() {
  return (
    <section className="bg-black text-white py-2 px-2">
      <div className="max-w-5xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">Robot Fleet</h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Every robot we build reflects our passion for engineering,
            teamwork, and continuous improvement. From early training bots
            to advanced competition machines, each season pushes us further
            toward innovation and excellence in robotics.
          </p>

          {/* ===== STATS ===== */}
          <div className="flex justify-center gap-10 mt-8 text-sm">
            <div>
              <p className="text-yellow-400 text-2xl font-bold">6+</p>
              <p className="text-gray-500">Robots Built</p>
            </div>
            <div>
              <p className="text-yellow-400 text-2xl font-bold">3</p>
              <p className="text-gray-500">Competition Seasons</p>
            </div>
            <div>
              <p className="text-yellow-400 text-2xl font-bold">1000+</p>
              <p className="text-gray-500">Build Hours</p>
            </div>
          </div>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="relative">

          {/* center glow line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-yellow-400/70 via-yellow-400/20 to-transparent" />

          <div className="space-y-16">
            {robots.map((robot, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={robot.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="grid md:grid-cols-2 gap-8 items-center"
                >
                  {/* IMAGE */}
                  <div className={isLeft ? "md:order-1" : "md:order-2"}>
                    <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
                      <Image
                        src={robot.img}
                        alt={robot.title}
                        width={700}
                        height={420}
                        className="w-full h-[260px] object-cover"
                      />
                    </div>
                  </div>

                  {/* TEXT */}
                  <div className={isLeft ? "md:order-2" : "md:order-1"}>
                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {robot.title}
                    </h3>

                    <p className="text-yellow-400 text-sm mt-1">{robot.year}</p>

                    <p className="text-gray-300 mt-3 leading-relaxed text-sm sm:text-base">
                      {robot.desc}
                    </p>

                    {/* FEATURES */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {robot.features.map((f) => (
                        <span
                          key={f}
                          className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
}
