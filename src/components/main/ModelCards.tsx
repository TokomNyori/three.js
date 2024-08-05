import React from "react";
import dynamic from "next/dynamic";
import { GeistSans } from "geist/font/sans";
import { ComponentType } from "react";
const Scene = dynamic(() => import("@/components/scenes/Scene"), {
  ssr: false,
});

const Scene2 = dynamic(() => import("@/components/scenes/Scene2"), {
    ssr: false,
  });


// Type for the dynamically imported components
// Type for the dynamically imported components
type DynamicSceneComponent = ComponentType<{}>;

// Update ModelCardsProps to use the correct type for scene
type ModelCardsProps = {
  title: string;
  description: string;
  scene: any;
};

function ModelCards({ title, description, scene }: ModelCardsProps) {
  return (
    <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-center backdrop-blur-md bg-zinc-400/20 lg:pr-10 relative rounded-xl w-full z-10">
      {/* <div className="absolute w-full max-w-lg -z-10 inset-0 left-0 right-0 mx-auto rounded-full bg-blue-400/25 blur-3xl filter"></div> */}
      <div className="h-[24rem] lg:w-1/2 lg:h-[28rem] w-full">
        {scene}
      </div>
      <div className="lg:w-1/2 px-4 pb-4">
        <h1 className="uppercase mb-2 text-3xl lg:text-4xl">{title}</h1>
        <p className={`${GeistSans.className}`}>{description}</p>
      </div>
    </div>
  );
}

export default ModelCards;
