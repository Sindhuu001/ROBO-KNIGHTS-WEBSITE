import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 sm:py-20"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

        {/* Text Content */}
        <div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6"
            style={{ color: "var(--text-heading)" }}
          >
            About Us
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-base)" }}
          >
            Robo-Knights (FTC Team 9930) is a student-led robotics team
            participating in the{" "}
            <span style={{ color: "var(--text-accent)" }}>
              FIRST Tech Challenge (FTC)
            </span>
            , an international STEM program where teams design, build, and
            program robots to compete in dynamic, real-world engineering
            challenges.
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed mt-4"
            style={{ color: "var(--text-base)" }}
          >
            FTC emphasizes hands-on learning, teamwork, innovation, and{" "}
            <span style={{ color: "var(--text-accent)" }}>
              Gracious Professionalism®
            </span>
            , preparing students for future careers in science, technology,
            engineering, and mathematics.
          </p>
        </div>

        {/* Team Image */}
        <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] rounded-lg overflow-hidden">
          <Image
            src="/images/FTC-Team1.jpeg"
            alt="FTC Team 9930 Robo-Knights"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
