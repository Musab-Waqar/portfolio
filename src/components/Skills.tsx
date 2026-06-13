import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "01 — Big Data Ecosystem",
    color: "#C0392B",
    barClass: "red",
    skills: [
      { name: "Hadoop 3.3.6 / HDFS / YARN", sub: "Multi-node cluster setup", pct: 88 },
      { name: "MapReduce", sub: "Mapper / Reducer / K-V pairs", pct: 90 },
      { name: "Apache Spark 3.5.8", sub: "In-memory cluster compute", pct: 85 },
      { name: "PySpark", sub: "Python Spark API + RDD ops", pct: 83 },
      { name: "Apache Kafka", sub: "Stream ingestion", pct: 70 },
    ],
  },
  {
    category: "02 — AI / ML",
    color: "#2c5f8a",
    barClass: "blue",
    skills: [
      { name: "KNN / K-Means", sub: "Classification + clustering", pct: 87 },
      { name: "Logistic / Linear Regression", sub: "Supervised learning", pct: 85 },
      { name: "Artificial Neural Networks", sub: "ANN, backpropagation", pct: 80 },
      { name: "MinMax + α-β Pruning", sub: "Adversarial search", pct: 84 },
      { name: "Three-Way Decision (3WD)", sub: "α/β threshold classification", pct: 82 },
      { name: "Informed / Uninformed Search", sub: "BFS, DFS, A*, Dijkstra", pct: 83 },
    ],
  },
  {
    category: "03 — Computer Vision",
    color: "#b8860b",
    barClass: "gold",
    skills: [
      { name: "CNN (training + inference)", sub: "Classification, feature maps", pct: 80 },
      { name: "Vision Transformer (ViT)", sub: "Patch-based global analysis", pct: 78 },
      { name: "ELA (Error Level Analysis)", sub: "JPEG forensics", pct: 82 },
      { name: "Spatial Filters", sub: "Gaussian, Median, LoG", pct: 85 },
      { name: "Edge Detection / Harris Corners", sub: "Canny, Harris corner detector", pct: 83 },
    ],
  },
  {
    category: "04 — Theory & Compilers",
    color: "#C0392B",
    barClass: "red",
    skills: [
      { name: "Theory of Automata", sub: "NFA / DFA / TM / Regex", pct: 92 },
      { name: "Compiler Construction", sub: "Lexer → Parser → AST → Semantic", pct: 85 },
      { name: "Discrete Mathematics", sub: "Graphs, sets, logic, combinatorics", pct: 90 },
      { name: "Algorithms & DSA", sub: "Complexity, Dijkstra, tree ops", pct: 86 },
    ],
  },
  {
    category: "05 — Languages & Web",
    color: "#2c5f8a",
    barClass: "blue",
    skills: [
      { name: "Python", sub: "Primary language", pct: 90 },
      { name: "C / C++", sub: "Systems, compiler", pct: 85 },
      { name: "JavaScript / TypeScript", sub: "React, Chrome MV3, Node", pct: 82 },
      { name: "Java", sub: "OOP, algorithms", pct: 78 },
      { name: "Assembly (x86)", sub: "Computer organization", pct: 72 },
      { name: "HTML / CSS / PHP", sub: "Web fundamentals", pct: 78 },
    ],
  },
  {
    category: "06 — Data Structures",
    color: "#27ae60",
    barClass: "",
    skills: [
      { name: "Stack / Queue", sub: "", pct: 90 },
      { name: "Binary / AVL / Threaded Trees", sub: "Rotations, traversals", pct: 88 },
      { name: "Heap (Min/Max)", sub: "Priority queues", pct: 86 },
      { name: "HashMap / HashTable", sub: "Collision resolution", pct: 85 },
      { name: "Graphs + Dijkstra", sub: "BFS, DFS, shortest path", pct: 85 },
    ],
  },
  {
    category: "07 — Databases",
    color: "#b8860b",
    barClass: "gold",
    skills: [
      { name: "MySQL / Oracle SQL", sub: "Relational, PL/SQL", pct: 82 },
      { name: "MongoDB", sub: "NoSQL, document model", pct: 74 },
      { name: "PostgreSQL / Supabase", sub: "Used in Sailab", pct: 76 },
      { name: "CUDA", sub: "Blocks, dimensions, threads", pct: 70 },
    ],
  },
  {
    category: "08 — Software Engineering",
    color: "#2c5f8a",
    barClass: "blue",
    skills: [
      { name: "UML (Use Case, Sequence, Class)", sub: "Diagrams", pct: 80 },
      { name: "Computer Architecture", sub: "Microprocessors, org", pct: 78 },
      { name: "Digital Logic Design", sub: "A+ grade", pct: 90 },
      { name: "Computer Networks", sub: "TCP/IP, protocols", pct: 74 },
    ],
  },
];

function SkillRow({ name, sub, pct, barClass, visible }: { name: string; sub: string; pct: number; barClass: string; visible: boolean }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setWidth(pct), 200);
    return () => clearTimeout(t);
  }, [visible, pct]);

  return (
    <div className="component-row">
      <div>
        <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "rgba(39,26,0,0.8)" }}>{name}</div>
        {sub && <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.55)", marginTop: 1 }}>{sub}</div>}
      </div>
      <div className="bar-track">
        <div className={`bar-fill ${barClass}`} style={{ width: `${width}%`, transition: "width 1s ease-out" }} />
      </div>
      <div className="bar-pct">{pct}%</div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" data-testid="skills-section" style={{ padding: "4rem 3rem", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(100,120,150,0.25)" }} ref={ref}>
      <div className="section-header">
        <span className="section-num-badge">03</span>
        <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 600, textTransform: "uppercase", color: "rgba(39,26,0,0.85)" }}>Logic Array</h2>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", marginLeft: "auto", letterSpacing: "1px" }}>Capability Specification</span>
        <span className="section-ref">MW-2026-03 // CAPABILITY SPEC</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
        {skillGroups.map(group => (
          <div key={group.category} className="spec-sheet">
            <div className="spec-title-bar">
              <span style={{ color: group.color || "rgba(250,248,245,1)" }}>{group.category}</span>
              <span>SHEET 3/{skillGroups.indexOf(group) + 1}</span>
            </div>
            <div className="spec-body">
              {group.skills.map(s => (
                <SkillRow key={s.name} name={s.name} sub={s.sub} pct={s.pct} barClass={group.barClass} visible={visible} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
