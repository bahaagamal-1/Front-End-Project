import './footer.css'

export default function TopFooter(){


    return(

        <>
        
        <div className="container topFooter">
            <div className="box">
                <h4>Contact info</h4>
                <div className="info">
                    <p><i className="fa-solid fa-location-dot"></i> 123 Street, Old Trafford, NewYork, USA</p>
                    <p><i className="fa-regular fa-envelope"></i> info@sitename.com</p>
                    <p><i className="fa-solid fa-mobile-screen"></i> +20123456789</p>
                </div>
                <div className ="social">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fa-brands fa-google-plus-g"></i>
                    <i className="fa-brands fa-youtube"></i>
                    <i className="fa-brands fa-instagram"></i>
                </div>
            </div>
            <div className="box">
                <h4>Useful Links</h4>
                <ul>
                    <li>about us</li>
                    <li>FAQ</li>
                    <li>location</li>
                    <li>affiliates</li>
                    <li>contact</li>
                </ul>
            </div>
            <div className="box">
                <h4>My Account</h4>
                <ul>
                    <li>my account</li>
                    <li>discount</li>
                    <li>retruns</li>
                    <li>orders history</li>
                    <li>order tracking</li>
                </ul>
            </div>
            <div className="box">
                <h4>Subscribe Our Newsletter</h4>
                <p>If you want to get an email from us every time we have a new special offer, then sign up here!</p>
                <div className="input">
                    <input type="email" placeholder="enter email address" />
                    <button type="submit"><i className="fa-solid fa-envelope-open"></i></button>
                </div>
            </div>
        </div>
        
        </>
    )
}