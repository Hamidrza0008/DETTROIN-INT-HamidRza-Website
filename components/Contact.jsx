"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Address",
    value: "Delhi G.T. Road, Aligarh – 202001 (U.P.), India",
  },
  { icon: Phone, label: "Phone", value: "+91 98370 50000 / +91 73510 50000" },
  { icon: Mail, label: "Email", value: "info@kisaligarh.com" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const inputClass =
  "w-full rounded-xl border border-navy/15 bg-white px-3.5 py-2.5 text-sm text-navy placeholder:text-navy/35 transition-colors duration-300 outline-none focus:border-gold";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-14 sm:py-16 lg:py-20">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contact Us
          </span>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-navy sm:text-4xl">
            We&apos;d Love to Hear From You
          </h2>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            className="mx-auto mt-4 block h-0.5 w-16 origin-center rounded-full bg-gold"
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:mt-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-3"
          >
            {CONTACT_INFO.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 rounded-xl border border-navy/10 bg-white p-3.5 shadow-sm transition-all duration-300 hover:border-gold/40 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <item.icon className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy/40">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-navy">{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              className="relative aspect-21/9 w-full overflow-hidden rounded-xl border border-navy/10 shadow-sm"
            >
              <iframe
                title="Krishna International School location"
                src="https://www.google.com/maps?q=27.9247905,78.0328126&z=17&output=embed"
                className="h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-6"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex h-full flex-col items-center justify-center py-10 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">Message Sent</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink/65">
                  Thank you for reaching out. Our admissions team will get back to you
                  within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input required type="text" placeholder="Your Name" className={inputClass} />
                  <input required type="email" placeholder="Email Address" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <input
                    required
                    type="tel"
                    placeholder="Phone Number"
                    className={inputClass}
                  />
                  <input type="text" placeholder="Subject" className={inputClass} />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Your Message"
                  className={`${inputClass} resize-none`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  Send Message
                  <Send className="h-4 w-4" strokeWidth={2} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
