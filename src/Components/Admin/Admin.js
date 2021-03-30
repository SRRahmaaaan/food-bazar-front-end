import React from 'react'
import "./Admin.css"
import ManageProduct from './ManageProduct'
import Sidebar from './Sidebar'

const Admin = () => {
    return (
        <section className="admin-container">
            <Sidebar />
            <ManageProduct />
        </section>
    )
}

export default Admin
