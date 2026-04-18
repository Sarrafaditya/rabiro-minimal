"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Phone, Mail, CheckCircle2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import { SITE } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone required"),
  email: z.string().email("Valid email required"),
  subject: z.string().min(2, "Subject is required"),
  company: z.string().optional(),
  website: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message is required (min 10 chars)"),
});

type FormData = z.infer<typeof schema>;

const SERVICES = ["Web Development", "Video Editing", "Graphic Design", "SEO/PPC", "Social Media", "Other"];

function InputField({
  label,
  error,
  ...props
}: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="font-mono-custom text-[10px] uppercase tracking-widest block mb-2" style={{ color: "var(--text-secondary)" }}>
        {label}
      </label>
      <input
        {...props}
        className="w-full bg-transparent border-0 border-b font-dm text-base py-3 outline-none transition-colors"
        style={{
          borderBottomWidth: "1px",
          borderBottomColor: error ? "var(--accent)" : "var(--border)",
          color: "var(--text-primary)",
        }}
        onFocus={(e) => { e.currentTarget.style.borderBottomColor = "var(--accent)"; }}
        onBlur={(e) => { e.currentTarget.style.borderBottomColor = error ? "var(--accent)" : "var(--border)"; }}
      />
      {error && <p className="font-dm text-xs mt-1" style={{ color: "var(--accent)" }}>{error}</p>}
    </div>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        label="Contact Us"
        heading="Let's Build Something Amazing Together."
        height="40vh"
      />

      <section className="section-padding" style={{ backgroundColor: "var(--bg-primary)" }}>
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — contact info */}
            <div>
              <h2
                className="font-syne font-bold text-[var(--text-primary)] mb-4"
                style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.1, letterSpacing: "-0.01em" }}
              >
                Let&apos;s Connect and Create Something Amazing Together!
              </h2>
              <p className="font-dm text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
                We value collaboration and communication, and we&apos;re always open to your questions, feedback, and ideas. Our team of creative and innovative thinkers is excited to work with like-minded individuals and organizations.
              </p>

              {/* Contact cards */}
              {[
                {
                  Icon: Building2,
                  title: "Motihari Office",
                  body: SITE.address,
                  href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
                },
                {
                  Icon: Phone,
                  title: "Phone",
                  body: SITE.phone,
                  href: `tel:${SITE.phone.replace(/\s/g, "")}`,
                },
                {
                  Icon: Mail,
                  title: "Email Address",
                  body: SITE.email,
                  href: `mailto:${SITE.email}`,
                },
              ].map(({ Icon, title, body, href }) => (
                <a
                  key={title}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 border border-[var(--border)] p-5 mb-4 hover:border-[var(--border-accent)] transition-all"
                  style={{ borderRadius: "2px" }}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--accent-dim)", borderRadius: "2px" }}
                  >
                    <Icon size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div>
                    <p className="font-dm text-sm font-semibold" style={{ color: "var(--text-primary)" }}>{title}</p>
                    <p className="font-dm text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>{body}</p>
                  </div>
                </a>
              ))}

              {/* Social */}
              <p className="font-dm text-sm mb-4 mt-8" style={{ color: "var(--text-secondary)" }}>
                Follow Our Social Media
              </p>
              <div className="flex gap-2">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 flex items-center justify-center border border-[var(--border)] hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all"
                    style={{ borderRadius: "2px" }}
                  >
                    <Icon size={16} style={{ color: "var(--text-primary)" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div
              className="border border-[var(--border)] p-12"
              style={{ backgroundColor: "var(--bg-secondary)", borderRadius: "2px" }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <CheckCircle2 size={48} style={{ color: "var(--accent)" }} />
                    <h3 className="font-syne font-bold text-2xl mt-6 mb-3" style={{ color: "var(--text-primary)" }}>
                      Message Sent!
                    </h3>
                    <p className="font-dm text-base" style={{ color: "var(--text-secondary)" }}>
                      We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col gap-8"
                  >
                    <InputField
                      label="Your Name *"
                      placeholder="John Doe"
                      error={errors.name?.message}
                      {...register("name")}
                    />

                    <div className="grid grid-cols-2 gap-8">
                      <InputField
                        label="Your Phone *"
                        placeholder="+91 98765 43210"
                        error={errors.phone?.message}
                        {...register("phone")}
                      />
                      <InputField
                        label="Your Email *"
                        placeholder="you@company.com"
                        error={errors.email?.message}
                        {...register("email")}
                      />
                    </div>

                    <InputField
                      label="Your Subject *"
                      placeholder="How can we help?"
                      error={errors.subject?.message}
                      {...register("subject")}
                    />

                    <div className="grid grid-cols-2 gap-8">
                      <InputField
                        label="Company Name"
                        placeholder="Acme Inc."
                        {...register("company")}
                      />
                      <InputField
                        label="Website / Social Media"
                        placeholder="https://..."
                        {...register("website")}
                      />
                    </div>

                    {/* Service dropdown */}
                    <div>
                      <label className="font-mono-custom text-[10px] uppercase tracking-widest block mb-2" style={{ color: "var(--text-secondary)" }}>
                        Select Services *
                      </label>
                      <select
                        {...register("service")}
                        className="w-full bg-transparent border-0 border-b font-dm text-base py-3 outline-none appearance-none"
                        style={{
                          borderBottomWidth: "1px",
                          borderBottomColor: errors.service ? "var(--accent)" : "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <option value="" style={{ backgroundColor: "var(--bg-secondary)" }}>Select a service...</option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s} style={{ backgroundColor: "var(--bg-secondary)" }}>{s}</option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="font-dm text-xs mt-1" style={{ color: "var(--accent)" }}>{errors.service.message}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="font-mono-custom text-[10px] uppercase tracking-widest block mb-2" style={{ color: "var(--text-secondary)" }}>
                        Your Message *
                      </label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full bg-transparent border-0 border-b font-dm text-base py-3 outline-none resize-none"
                        style={{
                          borderBottomWidth: "1px",
                          borderBottomColor: errors.message ? "var(--accent)" : "var(--border)",
                          color: "var(--text-primary)",
                        }}
                      />
                      {errors.message && (
                        <p className="font-dm text-xs mt-1" style={{ color: "var(--accent)" }}>{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full font-syne font-semibold text-sm py-4 text-white uppercase tracking-wide transition-all duration-200 hover:opacity-90 disabled:opacity-60"
                      style={{ backgroundColor: "var(--accent)", borderRadius: "2px" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message →"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
