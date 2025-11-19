import { useCart } from "../context/cartContext"
import './cart.css'

export default function Cart(){

   const { cartItems ,increaseQuantity,decreaseQuantity,removeItem } = useCart()

    const total = cartItems.reduce((total,item) => total + item.price * item.quantity,0)

    return(

        <>
        <h1 className="cartTitle" >your cart</h1>
        <div className="container carts">
            {cartItems.length === 0 && <h1 className="empty">Cart is empty</h1>}
            {cartItems.map((item)=>{
                return(
                    <div className="box-cart" key={item.id}>
                        <div className="img">
                            <img src={item.image} alt="product-image" />
                            <div className="text">
                                <h4>{item.title}</h4>
                                <div> {item.price}$ </div>
                                <div className="inc-dec">
                                    <button onClick={()=> decreaseQuantity(item.id)}>-</button>
                                    <div>{item.quantity}</div>
                                    <button onClick={()=> increaseQuantity(item.id)}>+</button>
                                </div>
                                    <div className="totalPrice">
                                     <span>total price : </span>   {item.price * item.quantity}$
                                    </div>
                            </div>
                        </div>
                        <button className="deletItem" onClick={()=> removeItem(item.id)} ><i className="fa-regular fa-trash-can"></i></button>
                    </div>
                )

            })}
        </div>
        <h2 className="total-products container"><span> total price :</span> {total}$</h2>
        </>
    )
}