import React from 'react';
import './App.scss';

class Homepage extends React.Component {
	render() {
		return (
			<div id='landing' className='section-container hero-banner'>
				<div
					id='landing-back'
					className='landing-container parallax-container'></div>
				<div
					id='landing-middle'
					className='landing-container parallax-container'></div>
				<div id='landing-front' className='landing-container'>
					<div className='clouds'></div>
					<a href='https://ko-fi.com/nicebeansprout' target='_blank'>
						<div className='banner'></div>
					</a>
				</div>
			</div>
		);
	}
}

export default Homepage;
