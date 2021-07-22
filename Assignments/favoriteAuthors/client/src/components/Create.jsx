import { navigate, Link } from '@reach/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Create = (props) => {

    // const { passedName, onSubmitProp } = props   // only used with Reusable components
    // const [name, setName] = useState(passedName) // used this way WITH reusable components
    const [name, setName] = useState("") // used this way without reusable components
    const [dbErrors, setDBErrors] = useState([])



    // const submitClick = (e) => {
    //     e.preventDefault();
    //     onSubmitProp({ name })
    // }
    // =======================Submit Click without reusing components==============
    const submitClick = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/authors", { name })
            .then(res => {
                console.log(res.data);
                // setName("");
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

    const cancelClick = () => {
        navigate("/")
    }
    return (
        <div>
            <Link to="/">Home</Link>
            {/* <form onSubmit={submitClick}>
                <div>
                    <label> Name: {JSON.stringify(name)}</label>
                    <br />
                    <input type="text" placeholder="Author Name Here" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <button onClick={cancelClick}> Cancel </button>
                <button > Submit </button>
            </form> */}
            {/* =================Individual form without reusing components==================== */}
            {dbErrors.map((err, index) => <p key={index}>{err}  </p>)}
            <form onSubmit={submitClick}>
                <div>
                    <br />
                    <input type="text" placeholder="Author Name Here" value={name} onChange={(e) => { setName(e.target.value) }} />
                </div>
                <button onClick={cancelClick}> Cancel </button>
                <button > Submit </button>
            </form>
        </div>
    )
}

export default Create
