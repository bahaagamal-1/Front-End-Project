import { useEffect, useState } from "react";
import style from './home.module.css'
import './products.css'
import { Link } from "react-router";
import { useCart } from "../context/cartContext";



export default function Products(){

const [product,setProduct]= useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data=> setProduct(data))

    },[])

   const { addTocart } =  useCart()

    return(

        <>
            <h1 className={style.headProduct}>Exclusive Products</h1>
            <div className="container productsContain" >
                {product.slice(0,8).map((item)=>{
                    return(
                        <div className="box" key={item.id}>
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
                                <button className="btn-addtocart" onClick={()=> addTocart(item)}> <i className="fa-solid fa-cart-shopping"></i> add to cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}