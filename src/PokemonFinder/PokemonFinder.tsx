import React, { ChangeEvent, useEffect, useState } from 'react';
import { Generation, Generations, LocationArea, LocationAreaEncounter, MainClient, NamedAPIResource, PokemonClient } from  'pokenode-ts';
import './PokemonFinder.scss';
import KantoCanvas from './KantoCanvas';

interface Pokemon extends NamedAPIResource{
	sprite: string;
	id: number;
}

type Position = {
	x: number;
	y: number;
}

function PokemonFinder() {
	const [pokemonsList, setPokemonList] = useState<Pokemon[]>([]);
	const [suggestedPokemons, setSuggestedPokemons] = useState<Pokemon[]>([]);
	const [activeRoutes, setActiveRoutes] = useState<string[]>([]);
	const [pokemonText, setPokemonText] = useState<string>("");
	const [testboxStyle, setTestboxStyle] = useState<React.CSSProperties>({});
	const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
	const [mapPosition, setMapPosition] = useState<Position>({x: 0, y: 0});

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
		setActiveRoutes([]);
		setPokemonText(newInput);
		if (newInput === '') {
			setSuggestedPokemons([]);
			return;
		}
		var newSuggestions = pokemonsList.filter(pokemon => pokemon.name.substring(0, newInput.length) === newInput);
		setSuggestedPokemons(newSuggestions);
	}

	function handlePokemonClicked(pokemon: Pokemon) {
		setSuggestedPokemons([]);
		setPokemonText(pokemon.name);
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

	function handleMapDrag(e: React.MouseEvent<HTMLDivElement>) {
		e.preventDefault();
		// TODO
		// - set map boundary so that it can't drag after reaching the window's boundary
		if(isMouseDown) {
			var newX = e.movementX;
			var newY = e.movementY;
			setMapPosition(prev => ({
				x: prev.x + newX,
				y: prev.y + newY
			}))
		}
	}

	return (
		<div className="pokemon-finder-container">
			<div className='p-searchbar-container'>
					<input className="p-searchbar-input" onChange={handleInputChange} value={pokemonText}></input>
					<ul className='p-searchbar-suggestions'>
						{suggestedPokemons.map(pokemon => 
							<li className='p-searchbar-suggestion' key={pokemon.name} onClick={() => handlePokemonClicked(pokemon)}>
								<p>{pokemon.name}</p>
								<img src={pokemon.sprite} alt={pokemon.name}/>
							</li>
						)}
					</ul>
			</div>
			<div className='pokemon-finder'>
				<div 
					className='map-canvas-container' 
					onMouseDown={() => setIsMouseDown(true)} 
					onMouseUp={() => setIsMouseDown(false)} 
					onMouseMove={(e) => handleMapDrag(e)}
					style={{transform: 'translate3d(' + mapPosition.x + 'px,' + mapPosition.y + 'px,' +'0px)'}}
				> 
					<KantoCanvas activeRoutes={activeRoutes}/>
					<div className='mapBG'/>
				</div>
			</div>
		</div>
	);
}

export default PokemonFinder;

// TODO
// this dones't happen all the time??
// when zoomed out to ~<67% the routes dont draw at the correct positions please look into this issue when you have the time thank you :)