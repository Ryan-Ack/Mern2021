import React, { useEffect, useState } from 'react'
import { Link, navigate } from "@reach/router"
import axios from 'axios'
// import Create from './Create'


const Update = (props) => {
    const { id } = props
    // const { name } = props
    const [dbErrors, setDBErrors] = useState([])

    // const [author, setAuthor] = useState()
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setName(res.data.name)
            })
    }, [])

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, { name })
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(err => {
                console.log("Form not Submitted")
                // console.log("error", err)
                const errorResponse = err.response.data.errors
                const errorArr = []
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setDBErrors(errorArr)
            })
    }

    return (
        <div>
            <Link to="/"> Home </Link>

            {/* <p>{JSON.stringify(name)}</p>*/}


            {dbErrors.map((err, index) => <p key={index}>{err}  </p>)}
            <form onSubmit={updateAuthor}>
                <div>
                    <label>Name: </label>
                    <br />
                    <input type="text" placeholder="Author Name Here" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                {/* <button onClick={cancelClick}> Cancel </button> */}
                <button > Submit </button>
            </form>
            {/*============================ This is for reusable components===================== */}
            {/* <Create onSubmitProp={updateAuthor} passedName={name} /> */}

        </div>
    )
}

export default Update
