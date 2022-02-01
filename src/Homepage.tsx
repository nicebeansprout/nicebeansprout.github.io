import React from 'react';
import Landing from './Landing'
import './App.scss';

class Homepage extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			scrollIndex: 0,
			eyesX: 20,
			eyesY: 10
		}
	}

	componentDidMount() {
		this.setState({scrollIndex: 0})
		window.onscroll = function() {
			console.log("hi")
		};
		setInterval(() => {
			this.blinkAnimation();
		}, 5500);
	}

	handleScroll() {
		console.log("hi")
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


	render() {
		return (
			<div className="root" onMouseMove={(e) => this.calculateEyes(e)} onMouseOut={() => this.resetEyes()}>
				<div id='calculableMe' onMouseOver={() => this.setState({mouthO: true})} onMouseOut={() => this.setState({mouthO: false})}>
					<div id='mouth' className={this.getMouthState()}></div>
					<div id='me' style={{left: this.state.spriteX}}/>
					<div id='eyesContainer'>
						<div id='eyes' style={{left: this.state.eyesX, top: this.state.eyesY}}/>
					</div>
				</div>
				<div id='portfolioHub' className='page-container'></div>
				<Landing scrollIndex={this.state.scrollIndex} eyesPosition={{x: this.state.eyesX, y: this.state.eyesY}}/>

			</div>
		);
	}
}

export default Homepage;
