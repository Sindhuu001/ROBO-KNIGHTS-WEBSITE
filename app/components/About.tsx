import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Subtle Grid Background (same as Mission) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,254,0,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,254,0,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.2,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* CENTERED TITLE */}
        <div className="text-center mb-10">
          <div
            className="inline-block px-8 py-4 border-2 uppercase tracking-widest"
            style={{
              color: "var(--text-accent)",
              borderColor: "var(--text-accent)",
              fontSize: "1.2rem",
              letterSpacing: "0.3em",
            }}
          >
            About Us
          </div>
        </div>

        {/* CONTENT + IMAGE */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">

          {/* LEFT: CONTENT (more space) */}
          <div className="md:col-span-3">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--text-heading)" }}
            >
              Robo-Knights (FTC Team 9930)
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
              className="text-base sm:text-lg leading-relaxed mt-6"
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

          {/* RIGHT: IMAGE */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-[200px] sm:w-[240px] md:w-[280px] aspect-square">
              <Image
                src="/images/RK_logo.jpg"
                alt="FTC Team 9930 Robo-Knights Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
