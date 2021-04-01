import React, { useEffect, useState } from 'react'
import "./FoodContainer.css"
import FoodCard from "../FoodCard/FoodCard"
import Loading from "../Loading/Loading"

const FoodContainer = () => {
    const [allFoods, setAllFoods] = useState([])
    useEffect(() => {
        fetch("https://serene-castle-82467.herokuapp.com/allFoods")
            .then(response => response.json())
            .then(data => setAllFoods(data))
    },[])
    return (
        <section className="food-container">
            {
                allFoods.length === 0 && <Loading />
            }
            {
                allFoods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
            }
        </section>
    )
}

export default FoodContainer
