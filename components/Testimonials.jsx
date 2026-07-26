"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const TESTIMONIALS = [
  {
    name: "Anita Sharma",
    role: "Parent, Grade 5",
    avatar: "https://i.pravatar.cc/150?img=47",
    quote:
      "The individual attention my daughter gets here is remarkable. Her teachers know her strengths and work on her weaknesses without ever making her feel behind.",
  },
  {
    name: "Rohan Verma",
    role: "Student, Grade 10",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "Smart classrooms make even the toughest topics easy to follow. I've also gotten to try robotics and debate — things I never thought I'd enjoy.",
  },
  {
    name: "Priya Malhotra",
    role: "Parent, Grade 2",
    avatar: "https://i.pravatar.cc/150?img=32",
    quote:
      "Safety was our biggest concern moving to a new city. The campus security and the warmth of the staff put us completely at ease from day one.",
  },
  {
    name: "Aditya Singh",
    role: "Alumnus, Batch of 2023",
    avatar: "https://i.pravatar.cc/150?img=58",
    quote:
      "K.I.S. didn't just prepare me for boards — it shaped how I think and lead. I still carry the discipline and confidence I built here into college.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue/15 blur-3xl"
        animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue/10 blur-3xl"
        animate={{ x: [0, 14, 0], y: [0, -8, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Voices From Our Community
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
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mt-16"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-navy/10 bg-white pb-7 pt-12 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-xl"
            >
              <Quote
                className="absolute right-5 top-5 h-10 w-10 text-navy/5 transition-colors duration-300 group-hover:text-gold/15"
                strokeWidth={1.5}
                fill="currentColor"
              />

              <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-background shadow-md">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="px-7 text-center">
                <div className="flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" strokeWidth={0} />
                  ))}
                </div>
                <p className="relative mt-4 text-[15px] leading-relaxed text-ink/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-5 font-heading text-base font-semibold text-navy">{t.name}</p>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gold">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
