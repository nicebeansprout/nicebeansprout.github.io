import React, { ChangeEvent, useEffect, useState } from 'react';
import { Generation, Generations, MainClient, NamedAPIResource, PokemonClient } from  'pokenode-ts';
import './PokemonFinder.scss';

interface Pokemon extends NamedAPIResource{
	sprite: string;
}

function PokemonFinder() {

	const [pokemonsList, setPokemonList] = useState<Pokemon[]>([]);
	const [suggestedPokemons, setSuggestedPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		(async () => {
			const api = new MainClient();
			await api.game.getGenerationById(Generations.GENERATION_I)
				.then(data => {
					loadSprites(data);
				});
		})();
	},[])

	function loadSprites(data: Generation) {
		var newPokemons: any = [];
		data.pokemon_species.map(d => {
			(async () => {
				const pokemonApi = new PokemonClient();
				await pokemonApi.getPokemonByName(d.name)
					.then((x) => {
						newPokemons.push({
							name: d.name,
							url: d.url,
							sprite: x.sprites.versions['generation-vii'].icons.front_default || '',
						})
					})
				}
			)();
		})
		setPokemonList(newPokemons)
	}

	function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
		const newInput = e.currentTarget.value;
		if (newInput === '') {
			setSuggestedPokemons([]);
			return;
		}
		var newSuggestions = pokemonsList.filter(pokemon => pokemon.name.substring(0, newInput.length) === newInput);
		setSuggestedPokemons(newSuggestions);
	}

	return (
		<div className='pokemon-finder'>
			<div className='p-searchbar-container'>
				<input className="p-searchbar-input" onChange={handleInputChange}></input>
				<ul className='p-searchbar-suggestions'>
					{suggestedPokemons.map(pokemon => 
						<li className='p-searchbar-suggestion'>
							<p>{pokemon.name}</p>
							<img src={pokemon.sprite}/>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default PokemonFinder;