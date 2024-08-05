"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import dynamic from "next/dynamic";
import ModelCards from "@/components/main/ModelCards";
import { threedmodels } from "@/locaDBs/threeDmodelsDB";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Scene = dynamic(() => import("@/components/scenes/Scene"), {
  ssr: false,
});

export default function CardCarousel() {

  return (
    <Swiper
      direction={"vertical"}
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel, Pagination]}
      className="h-[40rem] lg:h-[28rem] my-swiper"
    >
      {threedmodels.map((model, index) => (
        <SwiperSlide key={index}>
          <ModelCards
            title={model.title}
            description={model.description}
            scene={model.scene}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
