import React, { useEffect, useState } from 'react'
import ManagingOneProduct from './ManagingOneProduct'
import Loading from "../Loading/Loading"
import "./Admin.css"

const ManageProduct = () => {
    const [manageProducts, setManageProducts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allFoods")
        .then(response => response.json())
        .then(data => setManageProducts(data))
    }, [])
    return (
        <div className="products">
            {
                manageProducts.length === 0 && <Loading />
            }
            {
                manageProducts.map((manageProduct) => <ManagingOneProduct key={manageProduct._id} manageProduct={manageProduct}></ManagingOneProduct>)
            }
        </div>
    )
}

export default ManageProduct
