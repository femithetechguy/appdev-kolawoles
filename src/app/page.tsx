"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import content from "@/content/app-content.json";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
});

function InView({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

// ── page ────────────────────────────────────────────────────
export default function AppDevPage() {
  const horizontalPadding = "clamp(1rem, 5vw, 2.5rem)";

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", position: "relative" }}>
      <Cursor />
      <Nav content={content.nav} />

      {/* Orb */}
      <div style={{
        position: "fixed", bottom: "-200px", right: "-150px",
        width: "600px", height: "600px", borderRadius: "50%",
        background: "#f07040", filter: "blur(120px)",
        opacity: 0.07, pointerEvents: "none", zIndex: 0,
      }} />

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "flex-start",
        padding: `clamp(5.5rem, 12vh, 7rem) ${horizontalPadding} clamp(3rem, 10vh, 5rem)`, maxWidth: "900px", margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--accent-light)", marginBottom: "1.5rem", fontWeight: 400,
        }}>
          {content.hero.eyebrow}
        </motion.p>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "var(--font-syne)", fontSize: "clamp(44px, 7vw, 80px)",
          fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em",
          color: "var(--color-fg)", marginBottom: "1.8rem",
        }}>
          {content.hero.titleLine1}<br />
          <span style={{ color: "var(--accent-light)" }}>{content.hero.titleLine2}</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} style={{
          fontSize: "16px", fontWeight: 300, lineHeight: 1.7,
          color: "var(--color-fg-muted)", maxWidth: "520px", marginBottom: "3rem",
        }}>
          {content.hero.description}
        </motion.p>

        <motion.div {...fadeUp(0.4)} style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <a href="#projects" style={{
            padding: "10px 24px", background: "var(--accent)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 500, color: "#fff", transition: "opacity 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            {content.hero.primaryCta.label}
          </a>
          <a href={content.hero.secondaryCta.href} style={{
            padding: "10px 24px", border: "0.5px solid var(--color-border-hover)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 400, color: "var(--color-fg-muted)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--color-fg)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.color = "var(--color-fg-muted)"; }}
          >
            {content.hero.secondaryCta.label}
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
          style={{ position: "absolute", bottom: "clamp(1.25rem, 4vw, 2.5rem)", left: horizontalPadding, display: "flex", alignItems: "center", gap: "10px" }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--color-fg-faint)", textTransform: "uppercase" }}>{content.hero.scrollHint}</span>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: `clamp(5rem, 10vw, 8rem) ${horizontalPadding}`, maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>{content.sections.projects.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3.5rem", color: "var(--color-fg)" }}>
            {content.sections.projects.title}
          </h2>
        </InView>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {content.projects.map((p, i) => (
            <InView key={p.name} delay={i * 0.07}>
              <div style={{
                padding: "clamp(1rem, 3.5vw, 2rem) clamp(1rem, 4vw, 2.2rem)",
                border: `0.5px solid ${p.accent ? "rgba(240,112,64,0.3)" : "var(--color-border)"}`,
                borderRadius: "6px",
                background: p.accent ? "rgba(240,112,64,0.04)" : "var(--color-bg-card)",
                transition: "border-color 0.3s, background 0.3s",
                position: "relative",
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(240,112,64,0.35)";
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(240,112,64,0.05)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = p.accent ? "rgba(240,112,64,0.3)" : "var(--color-border)";
                  (e.currentTarget as HTMLDivElement).style.background = p.accent ? "rgba(240,112,64,0.04)" : "var(--color-bg-card)";
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.4rem", flexWrap: "wrap", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                    <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "18px", fontWeight: 700, color: "var(--color-fg)" }}>{p.name}</h3>
                    <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent-light)", padding: "2px 8px", border: "0.5px solid rgba(240,112,64,0.3)", borderRadius: "2px" }}>{p.type}</span>
                  </div>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: "11px", color: "var(--accent-light)", letterSpacing: "0.08em", transition: "opacity 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "0.7")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
                <p style={{ fontSize: "14px", fontWeight: 300, lineHeight: 1.7, color: "var(--color-fg-muted)", marginBottom: "1.2rem", marginTop: "0.6rem" }}>{p.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontSize: "10px", padding: "3px 9px", borderRadius: "2px", background: "rgba(240,237,230,0.05)", color: "rgba(240,237,230,0.4)", letterSpacing: "0.05em" }}>{t}</span>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </section>

      {/* ── STACK ── */}
      <section id="stack" style={{ padding: `clamp(4.5rem, 9vw, 6rem) ${horizontalPadding}`, maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>{content.sections.stack.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3rem", color: "var(--color-fg)" }}>
            {content.sections.stack.title}
          </h2>
        </InView>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
          {content.stack.map((s, i) => (
            <InView key={s.category} delay={i * 0.05}>
              <div style={{
                padding: "1.4rem 1.6rem", border: "0.5px solid var(--color-border)",
                borderRadius: "6px", background: "var(--color-bg-card)", transition: "border-color 0.25s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(240,112,64,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--color-border)")}
              >
                <p style={{ fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.8rem" }}>{s.category}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize: "12px", color: "var(--color-fg-muted)", fontWeight: 300 }}>{item}</span>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: `clamp(4.5rem, 9vw, 6rem) ${horizontalPadding}`, maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>{content.sections.about.eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2rem", color: "var(--color-fg)" }}>
            {content.sections.about.title}
          </h2>
          {content.about.paragraphs.map((paragraph, index) => (
            <p key={paragraph} style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8, color: "var(--color-fg-muted)", maxWidth: "620px", marginBottom: index === content.about.paragraphs.length - 1 ? "0" : "1.2rem" }}>
              {paragraph}
            </p>
          ))}
        </InView>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: `clamp(4.5rem, 9vw, 6rem) ${horizontalPadding} clamp(5rem, 10vw, 8rem)`, maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          padding: "clamp(1.25rem, 5vw, 3rem)", border: "0.5px solid rgba(240,112,64,0.2)",
          borderRadius: "8px", background: "rgba(240,112,64,0.04)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem",
        }}>
          <InView>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.6rem" }}>{content.contact.eyebrow}</p>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
              {content.contact.title}
            </h2>
          </InView>
          <InView delay={0.1}>
            <a href={content.contact.ctaHref} style={{
              padding: "12px 28px", background: "var(--accent)", borderRadius: "3px",
              fontSize: "13px", letterSpacing: "0.08em", fontWeight: 500,
              color: "#fff", transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              {content.contact.email}
            </a>
          </InView>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "0.5px solid var(--color-border)", padding: `1.5rem ${horizontalPadding}`,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem", position: "relative", zIndex: 1,
      }}>
        <span style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} {content.footer.copyrightName}
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {content.footer.links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.08em", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg-muted)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-fg-faint)")}
            >{l.label}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}
