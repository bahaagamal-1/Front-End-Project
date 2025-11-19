import img1 from './banner4.jpg'
import img2 from './banner5.jpg'
import './products.css'


export default function Banner2(){


    return(

        <>
            <div className=" container banner2">
                <div className="bannerDetailsOne">
                    <img src={img2} alt="" />
                    <div className="textDetails">
                        <span>Super Sale</span>
                        <h4>New Collection</h4>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
                <div className="bannerDetailsTwo">
                    <img src={img1} alt="" />
                    <div className="textDetails">
                        <h4>New Season</h4>
                        <span>Sale 40% Off</span>
                        <a href='#'>Shop Now</a>
                    </div>
                </div>
            </div>

        </>
    )


}