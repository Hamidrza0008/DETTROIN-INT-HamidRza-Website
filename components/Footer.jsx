"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Share2, Camera, Play, ArrowRight } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Academics", href: "/#academics" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Contact", href: "/#contact" },
];

const SOCIALS = [
  { icon: Share2, label: "Facebook", href: "https://facebook.com" },
  { icon: Camera, label: "Instagram", href: "https://instagram.com" },
  { icon: Play, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 10%, rgba(201,162,39,0.12), transparent 50%), radial-gradient(circle at 90% 90%, rgba(37,99,235,0.12), transparent 50%)",
        }}
      />

      <div className="site-container relative py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo/logo.png"
                alt="Krishna International School"
                width={64}
                height={71}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Amongst the best CBSE schools in Aligarh — dedicated to academic excellence
              and holistic growth for every student.
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-gold hover:text-primary"
                >
                  <s.icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                Delhi G.T. Road, Aligarh – 202001 (U.P.), India
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                +91 98370 50000
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                info@kisaligarh.com
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gold">
              Ready to Join?
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Begin your child&apos;s journey with us today.
            </p>
            <Link
              href="/#admissions"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-105"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Krishna International School. All rights reserved.
          </p>
          <p className="text-xs text-white/40">Dedicated to Excellence</p>
        </div>
      </div>
    </footer>
  );
}
