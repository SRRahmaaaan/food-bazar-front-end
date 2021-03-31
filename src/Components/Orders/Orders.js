import React, { useEffect, useState } from 'react'
import "./Orders.css"
import "./Orders.css"
import Navbar from "../Navbar/Navbar"
import { useAuth } from '../Authentication/AuthContext'
import OrderBox from './OrderBox'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const {currentUser} = useAuth()
    useEffect(() => {
        fetch("http://localhost:5000/getSpecific?email=" + currentUser.email, {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setOrders(data))
    }, [currentUser.email])
    return (
        <>
            <Navbar />
                <h1 className="text-center mt-4">Your Have { orders.length} Orders </h1>
            <div className="order-container">
                {
                    orders.map((order) => <OrderBox key={order._id} order={order}></OrderBox>)
                }
            </div>
        </>
    )
}

export default Orders
