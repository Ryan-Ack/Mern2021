import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Link, navigate, Redirect } from '@reach/router'

import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import DisplayDetails from './components/DisplayDetails';
import Form from './components/Form';

function App() {

  const [data, setData] = useState("");

  const [categoryList, setCategoryList] = useState("")
  const [numberList, setNumberList] = useState("")


  // useEffect((type, id) => {

  //   // axios.get(`https://swapi.dev/api/${type}/${id}`)
  //   axios.get(`https://swapi.dev/api/`)
  //     .then(res => {
  //       setData(res.data)
  //       console.log("type: " + typeof res.data) //object .people == string

  //     })
  //     .catch((err) => console.log(err + "Mistake was made"));

  //   // rerender page when category list is changed so the id's update in a second dropdown.
  // }, []
  // )







  return (
    <div className="App">
      <Home path="/" data={data} />
      {/* <p>Data Here: {results}</p> */}
      <hr />
      {/* <NavBar /> */}
      <p>JSON = {JSON.stringify(data)}</p>
      <hr />

      <Form path="/:type/:id" />
      <hr />
      <Router>
        {/* <Home path="/:type/:id" data={data} /> */}
        <DisplayDetails path="/:type/:id" data={data} />


        {/* <DisplayDetails path="/people" /> */}

        {/* <DisplayDetails path="/details" />
        <DisplayDetails path="/planets" />
        <DisplayDetails path="/starships" />
        <DisplayDetails path="/vehicles" />
        <DisplayDetails path="/species" />
        <DisplayDetails path="/films" />
       */}

      </Router>

    </div>
  );
}

export default App;


// Create a dropdown menu that allows the user to choose the resource they are looking for
//  Next to the dropdown menu, create an input field that accepts a number that will be used to query a specific id.
//  Add a button to allow them to send a request to the API.
//  On submission, navigate to the appropriate route and render at least 4 attributes for that specific resource.
//  If the request is unsuccessful, create an error message that says "These aren't the droids you're looking for" with a picture of Obi-Wan Kenobi.
//  NINJA BONUS: If the resource is "people", output the name of the character's homeworld (you may need to make another request)
//  NINJA BONUS: If the resource is "people" render a link to their homeworld (a specific planet). It's okay if the link text is simply "homeworld."
//  NINJA BONUS: Add additional resources aside from people and planets to the dropdown.