"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { STATS } from "@/lib/constants";

function parseNumber(val: string): number {
  return parseInt(val.replace(/[^0-9]/g, ""), 10) || 0;
}

function CountUp({ target, inView }: { target: string; inView: boolean }) {
  const num = parseNumber(target);
  const [current, setCurrent] = useState(0);
  const prefix = target.startsWith("$") ? "$" : "";
  const suffix = target.includes("+") ? "+" : "";
  const hasSuffix = target.includes("K"); // e.g. $12M+
  if (hasSuffix) {
    return <span>{inView ? target : prefix + "0+"}</span>;
  }


  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = duration / num;
    const timer = setInterval(() => {
      start += Math.ceil(num / (duration / 30));
      if (start >= num) {
        setCurrent(num);
        clearInterval(timer);
      } else {
        setCurrent(start);
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, num]);

  const formatted = prefix + (num > 999 ? current.toLocaleString() : current) + suffix;
  return <span>{inView ? formatted : prefix + "0" + suffix}</span>;
}

const stagger = { show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="py-24" style={{ backgroundColor: "var(--bg-inverse)" }}>
      <div className="container-main">
        <div className="text-center mb-16">
          <p className="font-mono-custom text-xs uppercase tracking-widest" style={{ color: "#888" }}>
            Achievement
          </p>
          <h2 className="font-syne font-extrabold text-[var(--text-inverse)] mt-4" style={{ fontSize: "clamp(36px,5vw,52px)", letterSpacing: "-0.02em" }}>
            Numbers Don&apos;t Lie.
          </h2>
        </div>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 border border-[#D0C9C0]"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="px-8 py-12 text-center"
              style={{
                borderRight: i < STATS.length - 1 ? "1px solid #D0C9C0" : "none",
                borderBottom: i < 2 ? "1px solid #D0C9C0" : "none",
              }}
            >
              <p className="font-syne font-extrabold text-6xl" style={{ color: "var(--text-inverse)" }}>
                <CountUp target={stat.number} inView={inView} />
              </p>
              <p className="font-dm text-sm mt-2" style={{ color: "#666" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="font-dm text-sm text-center mt-8" style={{ color: "#666", maxWidth: 560, margin: "32px auto 0" }}>
          Delivering impressive results through strategic marketing that drives growth, increases brand visibility, and generates substantial revenue.
        </p>
      </div>
    </section>
  );
}
