import {LOGO_IMG} from "../../utils/constants"
import { useState } from "react"
import { Link } from "react-router"
const Header = () =>{
    const [btnSwitch, setBtnSwitch] = useState("Login")
    return(
        <div className="header-container">
            <div>
                <img alt="logo" className="logo" src={LOGO_IMG}/>
            </div>
            <div className="nav-container">
                <ul>
                    <Link to="/" className="nav-list">
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className="nav-list">
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact" className="nav-list">
                        <li>Contact Us</li>
                    </Link>
                
                    <li className="nav-list" >Cart</li>
                </ul>
                <button onClick={()=>{
                    btnSwitch === "Login" ? setBtnSwitch("Logout") : setBtnSwitch("Login")
                }}> {btnSwitch} </button>
            </div>
            
        </div>
    )
}

export default Header