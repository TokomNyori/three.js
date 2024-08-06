"use client";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const Scene = dynamic(() => import("@/components/scenes/Scene"), {
  ssr: false,
});

const Scene2 = dynamic(() => import("@/components/scenes/Scene2"), {
  ssr: false,
});

const Scene3 = dynamic(() => import("@/components/scenes/Scene3"), {
  ssr: false,
});

const Scene4 = dynamic(() => import("@/components/scenes/Scene4"), {
  ssr: false,
});

const Scene5 = dynamic(() => import("@/components/scenes/SceneRobo"), {
  ssr: false,
});

// Update ModelCardsProps to use the correct type for scene
type ModelCardsProps = {
  title: string;
  description: string;
  scene: any;
};

export const threedmodels: ModelCardsProps[] = [
  {
    title: "cyberpunk laptop",
    scene: <Scene4 />,
    description: `Cyberpunk Laptop, a sleek marvel, embodies the futuristic blend of
      technology and style. Its neon-lit keys and holographic interface
      create a stunning visual display. This device represents the edge of
      innovation, merging high-tech functionality with a cyberpunk aesthetic.`,
  },
  {
    title: "cybernetic rover",
    scene: <Scene5 />,
    description: `Cybernetic Rover, a marvel of modern engineering, epitomizes the fusion
      of advanced robotics and rugged durability. Designed for exploration and
      complex tasks, it features a robust frame and versatile appendages. With its powerful build, the Cybernetic Rover is equipped
      to handle diverse environments.`,
  },
  {
    title: "earth",
    scene: <Scene />,
    description: `Earth, a radiant blue gem in the vast cosmos, captivates with its
      stunning beauty. Its vibrant landscapes—oceans, forests, and
      mountains—are bathed in golden dawn light and silver river glimmers.
      Cities sparkle with human vitality, while at night, the moon’s gentle
      glow illuminates tranquil seas.`,
  },
  {
    title: "human civilization",
    scene: <Scene2 />,
    description: `Human Civilization, a vibrant world, showcases the harmony between
      nature and human achievement. With lush forests, vast oceans, and
      thriving cities, it highlights the balance of ecosystems and human
      ingenuity. Human Civilization stands as a testament to resilience and progress.`,
  },
  {
    title: "mars",
    scene: <Scene3 />,
    description: `Mars, the red planet, is known for its rusty surface and stunning sunsets.
      Its terrain is a landscape of canyons, volcanoes, and polar ice caps.
      Mars presents a mysterious beauty, its atmosphere creating surreal hues
      during twilight, hinting at the possibilities of exploration and discovery.`,
  },
  // {
  //   title: "iphone 14 Pro",
  //   scene: <Scene5 />,
  //   description: `iPhone 14, a pinnacle of modern design and technology, features a
  //     sleek, elegant body with advanced functionality. Its vibrant display,
  //     powerful processor, and cutting-edge features make it a symbol of
  //     innovation. This device sets a new standard in smartphone excellence.`,
  // },
];
