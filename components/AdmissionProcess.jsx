"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  MessageCircleMore,
  MapPin,
  FileText,
  BrainCircuit,
  CheckCircle2,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const STEPS = [
  {
    icon: MessageCircleMore,
    title: "Inquiry",
    desc: "Reach out to our admissions desk online or by phone to start the conversation.",
  },
  {
    icon: MapPin,
    title: "Campus Visit",
    desc: "Tour the campus, meet our faculty and see classrooms in session firsthand.",
  },
  {
    icon: FileText,
    title: "Application",
    desc: "Submit the admission form along with the required documents.",
  },
  {
    icon: BrainCircuit,
    title: "Assessment",
    desc: "A friendly grade-appropriate interaction to understand the child's readiness.",
  },
  {
    icon: CheckCircle2,
    title: "Admission Confirmed",
    desc: "Receive your offer letter and welcome kit — you're officially part of K.I.S.",
  },
];

function StepText({ step, index, align, isActive }) {
  return (
    <div className={`relative ${align === "right" ? "text-right" : "text-left"}`}>
      <span
        className={`pointer-events-none absolute select-none font-heading text-7xl font-bold transition-colors duration-500 ${
          align === "right" ? "-right-2 -top-6" : "-left-2 -top-6"
        } ${isActive ? "text-gold/10" : "text-navy/5"}`}
      >
        0{index + 1}
      </span>
      <span
        className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 ${
          isActive ? "scale-105 bg-gold text-primary" : "bg-navy text-white"
        }`}
      >
        <step.icon className="h-7 w-7" strokeWidth={1.5} />
      </span>
      <h3
        className={`relative mt-4 text-lg font-semibold transition-colors duration-500 ${
          isActive ? "text-gold" : "text-navy"
        }`}
      >
        {step.title}
      </h3>
      <p className="relative mt-2 max-w-xs text-sm leading-relaxed text-ink/65">{step.desc}</p>
    </div>
  );
}

export default function AdmissionProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.3"],
  });
  const [active, setActive] = useState(-1);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.floor(v * STEPS.length);
    setActive(Math.min(STEPS.length - 1, Math.max(-1, idx)));
  });

  return (
    <section id="admissions" className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue/15 blur-3xl"
        animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 -z-10 h-72 w-72 rounded-full bg-blue/10 blur-3xl"
        animate={{ x: [0, -12, 0], y: [0, 8, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Admissions
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Five Simple Steps to Join Us
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-5 block h-0.5 w-16 origin-center rounded-full bg-gold"
          />
        </motion.div>

        {/* Desktop: vertical zigzag with scroll progress */}
        <div ref={containerRef} className="relative mt-20 hidden lg:block">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-navy/10" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-1/2 top-0 bottom-0 w-px origin-top -translate-x-1/2 bg-gold"
          />

          <div className="space-y-16">
            {STEPS.map((step, i) => {
              const textLeft = i % 2 === 0;
              const isActive = active >= i;
              return (
                <div key={step.title} className="relative grid grid-cols-2 items-center gap-16">
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
                        <StepText step={step} index={i} align="right" isActive={isActive} />
                      </div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="pl-8">
                        <StepText step={step} index={i} align="left" isActive={isActive} />
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / tablet: vertical stepper with scroll progress */}
        <div className="relative mt-14 space-y-10 lg:hidden">
          <div className="absolute bottom-0 left-[1.35rem] top-2 w-px bg-navy/10" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: EASE }}
            className="absolute bottom-0 left-[1.35rem] top-2 w-px origin-top bg-gold"
          />
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
              className="relative flex gap-5"
            >
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy text-white shadow-sm">
                <step.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-navy">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink/65">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
