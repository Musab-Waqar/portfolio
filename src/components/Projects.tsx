import { useState } from "react";

type TagColor = "" | "red" | "blue" | "gold" | "green";
interface Tag { t: string; c: TagColor; }
interface Project {
  num: string;
  title: string;
  subtitle: string;
  year: string;
  status: string;
  statusColor: string;
  domain: string;
  desc: string;
  bullets: string[];
  tags: Tag[];
  link?: string;
  linkLabel?: string;
  planned?: boolean;
}

const projects: Project[] = [
  {
    num: "PROJECT 01 // LIVE DISASTER TECH",
    title: "Sailab — KPK Flood Warning System",
    subtitle: "sailabpak.vercel.app · Supervised by Dr. Amin",
    year: "2026",
    status: "● LIVE",
    statusColor: "#27ae60",
    domain: "Disaster Tech · Mobile App",
    desc: "I built a live Flutter app that monitors flood risk across 9 KPK river gauges and sends real-time SMS and voice alerts in Urdu, English and Pashto via Twilio.",
    bullets: [
      "I connected to live Open-Meteo weather data and computed a 5-tier flood risk score for each of 9 river gauge stations in KPK",
      "I set up Twilio to send automated SMS and voice alerts in Urdu, English and Pashto to people in flood-risk areas",
      "I added evacuation routing using OpenStreetMap so users can see the safest route out",
      "I used Supabase and PostgreSQL to store alert history and manage user accounts",
    ],
    tags: [
      { t: "Flutter", c: "blue" }, { t: "Dart", c: "blue" }, { t: "Supabase", c: "blue" },
      { t: "PostgreSQL", c: "gold" }, { t: "Twilio", c: "red" }, { t: "OpenStreetMap", c: "" },
    ],
    link: "https://sailabpak.vercel.app",
    linkLabel: "Open Live App",
  },
  {
    num: "PROJECT 02 // IMAGE FORENSICS",
    title: "ForensicLens — Screenshot Fake Detector",
    subtitle: "Hybrid math-based detection pipeline",
    year: "2026",
    status: "● BUILT",
    statusColor: "#27ae60",
    domain: "Computer Vision · Image Forensics",
    desc: "I built a system to detect fake or edited screenshots using three techniques combined: metadata check, ELA with a CNN, and a Vision Transformer for global checks.",
    bullets: [
      "I used Error Level Analysis (ELA) to find areas in images that were re-saved at a different quality, which reveals edits",
      "I trained a CNN on top of ELA feature maps to classify whether an image is real or fake (50% of the final decision weight)",
      "I added a Vision Transformer (ViT) to check for global inconsistencies across image patches (35% weight)",
      "Metadata analysis checks EXIF data and creation timestamps for signs of tampering (15% weight)",
    ],
    tags: [
      { t: "Python", c: "blue" }, { t: "ELA", c: "red" }, { t: "CNN", c: "red" },
      { t: "ViT", c: "red" }, { t: "Image Forensics", c: "gold" }, { t: "HTML/CSS/JS", c: "" },
    ],
  },
  {
    num: "PROJECT 03 // COMPILERS",
    title: "Custom Language Compiler",
    subtitle: "Built to Semantic Analysis stage",
    year: "2025 to 2026",
    status: "● BUILT",
    statusColor: "#27ae60",
    domain: "Compilers · Theory",
    desc: "I built a C++ compiler that covers the full front-end pipeline from reading source code all the way to semantic analysis, using formal automata theory directly in the implementation.",
    bullets: [
      "I wrote a lexer using finite automata that reads source code and produces tokens",
      "I built a recursive descent parser that uses the grammar rules to build a parse tree",
      "I implemented a symbol table that tracks every variable, its type, and which scope it belongs to",
      "My semantic analysis phase catches type errors, undeclared variables, and scope problems",
    ],
    tags: [
      { t: "C++", c: "red" }, { t: "Finite Automata", c: "red" }, { t: "CFG", c: "gold" },
      { t: "AST", c: "gold" }, { t: "Symbol Table", c: "blue" },
    ],
  },
  {
    num: "PROJECT 04 // AI · HEALTHCARE",
    title: "Eye Health 360 — 3WD Disease Classifier",
    subtitle: "Three-Way Decision framework applied to eye data",
    year: "2026",
    status: "● BUILT",
    statusColor: "#27ae60",
    domain: "AI · Healthcare",
    desc: "I worked on a 1,000,000-row eye disease dataset and classified each case using Three-Way Decision theory with alpha and beta thresholds, then applied KNN and K-Means on top.",
    bullets: [
      "I processed 1,000,000 rows of eye disease data and applied Three-Way Decision logic to sort cases into three groups: Accept, Defer or Reject based on confidence thresholds",
      "I used KNN with k equal to 5 to identify the specific disease type for cases in the Accept region",
      "I applied K-Means clustering with k equal to 3 to find natural disease pattern groups in the data",
      "I built a React and TypeScript frontend with live Chart.js and D3.js sliders so the thresholds can be adjusted in real time",
    ],
    tags: [
      { t: "Python", c: "blue" }, { t: "Scikit-Learn", c: "blue" }, { t: "3WD Theory", c: "red" },
      { t: "KNN", c: "gold" }, { t: "K-Means", c: "gold" }, { t: "React", c: "" }, { t: "Chart.js", c: "" },
    ],
  },
  {
    num: "PROJECT 05 // BIG DATA · SATELLITE",
    title: "Hadoop MapReduce Satellite Pipeline",
    subtitle: "Big Data Analytics course · supervised by Omar Usman",
    year: "2026",
    status: "● BUILT",
    statusColor: "#27ae60",
    domain: "Big Data · Distributed Systems",
    desc: "I set up a multi-node Hadoop cluster and ingested 207,310 rows of live satellite data from four satellites, then ran seven MapReduce queries including an Ozone to SST correlation that came out at 0.996.",
    bullets: [
      "I set up a multi-node Hadoop 3.3.6 cluster with HDFS, YARN and MapReduce on Ubuntu virtual machines",
      "I ingested 207,310 rows of live data from ISS, METEOR, NOAA-15 and SARAL satellites using live APIs and the Skyfield library",
      "I wrote 7 MapReduce jobs covering histograms, hemisphere filters, average SST and correlation analysis",
      "The Ozone to SST correlation coefficient I computed was 0.996, which shows a near-perfect linear relationship",
    ],
    tags: [
      { t: "Hadoop 3.3.6", c: "red" }, { t: "HDFS", c: "red" }, { t: "YARN", c: "red" },
      { t: "MapReduce", c: "gold" }, { t: "Python", c: "blue" }, { t: "Skyfield", c: "" },
    ],
  },
  {
    num: "PROJECT 06 // BIG DATA · SPARK",
    title: "Apache Spark 3.5.8 PySpark Analytics Lab",
    subtitle: "Big Data Analytics course · supervised by Omar Usman",
    year: "2026",
    status: "● BUILT",
    statusColor: "#27ae60",
    domain: "Big Data · Stream Processing",
    desc: "I explored the internals of Apache Spark by working with RDDs, DAG visualizations and benchmarking different configurations to understand how Spark actually processes data.",
    bullets: [
      "I worked with RDD operations including partitioning, glom, foreachPartition and Union to understand how data is split and processed",
      "I read DAG visualizations from the Spark UI to trace exactly how each stage is executed",
      "I benchmarked different combinations of mapper count, reducer count and block size to find the most efficient configuration",
      "All work done in Jupyter notebooks connected to HDFS via a PySpark session",
    ],
    tags: [
      { t: "Spark 3.5.8", c: "red" }, { t: "PySpark", c: "red" }, { t: "Jupyter", c: "blue" },
      { t: "HDFS", c: "blue" }, { t: "RDD", c: "gold" },
    ],
  },
  {
    num: "PROJECT 07 // SCHEDULING · DECISION LOGIC",
    title: "3WD Timetable Scheduler",
    subtitle: "FAST NUCES Peshawar · Spring 2026 real exam data",
    year: "2026",
    status: "● BUILT",
    statusColor: "#27ae60",
    domain: "Algorithms · Decision Theory",
    desc: "I built an interactive exam scheduler for 41 exams, 17 time slots and 4,762 students using Three-Way Decision logic to decide which slots are safe, uncertain or should be rejected.",
    bullets: [
      "I used real Spring 2026 exam data from FAST NUCES Peshawar with 41 exams, 17 slots and 4,762 students",
      "Three-Way Decision logic labels each slot as Accept (low conflict), Defer (borderline) or Reject (too many clashes)",
      "For cases in the uncertain boundary region I used KNN to suggest better slot options",
      "I added a conflict heatmap and a network graph so you can visually see which exams clash with each other",
    ],
    tags: [
      { t: "JavaScript", c: "blue" }, { t: "HTML/CSS", c: "" }, { t: "Chart.js", c: "blue" },
      { t: "D3.js", c: "blue" }, { t: "3WD Theory", c: "red" }, { t: "KNN", c: "gold" },
    ],
  },
  {
    num: "PROJECT 08 // CHROME EXTENSIONS",
    title: "UniScout v2.0 and Tab Workspace FMA",
    subtitle: "Two Chrome MV3 browser extensions",
    year: "2026",
    status: "● LIVE",
    statusColor: "#27ae60",
    domain: "Browser Extensions · Web",
    desc: "I built two Chrome MV3 extensions. UniScout crawls Pakistani university websites in parallel and exports structured data. Tab FMA organises browser tabs into persistent workspaces.",
    bullets: [
      "UniScout crawls FAST, NUCES, LUMS, UET and any .edu.pk domain in parallel and exports clean structured JSON",
      "Tab FMA groups your browser tabs into named workspaces that are saved even after the browser is closed",
      "Both extensions use Chrome MV3 manifest with service workers instead of persistent background pages",
      "Tab state is saved using chrome.storage.local so workspaces survive browser restarts",
    ],
    tags: [
      { t: "JavaScript", c: "blue" }, { t: "Chrome MV3", c: "red" }, { t: "Service Workers", c: "red" },
      { t: "JSON Export", c: "" },
    ],
  },
  {
    num: "PROJECT 09 // NLP · COMPUTER VISION",
    title: "Speech to Sign Language Translator",
    subtitle: "8-phase pipeline · currently building",
    year: "2025 onwards",
    status: "● BUILDING",
    statusColor: "#2c5f8a",
    domain: "NLP · Computer Vision",
    desc: "I am actively building an 8-phase pipeline that converts speech into sign language video output using speech recognition, NLP preprocessing and OpenCV rendering.",
    bullets: [
      "I use SpeechRecognition to capture and transcribe spoken words",
      "NLTK handles tokenization, normalization and part-of-speech tagging",
      "A SQLite database maps each word to the correct sign language gesture frames",
      "OpenCV renders the gesture frames into an animated sign language output",
    ],
    tags: [
      { t: "Python", c: "blue" }, { t: "PyQt5", c: "blue" }, { t: "NLTK", c: "gold" },
      { t: "OpenCV", c: "red" }, { t: "SQLite", c: "" },
    ],
  },
];

