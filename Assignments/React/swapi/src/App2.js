import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Router, Link, navigate, Redirect } from '@reach/router'

import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import DisplayDetails from './components/DisplayDetails';
import Form from './components/Form';
import NewDetails from './components/NewDetails';

function App() {

    return (









        <div className="App">

            <Home />

            <NewDetails />


            <Router>

            </Router>
        </div>
    );
}

export default App;


//===================================== instructor way
// return (
//     <div className="App">
//       <h1>SWAPI</h1>

//       <Search />
//       <Router>
//         <Display path="/:type/:id/"/>
//       <Fail path="/404"/>
//       </Router>
// {/* 
//       <Router>
//         <Other path="/:type/:id/"/>
//       </Router> */}

//     </div>
//   );

// Create a dropdown menu that allows the user to choose the resource they are looking for
//  Next to the dropdown menu, create an input field that accepts a number that will be used to query a specific id.
//  Add a button to allow them to send a request to the API.
//  On submission, navigate to the appropriate route and render at least 4 attributes for that specific resource.
//  If the request is unsuccessful, create an error message that says "These aren't the droids you're looking for" with a picture of Obi-Wan Kenobi.
//  NINJA BONUS: If the resource is "people", output the name of the character's homeworld (you may need to make another request)
//  NINJA BONUS: If the resource is "people" render a link to their homeworld (a specific planet). It's okay if the link text is simply "homeworld."
//  NINJA BONUS: Add additional resources aside from people and planets to the dropdown.