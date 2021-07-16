import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Link, navigate, Redirect } from '@reach/router'

const Form = ({ type, id }) => {

    const [starwars, setStarwars] = useState("")

    const [categoryList, setCategoryList] = useState("")
    const [numberList, setNumberList] = useState("")

    const categories = (Object.keys(categoryList))
    const selectedNumber = (Object.keys(numberList))

    const [selectType, setSelectType] = useState(null);
    const [selectId, setSelectId] = useState(1);


    // const [typeNow, setTypeNow] = useState(type)
    // console.log("first type" + type)

    useEffect(() => {

        // axios.get(`https://swapi.dev/api/${type}/${id}`)

        axios.get(`https://swapi.dev/api/`)
            .then(res => {
                // .then(res => {
                setCategoryList(res.data)
                console.log("Line 25 Display Details: " + Object.keys(res.data))
                // typeNow = setTypeNow(Object.keys(res.data + "." + type))
                // console.log("typeNow" + typeNow)
                setNumberList(Object.keys(res.data + "?." + type))
                // console.log("Line 25 Display Details: " + Object.keys(res.data + "?." + type + "?." + id))
                // console.log(type)
            })
            .catch((err) => console.log(err));


        // rerender page when category list is changed so the id's update in a second dropdown.
    }, [type, id]
    )




    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        navigate(`/${selectType}/${selectId}`)
        return (axios.get(`https://swapi.dev/api/${selectType}/${selectId}`)
            .then((response) => setStarwars(response.results)),
            console.log(selectType, selectId))
    }



    return (
        <div>
            {/* {JSON.stringify(type)} = if an Object ///// see below for "primitives"*/}
            <p>Type: {selectType}</p>
            <p>Number: {selectId}</p>

            {/* <p>Categories: {categories},  </p> */}
            {/* {
                categories.map((category, idx) => {
                    return (<p key={idx}> {idx + 1}: {category}</p>)
                })
            } */}
            <form onSubmit={handleFormSubmit}>
                {/* e => setCategory(e.target.value) */}
                <select onChange={(e) => setSelectType(e.target.value)}>
                    <option value="defaultValue" selected disabled hidden>Select . . .</option>
                    {
                        categories.map((category, idx) => {
                            return (<option key={idx} >{category}</option>)
                        })
                    }
                </select>
                <input type="text" placeholder="Type a number: 1-40" onChange={(e) => setSelectId(e.target.value)} />

                {/* ==========logic not working for change of category resulting in change of how many options there are.============ */}
                {/* onClick={(e) => setTypeNow(typeNow)} */}
                {/* <select onChange={(e) => setSelectId(e.target.value)}>
                    {
                        selectedNumber.map((number, idx) => {
                            //changes index value to a number in the dropdown menu
                            let num = parseInt(number) + 1
                            return (<option key={idx}>{num} </option>)
                        })
                    }
                </select> */}

                <input type="submit" />
            </form>
        </div>
    )
}

export default Form
