"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { EDUCATION } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StaggerContainer, StaggerItem } from "@/components/ui/Motion";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="07" label="Education" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Academic Background
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            Formal degrees in Computer Applications and Computer Science.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <StaggerItem key={edu.degree}>
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="glow-card p-6 sm:p-8 flex flex-col justify-between h-full border border-border/80 hover:border-accent/40 transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-accent font-medium mb-3">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted pt-4 border-t border-border mt-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-accent/60" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent/60" />
                    {edu.location}
                  </span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
