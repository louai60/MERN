import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Link } from 'react-router-dom';
import './style.css'



const CreateAuthors = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState([])
    
    const nav = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()

        const newObj = {
            name
        }

        axios.post('http://localhost:5000/api/authors/new', newObj)
        .then((res) => {
            console.log(res.data._id)
            nav('/authors')
        })
        .catch(err => {
            console.log(err.response.data.errors.title)
            const ServerErrors = err.response.data.errors
            const errArray = []
            for (const key of Object.keys(ServerErrors)) {
                errArray.push(ServerErrors[key].message)
            }
            setError(errArray)

        })
    }
  return (
    <div className='container'>
        <h3>Favorite Authors</h3>
        <Link to={'/authors'}>Home</Link><br/>
        <span>add a new author</span>
        <div className="main__form">
            <form onSubmit={submitHandler}>
                {
                    error.map((err) => {
                        return <p style={{color : 'red'}}>{err}</p>
                    })
                }
                <div className="name">
                    <label>Name:</label>
                </div>  
                <div className="input">
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value)}}/>
                </div>
                <Link to={'/authors'}>
                    <button className='btn'>Cancel</button>{' '}
                </Link>
                <button className='btn'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default CreateAuthors