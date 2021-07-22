import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from '@reach/router'
// import Create from './Create'
// import Update from './Update'
import '../App.css';

const Main = (props) => {
    const { id } = props

    const [authors, setAuthors] = useState([])

    const tableStyle = {
        backgroundColor: "teal",
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [])

    // const createAuthor = (name) => { // This function has been added to accomodate reusable components
    //     axios.post("http://localhost:8000/api/authors", { name })
    //         .then(res => {
    //             setAuthors([...authors, res.data]) // This has been changed to accomodate reusable components
    //             // setName("");
    //             // navigate("/")
    //         })
    //         .catch(err => console.log("error", err))
    //     console.log("Form Submitted")
    // }


    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/` + id)
            .then(res => {
                console.log(id)
                setAuthors(authors.filter(author => author._id !== id))
            })
            .catch(err => console.log(err))

    }


    // const sorttablebycolumn = (table, column, asc = true) => {
    //     const dirModifier = asc ? 1 : -1;
    //     const tBody = table.body[0];
    //     const rows = Array.from(tBody.querySelectorAll("tr"))

    //     const sortedRows = rows.sort((a, b) => {
    //         console.log(a)
    //         console.log(b)
    //     })
    // }


    // const sortedAuthors = authors
    // const sortedArr = []
    // const hello = sortedAuthors.sort((a, b) => (a.author > b.author) ? 1 : -1).map((author, i) => sortedArr.push(author.name))
    // console.log(sortedArr)


    return (
        <div >
            {/* <p>{JSON.stringify(hello)}</p> */}
            {/* <Link to="/new">Add an Author</Link>
            <Create onSubmitProp={createAuthor} passedName="" hidden="true" />
            <Update authors={authors} />
            <table >
                <thead style={tableStyle} >
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={tableStyle}>
                    {authors.map((author, idx) => {
                        return (
                            <tr key={idx}>
                                <td>
                                    <Link to={`/${author._id}`}>
                                        Author's Name: {author.name}
                                    </Link>
                                </td>
                                <td>
                                    Author's Index: {idx}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>

            </table> */}
            {/* ============================This Is used if NOT using reusable components=============== */}
            <Link to="/new">Add an Author</Link>

            <table className="table table-sortable">
                <thead style={tableStyle} >
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody style={tableStyle}>
                    {authors.map((author, idx) => {
                        return (
                            <tr key={idx}>
                                <td>
                                    <Link to={`/${author._id}`}>
                                        {author.name}
                                    </Link>
                                </td>
                                <td>
                                    {/* Author's Index: {idx}   */}
                                    <button onClick={() => deleteAuthor(author._id)}> Delete </button>  <Link to={`/edit/${author._id}`}> <button> Edit</button> </Link>

                                </td>
                            </tr>
                        )
                        // }).sort((trA, trB) => 1) //will sort by last entered (time)
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main
