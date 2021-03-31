import React, { useState } from 'react'
import {FaTrash} from "react-icons/fa"

const ManagingOneProduct = ({ manageProduct }) => {
    const { desc, _id } = manageProduct
    const [none, setNone] = useState(false)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteSpecific/${id}`, {
            method:"DELETE"
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                setNone(true)
            }
        })
        
    }
    return (
        <div className={none ? "d-none" : "product"}>
            <h4>{ desc.name }</h4>
            <FaTrash className="delete-icon" onClick={() => handleDelete(_id)} />
        </div>
    )
}

export default ManagingOneProduct
