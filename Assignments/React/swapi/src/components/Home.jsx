import React from 'react'

const Home = ({ data }) => {


    const myData = data
    return (
        <div>
            <h1>Star Wars API!!</h1>
            <p>JSON: {JSON.stringify(data)}</p>
        </div>
    )
}

export default Home
