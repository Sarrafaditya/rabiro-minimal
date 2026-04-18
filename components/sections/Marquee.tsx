"use client";
import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/lib/constants";

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="w-full overflow-hidden border-t border-b border-[var(--border)] py-3.5"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {items.map((text, i) => (
          <span key={i} className="flex items-center">
            <span className="font-mono-custom text-xs uppercase text-[var(--text-secondary)] px-8">
              {text}
            </span>
            <span className="font-mono-custom text-xs" style={{ color: "var(--accent)" }}>
              ·
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
