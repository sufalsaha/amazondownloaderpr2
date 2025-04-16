// components/LinkedSwipers.tsx
"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";

export default function LinkedSwipers() {
  const swiper1Ref = useRef<SwiperCore | null>(null);
  const swiper2Ref = useRef<SwiperCore | null>(null);

  return (
    <div className="flex flex-col gap-6">
      {/* First Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiper1Ref.current = swiper;
        }}
        controller={{ control: swiper2Ref.current }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="p-4 bg-blue-200">Slider 1 - Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-blue-200">Slider 1 - Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-blue-200">Slider 1 - Slide 3</div>
        </SwiperSlide>
      </Swiper>

      {/* Second Swiper */}
      <Swiper
        onSwiper={(swiper) => {
          swiper2Ref.current = swiper;
        }}
        controller={{ control: swiper1Ref.current }}
        slidesPerView={3}
        spaceBetween={10}
      >
        <SwiperSlide>
          <div className="p-4 bg-green-200">Slider 2 - Slide 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-green-200">Slider 2 - Slide 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-4 bg-green-200">Slider 2 - Slide 3</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
