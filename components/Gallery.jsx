"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Expand, Camera } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

// Spans are hand-placed so every row sums to exactly 4 columns (sm+) — no gaps.
const PHOTOS = [
  { src: "/images/gallery/annual-day.jpg", label: "Annual Day", span: "sm:col-span-2" },
  { src: "/images/gallery/science-fair.jpg", label: "Science Fair", span: "sm:col-span-1" },
  { src: "/images/gallery/sports-day.jpg", label: "Sports Day", span: "sm:col-span-1" },
  { src: "/images/gallery/classroom.jpg", label: "Classroom Learning", span: "sm:col-span-1" },
  { src: "/images/gallery/cultural-fest.jpg", label: "Cultural Fest", span: "sm:col-span-2" },
  { src: "/images/gallery/graduation.jpg", label: "Graduation Day", span: "sm:col-span-1" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function Gallery() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="gallery" className="relative py-8 sm:py-10 lg:py-14">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Gallery
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Life at Krishna International
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
          className="mt-14 grid grid-cols-2 auto-rows-45 gap-4 sm:grid-cols-4 sm:auto-rows-55 sm:gap-5 lg:mt-16"
        >
          {PHOTOS.map((p) => (
            <motion.div
              key={p.src}
              variants={fadeUp}
              className={`group relative col-span-1 h-full overflow-hidden rounded-2xl border border-navy/10 shadow-sm transition-shadow duration-300 hover:shadow-xl ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.label}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/0 transition-colors duration-300 group-hover:bg-navy/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand className="h-5 w-5 text-white" strokeWidth={1.75} />
                <span className="text-sm font-medium text-white">{p.label}</span>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            className="relative col-span-2 flex h-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-navy p-4 text-center shadow-sm sm:col-span-4"
          >
            <motion.span
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute h-16 w-16 rounded-full border border-dashed border-gold/30"
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <Camera className="h-8 w-8 text-gold" strokeWidth={1.5} />
            </motion.div>
            <div className="relative">
              <p className="font-heading text-xl font-semibold text-white">1,500+</p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-white/60">
                Moments Captured
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
