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

function Progressive() {
  const { progress, active } = useProgress();
  return <Html center>Loading 3D Model. {progress.toFixed(1)} % loaded</Html>;
}

const Scene = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className={`relative h-screen w-full cursor-grab`}
    >
      {/* <directionalLight 
        position={[5, 5, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      <ambientLight intensity={1.5} />
      <OrbitControls enableZoom={false} enableRotate={true} autoRotate={true} />
      <Suspense fallback={<Progressive />}>
        <Model />
      </Suspense>
      <Environment preset="sunset" environmentIntensity={1} />
    </Canvas>
  );
};

export default Scene;
