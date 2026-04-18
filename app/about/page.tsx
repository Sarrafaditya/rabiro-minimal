import type { Metadata } from "next";
import { CheckCircle, Eye, Target, Headphones, Lightbulb } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import { ABOUT, VISION_CARDS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About | Rabiro — Digital Marketing Agency",
  description: "Learn about Rabiro — 4 years of expertise in digital marketing, web development, and creative services from Motihari, Bihar.",
};

const ICONS: Record<string, React.FC<{ size: number }>> = { Eye, Target, Headphones, Lightbulb };

const WHY_FEATURES = [
  { title: "Data-Driven Approach", body: "Our solutions are backed by data and analytics to ensure measurable impact." },
  { title: "Skilled Team", body: "Our experienced team uses a variety of proven techniques to maximize results." },
  { title: "Tailored Solutions", body: "We create customized solutions tailored to your business's unique needs and goals." },
  { title: "Exceptional Support", body: "Our dedicated customer support team provides the resources and assistance you need." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Rabiro"
        heading="Empowering Businesses with Data-Driven Digital Solutions."
        height="55vh"
      />

      {/* About split */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — image with floating cards */}
            <div className="relative">
              <div
                className="relative flex items-center justify-center"
                style={{
                  height: "560px",
                  backgroundColor: "var(--bg-tertiary)",
                  border: "1px dashed #333",
                  borderRadius: "2px",
                }}
              >
                <span className="font-mono-custom text-xs" style={{ color: "#444" }}>
                  About Image — Person/Team 1000×1200
                </span>
              </div>

              {/* Floating cards */}
              <div
                className="absolute top-8 -right-6 border border-[var(--border)] p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "2px" }}
              >
                <p className="font-syne font-bold text-3xl text-[var(--text-primary)]">120%</p>
                <p className="font-dm text-sm" style={{ color: "var(--text-secondary)" }}>Engagement Growth</p>
              </div>

              <div
                className="absolute bottom-12 -left-6 border border-[var(--border)] p-5"
                style={{ backgroundColor: "rgba(255,255,255,0.03)", borderRadius: "2px" }}
              >
                <p className="font-syne font-bold text-3xl text-[var(--text-primary)]">85%</p>
                <p className="font-dm text-sm" style={{ color: "var(--text-secondary)" }}>Sales Growth</p>
              </div>
            </div>

            {/* Right */}
            <div>
              <p className="text-label mb-4">{ABOUT.label}</p>
              <h2
                className="font-syne font-bold text-[var(--text-primary)] mb-6"
                style={{ fontSize: "clamp(28px,3.5vw,42px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
              >
                {ABOUT.heading}
              </h2>
              <p className="font-dm text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                {ABOUT.body}
              </p>

              <ul className="flex flex-col gap-4">
                {ABOUT.features.map((f) => (
                  <li key={f.title} className="flex items-start gap-3 border-b border-[var(--border)] pb-4">
                    <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                    <div>
                      <p className="font-dm text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                        {f.title}
                      </p>
                      <p className="font-dm text-sm" style={{ color: "var(--text-secondary)" }}>{f.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision / Mission / Support / Approach */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="container-main">
          <div className="text-center mb-16">
            <p className="text-label mb-4">Our Values</p>
            <h2 className="text-display-md text-[var(--text-primary)]">What Drives Us Forward.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)]">
            {VISION_CARDS.map((card) => {
              const Icon = ICONS[card.icon];
              return (
                <div
                  key={card.title}
                  className="p-10 border border-[var(--border)] hover:border-[var(--border-accent)] transition-all duration-200"
                  style={{
                    backgroundColor: card.featured ? "rgba(232,82,26,0.06)" : "var(--bg-secondary)",
                    borderColor: card.featured ? "rgba(232,82,26,0.25)" : "var(--border)",
                  }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6"
                    style={{ backgroundColor: "var(--accent-dim)", borderRadius: "2px" }}
                  >
                    {Icon && <Icon size={20} />}
                  </div>
                  <h3 className="font-syne font-semibold text-lg mb-3" style={{ color: "var(--text-primary)" }}>
                    {card.title}
                  </h3>
                  <p className="font-dm text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {card.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why we're best */}
      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-label mb-4">Why Choose Us</p>
              <h2
                className="font-syne font-bold text-[var(--text-primary)]"
                style={{ fontSize: "clamp(28px,3.5vw,42px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
              >
                We Provide Best Service For Your Brand.
              </h2>
              <p className="font-dm text-base leading-relaxed mt-6" style={{ color: "var(--text-secondary)" }}>
                At Rabiro, we&apos;re passionate about helping businesses succeed in the digital world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[var(--border)]">
              {WHY_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="p-8 border border-[var(--border)] hover:border-[var(--border-accent)] transition-all"
                  style={{ backgroundColor: "var(--bg-secondary)" }}
                >
                  <p className="font-syne font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>
                    {f.title}
                  </p>
                  <p className="font-dm text-sm" style={{ color: "var(--text-secondary)" }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process />
      <CTA />
    </>
  );
}
