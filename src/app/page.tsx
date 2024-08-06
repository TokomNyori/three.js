import CardCarousel from "@/components/main/CardCarousel";
import InitialLoading from "@/components/main/InitialLoading";
import dynamic from "next/dynamic";

const SceneRobo = dynamic(() => import("@/components/scenes/SceneRobo"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-screen w-full pt-16 pb-8 flex justify-center items-end px-2 lg:px-8 relative">
      {/* <div className="absolute h-screen w-full -top-24 lg:-top-20 right-0 -z-20 overflow-hidden">
        <SceneRobo />
      </div> */}
      <CardCarousel />
      <InitialLoading/>
    </main>
  );
}
