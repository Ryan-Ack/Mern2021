// https://www.digitalocean.com/community/tutorials/4-uses-of-javascripts-arraymap-you-should-know
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// 
// 




import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Link, navigate, Redirect } from '@reach/router'
const DisplayDetails = ({ type, id }) => {



    const [starwars, setStarwars] = useState({});
    const categories = (Object.keys(starwars))
    // array of strings to be used as values for the categories
    let startArr = Object.values(starwars)
    // useEffect(() => {
    //     console.log("useEffect is Running")
    //     fetch('https://swapi.dev/api/people/')
    //         .then(response => response.json())
    //         .then(response => console.log(response.results))
    // })

    // const displaySWAPIDetails = () => {
    useEffect(() => {

        axios.get(`https://swapi.dev/api/${type}/${id}`)
            // axios.get(`https://swapi.dev/api/`)
            .then(res => {

                setStarwars(res.data)
                console.log("Line 25 Display Details: " + Object.keys(res.data))
            })
            .catch((err) => alert("There was an Error looking up that information! " + err));

    }, [type, id]
    )


    console.log(startArr)
    // if it contains the unique keywords ex) "height" 
    if (starwars) {
        return (
            <div>
                {/* displays keys, but not values. */}
                {
                    categories.map((category, idx, start) => {
                        return (
                            <>
                                <p key={idx}> {idx + 1}: {category}:  {startArr[idx]} </p>
                            </>)

                    })

                }
            </div>
        )
    } else {
        return (<p>There was an Error finding that Droid</p>
        )
    }





    return (
        <div>
            <h2>Details about Selected (through routing) </h2>
            {/* Planets, Spaceships, Vehicles, People, Films and Species */}
            <p>Attributes: loop through and display::{starwars.name}</p>
            {/* <select placeholder="Select . . ." >
                <option value="" selected disabled hidden>Select . . .</option>
                <option value="Hello">Hello</option>
                <option value="Goodbye">Goodbye</option>
                <option value="TTFN">TTFN</option>

            </select> */}
            {/* <button onClick={displaySWAPIDetails}>Click For starwars</button> */}

            {/* <p>JSON: {JSON.stringify(starwars)}</p>
            <p>Categories: {categories},  </p> */}

            {/* map over an array (variable that was pulled out of an object using "Object.keys()" function) */}
            {
                categories.map((category, idx) => {
                    return (<p key={idx}> {idx + 1}: {category} {category?.[0]}</p>)
                })
            }






        </div>
    )
}

export default DisplayDetails
