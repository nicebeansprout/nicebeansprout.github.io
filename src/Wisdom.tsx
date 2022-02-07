import React, { useState } from 'react'
import './App.scss'
import axios from 'axios';
import pascalQuotes from './data/quotes';

const baseURL = "https://pokeapi.co/api/v2"
const maxIDGen1 = 151;

function Wisdom() {
  const [pokemon, setPokemon] = useState({
    name: "",
    sprites: {
      front_default: ""
    }
  });

  const [randomQuote, setRandomQuote] = useState("");

  React.useEffect(() => {
    const randomID = Math.floor(Math.random() * maxIDGen1 + 1)
    axios.get(baseURL + '/pokemon/' + randomID)
      .then((response) => {
        setPokemon(response.data);
    })

    setRandomQuote(pascalQuotes[Math.floor(Math.random() * pascalQuotes.length + 1)]);
  }, []);

  return (
    <div className="App">
      <div className="pool">
        <h2>{pokemon.name}'s wisdom for today:</h2>
        <img className="pokemon-image" src={pokemon.sprites.front_default}/>
        <p className="wisdom">{randomQuote}</p>
       </div>
    </div>
  )
}

export default Wisdom
