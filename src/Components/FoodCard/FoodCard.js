import { Button } from "react-bootstrap"
import React from 'react'
import "./FoodCard.css"

const FoodCard = ({food}) => {
    const {desc, imageURL, _id} = food
    const {name, forPeople, price} = desc
    const handleBuy = (id) => {
        console.log(id)
    }
    return (
        <div className="food-card">
            <img src={imageURL} alt="FoodImage" />
            <h3>{ name }</h3>
            <p>{ forPeople }</p>
            <p>৳{ price }</p>
            <Button onClick={() => handleBuy(_id)}>Buy Now</Button>
        </div>
    )
}

export default FoodCard
