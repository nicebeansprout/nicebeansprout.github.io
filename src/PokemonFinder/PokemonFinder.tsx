import React, { ChangeEvent, useEffect, useState } from 'react';
import { Generation, Generations, LocationArea, LocationAreaEncounter, MainClient, NamedAPIResource, PokemonClient } from  'pokenode-ts';
import './PokemonFinder.scss';
import KantoCanvas from './KantoCanvas';

interface Pokemon extends NamedAPIResource{
	sprite: string;
	id: number;
}

function PokemonFinder() {
	const [pokemonsList, setPokemonList] = useState<Pokemon[]>([]);
	const [suggestedPokemons, setSuggestedPokemons] = useState<Pokemon[]>([]);
	const [activeRoutes, setActiveRoutes] = useState<string[]>([]);

	const pokemonApi = new PokemonClient();

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
		data.pokemon_species.forEach(d => {
			(async () => {
				await pokemonApi.getPokemonByName(d.name)
					.then((x) => {
						newPokemons.push({
							name: d.name,
							url: d.url,
							sprite: x.sprites.versions['generation-vii'].icons.front_default || '',
							id: x.id,
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

	function handlePokemonClicked(pokemon: Pokemon) {
		(async() => {
			await pokemonApi.getPokemonLocationAreaById(pokemon.id).then((locationArea: LocationAreaEncounter[]) => {
				const routes: string[] = [];
				locationArea.forEach(area => {
					if (area.location_area.name.includes("kanto")) {
						routes.push(area.location_area.name);
					}
				})
				setActiveRoutes(routes);
			})
		})();
	}

	return (
		<div className="pokemon-finder-container">
			<div className='pokemon-finder'>
				<KantoCanvas activeRoutes={activeRoutes}/>
				<div className='p-searchbar-container'>
					<input className="p-searchbar-input" onChange={handleInputChange}></input>
					<ul className='p-searchbar-suggestions'>
						{suggestedPokemons.map(pokemon => 
							<li className='p-searchbar-suggestion' key={pokemon.name} onClick={() => handlePokemonClicked(pokemon)}>
								<p>{pokemon.name}</p>
								<img src={pokemon.sprite} alt={pokemon.name}/>
							</li>
						)}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default PokemonFinder;