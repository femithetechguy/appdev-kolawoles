"use client";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mx = useMotionValue(-100), my = useMotionValue(-100);
  const x = useSpring(mx, { damping: 28, stiffness: 300 });
  const y = useSpring(my, { damping: 28, stiffness: 300 });
  const tx = useSpring(mx, { damping: 40, stiffness: 150 });
  const ty = useSpring(my, { damping: 40, stiffness: 150 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  return (
    <>
      <motion.div style={{ x: tx, y: ty }} className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <motion.div style={{ x, y }} className="pointer-events-none fixed top-0 left-0 z-50 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70" />
    </>
  );
}
