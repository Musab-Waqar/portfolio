import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import TerminalSection from "@/components/TerminalSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div style={{ background: "transparent", color: "rgba(39,26,0,0.85)", minHeight: "100vh", paddingLeft: 18, paddingTop: 0 }}>
      {/* Engineering rulers */}
      <div className="ruler-top" />
      <div className="ruler-left" />
      <div className="corner-mark" />
      {/* Coordinate labels */}
      <span className="coord-label top" style={{ left: "25%" }}>25</span>
      <span className="coord-label top" style={{ left: "50%" }}>50</span>
      <span className="coord-label top" style={{ left: "75%" }}>75</span>
      <span className="coord-label left" style={{ top: "33%" }}>A</span>
      <span className="coord-label left" style={{ top: "66%" }}>B</span>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <TerminalSection />
        <Contact />
      </main>
    </div>
  );
}
