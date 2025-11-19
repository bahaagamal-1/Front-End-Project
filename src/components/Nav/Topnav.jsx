import { Link } from 'react-router'
import style from './navbar.module.css'
import { useEffect, useState } from 'react'


export default function Topnav(){

    const [userName, setUserName] = useState(localStorage.getItem('userName'))

        useEffect(() => {
            const handleStorageChange = () => {
                setUserName(localStorage.getItem('userName'))
                }
                    window.addEventListener('storage', handleStorageChange)
                 return () => window.removeEventListener('storage', handleStorageChange)
        }, [])

    
    const localCheck = localStorage.getItem('userName')

    function Logout(){

        localStorage.removeItem('user email')
        localStorage.removeItem('user name')
        localStorage.removeItem('user password')
        localStorage.removeItem('userName')
        setUserName(null) 

    }
    return(
        <>
        <div className={style.topnav}>
            <div className={style.leftside}>
                <select className="lang">
                    <option value="en"> english</option>
                    <option value="ar">arabic</option>
                </select>
                <select className={style.coins}>
                    <option className={style.coins} value="usd">usd</option>
                    <option className={style.coins} value="le">le</option>
                </select>
                <span className="phone">
                    <i className="fa-solid fa-mobile-screen"></i> +20123456789
                </span>
            </div>
            <div className={style.rightside}>
                    <span className={style.hover}>
                       <i className="fa-solid fa-shuffle"></i> compare
                    </span>
                    <span className={style.hover}>
                        <i className="fa-regular fa-heart"></i> wishlist
                    </span>

                        {localCheck? 
                        <>
                            <span><i class="fa-solid fa-user"></i> {localCheck} </span>

                            <button onClick={Logout} className='logout'>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                            </button>
                        </>
                         :

                        <Link to={'./login'} className={style.hover}>
                            <i className="fa-solid fa-user"></i> login
                        </Link>
                        }
                    
            </div>
        </div>
        
        </>
    )

}