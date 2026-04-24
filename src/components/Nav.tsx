"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        padding: "1.5rem 2.5rem", display: "flex",
        alignItems: "center", justifyContent: "space-between",
      }}
    >
      <Link href="https://kolawoles.com" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{ fontFamily: "var(--font-syne)", fontSize: "13px", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
          KOLA<span style={{ color: "var(--color-fg-faint)" }}>WOLES</span>
        </span>
        <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent-light)", fontWeight: 400 }}>
          App Dev
        </span>
      </Link>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map(l => (
          <a key={l.label} href={l.href} style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-fg-muted)", fontWeight: 300, transition: "color 0.2s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-fg-muted)")}
          >{l.label}</a>
        ))}
        <a href="mailto:adefemi@kolawoles.com" style={{
          fontSize: "11px", letterSpacing: "0.1em", padding: "6px 14px",
          border: "0.5px solid var(--accent)", borderRadius: "3px",
          color: "var(--accent-light)", fontWeight: 400, transition: "background 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-glow)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
