"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

interface PageHeroProps { label: string; heading: string; body?: string; height?: string; }

export default function PageHero({ label, heading, body, height = "60vh" }: PageHeroProps) {
  return (
    <section className="relative flex items-end pb-16 overflow-hidden bg-grid" style={{ minHeight: height, backgroundColor: "var(--bg-primary)", paddingTop: "96px" }}>
      <div className="absolute top-24 left-20 w-0.5 h-12 bg-[var(--accent)]" />
      <div className="container-main w-full">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="border-b border-[var(--border)] pb-16">
          <motion.p variants={fadeUpItem} className="text-label mb-6">{label}</motion.p>
          <motion.h1 variants={fadeUpItem} className="text-display-lg text-[var(--text-primary)] max-w-4xl">{heading}</motion.h1>
          {body && <motion.p variants={fadeUpItem} className="font-dm text-lg leading-relaxed mt-6 max-w-2xl" style={{ color: "var(--text-secondary)" }}>{body}</motion.p>}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }} />
    </section>
  );
}
