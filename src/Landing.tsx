import React from 'react';
import './App.scss';

class Landing extends React.Component<any, any> {	
	constructor(props: any) {
		super(props);
		this.state = {
			spriteX: 0,
			mouthO: false,
			eyesX: 20,
			eyesY: 10,
			greeting: 'Hello',
			scrollIndex: 0
		};
	}

	componentDidMount() {
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

	render() {
		return (
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
		);
	}
}

export default Landing;
