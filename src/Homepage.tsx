import React from 'react';
import './App.scss';

class Homepage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			spriteX: 0,
			mouthO: false,
			eyesX: 20,
			eyesY: 10,
			greeting: 'Hello'
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.blinkAnimation();
		}, 5500);

		this.setState({
			greeting: this.getGreeting()
		})
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

	resetEyes() {
		this.setState({eyesX: 20, eyesY: 10})
	}

	getMouthState() {
		return this.state.mouthO ? 'surprised' : '';
	}

	render() {
		return (
			<div className="root">
				<div id='landing' className='page-container' onMouseMove={(e) => this.calculateEyes(e)} onMouseOut={() => this.resetEyes()}>
					<div id='greetings'>
						<h1>{this.state.greeting}!</h1>
						<div className='links'>
							<a href="https://etsy.com/shop/nicebeansproutstudio" target="_blank" rel="noopener noreferrer">Etsy</a>
							<a href="https://ko-fi.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Kofi</a>
							<a href="https://twitter.com/nicebeansprout" target="_blank" rel="noopener noreferrer">Twitter</a>
						</div>
					</div>
					<div id='calculableMe' onMouseOver={() => this.setState({mouthO: true})} onMouseOut={() => this.setState({mouthO: false})}>
						<div id='mouth' className={this.getMouthState()}></div>
						<div id='me' style={{left: this.state.spriteX}}/>
						<div id='eyesContainer'>
							<div id='eyes' style={{left: this.state.eyesX, top: this.state.eyesY}}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Homepage;
