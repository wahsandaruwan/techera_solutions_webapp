import { BiMenuAltLeft } from "react-icons/bi"

const NavBar = () => {
    return (
        <>
            <nav className="nav-bar">
                <div className="logo">
                    <img src="/assets/logo.png" alt="" />
                </div>
                <div className="menu-toggle-btn"><BiMenuAltLeft /></div>
            </nav>
        </>
    )
}

export default NavBar