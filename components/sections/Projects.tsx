"use client";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PROJECTS } from "@/lib/constants";
import { staggerContainer, fadeUpItem } from "@/lib/animations";
import Image from "next/image";

function ProjectCard({ title, category, large, image }: { 
  title: string; 
  category: string; 
  large: boolean;
  image: string;        // ← added
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div className="relative overflow-hidden border border-[var(--border)] cursor-pointer" style={{ minHeight: large ? "400px" : "260px" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} whileHover={{ borderColor: "var(--border-accent)" }}>
      
      {/* ← now uses each card's own image/video */}
      {image.endsWith(".mp4") ? (
        <video
          src={image}
          poster="/video-thumb.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <Image src={image} alt={title} fill className="object-cover" />
      )}

      <motion.div className="absolute inset-0 flex flex-col justify-end p-6" initial={{ y: "100%" }} animate={{ y: hovered ? "0%" : "100%" }} transition={{ duration: 0.3, ease: "easeOut" }} style={{ backgroundColor: "var(--accent)" }}>
        <p className="font-syne font-bold text-2xl text-white">{title}</p>
        <p className="font-mono-custom text-xs text-white/70 mt-2">{category}</p>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between" style={{ backgroundColor: "rgba(10,10,10,0.8)" }}>
        <p className="font-mono-custom text-xs text-[var(--text-secondary)]">{category}</p>
        <span className="text-[var(--text-secondary)]">→</span>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  return (
    <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <p className="text-label mb-4">Our Projects</p>
            <h2 className="text-display-md text-[var(--text-primary)]">Our Work Speaks<br />for Itself.</h2>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="font-dm text-base leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: 360 }}>Take a look at some of our past projects and see how we&apos;ve helped businesses achieve their digital marketing goals.</p>
            <Link href="/projects" className="inline-flex items-center font-syne font-semibold text-sm px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] transition-all self-start" style={{ borderRadius: "2px" }}>
              View All Projects →
            </Link>
          </div>
        </div>
        <motion.div ref={ref} variants={staggerContainer} initial="hidden" animate={inView ? "show" : "hidden"} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--border)]">
          <motion.div variants={fadeUpItem} className="md:col-span-2"><ProjectCard {...PROJECTS[0]} /></motion.div>
          <motion.div variants={fadeUpItem}><ProjectCard {...PROJECTS[1]} /></motion.div>
          <motion.div variants={fadeUpItem}><ProjectCard {...PROJECTS[2]} /></motion.div>
          <motion.div variants={fadeUpItem} className="md:col-span-2"><ProjectCard {...PROJECTS[3]} /></motion.div>
        </motion.div>
        <div className="border border-[var(--border)] p-10 mt-0.5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-label mb-3">Web Development</p>
            <p className="font-dm text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We designed and developed a new website for a technology company that improved user experience and resulted in a{" "}
              <strong style={{ color: "var(--text-primary)" }}>50% increase in website traffic.</strong>
            </p>
          </div>
          <Link href="/projects" className="font-syne font-semibold text-sm shrink-0 transition-colors" style={{ color: "var(--accent)" }}>View Case Study →</Link>
        </div>
      </div>
    </section>
  );
}