"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowDown } from "lucide-react";

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
import { HERO, CONTACT, BACKEND_FLOW_NODES } from "@/lib/data";
import { AnimatedCounter, EASINGS } from "@/components/ui/Motion";

function BackendFlowDiagram() {
  return (
    <div className="relative w-full max-w-[280px] mx-auto lg:mx-0">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 280 560"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connecting lines */}
        {BACKEND_FLOW_NODES.slice(0, -1).map((_, i) => (
          <motion.line
            key={`line-${i}`}
            x1="140"
            y1={45 + i * 80}
            x2="140"
            y2={80 + i * 80}
            stroke="#58a6ff"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
          />
        ))}

        {/* Animated data packets */}
        {BACKEND_FLOW_NODES.slice(0, -1).map((_, i) => (
          <motion.circle
            key={`packet-${i}`}
            cx="140"
            r="3"
            fill="#58a6ff"
            initial={{ cy: 45 + i * 80, opacity: 0 }}
            animate={{
              cy: [45 + i * 80, 80 + i * 80],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: 1.5 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </svg>

      <div className="relative flex flex-col gap-3">
        {BACKEND_FLOW_NODES.map((node, i) => (
          <motion.div
            key={node.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            className="relative flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-surface/80 backdrop-blur-sm hover:border-border-glow hover:shadow-[0_0_15px_rgba(88,166,255,0.08)] transition-all group"
          >
            <div className="w-2 h-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors shadow-[0_0_6px_rgba(88,166,255,0.4)]" />
            <span className="text-sm font-mono text-foreground/80 group-hover:text-foreground transition-colors">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function HeroTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="terminal mt-8 max-w-md hidden sm:block"
    >
      <div className="terminal-header">
        <div className="terminal-dot bg-red/80" />
        <div className="terminal-dot bg-amber/80" />
        <div className="terminal-dot bg-green/80" />
        <span className="ml-2 text-faint text-xs">saurabh@backend ~ %</span>
      </div>
      <div className="p-4 space-y-1">
        {HERO.terminalLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + i * 0.15 }}
            className={
              line.startsWith("$")
                ? "text-accent"
                : line.startsWith("✓")
                ? "text-green"
                : line.startsWith(">")
                ? "text-muted"
                : "text-muted"
            }
          >
            {line || "\u00A0"}
          </motion.div>
        ))}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 3, duration: 1, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-accent/80 ml-0.5"
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(88,166,255,0.08), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
          {/* Left Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-4 sm:mb-6"
            >
              {CONTACT.title}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.15] mb-6"
            >
              I build backend systems{" "}
              <span className="text-accent">that scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-base sm:text-xl text-muted max-w-2xl mb-8 leading-relaxed"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5, ease: EASINGS.smooth }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-8"
            >
              <motion.a
                href="#case-studies"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 bg-accent text-[#080c10] font-semibold rounded-lg hover:bg-accent-hover transition-colors text-sm sm:text-base shadow-[0_0_20px_rgba(88,166,255,0.15)]"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex items-center gap-2 px-5 py-3 sm:px-6 sm:py-3 border border-border text-foreground font-medium rounded-lg hover:border-accent/40 hover:text-accent transition-colors text-sm sm:text-base"
              >
                Let&apos;s Build Something
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-3 mb-8 sm:mb-10"
            >
              {[
                { icon: GithubIcon, href: CONTACT.github, label: "GitHub" },
                { icon: LinkedinIcon, href: CONTACT.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${CONTACT.email}`, label: "Email" },
                { icon: Download, href: CONTACT.resumeUrl, label: "Download Resume" },
              ].map(({ icon: Icon, href, label }, idx) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + idx * 0.08, type: "spring", stiffness: 350, damping: 20 }}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-lg border border-border text-muted hover:text-accent hover:border-accent/40 transition-colors shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* Stats Row - Responsive 2x2 grid on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: EASINGS.smooth }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border"
            >
              {HERO.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + i * 0.1, duration: 0.4 }}
                >
                  <div className="text-xl sm:text-3xl font-bold text-accent">
                    <AnimatedCounter value={stat.value} />
                  </div>
                  <div className="text-xs sm:text-sm text-muted mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <HeroTerminal />
          </div>

          {/* Right Column — Backend Flow Diagram */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:block pointer-events-none"
          >
            <BackendFlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
