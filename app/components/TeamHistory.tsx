import Image from "next/image";

export default function TeamHistory() {
  return (
    <section
      id="history"
      className="relative w-full py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/FTC-Team1.jpeg"
          alt="Robo-Knights Team History"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,10,10,0.80), rgba(10,10,10,0.65))",
        }}
      />

      {/* Subtle Grid Overlay (like old site) */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,0,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,0,0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Section Tag */}
        <span
          className="inline-block mb-4 px-4 py-1 text-sm tracking-widest uppercase border"
          style={{
            color: "var(--text-accent)",
            borderColor: "var(--text-accent)",
          }}
        >
          Our Journey
        </span>

        {/* Title */}
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Team History
        </h2>

        {/* Description */}
        <p
          className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto"
          style={{ color: "var(--text-base)" }}
        >
          Founded in 2015, FTC Team 9930 Robo-Knights has built a
          <span style={{ color: "var(--text-accent)" }}>
            {" "}
            10-season legacy
          </span>
          , competing in over 30 official FTC events. Through continuous
          discovery and iteration, our team has expanded its engineering,
          programming, and problem-solving skills while fostering curiosity and
          a lifelong love of learning.
        </p>

        <p
          className="text-base sm:text-lg leading-relaxed mt-4 max-w-3xl mx-auto"
          style={{ color: "var(--text-base)" }}
        >
          Each season presents new challenges that push us to grow both
          technically and personally—strengthening resilience, adaptability,
          and teamwork at every stage of our journey.
        </p>
      </div>
    </section>
  );
}
