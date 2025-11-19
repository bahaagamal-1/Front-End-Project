import './footer.css'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img4 from './img4.png'
import img5 from './img5.png'

export default function BotFooter(){
    return(

        <>
            <div className="container botFooter">
                <p> &copy; 2020 All Rights Reserved by Bestwebcreator </p>
                <div className="payment">
                    <img src={img1}alt="payment-image" />
                    <img src={img2}alt="payment-image" />
                    <img src={img3}alt="payment-image" />
                    <img src={img4}alt="payment-image" />
                    <img src={img5}alt="payment-image" />
                </div>
            </div>
        
        </>

    )
}