"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Float } from "@react-three/drei";
import { ParticleField } from "./ParticleField";
import { CyberGrid } from "./CyberGrid";

interface ArenaSceneProps {
  children?: React.ReactNode;
  cameraPosition?: [number, number, number];
  showGrid?: boolean;
}

export const ArenaScene = ({
  children,
  cameraPosition = [0, 0, 10],
  showGrid = true,
}: ArenaSceneProps) => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#9d00ff" />
          
          <ParticleField />
          {showGrid && <CyberGrid />}
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {children}
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
};
