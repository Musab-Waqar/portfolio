import { useState, useEffect, useRef } from "react";

type Entry = { command: string; output: string[] };

const COMMANDS: Record<string, string[]> = {
  help: [
    "available commands:",
    "  whoami    — who I am",
    "  skills    — what I know",
    "  projects  — what I have built",
    "  startup   — about NanoCoders",
    "  goals     — what I am working toward",
    "  quote     — something I believe in",
    "  time      — current date and time",
    "  clear     — clear the screen",
  ],
  whoami: [
    "I am Musab Waqar",
    "I study CS at FAST NUCES Peshawar (6th semester, Spring 2026)",
    "My CGPA is 3.11 out of 4.00",
    "I am Co-Founder and CTO of NanoCoders (nanocoders.pk)",
    "I build AI systems, big data pipelines, compilers and real software",
    "I am graduating in June 2027",
    "You can reach me at musabwaqar07@gmail.com",
    "My GitHub is github.com/Musab-Waqar",
    "My LinkedIn is linkedin.com/in/musab-waqar-b519692b7",
  ],
  skills: [
    "Big Data:     Hadoop 3.3.6, HDFS, YARN, MapReduce, Spark 3.5.8, PySpark, Kafka",
    "AI and ML:    KNN, K-Means, Logistic Reg, Linear Reg, ANN, MinMax with Alpha-Beta, 3WD",
    "Vision:       CNN, ViT, ELA, Gaussian filters, LoG, Harris corners, edge detection",
    "Theory:       Automata (NFA/DFA/TM), Discrete Math, Compiler Construction, DSA",
    "Languages:    Python, C/C++, Java, JS/TS, Assembly, HTML/CSS, PHP",
    "Databases:    MySQL, Oracle, MongoDB, PostgreSQL, Supabase",
    "Systems:      Linux, Docker, Git, Chrome MV3, CUDA",
    "SE:           UML diagrams (use case, sequence, class)",
  ],
  projects: [
    "01  Sailab (KPK Flood Warning)          Flutter, Supabase, Twilio       LIVE",
    "02  ForensicLens (Fake Screenshot)      Python, ELA, CNN, ViT           BUILT",
    "03  Custom Language Compiler            C++, FA, CFG, AST               BUILT",
    "04  Eye Health 360 (3WD Classifier)     Python, KNN, K-Means, React     BUILT",
    "05  Hadoop Satellite Pipeline           Hadoop, HDFS, 207K rows         BUILT",
    "06  Apache Spark PySpark Lab            Spark, PySpark, RDD             BUILT",
    "07  3WD Timetable Scheduler              JS, Chart.js, D3.js            BUILT",
    "08  UniScout and Tab FMA                Chrome MV3, JS                  LIVE",
    "09  Speech to Sign Language             Python, NLTK, OpenCV            WIP",
    "",
    "Live Sailab app: sailabpak.vercel.app",
    "GitHub: github.com/Musab-Waqar",
    "LinkedIn: linkedin.com/in/musab-waqar-b519692b7",
  ],
  startup: [
    "I co-founded NanoCoders with Muhammad Ziyam Khan in 2024",
    "I am the CTO and handle all technical architecture and engineering",
    "We are an early stage startup focused on AI and software products",
    "Based in Peshawar, Pakistan",
    "Website: nanocoders.pk",
    "Status: Active and building",
  ],
  goals: [
    "Short term: finish my 6th semester and build my summer projects",
    "Medium term: graduate in June 2027 with a strong CGPA",
    "Long term: apply for MS programs in AI, Theoretical CS or PL Theory",
    "I am open to research collaborations in big data, vision or compiler theory",
    "I am also growing NanoCoders into a real product company",
  ],
  quote: [
    'Logic is the architecture of thought.',
    'Code is its expression.',
    "",
    "  written by me, Musab Waqar",
  ],
};

const WELCOME = [
  "musab@fast-peshawar ~ portfolio shell",
  "Musab Waqar · FAST NUCES Peshawar · 6th Semester · CTO at NanoCoders",
  "type 'help' to see what you can ask",
  "",
];

export default function TerminalSection() {
  const [history, setHistory] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const [welcome, setWelcome] = useState<string[]>([]);
  const [cmdHist, setCmdHist] = useState<string[]>([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < WELCOME.length) { setWelcome(p => [...p, WELCOME[i]]); i++; }
      else clearInterval(id);
    }, 80);
    return () => clearInterval(id);
  }, []);

 //  This ONLY triggers when a user types a command
