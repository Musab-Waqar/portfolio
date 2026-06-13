import { useState, useEffect } from "react";

const PHRASES = [
  "AI_ENGINEER.execute()",
  "BIG_DATA.pipeline(hadoop,spark)",
  "COMPILER.build(lexer_parser_ast)",
  "SYSTEMS.compile(future)",
  "CTO @ NanoCoders.run()",
];

function useTypewriter(phrases: string[], speed = 60, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = phrases[pi];
    let delay = del ? speed / 2 : speed;
    if (!del && ci === cur.length) delay = pause;
    const t = setTimeout(() => {
      if (!del && ci < cur.length) { setDisplay(cur.slice(0, ci + 1)); setCi(c => c + 1); }
      else if (!del && ci === cur.length) { setDel(true); }
      else if (del && ci > 0) { setDisplay(cur.slice(0, ci - 1)); setCi(c => c - 1); }
      else { setDel(false); setPi(i => (i + 1) % phrases.length); }
    }, delay);
    return () => clearTimeout(t);
  }, [ci, del, pi, phrases, speed, pause]);

  return display;
}

function ProfilePhoto() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ position: "relative", width: "100%", maxWidth: 340, cursor: "pointer", flexShrink: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Colour layer — always underneath */}
      <img
        src="/musab-color.png"
        alt="Musab Waqar"
        style={{ width: "100%", display: "block", borderRadius: 2 }}
      />
      {/* B&W layer — fades out on hover */}
      <img
        src="/musab-bw.png"
        alt="Musab Waqar"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          display: "block",
          borderRadius: 2,
          opacity: hovered ? 0 : 1,
          transition: "opacity 0.45s ease",
        }}
      />

      {/* Engineering border frame */}
      <div style={{
        position: "absolute",
        inset: 0,
        border: "1.5px solid rgba(39,26,0,0.7)",
        borderRadius: 2,
        pointerEvents: "none",
      }} />

      {/* Red corner marks */}
      {[
        { top: -6, left: -6 },
        { top: -6, right: -6 },
        { bottom: -6, left: -6 },
        { bottom: -6, right: -6 },
      ].map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          width: 12, height: 12, pointerEvents: "none",
          borderTop:    "top"    in pos ? "2px solid #C0392B" : "none",
          borderBottom: "bottom" in pos ? "2px solid #C0392B" : "none",
          borderLeft:   "left"   in pos ? "2px solid #C0392B" : "none",
          borderRight:  "right"  in pos ? "2px solid #C0392B" : "none",
          ...pos,
        }} />
      ))}

      {/* Hover mode indicator — top right corner only */}
      <div style={{
        position: "absolute",
        top: 8, right: 8,
        fontFamily: "'Fira Code', monospace",
        fontSize: 8,
        letterSpacing: "2px",
        color: hovered ? "#C0392B" : "rgba(250,248,245,0.55)",
        background: "rgba(39,26,0,0.45)",
        padding: "2px 7px",
        borderRadius: 1,
        transition: "color 0.3s",
        pointerEvents: "none",
      }}>
        {hovered ? "● COLOR" : "● B&W"}
      </div>
    </div>
  );
}

