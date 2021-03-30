import React from 'react'
import {Link} from "react-router-dom"
import logo from "./navbarLogo.png"
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="siteLogo"/>
            </div>
            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar
