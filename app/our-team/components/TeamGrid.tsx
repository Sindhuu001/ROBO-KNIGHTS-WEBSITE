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
    image: "/images/our-team/members/rohit.jpg",
    name: "Rohit Lingarker",
    role: "Team Captain & Lead Programmer",
    bio: "Leads software architecture and autonomous systems. Passionate about machine vision and control loops.",
    tags: ["Programming", "Control"],
  },
  {
    image: "/images/our-team/members/anna.jpg",
    name: "Anna Lee",
    role: "Mechanical Lead",
    bio: "Designs and oversees fabrication. Focused on robust mechanisms and rapid prototyping.",
    tags: ["CAD", "Fabrication"],
  },
  {
    image: "/images/our-team/members/jamal.jpg",
    name: "Jamal Carter",
    role: "Electrical Lead",
    bio: "Handles power systems and sensor integration. Prioritizes reliability and efficient layouts.",
    tags: ["Electronics", "Sensors"],
  },
  {
    image: "/images/our-team/members/maya.jpg",
    name: "Maya Patel",
    role: "Strategy & Drive Coach",
    bio: "Develops match strategy and leads driver practice sessions. Strong in systems thinking.",
    tags: ["Strategy", "Coaching"],
  },
  {
    image: "/images/our-team/members/carlos.jpg",
    name: "Carlos Ruiz",
    role: "Outreach Coordinator",
    bio: "Organizes workshops and community events to grow STEM engagement.",
    tags: ["Outreach", "Events"],
  },
  {
    image: "/images/our-team/members/lina.jpg",
    name: "Lina Zhao",
    role: "Build Specialist",
    bio: "Fabrication and assembly lead focused on repeatable processes and quality control.",
    tags: ["Build", "QA"],
  },
];

const TeamGrid: FC = () => {
  return (
    <section id="team" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[var(--text-heading)]">
            Team Members
          </h2>
          <p className="text-[var(--text-base)] mt-2">
            Meet the engineers behind ROBO-KNIGHTS.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MEMBERS.map((m) => (
            <TeamMemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGrid;
