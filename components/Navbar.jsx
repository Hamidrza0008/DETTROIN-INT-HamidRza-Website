"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Info,
  BookOpen,
  ClipboardList,
  Building2,
  Images,
  Phone,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const NAV_LINKS = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/#about", icon: Info },
  { label: "Academics", href: "/#academics", icon: BookOpen },
  { label: "Admissions", href: "/#admissions", icon: ClipboardList },
  { label: "Campus", href: "/#campus", icon: Building2 },
  { label: "Gallery", href: "/#gallery", icon: Images },
  { label: "Contact", href: "/#contact", icon: Phone },
];

const fadeItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } },
};

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5">
      <path
        d="M4 10h12M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/50 bg-white/25 py-2 pl-3 pr-3 shadow-lg shadow-primary/5 backdrop-blur-xl transition-shadow duration-300 hover:shadow-xl hover:shadow-primary/10 md:py-2.5 md:pl-4 md:pr-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Krishna International School"
            width={160}
            height={178}
            priority
            className="h-11 w-auto transition-transform duration-300 hover:scale-105 md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-primary transition-colors"
            >
              {link.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                  link.label === "Home" ? "scale-x-100" : ""
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#admissions"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/25 md:inline-flex"
          >
            Apply Now
            <ArrowIcon />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/5 lg:hidden"
          >
            {open ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 -z-10 bg-primary/30 backdrop-blur-md lg:hidden"
            />
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/50 bg-white/30 p-3 shadow-2xl shadow-primary/10 backdrop-blur-xl lg:hidden"
            >
              <motion.nav
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="flex flex-col divide-y divide-primary/10"
              >
                {NAV_LINKS.map((link) => (
                  <motion.div key={link.href} variants={fadeItem}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors hover:bg-primary/5 hover:text-primary ${
                        link.label === "Home" ? "text-primary" : "text-foreground/70"
                      }`}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary">
                        <link.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                      </span>
                      <span className="relative inline-block">
                        {link.label}
                        {link.label === "Home" && (
                          <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent" />
                        )}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
              <motion.div variants={fadeItem} initial="hidden" animate="show">
                <Link
                  href="/#admissions"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  Apply Now
                  <ArrowIcon />
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
