import Image from "next/image";

export default function TeamHistory() {
  return (
    <section
      id="history"
      className="relative w-full py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,254,0,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(255,254,0,0.45) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.35,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* CORE-STYLE HEADING */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--text-accent)" }}
            />
            <h2
              className="text-4xl sm:text-5xl font-extrabold"
              style={{ color: "var(--text-heading)" }}
            >
              Team History
            </h2>
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "var(--text-accent)" }}
            />
          </div>

          <div
            className="w-32 h-[3px] mx-auto mt-4"
            style={{ backgroundColor: "var(--text-accent)" }}
          />
        </div>

        {/* IMAGE + CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          {/* LEFT: ROBOT IMAGE (LESS SPACE) */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative w-[220px] sm:w-[260px] md:w-[300px] aspect-square">
              <Image
                src="/images/Robot_FTC-9930.png"
                alt="FTC Team 9930 Robot"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT: CONTENT (MORE SPACE) */}
          <div className="md:col-span-3">
            <h3
              className="text-3xl sm:text-4xl font-bold mb-6"
              style={{ color: "var(--text-heading)" }}
            >
              A Legacy of Growth & Discovery
            </h3>

            <p
              className="text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-base)" }}
            >
              Founded in 2015, FTC Team 9930 Robo-Knights has built a
              <span style={{ color: "var(--text-accent)" }}>
                {" "}
                10-season legacy
              </span>
              , competing in over 30 official FTC events. Through continuous
              discovery and iteration, our team has expanded its engineering,
              programming, and problem-solving skills while fostering curiosity
              and a lifelong love of learning.
            </p>

            <p
              className="text-base sm:text-lg leading-relaxed mt-6"
              style={{ color: "var(--text-base)" }}
            >
              Each season presents new challenges that push us to grow both
              technically and personally-strengthening resilience, adaptability,
              and teamwork that define who we are as Robo-Knights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
