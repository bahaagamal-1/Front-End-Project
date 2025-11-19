import { useEffect, useState } from 'react'
import './productDetails.css'
import {  useParams } from 'react-router'
import { useCart } from '../context/cartContext'
// import { useCart } from '../context/cartContext'


export default function ProductDetails(){
    const {id} = useParams()

     const [product,setProduct] = useState({})
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=> res.json())
        .then(data => setProduct(data))
    },[])
    
    const { addTocart} = useCart()
    return(


        <>
        <div className="container productDetails">
            <div className="box">
                <img src={product.image} alt="product-image" />
                <h4> {product.title} </h4>
                <p> {product.description} </p>
                <span> {product.price}$ </span>
                <span> 4.1 <i className="fa-solid fa-star"></i> </span>
                <button onClick={()=> addTocart(product) } className='btnDetails'> add to cart </button>
            </div>
        </div>
        
        
        </>
    )
}