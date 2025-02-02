import {LOGO_IMG} from "../../utils/constants"
import { useState } from "react"
import { Link } from "react-router"
import useOnlineStatus from "../../utils/useOnlineStatus"

const Header = () =>{
    const [btnSwitch, setBtnSwitch] = useState("Login")
    return(
        <div className="flex justify-between shadow-lg pr-2">
            <div>
                <img alt="logo" className="w-24" src={LOGO_IMG}/>
            </div>
            <div className="flex">
                <h1 className="m-4 p-4">Online Status: {useOnlineStatus() ? "🥎" : "🏀"}</h1>
                <ul className="flex items-center">
                    <Link to="/" className="m-2 pr-2">
                        <li>Home</li>
                    </Link>
                    <Link to="/about" className="m-2 pr-2">
                        <li>About Us</li>
                    </Link>
                    <Link to="/contact" className="m-2 pr-2">
                        <li>Contact Us</li>
                    </Link>
                    <Link to="/grocery" className="m-2 pr-2">
                        <li> Grocery </li>
                    </Link>
                
                    <li className="m-2 pr-2" >Cart</li>
                </ul>
                <button className="bg-blue-700 px-2.5 my-6 h-10 rounded-lg" onClick={()=>{
                    btnSwitch === "Login" ? setBtnSwitch("Logout") : setBtnSwitch("Login")
                }}> {btnSwitch} </button>
            </div>
            
        </div>
    )
}

export default Header