useEffect(() => { 
  if (history.length > 0) {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" }); 
  }
}, [history]);

  const run = (raw: string) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    setCmdHist(h => [cmd, ...h]);
    setHistIdx(-1);
    if (cmd === "clear") { setHistory([]); setWelcome([]); return; }
    const out: string[] = COMMANDS[cmd] ?? [`command not found: '${cmd}', try 'help'`];
    setHistory(h => [...h, { command: raw.trim(), output: out }]);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { run(input); setInput(""); }
    else if (e.key === "ArrowUp") { e.preventDefault(); const idx = Math.min(histIdx + 1, cmdHist.length - 1); setHistIdx(idx); setInput(cmdHist[idx] ?? ""); }
    else if (e.key === "ArrowDown") { e.preventDefault(); const idx = Math.max(histIdx - 1, -1); setHistIdx(idx); setInput(idx === -1 ? "" : (cmdHist[idx] ?? "")); }
  };

  return (
    <section id="terminal" data-testid="terminal-section" style={{ padding: "4rem 3rem", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(100,120,150,0.25)" }}>

      <div className="section-header">
        <span className="section-num-badge">06</span>
        <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 600, textTransform: "uppercase", color: "rgba(39,26,0,0.85)" }}>Interactive Shell</h2>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", marginLeft: "auto", letterSpacing: "1px" }}>Ask me anything</span>
        <span className="section-ref">MW-2026-06</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "start" }}>
        <div>
          <div
            style={{ border: "1.5px solid rgba(39,26,0,0.7)", borderRadius: 2, overflow: "hidden", fontFamily: "'Fira Code', monospace", fontSize: 12 }}
            onClick={() => inputRef.current?.focus()}
          >
            <div style={{ background: "rgba(250,248,245,0.97)", borderBottom: "1px solid rgba(100,120,150,0.25)", padding: "6px 12px", display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e", display: "inline-block" }} />
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27c93f", display: "inline-block" }} />
              <span style={{ color: "rgba(100,120,150,0.5)", fontSize: 9, letterSpacing: "2px", marginLeft: 8, textTransform: "uppercase" }}>musab@fast-peshawar: ~</span>
            </div>
            <div
              data-testid="terminal-body"
              style={{ padding: "1.25rem", height: 340, overflowY: "auto", background: "rgba(250,248,245,0.97)", lineHeight: 1.9 }}
            >
              {welcome.map((line, i) => (
                <div key={`w${i}`} style={{ color: "rgba(100,120,150,0.6)" }}>{line || "\u00a0"}</div>
              ))}
              {history.map((entry, i) => (
                <div key={i} style={{ marginTop: 4 }}>
                  <div style={{ display: "flex", gap: 8 }}>
                    <span style={{ color: "#2c5f8a", flexShrink: 0 }}>musab@fast:~$</span>
                    <span style={{ color: "rgba(39,26,0,0.85)" }}>{entry.command}</span>
                  </div>
                  {entry.output.map((line, j) => (
                    <div key={j} style={{ color: "rgba(39,26,0,0.65)" }}>{line || "\u00a0"}</div>
                  ))}
                </div>
              ))}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <span style={{ color: "#2c5f8a", flexShrink: 0 }}>musab@fast:~$</span>
                <input
                  ref={inputRef}
                  data-testid="terminal-input"
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={onKey}
                  style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontFamily: "'Fira Code', monospace", fontSize: 12, color: "rgba(39,26,0,0.85)" }}
                  autoComplete="off"
                  spellCheck={false}
                />
                <span style={{ width: 8, height: 16, background: "rgba(39,26,0,0.7)", animation: "blink 1s step-end infinite" }} />
              </div>
              <div ref={bottomRef} />
            </div>
          </div>
        </div>

        <div style={{ minWidth: 100 }}>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "2px", marginBottom: 12 }}>Commands</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {["help", "whoami", "skills", "projects", "startup", "goals", "quote", "time", "clear"].map(cmd => (
              <button
                key={cmd}
                onClick={() => { run(cmd); inputRef.current?.focus(); }}
                style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.55)", background: "transparent", border: "none", cursor: "pointer", letterSpacing: "1px", textAlign: "left", padding: "2px 0", textTransform: "uppercase" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "#C0392B"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "rgba(100,120,150,0.55)"; }}
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
