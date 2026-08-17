"use client";

import { Canvas } from "@react-three/fiber";
import NetworkGraphScene from "./NetworkGraph";

export default function NetworkGraphCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 60 }}>
      <NetworkGraphScene />
    </Canvas>
  );
}
