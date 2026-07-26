"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Monitor,
  HeartHandshake,
  ShieldCheck,
  Building2,
  Users,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    desc: "Qualified, dedicated educators who mentor every child with genuine care and expertise.",
    image: "/images/why-us/faculty.jpg",
  },
  {
    icon: Monitor,
    title: "Smart Classrooms",
    desc: "Digital, interactive learning spaces that make lessons engaging and effective.",
    image: "/images/why-us/smart-classroom.jpg",
  },
  {
    icon: HeartHandshake,
    title: "Holistic Development",
    desc: "A balance of academics, sports, arts and values that shapes well-rounded individuals.",
    image: "/images/why-us/holistic.jpg",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Campus",
    desc: "CCTV-monitored, well-fenced premises with trained staff ensuring student safety.",
    image: "/images/why-us/safe-campus.jpg",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    desc: "Spacious classrooms, labs and play areas designed for comfort and discovery.",
    image: "/images/why-us/infrastructure.jpg",
  },
  {
    icon: Users,
    title: "Individual Attention",
    desc: "Small batch sizes and regular counselling keep every student seen and supported.",
    image: "/images/why-us/individual-attention.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden py-8 sm:py-10 lg:py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 -z-10 h-64 w-64 rounded-full bg-blue/5 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-blue/10 blur-3xl"
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
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            What Sets Us Apart
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-5 block h-0.5 w-16 origin-center rounded-full bg-gold"
          />
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
            Everything at Krishna International School is built around one goal — helping
            every child excel academically while growing into a confident, responsible
            individual.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6"
        >
          {FEATURES.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative isolate aspect-4/3 overflow-hidden rounded-2xl border border-navy/10 shadow-sm transition-all duration-300 hover:shadow-xl sm:aspect-video lg:aspect-4/3"
            >
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/90 via-navy/50 to-navy/10 transition-colors duration-300 group-hover:from-navy/95" />

              <div className="relative flex h-full flex-col p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-gold group-hover:text-primary">
                  <f.icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="mt-auto">
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
