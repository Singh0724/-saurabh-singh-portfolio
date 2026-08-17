"use client";

import { Award, BookOpen } from "lucide-react";
import { ACHIEVEMENTS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="07" label="Achievements" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-12">
            Recognition & Contributions
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {ACHIEVEMENTS.map((achievement, i) => {
            const isAward = achievement.position.includes("Place");
            return (
              <ScrollReveal key={achievement.title} delay={i * 0.1}>
                <div className="glow-card p-6 sm:p-8 h-full relative overflow-hidden">
                  {/* Decorative background pattern */}
                  {isAward && (
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage: `
                          linear-gradient(30deg, transparent 40%, rgba(88,166,255,0.3) 40%, rgba(88,166,255,0.3) 41%, transparent 41%),
                          linear-gradient(150deg, transparent 40%, rgba(88,166,255,0.3) 40%, rgba(88,166,255,0.3) 41%, transparent 41%),
                          linear-gradient(90deg, transparent 49%, rgba(88,166,255,0.2) 49%, rgba(88,166,255,0.2) 51%, transparent 51%)
                        `,
                        backgroundSize: "40px 40px",
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5">
                      {isAward ? (
                        <Award className="w-6 h-6 text-accent" />
                      ) : (
                        <BookOpen className="w-6 h-6 text-accent" />
                      )}
                    </div>

                    <div className="text-2xl font-bold text-accent mb-1">
                      {achievement.position}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    {achievement.project && (
                      <div className="text-sm font-mono text-muted mb-3">
                        Project: {achievement.project}
                      </div>
                    )}
                    <p className="text-sm text-muted leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
