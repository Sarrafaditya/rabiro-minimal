"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.92)" : "rgba(10,10,10,0)",
          borderBottomColor: scrolled ? "#1F1F1F" : "transparent",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-[100] border-b backdrop-blur-md"
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
            <Image src="/rabiro-logo.svg" alt="Rabiro" width={120} height={36} priority />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative font-dm text-sm group"
                  style={{ color: pathname === link.href ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-0 h-px bg-[var(--accent)] transition-all duration-300"
                    style={{ width: pathname === link.href ? "100%" : "0" }}
                  />
                  <span className="absolute bottom-0 left-0 h-px bg-[var(--text-primary)] w-0 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-4">
              <span className="font-mono-custom text-xs text-[var(--text-primary)]">{SITE.phone}</span>
              <Link
                href="/contact"
                className="font-dm text-sm px-5 py-2.5 border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--text-inverse)] transition-all duration-200"
                style={{ borderRadius: "2px" }}
              >
                Let&apos;s talk →
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-[var(--text-primary)] p-1"
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-[var(--bg-primary)] flex flex-col px-6 py-8"
          >
            <div className="flex items-center justify-between mb-16">
              <Link href="/" className="font-syne font-bold text-xl text-[var(--text-primary)]">
                RABIRO
              </Link>
              <button onClick={() => setMobileOpen(false)} className="text-[var(--text-primary)]">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="font-syne font-bold text-5xl text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-[var(--border)]">
              <p className="font-mono-custom text-xs text-[var(--text-secondary)]">{SITE.phone}</p>
              <p className="font-mono-custom text-xs text-[var(--text-secondary)] mt-1">{SITE.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
