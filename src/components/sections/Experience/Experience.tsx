"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="03" label="Experience" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Career Timeline
          </h2>
          <p className="text-muted max-w-2xl mb-16 text-lg">
            5+ years of building and scaling production backend systems.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          {EXPERIENCE.map((job, i) => (
            <ScrollReveal key={job.company} delay={i * 0.1}>
              <div
                className={cn(
                  "relative grid lg:grid-cols-2 gap-6 lg:gap-12 mb-16 last:mb-0",
                  i % 2 === 0 ? "" : "lg:direction-rtl"
                )}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full border-2 border-accent bg-background -translate-x-1.5 lg:-translate-x-1.5 mt-1.5 z-10">
                  {job.type === "current" && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-accent/40"
                      animate={{ scale: [1, 2.5, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <div
                  className={cn(
                    "ml-10 lg:ml-0",
                    i % 2 === 0 ? "lg:pr-12" : "lg:col-start-2 lg:pl-12"
                  )}
                >
                  <div className="glow-card p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.role}
                      </h3>
                      {job.type === "current" && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-green/10 text-green border border-green/20">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="text-sm text-muted mb-1">{job.company}</div>
                    <div className="text-xs font-mono text-faint mb-4">
                      {job.period}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-5">
                      {job.highlights.map((highlight, hi) => (
                        <li
                          key={hi}
                          className="text-sm text-muted leading-relaxed flex gap-2"
                        >
                          <span className="text-accent/60 mt-1.5 w-1 h-1 rounded-full bg-accent/40 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Outcomes */}
                    {job.outcomes.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-5">
                        {job.outcomes.map((outcome) => (
                          <div
                            key={outcome.description}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 border border-accent/15"
                          >
                            <span className="text-sm font-bold text-accent">
                              {outcome.metric}
                            </span>
                            <span className="text-xs text-muted">
                              {outcome.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2 py-1 rounded bg-surface-2 text-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Date column (desktop) */}
                <div
                  className={cn(
                    "hidden lg:flex items-start pt-2",
                    i % 2 === 0 ? "lg:col-start-2 lg:pl-12" : "lg:pr-12 lg:justify-end"
                  )}
                >
                  <span className="text-sm font-mono text-muted">{job.period}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
