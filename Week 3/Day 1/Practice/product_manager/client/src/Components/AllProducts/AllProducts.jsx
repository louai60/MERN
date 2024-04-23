import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import './style.css'



const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    const deleteProduct = (productID) => {
        axios.delete(`http://localhost:5000/api/products/${productID}`)
        .then((res) => {
            console.log(res.data)
            setProducts(prevProducts => prevProducts.filter(oneProduct => oneProduct._id !== productID))
        })
        .catch((err) => {
            console.log(err)
        })
    }

  return (
    <>
        <hr />
        <h3>AllProducts</h3>
        <hr />
        <div className='container'>
            <div className="cards">
                {products.map((oneProduct) => (
                    <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Link to={`/products/${oneProduct._id}`}>
                        <Card.Title>{oneProduct.title}</Card.Title>
                    </Link>
                    <Card.Subtitle className="mb-2 text-muted">{oneProduct.price}</Card.Subtitle>
                    <Card.Text>
                        {oneProduct.description}
                    </Card.Text>
                    <Link to={`/products/${oneProduct._id}/edit`}>Update</Link>
                    <button onClick={() => deleteProduct(oneProduct._id)}>Delete</button>
                    </Card.Body>
                </Card>
                ))}
            </div>
        </div>
    </>
  )
}

export default AllProducts