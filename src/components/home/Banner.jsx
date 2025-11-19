
import style from './home.module.css'

export default function Banner(){


    return(

        <>
            <div className={style.banners}>
                <div className={style.box}>
                    <i className="fa-regular fa-truck"></i>
                    <div className="boxText">
                        <h4>Delivery</h4>
                        <span>Worldwide</span>
                    </div>
                </div>
                <div className={style.box}>
                   <i className="fa-regular fa-money-bill-1"></i>
                    <div className="boxText">
                        <h4>Money Returns</h4>
                        <span>30 Days money return</span>
                    </div>
                </div>
                <div className={style.box}>
                    <i className="fa-solid fa-headphones"></i>
                    <div className="boxText">
                        <h4>27/4 Online Support</h4>
                        <span>Customer Support</span>
                    </div>
                </div>
                <div className={style.box}>
                    <i className="fa-solid fa-credit-card"></i>
                    <div className="boxText">
                        <h4>Payment Security</h4>
                        <span>Safe Payment</span>
                    </div>
                </div>
            </div>
        </>
    )

}