import React, { useState, useEffect } from 'react'
import { Link } from "@reach/router"
// import axios from 'axios'
// import Create from './Create'

const Details = (props) => {
    const { id } = props




    return (
        <div>
            <Link to="/"> Home </Link> | <Link to={`/edit/${id}`}>Edit This Author</Link>
            <p>{JSON.stringify(props)}</p>
            {/* <Create /> */}


        </div>
    )
}

export default Details
