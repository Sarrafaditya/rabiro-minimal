"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CalendarCheck, Users, TrendingUp } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import { staggerContainer, staggerContainerSlow, fadeUpItem } from "@/lib/animations";

const ICONS: Record<string, React.FC<{ size: number; color?: string }>> = { CalendarCheck, Users, TrendingUp };

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-main">
        <div className="text-center mb-20">
          <p className="text-label mb-4">Our Process</p>
          <h2 className="text-display-md text-[var(--text-primary)]">Our Simple Three-Step Process.</h2>
          <p className="font-dm text-base leading-relaxed mt-4 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: 480 }}>
            Our process is designed to be easy and efficient, allowing you to quickly start seeing results for your business.
          </p>
        </div>
        <motion.div ref={ref} variants={staggerContainerSlow} initial="hidden" animate={inView ? "show" : "hidden"} className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
          {PROCESS_STEPS.map((step) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div key={step.num} variants={fadeUpItem} className="relative z-10 flex flex-col items-center text-center p-10 border border-[var(--border)]" style={{ backgroundColor: "var(--bg-primary)" }}>
                <p className="font-mono-custom font-bold absolute top-6 right-6 text-5xl leading-none select-none" style={{ color: "transparent", WebkitTextStroke: "1px var(--accent)", fontSize: "48px", opacity: 0.4 }}>{step.num}</p>
                <div className="w-16 h-16 rounded-full flex items-center justify-center border mb-8" style={{ borderColor: "var(--accent)" }}>
                  {Icon && <Icon size={24} color="var(--accent)" />}
                </div>
                <h3 className="font-syne font-semibold text-xl mb-4" style={{ color: "var(--text-primary)" }}>{step.title}</h3>
                <p className="font-dm text-sm leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: 240 }}>{step.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
