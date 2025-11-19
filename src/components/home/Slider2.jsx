
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import './products.css'
import style from './home.module.css'
import { Link } from "react-router";
import { useCart } from "../context/cartContext";
export default function Slider2() {
const swiper = useSwiper()
const [product,setProduct]= useState([])
const swiperRef = useRef(null);

    useEffect(()=>{
        
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data=> setProduct(data))

    },[])

    const {addTocart}= useCart()
  return (
    <>
    <div className="container custom">
        <h1 className={style.headProduct}>Trending items</h1>
        <i onClick={()=> swiperRef.current.slideNext()} className="fa-solid fa-arrow-right right"></i>
        <i onClick={()=> swiperRef.current.slidePrev()} className="fa-solid fa-arrow-left left"></i>
      <Swiper 
       onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
        }}
      navigation={{
        nextEl:'.right',
        prevEl:'.left'
      }}
      breakpoints={
        {
          1250:{
            slidesPerView:4
          },
          850:{
            slidesPerView:3
          },
          650:{
            slidesPerView:2
          },
          300:{
            slidesPerView:1
          }
        }
      }
      slidesPerView={4}
      spaceBetween={30}
      loop= {true}
      modules = {[ Navigation ]}
      className="mySwiper productsContain "
      >
            
         {product.slice(0,8).map((item)=>{
                    return(
                    <SwiperSlide key={item.id}>
                        <div className="box" >
                            <img src={item.image} alt="productImage" />
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                            <div className="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            
                            <div className="details">
                                <div className="icons">
                                    <div className="icon"><i className="fa-solid fa-shuffle"></i></div> 
                                    <Link to={`/product/${item.id}`}  className="icon" ><div><i className="fa-solid fa-magnifying-glass-plus"></i></div></Link> 
                                    <div className="icon"><i className="fa-regular fa-heart"></i></div> 
                                </div>
                                <button onClick={()=> addTocart(item)} className="btn-addtocart"> <i className="fa-solid fa-cart-shopping"></i> add to cart</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })}
               
        </Swiper>
      </div>
    </>
  );
}