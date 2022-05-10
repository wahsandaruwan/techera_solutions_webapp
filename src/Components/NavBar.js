import { BiMenuAltLeft } from "react-icons/bi"
import NavMenu from "./NavMenu"

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <NavMenu />
                <div className="menu-toggle-btn"><BiMenuAltLeft /></div>
            </nav>
        </>
    )
}

export default NavBar