"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  PartyPopper,
  ClipboardCheck,
  Leaf,
  Sparkles,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const ACHIEVEMENTS = [
  { icon: Trophy, year: "2025", title: "National Science Olympiad Champions" },
  { icon: Medal, year: "2024", title: "State-Level Sports Championship" },
  { icon: Award, year: "2024", title: "Best CBSE School — Aligarh Region" },
  { icon: PartyPopper, year: "2023", title: "Inter-School Cultural Fest Winners" },
  { icon: ClipboardCheck, year: "2023", title: "100% Board Result Excellence" },
  { icon: Leaf, year: "2022", title: "Green Campus Recognition" },
];

const SPARKLE_DOTS = [
  { top: "8%", left: "4%", size: 12, delay: 0 },
  { top: "85%", left: "8%", size: 9, delay: 1.2 },
  { top: "15%", left: "95%", size: 10, delay: 0.6 },
  { top: "75%", left: "92%", size: 13, delay: 2 },
];

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {SPARKLE_DOTS.map((s, i) => (
          <motion.span
            key={i}
            className="absolute text-gold"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0.15, 0.8, 0.15], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          >
            <Sparkles size={s.size} strokeWidth={1.5} />
          </motion.span>
        ))}
      </div>

      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Achievements
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Milestones We&apos;re Proud Of
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-5 block h-0.5 w-16 origin-center rounded-full bg-gold"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3"
        >
          {ACHIEVEMENTS.map((a) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-navy/10 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-2xl hover:shadow-gold/10"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-linear-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

              <div
                className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold shadow-lg shadow-gold/30 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[8deg]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.55), transparent 60%)",
                }}
              >
                <a.icon className="h-9 w-9 text-primary" strokeWidth={1.5} />
              </div>

              <p className="relative mt-5 text-xs font-semibold uppercase tracking-wide text-navy/40">
                {a.year}
              </p>
              <h3 className="relative mt-1 text-lg font-semibold leading-snug text-navy">
                {a.title}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative mt-14 overflow-hidden rounded-3xl bg-navy px-8 py-10 text-center shadow-lg sm:px-14 lg:mt-16"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 20%, rgba(201,162,39,0.25), transparent 55%), radial-gradient(circle at 85% 80%, rgba(201,162,39,0.2), transparent 55%)",
            }}
          />
          <p className="relative font-heading text-4xl font-bold text-gold sm:text-5xl">
            <Counter value={60} suffix="+" />
          </p>
          <p className="relative mt-2 text-sm font-medium uppercase tracking-wide text-white/70">
            National &amp; International Awards and Counting
          </p>
        </motion.div>
      </div>
    </section>
  );
}
