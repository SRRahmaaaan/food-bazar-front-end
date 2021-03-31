import React from 'react'
import "./Admin.css"
import {FaCogs, FaPlus} from "react-icons/fa"
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Food Bazar</h1>
            <FaCogs id="icon-1" /> <Link to="/admin">Manage Products</Link>
            <FaPlus id="icon-2" /> <Link to="/addProduct">Add Product</Link>
        </div>
    )
}

export default Sidebar
