import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | Rabiro — Digital Marketing Agency",
  description: "Comprehensive digital services including web development, video editing, graphic design, SEO, PPC and social media marketing.",
};

const SERVICES_DETAIL = [
  {
    num: "01",
    category: "WEB DEVELOPMENT",
    title: "Websites That Convert Visitors Into Customers.",
    body: "We craft high-performance websites and landing pages built to convert. From design to deployment, every element is strategically placed to maximize user engagement and business growth.",
    features: [
      "Custom WordPress & Shopify Development",
      "Landing Pages Optimized for Conversion",
      "Mobile-First Responsive Design",
      "SEO-Optimized Page Structure",
      "Performance & Core Web Vitals Optimization",
    ],
    cta: "Start Your Web Project →",
    image: "/landingpage.jpg",
    flip: false,
  },
  {
    num: "02",
    category: "VIDEO EDITING",
    title: "Creative Video Content That Captures Attention.",
    body: "We produce high-quality video content tailored for social media platforms. From product showcases to brand stories, our edits drive engagement and conversions across Facebook, Instagram, and beyond.",
    features: [
      "Product & Ad Video Editing",
      "Reels, Shorts & TikTok Formats",
      "Motion Graphics & Captions",
      "Color Grading & Sound Design",
      "Platform-Optimized Export",
    ],
    cta: "Start Your Video Project →",
    image: "/video-editing.jpg",
    flip: true,
  },
  {
    num: "03",
    category: "GRAPHIC DESIGN",
    title: "Visual Identity That Speaks Before You Do.",
    body: "Enhance your brand's visual identity with professional design services. From logos to complete marketing material suites, we create designs that resonate with your audience and elevate your brand.",
    features: [
      "Logo & Brand Identity Design",
      "Social Media Graphics & Templates",
      "Marketing Collateral & Banners",
      "Infographic Design",
      "Packaging & Print Design",
    ],
    cta: "Start Your Design Project →",
    image: "/graphicdesign.jpg",
    flip: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        heading="What We Do, We Do Best."
        body="Comprehensive digital solutions tailored to drive your growth."
        height="55vh"
      />

      <div style={{ backgroundColor: "var(--bg-primary)" }}>
        {SERVICES_DETAIL.map((service) => (
          <section
            key={service.num}
            className="section-padding border-b border-[var(--border)]"
          >
            <div className="container-main">
              <div
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  service.flip ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative w-full ${service.flip ? "lg:col-start-2" : ""}`}
                  style={{ height: 480 }}
                >
                  <Image
                    src={service.image}
                    alt={service.category}
                    fill
                    className="object-cover"
                    style={{ borderRadius: "2px" }}
                  />
                </div>

                {/* Content */}
                <div className={service.flip ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <p className="text-label mb-2">{service.num} / {service.category}</p>
                  <h2
                    className="font-syne font-bold text-[var(--text-primary)] mt-4 mb-6"
                    style={{ fontSize: "clamp(28px,3.5vw,42px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
                  >
                    {service.title}
                  </h2>
                  <p className="font-dm text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                    {service.body}
                  </p>

                  <ul className="flex flex-col gap-3 mb-10">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <CheckCircle size={16} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                        <span className="font-dm text-sm" style={{ color: "var(--text-secondary)" }}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className="inline-block font-syne font-semibold text-sm px-7 py-3.5 text-white transition-all duration-200 hover:opacity-90"
                    style={{ backgroundColor: "var(--accent)", borderRadius: "2px" }}
                  >
                    {service.cta}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <Process />
      <CTA />
    </>
  );
}