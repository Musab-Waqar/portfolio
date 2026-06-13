import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setSent(true);
  };

  const links = [
    { label: "GitHub",           value: "github.com/Musab-Waqar",          href: "https://github.com/Musab-Waqar",                      testId: "contact-github" },
    { label: "LinkedIn",         value: "linkedin.com/in/musab-waqar",     href: "https://www.linkedin.com/in/musab-waqar-b519692b7/",   testId: "contact-linkedin" },
    { label: "Email",            value: "musabwaqar07@gmail.com",           href: "mailto:musabwaqar07@gmail.com",                        testId: "contact-email" },
    { label: "NanoCoders",       value: "nanocoders.pk",                    href: "https://nanocoders.pk",                               testId: "contact-nanocoders" },
    { label: "NanoCoders LinkedIn", value: "linkedin.com/company/nanocoders", href: "https://pk.linkedin.com/company/nanocoders",         testId: "contact-nanocoders-linkedin" },
  ];

  return (
    <section id="contact" data-testid="contact-section" style={{ padding: "4rem 3rem", maxWidth: 1100, margin: "0 auto", borderTop: "1px solid rgba(100,120,150,0.25)" }}>

      <div className="section-header">
        <span className="section-num-badge">07</span>
        <h2 style={{ fontFamily: "'Fira Code', monospace", fontSize: 18, fontWeight: 600, textTransform: "uppercase", color: "rgba(39,26,0,0.85)" }}>Handshake Protocol</h2>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", marginLeft: "auto", letterSpacing: "1px" }}>Connection Initialization</span>
        <span className="section-ref">MW-2026-07 // HANDSHAKE</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }}>

        {/* Left: Contact spec card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div className="spec-sheet">
            <div className="spec-title-bar">
              <span>SUBJECT: CONTACT_RECORD</span>
              <span>SHEET 5/5</span>
            </div>
            <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { k: "Name",    v: "Musab Waqar" },
                { k: "Role",    v: "AI Engineer · Backend Architect · CTO @ NanoCoders" },
                { k: "GitHub",    v: "github.com/Musab-Waqar",            href: "https://github.com/Musab-Waqar" },
              { k: "LinkedIn", v: "linkedin.com/in/musab-waqar",      href: "https://www.linkedin.com/in/musab-waqar-b519692b7/" },
                { k: "State",   v: "● Compiling Future...", special: "red" },
                { k: "Open To", v: "AI / Backend roles, research, MS programs" },
              ].map((row, i) => (
                <div key={row.k} style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: "0.75rem", borderBottom: i < 4 ? "1px dashed rgba(100,120,150,0.2)" : "none", paddingBottom: 6 }}>
                  <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.5)", textTransform: "uppercase", letterSpacing: "1px" }}>{row.k}</span>
                  {row.href ? (
                    <a href={row.href} target="_blank" rel="noreferrer" style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "#2c5f8a", fontWeight: 500, textDecoration: "none" }}>{row.v} ↗</a>
                  ) : (
                    <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: (row as any).special === "red" ? "#C0392B" : "rgba(39,26,0,0.8)", fontWeight: 500 }}>{row.v}</span>
                  )}
                </div>
              ))}

              <div style={{ borderTop: "1px dashed rgba(100,120,150,0.25)", paddingTop: "0.75rem", marginTop: 4 }}>
                <div className="dim-line" style={{ marginBottom: 8 }}>CONNECT VIA</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {links.map(l => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      data-testid={l.testId}
                      style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 10,
                        color: "rgba(39,26,0,0.7)",
                        border: "1.5px solid rgba(39,26,0,0.4)",
                        padding: "4px 10px",
                        borderRadius: 2,
                        textDecoration: "none",
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(39,26,0,0.07)"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "#2c5f8a", lineHeight: 1.7, fontStyle: "italic" }}>
            → Building something that needs real architecture?<br />
            → Looking for an AI / backend engineer for research?<br />
            → Let's map it out.
          </p>
        </div>

        {/* Right: Contact form */}
        {sent ? (
          <div className="spec-sheet" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "3rem 2rem", gap: "1rem" }}>
            <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 32, fontWeight: 600, color: "#27ae60" }}>✓ PROTOCOL_INITIALIZED</div>
            <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 11, color: "rgba(100,120,150,0.6)" }}>Handshake complete. I'll get back to you shortly.</p>
            <button
              style={{ fontFamily: "'Fira Code', monospace", fontSize: 10, color: "rgba(100,120,150,0.5)", background: "transparent", border: "none", cursor: "pointer", letterSpacing: "1px", textTransform: "uppercase" }}
              onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
            >
              → Send another
            </button>
          </div>
        ) : (
          <div className="spec-sheet">
            <div className="spec-title-bar">
              <span>INITIATE_CONTACT.sh</span>
              <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span className="status-dot" />
                READY
              </span>
            </div>
            <form data-testid="contact-form" onSubmit={submit} style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map(f => (
                <div key={f.id}>
                  <label style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.55)", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: 6 }}>{f.label}</label>
                  <input
                    data-testid={`input-${f.id}`}
                    type={f.type}
                    value={form[f.id as "name" | "email"]}
                    onChange={e => setForm({ ...form, [f.id]: e.target.value })}
                    placeholder={f.placeholder}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${errors[f.id] ? "#C0392B" : "rgba(100,120,150,0.35)"}`,
                      padding: "6px 0",
                      fontFamily: "'Fira Code', monospace",
                      fontSize: 12,
                      color: "rgba(39,26,0,0.85)",
                      outline: "none",
                    }}
                  />
                  {errors[f.id] && <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "#C0392B", marginTop: 3 }}>{errors[f.id]}</p>}
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.55)", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: 6 }}>Message</label>
                <textarea
                  data-testid="input-message"
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="AI research, backend architecture, MS programs, technical collaboration..."
                  rows={4}
                  style={{
                    width: "100%",
                    background: "transparent",
                    border: "none",
                    borderBottom: `1px solid ${errors.message ? "#C0392B" : "rgba(100,120,150,0.35)"}`,
                    padding: "6px 0",
                    fontFamily: "'Fira Code', monospace",
                    fontSize: 12,
                    color: "rgba(39,26,0,0.85)",
                    outline: "none",
                    resize: "none",
                  }}
                />
                {errors.message && <p style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "#C0392B", marginTop: 3 }}>{errors.message}</p>}
              </div>
              <button
                data-testid="button-submit"
                type="submit"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "10px",
                  background: "rgba(39,26,0,0.85)",
                  color: "rgba(250,248,245,1)",
                  border: "none",
                  borderRadius: 2,
                  cursor: "pointer",
                  width: "100%",
                }}
              >
                Initiate Handshake →
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(100,120,150,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.45)", letterSpacing: "1px" }}>MUSAB WAQAR // ENGINEERING PORTFOLIO © {new Date().getFullYear()}</span>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.45)", letterSpacing: "1px", fontStyle: "italic" }}>"Logic is the architecture of thought."</span>
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, color: "rgba(100,120,150,0.45)", letterSpacing: "1px" }}>SHEET 5/5 // END OF DOCUMENT</span>
      </div>
    </section>
  );
}
