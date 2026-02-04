import Hero from "./components/Hero";

import CorePrinciples from "./components/corePrinciples/CorePrinciples";
import TeamCulture from "./components/teamCulture/TeamCulture";
import About from "./components/About";
import TeamHistory from "./components/TeamHistory";
import OurMission from "./components/OurMission";

export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <Hero />
      <About />
      <TeamHistory />
      <OurMission />
      <CorePrinciples />
      <TeamCulture />
    </main>
  );
}
