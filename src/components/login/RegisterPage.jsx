import { useRef } from "react"
import { Link, useNavigate } from "react-router"

export default function Register(){

    const userName =  useRef()
    const userEmail =  useRef()
    const userPassword =  useRef()
    const userConfirmPassword =  useRef()
    const navigate =  useNavigate()


    function onSubmit(e){
         e.preventDefault()
        localStorage.setItem('user name', userName.current.value )
        localStorage.setItem('user email', userEmail.current.value )
        localStorage.setItem('user password', userPassword.current.value )

        setTimeout(()=>{
           navigate('../login') 
        },1500)
    }


    return(

        <>
        <div className="form-container">
             <form  className="login" onSubmit={onSubmit}>
                <h2>Create an Account</h2>
                <input ref={userName} type="text" required placeholder="enter your name" />
                <input ref={userEmail} type="email"  required  placeholder=" enter your email"/>
                <input ref={userPassword} type="password"  required  placeholder="password"/>
                <input ref={userConfirmPassword} type="password"  required  placeholder="confirm password"/>
                <div className="remember">
                    <div className="check">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check">I agree to terms & Policy.</label>
                    </div>
                </div>
                <button  className="submit" type="submit">register</button>
                <span className="or">or</span>
                <div className="loginWithSocial">
                    <a href="#"><i className="fa-brands fa-facebook"></i> facebook</a>
                    <a href="#"><i className="fa-brands fa-google-plus-g"></i> google</a>
                </div>
                <p><span>already have an account ?</span> <Link to={'../login'} >login</Link> </p>
            </form>
        </div>
        </>
    )
}