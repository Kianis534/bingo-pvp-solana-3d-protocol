"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export const BingoBoard3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const [numbers, setNumbers] = useState<number[][]>([]);

  // Generate random 5x5 board
  const generateBoard = () => {
    const nums = Array.from({ length: 25 }, (_, i) => i + 1);
    const shuffled = nums.sort(() => Math.random() - 0.5);
    const board = [];
    for (let i = 0; i < 5; i++) {
      board.push(shuffled.slice(i * 5, (i + 1) * 5));
    }
    return board;
  };

  useEffect(() => {
    setNumbers(generateBoard());
    const interval = setInterval(() => {
      setNumbers(generateBoard());
    }, 2000); // Change numbers every 2 seconds for more activity
    return () => clearInterval(interval);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef}>
        {/* Board Background - Made it semi-transparent but lighter than before */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[5.5, 5.5]} />
          <meshStandardMaterial
            color="#001a33"
            transparent
            opacity={0.4}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Outer Glow Frame */}
        <mesh position={[0, 0, -0.15]}>
          <planeGeometry args={[5.8, 5.8]} />
          <meshStandardMaterial
            color="#00f3ff"
            transparent
            opacity={0.1}
            emissive="#00f3ff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Board Grid Lines - Brighter Cyan */}
        {Array.from({ length: 6 }).map((_, i) => (
          <group key={i}>
            <mesh position={[i - 2.5, 0, 0]}>
              <boxGeometry args={[0.04, 5, 0.08]} />
              <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={3} />
            </mesh>
            <mesh position={[0, i - 2.5, 0]}>
              <boxGeometry args={[5, 0.04, 0.08]} />
              <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={3} />
            </mesh>
          </group>
        ))}

        {/* Numbers - Increased size and brightness */}
        {numbers.map((row, i) =>
          row.map((num, j) => (
            <Text
              key={`${i}-${j}`}
              position={[j - 2, 2 - i, 0.15]}
              fontSize={0.5}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.02}
              outlineColor="#00f3ff"
            >
              {num}
            </Text>
          ))
        )}
      </group>
    </Float>
  );
};
