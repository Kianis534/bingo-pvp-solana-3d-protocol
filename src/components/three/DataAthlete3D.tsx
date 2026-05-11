"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

export const DataAthlete3D = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.5;
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.3, 32, 32]} />
        <MeshDistortMaterial
          color="#00f3ff"
          emissive="#00f3ff"
          emissiveIntensity={2}
          distort={0.3}
          speed={4}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Body Core */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.2, 0.4, 1.2, 8]} />
        <meshStandardMaterial
          color="#9d00ff"
          wireframe
          emissive="#9d00ff"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Data Rings */}
      {Array.from({ length: 3 }).map((_, i) => (
        <mesh key={i} position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, (i * Math.PI) / 3]}>
          <torusGeometry args={[0.8 + i * 0.2, 0.01, 16, 100]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#00f3ff" : "#ff00ff"}
            emissive={i % 2 === 0 ? "#00f3ff" : "#ff00ff"}
            emissiveIntensity={2}
          />
        </mesh>
      ))}

      {/* Floating Particles around athlete */}
      <Float speed={5} rotationIntensity={2} floatIntensity={2}>
        <Sphere args={[0.05]} position={[1, 1, 1]}>
          <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={5} />
        </Sphere>
        <Sphere args={[0.05]} position={[-1, 0, -1]}>
          <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={5} />
        </Sphere>
      </Float>
    </group>
  );
};
