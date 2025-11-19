import img1 from './new1.jpg'
import img2 from './new2.jpg'
import img3 from './new3.jpg'
import img4 from './new4.jpg'
import img5 from './new5.jpg'
import img6 from './new6.jpg'
import { Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import './products.css'
import style from './home.module.css'

export default function Slider3() {

  return (
    <>
      <Swiper 
        breakpoints={
        {
          1200:{
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
      spaceBetween={0}
      loop= {true}
       autoplay={{
                    delay: 2000,
                }}
      modules={[Autoplay]}
      className="mySwiper slider3"
      >    
                    <SwiperSlide >
                      <div className="slide-img"><img src={img4} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img6} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img2} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img5} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img1} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img3} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img4} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img6} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img2} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img5} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img1} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>               
                    <SwiperSlide >
                      <div className="slide-img"><img src={img3} alt="banner-image" /> <div className="style"></div></div>
                    </SwiperSlide>   

                    <div className="instagram">
                      <h5>instagram</h5>
                      <span>@shoppingzone</span>
                    </div>            
        </Swiper>
    </>
  );
}