"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import selider1 from "@/static/664564563-440x440.jpg";
import selider2 from "@/static/7454574545-440x440.jpg";
import selider3 from "@/static/arafed-skateboard-with-colorful-design-440x440.jpg";
import selider4 from "@/static/motorcycle-safety-helmet-1024x1024.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

export default function Seliders() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper relative"
      >
        <SwiperSlide>
          <Image src={selider1} alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={selider2} alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={selider3} alt="Slide 3" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={selider4} alt="Slide 4" />
        </SwiperSlide>

        {/* Move pagination to bottom-left */}
        {/* <div className="swiper-pagination !left-4 !top-4 !text-left absolute"></div> */}
      </Swiper>
    </div>
  );
}
