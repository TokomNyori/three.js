"use client";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Group } from "three";

useGLTF.preload("/3dmodels/robo.glb");

const ModelRobo = () => {
  const groupRef = useRef<Group>(null);
  const [isMobileView, setIsMobileView] = useState<boolean>();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const width = window.innerWidth;
    //console.log(height)
    if (width < 641) {
      setIsMobileView(true);
    } else {
      setIsMobileView(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    function handleResize() {
      const width = window.innerWidth;
      if (width < 641) {
        setIsMobileView(true);
      } else {
        setIsMobileView(false);
      }
    }
    // Add the event listener
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const { nodes, materials, animations, scene } = useGLTF("/3dmodels/robo.glb");
  const [animationProgress, setAnimationProgress] = useState(0);
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    const animationName = "Ship_v07_Animation"; // Replace with your animation name
    const anim = actions[animationName];
    if (anim) {
      anim.play();
      anim.paused = true;
    }
  }, [actions]);

  useFrame((state) => {
    const animationName = "Ship_v07_Animation"; // Replace with your animation name
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
    <group ref={groupRef} scale={0.03}>
      <primitive object={scene} />
    </group>
  );
};

export default ModelRobo;
