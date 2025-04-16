// /* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Controller,
  EffectCoverflow,
  Pagination,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const slides = [
  {
    title: "The Benefits Of Traveling With A Second Language",
    category: ["Lifestyle", "Trending"],
    author: "Jessica Smith",
    date: "December 18, 2024",
    image: "/images/664564563-440x440.jpg",
  },
  {
    title: "Why Sports Cars Are Still Relevant",
    category: ["Automobile"],
    author: "David Lee",
    date: "December 16, 2024",
    image: "/images/7454574545-440x440.jpg",
  },
  {
    title: "How Skateboarding Is Changing The World",
    category: ["Culture"],
    author: "Mike Johnson",
    date: "December 14, 2024",
    image: "/images/arafed-skateboard-with-colorful-design-440x440.jpg",
  },
  {
    title: "How Skateboarding Is Changing The World",
    category: ["Culture"],
    author: "Mike Johnson",
    date: "December 14, 2024",
    image: "/images/motorcycle-safety-helmet-1024x1024.jpg",
  },
];

export default function CustomSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  //   const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

  // On load, make sure both Swipers are synced and start at slide 0
  //   useEffect(() => {
  //     if (mainSwiper && thumbsSwiper) {
  //       mainSwiper.slideTo(0);
  //       thumbsSwiper.slideTo(0);
  //     }
  //   }, [mainSwiper, thumbsSwiper]);

  //   console.log(setThumbsSwiper(thumbsSwiper));

  return (
    <div className="relative w-full h-[700px] bg-black">
      {/* Main Slider */}
      <Swiper
        watchSlidesProgress
        modules={[Pagination, Thumbs, Autoplay, Controller]}
        controller={{ control: thumbsSwiper }}
        pagination={{ clickable: true }}
        thumbs={{ swiper: thumbsSwiper }}
        initialSlide={0}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        onSwiper={setThumbsSwiper}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div className="relative z-20 text-center px-4 max-w-2xl text-white">
                <div className="space-x-2 mb-2">
                  {slide.category.map((cat, i) => (
                    <span key={i} className="text-sm text-pink-400 font-medium">
                      #{cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-sm font-medium">
                  By {slide.author} &nbsp;—&nbsp; {slide.date}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-[400px] px-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          watchSlidesProgress
          slidesPerView={3}
          //   initialSlide={0}
          spaceBetween={20}
          centeredSlides={true}
          //   speed={1000}
          //   touchRatio={0.2}
          loopAddBlankSlides={true}
          //   slidesPerGroup={1}
          //   grabCursor={true}
          slideToClickedSlide={true}
          controller={{ control: thumbsSwiper }}
          modules={[EffectCoverflow, Autoplay, Controller]}
          //   autoplay={{ delay: 2000, disableOnInteraction: false }}
          //   effect={"coverflow"}
          //   coverflowEffect={{
          //     rotate: 0,
          //     stretch: 0,
          //     depth: 100,
          //     modifier: 3,
          //     slideShadows: true,
          //   }}
          loop={true}
          className="cursor-pointer"
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="w-100 h-100 rounded-full overflow-hidden border-2  transition-transform duration-300 border-white/40 swiper-slide-thumb "
            >
              <Image
                src={slide.image}
                alt={`Thumb ${index}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// // /* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Autoplay,
//   Controller,
//   //   EffectCoverflow,
//   Pagination,
//   //   Thumbs,
// } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/thumbs";

// import Image from "next/image";
// import { useState } from "react";
// import type { Swiper as SwiperType } from "swiper";

// const slides = [
//   {
//     title: "The Benefits Of Traveling With A Second Language",
//     category: ["Lifestyle", "Trending"],
//     author: "Jessica Smith",
//     date: "December 18, 2024",
//     image: "/images/664564563-440x440.jpg",
//   },
//   {
//     title: "Why Sports Cars Are Still Relevant",
//     category: ["Automobile"],
//     author: "David Lee",
//     date: "December 16, 2024",
//     image: "/images/7454574545-440x440.jpg",
//   },
//   {
//     title: "How Skateboarding Is Changing The World",
//     category: ["Culture"],
//     author: "Mike Johnson",
//     date: "December 14, 2024",
//     image: "/images/arafed-skateboard-with-colorful-design-440x440.jpg",
//   },
//   {
//     title: "How Skateboarding Is Changing The World",
//     category: ["Culture"],
//     author: "Mike Johnson",
//     date: "December 14, 2024",
//     image: "/images/motorcycle-safety-helmet-1024x1024.jpg",
//   },
// ];

// export default function CustomSlider() {
//   //   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
//   const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);

//   // On load, make sure both Swipers are synced and start at slide 0
//   //   useEffect(() => {
//   //     if (mainSwiper && thumbsSwiper) {
//   //       mainSwiper.slideTo(0);
//   //       thumbsSwiper.slideTo(0);
//   //     }
//   //   }, [mainSwiper, thumbsSwiper]);

//   //   console.log(setThumbsSwiper(thumbsSwiper));

//   return (
//     <div className="relative w-full h-[700px] bg-black">
//       {/* Main Slider */}
//       <Swiper
//         modules={[Pagination, Autoplay, Controller]}
//         controller={{ control: mainSwiper }}
//         pagination={{ clickable: true }}
//         // thumbs={{ swiper: thumbsSwiper }}
//         initialSlide={0}
//         autoplay={{ delay: 4000, disableOnInteraction: false }}
//         loop={true}
//         onSwiper={setMainSwiper}
//         className="w-full h-full"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="relative w-full h-full bg-center bg-cover flex items-center justify-center"
//               style={{ backgroundImage: `url(${slide.image})` }}
//             >
//               <div className="absolute inset-0 bg-black/50 z-10" />
//               <div className="relative z-20 text-center px-4 max-w-2xl text-white">
//                 <div className="space-x-2 mb-2">
//                   {slide.category.map((cat, i) => (
//                     <span key={i} className="text-sm text-pink-400 font-medium">
//                       #{cat}
//                     </span>
//                   ))}
//                 </div>
//                 <h2 className="text-3xl md:text-5xl font-bold mb-4">
//                   {slide.title}
//                 </h2>
//                 <p className="text-sm font-medium">
//                   By {slide.author} &nbsp;—&nbsp; {slide.date}
//                 </p>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Thumbnails */}
//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 w-full max-w-[400px] px-4">
//         <Swiper
//           onSwiper={setMainSwiper}
//           watchSlidesProgress
//           slidesPerView={3}
//           //   controller={{ control: mainSwiper }}
//           initialSlide={0}
//           spaceBetween={20}
//           centeredSlides={true}
//           //   loopAddBlankSlides={true}
//           //   slidesPerGroup={1}
//           //   grabCursor={true}
//           slideToClickedSlide={true}
//           modules={[Autoplay, Controller]}
//           //   autoplay={{ delay: 4000, disableOnInteraction: false }}
//           //   effect={"coverflow"}
//           //   coverflowEffect={{
//           //     rotate: 0,
//           //     stretch: 0,
//           //     depth: 100,
//           //     modifier: 3,
//           //     slideShadows: true,
//           //   }}
//           loop={true}
//           className="cursor-pointer"
//         >
//           {slides.map((slide, index) => (
//             <SwiperSlide
//               key={index}
//               className="w-100 h-100 rounded-full overflow-hidden border-2  transition-transform duration-300 border-white/40 swiper-slide-thumb "
//             >
//               <Image
//                 src={slide.image}
//                 alt={`Thumb ${index}`}
//                 width={80}
//                 height={80}
//                 className="object-cover w-full h-full"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
