"use client";

import { motion } from "framer-motion";
import { CASE_STUDIES } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

function FlowDiagram({ nodes, type }: { nodes: string[]; type: string }) {
  return (
    <div className="flex flex-col gap-2 my-6">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-3">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex items-center gap-3 w-full"
          >
            <div className="w-2 h-2 rounded-full bg-accent/60 shrink-0 shadow-[0_0_6px_rgba(88,166,255,0.4)]" />
            <div className="flex-1 px-3 py-2 rounded border border-border bg-surface-2/50 text-xs font-mono text-foreground/80">
              {node}
            </div>
          </motion.div>
          {i < nodes.length - 1 && (
            <div className="absolute left-[7px] mt-8 w-px h-4 bg-accent/20" />
          )}
        </div>
      ))}
    </div>
  );
}

function PerformanceBar() {
  return (
    <div className="space-y-3 my-6">
      <div>
        <div className="text-xs font-mono text-muted mb-1">Before optimization</div>
        <div className="h-3 rounded-full bg-surface-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-full rounded-full bg-red/40"
          />
        </div>
      </div>
      <div>
        <div className="text-xs font-mono text-muted mb-1">After optimization</div>
        <div className="h-3 rounded-full bg-surface-2 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-full rounded-full bg-green/60"
          />
        </div>
      </div>
      <div className="text-xs text-muted text-right font-mono">
        40% faster →
      </div>
    </div>
  );
}

const diagramNodes: Record<string, string[]> = {
  performance: ["Database Analysis", "Index Redesign", "Query Optimization", "Redis Caching", "Service Refactoring"],
  auth: ["Client Request", "API Gateway", "Auth Middleware", "JWT / OAuth 2.0 / Sanctum", "Authorization Check", "Protected Resource"],
  event: ["Producer Service", "Redis Pub/Sub Channel", "Consumer Service", "Side Effect / Action", "Real-time Update"],
  deployment: ["Git Push", "GitHub Actions", "PHPUnit / PestPHP", "PHPStan Analysis", "Docker Build", "Nginx Config", "AWS EC2 / S3 / RDS"],
};

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="04" label="Case Studies" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Engineering Case Studies
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            Real problems, real architectures, real results.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <ScrollReveal key={study.number} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="glow-card p-6 sm:p-8 h-full flex flex-col transition-all hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(88,166,255,0.1)]"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl font-bold text-accent/20 font-mono leading-none">
                    {study.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {study.title}
                    </h3>
                  </div>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-1">
                    Problem
                  </div>
                  <p className="text-sm text-muted leading-relaxed">
                    {study.problem}
                  </p>
                </div>

                {/* Diagram */}
                {study.diagramType === "performance" ? (
                  <PerformanceBar />
                ) : (
                  <FlowDiagram
                    nodes={diagramNodes[study.diagramType] || []}
                    type={study.diagramType}
                  />
                )}

                {/* Approach */}
                <div className="mb-4">
                  <div className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-2">
                    Approach
                  </div>
                  <ul className="space-y-1.5">
                    {study.approach.map((step, si) => (
                      <li key={si} className="text-sm text-muted flex gap-2">
                        <span className="text-accent/50 shrink-0">→</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Result */}
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-1">
                    Result
                  </div>
                  <p className="text-sm font-medium text-green">
                    {study.result}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {study.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs font-mono px-2 py-1 rounded bg-surface-2 text-muted border border-border transition-colors hover:border-accent/30 hover:text-foreground"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
