import React from "react";
import TeamHero from "./components/TeamHero";
import VisionMission from "./components/VisionMission";
import TeamGrid from "./components/TeamGrid";
import TeamGallery from "./components/TeamGallery";
import CoreValues from "./components/CoreValues";
import JoinTeam from "./components/JoinTeam";

export const metadata = {
  title: "Our Team - ROBO-KNIGHTS",
};

export default function Page() {
  return (
    <main>
      <TeamHero />
      <VisionMission />
      <TeamGrid />
      <TeamGallery />
      <CoreValues />
      <JoinTeam />
    </main>
  );
}
