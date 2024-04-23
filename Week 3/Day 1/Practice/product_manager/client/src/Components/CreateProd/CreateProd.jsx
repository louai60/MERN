import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AllProducts from '../AllProducts/AllProducts';



const CreateProd = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const nav = useNavigate()

    const submitHandler = (e) => {
      e.preventDefault()


      axios.post('http://localhost:5000/api/products', {
        title: title,
        price: price,
        description: description
      })
      .then((res) => {
        console.log('created Successfuly!')
        nav("/products/" + res.data._id)
      })
      .catch((err) => {
        console.log(err)
      })
    }

  return (
    <>
    <h3>Create Product</h3>
      
    <Form onSubmit={submitHandler}>
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
    <br /><br />
    <AllProducts />
    
    </>
  )
}

export default CreateProd