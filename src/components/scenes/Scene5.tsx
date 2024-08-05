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
import Model5 from "../models/Model5";

function Progressive() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const Scene5 = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      shadows
      className={`relative h-screen w-full cursor-grab`}
    >
      <directionalLight
          position={[2, 2, 5]} // Adjust position to highlight the front
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
      <ambientLight intensity={2} castShadow />
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model5 />
      </Suspense>
      <Environment preset="warehouse" environmentIntensity={1} backgroundIntensity={0.5} />
    </Canvas>
  );
};

export default Scene5;
