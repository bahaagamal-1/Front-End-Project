import { createContext, useContext, useEffect, useState } from "react";

const cartContext = createContext();

export function CartProvider({children}){

    const textLocalStorge = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

    const [cartItems,setCartitems]=  useState(textLocalStorge)

    const totalQuantity = cartItems.reduce((total,item)=> total + item.quantity,0)

    useEffect(()=>{
            localStorage.setItem('cartItems',JSON.stringify(cartItems))
    },[cartItems])


   function addTocart(product){
        setCartitems((curr)=>{
                const itemsIncart = curr.find((item)=> item.id === product.id)
                    if(itemsIncart){
                      return curr.map((item)=>
                                item.id === product.id ? {...item, quantity: item.quantity + 1 } : item
                        )
                    }else{
                        return [...curr , {...product , quantity: 1}]
                    }

        })

   }

   function increaseQuantity(id){

        setCartitems((curr)=>{
            return   curr.map((item)=>
                     item.id === id ? {...item , quantity: item.quantity + 1}: item
                )
        })

   }

   function decreaseQuantity(id){

        setCartitems((curr)=>{
             return   curr.map((item)=>
                      item.id === id ? {...item , quantity: item.quantity - 1}: item
                ).filter((item)=> item.quantity > 0)
        })

   }

   function removeItem(id){
        setCartitems((curr)=>{
         return  curr.filter((item)=> item.id !== id)
        })
   }

    return(

        <>
            <cartContext.Provider  value={{cartItems,addTocart,increaseQuantity,decreaseQuantity,removeItem ,totalQuantity}}>

                {children}
            </cartContext.Provider>
        </>
    )

}

export const useCart = ()=> useContext(cartContext)