export default function Hero() {
  const typewriter = useTypewriter(PHRASES);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      data-testid="hero-section"
      style={{ minHeight: "100vh", padding: "90px 3rem 3rem", maxWidth: 1100, margin: "0 auto" }}
    >
      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, letterSpacing: "3px", color: "rgba(100,120,150,0.55)", textTransform: "uppercase", marginBottom: "2rem" }}>
        REF: MW-2026-01 // INITIALIZATION SEQUENCE · FAST NUCES PESHAWAR
      </div>

      {/* Main hero layout: photo LEFT, content RIGHT */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "340px 1fr",
        gap: "3.5rem",
        alignItems: "center",
        minHeight: "calc(100vh - 240px)",
      }}>

        {/* LEFT: Profile photo — first thing you see */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <ProfilePhoto />

          {/* Spec strip below photo */}
          <div style={{
            border: "1px solid rgba(100,120,150,0.25)",
            borderRadius: 2,
            overflow: "hidden",
            fontFamily: "'Fira Code', monospace",
          }}>
            {[
              { k: "University", v: "FAST NUCES Peshawar" },
              { k: "Role",       v: "Co-Founder and CTO" },
              { k: "Startup",    v: "NanoCoders" },
              { k: "Status",     v: "● Active and Building" },
            ].map((row, i) => (
              <div key={row.k} style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                borderBottom: i < 3 ? "1px dashed rgba(100,120,150,0.18)" : "none",
                padding: "5px 10px",
                background: i % 2 === 0 ? "rgba(250,248,245,0.6)" : "rgba(250,248,245,0.3)",
              }}>
                <span style={{ fontSize: 8, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{row.k}</span>
                <span style={{ fontSize: 9, color: row.v.startsWith("●") ? "#27ae60" : "rgba(39,26,0,0.8)", fontWeight: 500 }}>{row.v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Name, title, description, CTAs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <h1
            data-testid="hero-name"
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: "clamp(3.5rem, 8vw, 8rem)",
              fontWeight: 900,
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "rgba(39,26,0,0.9)",
            }}
          >
            Musab<br />
            <span style={{ color: "#C0392B" }}>Waqar</span>
          </h1>

          <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Fira Code', monospace" }}>
            <span style={{ color: "rgba(100,120,150,0.55)", fontSize: 12 }}>›</span>
            <span style={{ fontSize: 13, color: "rgba(39,26,0,0.6)" }} data-testid="hero-typewriter">{typewriter}</span>
            <span style={{ display: "inline-block", width: 8, height: 16, background: "rgba(39,26,0,0.7)", animation: "blink 1s step-end infinite" }} />
          </div>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "rgba(39,26,0,0.55)", maxWidth: 440, lineHeight: 1.75 }}>
            I am a CS student at FAST NUCES Peshawar and Co-Founder and CTO of NanoCoders. I build AI systems, big data pipelines, and real software that solves real problems.
          </p>

          {/* Domain tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {["AI/ML", "Big Data", "Compilers", "Computer Vision", "Backend"].map(t => (
              <span key={t} className="eng-tag red">{t}</span>
            ))}
          </div>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem" }}>
            <button
              data-testid="hero-cta-projects"
              onClick={() => scrollTo("projects")}
              style={{
                fontFamily: "'Fira Code', monospace", fontSize: 10, fontWeight: 600,
                letterSpacing: "2px", textTransform: "uppercase",
                padding: "9px 20px",
                background: "rgba(39,26,0,0.85)", color: "rgba(250,248,245,1)",
                border: "none", borderRadius: 2, cursor: "pointer",
              }}
            >
              See My Work
            </button>
            <a
              href="https://github.com/Musab-Waqar"
              target="_blank" rel="noreferrer"
              data-testid="hero-cta-github"
              style={{
                fontFamily: "'Fira Code', monospace", fontSize: 10,
                letterSpacing: "2px", textTransform: "uppercase",
                padding: "9px 20px",
                border: "1.5px solid rgba(39,26,0,0.4)", color: "rgba(39,26,0,0.6)",
                borderRadius: 2, textDecoration: "none",
              }}
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/musab-waqar-b519692b7/"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "'Fira Code', monospace", fontSize: 10,
                letterSpacing: "2px", textTransform: "uppercase",
                padding: "9px 20px",
                border: "1.5px solid rgba(44,95,138,0.4)", color: "#2c5f8a",
                borderRadius: 2, textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
            <a
              href="https://nanocoders.pk"
              target="_blank" rel="noreferrer"
              style={{
                fontFamily: "'Fira Code', monospace", fontSize: 10,
                letterSpacing: "2px", textTransform: "uppercase",
                padding: "9px 20px",
                border: "1.5px solid rgba(192,57,43,0.35)", color: "#C0392B",
                borderRadius: 2, textDecoration: "none",
              }}
            >
              NanoCoders
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(4, auto)", gap: "2rem",
            justifyContent: "start",
            paddingTop: "1.5rem",
            borderTop: "1px dashed rgba(100,120,150,0.25)",
            marginTop: "0.5rem",
          }}>
            {[
              { label: "Semester",   value: "6th" },
              { label: "CGPA",       value: "3.11" },
              { label: "Projects",   value: "9+" },
              { label: "Graduating", value: "2027" },
            ].map(s => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, color: "rgba(39,26,0,0.9)", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: "rgba(100,120,150,0.55)", textTransform: "uppercase", letterSpacing: "2px", marginTop: 3 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
