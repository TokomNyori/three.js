"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import Model3 from "../models/Model3";

function Progressive() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const Scene3 = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      shadows
      className={`relative h-screen w-full cursor-pointer`}
    >
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={1} castShadow />
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model3 />
      </Suspense>
      <Environment
        preset="sunset"
        environmentIntensity={2}
        backgroundIntensity={1}
      />
    </Canvas>
  );
};

export default Scene3;
