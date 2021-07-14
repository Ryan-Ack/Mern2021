import React from 'react'
import './App.css';
import ShowPokemon from './components/ShowPokemon';
import TimeDisplay from './components/TimeDisplay';

function App() {
  return (
    <div className="App">
      <h1>GET YOUR POKEMON!</h1>
      <TimeDisplay />
      <hr />
      <ShowPokemon />

    </div>
  );
}

export default App;


