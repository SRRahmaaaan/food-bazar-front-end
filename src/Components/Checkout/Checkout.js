import React, { useEffect, useState } from 'react'
import {FaUserFriends, FaHome} from "react-icons/fa"
import "./Checkout.css"
import { useHistory, useParams } from 'react-router'
import { Table, Button } from 'react-bootstrap'
import { useAuth } from '../Authentication/AuthContext'


const Checkout = () => {
    const [oneFood, setOneFood] = useState({})
    const { id } = useParams()
    const history = useHistory()
    useEffect(() => {
        fetch(`https://serene-castle-82467.herokuapp.com/singleFood/${id}`)
        .then(response => response.json())
        .then(data => setOneFood(data))
    },[id])
    const {currentUser} = useAuth()
    const handleCheckout = () => {
        const newOrderedFood = {
            date: new Date().toDateString("dd/MM/YYYY"),
            user: currentUser.email,
            food: oneFood,
        }
        fetch("https://serene-castle-82467.herokuapp.com/orderedFood", {
            method: "POST",
            headers: { 'Content-Type': "application/json" },
            body:JSON.stringify(newOrderedFood)
        })
        .then(response => response.json)
        .then(data => {
            if(data) {
                history.push("/orders")
            }
        })
    }
    const { desc } = oneFood
    const handleHome = () => {
        history.push("/")
    }
    return (
        <>
            <div className="checkout">
                <FaHome onClick={handleHome} style={{fontSize:"1.5rem", color:"white", cursor:"pointer"}} />
                <h2>Checkout</h2>
                <div>
                    <Table striped hover variant="info"  className="table">
                        <thead>
                            <tr>
                                <th>Food Name</th>
                                <th>Food Quantity</th>
                                <th>Food Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{ desc?.name }</td>
                                <td><FaUserFriends style={{ fontSize: "1.5rem", marginTop:"-10px"}} /> { desc?.forPeople}</td>
                                <td>??? { desc?.price }</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <hr className="line" />
                <div className="total">
                    <p>Total</p>
                    <p>??? { desc?.price } TAKA...</p>
                </div>
                    <Button variant="success" className="ml-auto" onClick={handleCheckout} style={{width:"100px"}}>Checkout</Button>
            </div>
        </>
    )
}

export default Checkout
