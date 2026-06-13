import { useState, useEffect } from "react";

const sections = [
  { id: "hero",     label: "Init",   code: "01" },
  { id: "about",    label: "Arch",   code: "02" },
  { id: "skills",   label: "Logic",  code: "03" },
  { id: "projects", label: "Deploy", code: "04" },
  { id: "timeline", label: "Log",    code: "05" },
  { id: "terminal", label: "Shell",  code: "06" },
  { id: "contact",  label: "Link",   code: "07" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const s of [...sections].reverse()) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      data-testid="navbar"
      style={{
        position: "fixed",
        top: 18,
        left: 18,
        right: 0,
        zIndex: 200,
        height: 46,
        display: "flex",
        alignItems: "center",
        paddingLeft: "1.5rem",
        paddingRight: "2rem",
        gap: "2rem",
        background: scrolled ? "rgba(250,248,245,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(100,120,150,0.25)" : "none",
        backdropFilter: scrolled ? "blur(4px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <button
        data-testid="nav-logo"
        onClick={() => scrollTo("hero")}
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 12,
          fontWeight: 600,
          color: "rgba(39,26,0,0.85)",
          letterSpacing: "2px",
          textTransform: "uppercase",
          border: "1.5px solid rgba(39,26,0,0.7)",
          padding: "3px 8px",
          borderRadius: 2,
          background: "transparent",
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        MW // ENG
      </button>

      <div style={{ display: "flex", gap: "0.25rem", marginLeft: "auto", alignItems: "center" }} className="hidden md:flex">
        {sections.map((s) => (
          <button
            key={s.id}
            data-testid={`nav-link-${s.id}`}
            onClick={() => scrollTo(s.id)}
            style={{
              fontFamily: "'Fira Code', monospace",
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: "2px",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 2,
              cursor: "pointer",
              border: active === s.id ? "1px solid rgba(192,57,43,0.3)" : "1px solid transparent",
              background: active === s.id ? "rgba(192,57,43,0.08)" : "transparent",
              color: active === s.id ? "#C0392B" : "rgba(100,120,150,0.7)",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => { if (active !== s.id) (e.target as HTMLElement).style.color = "rgba(39,26,0,0.8)"; }}
            onMouseLeave={e => { if (active !== s.id) (e.target as HTMLElement).style.color = "rgba(100,120,150,0.7)"; }}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 9,
          color: "rgba(100,120,150,0.55)",
          letterSpacing: "1px",
          marginLeft: "1rem",
          borderLeft: "1px solid rgba(100,120,150,0.2)",
          paddingLeft: "1rem",
          display: "flex",
          alignItems: "center",
          gap: 6,
          whiteSpace: "nowrap",
        }}
        className="hidden md:flex"
      >
        <span className="status-dot" />
        SYS.ONLINE
      </div>

      <button
        data-testid="nav-mobile-toggle"
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          fontFamily: "'Fira Code', monospace",
          fontSize: 10,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "rgba(100,120,150,0.7)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          marginLeft: "auto",
        }}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 46,
            left: 0,
            right: 0,
            background: "rgba(250,248,245,0.98)",
            borderBottom: "1px solid rgba(100,120,150,0.25)",
            padding: "1rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: 11,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: active === s.id ? "#C0392B" : "rgba(100,120,150,0.7)",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              {s.code} — {s.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
