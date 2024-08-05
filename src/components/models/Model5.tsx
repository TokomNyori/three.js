"use client";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("/3dmodels/iphone14.glb");

const Model5 = () => {
  const groupRef = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/3dmodels/iphone14.glb"
  );
  const [animationProgress, setAnimationProgress] = useState(0);
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  return (
    <group ref={groupRef} scale={32}>
      <primitive object={scene} />
    </group>
  );
};

export default Model5;
