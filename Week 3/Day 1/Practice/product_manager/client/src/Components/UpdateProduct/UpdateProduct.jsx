import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const UpdateProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const nav = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const updateHandler = (e) => {
        e.preventDefault()
        axios.patch(`http://localhost:5000/api/products/${id}`, {
            title: title,
            price: price,
            description: description
        })
        .then((res) => {
            console.log('Updated Successfuly')
            nav('/products')
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <div>
        <h3>UpdateProduct</h3>
        <Form onSubmit={updateHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </div>
  )
}

export default UpdateProduct