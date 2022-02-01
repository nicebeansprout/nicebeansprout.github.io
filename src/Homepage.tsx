import React from 'react';
import './App.scss';
import WebWorks from './WebWorks';
import ArtWorks from './ArtWorks';

class Homepage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			scrollIndex: 0,
			eyesX: 20,
			eyesY: 10,
			bubbleX: 0,
			activePortfolio: 1,
			canIScroll: true
		}
	}

	componentDidMount() {
		this.setState({
			scrollIndex: 0, 
			greeting: this.getGreeting()})

		setInterval(() => {
			this.blinkAnimation();
		}, 5500);

	}

	handleWheel(e: any) {
		if (e.target.id === 'me' || this.state.activePortfolio !== 1){
			return false;
		}
		// down
		if (e.deltaY === 100) {
			this.setState({
				scrollIndex: 1
			})
		//up
		} else if (e.deltaY === -100) {
			window.scrollTo({top: 0});
			this.setState({
				scrollIndex: 0
			})
		}
	}

	handleScroll(e: any) {
		var userOnPortfolio = this.state.scrollIndex === 1;
		if (userOnPortfolio && this.state.activePortfolio !== 1){
			this.setState({canIScroll: false})
			return false;
		}
	}
	
	calculateEyes(e: React.MouseEvent) {
		var maxLeft = 45;
		var maxTop = 20;

		var x, y;

		var mouseX = e.clientX;
		var mouseY = e.clientY;

		var windowW = window.innerWidth;
		var windowH = window.innerHeight;

		var ratioX = maxLeft / windowW;
		var ratioY = maxTop / windowH;

		x = (mouseX * ratioX);
		y = (mouseY * ratioY);
		
		this.setState({
			eyesX: x,
			eyesY: y
		})
	}
	getCalculableMePosition(): number {
		var userOnPortfolio = this.state.scrollIndex === 1;
		var mePosition = -50;
		if (userOnPortfolio) {
			if (this.state.activePortfolio !== 1) {
				mePosition = -800;
			} 
			else {
				mePosition = -280;
			}
		}
		return mePosition;
	}

	resetEyes() {
		this.setState({eyesX: 20, eyesY: 10})
	}
	
	blinkAnimation() {
		var x = this.state.spriteX;
		const speed = 100;
		const interval = setInterval(() => {
			if (x > -1000) {
				x = x - 500;
			} else {
				x = 0;
				clearInterval(interval);
			}
			this.setState({spriteX: x})
		}, speed)
	}

	getMouthState() {
		return this.state.mouthO ? 'surprised' : '';
	}

	getGreeting() {
		var date = new Date();
		var time = date.getHours();
		var greeting = "Hello";

		if (time > 3 && time < 12){
			greeting = "Good morning"
		}
		else if (time >= 12 && time < 18){
			greeting = "Good afternoon"
		}
		
		else if (time >= 18 || time <= 3){
			greeting = "Good evening"
		}
		return greeting
	}

	handlePortfolioClick(index: number) {
		this.setState({
			activePortfolio: index, 
			canIScroll: index === 1 ? true: false
		})
	}

	render() {
		return (
			<div className="root" 
				onMouseMove={(e) => this.calculateEyes(e)} 
				onMouseOut={() => this.resetEyes()}
				onWheel={(e) => this.handleWheel(e)}
				onScroll={(e) => this.handleScroll(e)}
				style={{overflow: this.state.canIScroll ? 'auto': 'hidden'}}
			>
			<div id='calculableMe' 
				onMouseOver={() => this.setState({mouthO: true})} 
				onMouseOut={() => this.setState({mouthO: false})}
				style={{bottom: this.getCalculableMePosition()}}
			>
				<div id='mouth' className={this.getMouthState()}></div>
				<div id='me' style={{left: this.state.spriteX}}/>
				<div id='eyesContainer'>
					<div id='eyes' style={{left: this.state.eyesX, top: this.state.eyesY}}/>
				</div>
			</div>
			<div id='landing' className='page-container'>
				<div id='greetings'>
					<h1>{this.state.greeting}!</h1>
					<div className='links'>
						<a href="https://etsy.com/shop/nicebeansproutstudio" target="_blank" rel="noopener noreferrer">Etsy</a>
						<a href="https://ko-fi.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Kofi</a>
						<a href="https://twitter.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Twitter</a>
					</div>
				</div>
			</div>
			<div id='portfolio-hub' className={'page-container active-page-' + this.state.activePortfolio}>
				<div id='portfolio-art' className='portfolio-page'>
					<ArtWorks/>
					<div className="returnToCenter" onClick={() => this.handlePortfolioClick(1)}>x</div>
				</div>
				<div id='portfolio-center' className='portfolio-page'>
					<div id='artlink' 
					className='portfolio-link'onClick={() => this.handlePortfolioClick(0)}>Art Works</div>
					<div id='devlink' className='portfolio-link' 
					onClick={() => this.handlePortfolioClick(2)}>Dev Works</div>
					<div id='aboutlink' className='portfolio-link'>About Me</div>
				</div>
				<div id='portfolio-dev' className='portfolio-page'>
					<WebWorks />
					<div className="returnToCenter" onClick={() => this.handlePortfolioClick(1)}>x</div>
				</div>
			</div>
			</div>
		);
	}
}

export default Homepage;
