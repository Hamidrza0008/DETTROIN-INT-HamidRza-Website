"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const HEIGHT = 64;
const MID = HEIGHT / 2;

export default function StringDivider() {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const mouseX = useMotionValue(0);
  const pluck = useMotionValue(0);
  const springPluck = useSpring(pluck, { stiffness: 220, damping: 7, mass: 0.7 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setWidth(el.offsetWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    mouseX.set(width / 2);
  }, [width, mouseX]);

  const d = useTransform([mouseX, springPluck], ([mx, py]) => {
    return `M0,${MID} Q${mx},${MID + py} ${width},${MID}`;
  });

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    pluck.set((e.clientY - rect.top - MID) * 1.6);
  };

  const handleMouseLeave = () => {
    pluck.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full"
      style={{ height: HEIGHT }}
    >
      <svg className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none">
        <motion.path
          d={d}
          fill="none"
          className="stroke-accent/70"
          strokeWidth="1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
