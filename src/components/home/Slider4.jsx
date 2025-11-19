import img1 from './png1.png'
import img2 from './png2.png'
import img3 from './png3.png'
import img4 from './png4.png'
import img5 from './png5.png'
import img6 from './png6.png'
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import './products.css'
import style from './home.module.css'

export default function Slider4() {

  return (
    <>
      <Swiper 
       breakpoints={
        {
          1290:{
            slidesPerView:6
          },
          850:{
            slidesPerView:4
          },
          650:{
            slidesPerView:3
          },
          300:{
            slidesPerView:2
          }
        }
      }
      slidesPerView={6}
      spaceBetween={30}
      loop= {true}
       autoplay={{
                    delay: 2000,
                }}
      modules={[Autoplay]}
      className="mySwiper  container slider4"
      >    
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img4} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img6} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img2} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img5} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img1} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img3} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img4} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img6} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img2} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img5} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img1} alt="banner-image" /> </div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img2"><img src={img3} alt="banner-image" /> </div>
                    </SwiperSlide>              
        </Swiper>
    </>
  );
}