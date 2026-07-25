"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Academics", href: "/#academics" },
  { label: "Admissions", href: "/#admissions" },
  { label: "Campus", href: "/#campus" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/#contact" },
];

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

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 md:top-6 md:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-primary/5 bg-background/80 py-2 pl-3 pr-3 shadow-lg shadow-primary/5 backdrop-blur-xl md:py-2.5 md:pl-4 md:pr-4">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/images/logo/logo.png"
            alt="Krishna International School"
            width={160}
            height={178}
            priority
            className="h-11 w-auto md:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium transition-colors hover:text-primary ${
                link.label === "Home" ? "text-primary" : "text-foreground/70"
              }`}
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
            className="hidden items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03] hover:shadow-md hover:shadow-primary/20 md:inline-flex"
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
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-3 max-w-6xl rounded-3xl border border-primary/5 bg-background/95 p-4 shadow-lg shadow-primary/5 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col divide-y divide-primary/10">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3.5 text-sm font-medium transition-colors hover:bg-primary/5 hover:text-primary ${
                    link.label === "Home" ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  <span className="relative inline-block">
                    {link.label}
                    {link.label === "Home" && (
                      <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-accent" />
                    )}
                  </span>
                </Link>
              ))}
            </nav>
            <Link
              href="/#admissions"
              onClick={() => setOpen(false)}
              className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-primary px-5 py-3 text-sm font-medium text-white"
            >
              Apply Now
              <ArrowIcon />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
