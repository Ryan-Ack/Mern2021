import React, { useEffect, useState } from 'react'
import axios from 'axios'

const NewDetails = (props) => {

    const [starwars, setStarwars] = useState("")

    useEffect(() => {
        console.log("useEffect is Running")
        //wraps response (object) in a "div" that is ".data"
        axios.get('https://swapi.dev/api/people/1')
            // .then(response => response.json())
            //JSON will always come back with an object
            .then(response => setStarwars(response.data))
            .catch((err) => console.log(err))

    }, []) //include for useEffect without button to render list on start

    // const
    // 
    console.log(typeof starwars)




    return (
        <div>

            <p>JSON: {JSON.stringify(starwars?.name)}</p>
            {/* can only map over arrays. which a response is not. JSON = object */}
            {/* {
                starwars.data.map((starwar) => {
                    <p>{starwar}</p>
                })
            } */}

        </div>
    )
}

export default NewDetails
