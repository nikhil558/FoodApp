import {LOGO_IMG} from "../../utils/constants"
import { useState } from "react"
const Header = () =>{
    const [btnSwitch, setBtnSwitch] = useState("Login")
    return(
        <div className="header-container">
            <div>
                <img alt="logo" className="logo" src={LOGO_IMG}/>
            </div>
            <div className="nav-container">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                <button onClick={()=>{
                    btnSwitch === "Login" ? setBtnSwitch("Logout") : setBtnSwitch("Login")

                }}> {btnSwitch} </button>
            </div>
            
        </div>
    )
}

export default Header