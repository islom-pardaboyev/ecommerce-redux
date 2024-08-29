import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Instagram from "../assets/images/instagram.webp";
import Telegram from "../assets/images/telegram.png";
import YouTube from "../assets/images/youtube.png";

export default function App() {
  return (
    <>
      <Swiper id="home"
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="h-screen flex items-center justify-center bg-home-man bg-no-repeat bg-cover bg-center">
          <div className="container flex items-center justify-start text-white">
            <div className="w-[30vw]">
              <h1 className="text-5xl font-bold capitalize">
                welcome to our ecommerce website
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                in, eaque quibusdam quas quisquam perspiciatis! Dolores, quo
                neque. Rem hic aperiam ex consequatur dolore ullam sint,
                temporibus sed! Reiciendis, at.
              </p>
              <div className="flex items-center gap-5 mt-5">
                <a
                  href="#"
                  className="size-10 group rounded-full flex items-center justify-center bg-white"
                >
                  <img
                    width={25}
                    className="grayscale group-hover:grayscale-0 duration-300"
                    src={Instagram}
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="size-10 group rounded-full flex items-center justify-center bg-white"
                >
                  <img
                    width={25}
                    className="grayscale group-hover:grayscale-0 duration-300"
                    src={Telegram}
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="size-10 group rounded-full flex items-center justify-center bg-white"
                >
                  <img
                    width={25}
                    className="grayscale group-hover:grayscale-0 duration-300"
                    src={YouTube}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-screen flex items-center justify-center bg-home-woman bg-no-repeat bg-cover bg-center">
          <div className="container flex items-center justify-end text-white">
            <div className="w-[30vw] text-right">
              <h1 className="text-5xl font-bold capitalize">
                welcome to our ecommerce website
              </h1>
              <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                in, eaque quibusdam quas quisquam perspiciatis! Dolores, quo
                neque. Rem hic aperiam ex consequatur dolore ullam sint,
                temporibus sed! Reiciendis, at.
              </p>
              <div className="flex items-center gap-5 justify-end mt-5">
                <a
                  href="#"
                  className="size-10 group rounded-full flex items-center justify-center bg-white"
                >
                  <img
                    width={25}
                    className="grayscale group-hover:grayscale-0 duration-300"
                    src={Instagram}
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="size-10 group rounded-full flex items-center justify-center bg-white"
                >
                  <img
                    width={25}
                    className="grayscale group-hover:grayscale-0 duration-300"
                    src={Telegram}
                    alt=""
                  />
                </a>
                <a
                  href="#"
                  className="size-10 group rounded-full flex items-center justify-center bg-white"
                >
                  <img
                    width={25}
                    className="grayscale group-hover:grayscale-0 duration-300"
                    src={YouTube}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
