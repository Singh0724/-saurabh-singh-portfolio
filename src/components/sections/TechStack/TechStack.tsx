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
          <div className="flex flex-wrap gap-2 mb-8">
            {TECH_STACK.map((category) => (
              <button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg border transition-all",
                  activeCategory === category.category
                    ? "bg-accent/10 text-accent border-accent/30"
                    : "bg-surface border-border text-muted hover:text-foreground hover:border-border-hover"
                )}
              >
                {category.category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Tech items */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {TECH_STACK.find((c) => c.category === activeCategory)?.items.map(
            (item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ y: -2, transition: { duration: 0.15 } }}
                className="glow-card px-4 py-3 flex items-center gap-3 cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-accent/40" />
                <span className="text-sm font-mono text-foreground/90">{item}</span>
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
