import img from './logo_dark.png'
import style from './navbar.module.css'
import './navbar.css'
import { useRef } from 'react'
import { Link } from 'react-router'
import { useCart } from '../context/cartContext'

export default function Botnav(){
   const menu = useRef()
    const {totalQuantity }= useCart()
   function openMenu(){
        menu.current.classList.toggle('active')
   }

    return(

        <>
            <div className={style.botnav}>
                <div className={style.logo}>
                   <Link to={'/'}> <img src={img} alt="logo" /></Link>
                </div>
                <div ref={menu}  className="links ">
                    <ul className={style.list}>
                        <li className='active'><Link to={'/'}>home</Link></li>
                        <li><a href="#">pages</a></li>
                        <li><a href="#">products</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">shop</a></li>
                        <li><a href="#">contact us</a></li>
                    </ul>
                </div>
                <div className={style.icons}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <Link to={'/cart'}><i className="fa-solid fa-cart-shopping cart"> <span> {totalQuantity} </span> </i></Link>
                    <i  onClick={()=> openMenu()} className="fa-solid fa-bars menu"></i>
                </div>
            </div>
        </>
    )

}