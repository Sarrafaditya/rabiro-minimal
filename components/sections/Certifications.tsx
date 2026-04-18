"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const CERTS = [
   { label: "AiSensy", w: 160, h: 60, image: "/certs/aisensy.svg" },
  { label: "Cashfree Payments", w: 160, h: 60, image: "/certs/cashfree.svg" },
  { label: "Meta Business Partner", w: 160, h: 60, image: "/certs/meta.svg" },
  { label: "Razorpay Partner", w: 160, h: 60, image: "/certs/razorpay.svg" },
  { label: "Shopify Partner", w: 160, h: 60, image: "/certs/shopify.svg" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
  className="py-16 border-t border-b border-[var(--border)]"
  style={{ backgroundColor: "#FFFFFF" }}  // ← change karo
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
    className="relative"
    style={{
      width: cert.w,
      height: cert.h,
    }}
  >
    <Image
      src={cert.image}
      alt={cert.label}
      fill
      className="object-contain"
    />
  </div>
))}
        </motion.div>
      </div>
    </section>
  );
}