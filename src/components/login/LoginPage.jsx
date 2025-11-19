import { Link, useNavigate } from "react-router";
import './login.css'
import { useRef } from "react"
export default function LoginPage(){

        const userEmail =  useRef()
        const userPassword =  useRef()
        const navigate =  useNavigate()

   

    function onSubmit(e){

        e.preventDefault()

        if( userEmail.current.value == localStorage.getItem('user email') && userPassword.current.value == localStorage.getItem('user password')){
                alert('login succuss')

                setTimeout(()=>{
                    navigate('/')
                },1500)

                localStorage.setItem('userName',localStorage.getItem('user name'))
                window.dispatchEvent(new Event("storage"))

        }else{
            alert('try again')
        }

    }

    return(

        <>
        
        <form onSubmit={onSubmit} className="login">
                <h2>login</h2>
                <input  ref={userEmail} type="email"  required  placeholder="your email"/>
                <input  ref={userPassword} type="password"  required  placeholder="password"/>
                <div    className="remember">
                    <div className="check">
                        <input type="checkbox" id="check" />
                        <label htmlFor="check">Remember Me</label>
                    </div>
                    <a href="#">forgot password ?</a>
                </div>
                <button className="submit" type="submit"> login</button>
                <span className="or">or</span>
                <div className="loginWithSocial">
                    <a href="#"><i className="fa-brands fa-facebook"></i> facebook</a>
                    <a href="#"><i className="fa-brands fa-google-plus-g"></i> google</a>
                </div>
                <p><span>Don't Have an Account ?</span> <Link to={'./register'} >register</Link> </p>
        </form>
        
        </>
    )
}