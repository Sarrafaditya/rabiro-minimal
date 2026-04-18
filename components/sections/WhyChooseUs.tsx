"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, BadgeIndianRupee, TrendingUp, BarChart3 } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

const ICONS: Record<string, React.FC<{ size: number; color?: string }>> = { Clock, BadgeIndianRupee, TrendingUp, BarChart3 };

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-main">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid lg:grid-cols-[40%_60%] gap-16 items-start">
          <div>
            <motion.p variants={fadeUpItem} className="text-label mb-4">{WHY_CHOOSE_US.label}</motion.p>
            <motion.h2 variants={fadeUpItem} className="text-display-md text-[var(--text-primary)]">{WHY_CHOOSE_US.heading}</motion.h2>
            <motion.p variants={fadeUpItem} className="font-dm text-lg leading-relaxed mt-6 max-w-md" style={{ color: "var(--text-secondary)" }}>{WHY_CHOOSE_US.body}</motion.p>
          </div>
          <motion.div variants={fadeUpItem} className="grid grid-cols-2 gap-px bg-[var(--border)]">
            {WHY_CHOOSE_US.features.map((feature) => {
              const Icon = ICONS[feature.icon];
              return (
                <motion.div key={feature.title} className="group p-8 border border-[var(--border)] hover:border-[var(--border-accent)] transition-all duration-200" style={{ backgroundColor: "var(--bg-secondary)" }} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  {Icon && <Icon size={24} color="var(--accent)" />}
                  <h3 className="font-syne font-semibold text-base mt-4 mb-2" style={{ color: "var(--text-primary)" }}>{feature.title}</h3>
                  <p className="font-dm text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{feature.body}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
