import React, { ChangeEvent, useState } from 'react';
import { Pokemon } from './PokemonFinder';

type SearchbarProps = {
  handlePokemonClicked: (pokemon: Pokemon) => void,
  setActiveRoutes: (routes: string[]) => void,
  pokemonsList: Pokemon[]
}

function PokeSearchbar(props: SearchbarProps) {
	const [suggestedPokemons, setSuggestedPokemons] = useState<Pokemon[]>([]);
	const [pokemonText, setPokemonText] = useState<string>("");
  
	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const newInput = e.currentTarget.value;
		props.setActiveRoutes([]);
		setPokemonText(newInput);
		if (newInput === '') {
			setSuggestedPokemons([]);
			return;
		}
		var newSuggestions = props.pokemonsList.filter(pokemon => pokemon.name.substring(0, newInput.length) === newInput);
		setSuggestedPokemons(newSuggestions);
	}

  function handlePokemonClicked(pokemon: Pokemon) {
		setSuggestedPokemons([]);
		setPokemonText(pokemon.name);
    props.handlePokemonClicked(pokemon);
  }

  function handlePokemonClear() {
		setPokemonText("");
    setSuggestedPokemons([]);
		props.setActiveRoutes([]);
  }
  
  return (
    <div className='p-searchbar-container'>
      <div className='p-searchbar-combo-box'>
        <div className='p-searchbar-input-container'>
          <div className='p-searchbar-input'>
            <input onChange={handleInputChange} value={pokemonText}/>
            </div>
          {(pokemonText.length > 0) ? <button className='p-searchbar-x-button' onClick={handlePokemonClear}/> : null}
        </div>
        {
          suggestedPokemons.length > 0 && (
            <ul className='p-searchbar-suggestions'>
              {suggestedPokemons.map(pokemon => 
                <li className='p-searchbar-suggestion' key={pokemon.name} onClick={() => handlePokemonClicked(pokemon)}>
                  <p>{pokemon.name}</p>
                  <img src={pokemon.sprite} alt={pokemon.name}/>
                </li>
              )}
          </ul>
          )
        }
      </div>
    </div>
  );
}

export default PokeSearchbar;