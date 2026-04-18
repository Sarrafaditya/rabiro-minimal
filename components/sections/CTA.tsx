"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SITE } from "@/lib/constants";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: "var(--accent)" }}>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`, opacity: 0.4, mixBlendMode: "overlay" }} />
      <div className="container-main relative z-10">
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p variants={fadeUpItem} className="font-mono-custom text-xs uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.7)" }}>Contact Us</motion.p>
            <motion.h2 variants={fadeUpItem} className="font-syne font-extrabold text-white" style={{ fontSize: "clamp(40px,5vw,56px)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
              Ready to Elevate<br />Your Brand?
            </motion.h2>
          </div>
          <motion.div variants={fadeUpItem}>
            <p className="font-dm text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>
              Are you looking for guidance on how to grow your business? Our team of experienced consultants is here to help. Schedule a consultation today and take the first step toward achieving your business goals.
            </p>
            <Link href="/contact" className="inline-block font-syne font-semibold text-sm px-8 py-4 bg-white hover:bg-white/90 transition-colors" style={{ color: "var(--accent)", borderRadius: "2px" }}>
              Contact Us Today →
            </Link>
            <div className="mt-6 flex flex-col gap-1">
              <p className="font-mono-custom text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{SITE.phone}</p>
              <p className="font-mono-custom text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>{SITE.email}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