const summerProjects: Project[] = [
  {
    num: "SUMMER 01 // GAME AI",
    title: "Chess Engine",
    subtitle: "MinMax with Alpha-Beta Pruning from scratch",
    year: "Summer 2026",
    status: "● PLANNED",
    statusColor: "#2c5f8a",
    domain: "AI · Game Tree Search",
    desc: "I plan to build a fully playable chess engine that uses MinMax search with alpha-beta pruning, applying what I learned in my AI course directly to a real game.",
    bullets: [
      "Complete chess rule engine with legal move generation for all piece types",
      "MinMax tree search with configurable depth",
      "Alpha-beta pruning to cut the number of nodes searched roughly in half",
      "Position evaluation based on material count, piece activity and pawn structure",
    ],
    tags: [{ t: "Python", c: "blue" }, { t: "MinMax", c: "red" }, { t: "Alpha-Beta", c: "red" }],
    planned: true,
  },
  {
    num: "SUMMER 02 // DEEP LEARNING",
    title: "Neural Network from Scratch",
    subtitle: "Pure NumPy, no frameworks",
    year: "Summer 2026",
    status: "● PLANNED",
    statusColor: "#2c5f8a",
    domain: "AI · ANN",
    desc: "I want to implement a multi-layer neural network in plain NumPy with no PyTorch or Keras, so I can understand exactly what happens during training at the math level.",
    bullets: [
      "Configurable feedforward ANN with any number of hidden layers",
      "I will implement backpropagation manually using the chain rule in NumPy",
      "Gradient descent with learning rate scheduling",
      "Target: train on MNIST and reach over 96% accuracy with no ML library",
    ],
    tags: [{ t: "Python", c: "blue" }, { t: "NumPy", c: "blue" }, { t: "ANN", c: "red" }, { t: "Backprop", c: "gold" }],
    planned: true,
  },
  {
    num: "SUMMER 03 // FORMAL LANGUAGES",
    title: "Automata Visualizer",
    subtitle: "NFA to DFA conversion and Turing Machine simulator",
    year: "Summer 2026",
    status: "● PLANNED",
    statusColor: "#2c5f8a",
    domain: "Theory of Automata · React",
    desc: "I want to build a browser-based visual tool where you can construct NFAs, watch them convert to DFAs step by step, and simulate Turing Machine tape execution.",
    bullets: [
      "NFA to DFA subset construction shown step by step with animations",
      "DFA minimization algorithm visualized",
      "Turing Machine simulator with a visual tape, read/write head and state display",
      "Built using what I learned in Theory of Automata where I got an A+",
    ],
    tags: [{ t: "React", c: "blue" }, { t: "TypeScript", c: "blue" }, { t: "NFA/DFA", c: "red" }, { t: "TM", c: "gold" }],
    planned: true,
  },
];

