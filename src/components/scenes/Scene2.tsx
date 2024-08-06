"use client";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import Model from "../models/Model";
import {
  Environment,
  Html,
  OrbitControls,
  PerspectiveCamera,
  ScrollControls,
  useProgress,
} from "@react-three/drei";
import Model2 from "../models/Model2";

function Progressive() {
  const { progress, active } = useProgress();
  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

const Scene2 = () => {
    
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      shadows
      className={`relative h-screen w-full cursor-grab`}
    >
      <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={1} castShadow />
      <OrbitControls enableZoom={false} enableRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model2 />
      </Suspense>
      <Environment preset="city" environmentIntensity={2} backgroundIntensity={1}  />
    </Canvas>
  );
};

export default Scene2;
