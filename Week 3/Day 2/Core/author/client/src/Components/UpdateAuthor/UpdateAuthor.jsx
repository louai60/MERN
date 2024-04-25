import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


const UpdateNote = () => {
    const [name, setName] = useState("")

    // Handel ERRORS 
    const [error, setError] = useState([])


    const nav = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/authors/${id}`)
            .then((res) => {
                console.log(res.data)
                setName(res.data.name)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])

    const UpdateHandler = (e) => {
        e.preventDefault()

        const newObj = {
            name
        }
        axios.patch(`http://localhost:5000/api/authors/${id}`, newObj)
            .then((res) => {
                console.log(res)
                nav("/authors")
            })
            .catch(err => {
                console.log(err.response.data.errors.name)
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
            <span>Edit this author</span>
            <div className="main__form">
                <form onSubmit={UpdateHandler}>
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

export default UpdateNote