"use client";

import { Grid } from "@react-three/drei";

export const CyberGrid = () => {
  return (
    <group position={[0, -5, 0]}>
      <Grid
        infiniteGrid
        fadeDistance={50}
        fadeStrength={5}
        sectionSize={1}
        sectionThickness={1}
        sectionColor="#00f3ff"
        cellSize={0.5}
        cellThickness={0.5}
        cellColor="#0066ff"
      />
    </group>
  );
};
