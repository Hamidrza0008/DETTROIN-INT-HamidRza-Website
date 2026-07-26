"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkle } from "lucide-react";

const SPARKLES = [
  { top: "12vh", left: "6%", size: 14, delay: 0 },
  { top: "78vh", left: "10%", size: 10, delay: 1.4 },
  { top: "22vh", left: "94%", size: 12, delay: 0.8 },
  { top: "60vh", left: "88%", size: 9, delay: 2.2 },
];

export default function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* gold arcs flanking the navbar */}
      <svg className="absolute top-0 left-0 h-28 w-28 text-gold/60 sm:h-36 sm:w-36" viewBox="0 0 120 120" fill="none">
        <path d="M0 60C40 60 60 40 60 0" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute top-0 right-0 h-28 w-28 text-gold/60 sm:h-36 sm:w-36" viewBox="0 0 120 120" fill="none">
        <path d="M120 60C80 60 60 40 60 0" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {/* subtle blue glow — Hero area only */}
      <motion.div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue/10 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -12, 0], y: [0, 8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -left-24 top-[20vh] h-72 w-72 rounded-full bg-blue/8 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 12, 0], y: [0, -8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* faint blueprint grid */}
      <div
        className="absolute right-0 top-[60vh] h-72 w-72 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to top left, black 20%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 75%)",
        }}
      />

      {/* gold arc near the bottom */}
      <svg className="absolute bottom-0 left-0 h-32 w-32 text-gold/25" viewBox="0 0 120 120" fill="none">
        <path d="M0 60C40 60 60 80 60 120" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          className="absolute text-gold"
          style={{ top: s.top, left: s.left }}
          animate={reduceMotion ? undefined : { opacity: [0.15, 0.85, 0.15] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
        >
          <Sparkle size={s.size} fill="currentColor" strokeWidth={0} />
        </motion.span>
      ))}
    </div>
  );
}
