// swiper-custom.d.ts
import "swiper";

declare module "swiper" {
  interface SwiperOptions {
    loopFillGroupWithBlank?: boolean;
  }
}
