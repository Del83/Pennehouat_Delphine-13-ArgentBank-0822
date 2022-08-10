import "../../styles/Layout.css"
import logo from "../../assets/img/argentBankLogo.png"
import { NavLink } from "react-router-dom";

/**
 * Header layout
 * @component
 */
 export default function Header () {

    return (
        <section className="header">
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/home" >               
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </NavLink>
                <div>
                    <NavLink className="main-nav-item" to="/sign_in" >
                        <i className="fa fa-user-circle"></i>Sign In 
                    </NavLink>
                </div>
            </nav>
        </section>
        
    )
}

