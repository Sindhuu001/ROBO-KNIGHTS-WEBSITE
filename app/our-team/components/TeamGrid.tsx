"use client";

import { FC } from "react";
import TeamMemberCard from "./TeamMemberCard";

interface Member {
  image: string;
  name: string;
  role: string;
  bio: string;
  tags?: string[];
}

const MEMBERS: Member[] = [
  {
    image: "/images/our-team/member_1.jpg",
    name: "Member 1",
    role: "Team Captain & Lead Programmer",
    bio: "Leads software architecture and autonomous systems. Passionate about machine vision and control loops.",
    tags: ["Programming", "Control"],
  },
  {
    image: "/images/our-team/member_2.jpg",
    name: "Member 2",
    role: "Mechanical Lead",
    bio: "Designs and oversees fabrication. Focused on robust mechanisms and rapid prototyping.",
    tags: ["CAD", "Fabrication"],
  },
  {
    image: "/images/our-team/member_3.jpg",
    name: "Member 3",
    role: "Electrical Lead",
    bio: "Handles power systems and sensor integration. Prioritizes reliability and efficient layouts.",
    tags: ["Electronics", "Sensors"],
  },
  {
    image: "/images/our-team/member_4.jpg",
    name: "Member 4",
    role: "Strategy & Drive Coach",
    bio: "Develops match strategy and leads driver practice sessions. Strong in systems thinking.",
    tags: ["Strategy", "Coaching"],
  },
  {
    image: "/images/our-team/member_5.jpg",
    name: "Member 5",
    role: "Outreach Coordinator",
    bio: "Organizes workshops and community events to grow STEM engagement.",
    tags: ["Outreach", "Events"],
  },
  {
    image: "/images/our-team/member_6.jpg",
    name: "Member 6",
    role: "Build Specialist",
    bio: "Fabrication and assembly lead focused on repeatable processes and quality control.",
    tags: ["Build", "QA"],
  },
  {
    image: "/images/our-team/member_7.jpg",
    name: "Member 7",
    role: "Software Engineer",
    bio: "Works on vision systems and real-time processing. Focused on clean, efficient code.",
    tags: ["Vision", "Python"],
  },
  {
    image: "/images/our-team/member_8.jpg",
    name: "Member 8",
    role: "Mechanical Engineer",
    bio: "Specializes in drivetrain design and structural optimization. Detail-oriented problem solver.",
    tags: ["Drivetrain", "Design"],
  },
  {
    image: "/images/our-team/member_9.jpg",
    name: "Member 9",
    role: "Operations & Logistics",
    bio: "Manages inventory, scheduling, and team coordination. Keeps everyone organized and on track.",
    tags: ["Logistics", "Leadership"],
  },
];

const TeamGrid: FC = () => {
  return (
    <section id="team" className="py-12 bg-[var(--bg-primary)]">
      <div className="max-w-full">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-2">
            <span
              aria-hidden
              className="inline-block w-1 h-8 bg-[var(--text-accent)] rounded"
            />
            <h2 className="text-3xl font-bold text-[var(--text-heading)]">
              Team Members
            </h2>
          </div>
          <p className="text-[var(--text-base)] mt-2 ml-4">
            Meet the engineers behind ROBO-KNIGHTS—scroll to discover each team
            member.
          </p>
        </div>

        {/* Horizontally Scrollable Container */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-5 px-4 sm:px-6 lg:px-8 pb-4 min-w-min">
            {MEMBERS.map((m, idx) => (
              <div
                key={m.name}
                className="flex-shrink-0 w-64 sm:w-72 md:w-80"
                style={{ animationDelay: `${idx * 0.06}s` }}
              >
                <TeamMemberCard {...m} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        div[style*="animationDelay"] {
          animation: fadeUp 0.6s ease-out both;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TeamGrid;
