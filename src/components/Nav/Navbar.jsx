import Botnav from "./Botnav";
import Topnav from "./Topnav";
import style from './navbar.module.css'
 
export default function Navbar(){
    return(
        <>
        <header className={style.header}>
            <div className="container">
                <Topnav/>
                <Botnav/>
            </div>
         </header>  
        </>
    )
}