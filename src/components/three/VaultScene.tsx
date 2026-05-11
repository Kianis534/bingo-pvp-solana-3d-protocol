"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const VaultScene = () => {
  const groupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.2;
    ringRef.current.rotation.x = time * 0.5;
    ringRef.current.rotation.z = time * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Central Cube */}
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#0066ff"
          transparent
          opacity={0.4}
          metalness={1}
          roughness={0}
        />
      </mesh>
      
      {/* Wireframe Cube */}
      <mesh>
        <boxGeometry args={[2.1, 2.1, 2.1]} />
        <meshStandardMaterial
          color="#00f3ff"
          wireframe
          emissive="#00f3ff"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Security Rings */}
      <mesh ref={ringRef}>
        <torusGeometry args={[3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#00ff66" emissive="#00ff66" emissiveIntensity={1.5} />
      </mesh>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ff00ff" emissive="#ff00ff" emissiveIntensity={1} />
      </mesh>
    </group>
  );
};
