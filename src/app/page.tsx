// /* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import logo from "@/static/logo/logo-dark.png";
import hero1 from "@/static/image/slider-image1.png";
import Link from "next/link";
import { Nunito_Sans, Raleway } from "next/font/google";
import { ChevronRight, Search } from "lucide-react";
// import Seliders from "./selider/page";

import CustomSlider from "./test/page";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <div>
        <div
          className={`${nunito.className} flex justify-center bg-[#ffffff] navgb`}
        >
          <div className="max-w-[1400px] w-full">
            <div className="mx-[20px] py-[20px] ">
              <nav className="w-full flex justify-between">
                <div>
                  <Image src={logo} alt="LOGO" className="w-[188px]  " />
                </div>
                <div className="flex justify-center items-center">
                  <div className="text-[14px] font-[800] flex justify-between items-center gap-[50px]  ">
                    <Link href={"#"}>HOME</Link>
                    <Link href={"#"}>PAGES</Link>
                    <Link href={"#"}>COURSES</Link>
                    <Link href={"#"}>PORTFOLO</Link>
                    <Link href={"#"}>BLOG</Link>
                    <Link href={"#"}>SHOP</Link>
                  </div>
                </div>
                <div className="">
                  <div className="bg-[#F1F6FF] flex py-[10px] px-[20px] rounded-3xl ">
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="SEARCH"
                      className="w-[150px] "
                    />
                    <Search />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <section className="flex justify-center bg-[#ffffff] ">
          <div className="max-w-[1400px] w-full">
            <div className="mx-[20px] py-[20px] mt-[30px] ">
              <div className="w-full flex justify-between">
                <div className="flex flex-col justify-center ">
                  <h1
                    className={`${raleway.className} text-[80px] font-[600] text-[#1C2437] leading-[87.9px] `}
                  >
                    <span className="font-[100] ">Modern Life</span>
                    <br /> Coach School Podcast
                  </h1>
                  <p
                    className={`${nunito.className} text-[18px] font-[600] text-[#415674] leading-[32px] w-[500px] `}
                  >
                    We understand the importance of approaching each work
                    integrally and believe in the power of simple.
                  </p>
                  <div>
                    <div>
                      <button
                        className={`${nunito.className} px-[36px]  bg-[#40d75e] rounded-3xl text-[14px] font-[700] text-[#fff] leading-[50px] flex justify-center items-center gap-[6px] `}
                      >
                        GET COACH
                        <ChevronRight className="size-[20px] " />
                      </button>
                    </div>
                    <div>
                      <span> </span>
                      Watch Video
                    </div>
                  </div>
                </div>
                <div>
                  <Image src={hero1} alt="LOGO" className="  " />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex justify-center bg-[#ffffff] ">
          <div className="max-w-[1400px] w-full">
            <div className="mx-[20px] py-[20px] mt-[30px] ">
              <div className="w-full ">
                {/* <HeroSlider /> */}
                <CustomSlider />

                {/* <LinkedSwipers /> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
