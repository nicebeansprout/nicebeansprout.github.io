import React, { CSSProperties, useState } from 'react';
import './App.scss';
import Landing from './Landing'
import Portfolio from './Portfolio';
import Me from './Me';

function Homepage() {
	const [pageIndex, setPageIndex] = useState(0);
  const [activePortfolio, setActivePortfolio] = useState(-1);
	const [canIScroll, setCanIScroll] = useState(true);

	function handleWheel(e: any) {
		// if (e.target.id === 'me' || activePortfolio !== 1){
		// 	return false;
		// }
		// down
		if (e.deltaY === 100) {
			setActivePortfolio(1)
			setPageIndex(1)
		//up
		} else if (e.deltaY === -100) {
			window.scrollTo({top: 0});
			setPageIndex(0)
			setActivePortfolio(-1)
		}
	}

	function handleScroll(e: any) {
		var userOnPortfolio = pageIndex === 1;
		if (userOnPortfolio && activePortfolio !== 1){
			setCanIScroll(false);
			return false;
		}
	}
	
	return (
		<div className="root" 
			// onMouseMove={(e) => this.calculateEyes(e)} 
			// onMouseOut={() => this.resetEyes()}
			onWheel={(e) =>handleWheel(e)}
			onScroll={(e) => handleScroll(e)}
			style={{overflow: canIScroll ? 'auto': 'hidden'}}
		>
		<Me activePortfolio={activePortfolio}/>
		<a href='/#/wisdom' id='cats' target='_blank 'rel="noopener noreferrer">
			<div className='cat' id='KC'></div>
			<div className='cat' id='Chickidee'></div>
		</a>
		<Landing />
		<Portfolio activePage={activePortfolio} setActivePortfolio={(i) => {setActivePortfolio(i)}}/>
		</div>
	);
}

export default Homepage;
