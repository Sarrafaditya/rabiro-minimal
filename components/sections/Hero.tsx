"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HERO } from "@/lib/constants";
import { staggerContainer, fadeUpItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-grid" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="hidden md:block absolute top-20 left-20 w-0.5 h-16 bg-[var(--accent)]" />
      <div className="container-main w-full py-32 pt-40">
        <div className="grid lg:grid-cols-[65%_35%] gap-12 items-center">
          {/* Left */}
          <motion.div variants={staggerContainer} initial="hidden" animate="show" className="relative z-10">
            <motion.p variants={fadeUpItem} className="text-label mb-6">{HERO.label}</motion.p>
            <motion.h1 variants={fadeUpItem} className="text-display-xl text-[var(--text-primary)]">
              {HERO.heading[0]}<br />
              <span style={{ color: "var(--accent)" }}>{HERO.heading[1]}</span>
            </motion.h1>
            <motion.p variants={fadeUpItem} className="font-dm text-lg leading-relaxed mt-6 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              {HERO.body}
            </motion.p>
            <motion.div variants={fadeUpItem} className="flex flex-wrap gap-4 mt-10">
              <Link href={HERO.cta1.href} className="font-syne font-semibold text-sm px-7 py-3.5 text-white transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "var(--accent)", borderRadius: "2px" }}>
                {HERO.cta1.label}
              </Link>
              <Link href={HERO.cta2.href} className="font-syne font-semibold text-sm px-7 py-3.5 border border-[#333] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all duration-200" style={{ borderRadius: "2px" }}>
                {HERO.cta2.label}
              </Link>
            </motion.div>

            {/* Client circles */}
            <motion.div variants={fadeUpItem} className="flex items-center gap-4 mt-12 pt-6 border-t border-[var(--border)]">
              <div className="flex">
                {[
                  "/clients/client1.jpg",
                  "/clients/client2.jpg",
                  "/clients/client3.jpg",
                ].map((src, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full border-2 border-[var(--bg-primary)] overflow-hidden -ml-3 first:ml-0">
                    <Image
                      src={src}
                      alt={`Client ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="font-dm text-sm font-semibold text-[var(--text-primary)]">{HERO.socialProof}</p>
                <p className="font-dm text-xs text-[var(--text-secondary)]">{HERO.socialProofSub}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — decorative */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }} className="hidden lg:block relative">
            <div className="absolute inset-0 flex flex-col justify-center leading-none select-none pointer-events-none" style={{ transform: "rotate(-2deg)", zIndex: 0 }}>
              {"DIGITAL\nGROWTH\nAGENCY".split("\n").map((word) => (
                <p key={word} className="font-syne font-bold text-7xl outline-text" style={{ opacity: 0.6 }}>{word}</p>
              ))}
            </div>
            <div className="relative z-10 mt-24 space-y-4 pl-12">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="border border-[var(--border)] p-6 w-48" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "2px" }}>
                <p className="font-syne font-bold text-4xl text-[var(--text-primary)]">85%</p>
                <p className="font-dm text-sm text-[var(--text-secondary)] mt-1">Sales Growth</p>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }} className="border border-[var(--border)] p-6 w-48 ml-8" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "2px" }}>
                <p className="font-syne font-bold text-4xl text-[var(--text-primary)]">360+</p>
                <p className="font-dm text-sm text-[var(--text-secondary)] mt-1">Clients Served</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }} />
    </section>
  );
}