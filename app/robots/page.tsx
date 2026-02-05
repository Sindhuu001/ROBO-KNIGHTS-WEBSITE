import BehindTheScenes from "./components/BehindTheScenes";
import RobotDetailsSection from "./components/RobotDetailsSection";
import RobotFleetTimeline from "./components/RobotFleetTimeline";
import RobotIntro from "./components/RobotIntro";

export default function RobotsPage() {
  return (
    <main className="bg-black">
      <RobotIntro />
      <RobotDetailsSection />
      <RobotFleetTimeline /> 
      <BehindTheScenes /> 
    </main>
  );
}
