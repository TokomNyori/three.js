"use client";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("/3dmodels/earth5.glb");

const Model2 = () => {
  const groupRef = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/3dmodels/earth5.glb"
  );
  const [animationProgress, setAnimationProgress] = useState(0);
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    const animationName = "Animaci��n"; // Replace with your animation name
    const anim = actions[animationName];
    if (anim) {
      anim.play();
      anim.paused = true;
    }
  }, [actions]);

  useFrame((state) => {
    const animationName = "Animaci��n"; // Replace with your animation name
    const anim = actions[animationName];
    if (anim) {
      const clip = anim.getClip();
      // Update animation progress based on time
      const newProgress =
        (state.clock.getElapsedTime() % clip.duration) / clip.duration;
      setAnimationProgress(newProgress);
      anim.time = clip.duration * newProgress;
    }
  });

  return (
    <group ref={groupRef} scale={2}>
      <primitive object={scene} />
    </group>
  );
};

export default Model2;
