"use client";

import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { CONTACT, SYSTEM_STATUS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SystemStatusWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="terminal max-w-sm mx-auto mb-12"
    >
      <div className="terminal-header">
        <div className="terminal-dot bg-red/80" />
        <div className="terminal-dot bg-amber/80" />
        <div className="terminal-dot bg-green/80" />
        <span className="ml-2 text-faint text-xs">system-status</span>
      </div>
      <div className="p-4 space-y-2">
        {SYSTEM_STATUS.map((item, i) => (
          <motion.div
            key={item.service}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="flex items-center justify-between text-sm"
          >
            <span className="text-muted font-mono">{item.service}</span>
            <div className="flex items-center gap-2">
              <span className="text-green font-mono text-xs">{item.status}</span>
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(63,185,80,0.4)",
                    "0 0 8px rgba(63,185,80,0.6)",
                    "0 0 0px rgba(63,185,80,0.4)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                className="w-2 h-2 rounded-full bg-green"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function Contact() {
  const links = [
    {
      icon: Mail,
      label: "Email Me",
      href: `mailto:${CONTACT.email}`,
      primary: true,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: CONTACT.linkedin,
      primary: false,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      href: CONTACT.github,
      primary: false,
    },
    {
      icon: Download,
      label: "Resume",
      href: CONTACT.resumeUrl,
      primary: false,
    },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 relative">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(88,166,255,0.06), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal>
          <SectionLabel number="09" label="Contact" className="justify-center" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Have a backend problem{" "}
            <span className="text-accent">worth solving?</span>
          </h2>
          <p className="text-lg text-muted mb-12 max-w-xl mx-auto">
            Let&apos;s talk architecture, performance, and building something
            that scales.
          </p>
        </ScrollReveal>

        <SystemStatusWidget />

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map(({ icon: Icon, label, href, primary }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                download={label === "Resume" ? true : undefined}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={
                  primary
                    ? "inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#080c10] font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-[0_0_20px_rgba(88,166,255,0.15)]"
                    : "inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent/40 hover:text-accent transition-colors shadow-sm"
                }
              >
                <Icon className="w-5 h-5" />
                {label}
              </motion.a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
