import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'




const OneProduct = () => {
    const [product, setProduct] = useState({})
    const nav = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
        .then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const deleteProduct = (productID) => {
      axios.delete(`http://localhost:5000/api/products/${productID}`)
      .then((res) => {
          console.log(res.data)
          setProduct(prevProducts => prevProducts.filter(product => product._id !== productID))
          nav('/products')
      })
      .catch((err) => {
          console.log(err)
      })
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.price}</Card.Subtitle>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Link to="/products">All Products</Link><p></p>
        <button onClick={() => deleteProduct(product._id)}>Delete</button>
      </Card.Body>
    </Card>
 
    
  )
}

export default OneProduct