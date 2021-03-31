import React from 'react'
import "./Admin.css"
import {FaCogs, FaPlus, FaHome} from "react-icons/fa"
import {Link} from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Food Bazar</h1>
            <Link to="/admin"><FaCogs className="icons" /> Manage Products</Link>
            <Link to="/addProduct"><FaPlus className="icons" /> Add Product</Link>
            <Link to="/"><FaHome className="icons" /> Home</Link>
        </div>
    )
}

export default Sidebar
