const semesters = [
  {
    period: "Fall 2023",
    label: "1st Semester",
    highlights: ["Programming Fundamentals", "Calculus and Analytical Geometry", "Applied Physics"],
    type: "start",
    note: "This was my first semester at FAST NUCES Peshawar. I was getting used to university pace and learning the basics of programming.",
  },
  {
    period: "Spring 2024",
    label: "2nd Semester",
    highlights: ["Object Oriented Programming", "Digital Logic Design", "Multivariable Calculus"],
    type: "growth",
    note: "I got serious about Digital Logic Design here. Learning about circuits and gates made me interested in how computers work at the hardware level. OOP changed how I think about structuring code.",
  },
  {
    period: "Fall 2024",
    label: "3rd Semester",
    highlights: ["Discrete Structures", "Data Structures", "Computer Organization and Assembly Language"],
    type: "growth",
    note: "Discrete Structures was a turning point for me. Assembly language showed me what really happens under every abstraction. Data structures started feeling natural after this semester.",
  },
  {
    period: "Spring 2025",
    label: "4th Semester",
    highlights: ["Database Systems (MySQL, Oracle)", "Operating Systems", "Design and Analysis of Algorithms", "Probability and Statistics"],
    type: "growth",
    note: "I went deep on databases this semester, learning relational theory and SQL optimization. Algorithm complexity became something I think about every time I write code now.",
  },
  {
    period: "Fall 2025",
    label: "5th Semester",
    highlights: ["Theory of Automata", "Digital Image Processing", "Computer Networks"],
    type: "peak",
    note: "Two of the most rewarding courses I have taken. Theory of Automata gave me a real understanding of what computation is. In Digital Image Processing I learned filters, edge detection, Harris corners and CNN training by actually implementing them.",
  },
  {
    period: "Spring 2026",
    label: "6th Semester — Current",
    highlights: [
      "Artificial Intelligence",
      "Compiler Construction",
      "Big Data Analytics (Hadoop, Spark, Kafka)",
      "Computer Architecture",
      "Software Engineering",
    ],
    type: "current",
    note: "Right now I am building a compiler, studying AI search algorithms and working through big data pipelines with Hadoop, Spark and Kafka. I am also co-founding NanoCoders on the side.",
  },
  {
    period: "Summer 2026",
    label: "Summer Build Season",
    highlights: ["Chess Engine", "Neural Network from Scratch", "Automata Visualizer"],
    type: "upcoming",
    note: "I plan to build three projects that directly apply what I have learned. No frameworks where I can avoid them. I want to understand everything at the level of implementation.",
  },
  {
    period: "2026 to 2027",
    label: "7th and 8th Semester",
    highlights: ["Senior Projects", "MS Applications", "Research"],
    type: "future",
    note: "I am planning to apply for MS programs in AI, Theoretical CS or Programming Languages Theory. I am open to research collaborations.",
  },
];

const TYPE_STYLE: Record<string, { dot: string; }> = {
  start:    { dot: "background:rgba(39,26,0,0.2)" },
  growth:   { dot: "background:rgba(39,26,0,0.5)" },
  peak:     { dot: "background:#C0392B" },
  current:  { dot: "background:#C0392B" },
  upcoming: { dot: "border:2px solid #2c5f8a;background:transparent" },
  future:   { dot: "border:2px solid rgba(39,26,0,0.2);background:transparent" },
};

export default function Timeline() {
  return (
    <section id="timeline" data-testid="timeline-section" style={{ padding: "4rem 3rem", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(100,120,150,0.25)" }}>

      <div className="section-header">
        <span className="section-num-badge">05</span>
        <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 600, textTransform: "uppercase", color: "rgba(39,26,0,0.85)" }}>My Journey</h2>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", marginLeft: "auto", letterSpacing: "1px" }}>Semester by Semester</span>
        <span className="section-ref">MW-2026-05</span>
      </div>

      <div style={{ maxWidth: 760 }}>
        {semesters.map((sem, i) => {
          const style = TYPE_STYLE[sem.type];
          const isCurrent = sem.type === "current";
          return (
            <div
              key={i}
              data-testid={`timeline-event-${i}`}
              style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1.5rem" }}
            >
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", flexShrink: 0, marginTop: 6, ...(isCurrent ? { animation: "blink 2s ease-in-out infinite" } : {}), [style.dot.startsWith("border") ? "border" : "background"]: style.dot.split(":")[1]?.trim() }}
                  dangerouslySetInnerHTML={{ __html: "" }}
                  ref={el => { if (el) el.setAttribute("style", `width:12px;height:12px;border-radius:50%;flex-shrink:0;margin-top:6px;${style.dot}${isCurrent ? ";animation:blink 2s ease-in-out infinite" : ""}`); }}
                />
                {i < semesters.length - 1 && <div style={{ width: 1, flex: 1, background: "rgba(100,120,150,0.2)", marginTop: 4, minHeight: 24 }} />}
              </div>

              <div style={{ paddingBottom: 32 }}>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 2 }}>{sem.period}</div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 14, fontWeight: 600, color: isCurrent ? "#C0392B" : "rgba(39,26,0,0.85)", marginBottom: 8 }}>
                  {sem.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 8 }}>
                  {sem.highlights.map(h => (
                    <span key={h} className="eng-tag">{h}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(100,120,150,0.75)", lineHeight: 1.7 }}>{sem.note}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
