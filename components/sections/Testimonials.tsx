"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [active, setActive] = useState(0);
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
      <div className="container-main">
        <motion.div variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} ref={ref} className="text-center mb-16">
          <motion.p variants={fadeUpItem} className="text-label mb-4">Testimonials</motion.p>
          <motion.h2 variants={fadeUpItem} className="text-display-md text-[var(--text-primary)]">What Our Clients Say.</motion.h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.12, duration: 0.6 }} onClick={() => setActive(i)}
              className="relative p-10 border border-[var(--border)] cursor-pointer transition-all duration-200"
              style={{ backgroundColor: active === i ? "var(--bg-tertiary)" : "var(--bg-secondary)", borderColor: active === i ? "var(--border-accent)" : "var(--border)" }}>
              <span className="absolute top-4 left-8 font-syne font-bold select-none pointer-events-none" style={{ fontSize: "80px", lineHeight: 1, color: "var(--text-muted)", opacity: 0.3 }}>&ldquo;</span>
              {t.stats && <p className="font-dm text-xs mb-6 leading-relaxed relative z-10" style={{ color: "var(--text-secondary)" }}>{t.stats}</p>}
              <p className="font-dm italic leading-relaxed relative z-10" style={{ color: "var(--text-primary)", fontSize: active === i ? "18px" : "15px", transition: "font-size 0.2s" }}>&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[var(--border)]">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-syne font-bold text-sm" style={{ backgroundColor: "var(--bg-primary)", color: "var(--accent)", border: "1px solid var(--border)" }}>{t.name.charAt(0)}</div>
                <div>
                  <p className="font-dm text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{t.name}</p>
                  <p className="font-dm text-xs" style={{ color: "var(--text-secondary)" }}>{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className="w-1.5 h-1.5 rounded-full transition-all duration-200" style={{ backgroundColor: active === i ? "var(--accent)" : "var(--text-muted)" }} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
