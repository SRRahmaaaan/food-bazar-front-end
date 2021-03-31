import React from 'react'
import "./Orders.css"

const OrderBox = ({order}) => {
    const {date, user, food} = order
    return (
        <div className="order-card">
            <img src={food.imageURL} alt="foodImage"/>
            <div className="order-description">
                <p>Order Date : { date }</p>
                <p>User Email : { user }</p>
                <p>Food Name : { food.desc.name}</p>
                <p>Food Quantity : { food.desc.forPeople}</p>
                <p>Food Price : ৳ { food.desc.price }</p>
            </div>
        </div>
    )
}

export default OrderBox
