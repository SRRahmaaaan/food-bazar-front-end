import React, { useEffect, useState } from 'react'
import "./FoodContainer.css"
import FoodCard from "../FoodCard/FoodCard"

const FoodContainer = () => {
    const [allFoods, setAllFoods] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/allFoods")
        .then(response => response.json())
        .then(data => setAllFoods(data))
    },[])
    return (
        <section className="food-container">
            {
                allFoods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
            }
        </section>
    )
}

export default FoodContainer