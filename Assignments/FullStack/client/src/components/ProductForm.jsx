import React, { useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const ProductForm = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")


    const handleSubmitProductForm = (e) => {
        e.preventDefault();
        console.log("Your form has been submitted")

        axios.post(`http://localhost:8000/api/products/new`, {
            title, price, description
        })
            .then(res => console.log("Response", res))
            .catch(err => console.log("Error: ", err))
        // setTitle("");
        // setPrice(0);
        // setDescription("");
        // navigate("/products/all")

    }


    return (

        <div>
            <form onSubmit={handleSubmitProductForm}>
                <div>
                    <label>Title: </label>
                    <input type="text" onChange={e => { setTitle(e.target.value) }} />
                </div>
                <div>
                    <label>Price: </label>
                    <input type="text" onChange={e => { setPrice(e.target.value) }} />
                </div>
                <div>
                    <label>Description: </label>
                    <input type="text" onChange={e => { setDescription(e.target.value) }} />
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}

export default ProductForm
