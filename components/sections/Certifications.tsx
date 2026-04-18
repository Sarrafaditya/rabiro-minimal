"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const CERTS = [
  { label: "Meta Business Partner", w: 120, h: 40 },
  { label: "Shopify Partner", w: 120, h: 40 },
  { label: "AiSensy", w: 100, h: 40 },
  { label: "Razorpay Partner", w: 120, h: 40 },
  { label: "Cashfree Payments", w: 120, h: 40 },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      className="py-16 border-t border-b border-[var(--border)]"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="container-main">
        <p className="text-label text-center mb-8">Our services are certified by</p>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-10"
        >
          {CERTS.map((cert) => (
            <div
              key={cert.label}
              className="relative flex items-center justify-center border border-dashed border-[#2a2a2a] hover:border-[var(--accent)] transition-all duration-300 group"
              style={{
                width: cert.w,
                height: cert.h,
                filter: "grayscale(1)",
                opacity: 0.5,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0)";
                (e.currentTarget as HTMLDivElement).style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.filter = "grayscale(1)";
                (e.currentTarget as HTMLDivElement).style.opacity = "0.5";
              }}
            >
              <span className="font-mono-custom text-[9px] text-center px-1" style={{ color: "#555" }}>
                {cert.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
