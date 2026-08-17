"use client";

import { METRICS } from "@/lib/data";
import { useInView } from "@/lib/hooks/useInView";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

function MetricCard({ value, suffix, label, delay }: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, isInView } = useInView(0.3);
  const count = useCountUp({ end: value, enabled: isInView });

  return (
    <ScrollReveal delay={delay}>
      <div ref={ref} className="glow-card p-6 sm:p-8 text-center">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-2">
          {count}
          <span className="text-accent/80">{suffix}</span>
        </div>
        <div className="text-sm text-muted leading-snug">{label}</div>
      </div>
    </ScrollReveal>
  );
}

export function Impact() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="01" label="Impact" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Measurable Results
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            Performance improvements and engineering outcomes backed by real production data.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {METRICS.map((metric, i) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
