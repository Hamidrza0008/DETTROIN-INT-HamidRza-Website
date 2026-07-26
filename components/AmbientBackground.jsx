"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkle } from "lucide-react";

const SPARKLES = [
  { top: "12vh", left: "6%", size: 14, delay: 0 },
  { top: "78vh", left: "10%", size: 10, delay: 1.4 },
  { top: "22vh", left: "94%", size: 12, delay: 0.8 },
  { top: "60vh", left: "88%", size: 9, delay: 2.2 },
  { top: "120vh", left: "5%", size: 11, delay: 1.0 },
  { top: "180vh", left: "92%", size: 13, delay: 1.8 },
  { top: "250vh", left: "8%", size: 10, delay: 0.5 },
  { top: "320vh", left: "90%", size: 12, delay: 2.5 },
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

      {/* blue glows — spread across full page height for continuous premium feel */}
      <motion.div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue/20 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute -left-24 top-[20vh] h-96 w-96 rounded-full bg-blue/20 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 20, 0], y: [0, -14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-24 top-[55vh] h-96 w-96 rounded-full bg-blue/[0.18] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -15, 0], y: [0, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute -left-24 top-[105vh] h-80 w-80 rounded-full bg-blue/[0.18] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute -right-24 top-[170vh] h-96 w-96 rounded-full bg-blue/[0.18] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -20, 0], y: [0, 14, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      <motion.div
        className="absolute -left-24 top-[250vh] h-80 w-80 rounded-full bg-blue/[0.18] blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, 16, 0], y: [0, -10, 0] }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute -right-24 top-[330vh] h-96 w-96 rounded-full bg-blue/20 blur-3xl"
        animate={reduceMotion ? undefined : { x: [0, -14, 0], y: [0, 18, 0] }}
        transition={{ duration: 27, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      />

      {/* faint blueprint grid — upper */}
      <div
        className="absolute right-0 top-[60vh] h-72 w-72 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.14) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to top left, black 20%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 75%)",
        }}
      />

      {/* faint blueprint grid — lower */}
      <div
        className="absolute left-0 top-[200vh] h-72 w-72 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(37,99,235,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.14) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom right, black 20%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(to bottom right, black 20%, transparent 75%)",
        }}
      />

      {/* gold arcs */}
      <svg className="absolute bottom-0 left-0 h-32 w-32 text-gold/25" viewBox="0 0 120 120" fill="none">
        <path d="M0 60C40 60 60 80 60 120" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute top-[150vh] right-0 h-24 w-24 text-gold/20" viewBox="0 0 120 120" fill="none">
        <path d="M120 60C80 60 60 80 60 120" stroke="currentColor" strokeWidth="1.5" />
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
