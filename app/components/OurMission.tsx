export default function OurMission() {
  return (
    <section
      id="mission"
      className="relative w-full py-20 sm:py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* GRID BACKGROUND (FIXED VISIBILITY) */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,254,0,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,254,0,0.35) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          opacity: 0.25,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* LEFT SIDE – Motto with Yellow Glow */}
        <div className="md:col-span-1 relative pl-6">
          {/* Yellow Glow on Left */}
          <span
            className="absolute left-0 top-0 h-full w-4"
            style={{
              background:
                "linear-gradient(to right, rgba(255,254,0,0.45), transparent)",
            }}
          />

          {/* OUR MISSION BADGE */}
          <div
            className="inline-block px-8 py-4 mb-8 border-2 uppercase tracking-widest"
            style={{
              color: "var(--text-accent)",
              borderColor: "var(--text-accent)",
              fontSize: "1.2rem",
              letterSpacing: "0.3em",
            }}
          >
            Our Mission
          </div>

          {/* Creative Motto */}
          <h3
            className="text-4xl sm:text-5xl font-extrabold leading-tight"
            style={{ color: "var(--text-heading)" }}
          >
            Innovate,
            <br />
            <span style={{ color: "var(--text-accent)" }}>Lead,</span>
            <br />
            Inspire
          </h3>

          <p
            className="mt-4 text-base sm:text-lg"
            style={{ color: "var(--text-base)" }}
          >
            the Future.
          </p>
        </div>

        {/* RIGHT SIDE – Mission Content */}
        <div className="md:col-span-2">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            style={{ color: "var(--text-heading)" }}
          >
            ROBOTS LEAD, KNIGHTS INSPIRE
          </h2>

          <p
            className="text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-base)" }}
          >
            Robo-Knights empowers students to become confident STEM leaders by
            combining innovation, mentorship, and{" "}
            <span style={{ color: "var(--text-accent)" }}>
              Gracious Professionalism®
            </span>{" "}
            to create meaningful impact within our team and our community.
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed mt-6"
            style={{ color: "var(--text-base)" }}
          >
            This season represents a pivotal transition for Robo-Knights.{" "}
            <span style={{ color: "var(--text-heading)" }}>Ajinkya Pawar</span>,
            a former rookie from 2023, now serves as team captain-leading{" "}
            <span style={{ color: "var(--text-accent)" }}>14 new members</span>{" "}
            and exemplifying our commitment to inclusion, mentorship, and
            long-term sustainability.
          </p>

          <p
            className="text-base sm:text-lg leading-relaxed mt-4"
            style={{ color: "var(--text-base)" }}
          >
            By intentionally developing student leadership and sharing
            responsibility, every member is encouraged to grow, contribute, and
            succeed-both within the team and beyond competition.
          </p>
        </div>
      </div>
    </section>
  );
}
