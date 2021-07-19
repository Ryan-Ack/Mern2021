import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetails = (props) => {
    const { id } = props
    const [oneProduct, setOneProduct] = useState({})


    // if (props.productList._id === props.productList.id) {
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err => console.log(err))

    }, [id])
    // const singleproduct = Object.entries(oneProduct.product)
    // console.log(singleproduct)

    // console.log(oneProduct[0].title)
    return (
        <>
            {
                oneProduct ? (<div>
                    < p > {JSON.stringify(oneProduct)}</p >
                    <p>Title: {oneProduct.title}</p>
                    <p>Product: {oneProduct.price}</p>
                    <p>Description: {JSON.stringify(oneProduct.description)}</p>

                </div >) : <p>loading</p>
            }

        </>
    )
}

// Display here: {
// oneProduct.product.map((key, i) => { return <p key={i}>{JSON.stringify(oneProduct)}</p> })

// Works until refreshed. component "demounted"
// <p>{oneProduct.product[0].title}</p>
//     <p>{JSON.stringify(oneProduct.title)}</p>
// }
export default ProductDetails
