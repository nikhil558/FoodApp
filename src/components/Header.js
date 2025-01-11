import {LOGO_IMG} from "../../utils/constants"
const Header = () =>{
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
            </div>
            

        </div>
    )
}

export default Header