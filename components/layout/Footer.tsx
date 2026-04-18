import Link from "next/link";
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SITE, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[var(--bg-primary)] border-t border-[var(--border)]">
      <div className="container-main pt-20 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
           <Image src="/rabiro-logo.svg" alt="Rabiro" width={120} height={36} />
            <div className="border-t border-[var(--border)] my-6" />
            <div className="flex flex-col gap-3">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-dm text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "var(--accent)" }} />
                {SITE.city}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 font-dm text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Mail size={14} style={{ color: "var(--accent)" }} />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 font-dm text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                <Phone size={14} style={{ color: "var(--accent)" }} />
                {SITE.phone}
              </a>
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="text-label mb-6">Navigation</p>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-dm text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  › {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3 — Quick Links */}
          <div>
            <p className="text-label mb-6">Quick Links</p>
            <nav className="flex flex-col gap-3">
              {["FAQs", "Privacy Policy", "Refund Policy", "Terms & Conditions"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="font-dm text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                >
                  › {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4 — Newsletter */}
          <div>
            <p className="text-label mb-3">Newsletter</p>
            <p className="font-dm text-sm text-[var(--text-secondary)] mt-3 mb-4">
              Get the latest news &amp; updates
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] font-dm text-sm px-4 py-2.5 outline-none focus:border-[var(--accent)] transition-colors placeholder:text-[var(--text-muted)]"
              />
              <button className="bg-[var(--accent)] text-white font-dm text-sm px-5 py-2.5 hover:bg-[var(--accent-hover)] transition-colors shrink-0">
                Subscribe
              </button>
            </div>
            {/* Social icons */}
            <div className="flex gap-2 mt-6">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center border border-[var(--border)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-dim)] transition-all"
                  style={{ borderRadius: "2px" }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--border)] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-dm text-xs text-[var(--text-muted)]">
            Copyright © 2025 Rabiro. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-dm text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
