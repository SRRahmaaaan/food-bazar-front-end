import React from 'react'
import "./Admin.css"
import Sidebar from './Sidebar'
import { Card, Form, Button } from "react-bootstrap"
import Functions from "./Functions"

const AddProduct = () => {
    const {handleChange, values, handleSubmit, uploadImageUrl} = Functions()
    return (
        <section className="admin-container">
            <Sidebar />
            <Card className="bg-info">
                <Card.Body>
                    <h2 className="text-center mb-5 text-white">Add Your Food</h2>
                    <Form className="w-50 m-auto" onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Food Name</Form.Label>
                            <Form.Control  type="text" required onChange={handleChange} value={values.name} name="name" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control  type="text" required onChange={handleChange} value={values.forPeople} name="forPeople" placeholder="how many people can eat this food" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food Price</Form.Label>
                            <Form.Control  type="text" required onChange={handleChange} value={values.price} name="price" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Food Image</Form.Label>
                            <Form.Control type="file" required onChange={uploadImageUrl} />
                        </Form.Group>
                        <Button type="submit" variant="success" className="w-100">Add Your Food</Button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    )
}

export default AddProduct
