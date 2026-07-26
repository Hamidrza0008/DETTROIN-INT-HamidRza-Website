"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Sprout, BookOpen, PenTool, GraduationCap } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const STAGES = [
  {
    icon: Sprout,
    grade: "Nursery – UKG",
    title: "Pre-Primary",
    desc: "Play-based learning that builds curiosity, motor skills and a love for school.",
  },
  {
    icon: BookOpen,
    grade: "Grade 1 – 5",
    title: "Primary",
    desc: "Strong foundations in language, math and science through activity-led teaching.",
  },
  {
    icon: PenTool,
    grade: "Grade 6 – 10",
    title: "Middle School",
    desc: "Building analytical thinking and discipline ahead of board-level academics.",
  },
  {
    icon: GraduationCap,
    grade: "Grade 11 – 12",
    title: "Senior Secondary",
    desc: "Science, Commerce and Humanities streams guided by subject specialists.",
  },
];

function useScrollProgress(containerRef) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });
  const [active, setActive] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.floor(v * STAGES.length);
    setActive(Math.min(STAGES.length - 1, Math.max(-1, idx)));
  });
  return { scrollYProgress, active };
}

function DecorativeIcon({ icon: Icon, index, isActive }) {
  return (
    <div
      className={`relative mx-auto flex h-32 w-32 items-center justify-center rounded-full transition-colors duration-500 ${
        isActive ? "bg-gold/10" : "bg-navy/5"
      }`}
    >
      <span
        className={`absolute inset-0 rounded-full border border-dashed transition-colors duration-500 ${
          isActive ? "border-gold/40" : "border-navy/15"
        }`}
      />
      <Icon
        className={`h-12 w-12 transition-colors duration-500 ${
          isActive ? "text-gold" : "text-navy"
        }`}
        strokeWidth={1.25}
      />
      <span
        className={`absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 font-heading text-sm font-bold shadow-sm transition-colors duration-500 ${
          isActive ? "border-gold bg-gold text-primary" : "border-gold bg-background text-navy"
        }`}
      >
        0{index + 1}
      </span>
    </div>
  );
}

function StageText({ stage, align, isActive }) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <p className="text-xs font-semibold uppercase tracking-wide text-gold">{stage.grade}</p>
      <h3
        className={`mt-1 font-heading text-2xl font-semibold transition-colors duration-500 ${
          isActive ? "text-gold" : "text-navy"
        }`}
      >
        {stage.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/65">{stage.desc}</p>
    </div>
  );
}

export default function Academics() {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);
  const desktop = useScrollProgress(desktopRef);
  const mobile = useScrollProgress(mobileRef);

  return (
    <section id="academics" className="relative py-8 sm:py-10 lg:py-14">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Academics
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            A Journey Through Every Stage
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-5 block h-0.5 w-16 origin-center rounded-full bg-gold"
          />
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
            A CBSE-affiliated curriculum that grows with every child — from first steps in
            the classroom to board exam success.
          </p>
        </motion.div>

        {/* Desktop: centered vertical timeline, fills in as you scroll */}
        <div ref={desktopRef} className="relative mt-20 hidden lg:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-navy/10" />
          <motion.div
            style={{ scaleY: desktop.scrollYProgress }}
            className="absolute left-1/2 top-0 bottom-0 w-px origin-top -translate-x-1/2 bg-gold"
          />

          <div className="space-y-20">
            {STAGES.map((stage, i) => {
              const textLeft = i % 2 === 0;
              const isActive = desktop.active >= i;
              return (
                <div key={stage.title} className="relative grid grid-cols-2 items-center gap-16">
                  <span
                    className={`absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 shadow-sm transition-all duration-500 ${
                      isActive
                        ? "scale-125 border-gold bg-gold shadow-[0_0_0_6px] shadow-gold/20"
                        : "border-gold bg-background"
                    }`}
                  />
                  {textLeft ? (
                    <>
                      <div className="pr-8">
                        <StageText stage={stage} align="right" isActive={isActive} />
                      </div>
                      <div className="pl-8">
                        <DecorativeIcon icon={stage.icon} index={i} isActive={isActive} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="pr-8">
                        <DecorativeIcon icon={stage.icon} index={i} isActive={isActive} />
                      </div>
                      <div className="pl-8">
                        <StageText stage={stage} align="left" isActive={isActive} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical stepper, fills in as you scroll */}
        <div ref={mobileRef} className="relative mt-14 space-y-10 lg:hidden">
          <div className="absolute bottom-0 left-[1.35rem] top-2 w-px bg-navy/10" />
          <motion.div
            style={{ scaleY: mobile.scrollYProgress }}
            className="absolute bottom-0 left-[1.35rem] top-2 w-px origin-top bg-gold"
          />
          {STAGES.map((stage, i) => {
            const isActive = mobile.active >= i;
            return (
              <div key={stage.title} className="relative flex gap-5">
                <span
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 font-heading text-sm font-bold transition-all duration-500 ${
                    isActive
                      ? "scale-110 border-gold bg-gold text-primary shadow-[0_0_0_6px] shadow-gold/20"
                      : "border-gold bg-background text-navy"
                  }`}
                >
                  0{i + 1}
                </span>
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <stage.icon
                      className={`h-4 w-4 transition-colors duration-500 ${
                        isActive ? "text-gold" : "text-navy"
                      }`}
                      strokeWidth={1.75}
                    />
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {stage.grade}
                    </p>
                  </div>
                  <h3
                    className={`mt-1 font-heading text-lg font-semibold transition-colors duration-500 ${
                      isActive ? "text-gold" : "text-navy"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{stage.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
