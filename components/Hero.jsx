"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Users,
  BarChart3,
  CalendarDays,
  GraduationCap,
  Sparkle,
  ArrowRight,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const BADGES = ["CBSE Affiliated", "Smart Classrooms", "95% Board Results"];

const SPARKLES = [
  { top: "12%", left: "6%", size: 14, delay: 0 },
  { top: "78%", left: "10%", size: 10, delay: 1.4 },
  { top: "22%", left: "94%", size: 12, delay: 0.8 },
  { top: "60%", left: "88%", size: 9, delay: 2.2 },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-background pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute -bottom-32 -left-24 h-104 w-104 rounded-full bg-blue/20 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -14, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-blue/15 blur-3xl"
          animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div
          className="absolute bottom-0 right-0 h-72 w-72 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(37,99,235,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(37,99,235,0.14) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to top left, black 20%, transparent 75%)",
            WebkitMaskImage: "linear-gradient(to top left, black 20%, transparent 75%)",
          }}
        />

        <svg
          className="absolute top-0 left-0 h-28 w-28 text-gold/60 sm:h-36 sm:w-36"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path d="M0 60C40 60 60 40 60 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <svg
          className="absolute top-0 right-0 h-28 w-28 text-gold/60 sm:h-36 sm:w-36"
          viewBox="0 0 120 120"
          fill="none"
        >
          <path d="M120 60C80 60 60 40 60 0" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        {SPARKLES.map((s, i) => (
          <motion.span
            key={i}
            className="absolute text-gold"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0.15, 0.85, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          >
            <Sparkle size={s.size} fill="currentColor" strokeWidth={0} />
          </motion.span>
        ))}
      </div>

      <div className="site-container relative z-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 xl:grid-cols-[1fr_1.35fr] xl:gap-20">
        <div className="order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="text-4xl font-bold leading-[1.15] text-navy sm:text-5xl lg:text-6xl xl:text-[3.75rem]"
          >
            Where Excellence
            <br />
            Meets Future
            <br />
            Innovation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70"
          >
            Empowering students through academic excellence, innovation, leadership and holistic
            development in a world-class learning environment.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.5 } } }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <motion.a
              href="#admissions"
              variants={fadeUp}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_16px_32px_-12px_rgba(15,23,42,0.55)] transition-shadow duration-300 hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.6)]"
            >
              Apply for Admission
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
            <motion.a
              href="#campus"
              variants={fadeUp}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              className="inline-flex items-center justify-center rounded-full border border-navy/15 bg-white px-8 py-4 text-sm font-semibold tracking-wide text-navy transition-colors duration-300 hover:border-gold/40 hover:bg-navy/5"
            >
              Virtual Campus Tour
            </motion.a>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.9 } } }}
            className="mt-5 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"
          >
            {BADGES.map((badge, i) => (
              <motion.span
                key={badge}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                className={`inline-flex items-center justify-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm transition-shadow duration-300 hover:shadow-md ${
                  i === BADGES.length - 1 ? "col-span-2 justify-self-center sm:col-span-1" : ""
                }`}
              >
                <CheckCircle2 className="h-4 w-4 text-blue" strokeWidth={2} />
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
          className="order-1 relative mx-auto w-full max-w-xl lg:order-2 lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-navy/10 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)] sm:aspect-video sm:rounded-4xl"
          >
            <Image
              src="/images/hero/school.png"
              alt="Krishna International School campus building with students"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <StatCard
            icon={Users}
            value="1500+"
            label="Students"
            delay={0.6}
            className="-top-3 left-1 sm:-left-6 sm:-top-6"
          />
          <StatCard
            icon={BarChart3}
            value="95%"
            label="Board Results"
            delay={0.8}
            className="-top-3 right-1 sm:-right-6 sm:-top-6"
          />
          <StatCard
            icon={CalendarDays}
            value="25+"
            label="Years"
            delay={1.0}
            className="-bottom-3 left-1 sm:-left-6 sm:-bottom-6"
          />
          <StatCard
            icon={GraduationCap}
            value="100%"
            label="University Placements"
            delay={1.2}
            className="-bottom-3 right-1 sm:-right-6 sm:-bottom-6"
          />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, value, label, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={`absolute z-20 max-w-30 sm:max-w-none ${className}`}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
        whileHover={{ scale: 1.05, y: -4 }}
        className="flex items-center gap-1.5 rounded-xl border border-white/60 bg-white/25 px-2 py-1.5 shadow-[0_12px_30px_-16px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-shadow duration-300 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.5)] sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 sm:shadow-[0_20px_45px_-20px_rgba(15,23,42,0.4)]"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/40 text-navy sm:h-10 sm:w-10">
          <Icon className="h-3 w-3 sm:h-5 sm:w-5" strokeWidth={1.75} />
        </span>
        <span className="flex flex-col leading-tight">
          <span className="font-heading text-xs font-semibold text-navy sm:text-xl">
            {value}
          </span>
          <span className="max-w-18 text-[9px] font-medium leading-snug text-navy/60 sm:max-w-28 sm:text-xs">
            {label}
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
}
