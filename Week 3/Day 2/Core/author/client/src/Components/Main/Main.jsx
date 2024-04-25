import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import './style.css'

const Main = () => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/authors')
        .then((res) => {
            console.log(res.data)
            setAuthors(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    const deleteAuthor = (authorID) => {
        axios.delete(`http://localhost:5000/api/authors/${authorID}`)
          .then((res) => {
            console.log(res.data)
            setAuthors(prevAuthors => prevAuthors.filter(author => author._id !== authorID))
          }).catch(err => {
            console.log(err)
          })
      }

  return (
    <div className='container'>
        <h3>Favorite authors</h3>
        <Link to={'/authors/new'}>Add an author</Link>
        <p>We have quotes by :</p>
       
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {authors.map((author) => (
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                            <Link to={`/authors/${author._id}/edit`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={() => deleteAuthor(author._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>

    </div>
  )
}

export default Main