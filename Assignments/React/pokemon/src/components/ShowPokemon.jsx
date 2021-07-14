import React, { useState, useEffect } from 'react'
import axios from 'axios'




const ShowPokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);

    // useEffect(() => {
    //     console.log("useEffect is Running")
    //     fetch('https://pokeapi.co/api/v2/pokemon')
    //         .then(response => response.json())
    //         .then(response => setPokemons(response.results))

    const showThemPokes = () => {
        //set ?limit=#### to override 20 display limit
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=9001').then(response => setPokemons(response.data.results))
    }

    // }, []) //include for useEffect without button to render list on start

    return (
        <div>
            <button onClick={showThemPokes}>Fetch Pokemon</button>
            {pokemons.length > 0 && pokemons.map((pokemon, idx) => {
                return (<div key={idx}> {idx + 1}:  {pokemon.name}</div>)
            })}
        </div>
    )
}

export default ShowPokemon
