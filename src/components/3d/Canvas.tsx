"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { NETWORK_NODES } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

const NetworkGraphCanvas = dynamic(() => import("./NetworkGraphCanvas"), {
  ssr: false,
  loading: () => <GraphFallback />,
});

function GraphFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 max-w-lg">
        {NETWORK_NODES.map((node) => (
          <div
            key={node.id}
            className={`p-3 rounded-lg border text-xs font-mono transition-all ${
              node.id === "core"
                ? "bg-accent/10 border-accent/40 text-accent font-bold col-span-3 sm:col-span-1"
                : "bg-surface border-border text-muted hover:border-border-glow"
            }`}
          >
            <div>{node.label}</div>
            <div className="text-[10px] text-faint mt-1 font-sans truncate">
              {node.tooltip.split("·")[0]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function NetworkSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionLabel number="04.5" label="System Architecture" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Interactive System Topology
          </h2>
          <p className="text-muted max-w-2xl mb-8 text-lg">
            A 3D visualization of the interconnected layers in modern production backend infrastructure. Hover over nodes to inspect details.
          </p>
        </ScrollReveal>

        <div className="glow-card h-[480px] w-full relative overflow-hidden flex items-center justify-center">
          {!isMounted || isMobile ? (
            <GraphFallback />
          ) : (
            <NetworkGraphCanvas />
          )}
        </div>
      </div>
    </section>
  );
}