function ProjectCard({ proj }: { proj: Project }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="spec-sheet" style={{ marginBottom: "1rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", borderBottom: "1.5px solid rgba(100,120,150,0.25)", background: "rgba(100,120,150,0.04)" }}>
        <div style={{ padding: "10px 14px", borderRight: "1px solid rgba(100,120,150,0.2)" }}>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "#C0392B", letterSpacing: "2px", display: "block", marginBottom: 3 }}>{proj.num}</div>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 13, fontWeight: 600, color: "rgba(39,26,0,0.85)" }}>{proj.title}</div>
          {proj.subtitle && <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.6)", marginTop: 2 }}>{proj.subtitle}</div>}
        </div>
        <div style={{ padding: "8px 12px", display: "flex", flexDirection: "column", gap: 3, textAlign: "right", minWidth: 130 }}>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: proj.statusColor, fontWeight: 500 }}>{proj.status}</div>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{proj.domain}</div>
          <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: "rgba(100,120,150,0.5)" }}>{proj.year}</div>
        </div>
      </div>

      <div style={{ padding: "12px 14px" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: "rgba(100,120,150,0.85)", lineHeight: 1.7, marginBottom: 8 }}>{proj.desc}</p>

        {open && (
          <div style={{ marginTop: 8, borderTop: "1px dashed rgba(100,120,150,0.25)", paddingTop: 8 }}>
            <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6, paddingBottom: 4, borderBottom: "1px dashed rgba(100,120,150,0.2)" }}>
              What I Built
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {proj.bullets.map((b, i) => (
                <li key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "rgba(39,26,0,0.75)", paddingLeft: 16, position: "relative", lineHeight: 1.6 }}>
                  <span style={{ position: "absolute", left: 0, color: "#C0392B", fontSize: 8, top: 5 }}>►</span>
                  {b}
                </li>
              ))}
            </ul>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10,
                  color: "#2c5f8a",
                  letterSpacing: "1px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  marginTop: 10,
                  border: "1px solid rgba(44,95,138,0.35)",
                  padding: "4px 10px",
                  borderRadius: 2,
                }}
              >
                ► {proj.linkLabel || proj.link}
              </a>
            )}
          </div>
        )}

        <button
          onClick={() => setOpen(o => !o)}
          style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 9,
            color: "rgba(100,120,150,0.55)",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            letterSpacing: "1px",
            textTransform: "uppercase",
            marginTop: 6,
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <span style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", display: "inline-block", transition: "transform 0.2s" }}>›</span>
          {open ? "Collapse" : "Expand Details"}
        </button>
      </div>

      <div className="spec-stack">
        {proj.tags.map(tag => (
          <span key={tag.t} className={`eng-tag ${tag.c}`}>{tag.t}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" style={{ padding: "4rem 3rem", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(100,120,150,0.25)" }}>

      <div className="section-header">
        <span className="section-num-badge">04</span>
        <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 600, textTransform: "uppercase", color: "rgba(39,26,0,0.85)" }}>What I Built</h2>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", letterSpacing: "1px", marginLeft: "auto" }}>9 Projects Built · 3 Coming This Summer</span>
        <span className="section-ref">MW-2026-04</span>
      </div>

      <div>
        {projects.map((proj) => <ProjectCard key={proj.num} proj={proj} />)}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "2rem 0 1.5rem" }}>
        <div style={{ flex: 1, height: "1px", background: "rgba(44,95,138,0.25)" }} />
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "#2c5f8a", letterSpacing: "2px", textTransform: "uppercase" }}>
          Coming Soon — Next Builds
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(44,95,138,0.25)" }} />
      </div>

      <div>
        {summerProjects.map((proj) => <ProjectCard key={proj.num} proj={proj} />)}
      </div>
    </section>
  );
}
