"use client";

import { Server, Zap, Container } from "lucide-react";
import { VALUE_PROPS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Zap,
  Container,
};

export function Recruiter() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="08" label="Value" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What I Can Bring to Your Engineering Team
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            End-to-end backend engineering from architecture to production.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = iconMap[prop.icon] || Server;
            return (
              <ScrollReveal key={prop.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glow-card p-6 sm:p-8 h-full flex flex-col text-center items-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {prop.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div className="text-center">
            <p className="text-muted text-sm font-mono">
              Open to{" "}
              <span className="text-accent">Backend Engineer</span> /{" "}
              <span className="text-accent">Senior Backend Engineer</span>{" "}
              opportunities
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
