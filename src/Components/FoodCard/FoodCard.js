import React from 'react'
import "./FoodCard.css"
import { Link } from "react-router-dom"
import {FaUserFriends} from "react-icons/fa"

const FoodCard = ({food}) => {
    const {desc, imageURL, _id} = food
    const {name, forPeople, price} = desc
    return (
        <div className="food-card">
            <img src={imageURL} alt="FoodImage" />
            <h3>{ name }</h3>
            <div className="content">
                <p><FaUserFriends className="user-icon" /> { forPeople }</p>
                <p>৳{ price }</p>
            </div>
            <Link to={`/checkout/${_id}`}>Buy Now</Link>
        </div>
    )
}

export default FoodCard
