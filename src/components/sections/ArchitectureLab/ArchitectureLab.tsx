"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ARCHITECTURE_TABS } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export function ArchitectureLab() {
  const [activeTab, setActiveTab] = useState<string>(ARCHITECTURE_TABS[0].id);
  const activeArch = ARCHITECTURE_TABS.find((t) => t.id === activeTab)!;

  return (
    <section id="architecture-lab" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="05" label="Architecture Lab" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Architecture Lab
          </h2>
          <p className="text-muted max-w-2xl mb-12 text-lg">
            Select an architecture pattern to explore how it&apos;s designed.
          </p>
        </ScrollReveal>

        {/* Tabs */}
        <ScrollReveal>
          <div className="flex overflow-x-auto pb-2 gap-2 mb-8 max-w-full sm:flex-wrap shrink-0">
            {ARCHITECTURE_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-lg border transition-all",
                  activeTab === tab.id
                    ? "bg-accent/10 text-accent border-accent/30 shadow-[0_0_10px_rgba(88,166,255,0.1)]"
                    : "bg-surface border-border text-muted hover:text-foreground hover:border-border-hover"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Diagram */}
        <div className="glow-card p-6 sm:p-8 lg:p-10 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-muted mb-8">{activeArch.description}</p>

              <div className="flex flex-col gap-3 max-w-lg mx-auto">
                {activeArch.nodes.map((node, i) => (
                  <div key={node.id}>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      className="flex items-center gap-4 px-5 py-4 rounded-lg border border-border bg-surface-2/50 hover:border-border-glow hover:shadow-[0_0_15px_rgba(88,166,255,0.06)] transition-all group"
                    >
                      {/* Node dot */}
                      <div className="w-3 h-3 rounded-full bg-accent/50 group-hover:bg-accent transition-colors shadow-[0_0_8px_rgba(88,166,255,0.3)]" />

                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-semibold text-foreground">
                          {node.label}
                        </div>
                        <div className="text-xs text-muted mt-0.5">
                          {node.description}
                        </div>
                      </div>
                    </motion.div>

                    {/* Connecting arrow */}
                    {i < activeArch.nodes.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.08 + 0.05, duration: 0.2 }}
                        className="flex justify-center py-1"
                        style={{ transformOrigin: "top" }}
                      >
                        <div className="w-px h-4 bg-accent/20" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
