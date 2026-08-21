"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>(TECH_STACK[0].category);

  return (
    <section id="skills" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="06" label="Tech Stack" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technologies & Skills
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            Tools and technologies I use to build production systems.
          </p>
        </ScrollReveal>

        {/* Category tabs */}
        <ScrollReveal>
          <div className="flex overflow-x-auto pb-2 gap-2 mb-8 max-w-full sm:flex-wrap shrink-0">
            {TECH_STACK.map((category) => {
              const isActive = activeCategory === category.category;
              return (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg border transition-colors",
                    isActive
                      ? "text-accent border-accent/30 font-semibold"
                      : "bg-surface border-border text-muted hover:text-foreground hover:border-border-hover"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTechCategory"
                      className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/30 -z-10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  {category.category}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Tech items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {TECH_STACK.find((c) => c.category === activeCategory)?.items.map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, type: "spring", stiffness: 350, damping: 22 }}
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="glow-card px-4 py-3 flex items-center gap-3 cursor-default border border-border/80 hover:border-accent/40 hover:shadow-[0_4px_20px_rgba(88,166,255,0.1)] transition-colors group"
              >
                <div className="w-2 h-2 rounded-full bg-accent/50 group-hover:bg-accent transition-colors shadow-[0_0_6px_rgba(88,166,255,0.4)]" />
                <span className="text-sm font-mono text-foreground/90 group-hover:text-foreground transition-colors">{item}</span>
              </motion.div>
            )
          )}
        </motion.div>

        {/* All categories grid (always visible below for scanability) */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TECH_STACK.map((category, ci) => (
            <ScrollReveal key={category.category} delay={ci * 0.05}>
              <div className="p-5 rounded-lg border border-border bg-surface/50">
                <h3 className="text-sm font-semibold text-accent mb-3">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-2 py-1 rounded bg-surface-2 text-muted border border-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
