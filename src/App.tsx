import React, { cloneElement, useState } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import './App.scss';
import './PageTransition.scss';
import Cats from './Cats';
import Wisdom from './Wisdom';
import PokemonFinder from './PokemonFinder';
import Landing from './Landing';
import ArtWorks from './ArtWorks';
import WebWorks from './WebWorks';
import { CSSTransition } from 'react-transition-group';

const PAGES = [
	{	path: "/", value: 0}, 
	{	path:"/art", value: -1}, 
	{	path:"/dev", value: 1}
];

const routes =[
	{path: '/', name:'Landing', Component: Landing},
	{path: '/art', name:'Art', Component: ArtWorks},
	{path: '/dev', name:'Dev', Component: WebWorks},
	{path: '/cats', name:'Cats', Component: Cats},
	{path: '/wisdom', name:'Wisdom', Component: Wisdom},
	{path: '/pokemonFinder', name:'Pokemon', Component: PokemonFinder}
];

function App() {
		const timeout = {enter: 400, exit: 800}
		const [currentPage, setCurrentPage] = useState(0);
		const [currentDirection, setCurrentDirection] = useState('')

		function getDirection(route: any): string {
			if (!route) {
				return '';
			}
			var goingTo = PAGES.find(page => page.path === route.path)
			var direction = '';
			if (goingTo) {
				if (goingTo.value === currentPage) {
					return currentDirection;
				}
				if (goingTo.value > currentPage) {
					direction = 'left'
				} else {
					direction = 'right'
				}
				setCurrentPage(goingTo.value);
				setCurrentDirection(direction);
			}
			return direction;
		}

	 function getExitDirection() {
		return currentDirection === 'left' ? 'right': 'left'
	 }

		return (
			<div className={'App ' + 'exit-sliding-' + getExitDirection()}>
				<HashRouter>
						{routes.map(({path, Component}) => (
							<Route key={path} exact path={path}>
								{({match}) => (
									<CSSTransition 
										key={path}
										in={match != null}
										timeout={timeout}
										classNames='slider'
										unmountOnExit
										mountOnEnter
									>
										<div className={getDirection(match)}>
											<Component/>
										</div>
									</CSSTransition>
								)}
							</Route>
						))}
					</HashRouter>
				</div>
		);
}

export default App;