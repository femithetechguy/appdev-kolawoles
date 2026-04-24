"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";

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

// ── data ────────────────────────────────────────────────────
const projects = [
  {
    name: "majorsegun.com",
    type: "Memorial Site",
    period: "2024 – Present",
    description:
      "A memorial site for a Nigerian Army officer who died in service. Built with a React + Vite + TypeScript frontend and NestJS + Prisma + PostgreSQL backend. Cloudinary for media hosting, Resend for email. Admin portal for managing tributes and media.",
    tags: ["React", "Vite", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Cloudinary", "Resend"],
    live: "https://majorsegun.com",
    accent: true,
  },
  {
    name: "HBGI Provider Portal",
    type: "Internal Web App",
    period: "2024",
    description:
      "Internal reporting portal surfacing Power BI Embedded dashboards for 20 behavioral health providers. Secure provider-scoped access with RLS, built on Next.js with Azure AD authentication.",
    tags: ["Next.js", "Power BI Embedded", "Azure AD", "TypeScript", "React"],
  },
  {
    name: "admin.kolawoles.com",
    type: "Admin Dashboard",
    period: "2024",
    description:
      "Personal admin hub migrated from static HTML to a full NestJS + React + PostgreSQL stack. Five top-level sections managing content, projects, and site operations across the kolawoles.com ecosystem.",
    tags: ["NestJS", "React", "PostgreSQL", "TypeScript", "Node.js"],
  },
  {
    name: "Grill & Glam",
    type: "E-Commerce",
    period: "2024",
    description:
      "E-commerce food brand focused on suya kebabs and grilled foods. Landing page with brand identity, ordering flow, and product showcase. Built for conversion with a bold visual identity.",
    tags: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
  },
  {
    name: "Worship Presentation System",
    type: "Internal Tool",
    period: "2023 – 2024",
    description:
      "Automated system for formatting song lyrics into structured JSON and generating branded PPTX files for worship services. Covers hymnal, Nigerian gospel, and Pidgin English content.",
    tags: ["Python", "python-pptx", "JSON", "Automation"],
  },
];

const stack = [
  { category: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"] },
  { category: "Backend", items: ["NestJS", "Node.js", "Express", "Prisma", "REST", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "Neon", "Supabase", "Redis"] },
  { category: "Auth & Services", items: ["Azure AD", "NextAuth", "Resend", "Cloudinary", "Stripe"] },
  { category: "DevOps", items: ["Vercel", "Docker", "GitHub Actions", "CI/CD"] },
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
];

// ── page ────────────────────────────────────────────────────
export default function AppDevPage() {
  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh", position: "relative" }}>
      <Cursor />
      <Nav />

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
        padding: "0 2.5rem", maxWidth: "900px", margin: "0 auto",
        position: "relative", zIndex: 1,
      }}>
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--accent-light)", marginBottom: "1.5rem", fontWeight: 400,
        }}>
          Full-Stack Engineering · FTTG Solutions LLC
        </motion.p>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "var(--font-syne)", fontSize: "clamp(44px, 7vw, 80px)",
          fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em",
          color: "var(--color-fg)", marginBottom: "1.8rem",
        }}>
          Products built<br />
          <span style={{ color: "var(--accent-light)" }}>with intent.</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} style={{
          fontSize: "16px", fontWeight: 300, lineHeight: 1.7,
          color: "var(--color-fg-muted)", maxWidth: "520px", marginBottom: "3rem",
        }}>
          Full-stack engineer building production web applications with modern
          TypeScript tooling. From data-driven internal tools to consumer-facing
          products — clean architecture, thoughtful UX, shipped to prod.
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
            View Projects
          </a>
          <a href="mailto:adefemi@kolawoles.com" style={{
            padding: "10px 24px", border: "0.5px solid var(--color-border-hover)",
            borderRadius: "3px", fontSize: "12px", letterSpacing: "0.08em",
            fontWeight: 400, color: "var(--color-fg-muted)", transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--color-fg)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border-hover)"; e.currentTarget.style.color = "var(--color-fg-muted)"; }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "2.5rem", display: "flex", alignItems: "center", gap: "10px" }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--accent), transparent)" }} />
          <span style={{ fontSize: "10px", letterSpacing: "0.15em", color: "var(--color-fg-faint)", textTransform: "uppercase" }}>Scroll</span>
        </motion.div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "8rem 2.5rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>Selected Projects</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3.5rem", color: "var(--color-fg)" }}>
            What I've Built
          </h2>
        </InView>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {projects.map((p, i) => (
            <InView key={p.name} delay={i * 0.07}>
              <div style={{
                padding: "2rem 2.2rem",
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
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.05em" }}>{p.period}</span>
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
      <section id="stack" style={{ padding: "6rem 2.5rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>Technical Depth</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "3rem", color: "var(--color-fg)" }}>
            Stack
          </h2>
        </InView>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "12px" }}>
          {stack.map((s, i) => (
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
      <section id="about" style={{ padding: "6rem 2.5rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <InView>
          <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.75rem" }}>Background</p>
          <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "2rem", color: "var(--color-fg)" }}>
            About
          </h2>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8, color: "var(--color-fg-muted)", maxWidth: "620px", marginBottom: "1.2rem" }}>
            Senior engineer based in McDonough, Georgia, operating through FTTG Solutions LLC.
            I build full-stack applications with a strong bias toward TypeScript, clean APIs,
            and thoughtful developer experience.
          </p>
          <p style={{ fontSize: "16px", fontWeight: 300, lineHeight: 1.8, color: "var(--color-fg-muted)", maxWidth: "620px" }}>
            My engineering work sits alongside deep BI consulting expertise — which means
            I build apps that understand data: how it flows, how it's shaped, and how to
            surface it in ways that actually help people make decisions.
          </p>
        </InView>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "6rem 2.5rem 8rem", maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{
          padding: "3rem", border: "0.5px solid rgba(240,112,64,0.2)",
          borderRadius: "8px", background: "rgba(240,112,64,0.04)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem",
        }}>
          <InView>
            <p style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent-light)", marginBottom: "0.6rem" }}>Open to Projects</p>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
              Let's build something.
            </h2>
          </InView>
          <InView delay={0.1}>
            <a href="mailto:adefemi@kolawoles.com" style={{
              padding: "12px 28px", background: "var(--accent)", borderRadius: "3px",
              fontSize: "13px", letterSpacing: "0.08em", fontWeight: 500,
              color: "#fff", transition: "opacity 0.2s", whiteSpace: "nowrap",
            }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              adefemi@kolawoles.com
            </a>
          </InView>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: "0.5px solid var(--color-border)", padding: "1.5rem 2.5rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: "1rem", position: "relative", zIndex: 1,
      }}>
        <span style={{ fontSize: "11px", color: "var(--color-fg-faint)", letterSpacing: "0.08em" }}>
          © {new Date().getFullYear()} FTTG Solutions LLC
        </span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "Hub", href: "https://kolawoles.com" },
            { label: "Data", href: "https://data.kolawoles.com" },
          ].map(l => (
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
