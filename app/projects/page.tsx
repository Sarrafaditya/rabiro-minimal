"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import CTA from "@/components/sections/CTA";

const ALL_PROJECTS = [
  { title: "Tunics Shop — Shopify Store", category: "Web Development", size: "tall" },
  { title: "Modern Apperials — Product Ads", category: "Video Editing", size: "normal" },
  { title: "EgNog — Brand Identity", category: "Graphic Design", size: "normal" },
  { title: "Zedital Media — Agency Site", category: "Web Development", size: "tall" },
  { title: "ATNOTCH — Organic Growth Campaign", category: "SEO", size: "normal" },
  { title: "Maanraj — Logo & Collateral", category: "Graphic Design", size: "normal" },
  { title: "FreshMart — Landing Page", category: "Web Development", size: "normal" },
  { title: "StyleCo — Instagram Reels Pack", category: "Video Editing", size: "tall" },
  { title: "TechFlow — PPC Campaign", category: "SEO", size: "normal" },
];

const FILTERS = ["All", "Web Development", "Video Editing", "Graphic Design", "SEO"];

function ProjectCard({ title, category, size }: { title: string; category: string; size: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="relative overflow-hidden border border-[var(--border)] cursor-pointer group"
      style={{ minHeight: size === "tall" ? "380px" : "240px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <span className="font-mono-custom text-xs text-center px-4" style={{ color: "#2a2a2a" }}>
          Project Image: {title} 1600×900
        </span>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end p-6"
        initial={{ y: "100%" }}
        animate={{ y: hovered ? "0%" : "100%" }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ backgroundColor: "var(--accent)" }}
      >
        <p className="font-syne font-bold text-xl text-white">{title}</p>
        <p className="font-mono-custom text-xs text-white/70 mt-1">{category}</p>
      </motion.div>

      <div
        className="absolute bottom-0 left-0 right-0 px-4 py-3 flex items-center justify-between"
        style={{ backgroundColor: "rgba(10,10,10,0.85)" }}
      >
        <p className="font-mono-custom text-xs" style={{ color: "var(--text-secondary)" }}>{category}</p>
        <span style={{ color: "var(--text-secondary)" }}>→</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        label="Our Projects"
        heading="Work That Speaks Louder Than Words."
        height="50vh"
      />

      {/* Sticky filter row */}
      <div
        className="sticky z-50 border-b border-[var(--border)]"
        style={{ top: "64px", backgroundColor: "var(--bg-primary)" }}
      >
        <div className="container-main py-0">
          <div className="flex flex-wrap gap-px bg-[var(--border)]">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="font-mono-custom text-xs uppercase px-5 py-3.5 transition-all duration-200"
                style={{
                  backgroundColor: active === f ? "var(--accent)" : "var(--bg-primary)",
                  color: active === f ? "white" : "var(--text-secondary)",
                  borderColor: active === f ? "var(--accent)" : "var(--border)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container-main">
          <motion.div
            layout
            className="grid md:grid-cols-3 gap-px bg-[var(--border)]"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Featured case study */}
          <div className="border border-[var(--border)] mt-0.5">
            <div className="grid lg:grid-cols-2 gap-0">
              <div
                className="flex items-center justify-center"
                style={{
                  minHeight: "280px",
                  backgroundColor: "var(--bg-secondary)",
                  border: "1px dashed #2a2a2a",
                }}
              >
                <span className="font-mono-custom text-xs" style={{ color: "#333" }}>
                  Featured Project Image 1200×800
                </span>
              </div>

              <div className="p-10 flex flex-col justify-center">
                <p className="text-label mb-3">Featured Project</p>
                <h3
                  className="font-syne font-bold mb-4"
                  style={{ fontSize: "clamp(22px,3vw,36px)", color: "var(--text-primary)", lineHeight: 1.1 }}
                >
                  Web Development — Tunics Shop
                </h3>
                <p className="font-dm text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                  We designed and developed a new website for a technology company that improved user experience and resulted in a 50% increase in website traffic.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {["50% Website Traffic ↑", "Shopify", "Video Ads"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-custom text-xs px-3 py-1.5 border border-[var(--border)]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block font-syne font-semibold text-sm transition-colors"
                  style={{ color: "var(--accent)" }}
                >
                  View Case Study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
