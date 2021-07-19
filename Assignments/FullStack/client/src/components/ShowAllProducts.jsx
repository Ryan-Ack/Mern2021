import React from 'react'
import { Link } from '@reach/router'

const ShowAllProducts = ({ productList }) => {
    // const ShowAllProducts = (props) => {
    //     console.log(props) // make sure it's an array


    // productList.map((titl, idx) => {
    //     console.log(titl.title)
    //     console.log(idx)
    // })


    return (
        <>
            {/* <Link to={`/api/pirates/${product._id}`}></Link> */}
            {
                // {productList[idx].title} == {titl.title}
                productList.map((titl, idx) => {
                    // props.productList.map((titl, idx) => {
                    return <p key={idx}>Key: {idx} values: <Link to={`/products/${titl._id}`}> {titl.title}</Link> </p>


                })
            }
        </>
    )
}

export default ShowAllProducts


// ==================  How Are these the same??????????? 


// export default props => {
//     return (
//         <div>
//             {props.productList.map((product, index) => {
//                 return <p key={index}>Title: {product.title} </p>
//             }
//             )}
//         </div>
//     )
// }