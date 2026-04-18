"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SERVICES } from "@/lib/constants";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import Image from "next/image";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-main">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--border)] mb-0.5">
          <p className="text-label">Our Services</p>
          <div className="flex flex-col md:items-end gap-3">
            <h2 className="text-display-md text-[var(--text-primary)] md:text-right">Rabiro&apos;s Comprehensive<br />Digital Services</h2>
            <Link href="/services" className="font-dm text-sm" style={{ color: "var(--accent)" }}>View All Services →</Link>
          </div>
        </div>
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid md:grid-cols-3 gap-px bg-[var(--border)]">
          {SERVICES.map((service) => (
            <motion.div key={service.num} variants={fadeUpItem} className="group p-10 border border-[var(--border)] hover:bg-[var(--bg-secondary)] transition-all duration-200"
              style={{ backgroundColor: service.featured ? "rgba(232,82,26,0.04)" : "var(--bg-primary)", borderColor: service.featured ? "rgba(232,82,26,0.2)" : "var(--border)" }}>
              <p className="font-mono-custom text-xs" style={{ color: "var(--text-muted)" }}>{service.num}</p>

              {/* ↓ ImgPlaceholder ki jagah Image */}
              <div className="relative w-full mt-8 mb-8" style={{ height: 180 }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  style={{ borderRadius: "2px" }}
                />
              </div>

              <h3 className="font-syne font-bold text-2xl text-[var(--text-primary)] mt-8 mb-4">{service.title}</h3>
              <p className="font-dm text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>{service.body}</p>
              <Link href={service.href} className="inline-block font-dm text-sm mt-8 transition-colors" style={{ color: "var(--accent)" }}>Read More →</Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}