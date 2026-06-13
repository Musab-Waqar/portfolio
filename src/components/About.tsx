export default function About() {
  return (
    <section id="about" data-testid="about-section" style={{ padding: "4rem 3rem", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(100,120,150,0.25)" }}>

      <div className="section-header" data-ref="MW-2026-02 // ARCHITECTURE">
        <span className="section-num-badge">02</span>
        <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 600, textTransform: "uppercase", color: "rgba(39,26,0,0.85)", letterSpacing: "-0.01em" }}>About Me</h2>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", letterSpacing: "1px", marginLeft: "auto" }}>System Architecture</span>
        <span className="section-ref">MW-2026-02</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>

        <div>
          <div className="spec-sheet">
            <div className="spec-title-bar">
              <span>WHO I AM</span>
              <span>SHEET 2/5</span>
            </div>
            <div className="spec-body">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(100,120,150,0.85)", lineHeight: 1.8, marginBottom: "1rem" }}>
                I am deeply interested in <strong style={{ color: "rgba(39,26,0,0.85)" }}>backend systems</strong>, <strong style={{ color: "rgba(39,26,0,0.85)" }}>distributed data pipelines</strong>, and <strong style={{ color: "rgba(39,26,0,0.85)" }}>formal logic</strong>. I enjoy working on things where the real complexity is hidden under the surface.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(100,120,150,0.85)", lineHeight: 1.8, marginBottom: "1rem" }}>
                I have built a live flood warning system used in KPK, a fake screenshot detector using ELA and Vision Transformers, a C++ compiler reaching the semantic analysis stage, and several big data pipelines using Hadoop and Spark.
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(100,120,150,0.85)", lineHeight: 1.8 }}>
                I am also Co-Founder and CTO of NanoCoders, an early stage AI and software startup based in Peshawar.
              </p>

              <div className="dim-line" style={{ margin: "1rem 0 0.5rem" }}>HOW I THINK ABOUT SYSTEMS</div>

              <div style={{ display: "flex", flexDirection: "column", gap: 4, fontFamily: "'Fira Code', monospace", fontSize: 10 }}>
                {[
                  { label: "Interface Layer",     sub: "REST, Chrome MV3, React",     color: "#C0392B",  bg: "rgba(192,57,43,0.06)",  border: "rgba(192,57,43,0.25)" },
                  { label: "Logic and AI Layer",  sub: "Python, TypeScript, Node.js", color: "#2c5f8a",  bg: "rgba(44,95,138,0.05)",  border: "rgba(44,95,138,0.25)" },
                  { label: "Data Layer",          sub: "SQL, NoSQL, Kafka, Supabase", color: "#b8860b",  bg: "rgba(184,134,11,0.05)", border: "rgba(184,134,11,0.25)" },
                  { label: "Compute Layer",       sub: "Hadoop, Spark, PySpark",      color: "#27ae60",  bg: "rgba(39,174,96,0.05)",  border: "rgba(39,174,96,0.25)" },
                ].map(row => (
                  <div
                    key={row.label}
                    style={{ background: row.bg, border: `1px solid ${row.border}`, borderRadius: 2, padding: "6px 10px", display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ color: row.color }}>► {row.label}</span>
                    <span style={{ color: "rgba(100,120,150,0.6)" }}>{row.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="spec-sheet" style={{ marginTop: "1rem" }}>
            <div className="spec-title-bar">
              <span>MY STARTUP EXPERIENCE</span>
              <span>2024 TO NOW</span>
            </div>
            <div className="spec-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 8 }}>
                <div>
                  <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, fontWeight: 600, color: "rgba(39,26,0,0.85)" }}>NanoCoders</div>
                  <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "#C0392B", letterSpacing: "1px" }}>nanocoders.pk · Peshawar, Pakistan</div>
                </div>
                <span className="eng-tag green">Active</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(100,120,150,0.85)", lineHeight: 1.7 }}>
                I co-founded NanoCoders with Muhammad Ziyam Khan. As CTO, I lead all technical decisions, product architecture, and engineering work across the company. Our focus is AI and software products.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="spec-sheet">
            <div className="spec-title-bar">
              <span>MY DETAILS</span>
              <span>ONLINE</span>
            </div>
            <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                { k: "Name",        v: "Musab Waqar" },
                { k: "University",  v: "FAST NUCES, Peshawar" },
                { k: "Degree",      v: "BS Computer Science" },
                { k: "Semester",    v: "6th, Spring 2026" },
                { k: "CGPA",        v: "3.11 / 4.00" },
                { k: "Graduating",  v: "June 2027" },
                { k: "Email",       v: "musabwaqar07@gmail.com" },
                { k: "GitHub",    v: "github.com/Musab-Waqar" },
                { k: "LinkedIn",  v: "linkedin.com/in/musab-waqar" },
                { k: "Location",    v: "Peshawar, KPK, Pakistan" },
                { k: "Looking For", v: "AI, Backend, Research, MS programs" },
              ].map((row, i) => (
                <div
                  key={row.k}
                  style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 8, borderBottom: i < 9 ? "1px dashed rgba(100,120,150,0.18)" : "none", padding: "6px 0" }}
                >
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{row.k}</span>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(39,26,0,0.8)", fontWeight: 500, wordBreak: "break-all" }}>{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="spec-sheet">
            <div className="spec-title-bar">
              <span>WHAT I RESEARCH</span>
            </div>
            <div style={{ padding: "0.75rem 1rem", display: "flex", flexWrap: "wrap", gap: 4 }}>
              {[
                { t: "Three-Way Decision Theory", c: "red" },
                { t: "Big Data Pipelines",         c: "blue" },
                { t: "Computer Vision",            c: "blue" },
                { t: "Image Forensics",            c: "blue" },
                { t: "Compiler Theory",            c: "gold" },
                { t: "Knowledge Graphs",           c: "gold" },
                { t: "NLP for Urdu and Pashto",   c: "" },
              ].map(r => (
                <span key={r.t} className={`eng-tag ${r.c}`}>{r.t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
