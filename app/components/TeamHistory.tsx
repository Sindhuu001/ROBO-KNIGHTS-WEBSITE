export default function TeamHistory() {
  return (
    <section
      id="history"
      className="w-full py-16 sm:py-20"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Section Title */}
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6"
          style={{ color: "var(--text-heading)" }}
        >
          Team History
        </h2>

        {/* Content */}
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-base)" }}
        >
          Founded in 2015, FTC Team 9930 Robo-Knights has built a
          <span style={{ color: "var(--text-accent)" }}> 10-season legacy</span>,
          competing in over 30 official FTC events. Through continuous discovery
          and iteration, our team has expanded its engineering, programming, and
          problem-solving skills while fostering curiosity and a lifelong love of
          learning.
        </p>

        <p
          className="text-base sm:text-lg leading-relaxed mt-4"
          style={{ color: "var(--text-base)" }}
        >
          Each season presents new challenges that push us to grow both
          technically and personally, reinforcing resilience, adaptability, and
          teamwork at every stage of our journey.
        </p>

      </div>
    </section>
  );
}
