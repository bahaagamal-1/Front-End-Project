import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

import banner1 from "./banner2.jpg"
import banner2 from "./banner1.jpg"
import banner3 from "./banner3.jpg"
import style from './home.module.css'

export default function Silder() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
          loop={true}
                autoplay={{
                    delay: 3000,
                }}

        modules={[Pagination ,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className={style.banner}>
                    <img src={banner1} alt="banner" />
                    <div className={style.text}>
                        <span>New Tranding </span>
                        <h1>Sofa Collection</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                        <button className={style.button}>show now</button>
                    </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.banner}>
                    <img src={banner3} alt="banner" />
                     <div className={style.text}>
                        <span>Get up to 50% off Today Only!</span>
                        <h1>Wooden Chair Collection</h1>
                        <button className={style.button}>show now</button>
                    </div>
                   
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.banner}>
                    <img src={banner2} alt="banner" />
                     <div className={style.text}>
                        <span>Taking your Viewing Experience to Next Level</span>
                        <h1>Living Room Collection</h1>
                        <button className={style.button}>show now</button>
                    </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}