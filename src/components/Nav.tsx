"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

type NavContent = {
  homeHref: string;
  brand: {
    primary: string;
    secondary: string;
    subtitle: string;
  };
  links: Array<{
    label: string;
    href: string;
  }>;
  cta: {
    label: string;
    href: string;
  };
};

export default function Nav({ content }: { content: NavContent }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 860px)");
    const syncLayout = () => setIsMobile(mediaQuery.matches);

    syncLayout();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", syncLayout);
      return () => mediaQuery.removeEventListener("change", syncLayout);
    }

    mediaQuery.addListener(syncLayout);
    return () => mediaQuery.removeListener(syncLayout);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        padding: "clamp(0.9rem, 3vw, 1.5rem) clamp(1rem, 5vw, 2.5rem)", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        backdropFilter: "blur(10px)",
        background: "rgba(8, 8, 8, 0.72)",
        borderBottom: "0.5px solid var(--color-border)",
      }}
    >
      <Link href={content.homeHref} style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
        <span style={{ fontFamily: "var(--font-syne)", fontSize: "13px", fontWeight: 800, letterSpacing: "-0.02em", color: "var(--color-fg)" }}>
          {content.brand.primary}<span style={{ color: "var(--color-fg-faint)" }}>{content.brand.secondary}</span>
        </span>
        <span style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--accent-light)", fontWeight: 400 }}>
          {content.brand.subtitle}
        </span>
      </Link>

      {isMobile ? (
        <div style={{ position: "relative" }}>
          <button
            type="button"
            onClick={() => setMenuOpen(prev => !prev)}
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "7px 12px",
              border: "0.5px solid var(--accent)",
              borderRadius: "3px",
              color: "var(--accent-light)",
              background: menuOpen ? "var(--accent-glow)" : "transparent",
            }}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>

          {menuOpen && (
            <nav
              style={{
                position: "absolute",
                top: "calc(100% + 10px)",
                right: 0,
                minWidth: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "0.9rem",
                padding: "0.9rem",
                border: "0.5px solid var(--color-border-hover)",
                borderRadius: "6px",
                background: "rgba(12, 12, 12, 0.95)",
              }}
            >
              {content.links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-fg-muted)", fontWeight: 300 }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={content.cta.href}
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  padding: "7px 12px",
                  border: "0.5px solid var(--accent)",
                  borderRadius: "3px",
                  color: "var(--accent-light)",
                }}
              >
                {content.cta.label}
              </a>
            </nav>
          )}
        </div>
      ) : (
        <nav style={{ display: "flex", gap: "clamp(1rem, 2vw, 2rem)", alignItems: "center" }}>
          {content.links.map(l => (
            <a key={l.label} href={l.href} style={{ fontSize: "12px", letterSpacing: "0.08em", color: "var(--color-fg-muted)", fontWeight: 300, transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-fg)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-fg-muted)")}
            >{l.label}</a>
          ))}
          <a href={content.cta.href} style={{
            fontSize: "11px", letterSpacing: "0.1em", padding: "6px 14px",
            border: "0.5px solid var(--accent)", borderRadius: "3px",
            color: "var(--accent-light)", fontWeight: 400, transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-glow)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            {content.cta.label}
          </a>
        </nav>
      )}
    </motion.header>
  );
}
