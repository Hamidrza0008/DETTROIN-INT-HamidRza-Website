"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Users, Award, Heart, ShieldCheck } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const STATS = [
  { icon: Users, value: 6000, suffix: "+", label: "Students & Faculties" },
  { icon: Award, value: 60, suffix: "+", label: "National & International Awards" },
  { icon: Heart, value: 100, suffix: "%", label: "Parents Satisfaction" },
  { icon: ShieldCheck, display: "CBSE", label: "Affiliated School" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
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
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function AboutImage({ src, alt, badge, reverse = false, aspectClass = "aspect-4/3 sm:aspect-video lg:aspect-4/5" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 32 : -32, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: EASE }}
      className={`relative order-1 mx-auto w-full max-w-xl lg:max-w-none ${
        reverse ? "lg:order-2" : "lg:order-1"
      }`}
    >
      <div className={`group relative w-full overflow-hidden rounded-4xl border border-navy/10 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.35)] ${aspectClass}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-navy/20 via-transparent to-transparent" />
      </div>

      <span className="pointer-events-none absolute -top-3 -left-3 h-10 w-10 rounded-tl-2xl border-t-2 border-l-2 border-gold/70" />
      <span className="pointer-events-none absolute -bottom-3 -right-3 h-10 w-10 rounded-br-2xl border-r-2 border-b-2 border-gold/70" />

      {badge && (
        <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/60 bg-white/70 px-5 py-4 shadow-lg backdrop-blur-xl sm:block">
          <p className="font-heading text-2xl font-semibold text-navy">{badge.value}</p>
          <p className="text-xs font-medium text-navy/60">{badge.label}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="relative py-8 sm:py-10 lg:py-14"
    >
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Dedicated to Excellence
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-5 block h-0.5 w-16 origin-center rounded-full bg-gold"
          />
        </motion.div>

        {/* Row 1: image left, text right */}
        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:mt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <AboutImage
            src="/images/about/campus.jpg"
            alt="Krishna International School campus building"
            badge={{ value: "5 Acres", label: "Green, Pollution-Free Campus" }}
            aspectClass="aspect-video"
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="order-2 space-y-4"
          >
            <motion.p
              variants={fadeUp}
              className="text-[15px] leading-relaxed text-ink/70 first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-6xl first-letter:font-bold first-letter:leading-[0.8] first-letter:text-navy"
            >
              Amongst the best CBSE schools in Aligarh, the school is set amidst 5 acres of
              land, away from the city&apos;s pollution. The school provides an ideal
              environment for academic and co-curricular excellence. The school has all
              facilities required for the overall development of children — an equipped
              library, theatre, science laboratories and sports for students, so they excel
              in academics and enhance their co-curricular skills and talents.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[15px] leading-relaxed text-ink/70">
              The school is committed to the cause of promoting sound moral values,
              encouraging a scientific temperament and developing the overall personality of
              its students. Regular counselling of students gives them an insight into the
              competitive world ahead and encourages students to build a healthy spirit of
              competition.
            </motion.p>
          </motion.div>
        </div>

        {/* Row 2: text left, image right (zigzag) */}
        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:mt-24 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
            className="order-2 lg:order-1"
          >
            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-gold pl-5 font-heading text-lg italic leading-relaxed text-navy/80 sm:text-xl"
            >
              &ldquo;Dedicated to Excellence&rdquo; — under the canopy of this motto, the
              staff and management of K.I.S. endeavour that students not only excel in
              academics but are given opportunities in different fields besides academics.
            </motion.blockquote>
            <motion.p variants={fadeUp} className="mt-5 text-[15px] leading-relaxed text-ink/70">
              K.I.S. also imbues them with social awareness, pride in their rich cultural
              heritage and a sense of responsibility towards the nation.
            </motion.p>
          </motion.div>

          <AboutImage
            reverse
            src="/images/about/campus2.jpg"
            alt="Krishna International School students and facilities"
            aspectClass="aspect-video"
          />
        </div>

        {/* Stats band */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:mt-24 lg:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="group flex h-full flex-col rounded-2xl border border-navy/10 bg-white px-4 py-5 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy transition-colors duration-300 group-hover:bg-gold/10 group-hover:text-gold">
                <stat.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <p className="mt-3 font-heading text-2xl font-semibold text-navy sm:text-3xl">
                {stat.value != null ? (
                  <Counter value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </p>
              <p className="mt-1 text-xs font-medium leading-snug text-ink/60 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
