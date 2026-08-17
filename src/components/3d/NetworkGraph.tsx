"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { NETWORK_NODES, NETWORK_CONNECTIONS } from "@/lib/data";

function Node({
  node,
  activeTooltip,
  setActiveTooltip,
}: {
  node: (typeof NETWORK_NODES)[number];
  activeTooltip: string | null;
  setActiveTooltip: (id: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const isHovered = activeTooltip === node.id;
  const isCore = node.id === "core";

  useFrame((state) => {
    if (meshRef.current && isCore) {
      const t = state.clock.getElapsedTime();
      const scale = 1 + Math.sin(t * 2) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={node.position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setActiveTooltip(node.id);
        }}
        onPointerOut={() => setActiveTooltip(null)}
      >
        <sphereGeometry args={[node.size, 32, 32]} />
        <meshStandardMaterial
          color={isCore ? "#58a6ff" : isHovered ? "#79c0ff" : "#1e3a5f"}
          emissive={isCore ? "#58a6ff" : isHovered ? "#58a6ff" : "#0d1117"}
          emissiveIntensity={isCore ? 0.8 : isHovered ? 0.6 : 0.2}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* HTML Label / Tooltip */}
      <Html
        position={[0, node.size + 0.2, 0]}
        center
        distanceFactor={8}
        zIndexRange={[100, 0]}
      >
        <div
          className={`pointer-events-none transition-all duration-200 ${
            isHovered
              ? "scale-110 opacity-100 z-50"
              : "opacity-80 hover:opacity-100 scale-100"
          }`}
        >
          <div
            className={`px-2.5 py-1 rounded text-[11px] font-mono whitespace-nowrap border shadow-lg transition-colors ${
              isCore
                ? "bg-accent/20 text-accent border-accent/40 font-bold"
                : isHovered
                ? "bg-surface-2 text-accent border-accent/40"
                : "bg-surface/90 text-foreground/80 border-border"
            }`}
          >
            {node.label}
          </div>

          {isHovered && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-3 py-1.5 rounded-lg bg-[#080c10]/95 border border-accent/30 text-xs text-muted shadow-2xl whitespace-nowrap font-sans">
              {node.tooltip}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}

export default function NetworkGraphScene() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  const nodeMap = new Map(NETWORK_NODES.map((n) => [n.id, n.position]));

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[0, 0, 0]} intensity={1.5} color="#58a6ff" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={(2 * Math.PI) / 3}
      />

      <group ref={groupRef}>
        {/* Render Connection Lines */}
        {NETWORK_CONNECTIONS.map(([startId, endId]) => {
          const start = nodeMap.get(startId);
          const end = nodeMap.get(endId);
          if (!start || !end) return null;

          const isHighlighted =
            activeTooltip === startId || activeTooltip === endId;

          return (
            <Line
              key={`${startId}-${endId}`}
              points={[start, end]}
              color={isHighlighted ? "#58a6ff" : "#21262d"}
              lineWidth={isHighlighted ? 2 : 1}
              transparent
              opacity={isHighlighted ? 0.8 : 0.3}
            />
          );
        })}

        {/* Render Nodes */}
        {NETWORK_NODES.map((node) => (
          <Node
            key={node.id}
            node={node}
            activeTooltip={activeTooltip}
            setActiveTooltip={setActiveTooltip}
          />
        ))}
      </group>
    </>
  );
}
