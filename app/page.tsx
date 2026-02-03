import Image from "next/image";
import About from "./components/About";
import TeamHistory from "./components/TeamHistory";
import OurMission from "./components/OurMission";


export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <About />
      <TeamHistory />
      <OurMission />
    </main>
  );
}
