"use client";

import { motion } from "framer-motion";
import { Layers, Activity, Shield, Rocket, RefreshCw } from "lucide-react";
import { PHILOSOPHY } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  Activity,
  Shield,
  Rocket,
  RefreshCw,
};

export function Philosophy() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="02" label="Philosophy" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I Think About Backend Engineering
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            Principles that guide every system I design and build.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PHILOSOPHY.map((item, i) => {
            const Icon = iconMap[item.icon] || Layers;
            return (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glow-card p-6 sm:p-8 h-full flex flex-col group cursor-default"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-1 rounded bg-surface-2 text-muted border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
