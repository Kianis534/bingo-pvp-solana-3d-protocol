"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Text } from "@react-three/drei";

export const BPTToken3D = () => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.y = time * 1.5;
    meshRef.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <group>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial
          color="#ffd700"
          metalness={0.9}
          roughness={0.1}
          emissive="#ffd700"
          emissiveIntensity={0.5}
        />
      </mesh>
      <Text
        position={[0, 0, 0.11]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        BPT
      </Text>
      <Text
        position={[0, 0, -0.11]}
        fontSize={0.5}
        color="black"
        anchorX="center"
        anchorY="middle"
        rotation={[0, Math.PI, 0]}
      >
        BPT
      </Text>
    </group>
  );
};
