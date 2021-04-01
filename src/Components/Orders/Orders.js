import React, { useEffect, useState } from 'react'
import "./Orders.css"
import "./Orders.css"
import Navbar from "../Navbar/Navbar"
import Loading from "../Loading/Loading"
import { useAuth } from '../Authentication/AuthContext'
import OrderBox from './OrderBox'

const Orders = () => {
    const [orders, setOrders] = useState([])
    const {currentUser} = useAuth()
    useEffect(() => {
        fetch("https://serene-castle-82467.herokuapp.com/getSpecific?email=" + currentUser.email, {
            method: "GET",
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => setOrders(data))
    }, [currentUser.email])
    return (
        <>
            <Navbar />
                <h1 className="text-center" style={{paddingTop:"90px"}}>Your Have <span className="text-success">{ orders.length}</span> Orders </h1>
            <div className="order-container">
                {
                    orders.length === 0 && <Loading />
                }
                {
                    orders.map((order) => <OrderBox key={order._id} order={order}></OrderBox>)
                }
            </div>
        </>
    )
}

export default Orders
