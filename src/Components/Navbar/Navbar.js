import React, { useState } from 'react'
import {Link} from "react-router-dom"
import logo from "./navbarLogo.png"
import "./Navbar.css"
import {Button, Alert} from "react-bootstrap"
import { useAuth } from '../Authentication/AuthContext'

const Navbar = () => {
    const { currentUser, logOut } = useAuth()
    const [error, setError] = useState("")
    async function handleLogout () {
        try {
            await logOut()
        } catch {
            setError("Failed to logout")
        }
    }
    return (
        <nav>
            {error && <Alert variant="danger">{ error }</Alert>}
            <div className="logo">
                <img src={logo} alt="siteLogo"/>
            </div>
            <div className="navLinks">
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/admin">Admin</Link>
                {
                    currentUser ? <Button className="logout-button" variant="dark" onClick={handleLogout}>Log Out</Button> :
                    <Link to="/login">Login</Link>
                }
            </div>

        </nav>
    )
}

export default Navbar
